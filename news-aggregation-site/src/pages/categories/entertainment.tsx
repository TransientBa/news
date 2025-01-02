import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsCard from '../../components/NewsCard'

const entertainmentNews = [
  {
    title: 'Entertainment News Title 1',
    summary: 'Summary of entertainment news 1.',
    link: '#'
  },
  {
    title: 'Entertainment News Title 2',
    summary: 'Summary of entertainment news 2.',
    link: '#'
  },
  {
    title: 'Entertainment News Title 3',
    summary: 'Summary of entertainment news 3.',
    link: '#'
  }
];

export default function Entertainment() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">娱乐新闻</h1>
        <div className="grid grid-cols-1 gap-4">
          {entertainmentNews.map((news, index) => (
            <NewsCard key={index} title={news.title} summary={news.summary} link={news.link} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}