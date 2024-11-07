import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Review , ReviewsSchema } from './entities/review.entity';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports:[MongooseModule.forFeature([{name: Review.name , schema: ReviewsSchema}])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
