import { CategoriesIncome, PostCategoriesIncome } from "../interfaces/CategoriesIncome"

const CatIncomeServiceHook = () => {

    async function fetchGetCategoriesIncome(from?:string, to?:string):Promise<CategoriesIncome[]> {
        if (from && to) {
            try {
                const response = await fetch(`http://localhost:3000/categories-income?from=${from}&to=${to}`)
                const data:CategoriesIncome[] = await response.json()
                return data
            } catch (error) {
                throw new Error('Error Fetching')
            }
        }else {
            try {
                const response = await fetch(`http://localhost:3000/categories-income`)
                const data:CategoriesIncome[] = await response.json()
                return data
            } catch (error) {
                throw new Error('Error Fetching')
            }
        }

    }

    async function postCategoriesIncome(data: PostCategoriesIncome) {
        const dataJson = JSON.stringify(data)
        try {
            await fetch("http://localhost:3000/categories-income",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: dataJson
            })
        } catch (error) {
            console.error(error)
        }
    }
    async function deleteCategoryIncome(catIncomeId:string) {
        try {
            await fetch(`http://localhost:3000/categories-income/${catIncomeId}`,
                {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                }
            )
            }catch(error) {
                console.log(error)
            }
    }
    return { deleteCategoryIncome, postCategoriesIncome, fetchGetCategoriesIncome}
}

export {CatIncomeServiceHook}