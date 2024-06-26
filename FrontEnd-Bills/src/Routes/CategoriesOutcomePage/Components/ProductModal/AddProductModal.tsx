import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import { PostProduct } from "../../../../interfaces/CategoriesOutcome";
import { ProductServiceHook } from "../../../../customHooks/ProductServiceHook";

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

const AddProductModal = () => {
    const [open] = useState<boolean>(true)
    const {idSubcat, nameSubcatOut} = useParams()
    const [product, setProduct] = useState<PostProduct>({subCategoryId: idSubcat})
    const {postProduct} = ProductServiceHook()
    const navigate = useNavigate()

    const handleClose = () => {
        navigate("/outcome-managment")
    };
    const handleCloseReload = () => {
        navigate("/outcome-managment")
        window.location.reload()
    };
    const submitProduct = async() => {
        if (product) {
            try{
                await postProduct({...product})
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
            Add Product
            </Typography>
            <Box display={'flex'} flexDirection={"column"}>
                <TextField 
                fullWidth
                disabled
                sx={{mt: 3}}
                id="outlined-basic" 
                label="Subcategory" 
                variant="outlined"
                value={nameSubcatOut}
                />
                <TextField 
                fullWidth
                sx={{mt: 3}}
                id="outlined-basic" 
                label="Name" 
                variant="outlined"
                onChange={(e) => setProduct({...product, name: e.target.value})}
                />
            </Box>
            <Box display={'flex'} justifyContent={'center'} mt={3}>
                <Button 
                sx={{height: 57}} 
                variant="contained"
                onClick={submitProduct}
                >
                    <AddIcon/>
                </Button>
            </Box>
        </Box>
        </Modal>
    )
}

export {AddProductModal}