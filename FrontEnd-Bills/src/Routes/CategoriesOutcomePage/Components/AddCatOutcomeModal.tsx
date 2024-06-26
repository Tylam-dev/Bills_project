import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import { PostCatOutcome } from "../../../interfaces/CategoriesOutcome";
import { CatOutcomeHook } from "../../../customHooks/CatOutcomeHook";

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

const AddCatOutcomeModal = () => {
    const [open] = useState<boolean>(true)
    const [catOutcome, setCatOutcome] = useState<PostCatOutcome>({})
    const {postCatOutcome} = CatOutcomeHook()
    const navigate = useNavigate()

    const handleClose = () => {
        navigate("/outcome-managment")
    };
    const handleCloseReload = () => {
        navigate("/outcome-managment")
        window.location.reload()
    };
    const submitCatOutcome = async() => {
        if (catOutcome) {
            try{
                await postCatOutcome({...catOutcome})
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
            Add Category Outcome
            </Typography>
            <Box display={'flex'} alignItems={'end'} justifyContent={'space-around'}>
                <TextField 
                sx={{mt: 3}}
                id="outlined-basic" 
                label="Name" 
                variant="outlined"
                onChange={(e) => setCatOutcome({...catOutcome, name: e.target.value})}
                />
                <Button 
                sx={{height: 57}} 
                variant="contained"
                onClick={submitCatOutcome}
                >
                    <AddIcon/>
                </Button>
            </Box>
        </Box>
        </Modal>
    )
}

export {AddCatOutcomeModal}