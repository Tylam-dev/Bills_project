import { Product } from "./CategoriesOutcome";

export interface Bill {
    id:number;
    description: string;
    date: string;
    ProductsId?: Product[]
}

export interface PostBill extends Omit<Bill, "id">  {} 