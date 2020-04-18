import * as Express from 'express';
import { ServerLoader, ServerSettings } from '@tsed/common';
import Path = require('path');
import bodyParser from 'body-parser';

const port = process.env.port || 3200;

@ServerSettings({
  rootDir: Path.resolve(__dirname),
  httpPort: `127.0.0.1:${port}`,
  httpsPort: false,
  mount: {
    '/api': '${rootDir}/controllers/**/*.js',
  },
})
export class Server extends ServerLoader {
  public $beforeRoutesInit(): void | Promise<any> {
    // Configure the middlewares required by your application to work
    this.use(bodyParser.urlencoded({ extended: true }));
  }

  public $onReady() {
    console.log(`Server running at port... ${port}`);
  }

  public $onServerInitError(err: any): void {
    console.error(err);
  }
}

new Server().start();
