import { EntityRepository } from "typeorm";
import { customers } from "../entities";
import { BaseRepository } from "./base-repository";
import { Logger } from "../share/logger";

const log = new Logger("customer-repository");
log.info("customer-repository initialized");

@EntityRepository(customers)
export class CustomerRepository extends BaseRepository<
  customers,
  typeof customers
> {
  public findOne() {
    return customers.findOne();
  }
  public findMany(limit: number) {
    const query = customers.createQueryBuilder("customer");
    if (limit && limit < 10) {
      query.limit(limit);
    } else {
      query.limit(5);
    }
    return query.getMany();
  }
  public test() {
    const query = customers.createQueryBuilder("customer").limit(2);
    return query.getMany();
  }
}

export const customerRepository = new CustomerRepository(customers, "customer");
