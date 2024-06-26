import { Box, Button, Typography } from "@mui/material"
import { CategoriesAccordion } from "./Components/AccordionCategories"
import AddIcon from '@mui/icons-material/Add';
import { CatOutcomeHook } from "../../customHooks/CatOutcomeHook";
import { CategoriesOutcome } from "../../interfaces/CategoriesOutcome";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const CategoriesOutcomePage = () => {
    const { fetchGetCategoriesOutcome } = CatOutcomeHook()
    const [data, setData] = useState<[] | CategoriesOutcome[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async() => {
            const data = await fetchGetCategoriesOutcome()
            setData(data)
        }
        getData()
    },[])

    return(
        <>
            <Box marginY={2} paddingX={2} display={"flex"} justifyContent={'space-between'} alignItems={'center'}>
                <Typography color={'secondary'} variant="h4">
                    Outcome Categories
                </Typography>
                <Button 
                variant="contained" 
                sx={{height: 50}}
                onClick={() => navigate('addCatOutcome')}
                >
                    <AddIcon/>
                </Button>
            </Box>
            <CategoriesAccordion data={data}/>
            <Outlet/>
        </>
    )
}
export {CategoriesOutcomePage}