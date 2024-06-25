export interface CategoriesOutcome {
    id: number;
    name: string;
    subcategoriesId: SubcategoriesOutcome[]
}
export interface SubcategoriesOutcome {
    id: number;
    name: string;
    productsId: Product[]
}

export interface Product {
    id: number;
    name: string;
}