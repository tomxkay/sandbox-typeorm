import { BaseEntity, Brackets, FindManyOptions } from "typeorm";
import { Logger } from "../share/logger";

const log = new Logger("base-repository");
log.info("base-repository initialized");

export class BaseRepository<
  T extends BaseEntity,
  TClass extends typeof BaseEntity
> {
  constructor(public model: TClass, public name: string) {
    log.info("inside base repo");
    log.info("this.model is", this.model);
    log.info("this.name is", this.name);
  }
}
