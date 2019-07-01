import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId
} from "typeorm";
import { employees } from "./employees";

@Entity("offices", { schema: "classicmodels" })
export class offices {
  @Column("varchar", {
    nullable: false,
    primary: true,
    length: 10,
    name: "officeCode"
  })
  officeCode: string;

  @Column("varchar", {
    nullable: false,
    length: 50,
    name: "city"
  })
  city: string;

  @Column("varchar", {
    nullable: false,
    length: 50,
    name: "phone"
  })
  phone: string;

  @Column("varchar", {
    nullable: false,
    length: 50,
    name: "addressLine1"
  })
  addressLine1: string;

  @Column("varchar", {
    nullable: true,
    length: 50,
    name: "addressLine2"
  })
  addressLine2: string | null;

  @Column("varchar", {
    nullable: true,
    length: 50,
    name: "state"
  })
  state: string | null;

  @Column("varchar", {
    nullable: false,
    length: 50,
    name: "country"
  })
  country: string;

  @Column("varchar", {
    nullable: false,
    length: 15,
    name: "postalCode"
  })
  postalCode: string;

  @Column("varchar", {
    nullable: false,
    length: 10,
    name: "territory"
  })
  territory: string;

  @OneToMany(type => employees, employees => employees.officeCode, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
  })
  employeess: employees[];
}
