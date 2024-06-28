import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostProductBill} from "../../../../interfaces/Bills";
import { BillServiceHook } from "../../../../customHooks/BillsServiceHook";
import { hasEmptyFields } from "../../../../utils/functions/hasEmptyFields";

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

const EditProductBillModal = () => {
    const [open] = useState<boolean>(true)
    const {idBill,idProductBill, nameProduct} = useParams()
    const [item, setItem] = useState<PostProductBill>({ quantity: '', costUnit: ""})
    const [error, setError] = useState<boolean>(false)
    const {patchProductBill, getProductBill, deleteProductBill} = BillServiceHook()
    const navigate = useNavigate()

    useEffect(() => {
        const getProductBillInfo = async() => {
            const productBill = await getProductBill(idProductBill!)
            setItem({...item, costUnit: productBill.costUnit, quantity: productBill.quantity})
        }
        getProductBillInfo()
    },[])
    const handleCloseReload = () => {
        navigate(`/bills-managment/Bill/${idBill}/`)
        window.location.reload()
    };
    const handleClose = () => {
        navigate(`/bills-managment/Bill/${idBill}/`)
    };
    const submitProductBill = async(data: PostProductBill) => {
        if (hasEmptyFields(item)) {
            setError(true)
        }else {
            await patchProductBill(idProductBill!, data)
            handleCloseReload()
        }
    }
    const submitDeleteProductBill = async(id:string) => {
        await deleteProductBill(id)
        handleCloseReload()
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
                {nameProduct}
                </Typography>
                <TextField 
                required
                focused
                error={error}
                fullWidth
                sx={{mt: 3}}
                type="number"
                id="outlined-basic" 
                value={item.quantity}
                label="Quantity" 
                variant="outlined"
                onChange={(e) => setItem({...item, quantity: e.target.value})}
                />
                <TextField 
                required
                focused
                error={error}
                fullWidth
                sx={{mt: 3}}
                value={item.costUnit}
                type="number"
                id="outlined-basic" 
                label="Cost Unit" 
                variant="outlined"
                onChange={(e) => setItem({...item, costUnit: e.target.value})}
                />
                <Box mt={1} textAlign={'center'}>
                    {error && <Typography color={"error"}> Filled required camps*</Typography>}
                </Box>
                <Box display={'flex'} justifyContent={'space-around'} mt={2}>
                    <Button 
                    sx={{height: 57}} 
                    color="error"
                    variant="contained"
                    onClick={() => submitDeleteProductBill(idProductBill!)}
                    >
                        Delete
                    </Button>
                    <Button 
                    sx={{height: 57}} 
                    variant="contained"
                    onClick={() => submitProductBill(item)}
                    >
                        Save
                    </Button>
                </Box>
            </Box>
            </Modal>
        </>
    )
}

export {EditProductBillModal}