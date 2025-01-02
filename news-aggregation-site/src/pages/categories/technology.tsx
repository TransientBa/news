import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsCard from '../../components/NewsCard'

const technologyNews = [
  {
    title: '新技术革命：人工智能的未来',
    summary: '探讨人工智能在未来科技中的应用和影响。',
    link: '/news/ai-future'
  },
  {
    title: '量子计算的崛起',
    summary: '量子计算如何改变我们对计算的理解。',
    link: '/news/quantum-computing'
  },
  {
    title: '5G技术的普及',
    summary: '5G技术如何推动各行各业的发展。',
    link: '/news/5g-technology'
  }
];

export default function Technology() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold">技术类新闻</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologyNews.map((news, index) => (
            <NewsCard key={index} title={news.title} summary={news.summary} link={news.link} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}