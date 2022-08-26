import React, { dateFns } from "./deps.ts";

export interface AppProps {
  url: string;
}

export const App = ({ url }: AppProps) => {
  const time = dateFns.lightFormat(new Date(), "haaaa' on the 'd'/'M'/'y");
  return (
    <html>
      <head>
        <title>Deno and React</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow&display=swap" rel="stylesheet" />
      </head>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Archivo Narrow', sans-serif",
          fontSize: 24,
          margin: 16,
          backgroundColor: "#FEFCEC",
          color: "#8AC2D0",
        }}
      >
        <span>Hello from Deno & React</span>
        <span>
          You requested {url} at {time}
        </span>
        <span>This app is using React SSR in Deno and hosted on Google Cloud Run</span>
        <span>
          Here is the source code{" "}
          <a href="https://github.com/NWylynko/deno-react-cr" style={{ color: "#0C1A1D" }}>
            https://github.com/NWylynko/deno-react-cr
          </a>
        </span>
        <span>
          Follow me on Twitter{" "}
          <a href="https://twitter.com/wylynko" style={{ color: "#0C1A1D" }}>
            @wylynko
          </a>
        </span>
      </body>
    </html>
  );
};
