import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export  class Category extends Document{

    @Prop({ required: true})
    name: String;

    @Prop()
    description: String;

}

export const CategorySchema = SchemaFactory.createForClass(Category)

