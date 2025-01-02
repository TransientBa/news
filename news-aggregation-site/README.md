# 新闻聚合网站

这是一个基于 Next.js 的新闻聚合网站，旨在展示不同类别的新闻，包括技术、体育和娱乐等。

## 项目结构

```
news-aggregation-site
├── public
│   └── example.jpg          # 示例图片文件
├── src
│   ├── components
│   │   ├── Header.tsx       # 网站头部组件
│   │   ├── Footer.tsx       # 网站底部组件
│   │   └── NewsCard.tsx     # 新闻条目组件
│   ├── pages
│   │   ├── index.tsx        # 网站主页
│   │   ├── about.tsx        # 关于页面
│   │   └── categories
│   │       ├── technology.tsx # 技术类新闻页面
│   │       ├── sports.tsx      # 体育类新闻页面
│   │       └── entertainment.tsx # 娱乐类新闻页面
│   └── styles
│       └── globals.css       # 全局样式文件
├── package.json              # npm 配置文件
├── tsconfig.json             # TypeScript 配置文件
└── README.md                 # 项目文档
```

## 功能

- 展示最新的新闻条目
- 按类别浏览新闻（技术、体育、娱乐）
- 每个新闻条目包含标题、摘要和链接

## 使用方法

1. 克隆项目到本地：
   ```
   git clone <repository-url>
   ```

2. 安装依赖：
   ```
   npm install
   ```

3. 启动开发服务器：
   ```
   npm run dev
   ```

4. 打开浏览器访问 `http://localhost:3000` 查看网站。

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。