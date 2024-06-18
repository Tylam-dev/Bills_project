import { Box, Button, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

const BillsPage: React.FC = () => {
    return(
        <>
            <Box marginY={2} paddingX={2} display={"flex"} justifyContent={'space-between'}>
                <Typography color={'secondary'} variant="h4">
                    Bills
                </Typography>
                <Button variant="contained">
                    <AddIcon/>
                </Button>
            </Box>
        </>
    )
}

export {BillsPage}