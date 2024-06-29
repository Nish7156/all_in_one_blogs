// app/api/getBlogBySlug/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/app/backend/database';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ message: 'Slug is required' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    
    const blog = await db.collection('new_blog').findOne({ slug });

    if (!blog) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return NextResponse.json({ message: 'Error fetching data from MongoDB' }, { status: 500 });
  }
}
