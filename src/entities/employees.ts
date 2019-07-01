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
import { offices } from "./offices";
import { customers } from "./customers";

@Entity("employees", { schema: "classicmodels" })
@Index("reportsTo", ["reportsTo"])
@Index("officeCode", ["officeCode"])
export class employees {
  @Column("int", {
    nullable: false,
    primary: true,
    name: "employeeNumber"
  })
  employeeNumber: number;

  @Column("varchar", {
    nullable: false,
    length: 50,
    name: "lastName"
  })
  lastName: string;

  @Column("varchar", {
    nullable: false,
    length: 50,
    name: "firstName"
  })
  firstName: string;

  @Column("varchar", {
    nullable: false,
    length: 10,
    name: "extension"
  })
  extension: string;

  @Column("varchar", {
    nullable: false,
    length: 100,
    name: "email"
  })
  email: string;

  @ManyToOne(type => offices, offices => offices.employeess, {
    nullable: false,
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
  })
  @JoinColumn({ name: "officeCode" })
  officeCode: offices | null;

  @ManyToOne(type => employees, employees => employees.employeess, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
  })
  @JoinColumn({ name: "reportsTo" })
  reportsTo: employees | null;

  @Column("varchar", {
    nullable: false,
    length: 50,
    name: "jobTitle"
  })
  jobTitle: string;

  @OneToMany(type => customers, customers => customers.salesRepEmployeeNumber, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
  })
  customerss: customers[];

  @OneToMany(type => employees, employees => employees.reportsTo, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
  })
  employeess: employees[];
}
