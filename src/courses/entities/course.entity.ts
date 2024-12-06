import { CreateCourseDto } from "../dto/create-course.dto";
import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Sponsor } from "src/sponsor/entities/sponsor.entity";

@Schema()
export class Course {

    @Prop()
    title: String;

    @Prop()
    descrpcion: String;

    
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


export const CoursesSchema = SchemaFactory.createForClass(Course);

