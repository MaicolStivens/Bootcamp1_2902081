import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course, CoursesSchema } from './entities/course.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name: Course.name , schema: CoursesSchema}])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
