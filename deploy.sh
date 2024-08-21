name: build-and-deploy

on:
  push:
    branches: [ main ]  # main 分支有 commit 时自动触发该 workflow

jobs:
  build-and-deploy:
    # 配置运行该 workflow 的系统
    runs-on: ubuntu-latest

    env:
      NODE_VERSION: '18'

    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      # 安装 pnpm
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 6

      # 配置 Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: pnpm

      # 安装依赖
      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      # 打包并生成静态文件
      - name: Build site
        run: pnpm run docs:build

      # 推送静态文件到 gh-pages 分支
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vuepress/dist  # 静态文件生成目录
