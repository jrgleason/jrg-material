import path from 'path';
import Pug from 'koa-pug';
import mount from "koa-mount";
import serve from "koa-static";
import Koa from "koa";
import fs from 'fs';
import http2 from 'http2';
import {router} from "./router.mjs"
import { JRGResume } from "./Resume.mjs"

const CERT_FILE = process.env.CERT_FILE;
const KEY_FILE = process.env.KEY_FILE;
const PORT = process.env.PORT || 3002;

const app = new Koa();
const resume = new JRGResume();

resume.use

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const pug = new Pug({
    app,
    viewPath: `${__dirname}/views`,
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(mount('/resume', resume))
  .use(mount('/ui', serve(`${__dirname}/ui`)))
  .use(mount('/css', serve(`${__dirname}/css`)))
  .use(mount('/xstate', serve(`${__dirname}/../node_modules/@xstate`)))
  .use(mount('/jrg', serve(`${__dirname}/../node_modules/@jrg-material`)));

let server = app;
if (KEY_FILE) {
  const options = {
        key: fs.readFileSync(KEY_FILE),
        cert: fs.readFileSync(CERT_FILE),
  };
  server = http2.createSecureServer(options, app.callback());
}

server.listen(PORT);