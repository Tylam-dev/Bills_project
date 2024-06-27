import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Income, PostIncome } from "../../../../interfaces/CategoriesIncome";
import Loading from "../../../../GlobalComponents/Loading";
import RefreshIcon from '@mui/icons-material/Refresh';
import dayjs from "dayjs";
import { IncomeServiceHook } from "../../../../customHooks/IncomeServiceHook";

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
const EditIncomeModal = () => {
    const [open] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(true)
    const { idInc } = useParams()
    const [income, setIncome] = useState<PostIncome>({})
    const {getIncome, patchIncome} = IncomeServiceHook()
    const navigate = useNavigate()

    useEffect(() => {
        if (idInc) {
            const setData = async() => {
                const { id, ...data }:Income = await getIncome(idInc)
                setIncome(data)
                setLoading(false)
            }
            try {
                setData()
            } catch (error) {
                throw new Error("Error get income ")
            }
        }
    },[])

    const handleCloseReload = () => {
        navigate("/income-managment")
        window.location.reload()
    };
    const handleClose = () => {
        navigate("/income-managment")
    };
    const submitCategoryIncome = async() => {
        if (idInc) {
            try{
                await patchIncome(idInc, income)
                handleCloseReload()
            }catch(error){
                console.error(error)
            }
        }
    }
    if (loading ){
       return(<Loading/>) 
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
            Edit Income
            </Typography>
            <Box display={'flex'} flexDirection={'column'}>
                <TextField 
                fullWidth
                focused
                value={income.description || ""}
                sx={{mt: 3}}
                id="outlined-basic" 
                label="Description" 
                variant="outlined"
                onChange={(e) => setIncome({...income, description: e.target.value})}
                />
                <TextField 
                fullWidth
                focused
                value={income.mount || ""}
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
                value={income.date || ""}
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
                    <RefreshIcon/>
                </Button>
            </Box>
        </Box>
        </Modal>
    )
}

export {EditIncomeModal}