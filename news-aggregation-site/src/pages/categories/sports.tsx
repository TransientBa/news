import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsCard from '../../components/NewsCard'

const sportsNews = [
  {
    title: 'Sports Event 1',
    summary: 'Summary of sports event 1.',
    link: '/news/sports-event-1'
  },
  {
    title: 'Sports Event 2',
    summary: 'Summary of sports event 2.',
    link: '/news/sports-event-2'
  },
  {
    title: 'Sports Event 3',
    summary: 'Summary of sports event 3.',
    link: '/news/sports-event-3'
  }
];

export default function Sports() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">体育新闻</h1>
        {sportsNews.map((news, index) => (
          <NewsCard key={index} title={news.title} summary={news.summary} link={news.link} />
        ))}
      </main>
      <Footer />
    </div>
  )
}