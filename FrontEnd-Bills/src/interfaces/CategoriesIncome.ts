export interface CategoriesIncome {
    id: string;
    name: string;
    incomeId: Income[]
}

export interface Income {
    id: string,
    description: string,
    mount: string
    date: string
}

export interface PostCategoriesIncome {
    name: string | null;
}

export interface PostIncome  {
    description?: string
    mount?: string
    date?: string
    categoryId?: string
}