import { ReviewsModule } from './reviews.module';
import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {

  constructor(@InjectModel(Review.name) private ReviewsModule: Model<Review>){}


  async create(createReviewDto: CreateReviewDto) {
    const newRevierw = new  this.ReviewsModule(createReviewDto)
    return await newRevierw.save()  
  }

  async findAll() {
    return await this.ReviewsModule.find().exec();
  }

  findOne(id: String) {
    return this.ReviewsModule.find({_id : id}).exec();
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
