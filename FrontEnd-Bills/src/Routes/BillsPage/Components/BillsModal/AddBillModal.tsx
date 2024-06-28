import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import { PostBill } from "../../../../interfaces/Bills";
import { BillServiceHook } from "../../../../customHooks/BillsServiceHook";
import dayjs from "dayjs";

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

const AddBillModal = () => {
    const [open] = useState<boolean>(true)
    const [bill, setBill] = useState<PostBill>({})
    const {postBill} = BillServiceHook()
    const navigate = useNavigate()

    const handleClose = () => {
        navigate("/bills-managment")
    };
    const submitBill = async() => {
        if (bill) {
            try{
                const billCreated = await postBill({...bill})
                navigate(`/bills-managment/Bill/${billCreated.id}/`)
            }catch(error){
                console.error(error)
            }
        }
    }
    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography color={'primary.main'} id="modal-modal-title" variant="h5" component="h2">
            Add Bill
            </Typography>
            <Box display={'flex'} flexDirection={"column"}>
                <TextField 
                fullWidth
                sx={{mt: 3}}
                id="outlined-basic" 
                label="Description" 
                variant="outlined"
                onChange={(e) => setBill({...bill, description: e.target.value})}
                />
                <TextField 
                fullWidth
                focused
                type="date"
                sx={{mt: 3}}
                id="outlined-basic" 
                label="Date" 
                variant="outlined"
                onChange={(e) => setBill({...bill, date: dayjs(e.target.value).format("YYYY-MM-DD")})}
                />
            </Box>
            <Box display={'flex'} justifyContent={'center'} mt={3}>
                <Button 
                sx={{height: 57}} 
                variant="contained"
                onClick={submitBill}
                >
                    <AddIcon/>
                </Button>
            </Box>
        </Box>
        </Modal>
    )
}

export {AddBillModal}