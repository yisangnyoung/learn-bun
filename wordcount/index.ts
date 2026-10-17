// index.ts
function countWords(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
}

const filename = Bun.argv[2];
const file = Bun.file(filename);
const contents = await file.text();
const count = countWords(contents);
console.log(`${count} words`);
