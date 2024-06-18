
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionActions, Button, Divider } from '@mui/material';
import { FetchData } from '../../../customHooks/FetchData';
import { useEffect, useState } from 'react';
import { Categories } from '../../../interfaces/Categories';
import { SubcategoriesAccordion } from './Subcategories';


const CategoriesAccordion:React.FC = () => {
    const { fetchGetCategories } = FetchData()
    const [data, setData] = useState<[] | Categories[]>([])
    useEffect(() => {
        const getData = async() => {
            const data = await fetchGetCategories()
            setData(data)
        }
        getData()
    },[])
    console.log(data)
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
                    <Button variant="contained">Add Subcategory</Button>
                    {(category.subcategoriesId.length === 0)?
                    <Button variant="contained" color='error'>Delete Category</Button>
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
