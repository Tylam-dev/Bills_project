import { Accordion, AccordionActions, AccordionSummary, Box, Button, Divider, Typography } from "@mui/material"
import { Income } from "../../../interfaces/CategoriesIncome"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ComponentsProps {
    incomes: Income[] | []
}
const Incomes: React.FC<ComponentsProps> = ({incomes}) => {
    return (
        <>
            {incomes.map((income, index) => (
            <Accordion 
            key={index}
            >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="incomes-accordion"
            sx={{fontSize:'1.3rem', fontWeight:'bold', color:'primary.main', bgcolor:'secondary.light'}}
            >
                <Box>
                    <Typography>
                        {income.description}
                    </Typography>
                    <Typography>
                        <strong>Date:</strong> {income.date}
                    </Typography>
                </Box>
            </AccordionSummary>
            <Divider sx={{bgcolor:'secondary.dark'}}/>
            <AccordionActions sx={{display:"flex", justifyContent:'center', gap:10, bgcolor:'secondary.light'}}>
                    <Button variant="contained" color="error">Delete</Button>
                    <Button variant="contained" color="success">Edit</Button>
            </AccordionActions>
            </Accordion>
        ))}
        </>
    )
}

export {Incomes}