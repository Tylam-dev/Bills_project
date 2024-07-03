import { useNavigate, useParams } from "react-router-dom"
import { BillServiceHook } from "../../../../customHooks/BillsServiceHook"
import { useEffect, useState } from "react"
import { Bill } from "../../../../interfaces/Bills"
import Loading from "../../../../GlobalComponents/Loading"
import { BarChart } from "@mui/x-charts"
import { Box, Modal } from "@mui/material"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "1000 px",
    bgcolor: 'primary.light',
    border: '2px solid #000',
    boxShadow: 24,
  };


const GraphBillModal = () => {
    const [open] = useState<boolean>(true)
    const [subcategories, setSubcategories] = useState<string[] | []>([])
    const [series, setSeries] = useState<number[] | []>([])
    const [loading, setLoading] = useState<boolean>(false)
    const {idBill} = useParams()
    const {getBill} = BillServiceHook()
    const navigate = useNavigate()
    useEffect(() => {
        const getDataBill = async() => {
            if (idBill) {
                const response = await getBill(idBill)
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

    const handleClose = () => {
        navigate(-1)
    };

    if(loading){
        return <Loading/>
    }
    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <BarChart
                    xAxis={[{ 
                        scaleType: 'band', 
                        data: subcategories,
                        colorMap: {
                            type: 'ordinal',
                            colors: ['#cacf85'],
                        } 
                    }]}
                    width={400}
                    barLabel="value"
                    series={[{ data: series}]}
                    height={300}
                /> 
            </Box>

        </Modal>
    )
}

export {GraphBillModal}