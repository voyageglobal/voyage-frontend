import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ImagePlus from 'lucide-react/icons/image-plus';
import Trash2 from 'lucide-react/icons/trash-2';
import ZoomIn from 'lucide-react/icons/zoom-in';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const DnDWithBackground = ({ id, onChange }) => {
  const [cover, setCover] = useState(null);
  const [error, setError] = useState(null);

  const onDrop = useCallback(
    acceptedFiles => {
      setError(null);

      if (acceptedFiles.length > 1) {
        setError('You can only upload one image.');
        return;
      }

      const file = acceptedFiles[0];
      if (file.size > MAX_FILE_SIZE) {
        setError('File size should be less than 5MB.');
        return;
      }
      if (file) {
        const preview = URL.createObjectURL(file);
        setCover(preview);
        onChange(file);
      }
    },
    [onChange],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': ['.jpg', '.jpeg', '.png'] },
    onDrop,
    maxFiles: 1,
    onDropRejected: rejectedFiles => {
      if (rejectedFiles.length > 0) {
        setError('You can only upload one image.');
      }
    },
  });

  const handlePreview = useCallback(
    e => {
      e.stopPropagation();
      if (cover) window.open(cover, '_blank');
    },
    [cover],
  );

  const handleDelete = useCallback(
    e => {
      e.stopPropagation();
      if (!cover) return;

      const confirmDelete = window.confirm(
        'Are you sure you want to delete the cover image?',
      );
      if (!confirmDelete) return;

      URL.revokeObjectURL(cover);
      setCover(null);
      onChange(null);
      setError(null);
    },
    [cover, onChange],
  );

  return (
    <section className="container">
      <div
        {...getRootProps({ className: 'dropzone' })}
        className="group relative mx-auto flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-10px border border-orange-color bg-dark-color/45 bg-cover bg-center p-4"
        style={{
          backgroundImage: cover ? `url(${cover})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <input {...getInputProps()} id={id} />
        {!cover ? (
          <>
            <ImagePlus className="mb-2 h-20 w-20 text-light-color transition group-hover:text-orange-color" />
            <span className="text-light-color transition">
              Drop your image here, or browse
            </span>
            <span className="text-light-color/70 transition">
              Supports: JPG, JPEG, PNG
            </span>
          </>
        ) : (
          <div className="absolute bottom-2 right-2 flex gap-2">
            <button
              onClick={handlePreview}
              aria-label="Preview photo"
              type="button"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-color"
            >
              <ZoomIn className="h-6 w-6 text-light-color transition" />
            </button>
            <button
              onClick={handleDelete}
              aria-label="Delete photo"
              type="button"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-color"
            >
              <Trash2 className="h-6 w-6 text-light-color transition" />
            </button>
          </div>
        )}
      </div>
      {error && (
        <p
          className={`mt-2 text-red-500 transition-opacity duration-300 ${
            error ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {error}
        </p>
      )}
    </section>
  );
};

export default DnDWithBackground;
