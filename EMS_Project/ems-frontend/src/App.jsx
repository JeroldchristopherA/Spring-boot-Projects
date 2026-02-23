import { FooterComponent } from "./Component/FooterComponent"
import { HeaderComponent } from "./Component/HeaderComponent"
import ListEmployeeComponent from "./Component/ListEmployeeComponent"
import{BrowserRouter, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
    {/* //localhost:3000 */}
      <Route path='/' element={<ListEmployeeComponent/>}></Route>
      <Route path='/employees' element={<ListEmployeeComponent/>}></Route>

      {/* //http:localhost:3000/add-employee */}
      <Route path='/add-employees' element={<EmployeeComponent/>}></Route>

      {/* //http:localhost:3000/update-employee */}
      <Route path='/update-employee/:id' element={<EmployeeComponent/>}></Route>

      </Routes>
      
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
