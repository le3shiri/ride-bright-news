const fs = require('fs');
const dir = 'src/data';
const files = fs.readdirSync(dir);
const target = files.find(f => f.startsWith('PortugueseGP'));

if (target) {
  console.log('Target:', target);
  console.log('JSON:', JSON.stringify(target));
  for (let i = 0; i < target.length; i++) {
    console.log(`${i}: ${target[i]} (${target.charCodeAt(i)})`);
  }
} else {
  console.log('Folder not found');
}
