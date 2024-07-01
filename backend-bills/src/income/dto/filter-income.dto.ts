import { IsDate, IsOptional } from "class-validator";

export class FilterIncomeDto {
    @IsOptional()
    @IsDate()
    from: string;

    @IsOptional()
    @IsDate()
    to: string;
}