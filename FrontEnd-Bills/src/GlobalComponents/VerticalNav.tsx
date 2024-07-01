import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaidIcon from '@mui/icons-material/Paid';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useNavigate } from 'react-router-dom';
import TollIcon from '@mui/icons-material/Toll';

interface ChildComponentsProps {
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>,
    openDrawer: boolean,
}
const outcomeButtons = [
    { text: "Outcome Managment", icon: <EditNoteIcon />, link: 'outcome-managment' },
    { text: "Bills", icon: <ReceiptIcon/>, link: 'bills-managment' },
]

const incomeButtons = [
  { text: "Income Managment", icon: <EditNoteIcon />, link: 'income-managment' },
  { text: "Incomes", icon: <TollIcon/>, link: 'incomes' },
]

const VerticalNav: React.FC<ChildComponentsProps> = ({setOpenDrawer, openDrawer}) => {

    const navigate = useNavigate()
    const DrawerList = (
        <Box sx={{ width: 250 }} minHeight={'100vh'} bgcolor={'primary.light'} role="presentation" onClick={() => setOpenDrawer(false)}>
          <List>
            <ListItem >
                <ListItemIcon>
                    <PointOfSaleIcon/>
                </ListItemIcon>
                <ListItemText primary={"Outcome"}/>
            </ListItem>
            {outcomeButtons.map((obj, index) => (
              <ListItem  key={index} disablePadding>
                <ListItemButton onClick={() => navigate(obj.link)}>
                  <ListItemIcon>
                    {obj.icon}
                  </ListItemIcon>
                  <ListItemText  secondary={obj.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem >
                <ListItemIcon>
                    <PaidIcon/>
                </ListItemIcon>
                <ListItemText primary={"Income"} />
            </ListItem>
            {incomeButtons.map((obj, index) => (
              <ListItem  key={index} disablePadding>
              <ListItemButton onClick={() => navigate(obj.link)}>
                <ListItemIcon>
                  {obj.icon}
                </ListItemIcon>
                <ListItemText  secondary={obj.text} />
              </ListItemButton>
            </ListItem>
            ))}
          </List>
        </Box>
      );
    
      return (
        <>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            {DrawerList}
          </Drawer>
        </>
      );
}

export {VerticalNav}
