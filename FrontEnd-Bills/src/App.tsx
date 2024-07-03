import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layer } from './GlobalComponents/Layer'
import { ThemeProvider, createTheme } from '@mui/material'
import { CategoriesOutcomePage } from './Routes/CategoriesOutcomePage/Index';
import { BillsPage } from './Routes/BillsPage/Index';
import { IncomeManagmentPage } from './Routes/IncomeManagmentPage/Index';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AddCatIncomeModal } from './Routes/IncomeManagmentPage/Components/CatIncomeModal/AddCatIncomeModal';
import { AddIncomeModal } from './Routes/IncomesPage/IncomeModal/AddIncomeModal';
import { DeleteIncomeModal } from './Routes/IncomesPage/IncomeModal/DeleteIncomeModal';
import { EditIncomeModal } from './Routes/IncomesPage/IncomeModal/EditIncomeModal';
import { DeleteCatIncomeModal } from './Routes/IncomeManagmentPage/Components/CatIncomeModal/DeleteCatIncomeModal';
import { AddCatOutcomeModal } from './Routes/CategoriesOutcomePage/Components/CatOutModal/AddCatOutcomeModal';
import { DeleteCatOutcome } from './Routes/CategoriesOutcomePage/Components/CatOutModal/DeleteCatOutcome';
import { AddSubcatOutModal } from './Routes/CategoriesOutcomePage/Components/SubcatModal/AddSubcatOutModal';
import { DeleteSubcatOutModal } from './Routes/CategoriesOutcomePage/Components/SubcatModal/DeleteSubcatOutModal';
import { AddProductModal } from './Routes/CategoriesOutcomePage/Components/ProductModal/AddProductModal';
import { DeleteProductModal } from './Routes/CategoriesOutcomePage/Components/ProductModal/DeleteProductModal';
import { PatchProductModal } from './Routes/CategoriesOutcomePage/Components/ProductModal/PatchProductModal';
import { AddBillModal } from './Routes/BillsPage/Components/BillsModal/AddBillModal';
import { BillModal } from './Routes/BillsPage/Components/BillsModal/BillModal';
import { ProductOfBillModal } from './Routes/BillsPage/Components/BillsModal/ProductOfBillModal';
import { EditProductBillModal } from './Routes/BillsPage/Components/BillsModal/EditProductBill';
import { IncomePage } from './Routes/IncomesPage/Index';
import { GraphBillModal } from './Routes/BillsPage/Components/BillsModal/GraphBillModal';

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
              <Route path='outcome-managment' element={<CategoriesOutcomePage/>}>
                <Route path='deleteCatOutcome/:idCatOut/:nameCatOut' element={<DeleteCatOutcome/>}/>
                <Route path='deleteSubcatOutcome/:idSubcatOut/:nameSubcatOut' element={<DeleteSubcatOutModal/>}/>
                <Route path='addCatOutcome' element={<AddCatOutcomeModal/>}/>
                <Route path='addSubcatOutcome/:idCatOut/:nameCatOut' element={<AddSubcatOutModal/>}/>
                <Route path='addProduct/:idSubcat/:nameSubcatOut' element={<AddProductModal/>}/>
                <Route path='editProduct/:idProduct' element={<PatchProductModal/>}/>
                <Route path='deleteProduct/:idProduct/:nameProduct' element={<DeleteProductModal/>}/>
              </Route>
              <Route path='bills-managment' element={<BillsPage/>}>
                <Route path='addBill' element={<AddBillModal/>}/>
                <Route path='Bill/:idBill/' element={<BillModal/>}>
                  <Route path='addProductBill' element={<ProductOfBillModal/>}/>
                  <Route path='editProductBill/:idProductBill/:nameProduct' element={<EditProductBillModal/>}/>
                  <Route path='graph' element={<GraphBillModal/>}/>
                </Route>
              </Route>
              <Route path='incomes' element={<IncomePage/>}>
                <Route path='addIncome' element={<AddIncomeModal/>}/>
                <Route path='editIncome/:idInc' element={<EditIncomeModal/>}/>
                <Route path='deleteIncome/:idInc/:descripIn' element={<DeleteIncomeModal/>}/>
              </Route>
              <Route path='income-managment' element={<IncomeManagmentPage/>}>
                <Route path='addCatIncome' element={<AddCatIncomeModal/>}/>
                <Route path='deleteCatIncome/:idCatInc/:nameIn' element={<DeleteCatIncomeModal/>}/>
              </Route>
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </LocalizationProvider>
    </>
  )
}

export default App 
