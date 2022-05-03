import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ListEmployeeComponent from "./components/ListEmployeeComponent"
import HeaderComponents from './components/HeaderComponents';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
// import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
function App() {
  return (
    <div className='box'>
      <Router>
      <HeaderComponents/>
      <div className="container">
        <Routes>
          <Route path='/' exact element = {<ListEmployeeComponent/>}/>
          <Route path='/employees' element = {<ListEmployeeComponent/>}/>
          <Route path='/add-employee/:id' element = {<CreateEmployeeComponent/>}/>
          <Route path='/view-employee/:id' element = {<ViewEmployeeComponent/>}/>
          {/* <Route path='/update-employee/:id' element = {[<UpdateEmployeeComponent/>]}/> */}
      </Routes>
    </div>
    <FooterComponent/>
    </Router>
    </div>
  );
}
export default App;