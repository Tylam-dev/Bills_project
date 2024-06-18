import { Box } from "@mui/material"
import { Navbar } from "./Navbar"
import { useState } from "react"
import { VerticalNav } from "./VerticalNav"
import { Outlet } from "react-router-dom"

const Layer:React.FC = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    return(
        <Box sx={{maxWidth:'100vw', minHeight:'100vh'}} bgcolor={'primary.dark'}>
            <Navbar setOpenDrawer={setOpenDrawer}/>
            <VerticalNav setOpenDrawer={setOpenDrawer} openDrawer={openDrawer}/>
            <Outlet/>
        </Box>
    )
}

export {Layer}