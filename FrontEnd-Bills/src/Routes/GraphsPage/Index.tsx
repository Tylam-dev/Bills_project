import { Box, Typography } from "@mui/material"
import { GraphBill } from "./Components/GraphBill"

const GraphPage = () => {
    return(
        <>
            <Box marginY={2} paddingX={2} display={"flex"} justifyContent={'space-between'} alignItems={'center'}>
                <Typography color={'secondary'} variant="h4">
                    Graphics
                </Typography>
            </Box>
            <GraphBill/>
        </>
    )
}

export {GraphPage}