// Foo文字ロゴ ファビコン PNG 生成
// 使い方: cd foo-work && node generate-icons.mjs
// ※sharp は foo-portal の node_modules を参照
import sharp from '../foo-portal/node_modules/sharp/lib/index.js';
import fs from 'node:fs';

const svg = fs.readFileSync('./favicon.svg');

const sizes = [
  { name: 'favicon-32.png',          size: 32 },
  { name: 'favicon-64.png',          size: 64 },
  { name: 'apple-touch-icon.png',    size: 180 },  // iOS ホーム画面
  { name: 'icon-192.png',            size: 192 },  // Android Chrome
  { name: 'icon-512.png',            size: 512 },  // PWA / 高解像度
];

for (const { name, size } of sizes) {
  await sharp(svg)
    .resize(size, size)
    .png()
    .toFile(`./${name}`);
  console.log(`✓ ${name} (${size}x${size})`);
}

console.log('\n全PNG生成完了。');
