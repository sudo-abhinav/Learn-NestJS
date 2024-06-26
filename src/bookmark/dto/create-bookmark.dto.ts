import { ApiProperty } from "@nestjs/swagger"
import { IsEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateBookmarkDto{

    @ApiProperty({
        example:"article about nestJs",
        required:true,
        description: 'add title ',
    })
    @IsString()
    // @IsOptional()
    @IsNotEmpty()
    title:string


    @ApiProperty({
        example:"Description About Link",
        required:false
    })
    @IsString()
    @IsOptional()
    description?:string


    @ApiProperty({
        example:'https://www.youtube.com/',
        required:true
    })
    @IsString()
    // @IsOptional()
    @IsNotEmpty()
    link:string
}