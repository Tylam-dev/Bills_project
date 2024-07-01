import { Bill, PostBill, PostProductBill, ProductBill } from "../interfaces/Bills"

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
    async function getBill(id:string):Promise<Bill> {
        try {
            const response = await fetch(`http://localhost:3000/bills/${id}`)
            const data:Bill = await response.json()
            return data
        } catch (error) {
            throw new Error('Error Fetching')
        }
    }
    async function getProductBill(id:string):Promise<ProductBill> {
        try {
            const response = await fetch(`http://localhost:3000/bills-products/${id}`)
            const data: ProductBill = await response.json()
            return data
        } catch (error) {
            throw new Error('Error Fetching')
        }
    }
    async function postProductBill(data: PostProductBill) {
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
    async function patchProductBill(id: string, data: PostProductBill) {
        const dataStringified = JSON.stringify(data)
        try {
            fetch(`http://localhost:3000/bills-products/${id}`,
            {
                method: 'PATCH',
                headers: {
                    "Content-type": "application/json"
                },
                body: dataStringified
            })
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    
    async function deleteProductBill(id: string) {
        try {
            fetch(`http://localhost:3000/bills-products/${id}`,
            {
                method: 'DELETE'
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
    async function deleteBill(id :string) {
        try {
            await fetch(`http://localhost:3000/bills/${id}`,
            {
                method: 'DELETE'
            })
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    return{fetchGetBills, postBill, postProductBill, getBill, getProductBill, patchProductBill, deleteProductBill, deleteBill}
}

export {BillServiceHook}