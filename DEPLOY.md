# 瑞元国内独立站部署说明

把本目录 `ruiyuan-domestic-site` 里的所有内容上传到服务器网站根目录，即可作为静态网站绑定域名。

必须上传：

- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- `assets/`
- `products/`

当前页面：

- 首页：`/`
- 阻燃ABS产品页：`/products/flame-retardant-abs/`

上线前需要确认：

1. 如果正式域名不是 `https://www.ruiyuan99.com/`，请替换：
   - `index.html` 的 canonical
   - `products/flame-retardant-abs/index.html` 的 canonical
   - `sitemap.xml` 的所有 URL
   - `robots.txt` 的 sitemap URL

2. 表单目前是前端演示提示，不会真的发邮件。正式上线需要接入：
   - 邮件接口
   - 企业微信/微信客服
   - CRM
   - 百度/巨量/腾讯广告转化追踪

3. 后续建议继续新增产品页：
   - `/products/pom/`
   - `/products/flame-retardant-pa66/`
   - `/products/asa-uv-resistant/`
   - `/products/light-shielding-pc/`

4. SEO/GEO 后续建议：
   - 每个产品页补完整参数表
   - 每个产品页补 FAQ 结构化数据
   - 建设 `/knowledge/` 材料知识库
   - 提交 `sitemap.xml` 到百度搜索资源平台
