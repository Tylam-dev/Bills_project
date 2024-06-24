import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBillDto {
    @IsOptional()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsDate()
    date: string;
}
