import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface ChildComponentsProps {
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<ChildComponentsProps> = ({setOpenDrawer}) => {
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon sx={{color:"secondary.main"}}/>
            </IconButton >
            <Typography color={'secondary'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bills App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export {Navbar}
