import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, "..", "dist");
const indexPath = join(distDir, "index.html");
const fallbackPath = join(distDir, "404.html");

if (!existsSync(indexPath)) {
  console.warn(
    `Skipping 404 fallback creation: ${indexPath} was not found. Did the Vite build succeed?`,
  );
  process.exit(0);
}

copyFileSync(indexPath, fallbackPath);
console.log(`Created SPA fallback: ${fallbackPath}`);
