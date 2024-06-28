import { Box, Button, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import { Bill} from "../../../../interfaces/Bills";
import { BillServiceHook } from "../../../../customHooks/BillsServiceHook";
import Loading from "../../../../GlobalComponents/Loading";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'secondary.main',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };


const BillModal = () => {
    const [open] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(true)
    const {idBill} = useParams()
    const [bill, setBill] = useState<Bill>({})
    const {getBill} = BillServiceHook()
    const navigate = useNavigate()


    useEffect(() => {
        const getDataBill = async() => {
            if (idBill) {
                const response = await getBill(idBill)
                setBill(response)
                setLoading(false)
            }
            
        }
        getDataBill()
    })
    const handleClose = () => {
        navigate("/bills-managment")
    };

    const getTotalCost = (costU: string = "0", quantity: string = "0"): string => {
        const total = Number(costU) * Number(quantity)
        return total.toFixed(2)
    }
    if (loading) {
        return (
            <Loading/>
        )
    }
    return (
        <>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography color={'primary.main'} id="modal-modal-title" variant="h4" component="h2">
            {bill.description!} bill
            </Typography>
            <Box display={'flex'} justifyContent={"space-between"} my={2} gap={2}> 
                <Typography variant="h6" width={"45%"}>Product</Typography>
                <Typography textAlign={'end'} variant="h6" width={"15%"}>Units</Typography>
                <Typography textAlign={'end'} variant="h6" width={"15%"}>C/U</Typography>
                <Typography textAlign={'end'} variant="h6" width={"22%"}>Total</Typography>
            </Box>
            <Box height={2} bgcolor={"primary.light"}/>
            <Box display={'flex'} flexDirection={"column"} gap={2} maxHeight={300} overflow={"auto"}>
                {bill.productsId?.map((order, index) => (
                    <Box 
                    sx={{":hover":{bgcolor:"secondary.light"}, cursor:'pointer'}} 
                    height={40} 
                    key={index} 
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={"space-between"}
                    onClick={() => navigate(`editProductBill/${order.id}/${order.productId?.name}`)}
                    >
                        <Typography width={"45%"}>{order.productId?.name}</Typography>
                        <Typography textAlign={'end'} width={"15%"}>{order.quantity}</Typography>
                        <Typography textAlign={'end'} width={"15%"}>${order.costUnit}</Typography>
                        <Typography textAlign={'end'} width={"22%"}>${getTotalCost(order.costUnit, order.quantity)}</Typography>
                    </Box>
                ))}
            </Box>
            <Box height={2} bgcolor={"primary.light"}/>
            <Box textAlign={'center'} mt={3}>
                <Typography>Total: ${bill.total}</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'center'} mt={3}>
                <Button 
                sx={{height: 57}} 
                variant="contained"
                onClick={() => navigate(`addProductBill`)}
                >
                    Add product
                </Button>
            </Box>
        </Box>
        </Modal>
        <Outlet/>
        </>
    )
}

export {BillModal}