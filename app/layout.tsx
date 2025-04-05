// app/layout.tsx

import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'hayatoのブログ', // ← ブログのタイトルをここに
  description: '私の日常を書きます。', // ← 簡単な説明をここに
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="layout-body">
      <header className="layout-header" role="banner">
          <nav className="layout-nav">
            <Link href="/">Top</Link> {/* ← トップページ */}
            <Link href="/posts">Posts</Link> {/* ← 記事一覧 */}
            <Link href="/about">About</Link> {/* ← 自己紹介 */}
          </nav>
        </header>

        <main className="layout-main" role="main">
          {children}
        </main>

        <footer className="layout-footer" role="contentinfo">
        © 2025 Hayato's Blog {/* ← コピーライトなど */}
        </footer>
      </body>
    </html>
  );
}
