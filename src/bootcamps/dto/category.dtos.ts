import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString, Max} from "class-validator";

export class CreateCategoryDto {

    @IsNotEmpty()
    @IsString()
    readonly name: String;
    
    @IsNotEmpty()
    @IsString()
    readonly description :String;

}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto){
    
}