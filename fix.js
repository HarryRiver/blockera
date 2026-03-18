import fs from 'fs';
let content = fs.readFileSync('src/components/home/HomePage.module.css', 'utf8');

// Replace purple/lavender RGBs with orange/peach RGBs
content = content.replace(/rgba\(120,\s*130,\s*171/g, 'rgba(240, 106, 36'); // chrome -> orange
content = content.replace(/rgba\(200,\s*191,\s*224/g, 'rgba(249, 171, 129'); // lavender -> peach
content = content.replace(/rgba\(136,\s*144,\s*181/g, 'rgba(245, 136, 78'); // chrome-light -> light orange
content = content.replace(/rgba\(20,\s*26,\s*54/g, 'rgba(54, 30, 20'); 
content = content.replace(/rgba\(58,\s*69,\s*120/g, 'rgba(120, 60, 40'); 

// The .values background in CSS is currently dark. Make it light like Image 2.
content = content.replace(
    /background: linear-gradient\(170deg,\s*rgba\(6,10,24,0\.82\),\s*rgba\(14,19,48,0\.78\),\s*rgba\(6,10,24,0\.85\)\),\n.*url\('\/images\/bg\/values-bg\.png'\) center \/ cover no-repeat;/g,
    `background: linear-gradient(170deg, rgba(255,251,250,0.92), rgba(253,241,234,0.85), rgba(255,251,250,0.95)),
                url('/images/bg/values-bg.png') center / cover no-repeat;`
);

// We need to change the dark text colors in .values if it becomes light
content = content.replace('.values :global(.section-title) { color: var(--white); }', '.values :global(.section-title) { color: var(--navy); }');
content = content.replace('.values :global(.section-subtitle) { color: rgba(255, 255, 255, 0.3); }', '.values :global(.section-subtitle) { color: var(--text-muted); }');
content = content.replace('.valueCard {\\n    padding: 2.5rem 1.5rem 2rem;\\n    background: rgba(255, 255, 255, 0.02);\\n    border: 1px solid rgba(255, 255, 255, 0.04);', '.valueCard {\\n    padding: 2.5rem 1.5rem 2rem;\\n    background: rgba(255, 255, 255, 0.7);\\n    border: 1px solid rgba(240, 106, 36, 0.1);');
content = content.replace('.valueCard:hover {\\n    background: rgba(255, 255, 255, 0.04);', '.valueCard:hover {\\n    background: rgba(255, 255, 255, 1);');
// In values, hex icon color should be primary chrome not chrome-light
content = content.replace('color: var(--chrome-light);\\n    transition: all 0.5s var(--ease-out);\\n    position: relative;', 'color: var(--chrome);\\n    transition: all 0.5s var(--ease-out);\\n    position: relative;');

// Change dark hero overlay to warmer dark tone (since we can't change the hero image itself, we can make the gradients look chocolate/orange)
content = content.replace(
    /background: linear-gradient\(160deg,\s*rgba\(6,10,24,0\.5\),\s*rgba\(14,19,48,0\.45\),\s*rgba\(10,15,37,0\.5\)\)/g,
    'background: linear-gradient(160deg, rgba(26,15,5,0.4), rgba(48,23,10,0.35), rgba(26,15,5,0.4))'
);

// Hero bottom fade and badge
content = content.replace(/rgba\(6,\s*10,\s*24/g, 'rgba(26, 15, 5');
content = content.replace(/rgba\(8,\s*12,\s*30/g, 'rgba(26, 15, 5');
// other dark colors
content = content.replace(/rgba\(12,\s*16,\s*36/g, 'rgba(36, 16, 12');

fs.writeFileSync('src/components/home/HomePage.module.css', content);
console.log('Done replacing colors');
