"use client";
import { onCreateBlog } from "@/app/actions";
import clientPromise from "@/app/backend/database";
import { generateSlug } from "@/lib/helper";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const QuillEditor = dynamic(
  () => import("../../../components/utility/QuillEditor"),
  { ssr: false }
);

function DashBoard() {
  const [editorContent, setEditorContent] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
    tags: "",
    category: "",
    image: null,
    excerpt: "",
    slug: "",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: editorContent,
    }));
  }, [editorContent]);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e:any) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  console.log(formData);
  console.log(editorContent);

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const slug = generateSlug(formData.title);

    // Update the formData with the generated slug
    const updatedFormData = { ...formData, slug };
  
    try {
      const response = await fetch("/api/create-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        console.log("Data saved successfully!");
        alert('Data saved successfully!')
      } else {
        console.error("Error saving data to MongoDB");
      }
    } catch (error) {
      console.error("Error saving data to MongoDB:", error);
    }
  };

  return (
    <div style={{ padding: "0 24px" }}>
      <h1>Next.js Quill Editor</h1>
      <QuillEditor value={editorContent} onChange={setEditorContent} />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tags</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image</label>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>
        <div>
          <label>Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Create Blog Post</button>
      </form>
      <div>
        <h2>Editor Content</h2>
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: editorContent }}
        />
      </div>
    </div>
  );
}

export default DashBoard;
