import * as express from 'express';
import {connection} from './connection/mysql-db';
import {router} from './handlers';

const init = async () => {
  const app = express();
  const port = 8080;

  console.log('port is', port);

  const conn = await connection.connect();

  console.log('conn', conn);

  app.use('/', router);

  app.listen(port, () => {
    console.log(`server started at port ${port}`);
  });
};

init();
