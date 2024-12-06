import { Sponsor } from './../../sponsor/entities/sponsor.entity';
import { IsNotEmpty , IsAlpha, IsIBAN, IsInt , Min, Max, IsPositive, ValidateNested, IsMongoId, IsArray} from 'class-validator'
import { Category } from '../entities/Category.entity';
import { CreateCategoryDto } from './Category.dtos';
import { Type } from 'class-transformer';
import { CreateSponsorDto } from 'src/sponsor/dto/create-sponsor.dto';
import { Types } from 'mongoose';

export class CreateBootcampDto {

    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    @IsPositive()
    readonly phone : String;
    readonly address : String;
    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(10)
    readonly averageRating : number;


    readonly createdAt : Date;

    @IsNotEmpty()
    @ValidateNested()
    @Type(()=> CreateCategoryDto)
    readonly category : CreateCategoryDto;

    @IsMongoId()
    @IsNotEmpty()
    Sponsor: string 



    @IsNotEmpty()
    @IsArray()
    readonly skills: any[]
}
