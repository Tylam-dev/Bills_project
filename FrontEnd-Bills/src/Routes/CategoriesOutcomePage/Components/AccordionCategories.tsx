
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button, Divider } from '@mui/material';
import { SubcategoriesAccordion } from './Subcategories';
import { CategoriesOutcome } from '../../../interfaces/CategoriesOutcome';
import { useNavigate } from 'react-router-dom';

interface ComponentProps {
    data: CategoriesOutcome[]
}

const CategoriesAccordion:React.FC<ComponentProps> = ({data}) => {
    const navigate = useNavigate()
    return(
        <>
            {data.map((category, index) => (
                <Accordion key={index}
                sx={{fontSize:'1.3rem', fontWeight:'bold', color:'secondary.main', bgcolor:'secondary.main'}}
                >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{fontSize:'1.3rem', fontWeight:'bold', color:'secondary.main', bgcolor:'primary.main'}}
                >
                    {category.name}
                </AccordionSummary>
                <Divider/>
                    <SubcategoriesAccordion subcategoriesOutcome={category.subcategoriesId}/>
                <AccordionActions sx={{display:"flex", justifyContent:'center', gap:10, bgcolor:'secondary.light'}}>
                    <Button 
                    onClick={()=> navigate(`addSubcatOutcome/${category.id}/${category.name}`)}
                    variant="contained"
                    >
                        Add Subcategory
                    </Button>
                    {(category.subcategoriesId.length === 0)?
                    <Button 
                    variant="contained" 
                    color='error'
                    onClick={() => navigate(`deleteCatOutcome/${category.id}/${category.name}`)}
                    >Delete Category</Button>
                    :
                    ""
                    }
                </AccordionActions>
            </Accordion>
            ))}
        </>
    )
}

export {CategoriesAccordion}
