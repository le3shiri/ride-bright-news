const fs = require('fs');
const content = fs.readFileSync('src/data/content.ts', 'utf8');
const line = content.split('\n')[54];
for (let i = 0; i < line.length; i++) {
  if (line.charCodeAt(i) > 127) {
    console.log(`${i}: ${line[i]} (${line.charCodeAt(i)})`);
  }
}
