import { Bill } from "../interfaces/Bills"
import { CategoriesIncome, Income, PostCategoriesIncome, PostIncome } from "../interfaces/CategoriesIncome"
import { CategoriesOutcome } from "../interfaces/CategoriesOutcome"

const FetchData = () => {
    async function fetchGetCategoriesOutcome():Promise<CategoriesOutcome[]> {
        try {
            const response = await fetch('http://localhost:3000/categories-outcome')
            const data:CategoriesOutcome[] = await response.json()
            return data
        } catch (error) {
            throw new Error('Error Fetching')
        }
    }

    async function fetchGetBills(from:string, to:string):Promise<Bill[]> {
        try {
            const response = await fetch(`http://localhost:3000/bills?from=${from}&to=${to}`)
            const data:Bill[] = await response.json()
            return data
        } catch (error) {
            throw new Error('Error Fetching')
        }
    }

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
    async function postIncome(data:PostIncome) {
        const dataJson = JSON.stringify(data)
        try {
            await fetch("http://localhost:3000/income",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: dataJson
            }
            )
        }catch(error) {
            throw new Error('Error Post')
        }
    }
    async function patchIncome(id:string, body: PostIncome) {
        const bodyString = JSON.stringify(body)
        try {
            await fetch(`http://localhost:3000/income/${id}`,
                {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: bodyString,
                }
            )
            }catch(error) {
                console.log(error)
            }
    }
    async function getIncome(id:string) {
        try {
            const response = await fetch(`http://localhost:3000/income/${id}`)
            const data: Income = await response.json()
            return data
        } catch (error) {
            throw new Error('Error fetching')
        }
    }
    async function deleteIncome(incomeId:string) {
        try {
            await fetch(`http://localhost:3000/income/${incomeId}`,
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
    return {
        fetchGetCategoriesOutcome, 
        fetchGetBills, 
        fetchGetCategoriesIncome, 
        postCategoriesIncome, 
        postIncome, 
        deleteIncome, 
        getIncome, 
        patchIncome, 
        deleteCategoryIncome
    }
}

export {FetchData}