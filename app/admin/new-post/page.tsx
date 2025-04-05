import { useState } from 'react';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, tags: tags.split(',').map(tag => tag.trim()) }),
    });

    if (response.ok) {
      alert('記事が作成されました！');
      setTitle('');
      setContent('');
      setTags('');
    } else {
      alert('記事の作成に失敗しました。');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>新しい記事を作成</h1>
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
        <button type="submit" style={{ marginTop: '1rem' }}>作成</button>
      </form>
    </div>
  );
}
