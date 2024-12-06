import { Sponsor } from './../../sponsor/entities/sponsor.entity';
import { CreateBootcampDto } from './../dto/create-bootcamp.dto';
import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Category, CategorySchema } from './Category.entity';
import { IsMongoId } from 'class-validator';
import { Type } from '@nestjs/common';

@Schema()
export class Bootcamp {

    @Prop()
    name: string;

    @Prop()
    phone: number;

    @Prop()
    address: string;

    @Prop()
    averageRating: number;

    @Prop()
    createAt: Date;

    @Prop({
        type: CategorySchema,
        required: true
    })
    category: Category;

    @Prop({type: Types.ObjectId, ref: Sponsor.name})
    sponsor: Sponsor   | Types.ObjectId

    @Prop({type:[{
        name: {type: String},
        color: {type: String}
    }]
  }
)



    skills :  Types.Array<Record< string , any> >


}


export const BootcampSchema = SchemaFactory.createForClass(Bootcamp);