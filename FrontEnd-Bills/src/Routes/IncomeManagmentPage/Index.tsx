import { Box, Button, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { CategoriesIncomeAccordion } from "./Components/CategoriesIncomeAccordion";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { FetchData } from "../../customHooks/FetchData";
import { CategoriesIncome } from "../../interfaces/CategoriesIncome";
import dayjs from "dayjs";
import { Outlet, useNavigate } from "react-router-dom";

interface FromToDate {
    from?: string,
    to?: string
}

const IncomeManagmentPage: React.FC = () => {
    const [categoriesIncome, setCategoriesIncome] = useState<[] | CategoriesIncome[]> ([])
    const [ date, setDate ] = useState<FromToDate>()
    const { fetchGetCategoriesIncome } = FetchData()
    const navigate = useNavigate()
    const getData = async() => {
        if (date) {
            const data:CategoriesIncome[] = await fetchGetCategoriesIncome(date.from, date.to)
            setCategoriesIncome(data)
        }else{
            const data:CategoriesIncome[] = await fetchGetCategoriesIncome()
            setCategoriesIncome(data)
        }
        
    }

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
            <Box sx={{padding:1, display:'flex', justifyContent:'space-around'}}>
                <DatePicker
                 sx={{width:'35%', bgcolor:'primary.light', borderRadius:2}}  label="From"
                 onChange={(newValue) => setDate({...date, from: dayjs(newValue).format('YYYY-MM-DD')})}
                 slotProps={{
                    textField: {
                      focused: true,
                      color: 'secondary',
                    },
                }}
                 />
                <DatePicker 
                onChange={(newValue) => setDate({...date, to: dayjs(newValue).format('YYYY-MM-DD')})}
                slotProps={{
                    textField: {
                      focused: true,
                      color: 'secondary',
                    },
                }}
                sx={{width:'35%', bgcolor:'primary.light', borderRadius:2}} 
                label="To" />
                <Button 
                variant="contained"
                onClick={getData}>
                    Buscar
                </Button>
            </Box>
            <CategoriesIncomeAccordion categoriesIncome={categoriesIncome}/>
            <Outlet/>
        </>
    )
}

export {IncomeManagmentPage}