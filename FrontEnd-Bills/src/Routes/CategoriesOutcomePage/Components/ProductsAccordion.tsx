import { Accordion, AccordionActions, AccordionSummary, Button, Divider } from "@mui/material"
import { Product } from "../../../interfaces/CategoriesOutcome"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";

interface ComponentProps {
    products: Product[]
}

const ProductsAccordion: React.FC<ComponentProps> = ({products}) => {
    const navigate = useNavigate()
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
                        <Button 
                        variant="contained" 
                        color="error"
                        onClick={() => navigate(`deleteProduct/${product.id}/${product.name}`)}
                        >
                            Delete
                        </Button>
                        <Button 
                        variant="contained" 
                        color="success"
                        onClick={() => navigate(`editProduct/${product.id}`)}
                        >
                            Edit
                        </Button>
                </AccordionActions>
                </Accordion>
            ))}
        </>
    )
}

export {ProductsAccordion}