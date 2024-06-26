import { PostProduct } from "../interfaces/CategoriesOutcome"

const ProductServiceHook = () => {
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
    return {postProduct ,deleteProduct}
}

export {ProductServiceHook}