import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { CreateUserDto } from "../dto/create-user.dto";

@Schema()
export class User {


    @Prop()
    name: String;

    @Prop()
    email: String;

    @Prop()
    role: String;

    @Prop()
    password: String;

}
export const UsersSchema = SchemaFactory.createForClass(User);

