import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {customers} from "./customers";
import {orderdetails} from "./orderdetails";


@Entity("orders",{schema:"classicmodels" } )
@Index("customerNumber",["customerNumber",])
export class orders {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"orderNumber"
        })
    orderNumber:number;
        

    @Column("date",{ 
        nullable:false,
        name:"orderDate"
        })
    orderDate:string;
        

    @Column("date",{ 
        nullable:false,
        name:"requiredDate"
        })
    requiredDate:string;
        

    @Column("date",{ 
        nullable:true,
        name:"shippedDate"
        })
    shippedDate:string | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:15,
        name:"status"
        })
    status:string;
        

    @Column("text",{ 
        nullable:true,
        name:"comments"
        })
    comments:string | null;
        

   
    @ManyToOne(type=>customers, customers=>customers.orderss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'customerNumber'})
    customerNumber:customers | null;


   
    @OneToMany(type=>orderdetails, orderdetails=>orderdetails.orderNumber,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    orderdetailss:orderdetails[];
    
}
