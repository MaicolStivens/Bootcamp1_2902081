import { CreateBootcampDto } from './../dto/create-bootcamp.dto';
import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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


}


export const BootcampSchema = SchemaFactory.createForClass(Bootcamp);