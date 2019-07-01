import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {products} from "./products";


@Entity("productlines",{schema:"classicmodels" } )
export class productlines {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"productLine"
        })
    productLine:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:4000,
        name:"textDescription"
        })
    textDescription:string | null;
        

    @Column("mediumtext",{ 
        nullable:true,
        name:"htmlDescription"
        })
    htmlDescription:string | null;
        

    @Column("mediumblob",{ 
        nullable:true,
        name:"image"
        })
    image:Buffer | null;
        

   
    @OneToMany(type=>products, products=>products.productLine,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    productss:products[];
    
}
