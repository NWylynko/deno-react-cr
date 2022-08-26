import React from "./deps.ts";

export interface AppProps {
  url: string;
}

export const App = ({ url }: AppProps) => {
  return (
    <body style={{ display: "flex", flexDirection: "column" }}>
      <span>Hello from Deno & React</span>
      <span>You requested {url}</span>
      <span>This app is using React Server running in Deno and hosted on Google Cloud Run</span>
    </body>
  );
};
