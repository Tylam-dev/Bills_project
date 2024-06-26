import { Bill, PostBill } from "../interfaces/Bills"

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
    async function postBill(data :PostBill) {
        const dataStringiied = JSON.stringify(data)
        try {
            await fetch(`http://localhost:3000/bills`,
            {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: dataStringiied
            })
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    return{fetchGetBills, postBill}
}

export {BillServiceHook}