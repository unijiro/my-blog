// ヒント：ブログ記事の一覧を表示したい
// mapで仮の配列をループしてタイトルを並べてもOK
// <Link href="/posts/記事スラッグ">タイトル</Link> みたいな形で
import Link from 'next/link';

const posts = [
  { slug: 'first-post', title: '最初の記事' },
  { slug: 'second-post', title: '2番目の記事' },
];

export const revalidate = 60; // Revalidate every 60 seconds

export default function PostsPage() {
  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
