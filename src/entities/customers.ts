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
import { orders } from "./orders";
import { payments } from "./payments";

@Entity("customers", { schema: "classicmodels" })
@Index("salesRepEmployeeNumber", ["salesRepEmployeeNumber"])
export class customers extends BaseEntity {
  @Column("int", {
    nullable: false,
    primary: true,
    name: "customerNumber"
  })
  customerNumber: number;

  @Column("varchar", {
    nullable: false,
    length: 50,
    name: "customerName"
  })
  customerName: string;

  @Column("varchar", {
    nullable: false,
    length: 50,
    name: "contactLastName"
  })
  contactLastName: string;

  @Column("varchar", {
    nullable: false,
    length: 50,
    name: "contactFirstName"
  })
  contactFirstName: string;

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
    nullable: false,
    length: 50,
    name: "city"
  })
  city: string;

  @Column("varchar", {
    nullable: true,
    length: 50,
    name: "state"
  })
  state: string | null;

  @Column("varchar", {
    nullable: true,
    length: 15,
    name: "postalCode"
  })
  postalCode: string | null;

  @Column("varchar", {
    nullable: false,
    length: 50,
    name: "country"
  })
  country: string;

  @ManyToOne(type => employees, employees => employees.customerss, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
  })
  @JoinColumn({ name: "salesRepEmployeeNumber" })
  salesRepEmployeeNumber: employees | null;

  @Column("decimal", {
    nullable: true,
    scale: 2,
    name: "creditLimit"
  })
  creditLimit: string | null;

  @OneToMany(type => orders, orders => orders.customerNumber, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
  })
  orderss: orders[];

  @OneToMany(type => payments, payments => payments.customerNumber, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
  })
  paymentss: payments[];
}
