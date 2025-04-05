import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function EditPostPage({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Fetch the existing post data
    const fetchPost = async () => {
      const response = await fetch(`/api/posts/${params.id}`);
      if (response.ok) {
        const post = await response.json();
        setTitle(post.title);
        setContent(post.content);
        setTags(post.tags.join(', '));
      } else {
        alert('記事の取得に失敗しました。');
        router.push('/admin');
      }
    };

    fetchPost();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`/api/posts/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, tags: tags.split(',').map(tag => tag.trim()) }),
    });

    if (response.ok) {
      alert('記事が更新されました！');
      router.push('/admin');
    } else {
      alert('記事の更新に失敗しました。');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>記事を編集</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            タイトル:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ display: 'block', margin: '0.5rem 0', width: '100%' }}
            />
          </label>
        </div>
        <div>
          <label>
            本文:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              style={{ display: 'block', margin: '0.5rem 0', width: '100%', height: '200px' }}
            />
          </label>
        </div>
        <div>
          <label>
            タグ (カンマ区切り):
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              style={{ display: 'block', margin: '0.5rem 0', width: '100%' }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>更新</button>
      </form>
    </div>
  );
}
