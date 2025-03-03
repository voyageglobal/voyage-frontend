import { useCallback, useState, memo } from 'react';
import { useDropzone } from 'react-dropzone';
import { nanoid } from 'nanoid';
import ImagePlus from 'lucide-react/icons/image-plus';
import DnDFileItem from './DnDFileItem';

const DnDWithItemList = ({ id, onChange }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    acceptedFiles => {
      const newFiles = acceptedFiles.map(file => ({
        id: nanoid(),
        name: file.name,
        size: file.size,
        preview: URL.createObjectURL(file),
        status: 'success',
      }));

      setFiles(prev => [...prev, ...newFiles]);
      onChange(newFiles);
    },
    [onChange],
  );

  const onRename = useCallback((fileId, newName) => {
    setFiles(prev =>
      prev.map(file =>
        file.id === fileId ? { ...file, name: newName } : file,
      ),
    );
  }, []);

  const onRemove = useCallback(fileId => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  }, []);

  const onPreview = useCallback(filePreview => {
    if (filePreview) window.open(filePreview, '_blank');
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': ['.jpg', '.jpeg', '.png'] },
    onDrop,
  });

  return (
    <div>
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="group mx-auto flex h-56 max-w-4xl cursor-pointer flex-col items-center justify-center rounded-10px border border-orange-color bg-dark-color/45 p-4"
      >
        <input {...getInputProps()} aria-label="Add or drag a photo" id={id} />
        <>
          <ImagePlus className="mb-2 h-20 w-20 text-light-color transition group-hover:text-orange-color" />
          <span className="text-light-color">
            Drop your image here, or browse
          </span>
          <span className="text-light-color/70">Supports: JPG, JPEG, PNG</span>
        </>
      </div>
      <div className="mx-auto mt-4 max-w-4xl">
        {files.map(file => (
          <DnDFileItem
            key={file.id}
            file={file}
            status={file.status}
            onRename={onRename}
            onRemove={onRemove}
            onPreview={onPreview}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(DnDWithItemList);
