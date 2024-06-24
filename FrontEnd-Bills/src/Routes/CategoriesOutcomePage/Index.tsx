import { Box, Button, Typography } from "@mui/material"
import { CategoriesAccordion } from "./Components/AccordionCategories"
import AddIcon from '@mui/icons-material/Add';

const CategoriesOutcomePage = () => {
    return(
        <>
            <Box marginY={2} paddingX={2} display={"flex"} justifyContent={'space-between'} alignItems={'center'}>
                <Typography color={'secondary'} variant="h4">
                    Outcome Categories
                </Typography>
                <Button variant="contained" sx={{height: 50}}>
                    <AddIcon/>
                </Button>
            </Box>
            <CategoriesAccordion/>
        </>
    )
}
export {CategoriesOutcomePage}