const fs = require('fs');
const html = fs.readFileSync('spring-boot.html', 'utf8');

const regex = /let\s+pageProps\s*=\s*(\{.*?\});/s;
const match = html.match(regex);
if (match) {
  console.log("Found pageProps");
} else {
  console.log("No pageProps");
}

const titles = [...html.matchAll(/<span[^>]*class="[^"]*text-lg[^"]*"[^>]*>(.*?)<\/span>/g)];
const extracted = titles.map(m => m[1]);
fs.writeFileSync('spring-boot-titles.json', JSON.stringify(extracted, null, 2));
console.log("Saved titles");
