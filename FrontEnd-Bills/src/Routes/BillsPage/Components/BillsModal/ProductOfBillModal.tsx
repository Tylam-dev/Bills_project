import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import { PostProductBill} from "../../../../interfaces/Bills";
import { BillServiceHook } from "../../../../customHooks/BillsServiceHook";
import { ProductsAutofill } from "./ProductsAutofill";
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

const ProductOfBillModal = () => {
    const [open] = useState<boolean>(true)
    const {idBill} = useParams()
    const [item, setItem] = useState<PostProductBill>({ quantity: '', billId: idBill!, costUnit: ""})
    const [error, setError] = useState<boolean>(false)
    const {postProductBill} = BillServiceHook()
    const navigate = useNavigate()

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
            await postProductBill(data)
            handleCloseReload()
        }
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
                <ProductsAutofill setItem={setItem} item={item} idBill={idBill}/>
                <TextField 
                required
                error={error}
                fullWidth
                sx={{mt: 3}}
                type="number"
                id="outlined-basic" 
                label="Quantity" 
                variant="outlined"
                onChange={(e) => setItem({...item, quantity: e.target.value})}
                />
                <TextField 
                required
                error={error}
                fullWidth
                sx={{mt: 3}}
                type="number"
                id="outlined-basic" 
                label="Cost Unit" 
                variant="outlined"
                onChange={(e) => setItem({...item, costUnit: e.target.value})}
                />
                <Box mt={1} textAlign={'center'}>
                    {error && <Typography color={"error"}> Filled required camps*</Typography>}
                </Box>
                <Box display={'flex'} justifyContent={'center'} mt={2}>
                    <Button 
                    sx={{height: 57}} 
                    variant="contained"
                    onClick={() => submitProductBill(item)}
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