import Link from 'next/link'
import Image from 'next/image'
import NewsCard from '../components/NewsCard'

const newsArticles = [
  {
    title: '最新科技新闻',
    summary: '科技行业的最新动态和趋势。',
    link: '/categories/technology',
  },
  {
    title: '体育赛事更新',
    summary: '最新的体育赛事和比赛结果。',
    link: '/categories/sports',
  },
  {
    title: '娱乐新闻快讯',
    summary: '娱乐圈的最新消息和明星动态。',
    link: '/categories/entertainment',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">欢迎来到聚合新闻网站!</h1>
      <Image src="/example.jpg" alt="示例图片" width={300} height={200} />
      <p className="text-xl">这里是最新的新闻分类展示。</p>
      <div className="grid grid-cols-1 gap-4 mt-8">
        {newsArticles.map((article, index) => (
          <NewsCard key={index} title={article.title} summary={article.summary} link={article.link} />
        ))}
      </div>
      <Link href="/about" className="text-blue-500 hover:underline mt-4">
        关于我们
      </Link>
    </main>
  )
}