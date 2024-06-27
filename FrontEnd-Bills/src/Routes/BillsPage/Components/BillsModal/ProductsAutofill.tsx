
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { Product } from '../../../../interfaces/CategoriesOutcome';
import { ProductServiceHook } from '../../../../customHooks/ProductServiceHook';
import { Paper } from '@mui/material';
import { ProductToBillWithId } from '../../../../interfaces/Bills';

const CustomPaperComponent = (props: any) => (
    <Paper
    {...props}
    sx={{
    backgroundColor: 'primary.main',
    color: "secondary.main" // Cambia este valor al color que desees
    }}
    />
  );

interface ComponentProps {
    setItem: React.Dispatch<React.SetStateAction<ProductToBillWithId>>,
    item: ProductToBillWithId
}
const ProductsAutofill: React.FC<ComponentProps> = ({setItem, item}) => {
    const [products, setProducts] = useState<Product[] | []>([])
    const [productSelect, setProductSelect] = useState<Product | null>(null)
    const { getProducts } = ProductServiceHook()
    useEffect(() => {
        const setData = async() => {
            const getData = await getProducts()
            setProducts(getData)
        }
        setData()
    },[])
    useEffect(() => {
        if (productSelect != null) {
            const newItem: Partial<ProductToBillWithId> = {
                nameProduct: productSelect.name,
                productId: productSelect.id
            }
            setItem({...item, ...newItem})
        }
    },[productSelect])
    return (
        <Autocomplete
        fullWidth
        disablePortal
        id="combo-box-demo"
        options={products}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Product" />}
        onChange={(_, newValue) => setProductSelect(newValue)}
        PaperComponent={CustomPaperComponent}
        />
      ); 
}

export {ProductsAutofill}