import Link from 'next/link';

interface NewsCardProps {
  title: string;
  summary: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, summary, link }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-700">{summary}</p>
      <Link href={link} className="text-blue-500 hover:underline">
        阅读更多
      </Link>
    </div>
  );
};

export default NewsCard;