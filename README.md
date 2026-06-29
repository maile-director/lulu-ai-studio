# 麦乐导演 AI 影视个人作品集预览说明

## 启动方式

双击运行：

```bat
start-preview.bat
```

浏览器打开：

```text
http://127.0.0.1:5177/lulu-ai-studio/
```

## 文件结构

```text
lulu-ai-studio/
  index.html
  assets/
    css/styles.css
    js/app.js
  start-preview.bat
```

## 素材引用

网站直接引用上一级素材文件夹中的视频和图片：

- `01_AI短剧`
- `02_AI漫剧`
- `03_AI微电影`
- `04_AI广告片`
- `05_品牌视觉`
- `06_课程案例`
- `07_个人资料与项目证明`

请保持 `lulu-ai-studio` 与这些素材文件夹在同一级目录，视频和图片就可以正常加载。

## 后续可替换位置

- 作品数据：`assets/js/app.js`
- 页面文案：`index.html`
- 视觉样式：`assets/css/styles.css`
- 联系方式：可在 `index.html` 的联系区域替换
