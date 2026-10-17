// index.ts
const filename = Bun.argv[2];
console.log(Bun.argv);

if (!filename) {
  console.error("에러: 읽을 파일명을 입력해 주세요!");
  process.exit(1);
}
const file = Bun.file(filename);
const contents = await file.text();
console.log(contents);
