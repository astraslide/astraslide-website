const fs = require('fs');
const path = require('path');

// Load your products data
const { productsData } = require('./assets/js/product-data.js');

const baseUrl = 'https://shop.astraslide.co';
const today = new Date().toISOString().split('T')[0];

const staticUrls = [
  { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
];

const productUrls = productsData.products.map(product => ({
  loc: `${baseUrl}/product/${product.id}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const allUrls = [...staticUrls, ...productUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'shop/sitemap.xml'), xml);
console.log(`Sitemap generated with ${allUrls.length} URLs`);