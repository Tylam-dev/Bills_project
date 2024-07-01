import { useNavigate } from "react-router-dom"
import { Bill } from "../../../interfaces/Bills"
import { Box, Paper, Typography } from "@mui/material"

interface ComponentProps {
    bills: Bill[] | []
}

const BillsList:React.FC<ComponentProps> = ({bills}) => {
    const navigate = useNavigate()
    console.log(bills)
    return(
        <>
            <Box sx={{display:'flex', flexDirection:'column', gap:1, bgcolor:'primary.light', p:2}}>
                {bills.map((bill, index) => (
                    <Paper 
                    elevation={4} 
                    key={index} 
                    sx={{ display:'flex', flexDirection:'column', gap:1, bgcolor: 'secondary.main', borderRadius:'5px', padding:1}}
                    onClick={() => navigate(`Bill/${bill.id}`)}
                    >
                        <Typography color={'primary.dark'} variant="h5">Description: {bill.description}</Typography>
                        <Typography color={'primary.dark'} variant="h5">Cost: ${bill.total}</Typography>
                        <Typography color={'primary.main'} variant="h5">Date: {bill.date}</Typography>
                    </Paper>
                ))}
            </Box>
        </>
    )
}

export {BillsList}