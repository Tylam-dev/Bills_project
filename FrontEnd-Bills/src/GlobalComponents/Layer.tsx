import { Box } from "@mui/material"
import { Navbar } from "./Navbar"
import { useState } from "react"
import { VerticalNav } from "./VerticalNav"

const Layer = ():JSX.Element => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    return(
        <Box sx={{maxWidth:'100vw', minHeight:'100vh'}}>
            <Navbar setOpenDrawer={setOpenDrawer}/>
            <VerticalNav setOpenDrawer={setOpenDrawer} openDrawer={openDrawer}/>
        </Box>
    )
}

export {Layer}