import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {productlines} from "./productlines";
import {orderdetails} from "./orderdetails";


@Entity("products",{schema:"classicmodels" } )
@Index("productLine",["productLine",])
export class products {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:15,
        name:"productCode"
        })
    productCode:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:70,
        name:"productName"
        })
    productName:string;
        

   
    @ManyToOne(type=>productlines, productlines=>productlines.productss,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'productLine'})
    productLine:productlines | null;


    @Column("varchar",{ 
        nullable:false,
        length:10,
        name:"productScale"
        })
    productScale:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"productVendor"
        })
    productVendor:string;
        

    @Column("text",{ 
        nullable:false,
        name:"productDescription"
        })
    productDescription:string;
        

    @Column("smallint",{ 
        nullable:false,
        name:"quantityInStock"
        })
    quantityInStock:number;
        

    @Column("decimal",{ 
        nullable:false,
        scale:2,
        name:"buyPrice"
        })
    buyPrice:string;
        

    @Column("decimal",{ 
        nullable:false,
        scale:2,
        name:"MSRP"
        })
    MSRP:string;
        

   
    @OneToMany(type=>orderdetails, orderdetails=>orderdetails.productCode,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    orderdetailss:orderdetails[];
    
}
