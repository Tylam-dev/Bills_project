import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layer } from './GlobalComponents/Layer'
import { ThemeProvider, createTheme } from '@mui/material'
import { CategoriesOutcomePage } from './Routes/CategoriesOutcomePage/Index';
import { BillsPage } from './Routes/BillsPage/Index';

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
      <ThemeProvider theme={theme}>
        <HashRouter basename='/bills'>
          <Routes>
            <Route path='/' element={<Layer/>}>
              <Route path='outcome-managment' element={<CategoriesOutcomePage/>}/>
              <Route path='bills-managment' element={<BillsPage/>}/>
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  )
}

export default App 
