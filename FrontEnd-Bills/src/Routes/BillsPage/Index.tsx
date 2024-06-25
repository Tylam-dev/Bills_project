import { Box, Button, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { BillsAccordion } from "./Components/BillsAccordion";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { Bill } from "../../interfaces/Bills";
import dayjs from "dayjs";
import { BillServiceHook } from "../../customHooks/BillsServiceHook";

interface FromToDate {
    from: string,
    to: string
}

const BillsPage: React.FC = () => {
    const [bills, setBills] = useState<Bill[] | []>([])
    const [ date, setDate ] = useState<FromToDate>({from:'', to:''})
    const { fetchGetBills } = BillServiceHook()

    const getData = async() => {
        const data:Bill[] = await fetchGetBills(date.from, date.to)
        setBills(data)
    }
    console.log(date)
    return(
        <>
            <Box marginY={2} paddingX={2} display={"flex"} justifyContent={'space-between'}>
                <Typography color={'secondary'} variant="h4">
                    Bills
                </Typography>
                <Button variant="contained">
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
            <BillsAccordion bills={bills}/>
        </>
    )
}

export {BillsPage}