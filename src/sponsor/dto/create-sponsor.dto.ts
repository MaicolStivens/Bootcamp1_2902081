import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class CreateSponsorDto {


    @IsNotEmpty()
    readonly name: String;


    @IsNotEmpty()
    readonly nit : String;

}
