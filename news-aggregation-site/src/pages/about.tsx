import Link from 'next/link'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">关于我们</h1>
      <p className="text-xl mt-4">
        本网站旨在聚合各类新闻，提供最新的资讯和信息。我们致力于为用户提供一个方便的新闻浏览平台，涵盖技术、体育、娱乐等多个领域。
      </p>
      <p className="text-xl mt-4">
        感谢您的访问，欢迎您随时与我们联系以获取更多信息。
      </p>
      <Link href="/" className="text-blue-500 hover:underline mt-4">
        返回首页
      </Link>
    </main>
  )
}