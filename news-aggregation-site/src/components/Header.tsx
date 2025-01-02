import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">新闻聚合网站</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">首页</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">关于我们</Link>
          </li>
          <li>
            <Link href="/categories/technology" className="hover:underline">科技</Link>
          </li>
          <li>
            <Link href="/categories/sports" className="hover:underline">体育</Link>
          </li>
          <li>
            <Link href="/categories/entertainment" className="hover:underline">娱乐</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;