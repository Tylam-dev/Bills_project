import { Income, PostIncome } from "../interfaces/CategoriesIncome"

const IncomeServiceHook = () => {
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
    return{ postIncome, patchIncome, deleteIncome, getIncome}
}

export{IncomeServiceHook}