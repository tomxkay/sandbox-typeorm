import {createConnection, getConnection} from 'typeorm';
import {
  customers,
  employees,
  offices,
  orderdetails,
  orders,
  payments,
  productlines,
  products,
} from '../entities';
import {Logger} from '../share/logger';

const log = new Logger('connection:mysql-db');
log.info('mysql-db connection initialize');

class DbConnection {
  public connect = () => {
		console.log('inside connect');
    return createConnection({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: '',
      database: 'classicmodels',
      synchronize: true,
      logging: true,
      entities: [
        customers,
        employees,
        offices,
        orderdetails,
        orders,
        payments,
        productlines,
        products,
      ],
    });
  };
}

export const connection = new DbConnection();
