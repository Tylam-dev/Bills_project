import { Box, Button, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { CategoriesIncomeAccordion } from "./Components/CategoriesIncomeAccordion";
import { useEffect, useState } from "react";
import { CategoriesIncome } from "../../interfaces/CategoriesIncome";
import { Outlet, useNavigate } from "react-router-dom";
import { CatIncomeServiceHook } from "../../customHooks/CatIncomeServiceHook";


const IncomeManagmentPage: React.FC = () => {
    const [categoriesIncome, setCategoriesIncome] = useState<[] | CategoriesIncome[]> ([])
    const { fetchGetCategoriesIncome } = CatIncomeServiceHook()
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async() => {
            const data:CategoriesIncome[] = await fetchGetCategoriesIncome()
            setCategoriesIncome(data)
        }
        getData()
    },[])
    return(
        <>
            <Box marginY={2} paddingX={2} display={"flex"} justifyContent={'space-between'} alignItems={'center'}>
                <Typography width={10} color={'secondary'} variant="h4">
                    Income Categories
                </Typography>
                <Button 
                sx={{height: 50}} 
                variant="contained"
                onClick={() => navigate('addCatIncome')}
                >
                    <AddIcon/>
                </Button>
            </Box>
            <CategoriesIncomeAccordion categoriesIncome={categoriesIncome}/>
            <Outlet/>
        </>
    )
}

export {IncomeManagmentPage}