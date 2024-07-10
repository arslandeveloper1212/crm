
import './App.css';
import Sidebar from './components/Sidebar';
import Middle from './components/Middle';
import Last from './components/Last';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CreateCustomer from './pages/CreateCustomer';
import {Routes, Route} from 'react-router-dom';
import CustomerDash from './pages/CustomerDash';
import CustDetailSide from './components/CustDetailSide';
import { useLocation } from 'react-router-dom';
import PolicyDashboard from './pages/PolicyDashboard';
import CustPolicySide from './components/CustPolicySide';


function App() {
  const location = useLocation();

  // Determine if we are on the dashboard-customer route
  const isDashboardCustomerRoute = location.pathname === '/dashboard-customer';
  const isDashboardPolicyRoute = location.pathname === '/policy-dashboard';
 
 
  return (
    <div className="d-flex flex-grow-1" style={{marginTop:"10px"}}>
    
    <Sidebar/>
     <Routes>
     <Route path="/create-customer" element={<CreateCustomer/>}/>
     
     {/* Conditional Route rendering */}
     {isDashboardCustomerRoute && <Route path='/dashboard-customer' element={<CustomerDash />} />}
     {isDashboardPolicyRoute && <Route path= "/policy-dashboard" element={<PolicyDashboard/>}/> }
     </Routes>
    
     
     
     {/* Conditional rendering of detailed side component */}
     {isDashboardCustomerRoute && <CustDetailSide />}
     {isDashboardPolicyRoute && <CustPolicySide/>}
    
   
    </div>
  );
}

export default App;
