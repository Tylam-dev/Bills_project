import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ClassIcon from '@mui/icons-material/Class';
import CategoryIcon from '@mui/icons-material/Category';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PaidIcon from '@mui/icons-material/Paid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface ChildComponentsProps {
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>,
    openDrawer: boolean,
}
const outcomeButtons = [
    { text: "Categories", icon: <ClassIcon/> },
    { text: "Subcategories", icon: <CategoryIcon/> },
    { text: "Bills", icon: <ReceiptIcon/> },
]

const incomeButtons = [
    { text: 'Incomes', icon: <AttachMoneyIcon/>},
    { text: 'Categories', icon: <CategoryIcon/>}
]
const VerticalNav: React.FC<ChildComponentsProps> = ({setOpenDrawer, openDrawer}) => {
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenDrawer(false)}>
          <List>
            <ListItem>
                <ListItemIcon>
                    <PointOfSaleIcon/>
                </ListItemIcon>
                <ListItemText primary={"Outcome"}/>
            </ListItem>
            {outcomeButtons.map((obj, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {obj.icon}
                  </ListItemIcon>
                  <ListItemText secondary={obj.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ShoppingBasketIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Products"} />
                </ListItemButton>
            </ListItem>
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
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {obj.icon}
                  </ListItemIcon>
                  <ListItemText secondary={obj.text} />
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
