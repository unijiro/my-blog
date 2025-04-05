import { NextResponse } from 'next/server';

let posts = []; // Temporary in-memory storage for posts

export async function POST(request: Request) {
  try {
    const { title, content, tags } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ error: 'タイトルと本文は必須です。' }, { status: 400 });
    }

    const newPost = {
      id: posts.length + 1,
      title,
      content,
      tags: tags || [],
      createdAt: new Date(),
    };

    posts.push(newPost);

    return NextResponse.json({ message: '記事が作成されました。', post: newPost }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: '記事の作成中にエラーが発生しました。' }, { status: 500 });
  }
}
