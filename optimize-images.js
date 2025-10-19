// optimize-images.js

import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";

const inputPath = "src/assets/*.{jpg,png,PNG,JPG}";
const outputPath = "src/assets/optimized"; 

(async () => {
  try {
    await imagemin([inputPath], {
      destination: outputPath,
      plugins: [
        imageminMozjpeg({ quality: 75 }),
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminWebp({ quality: 75 })
      ],
    });
    console.log("✅ All images optimized and converted to WebP!");
  } catch (error) {
    console.error("❌ Error optimizing images:", error);
  }
})();
