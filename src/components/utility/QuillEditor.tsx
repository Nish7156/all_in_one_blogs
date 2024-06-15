import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // import styles

const QuillEditor = ({ value, onChange }: any) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null); // Use a ref to store the quill instance

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      // Ensure Quill is initialized only once
      //@ts-ignore
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow", // or 'bubble'
        modules: {
          codeHighlight: true,
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            ["link", "image", "video", "code-block"],
            ["clean"], // remove formatting button
          ],
        },
      });
      //@ts-ignore
      quillRef.current.on("text-change", () => {
        //@ts-ignore
        onChange(quillRef.current.root.innerHTML);
      });
    }
  }, []);

  useEffect(() => {
    //@ts-ignore
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      //@ts-ignore
      quillRef.current.root.innerHTML = value;
    }
  }, [value]);

  return <div ref={editorRef} />;
};

export default QuillEditor;
