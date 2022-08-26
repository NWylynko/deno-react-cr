// @deno-types="https://denopkg.com/DefinitelyTyped/DefinitelyTyped@14ffce9/types/react/index.d.ts"
import React from "https://jspm.dev/react@18.2.0";

// @deno-types="https://denopkg.com/DefinitelyTyped/DefinitelyTyped@14ffce9/types/react-dom/server.d.ts"
import ReactDOMServer from "https://jspm.dev/react-dom@18.2.0/server";

// @deno-types="https://denopkg.com/DefinitelyTyped/DefinitelyTyped@14ffce9/types/react-dom/index.d.ts"
import ReactDOM from "https://jspm.dev/react-dom@18.2.0";

import * as dateFns from "https://jspm.dev/date-fns@2.29.2"

import { serve } from "https://deno.land/std@0.153.0/http/server.ts";

export default React
export {
  ReactDOMServer,
  ReactDOM,
  dateFns,
  serve
}