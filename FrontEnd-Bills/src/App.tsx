import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layer } from './GlobalComponents/Layer'
import { ThemeProvider, createTheme } from '@mui/material'
import { CategoriesOutcomePage } from './Routes/CategoriesOutcomePage/Index';
import { BillsPage } from './Routes/BillsPage/Index';
import { IncomeManagmentPage } from './Routes/IncomeManagmentPage/Index';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AddCatIncomeModal } from './Routes/IncomeManagmentPage/Components/AddCatIncomeModal';
import { AddIncomeModal } from './Routes/IncomeManagmentPage/Components/AddIncomeModal';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4d5382',
    },
    secondary: {
      main: '#cacf85',
    }
  }
});
function App() {

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <HashRouter basename='/'>
          <Routes>
            <Route path='/' element={<Layer/>}>
              <Route path='outcome-managment' element={<CategoriesOutcomePage/>}/>
              <Route path='bills-managment' element={<BillsPage/>}/>
              <Route path='income-managment' element={<IncomeManagmentPage/>}>
                <Route path='addCatIncome' element={<AddCatIncomeModal/>}/>
                <Route path='addIncome/:catInId' element={<AddIncomeModal/>}/>
              </Route>
              <Route path='incomes' element={<BillsPage/>}/>
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </LocalizationProvider>
    </>
  )
}

export default App 
