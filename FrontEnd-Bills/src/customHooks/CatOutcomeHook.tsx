import { CategoriesOutcome } from "../interfaces/CategoriesOutcome"

const CatOutcomeHook = () => {
    async function fetchGetCategoriesOutcome():Promise<CategoriesOutcome[]> {
        try {
            const response = await fetch('http://localhost:3000/categories-outcome')
            const data:CategoriesOutcome[] = await response.json()
            return data
        } catch (error) {
            throw new Error('Error Fetching')
        }
    }

    return {
        fetchGetCategoriesOutcome, 
    }
}

export {CatOutcomeHook}