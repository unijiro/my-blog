// ヒント：tagパラメータを受け取り、それに応じた記事一覧を表示
// 例: `/tags/nextjs` にアクセスしたら「タグ: nextjs の記事」って出すだけでもOK
type Props = {
    params: {
      tag: string;
    };
  };
  
  import { notFound } from 'next/navigation';

export default function TagPage({ params }: Props) {
  const { tag } = params;

  // Simulate fetching tag data
  const tagExists = tag === 'example-tag'; // Replace with actual data fetching logic
  if (!tagExists) {
    notFound();
  }
    return (
      <div>
        <h1>タグ: {params.tag}</h1>
        <p>このタグに関する記事一覧を表示予定です。</p>
      </div>
    );
  }
