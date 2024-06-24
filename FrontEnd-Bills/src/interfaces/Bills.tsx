import { Product } from "./CategoriesOutcome";

export interface Bill {
    id:number;
    description: string;
    date: string;
    ProductsId?: Product[]
}