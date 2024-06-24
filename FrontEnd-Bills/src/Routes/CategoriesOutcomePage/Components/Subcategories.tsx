import { Accordion, AccordionActions, AccordionSummary, Button, Divider } from "@mui/material"
import { SubcategoriesOutcome } from "../../../interfaces/CategoriesOutcome"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProductsAccordion } from "./ProductsAccordion";
interface ComponentsProps {
    subcategoriesOutcome: SubcategoriesOutcome[]
}

const SubcategoriesAccordion:React.FC<ComponentsProps> = ({subcategoriesOutcome}) => {
    return(
        <>
            {subcategoriesOutcome.map((subcategory, index) => (
                <Accordion key={index} sx={{ bgcolor:'secondary.main'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{fontSize:'1.3rem', fontWeight:'bold', color:'primary.dark'}}
                >
                    {subcategory.name}
                </AccordionSummary>
                <Divider/>
                <ProductsAccordion products={subcategory.productsId}/>
                <AccordionActions sx={{display:"flex", justifyContent:'center', gap:10, bgcolor:'secondary.light'}}>
                    <Button sx={{bgcolor:'primary.light'}} variant="contained">Add Product</Button>
                    {(subcategory.productsId.length === 0)?
                    <Button variant="contained" color='error'>Delete Subcategory</Button>
                    :
                    ""
                    }
                </AccordionActions>
                </Accordion>
                ))
            }
        </>
    )
}
export {SubcategoriesAccordion}