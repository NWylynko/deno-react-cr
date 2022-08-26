import { App, AppProps } from "./app.tsx";

import React, { ReactDOMServer } from "./deps.ts";

export const renderApp = (props: AppProps) => ReactDOMServer.renderToString(<App {...props} />);
