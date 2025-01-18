import { memo, useState, useCallback } from 'react';
import { Trash2, Pencil, Loader2 } from 'lucide-react';

const DnDFileItem = ({ file, onRemove, onRename, status }) => {
  const [newName, setNewName] = useState(file.name);
  const [isEditing, setIsEditing] = useState(false);

  const handleRename = useCallback(() => {
    if (newName.trim()) {
      onRename(file, newName.trim());
    } else {
      setNewName(file.name);
    }
    setIsEditing(false);
  }, [file, newName, onRename]);

  return (
    <div className="flex w-full items-center justify-between border-b py-2">
      <div className="flex w-4/12 items-center justify-between">
        <img
          src={file.preview}
          alt={file.name}
          className="h-14 w-14 rounded-md object-cover"
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

      {status === 'uploading' ? (
        <Loader2 className="h-5 w-5 animate-spin text-orange-500" />
      ) : status === 'error' ? (
        <span className="text-red-500">Error</span>
      ) : (
        <div className="flex w-12 justify-between">
          <button type="button" onClick={() => setIsEditing(true)}>
            <Pencil className="h-5 w-5 text-gray-500 hover:text-orange-500" />
          </button>
          <button type="button" onClick={() => onRemove(file)}>
            <Trash2 className="h-5 w-5 text-gray-500 hover:text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(DnDFileItem);
