import { IsDate, IsOptional } from "class-validator";

export class FilterCategoriesIncomeDto {
    @IsOptional()
    @IsDate()
    from: string;

    @IsOptional()
    @IsDate()
    to: string;
}