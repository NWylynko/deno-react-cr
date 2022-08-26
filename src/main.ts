import { startHttpServer } from "./server.ts";
import { renderApp } from "./react-ssr.tsx"

// get PORT from environment variables, otherwise default to 8080
const port = Number(Deno.env.get("PORT") ?? "8080")

await startHttpServer({
  port,
  log: true,
  onRequest: ({ url }) => {
    const body = renderApp({ url })
    return { body };
  }
});