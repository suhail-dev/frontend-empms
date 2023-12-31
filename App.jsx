import './App.css'
import DepartmentComponent from './Components/DepartmentComponent'
import EmployeeComponent from './Components/EmployeeComponent'
import { HeaderComponent } from './Components/HeaderComponent'
import ListDepartmentComponent from './Components/ListDepartmentComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {


  return (
    <>
    <BrowserRouter>

      <HeaderComponent/>
      <Routes>
        {/* http://localhost:3000*/}
      <Route path='/' element={<ListEmployeeComponent/>}></Route>

        {/* http://localhost:3000/employees */}
        <Route path='/employees' element={<ListEmployeeComponent/>}></Route>

        {/* http://localhost:3000/add-employees */}
        <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

        {/* http://localhost:3000/edit-employees/1 */}
        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>

        {/* http://localhost:3000/departments */}
        <Route path='/departments' element={<ListDepartmentComponent/>}></Route>

         {/* http://localhost:3000/add-department */}
        <Route path='/add-department' element={<DepartmentComponent/>}></Route>
    
       {/* http://localhost:3000/edit-department/1 */}
        <Route path='/edit-department/:id' element={<DepartmentComponent/>}></Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
