import { CategoriesOutcome, PostCatOutcome } from "../interfaces/CategoriesOutcome"

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
    async function postCatOutcome(data:PostCatOutcome) {
        const dataStringified = JSON.stringify(data)
        try {
            await fetch(`http://localhost:3000/categories-outcome`,
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: dataStringified
            })
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    async function deleteCatOutcome(id:string) {
        try {
            await fetch(`http://localhost:3000/categories-outcome/${id}`,
            {
                method: 'DELETE',
            })
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    return {
        fetchGetCategoriesOutcome, 
        postCatOutcome,
        deleteCatOutcome
    }
}

export {CatOutcomeHook}