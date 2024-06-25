import { Box, Button, Modal, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import { CatIncomeServiceHook } from "../../../customHooks/CatIncomeServiceHook";


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

const DeleteCatIncomeModal = () => {
    const [open] = useState<boolean>(true)
    const { idCatInc, nameIn } = useParams()
    const {deleteCategoryIncome} = CatIncomeServiceHook()
    const navigate = useNavigate()
    const handleCloseReload = () => {
        navigate("/income-managment")
        window.location.reload()
    };
    const handleClose = () => {
        navigate("/income-managment")
    };
    const submitDeleteCatIncome = async() => {
        if (idCatInc ){
            try{
                await deleteCategoryIncome(idCatInc)
                handleCloseReload()
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
            <strong>{nameIn}</strong> category will be deleted, are you sure?
            </Typography>
            <Box display={'flex'} justifyContent={'space-around'} mt={3} gap={5}>
                <Button 
                sx={{height: 57}} 
                variant="contained"
                onClick={handleClose}
                >
                    <ClearIcon/>
                </Button>
                <Button 
                sx={{height: 57, bgcolor:'red'}} 
                variant="contained"
                onClick={submitDeleteCatIncome}
                >
                    <RemoveIcon/>
                </Button>
            </Box>
        </Box>
        </Modal>
    )
}
export {DeleteCatIncomeModal}