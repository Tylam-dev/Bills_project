import { PostSubcatOutCome } from "../interfaces/CategoriesOutcome"

const SubcatOutcomeServiceHook = () => {
    async function postSubcatOutcome(data: PostSubcatOutCome) {
        const dataStringified = JSON.stringify(data)
        try{
            await fetch(`http://localhost:3000/sub-categories-outcome`,
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: dataStringified
            })
        }catch(error){
            throw new Error(`${error}`)
        }
    }
    async function deleteSubcatOutcome(id: string) {
        try{
            await fetch(`http://localhost:3000/sub-categories-outcome/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                },
            })
        }catch(error){
            throw new Error(`${error}`)
        }
    }
    return{ postSubcatOutcome, deleteSubcatOutcome }
}
export{SubcatOutcomeServiceHook}