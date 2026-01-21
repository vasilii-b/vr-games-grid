// Script to convert games.csv to games.json with required transformations
const fs = require('fs');
const path = require('path');
const csvFilePath = path.join(__dirname, 'games.csv');
const jsonFilePath = path.join(__dirname, 'games.json');

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .replace(/-{2,}/g, '-');
}

function parseCategories(str) {
  if (!str) return [];
  return str.split(',').map(s => s.trim()).filter(Boolean);
}

function parsePegi(str) {
  const n = parseInt(str, 10);
  return isNaN(n) ? null : n;
}

function main() {
  const csv = fs.readFileSync(csvFilePath, 'utf8');
  const lines = csv.split(/\r?\n/).filter(Boolean);
  const header = lines[0].split(',');
  const data = lines.slice(1).map(line => {
    // Handle quoted fields with commas
    // Split CSV line into fields, handling quoted fields and empty values
    const fields = [];
    let field = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        fields.push(field);
        field = '';
      } else {
        field += char;
      }
    }
    fields.push(field);
    // Pad missing fields
    while (fields.length < header.length) fields.push('');
    const [title, url, categorie, pegi, image, video] = fields;
    return {
      id: slugify(title),
      title: title ? title.trim() : '',
      url: url ? url.trim() : '',
      videoUrl: video ? video.trim() : '',
      imageUrl: image ? image.trim() : '',
      pegi: parsePegi(pegi),
      categories: parseCategories(categorie)
    };
  });
  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('games.json generated successfully.');
}

main();
