"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [hoveredNews, setHoveredNews] = useState<{ title: string; description: string } | null>(null);

  const newsData = {
    politics: [
      { title: '政治新闻1', description: '政治新闻1的详细描述。这是一条关于最新政策变化的新闻。' },
      { title: '政治新闻2', description: '政治新闻2的详细描述。这是一条关于国际外交动态的新闻。' },
    ],
    sports: [
      { title: '体育新闻1', description: '体育新闻1的详细描述。这是一条关于最新体育赛事结果的新闻。' },
      { title: '体育新闻2', description: '体育新闻2的详细描述。这是一条关于知名运动员转会的新闻。' },
    ],
    technology: [
      { title: '科技新闻1', description: '科技新闻1的详细描述。这是一条关于最新科技产品发布的新闻。' },
      { title: '科技新闻2', description: '科技新闻2的详细描述。这是一条关于突破性科研成果的新闻。' },
    ],
    entertainment: [
      { title: '娱乐新闻1', description: '娱乐新闻1的详细描述。这是一条关于热门电影上映的新闻。' },
      { title: '娱乐新闻2', description: '娱乐新闻2的详细描述。这是一条关于知名艺人活动的新闻。' },
    ],
    business: [
      { title: '商业新闻1', description: '商业新闻1的详细描述。这是一条关于股市变动的新闻。' },
      { title: '商业新闻2', description: '商业新闻2的详细描述。这是一条关于大型企业并购的新闻。' },
    ],
    health: [
      { title: '健康新闻1', description: '健康新闻1的详细描述。这是一条关于新型疫苗研发的新闻。' },
      { title: '健康新闻2', description: '健康新闻2的详细描述。这是一条关于健康生活方式的新闻。' },
    ],
  };

  const categoryEmojis = {
    politics: '🏛️',
    sports: '⚽',
    technology: '🚀',
    entertainment: '🎭',
    business: '💼',
    health: '🏥',
  };

  const getCategoryName = (category: string) => {
    const categoryNames = {
      politics: '政治',
      sports: '体育',
      technology: '科技',
      entertainment: '娱乐',
      business: '商业',
      health: '健康',
    };
    return categoryNames[category] || category;
  };

  return (
    <main className="flex min-h-screen flex-col p-6 md:p-24 bg-gray-50">
      <header className="flex items-center mb-12">
        <Image src="/example.jpg" alt="示例图片" width={60} height={60} className="rounded-full mr-6" />
        <h1 className="text-5xl font-bold text-gray-800">新闻聚合</h1>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Object.keys(newsData).map((category) => (
          <div key={category} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="bg-primary text-primary-foreground p-6">
              <h2 className="text-2xl font-semibold flex items-center">
                <span className="mr-3 text-3xl">{categoryEmojis[category]}</span>
                {getCategoryName(category)}
              </h2>
            </div>
            <div className="p-6">
              {newsData[category].map((news, index) => (
                <div 
                  key={index} 
                  className="mb-4 p-4 bg-secondary rounded-lg transition-all duration-300 hover:bg-secondary-foreground hover:text-secondary cursor-pointer"
                  onMouseEnter={() => setHoveredNews(news)}
                  onMouseLeave={() => setHoveredNews(null)}
                >
                  <h3 className="text-xl font-semibold">{news.title}</h3>
                  <p className="text-secondary-foreground line-clamp-2">{news.description}</p>
                </div>
              ))}
              <Link href={`/category/${category}`} className="text-primary hover:underline block text-right mt-4 transition-all duration-300 hover:translate-x-2">
                查看更多 →
              </Link>
            </div>
          </div>
        ))}
      </div>
      {hoveredNews && (
        <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-2xl max-w-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          <h4 className="text-xl font-semibold mb-2">{hoveredNews.title}</h4>
          <p>{hoveredNews.description}</p>
        </div>
      )}
    </main>
  );
}

