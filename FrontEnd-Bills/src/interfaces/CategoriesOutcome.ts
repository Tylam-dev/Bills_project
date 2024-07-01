
export interface CategoriesOutcome {
    id: number;
    name: string;
    subcategoriesId: SubcategoriesOutcome[]
}
export interface SubcategoriesOutcome {
    id: number;
    name: string;
    productsId: Product[]
    categoryId?:CategoriesOutcome
}

export interface Product {
    id: string;
    name: string;
    subCategoryId?: SubcategoriesOutcome
}

export interface PostCatOutcome extends Partial<Omit<CategoriesOutcome, "id" | "subcategoriesId">> {}

export interface PostSubcatOutCome extends Partial<Omit<Product, "id" | "productsId">> {
    categoryId?: string;
}

export interface PostProduct {
    name?: string;
    subCategoryId?: string;
}