import { Product } from "./CategoriesOutcome";

export interface Bill {
    id:number;
    description: string;
    date: string;
    ProductsId?: Product[]
}

export interface PostBill extends Partial<Omit<Bill, "id" | "ProductsId">>  {} 

export interface ProductToBill {
    quatity: string;
    billId: string;
    productId: string;
    costUnit: string;
}

export interface ProductToBillWithId extends ProductToBill {
    nameProduct?: string
}