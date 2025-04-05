// ヒント：記事タイトルと本文を入力できるフォームを仮で作ってみてもいい
// あるいは「ここは管理画面です」ってだけでも十分なテスト
// でも、実際の管理画面はもっと複雑なものになるよ
// 例えば、記事の一覧を表示したり、記事を削除したり、記事を編集したりする機能が必要になるかも
// それらの機能は、次のステップで実装していくよ
// まずは、管理画面の基本的な構造を作ってみよう
'use client'; // フォームなどクライアント側の機能を使うなら必要

import { useState } from 'react';

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('投稿:', { title, content });
  };

  return (
    <div>
      <h1>管理画面</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br />
        <textarea
          placeholder="本文"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        /><br />
        <button type="submit">投稿</button>
      </form>
    </div>
  );
}