"use client";

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './toolBar';

const Tiptap = ({onChange, content}: any) => {
    const handleChange = (newContent: string) => {
        onChange(newContent)
    }

    const editor = useEditor({
        extensions: [StarterKit],
        content: '',
        editorProps:{
            attributes: {
                class: 
                    "flex flex-col px-4 px-4 py-3 justify-start border-b border-r border-l border-gray-700 items-start w-full gap-3 font-medium text-[16px] rounded-bl-md rounded-br-md outline-none"
            }
        },

        onUpdate: ({ editor }) => {
            handleChange(editor.getHTML());
        }
    });

  return(
    <div>
        <Toolbar editor={editor} content={content}/>
        <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap