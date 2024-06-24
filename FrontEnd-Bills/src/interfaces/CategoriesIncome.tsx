export interface CategoriesIncome {
    id: number;
    name: string;
    incomeId: Income[]
}

export interface Income {
    id: number,
    description: string,
    mount: number,
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