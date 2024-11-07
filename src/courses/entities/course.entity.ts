import { CreateCourseDto } from "../dto/create-course.dto";
import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Course {

    @Prop()
    title: String;

    @Prop()
    descrpcion: String;

}


export const CoursesSchema = SchemaFactory.createForClass(Course);

