import { Categories } from "../interfaces/Categories"

const FetchData = () => {
    async function fetchGetCategories():Promise<Categories[]> {
        try {
            const response = await fetch('http://localhost:3000/categories-outcome')
            const data:Categories[] = await response.json()
            return data
        } catch (error) {
            throw new Error('Error Fetching')
        }
    }
    return {fetchGetCategories}
}

export {FetchData}