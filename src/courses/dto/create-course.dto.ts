import { IsArray, IsNotEmpty } from "class-validator";

export class CreateCourseDto {

    @IsNotEmpty()
    readonly title : String;


    readonly descripcion : String;

    @IsNotEmpty()
    @IsArray()
    readonly skills: any[]
    
}
