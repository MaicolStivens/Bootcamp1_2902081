import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { CreateReviewDto } from "../dto/create-review.dto";

@Schema()
export class Review {

    @Prop()
    title: String;

    @Prop()
    Comment: String;

    @Prop()
    rating: number

}
export const ReviewsSchema = SchemaFactory.createForClass(Review);
