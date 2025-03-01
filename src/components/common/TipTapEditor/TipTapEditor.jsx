import { useEditor, EditorContent } from '@tiptap/react';
import { useCallback } from 'react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';

import BoldIcon from 'lucide-react/icons/bold';
import ItalicIcon from 'lucide-react/icons/italic';
import UnderlineIcon from 'lucide-react/icons/underline';
import StrikethroughIcon from 'lucide-react/icons/strikethrough';
import BulletListIcon from 'lucide-react/icons/list';
import OrderedListIcon from 'lucide-react/icons/list-ordered';
import QuoteIcon from 'lucide-react/icons/quote';
import Heading1Icon from 'lucide-react/icons/heading-1';
import Heading2Icon from 'lucide-react/icons/heading-2';
import Heading3Icon from 'lucide-react/icons/heading-3';
import HighlightIcon from 'lucide-react/icons/brush';

const TextEditor = ({ setContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class:
          'prose max-w-none prose-p:m-0 prose-ul:m-0 prose-ol:m-0 prose-blockquote:m-0 ' +
          'prose-h1:m-0 prose-h2:m-0 prose-h3:m-0 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg ' +
          'prose-ul:list-disc prose-ol:list-decimal ' +
          'prose-li:marker:text-orange-500 ' +
          'prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-4' +
          'focus:outline-orange-500 focus:outline-2 focus:ring-0',
        style: 'padding: 16px; border-radius: 10px;',
        onfocus: "this.style.outline='1px solid rgba(239, 130, 0, 0.3)';",
        onblur: "this.style.outline='none';",
      },
    },
  });

  const createCommand = useCallback(
    command => () => {
      if (editor) {
        command(editor);
      }
    },
    [editor],
  );

  if (!editor) return null;

  const toolBar = [
    {
      command: createCommand(e => e.chain().focus().toggleBold().run()),
      isActive: () => editor.isActive('bold'),
      label: <BoldIcon size={16} />,
    },
    {
      command: createCommand(e => e.chain().focus().toggleItalic().run()),
      isActive: () => editor.isActive('italic'),
      label: <ItalicIcon size={16} />,
    },
    {
      command: createCommand(e => e.chain().focus().toggleUnderline().run()),
      isActive: () => editor.isActive('underline'),
      label: <UnderlineIcon size={16} />,
    },
    {
      command: createCommand(e => e.chain().focus().toggleStrike().run()),
      isActive: () => editor.isActive('strike'),
      label: <StrikethroughIcon size={16} />,
    },
    {
      command: createCommand(e =>
        e
          .chain()
          .focus()
          .toggleHighlight({ color: 'rgba(239, 130, 0, 0.8)' })
          .run(),
      ),
      isActive: () => editor.isActive('highlight'),
      label: <HighlightIcon size={16} />,
    },
    {
      command: createCommand(e =>
        e.chain().focus().toggleHeading({ level: 1 }).run(),
      ),
      isActive: () => editor.isActive('heading', { level: 1 }),
      label: <Heading1Icon size={16} />,
    },
    {
      command: createCommand(e =>
        e.chain().focus().toggleHeading({ level: 2 }).run(),
      ),
      isActive: () => editor.isActive('heading', { level: 2 }),
      label: <Heading2Icon size={16} />,
    },
    {
      command: createCommand(e =>
        e.chain().focus().toggleHeading({ level: 3 }).run(),
      ),
      isActive: () => editor.isActive('heading', { level: 3 }),
      label: <Heading3Icon size={16} />,
    },
    {
      command: createCommand(e => e.chain().focus().toggleBulletList().run()),
      isActive: () => editor.isActive('bulletList'),
      label: <BulletListIcon size={16} />,
    },
    {
      command: createCommand(e => e.chain().focus().toggleOrderedList().run()),
      isActive: () => editor.isActive('orderedList'),
      label: <OrderedListIcon size={16} />,
    },
    {
      command: createCommand(e => e.chain().focus().toggleBlockquote().run()),
      isActive: () => editor.isActive('blockquote'),
      label: <QuoteIcon size={16} />,
    },
  ];

  editor.on('update', () => {
    setContent(editor.getHTML());
  });

  return (
    <div className="min-h-40 rounded-10px border border-orange-color p-4">
      <div className="flex gap-2 border-b border-orange-color/30 pb-2">
        {toolBar.map((btn, index) => (
          <button
            key={index}
            type="button"
            onClick={btn.command}
            aria-label={btn.label.props.name}
            className={`rounded px-2 py-1 text-dark-color hover:bg-orange-color ${btn.isActive() ? 'bg-orange-color text-white' : ''}`}
          >
            {btn.label}
          </button>
        ))}
      </div>
      <EditorContent
        aria-label="Input field and text editing"
        className="mt-3"
        editor={editor}
      />
    </div>
  );
};

export default TextEditor;
