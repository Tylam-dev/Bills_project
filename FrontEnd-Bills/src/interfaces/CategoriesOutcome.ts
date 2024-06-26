
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

export interface PostCatOutcome extends Partial<Omit<CategoriesOutcome, "id" | "subcategoriesId">> {}

export interface PostSubcatOutCome extends Partial<Omit<Product, "id" | "productsId">> {
    categoryId?: string;
}

export interface PostProduct extends Partial<Omit<Product, "id">>{
    subCategoryId?: string;
}