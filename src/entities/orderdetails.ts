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
import { orders } from "./orders";
import { products } from "./products";

@Entity("orderdetails", { schema: "classicmodels" })
@Index("productCode", ["productCode"])
export class orderdetails {
  @ManyToOne(type => orders, orders => orders.orderdetailss, {
    primary: true,
    nullable: false,
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
  })
  @JoinColumn({ name: "orderNumber" })
  orderNumber: orders | null;

  @ManyToOne(type => products, products => products.orderdetailss, {
    primary: true,
    nullable: false,
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
  })
  @JoinColumn({ name: "productCode" })
  productCode: products | null;

  @Column("int", {
    nullable: false,
    name: "quantityOrdered"
  })
  quantityOrdered: number;

  @Column("decimal", {
    nullable: false,
    scale: 2,
    name: "priceEach"
  })
  priceEach: string;

  @Column("smallint", {
    nullable: false,
    name: "orderLineNumber"
  })
  orderLineNumber: number;
}
