import { Bill, PostBill, ProductToBill } from "../interfaces/Bills"

const BillServiceHook = () => {

    async function fetchGetBills(from:string, to:string):Promise<Bill[]> {
        try {
            const response = await fetch(`http://localhost:3000/bills?from=${from}&to=${to}`)
            const data:Bill[] = await response.json()
            return data
        } catch (error) {
            throw new Error('Error Fetching')
        }
    }
    async function postProdutToBill(data: ProductToBill) {
        const dataStringified = JSON.stringify(data)
        try {
            fetch(`http://localhost:3000/bills-products`,
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
    async function postBill(data :PostBill): Promise<Bill> {
        const dataStringified = JSON.stringify(data)
        try {
            const response = await fetch(`http://localhost:3000/bills`,
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: dataStringified
            })
            const data:Bill = await response.json()
            return data
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    return{fetchGetBills, postBill, postProdutToBill}
}

export {BillServiceHook}