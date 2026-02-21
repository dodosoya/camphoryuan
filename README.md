# 牛樟緣 — 台灣自產牛樟茶

家族自產自銷的牛樟葉手工茶品牌形象網站。

**網站：** https://camphoryuan.com/

## 關於

阿公的那塊地，曾經種滿了檳榔。全家人決定把檳榔砍掉，改種牛樟樹。每個週末大人小孩一起上山澆水照顧樹苗，幾年後製成牛樟茶，直接供消費者透過 LINE 或電話訂購。

## 網站架構

純靜態單頁網站，無後端、無金流：

- **HTML5 + Tailwind CSS v3**（CDN，無需 npm）
- **Google Fonts**：Noto Serif TC（中文）、Lora（英文）
- **托管**：GitHub Pages，custom domain `camphoryuan.com`

```
camphoryuan/
├── index.html          # 全站唯一頁面
├── assets/             # 農場照片
│   ├── hero.jpg
│   ├── story-1~3.jpg
│   └── gallery-1~5.jpg
├── sitemap.xml
├── robots.txt
└── CNAME               # camphoryuan.com
```

## 本機開發

```bash
open index.html
```

手機版預覽：Chrome DevTools → 裝置工具列 → iPhone SE (375px)

## 部署

Push 到 `master` 分支即自動部署至 GitHub Pages。

## 待完成

- [ ] LINE 官方帳號 QR Code（聯絡區塊目前為佔位符）
- [ ] 電話號碼（`<a href="tel:">` 待補）
- [ ] 申請 LINE 官方帳號
- [ ] 查閱農產品相關法規

## 訂購

消費者透過 LINE 或電話聯絡，無購物車。
