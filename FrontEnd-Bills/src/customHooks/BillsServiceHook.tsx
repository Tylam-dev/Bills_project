import { Bill } from "../interfaces/Bills"

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
    return{fetchGetBills}
}

export {BillServiceHook}