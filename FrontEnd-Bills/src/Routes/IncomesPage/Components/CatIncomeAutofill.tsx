import { Autocomplete, Paper, TextField } from "@mui/material"
import { CatIncomeServiceHook } from "../../../customHooks/CatIncomeServiceHook";
import { CategoriesIncome, PostIncome } from "../../../interfaces/CategoriesIncome";
import { useEffect, useState } from "react";

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
    setItem: React.Dispatch<React.SetStateAction<PostIncome>>,
    item: PostIncome
}
const CatIncomeAutofill: React.FC<ComponentProps> = ({item, setItem}) => {
    const [categories, setCategories] = useState<CategoriesIncome[] | []>([])
    const { fetchGetCategoriesIncome } = CatIncomeServiceHook()

    //Agregar filtro para no repetir productos
    useEffect(() => {
        const setCatIncomes = async() => {
            const arrayCategories = await fetchGetCategoriesIncome()
            setCategories(arrayCategories)
        }
        setCatIncomes()
    },[])
    return (
        <Autocomplete
        fullWidth
        disablePortal
        id="combo-box-demo"
        options={categories}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Category" />}
        onChange={(_, newValue) => setItem({... item, categoryId: newValue?.id})}
        PaperComponent={CustomPaperComponent}
        />
      ); 
}

export{CatIncomeAutofill}