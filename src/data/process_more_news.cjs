const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname);
const assetsDir = path.join(__dirname, '..', 'assets');
const contentFile = path.join(dataDir, 'content.ts');

const dirsToProcess = [
  "From Paris to Morocco One Foot Rider Shares an Inspiring Story of Resilience and Road Safety",
  "Cyclone at “Be Careful” El Jadida Balancing the Passion for Adventure with Safety First",
  "Royal Enfield in Morocco A Classic Legend Reborn with Modern Flair"
];

let nextIdx = 0;
const assetsFiles = fs.readdirSync(assetsDir);
for (const f of assetsFiles) {
  const m = f.match(/news_more_(\d+)/);
  if (m) {
    const idx = parseInt(m[1], 10);
    if (idx >= nextIdx) nextIdx = idx + 1;
  }
}

const newImports = [];
const newArticles = [];

for (const dName of dirsToProcess) {
  const d = path.join(dataDir, dName);
  const articleMd = path.join(d, 'article.md');
  if (!fs.existsSync(articleMd)) continue;

  const mdText = fs.readFileSync(articleMd, 'utf8');
  let title = "";
  const bodyLines = [];
  
  const blocks = mdText.split('\n\n');
  for (let block of blocks) {
    block = block.trim();
    if (!block) continue;
    
    if (block.startsWith('# ') && !title) {
      title = block.substring(2).trim();
    } else if (block.startsWith('# ')) {
      bodyLines.push(`<h3>${block.substring(2).trim()}</h3>`);
    } else if (block.startsWith('## ')) {
      bodyLines.push(`<h4>${block.substring(3).trim()}</h4>`);
    } else if (block.startsWith('![]')) {
      continue;
    } else {
      if (block.startsWith('- ') || block.startsWith('* ')) {
        const items = block.split('\n').map(l => l.replace(/^[-*]\s+/, '')).filter(Boolean);
        const listHtml = `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
        bodyLines.push(listHtml);
      } else {
        block = block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        if (block.includes('<strong>')) {
          bodyLines.push(`<p>${block}</p>`);
        } else {
          bodyLines.push(block);
        }
      }
    }
  }
  
  if (!title) title = dName;
  
  let excerpt = "";
  for (const b of bodyLines) {
    if (!b.startsWith('<')) {
      excerpt = b;
      break;
    }
  }
  if (!excerpt && bodyLines.length > 0) {
    excerpt = bodyLines[0].replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<strong>/g, '').replace(/<\/strong>/g, '');
  }
  
  const tTitle = { fr: title, en: title, es: title, it: title };
  const tExcerpt = { fr: excerpt, en: excerpt, es: excerpt, it: excerpt };
  const tBody = {
    fr: [...bodyLines],
    en: [...bodyLines],
    es: [...bodyLines],
    it: [...bodyLines]
  };
  
  const imagesDir = path.join(d, 'images');
  const imgImports = [];
  
  if (fs.existsSync(imagesDir)) {
    let imgs = fs.readdirSync(imagesDir).filter(f => /\.(jpg|jpeg|png|webp|avif)$/i.test(f));
    imgs.sort();
    for (const imgFile of imgs) {
      const imgPath = path.join(imagesDir, imgFile);
      const ext = path.extname(imgPath);
      const newImgName = `news_more_${nextIdx}${ext}`;
      const newImgPath = path.join(assetsDir, newImgName);
      fs.copyFileSync(imgPath, newImgPath);
      
      const imgImportName = `newsMore${nextIdx}`;
      newImports.push(`import ${imgImportName} from "@/assets/${newImgName}";`);
      imgImports.push(imgImportName);
      nextIdx++;
    }
  }
  
  const mainImage = imgImports.length > 0 ? imgImports[0] : "newsNew0";
  const extraImages = imgImports.length > 1 ? imgImports.slice(1) : [];
  
  const baseId = tTitle.en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const words = tBody.en.join(' ').split(/\s+/).length;
  const readTime = `${Math.max(1, Math.floor(words / 200))} min`;
  
  const articleObj = {
    id: baseId,
    title: tTitle,
    excerpt: tExcerpt,
    image: `__IMG__${mainImage}__IMG__`,
    category: "New Bikes",
    readTime: readTime,
    body: tBody
  };
  
  if (extraImages.length > 0) {
    articleObj.extraImages = extraImages.map(img => `__IMG__${img}__IMG__`);
  }
  
  let jsonStr = JSON.stringify(articleObj, null, 4);
  jsonStr = jsonStr.replace(/"__IMG__(.*?)__IMG__"/g, '$1');
  newArticles.push(jsonStr);
}

if (newArticles.length > 0) {
  let tsText = fs.readFileSync(contentFile, 'utf8');
  
  // Find last import
  const importLines = tsText.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < importLines.length; i++) {
    if (importLines[i].startsWith('import ') && importLines[i].includes('@/assets')) {
      lastImportIdx = i;
    }
  }
  
  if (lastImportIdx !== -1) {
    importLines.splice(lastImportIdx + 1, 0, ...newImports);
    tsText = importLines.join('\n');
  }
  
  // Find array start
  const arrayStartMarker = 'export const articles: Article[] = [';
  const arrayStartIdx = tsText.indexOf(arrayStartMarker);
  if (arrayStartIdx !== -1) {
    const insertPos = arrayStartIdx + arrayStartMarker.length;
    const articlesStr = '\n' + newArticles.join(',\n') + ',';
    tsText = tsText.slice(0, insertPos) + articlesStr + tsText.slice(insertPos);
  }
  
  fs.writeFileSync(contentFile, tsText, 'utf8');
  console.log("Done generating content.ts via JS script");
} else {
  console.log("No articles processed.");
}
