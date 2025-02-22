import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import { useEffect } from 'react';
import BoldIcon from 'lucide-react/icons/bold';
import ItalicIcon from 'lucide-react/icons/italic';
import UnderlineIcon from 'lucide-react/icons/underline';
import StrikeIcon from 'lucide-react/icons/strikethrough';
import BulletListIcon from 'lucide-react/icons/list';
import OrderedListIcon from 'lucide-react/icons/list-ordered';
import Heading1 from 'lucide-react/icons/heading-1';
import Heading2 from 'lucide-react/icons/heading-2';
import Heading3 from 'lucide-react/icons/heading-3';
import ParagraphIcon from 'lucide-react/icons/pilcrow';

const TipTapEditor = ({ setContent }) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Strike,
      Underline,
      Highlight,
      Link.configure({ openOnClick: false }),
      BulletList,
      OrderedList,
      ListItem,
      TaskList,
      TaskItem,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: '',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  if (!editor) return null;

  const buttons = [
    {
      command: () => editor.chain().focus().toggleBold().run(),
      label: <BoldIcon size={16} />,
    },
    {
      command: () => editor.chain().focus().toggleItalic().run(),
      label: <ItalicIcon size={16} />,
    },
    {
      command: () => editor.chain().focus().toggleUnderline().run(),
      label: <UnderlineIcon size={16} />,
    },
    {
      command: () => editor.chain().focus().toggleStrike().run(),
      label: <StrikeIcon size={16} />,
    },
    {
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      label: <Heading1 size={16} />,
    },
    {
      command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      label: <Heading2 size={16} />,
    },
    {
      command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      label: <Heading3 size={16} />,
    },
    {
      command: () => editor.chain().focus().setParagraph().run(),
      label: <ParagraphIcon size={16} />,
    },
    {
      command: () => editor.chain().focus().toggleBulletList().run(),
      label: <BulletListIcon size={16} />,
    },
    {
      command: () => editor.chain().focus().toggleOrderedList().run(),
      label: <OrderedListIcon size={16} />,
    },
    {
      command: () => editor.chain().focus().toggleTaskList().run(),
      label: '☑',
    },
  ];

  return (
    <div className="w-full rounded-lg border bg-white p-4 shadow-md">
      <div className="mb-3 flex flex-wrap gap-1 border-b pb-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            type="button"
            onClick={btn.command}
            className="rounded px-2 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-200"
          >
            {btn.label}
          </button>
        ))}
      </div>
      <EditorContent
        editor={editor}
        className="h-60 overflow-auto rounded-md border bg-gray-50 p-2"
      />
    </div>
  );
};

export default TipTapEditor;
