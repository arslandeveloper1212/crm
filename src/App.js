
import './App.css';
import Sidebar from './components/Sidebar';
import Middle from './components/Middle';
import Last from './components/Last';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CreateCustomer from './pages/CreateCustomer';
import {Routes, Route} from 'react-router-dom';
import CustomerDash from './pages/CustomerDash';


function App() {
 
 
  return (
    <div className="d-flex flex-grow-1" style={{marginTop:"10px"}}>
     <Sidebar/>
     <Routes>
     <Route path="/create-customer" element={<CreateCustomer/>}/>
     <Route path='/dashboard-customer' element={<CustomerDash/>}/>
     </Routes>
    
    
   
    </div>
  );
}

export default App;
