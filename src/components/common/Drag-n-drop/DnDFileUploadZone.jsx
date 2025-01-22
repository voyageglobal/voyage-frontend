import { useCallback, useState, useEffect, memo } from 'react';
import { useDropzone } from 'react-dropzone';
import { ImagePlus } from 'lucide-react';
import { nanoid } from 'nanoid';
import DnDFileItem from './DnDFileItem';

const DnDFileUploadZone = ({
  onUpload,
  additionalStyle = '',
  additionalButtons = null,
  inputId = null,
  withItems = true,
}) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    acceptedFiles => {
      const newFiles = acceptedFiles.map(file => ({
        id: nanoid(),
        file,
        name: file.name,
        size: file.size,
        preview: URL.createObjectURL(file),
        status: 'success',
      }));

      setFiles(prev => [...prev, ...newFiles]);
      onUpload(newFiles);
    },
    [onUpload],
  );

  const removeFile = useCallback(file => {
    setFiles(prev => prev.filter(eachFile => eachFile.id !== file.id));
    URL.revokeObjectURL(file.preview);
  }, []);

  const renameFile = useCallback((file, newName) => {
    setFiles(prev =>
      prev.map(eachFile =>
        eachFile.id === file.id ? { ...eachFile, name: newName } : eachFile,
      ),
    );
  }, []);

  useEffect(
    () => () => files.forEach(file => URL.revokeObjectURL(file.preview)),
    [],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpg', '.jpeg', '.png'] },
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`relative mx-auto flex w-full cursor-pointer flex-col items-center justify-center border border-dashed border-dark-color bg-dark-color/45 p-4 ${additionalStyle}`}
      >
        <input id={inputId} {...getInputProps()} />
        <ImagePlus className="mb-2 h-20 w-20 text-light-color transition hover:text-orange-color" />
        <span className="text-light-color">
          Drop your image here, or browse
        </span>
        <span className="text-light-color/70">Supports: JPG, JPEG, PNG</span>
        {additionalButtons && (
          <div className="absolute bottom-2 right-2 flex gap-2">
            {additionalButtons()}
          </div>
        )}
      </div>

      {withItems && (
        <div className="mx-auto mt-4 max-w-4xl">
          {files.map(file => (
            <DnDFileItem
              key={file.id}
              file={file}
              status={file.status}
              onRemove={removeFile}
              onRename={renameFile}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(DnDFileUploadZone);
