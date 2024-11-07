import { CoursesModule } from './courses.module';
import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CoursesService {

  constructor(@InjectModel(Course.name) private CoursesModule: Model<Course>){}


  async create(createCourseDto: CreateCourseDto) {
    const newCourses = new  this.CoursesModule(createCourseDto)
    return await newCourses.save()
    }

  async findAll() {
    return await this.CoursesModule.find().exec();
  }

  findOne(id: string) {
    return this.CoursesModule.find({_id : id}).exec();
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
