const fs = require('fs');
const content = fs.readFileSync('src/data/content.ts', 'utf8');
const line = content.split('\n')[54]; // Line 55
console.log('Line 55 Content:', line);
console.log('JSON:', JSON.stringify(line));
for (let i = 0; i < line.length; i++) {
  if (line[i] === 'a' && line[i+1] === 't') {
    console.log(`Found "at" at ${i}`);
    console.log(`i+2: ${line.charCodeAt(i+2)}`);
    console.log(`i+3: ${line.charCodeAt(i+3)}`);
    console.log(`i+4: ${line.charCodeAt(i+4)}`);
  }
}
