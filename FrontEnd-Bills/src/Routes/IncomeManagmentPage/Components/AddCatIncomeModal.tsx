import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { FetchData } from "../../../customHooks/FetchData";
import { PostCategoriesIncome } from "../../../interfaces/CategoriesIncome";

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


const AddCatIncomeModal = () => {
    const [open] = useState<boolean>(true)
    const [categoryIncome, setCategoryIncome] = useState<PostCategoriesIncome>({name: null})
    const {postCategoriesIncome} = FetchData()
    const navigate = useNavigate()

    const handleClose = () => {
        navigate("/income-managment")
        window.location.reload()
    };
    const submitCategoryIncome = async() => {
        if (categoryIncome.name != null) {
            try{
                await postCategoriesIncome({...categoryIncome})
                handleClose()
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
            Add Income Category
            </Typography>
            <Box display={'flex'} alignItems={'end'} gap={5}>
                <TextField 
                sx={{mt: 3}}
                id="outlined-basic" 
                label="New Income Category" 
                variant="outlined"
                onChange={(e) => setCategoryIncome({name: e.target.value})}
                />
                <Button 
                sx={{height: 57}} 
                variant="contained"
                onClick={submitCategoryIncome}
                >
                    <AddIcon/>
                </Button>
            </Box>
            
        </Box>
        </Modal>
    )
}

export {AddCatIncomeModal}