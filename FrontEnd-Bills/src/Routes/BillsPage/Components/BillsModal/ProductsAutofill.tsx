
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { Product } from '../../../../interfaces/CategoriesOutcome';
import { ProductServiceHook } from '../../../../customHooks/ProductServiceHook';
import { Paper } from '@mui/material';
import { PostProductBill } from '../../../../interfaces/Bills';
import { BillServiceHook } from '../../../../customHooks/BillsServiceHook';

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
    setItem: React.Dispatch<React.SetStateAction<PostProductBill>>,
    item?: PostProductBill
    idBill?: string
}
const ProductsAutofill: React.FC<ComponentProps> = ({setItem, item, idBill}) => {
    const [products, setProducts] = useState<Product[] | []>([])
    const { getBill } = BillServiceHook()
    const { getProducts } = ProductServiceHook()

    //Agregar filtro para no repetir productos
    useEffect(() => {
        if(idBill) {
            const setFilteredProductsOptions = async() => {
                const arrayProducts = await getProducts()
                const productsOfBill = (await getBill(idBill)).productsId?.map((product) => product.productId?.name || "")
                const filterProducts = arrayProducts.filter((product) => !productsOfBill?.includes(product.name))
                setProducts(filterProducts)
            }
            setFilteredProductsOptions()
        } else {
            const setProductsOptions = async() => {
                const arrayProducts = await getProducts()
                setProducts(arrayProducts)
            } 
            setProductsOptions()
        }
    },[])
    return (
        <Autocomplete
        fullWidth
        disablePortal
        id="combo-box-demo"
        options={products}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Product*" />}
        onChange={(_, newValue) => setItem({... item, productId: newValue?.id})}
        PaperComponent={CustomPaperComponent}
        />
      ); 
}

export {ProductsAutofill}