import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { UsersModule } from './users.module';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name)private UsersModule: Model<User>){}

 async create(createUserDto: CreateUserDto) {
    const newUser = new  this.UsersModule(createUserDto)
    return await newUser.save()  
    }

 async findAll() {
    return await this.UsersModule.find().exec();
  }

  findOne(id: String) {
    return this.UsersModule.find({_id : id}).exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
