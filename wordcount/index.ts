// index.ts
import { say } from "cowsay";
import { countWords } from "./wordcount.ts";

const filename = Bun.argv[2];

if (!filename) {
  console.error("Usage: bun run index.ts <filename>");
  process.exit(1);
}

const file = Bun.file(filename);

if (!(await file.exists())) {
  console.error(`File not found: ${filename}`);
}

const contents = await file.text();
const count = countWords(contents);
console.log(say({ text: `${count} words` }));
