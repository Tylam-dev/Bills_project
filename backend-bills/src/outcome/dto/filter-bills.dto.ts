import { IsDate, IsOptional } from "class-validator";

export class FilterBillsDto {
    @IsOptional()
    @IsDate()
    from: string;

    @IsOptional()
    @IsDate()
    to: string;
}