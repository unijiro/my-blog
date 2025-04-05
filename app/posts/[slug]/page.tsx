// ヒント：slugパラメータを取得して、その記事に対応する内容を表示する
// 型: `params: { slug: string }`
// 仮データでもOK。「slug = 'first-post'」なら "This is the first post" とか
type Props = {
    params: {
      slug: string;
    };
  };
  
  import { notFound } from 'next/navigation';

export default function PostPage({ params }: Props) {
  const { slug } = params;

  // Simulate fetching post data
  const postExists = slug === 'first-post'; // Replace with actual data fetching logic
  if (!postExists) {
    notFound();
  }
    return (
      <div>
        <h1>記事: {slug}</h1>
        <p>
          今日はとても良い天気でした。朝は少し肌寒かったけれど、昼には暖かくなり、
          散歩をするには最高の日でした。公園で見た桜がとても綺麗で、春の訪れを感じました。
          また、カフェで新しい本を読み始めました。タイトルは「未来のデザイン」。
          とても興味深い内容で、時間を忘れて読みふけってしまいました。
        </p>
      </div>
    );
  }
