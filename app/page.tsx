import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const newsData = {
    politics: [
      { title: '政治新闻1', description: '政治新闻1的简要描述。' },
      { title: '政治新闻2', description: '政治新闻2的简要描述。' },
    ],
    sports: [
      { title: '体育新闻1', description: '体育新闻1的简要描述。' },
      { title: '体育新闻2', description: '体育新闻2的简要描述。' },
    ],
    technology: [
      { title: '科技新闻1', description: '科技新闻1的简要描述。' },
      { title: '科技新闻2', description: '科技新闻2的简要描述。' },
    ],
    entertainment: [
      { title: '娱乐新闻1', description: '娱乐新闻1的简要描述。' },
      { title: '娱乐新闻2', description: '娱乐新闻2的简要描述。' },
    ],
    business: [
      { title: '商业新闻1', description: '商业新闻1的简要描述。' },
      { title: '商业新闻2', description: '商业新闻2的简要描述。' },
    ],
    health: [
      { title: '健康新闻1', description: '健康新闻1的简要描述。' },
      { title: '健康新闻2', description: '健康新闻2的简要描述。' },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col p-24">
      <header className="flex items-center mb-8">
        <Image src="/example.jpg" alt="Example Image" width={50} height={50} className="rounded-full mr-4" />
        <h1 className="text-4xl font-bold">aaa</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(newsData).map((category) => (
          <div key={category} className="p-6 border rounded-lg hover:bg-gray-100">
            <Link href={`/category/${category}`} className="text-2xl font-semibold block mb-4">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
            {newsData[category].map((news, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{news.title}</h3>
                <p>{news.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}