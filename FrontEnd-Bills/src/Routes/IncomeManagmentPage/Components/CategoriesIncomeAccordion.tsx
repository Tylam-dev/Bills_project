import { CategoriesIncome } from "../../../interfaces/CategoriesIncome"
import { Accordion, AccordionActions, AccordionSummary, Button } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Incomes } from "./Incomes";
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
                    <Incomes incomes={category.incomeId}/>
                    <AccordionActions sx={{display:"flex", justifyContent:'center', gap:10, bgcolor:'secondary.light'}}>
                    <Button 
                    sx={{bgcolor:'primary.light'}} 
                    variant="contained"
                    onClick={() => navigate(`addIncome/${category.id}`)}
                    >Add Income</Button>
                    {(category.incomeId.length === 0)?
                    <Button

                    variant="contained" 
                    color='error'
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