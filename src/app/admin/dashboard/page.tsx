"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const QuillEditor = dynamic(
  () => import("../../../components/utility/QuillEditor"),
  { ssr: false }
);

function DashBoard() {
  const [editorContent, setEditorContent] = useState("");
  console.log(editorContent);

  return (
    <div>
      <h1>Next.js Quill Editor</h1>
      <QuillEditor value={editorContent} onChange={setEditorContent} />
      <div>
        <h2>Editor Content</h2>
        <div className="ql-editor"
 dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div>
    </div>
  );
}

export default DashBoard;
