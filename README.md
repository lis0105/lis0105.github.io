# 树下札记 · 序章

这是 `https://lis0105.github.io/` 的 GitHub Pages 前置入口页。访客先到这里，再通过“步入树下”进入花生壳映射的博客首页。

## 本地预览

```bash
cd lis0105.github.io
python3 -m http.server 4173 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:4173/`。

## 修改博客地址

编辑 `index.html` 中带有 `data-enter` 的链接：

```html
<a data-enter href="你的博客地址">
```

## 发布位置

页面文件用于 GitHub 仓库 `lis0105/lis0105.github.io` 的 `main` 分支根目录。发布后应分享 GitHub Pages 地址，而不是直接分享花生壳地址；直接访问花生壳地址会绕过本序章页。
