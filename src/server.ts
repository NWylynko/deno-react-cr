// yonked and modified from the docs https://deno.land/manual@v1.25.0/examples/http_server

import { serve } from "./deps.ts"
import { uuid } from './uuid.ts';

type HttpResponse = {
  body: BodyInit | null | undefined;
  headers?: Headers;
  status?: number;
  statusText?: string;
}

interface HttpServer {
  port: number;
  log?: boolean;
  onRequest: (request: Request) => Promise<HttpResponse> | HttpResponse;
}

export const startHttpServer = async (options: HttpServer) => {

  const handler = async (request: Request): Promise<Response> => {
    const id = uuid()
      const { url, method } = request;

      if (options.log) {
        console.log({ status: "New Request", method, url, id })
      }

      try {
        
        
        const { body, headers, status, statusText } = await options.onRequest(request);


        return new Response(body, {
          headers: {
            "content-type": "text/html; charset=UTF-8",
            ...headers,
          },
          status: status ?? 200,
          statusText: statusText ?? "OK"
        });

      } catch (error) {
        
        console.error(error)
        
        return new Response(error.message, {
          status: 500,
          statusText: "Internal Server Error"
        });
      
      } finally {
        if (options.log) {
          console.log({ status: "Request Completed", method, url, id })
        }
      }
  };
  
  await serve(handler, { port: options.port });
}

