import { CategoriesIncome } from "../../../interfaces/CategoriesIncome"
import { Accordion, AccordionActions, AccordionSummary, Box, Button, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";

interface ComponentProps {
    categoriesIncome: CategoriesIncome[] | []
}
const CategoriesIncomeAccordion: React.FC<ComponentProps> = ({categoriesIncome}) => {
    const navigate = useNavigate()

    return(
        <>
            {categoriesIncome.map((category, index) => (
                <Accordion 
                key={index}
                sx={{fontSize:'1.3rem', fontWeight:'bold', color:'secondary.main', bgcolor:'secondary.main'}}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="category-income"
                    sx={{fontSize:'1.3rem', fontWeight:'bold', color:'secondary.main', bgcolor:'primary.main'}}
                    >
                        {category.name}
                    </AccordionSummary>
                    <AccordionActions sx={{display:"flex", justifyContent:'center', gap:10, bgcolor:'secondary.light'}}>
                        <Box>
                            <Typography variant="h6" color={'primary.main'}>Delete all category's incomes to delete</Typography>
                        </Box>
                    {(category.incomeId.length === 0)?
                    <Button

                    variant="contained" 
                    color='error'
                    onClick={() => navigate(`deleteCatIncome/${category.id}/${category.name}`)}
                    >
                        Delete Category</Button>
                    :
                    ""
                    }
                </AccordionActions>
                </Accordion>
            ))}
            
        </>
    )
} 

export {CategoriesIncomeAccordion}