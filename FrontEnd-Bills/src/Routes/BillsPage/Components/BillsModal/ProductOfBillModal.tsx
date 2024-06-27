import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import { PostBill, ProductToBillWithId } from "../../../../interfaces/Bills";
import { BillServiceHook } from "../../../../customHooks/BillsServiceHook";
import dayjs from "dayjs";
import { ProductsAutofill } from "./ProductsAutofill";

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
interface ComponentProps {
    setShowProductDetail: React.Dispatch<React.SetStateAction<boolean>>
    setProducts: React.Dispatch<React.SetStateAction<ProductToBillWithId[]>>
    products: ProductToBillWithId[]
}
const ProductOfBillModal:React.FC<ComponentProps> = ({setShowProductDetail, setProducts, products}) => {
    const [open] = useState<boolean>(true)
    const {idBill} = useParams()
    const [item, setItem] = useState<ProductToBillWithId>({nameProduct: '', quatity: '', billId: idBill!, productId: "", costUnit: ""})
    const {postBill} = BillServiceHook()
    const navigate = useNavigate()

    const handleClose = () => {
        setShowProductDetail(false)
    };
    const addProduct = (data: ProductToBillWithId) => {
        const productsUpdated:ProductToBillWithId[] = [...products]
        productsUpdated.push(data)
        setProducts(productsUpdated)
        setShowProductDetail(false)
    }
    return(
        <>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography mb={2} color={'primary.main'} id="modal-modal-title" variant="h5">
                Add product to bill
                </Typography>
                <ProductsAutofill setItem={setItem} item={item}/>
                <TextField 
                fullWidth
                sx={{mt: 3}}
                type="number"
                id="outlined-basic" 
                label="Quantity" 
                variant="outlined"
                onChange={(e) => setItem({...item, quatity: e.target.value})}
                />
                <TextField 
                fullWidth
                sx={{mt: 3}}
                type="number"
                id="outlined-basic" 
                label="Cost Unit" 
                variant="outlined"
                onChange={(e) => setItem({...item, costUnit: e.target.value})}
                />
                <Box display={'flex'} justifyContent={'center'} mt={3}>
                    <Button 
                    sx={{height: 57}} 
                    variant="contained"
                    onClick={() => addProduct(item)}
                    >
                        <AddIcon/>
                    </Button>
                </Box>
            </Box>
            </Modal>
        </>
    )
}

export {ProductOfBillModal}