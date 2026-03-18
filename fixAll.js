import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.css') || file.endsWith('.tsx') || file.endsWith('.ts')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles(srcDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // colors to replace
    const replacements = [
        { from: /rgba\(\s*120,\s*130,\s*171/g, to: 'rgba(240, 106, 36' }, // chrome
        { from: /rgba\(\s*200,\s*191,\s*224/g, to: 'rgba(249, 171, 129' }, // lavender
        { from: /rgba\(\s*136,\s*144,\s*181/g, to: 'rgba(245, 136, 78' }, // chrome-light
        { from: /rgba\(\s*20,\s*26,\s*54/g, to: 'rgba(54, 30, 20' }, // dark navy
        { from: /rgba\(\s*58,\s*69,\s*120/g, to: 'rgba(120, 60, 40' }, // lighter navy
        { from: /rgba\(\s*6,\s*10,\s*24/g, to: 'rgba(26, 15, 5' }, // midnight
        { from: /rgba\(\s*8,\s*12,\s*30/g, to: 'rgba(26, 15, 5' }, // dark
        { from: /rgba\(\s*12,\s*16,\s*36/g, to: 'rgba(36, 16, 12' }, // another dark
        { from: /#7882ab/gi, to: '#f06a24' },
        { from: /#9aa3c8/gi, to: '#f5884e' },
        { from: /#b8c0dc/gi, to: '#fac2a3' },
        { from: /#c8d0e8/gi, to: '#fcd5c0' },
        { from: /#c8bfe0/gi, to: '#f9ab81' },
        { from: /#ddd6ee/gi, to: '#fcd6c4' },
        { from: /#ebe6f4/gi, to: '#fdf1ea' },
        { from: /#f2eef8/gi, to: '#fff6f0' },
        { from: /#f8f6fc/gi, to: '#fffbfa' },
    ];

    replacements.forEach(r => {
        if (content.match(r.from)) {
            content = content.replace(r.from, r.to);
            changed = true;
        }
    });

    if (changed) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});
console.log('All files processed.');
