import { Accordion, AccordionActions, AccordionSummary, Button, Divider } from "@mui/material"
import { Product } from "../../../interfaces/CategoriesOutcome"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ComponentProps {
    products: Product[]
}

const ProductsAccordion: React.FC<ComponentProps> = ({products}) => {
    return(
        <>
            {products.map((product, index) => (
                <Accordion 
                key={index}
                >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{fontSize:'1.3rem', fontWeight:'bold', color:'primary.main', bgcolor:'secondary.light'}}
                >
                    {product.name}
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

export {ProductsAccordion}