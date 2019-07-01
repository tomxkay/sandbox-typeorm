import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {customers} from "./customers";


@Entity("payments",{schema:"classicmodels" } )
export class payments {

   
    @ManyToOne(type=>customers, customers=>customers.paymentss,{ primary:true, nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'customerNumber'})
    customerNumber:customers | null;


    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"checkNumber"
        })
    checkNumber:string;
        

    @Column("date",{ 
        nullable:false,
        name:"paymentDate"
        })
    paymentDate:string;
        

    @Column("decimal",{ 
        nullable:false,
        scale:2,
        name:"amount"
        })
    amount:string;
        
}
