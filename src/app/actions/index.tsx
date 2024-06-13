'use client'
import clientPromise from "../backend/database";

const client = clientPromise;
const db = client.db();

export const onCreateBlog = async (blog: any) => {
  try {
    await db.collection("new-blog").insertOne(blog);
    console.log("Data saved successfully!");
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
  }
};
