import { Box, Button, Typography } from "@mui/material"
import { CategoriesAccordion } from "./Components/AccordionCategories"
import AddIcon from '@mui/icons-material/Add';

const CategoriesOutcomePage = () => {
    return(
        <>
            <Box marginY={2} paddingX={2} display={"flex"} justifyContent={'space-between'}>
                <Typography color={'secondary'} variant="h4">
                    Categories
                </Typography>
                <Button variant="contained">
                    <AddIcon/>
                </Button>
            </Box>
            <CategoriesAccordion/>
        </>
    )
}
export {CategoriesOutcomePage}