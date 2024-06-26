import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import { PostSubcatOutCome } from "../../../interfaces/CategoriesOutcome";
import { SubcatOutcomeServiceHook } from "../../../customHooks/SubcatOutcomeServiceHook";

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

const AddSubcatOutModal = () => {
    const [open] = useState<boolean>(true)
    const {idCatOut, nameCatOut} = useParams()
    const [subcatOutcome, setSubcatOutcome] = useState<PostSubcatOutCome>({categoryId: idCatOut})
    const {postSubcatOutcome} = SubcatOutcomeServiceHook()
    const navigate = useNavigate()

    const handleClose = () => {
        navigate("/outcome-managment")
    };
    const handleCloseReload = () => {
        navigate("/outcome-managment")
        window.location.reload()
    };
    const submitCatOutcome = async() => {
        if (subcatOutcome) {
            try{
                await postSubcatOutcome({...subcatOutcome})
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
            Add Subcategory Outcome
            </Typography>
            <Box display={'flex'} flexDirection={'column'}>
                <TextField 
                sx={{mt: 3}}
                id="outlined-basic" 
                label="Category" 
                disabled
                variant="outlined"
                value={nameCatOut}
                />
                <TextField 
                sx={{mt: 3}}
                id="outlined-basic" 
                label="Name" 
                variant="outlined"
                onChange={(e) => setSubcatOutcome({...subcatOutcome, name: e.target.value})}
                />
            </Box>
            <Box display={'flex'} justifyContent={'center'} mt={3}>
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

export {AddSubcatOutModal}