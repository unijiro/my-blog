"use client";

import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const posts = [
  { slug: 'first-post', title: '最初の記事' },
  { slug: 'second-post', title: '2番目の記事' },
];

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const response = await fetch('/api/auth/validate', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setIsAdmin(data.isAdmin);
      }
    };

    checkAdmin();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        hayatoのブログ
      </h1>

      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#555' }}>
        私の日常を書きます。
      </p>

      <h2 style={{ textAlign: 'center', fontSize: '1.8rem', margin: '3rem 0 1rem' }}>
        記事一覧
      </h2>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '1rem' }}>
            <Link
              href={`/posts/${post.slug}`}
              style={{
                fontSize: '1.2rem',
                textDecoration: 'none',
                color: '#0070f3',
              }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      {isAdmin && (
        <div style={{ marginTop: '2rem' }}>
          <h2>管理者メニュー</h2>
          <ul>
            <li>
              <Link href="/admin/new-post">新しい記事を作成</Link>
            </li>
            <li>
              <Link href="/admin">記事管理</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
