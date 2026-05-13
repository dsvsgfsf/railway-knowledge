# 铁路知识智能查询系统

黑龙江交通职业技术学院铁路知识智能查询系统 - 在线版本

## 🌐 在线访问

**主系统**: https://railway-knowledge.vercel.app

## 📋 功能模块

### 1. 铁路知识查询
- 27个专业语料库覆盖
- 课程推荐（按年级分类）
- 教材书目（90本教材）
- 题库系统（多种题型）

### 2. 铁路局招聘系统
- 18个铁路局完整信息
- 招聘流程与体检标准
- 薪资待遇排名
- 铁路局详情页

### 3. 铁路局详情页
- 三梯队薪资体系
- 各局特色与福利
- 历史招聘数据

### 4. 实时铁路消息
- 招聘统计总览
- 最新公告
- 热搜榜单
- 政策动态
- 招聘时间线

### 5. 其他工具
- 体检医院地图
- 问题反馈系统
- AI语音助手

## 🚀 部署说明

本项目已配置 Vercel 部署，可直接连接到 GitHub 自动部署。

### 连接到 Vercel
1. Fork 本仓库到你的 GitHub
2. 登录 [Vercel](https://vercel.com)
3. 点击 "Import Project"
4. 选择 Fork 的仓库
5. 点击 Deploy

### 本地运行
直接用浏览器打开 `index.html` 即可（无需服务器）

## 📁 项目结构

```
├── index.html          # 主入口
├── bookshelf.html      # 教材书架
├── video-learning.html # 视频学习中心
├── public/
│   ├── bureaus/        # 铁路局详情页
│   ├── feedback.html   # 问题反馈
│   ├── hospital-map.html # 体检医院地图
│   ├── quiz-bank-v2.html # 题库系统
│   ├── realtime-news.html # 实时消息
│   └── social.html    # 铁路社区
└── knowledge-*.js      # 知识库文件
```

## 🔧 技术栈

- HTML5 + CSS3 + JavaScript（原生）
- 无需后端，纯前端静态部署
- 支持移动端响应式布局
- localStorage 数据持久化

## 📝 许可证

MIT License
