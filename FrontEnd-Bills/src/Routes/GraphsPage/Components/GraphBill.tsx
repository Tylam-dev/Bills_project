import { useParams } from "react-router-dom"
import { BillServiceHook } from "../../../customHooks/BillsServiceHook"
import { useEffect, useState } from "react"
import { Bill } from "../../../interfaces/Bills"
import Loading from "../../../GlobalComponents/Loading"
import { BarChart } from "@mui/x-charts"


const GraphBill = () => {
    const [bill, setBill] = useState<Bill |null>(null)
    const [subcategories, setSubcategories] = useState<string[] | []>([])
    const [series, setSeries] = useState<number[] | []>([])
    const [loading, setLoading] = useState<boolean>(false)
    const {idBill} = useParams()
    const {getBill} = BillServiceHook()

    useEffect(() => {
        const getDataBill = async() => {
            if (idBill) {
                const response = await getBill(idBill)
                setBill(response)
                imprimir(response)
                setLoading(false)
            }
        }
        getDataBill()

    },[])
    const imprimir = (bill: Bill) => {
        if (bill?.productsId){
            const categories:string[] = []
            const data:number[] = []
            bill.productsId.map((product) => {
                let category = product.productId?.subCategoryId?.name
                const costInProduct = Number(product.quantity) * Number(product.costUnit)
                if (category && categories.includes(category)) {
                    const indexCat = categories.findIndex((e) => e === category)
                    data[indexCat] = data[indexCat] + costInProduct
                    return
                }else if (category) {
                    categories.push(category)
                    data.push(costInProduct)
                }
            })
            setSubcategories(categories)
            setSeries(data)
        }
    }
    if(loading){
        return <Loading/>
    }
    return(
        <>
        <BarChart
            xAxis={[{ 
                scaleType: 'band', 
                data: subcategories,
                colorMap: {
                    type: 'ordinal',
                    colors: ['#cacf85'],
                  } 
            }]}
            barLabel="value"
            series={[{ data: series}]}
            height={300}
        />
        </>
    )
}

export {GraphBill}