import { PostProduct, Product } from "../interfaces/CategoriesOutcome"

const ProductServiceHook = () => {
    async function getProducts(): Promise<Product[]> {
        try {
            const response = await fetch(`http://localhost:3000/products`)
            const data:Product[] = await response.json()
            return data
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    async function getProduct(id: string) {
        try {
            const response = await fetch(`http://localhost:3000/products/${id}`)
            const data = response.json()
            return data
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    async function postProduct(data: PostProduct) {
        const dataStringified = JSON.stringify(data)
        try {
            await fetch(`http://localhost:3000/products`,
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: dataStringified
            })
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    async function patchProduct(id: string, data: PostProduct) {
        const dataStringified = JSON.stringify(data)
        try {
            await fetch(`http://localhost:3000/products/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: dataStringified
            })
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    
    async function deleteProduct(id:string) {
        try {
            await fetch(`http://localhost:3000/products/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                },
            })
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    return {postProduct ,deleteProduct, getProduct, patchProduct, getProducts}
}

export {ProductServiceHook}