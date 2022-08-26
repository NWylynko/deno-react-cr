# yonked from https://hub.docker.com/r/denoland/deno example

FROM denoland/deno:alpine-1.25.0

WORKDIR /app

# shouldn't use root user for security
USER deno

# Download Deps
COPY ./src/deps.ts ./src/deps.ts
RUN deno cache ./src/deps.ts

# copy in source code
ADD ./src ./src

# this caches the code for faster startup
RUN deno cache ./src/main.ts

CMD ["deno", "run", "--allow-net", "--allow-env=PORT", "./src/main.ts"]