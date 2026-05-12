const fs = require('fs');
const path = require('path');

const dir = 'src/data';
const files = fs.readdirSync(dir);
const target = files.find(f => f.startsWith('PortugueseGP'));

if (target) {
  const oldPath = path.join(dir, target);
  const newPath = path.join(dir, 'portuguese-gp');
  try {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${target} to portuguese-gp`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
} else {
  console.log('Folder not found');
}
