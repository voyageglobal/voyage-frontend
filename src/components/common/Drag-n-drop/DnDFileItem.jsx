import { memo, useState, useCallback } from 'react';
import { Trash2, Pencil } from 'lucide-react';

const DnDFileItem = ({ file, onRename, onRemove, onPreview }) => {
  const [newName, setNewName] = useState(file.name);
  const [isEditing, setIsEditing] = useState(false);

  const handleRename = useCallback(() => {
    if (newName.trim()) {
      onRename(file.id, newName.trim());
    } else {
      setNewName(file.name);
    }
    setIsEditing(false);
  }, [file.id, file.name, newName, onRename]);

  const handleRemove = useCallback(() => {
    if (window.confirm(`Delete "${file.name}"?`)) {
      onRemove(file.id);
      URL.revokeObjectURL(file.preview);
    }
  }, [file.id, file.name, file.preview, onRemove]);

  return (
    <div className="flex w-full items-center justify-between border-b py-2">
      <div className="flex w-4/12 items-center justify-between">
        <img
          src={file.preview}
          alt={file.name}
          className="h-14 w-14 cursor-pointer rounded-md object-cover"
          onClick={() => onPreview(file.preview)}
          title={`Click to preview ${file.name}`}
        />
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={e => e.key === 'Enter' && handleRename()}
            className="w-32 truncate rounded-lg p-2"
          />
        ) : (
          <span className="w-32 truncate" onClick={() => setIsEditing(true)}>
            {file.name}
          </span>
        )}
        <span className="text-sm text-gray-500">
          {(file.size / 1024).toFixed(1)} KB
        </span>
      </div>

      <div className="flex w-12 justify-between">
        <button
          type="button"
          title="Click to rename"
          onClick={() => setIsEditing(true)}
        >
          <Pencil className="h-5 w-5 text-gray-500 hover:text-orange-500" />
        </button>
        <button type="button" title="Click to delete " onClick={handleRemove}>
          <Trash2 className="h-5 w-5 text-gray-500 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default memo(DnDFileItem);
