const fs = require('fs');
const contentPath = 'src/data/content.ts';
let content = fs.readFileSync(contentPath, 'utf8');

// The exact sequence is "at" (32) (160) "P"
const targetString = 'PortugueseGP Second place for Bastianini and the Ducati Lenovo Team at \u00a0Portimão, a crash for Bagnaia following a coming together in the final stages';

// Find the line with PortugueseGP and replace the path
content = content.replace(/import portuTopi from "\.\/PortugueseGP[^"]+";/, `import portuTopi from "./${targetString}/images/Ducati-Lenovo-Racing-032424.jpg";`);

fs.writeFileSync(contentPath, content);
console.log('Updated content.ts with exact SPACE+NBSP sequence');
