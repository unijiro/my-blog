import { NextResponse } from 'next/server';

type Post = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt?: Date;
};

let posts: Post[] = []; // Temporary in-memory storage for posts

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === parseInt(params.id, 10));
  if (!post) {
    return NextResponse.json({ error: '記事が見つかりません。' }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { title, content, tags } = await request.json();
    const postIndex = posts.findIndex((p) => p.id === parseInt(params.id, 10));

    if (postIndex === -1) {
      return NextResponse.json({ error: '記事が見つかりません。' }, { status: 404 });
    }

    posts[postIndex] = {
      ...posts[postIndex],
      title,
      content,
      tags: tags || [],
      updatedAt: new Date(),
    };

    return NextResponse.json({ message: '記事が更新されました。', post: posts[postIndex] });
  } catch (error) {
    return NextResponse.json({ error: '記事の更新中にエラーが発生しました。' }, { status: 500 });
  }
}
