import * as Express from 'express';
import { ServerLoader, ServerSettings } from '@tsed/common';
import Path = require('path');
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { dbKeys } from './config/dbKeys';

const port = process.env.PORT || 3200;

@ServerSettings({
  rootDir: Path.resolve(__dirname),
  httpPort: `127.0.0.1:${port}`,
  httpsPort: false,
  mount: {
    '/api': '${rootDir}/controllers/**/*.js',
  },
})
export class Server extends ServerLoader {
  public async $beforeRoutesInit(): Promise<any | void> {
    // Configure the middlewares required by your application to work
    this.use(bodyParser.urlencoded({ extended: true }));
    this.use(bodyParser.json());

    // setup mongodb
    try {
      await mongoose.connect(dbKeys.uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log('Mongodb connected successfully');
    } catch (err) {
      console.log(err);
    }
  }

  public async $onReady(): Promise<void> {
    console.log(`Server running at port... ${port}`);
  }
}

new Server().start();
