import { Box, Button, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import { Outlet, useNavigate } from "react-router-dom";
import { IncomeServiceHook } from "../../customHooks/IncomeServiceHook";
import { IncomesCard } from "./IncomesCard";
import { Income } from "../../interfaces/CategoriesIncome";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { GraphIncome } from "./GraphModal/GraphIncome";

interface FromToDate {
    from?: string,
    to?: string
}

const IncomePage: React.FC = () => {
    const [incomes, setIncome] = useState<[] | Income[]> ([])
    const [ date, setDate ] = useState<FromToDate>()
    const [openGraph, setOpenGraph] = useState<boolean>(false)
    const { getIncomes } = IncomeServiceHook()
    const navigate = useNavigate()
    const getData = async() => {
        if (date) {
            const data:Income[] = await getIncomes(date.from, date.to)
            setIncome(data)
        }else{
            const data:Income[] = await getIncomes()
            setIncome(data)
        }
    }
    return(
        <>
            <Box marginY={2} paddingX={2} display={"flex"} justifyContent={'space-between'} alignItems={'center'}>
                <Typography width={10} color={'secondary'} variant="h4">
                    Incomes
                </Typography>
                <Box display={'flex'} justifyContent={'space-between'} gap={2}>
                    {(incomes.length != 0)?
                        <Button 
                        sx={{height: 50}} 
                        variant="contained"
                        onClick={() => setOpenGraph(true)}
                        >
                            <EqualizerIcon/>
                        </Button>
                        :
                        ""
                    }
                    <Button 
                    sx={{height: 50}} 
                    variant="contained"
                    onClick={() => navigate('addIncome')}
                    >
                        <AddIcon/>
                    </Button>
                </Box>
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
            <IncomesCard incomes={incomes}/>
            <Outlet/>
            {openGraph && <GraphIncome open={openGraph} setOpen={setOpenGraph} incomes={incomes}/>}

        </>
    )
}

export { IncomePage }