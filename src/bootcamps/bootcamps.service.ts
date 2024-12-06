import { error } from 'console';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Bootcamp } from './entities/bootcamp.entity';
import { Model } from 'mongoose';


@Injectable()
export class BootcampsService {

  constructor(@InjectModel(Bootcamp.name) private bootcampModel: Model<Bootcamp>){}

  async create(createBootcampDto: CreateBootcampDto) {
  const newBootcamp = new  this.bootcampModel(createBootcampDto)
  try{
    return await newBootcamp.save()
  }catch(error){
    throw new BadRequestException(
      `Error al guardar: ${error}`
      )
    }
  }

  async findAll() {
    return await this.bootcampModel.find().exec();
  }

  findOne(id: String) {
    return this.bootcampModel.find({_id : id}).exec();
  }

  update(id: String, updateBootcampDto: UpdateBootcampDto) {
    return this.bootcampModel.findByIdAndUpdate(id , {
    $set :  UpdateBootcampDto 
    });
  }

  remove(id: number) {
    return `This action removes a #${id} bootcamp`;
  }
}
