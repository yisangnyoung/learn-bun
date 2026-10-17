// index.ts
const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => new Response(
      `<!DOCTYPE html>
<html>
<head><title>My Bun App</title></head>
<body>
  <h1>Welcome to Bun</h1>
  <p>This page is served by Bun.</p>
  <a href="/about">About</a>
</body>
</html>`,
      {
        headers: { "Content-type": "text/html" },
      },
    ),
    "/about": () =>
      new Response(
        `<!DOCTYPE html>
<html>
<head><title>About</title></head>
<body>
  <h1>About</h1>
  <p>A simple site built with Bun.</p>
  <a href="/">Home</a>
</body>
</html>`,
        {
          headers: { "Content-type": "text/html" },
        },
      ),
  },
  fetch(req) {
    return new Response("Page not found", { status: 404 });
  },
});

console.log(`Server running at ${server.url}`);
