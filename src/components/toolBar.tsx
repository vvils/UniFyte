"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";

type Props = {
    editor: Editor | null;
    content: string;
  };

  const Toolbar = ({ editor, content }: Props) => {
    if (!editor) {
      return null;
    }
    return (
      <div
        className="mt-6 px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
      gap-5 w-full flex-wrap border border-gray-700"
      >
        <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleBold().run();
            }}
            className={
              editor.isActive("bold")
                ? "bg-orange-500 text-white p-2 rounded-lg"
                : "text-orange-300"
            }
          >
            <Bold className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleItalic().run();
            }}
            className={
              editor.isActive("italic")
              ? "bg-orange-500 text-white p-2 rounded-lg"
              : "text-orange-300"
            }
          >
            <Italic className="w-5 h-5" />
          </button>
  
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleBulletList().run();
            }}
            className={
              editor.isActive("bulletList")
              ? "bg-orange-500 text-white p-2 rounded-lg"
              : "text-orange-300"
            }
          >
            <List className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleOrderedList().run();
            }}
            className={
              editor.isActive("orderedList")
              ? "bg-orange-500 text-white p-2 rounded-lg"
              : "text-orange-300"
            }
          >
            <ListOrdered className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().toggleBlockquote().run();
            }}
            className={
              editor.isActive("blockquote")
              ? "bg-orange-500 text-white p-2 rounded-lg"
              : "text-orange-300"
            }
          >
            <Quote className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().setCode().run();
            }}
            className={
              editor.isActive("code")
              ? "bg-orange-500 text-white p-2 rounded-lg"
              : "text-orange-300"
            }
          >
            <Code className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().undo().run();
            }}
            className={
              editor.isActive("undo")
                ? "bg-orange-500 text-white p-2 rounded-lg"
                : "text-orange-300 hover:bg-orange-500 hover:text-white p-1 hover:rounded-lg"
            }
          >
            <Undo className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().redo().run();
            }}
            className={
              editor.isActive("redo")
              ? "bg-orange-500 text-white p-2 rounded-lg"
              : "text-orange-300 hover:bg-orange-500 hover:text-white p-1 hover:rounded-lg"
            }
          >
            <Redo className="w-5 h-5" />
          </button>
        </div>

      </div>
    );
  };
  
  export default Toolbar;