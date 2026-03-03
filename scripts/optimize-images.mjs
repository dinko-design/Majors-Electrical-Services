import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';

const ASSETS_DIR = path.resolve('src/assets');
const MAX_WIDTH = 2400;

async function optimizeImages() {
  const files = await readdir(ASSETS_DIR);
  const pngs = files.filter(f => f.endsWith('.png'));
  
  console.log(`Found ${pngs.length} PNG files to optimize\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of pngs) {
    const filePath = path.join(ASSETS_DIR, file);
    const before = (await stat(filePath)).size;
    totalBefore += before;

    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    const needsResize = metadata.width > MAX_WIDTH;
    
    let pipeline = sharp(filePath);
    if (needsResize) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }
    
    const optimized = await pipeline
      .png({ quality: 85, compressionLevel: 9, effort: 10 })
      .toBuffer();

    const after = optimized.length;
    totalAfter += after;

    const savings = ((1 - after / before) * 100).toFixed(1);
    const beforeMB = (before / 1024 / 1024).toFixed(2);
    const afterMB = (after / 1024 / 1024).toFixed(2);

    await sharp(optimized).toFile(filePath);
    
    console.log(`${file}: ${beforeMB}MB → ${afterMB}MB (${savings}% saved)${needsResize ? ` [resized ${metadata.width}→${MAX_WIDTH}px]` : ''}`);
  }

  const totalBeforeMB = (totalBefore / 1024 / 1024).toFixed(1);
  const totalAfterMB = (totalAfter / 1024 / 1024).toFixed(1);
  const totalSavings = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(`\nTotal: ${totalBeforeMB}MB → ${totalAfterMB}MB (${totalSavings}% saved)`);
}

optimizeImages().catch(console.error);
