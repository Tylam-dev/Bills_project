import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { FetchData } from "../../../customHooks/FetchData"
import { useNavigate, useParams } from "react-router-dom"
import { PostIncome } from "../../../interfaces/CategoriesIncome";
import AddIcon from '@mui/icons-material/Add';
import { DatePicker } from "@mui/x-date-pickers";
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

const AddIncomeModal = () => {
    const [open] = useState<boolean>(true)
    const { catInId } = useParams()
    const [income, setIncome] = useState<PostIncome>({categoryId: catInId})
    const {postIncome} = FetchData()
    const navigate = useNavigate()

    const handleClose = () => {
        navigate("/income-managment")
    };
    const submitCategoryIncome = async() => {
        if (income) {
            try{
                await postIncome({...income})
                handleClose()
            }catch(error){
                console.error(error)
            }
        }
    }
    console.log(income)
    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography color={'primary.main'} id="modal-modal-title" variant="h5" component="h2">
            Add Income
            </Typography>
            <Box display={'flex'} flexDirection={'column'}>
                <TextField 
                fullWidth
                sx={{mt: 3}}
                id="outlined-basic" 
                label="Description" 
                variant="outlined"
                onChange={(e) => setIncome({...income, description: e.target.value})}
                />
                <TextField 
                fullWidth
                type="number"
                sx={{mt: 3}}
                id="outlined-basic" 
                label="Mount" 
                variant="outlined"
                onChange={(e) => setIncome({...income, mount: e.target.value})}
                />
                 <TextField 
                fullWidth
                focused
                type="date"
                sx={{mt: 3}}
                id="outlined-basic" 
                label="Date" 
                variant="outlined"
                onChange={(e) => setIncome({...income, date: dayjs(e.target.value).format("YYYY-MM-DD")})}
                />
            </Box>
            <Box display={'flex'} justifyContent={'center'} marginTop={2}>
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

export {AddIncomeModal}