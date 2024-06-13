// app/api/saveBlog/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/app/backend/database';

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const blog = await request.json();
        
    await db.collection('new_blog').insertOne(blog);
    return NextResponse.json({ message: 'Data saved successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
    return NextResponse.json({ message: 'Error saving data to MongoDB' }, { status: 500 });
  }
}
