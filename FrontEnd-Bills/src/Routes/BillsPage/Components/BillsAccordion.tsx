import { Bill } from "../../../interfaces/Bills"
import { Box, Paper, Typography } from "@mui/material"

interface ComponentProps {
    bills: Bill[] | []
}

const BillsAccordion:React.FC<ComponentProps> = ({bills}) => {

    return(
        <>
            <Box sx={{display:'flex', flexDirection:'column', gap:1, bgcolor:'primary.dark'}}>
                {bills.map((bill, index) => (
                    <Paper 
                    elevation={4} 
                    key={index} 
                    sx={{ display:'flex', flexDirection:'column', gap:1, bgcolor: 'secondary.main', borderRadius:'5px', padding:1}}
                    >
                        <Typography color={'primary.dark'} variant="h5">Description: {bill.description}</Typography>
                        <Typography color={'primary.main'} variant="h5">Date: {bill.date}</Typography>
                    </Paper>
                ))}
            </Box>
        </>
    )
}

export {BillsAccordion}