import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RefreshIcon from '@mui/icons-material/Refresh';
import Loading from "../../../../GlobalComponents/Loading";
import { PostProduct, Product } from "../../../../interfaces/CategoriesOutcome";
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

const PatchProductModal = () => {
const [open] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(true)
    const { idProduct } = useParams()
    const [product, setProduct] = useState<PostProduct>({})
    const {getProduct, patchProduct} = ProductServiceHook()
    const navigate = useNavigate()

    useEffect(() => {
        if (idProduct) {
            const setData = async() => {
                const { id, subCategoryId, ...data }:Product = await getProduct(idProduct)
                setProduct(data)
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
        navigate("/outcome-managment")
        window.location.reload()
    };
    const handleClose = () => {
        navigate("/outcome-managment")
    };
    const submitPatchProduct = async() => {
        if (idProduct) {
            try{
                await patchProduct(idProduct, product)
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
                value={product.name || ""}
                sx={{mt: 3}}
                id="outlined-basic" 
                label="name" 
                variant="outlined"
                onChange={(e) => setProduct({name: e.target.value})}
                />
            </Box>
            <Box display={'flex'} justifyContent={'center'} marginTop={2}>
                <Button 
                sx={{height: 57}} 
                variant="contained"
                onClick={submitPatchProduct}
                >
                    <RefreshIcon/>
                </Button>
            </Box>
        </Box>
        </Modal>
    )
}

export {PatchProductModal}