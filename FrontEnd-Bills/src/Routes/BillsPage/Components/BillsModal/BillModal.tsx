import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProductToBill, ProductToBillWithId } from "../../../../interfaces/Bills";
import { BillServiceHook } from "../../../../customHooks/BillsServiceHook";
import { ProductOfBillModal } from "./ProductOfBillModal";

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
    const [showProductDetail, setShowProductDetail] = useState<boolean>(true)
    const { billDescript, idBill} = useParams()
    const [products, setProducts] = useState<ProductToBillWithId[] | []>([])
    const {postProdutToBill} = BillServiceHook()
    const navigate = useNavigate()

    const handleClose = () => {
        navigate("/bills-managment")
    };
    const submitBill = async() => {
        if (products) {
            try{
                for(const product of products){
                    await postProdutToBill(product)
                }
            }catch(error){
                console.error(error)
            }
        }
    }

    const getTotalProducts = (data:ProductToBillWithId[]): number => {
        const totalProducts = data.reduce((acum, value) => {
            const total = Number(value.costUnit) * Number(value.quatity)
            return acum + total
        },0)
        return totalProducts
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
            {billDescript} bill
            </Typography>
            <Box display={'flex'} justifyContent={"space-between"} my={2} gap={2}> 
                <Typography variant="h6" width={"45%"}>Product</Typography>
                <Typography variant="h6" width={"15%"}>Units</Typography>
                <Typography variant="h6" width={"15%"}>C/U</Typography>
                <Typography variant="h6" width={"22%"}>Total</Typography>
            </Box>
            <Box display={'flex'} flexDirection={"column"} gap={2} maxHeight={300} overflow={"auto"}>
                {products.map((product, index) => (
                    <Box 
                    sx={{":hover":{bgcolor:"secondary.light"}, cursor:'pointer'}} 
                    height={40} 
                    key={index} 
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={"space-between"}
                    >
                        <Typography width={"45%"}>{product.nameProduct}</Typography>
                        <Typography width={"15%"}>{product.quatity}</Typography>
                        <Typography width={"15%"}>${product.costUnit}</Typography>
                        <Typography width={"22%"}>${Number(product.quatity) * Number(product.costUnit)}</Typography>
                    </Box>
                ))}
            </Box>
            <Box textAlign={'center'} mt={3}>
                <Typography>Total: ${getTotalProducts(products)}</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} mt={3}>
                <Button 
                sx={{height: 57}} 
                variant="contained"
                onClick={submitBill}
                >
                    Save
                </Button>
                <Button 
                sx={{height: 57}} 
                variant="contained"
                onClick={() => setShowProductDetail(true)}
                >
                    Add product
                </Button>
            </Box>
        </Box>
        </Modal>
        {showProductDetail && <ProductOfBillModal setShowProductDetail={setShowProductDetail} setProducts={setProducts} products={products} />}
        </>
)
}

export {BillModal}