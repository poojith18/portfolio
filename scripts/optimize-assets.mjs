import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

async function optimizeProfile() {
  const source = join(publicDir, "profile.jpg");
  if (!existsSync(source)) {
    console.log("Skip profile: public/profile.jpg not found");
    return;
  }

  const resized = sharp(source).rotate().resize(800, 800, {
    fit: "cover",
    position: "centre",
  });

  const buffer = await resized.toBuffer();

  await sharp(buffer).jpeg({ quality: 82, mozjpeg: true }).toFile(join(publicDir, "profile.jpg"));
  await sharp(buffer).webp({ quality: 82 }).toFile(join(publicDir, "profile.webp"));

  const stats = await sharp(join(publicDir, "profile.jpg")).metadata();
  console.log(`Optimized profile.jpg + profile.webp (${stats.width}×${stats.height})`);
}

async function generateOgImage() {
  const svgPath = join(publicDir, "og-image.svg");
  const pngPath = join(publicDir, "og-image.png");
  if (!existsSync(svgPath)) {
    console.log("Skip og-image: public/og-image.svg not found");
    return;
  }
  const svg = readFileSync(svgPath);

  await sharp(svg).resize(1200, 630).png({ quality: 90 }).toFile(pngPath);
  console.log("Generated public/og-image.png (1200×630)");
}

async function generateAppleTouchIcon() {
  const output = join(publicDir, "apple-touch-icon.png");
  const profile = join(publicDir, "profile.jpg");
  const favicon = join(publicDir, "favicon.svg");

  if (existsSync(profile)) {
    await sharp(profile)
      .resize(180, 180, { fit: "cover", position: "centre" })
      .png()
      .toFile(output);
  } else if (existsSync(favicon)) {
    await sharp(readFileSync(favicon)).resize(180, 180).png().toFile(output);
  } else {
    console.log("Skip apple-touch-icon: no profile.jpg or favicon.svg");
    return;
  }

  console.log("Generated public/apple-touch-icon.png (180×180)");
}

await optimizeProfile();
await generateOgImage();
await generateAppleTouchIcon();
