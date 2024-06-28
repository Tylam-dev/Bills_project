import { Product } from "./CategoriesOutcome";

export interface Bill {
    id?:number;
    description?: string;
    date?: string;
    productsId?: ProductBill[]
    total?: string
}

export interface PostBill extends Omit<Bill, "id" | "ProductsId" | "total"> {} 

export interface ProductBill {
    id?: string,
    quantity?: string,
    billId?: string,
    costUnit?: string,
    productId?: Product
}

export interface PostProductBill extends Omit<ProductBill, "id" | "productId">{
    productId?: string
}
