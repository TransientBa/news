import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
      <p>&copy; {new Date().getFullYear()} 新闻聚合网站. 保留所有权利.</p>
    </footer>
  );
};

export default Footer;