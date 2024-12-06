import { Module } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { BootcampsController } from './bootcamps.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BootcampSchema } from './entities/bootcamp.entity';
import { Bootcamp } from './entities/bootcamp.entity';
import { CategorySchema,Category } from './entities/Category.entity';
import { Sponsor, SponsorSchema } from 'src/sponsor/entities/sponsor.entity';


@Module({
  imports:[MongooseModule.forFeature([{name: Bootcamp.name , schema: BootcampSchema}]),
  MongooseModule.forFeature([{name: Category.name , schema: CategorySchema}]),
  MongooseModule.forFeature([{name: Sponsor.name , schema: SponsorSchema}])],
  controllers: [BootcampsController],
  providers: [BootcampsService],
})
export class BootcampsModule {}
