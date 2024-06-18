import { Product } from "./Categories";

export interface Bill {
    id:number;
    description: string;
    date: Date;
    ProductsId?: Product[]
}