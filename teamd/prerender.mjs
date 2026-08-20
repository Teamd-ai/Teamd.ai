import { chromium } from "playwright";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { preview } from "vite";

const routes = [
  "/",
  "/solutions",
  "/engagement-models",
  "/clients",
  "/contact",
];

const distDir = join(process.cwd(), "dist");
const indexPath = join(distDir, "index.html");

if (!existsSync(indexPath)) {
  throw new Error("dist/index.html was not found. Run `vite build` first.");
}

const previewServer = await preview({
  root: process.cwd(),
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
  },
});

const browser = await chromium.launch();

try {
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://127.0.0.1:4173${route}`;

    console.log(`Prerendering ${route}...`);

    await page.goto(url, {
      waitUntil: "networkidle",
    });

    await page.waitForTimeout(800);

    const html = await page.content();
    const finalHtml = html.replaceAll(
  "http://127.0.0.1:4173/thankyou",
  "https://teamd.ai/thankyou"
);

    const outputDir =
      route === "/" ? distDir : join(distDir, route.slice(1));

    mkdirSync(outputDir, { recursive: true });

    const outputPath = join(outputDir, "index.html");

    writeFileSync(outputPath, finalHtml, "utf8");

    console.log(`Created ${outputPath}`);
  }
} finally {
  await browser.close();

  if (previewServer.httpServer) {
    await new Promise((resolve) => {
      previewServer.httpServer.close(resolve);
    });
  }
}