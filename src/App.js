import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Middle from './components/Middle';
import Last from './components/Last';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CreateCustomer from './pages/CreateCustomer';
import CustomerDash from './pages/CustomerDash';
import CustDetailSide from './components/CustDetailSide';
import PolicyDashboard from './pages/PolicyDashboard';
import CustPolicySide from './components/CustPolicySide';
import BillingDashboard from './pages/BillingDashboard';
import CustBillingSide from './components/CustBillingSide';
import SupportDashboard from './pages/SupportDashboard';
import CustSupportSide from './components/CustSupportSide';
import ActivityLog from './pages/ActivityLog';
import KnowledgeBase from './pages/KnowledgeBase';
import KnowledgeAccord from './pages/KnowledgeAccord';
import Home from './pages/Home';
import Signup from './pages/Signup';


function App() {
  const location = useLocation();

  // Determine if we are on the dashboard-customer route
  const isDashboardCustomerRoute = location.pathname === '/dashboard-customer';
  const isDashboardPolicyRoute = location.pathname === '/policy-dashboard';
  const isDashboardBillingRoute = location.pathname === '/billing-dashboard';
  const isDashboardSupportRoute = location.pathname === '/support-dashboard';

  // Determine if we are on the signup page
  const isSignupRoute = location.pathname === '/signup';

  return (
    <div className="d-flex flex-grow-1" style={{ marginTop: "10px" }}>
      {/* Conditional rendering of Sidebar */}
      {!isSignupRoute && <Sidebar />}

      <Routes>
        <Route path='/' element={<Home />} />
        {/* Remove Sidebar from Signup route */}
        <Route path="/signup" element={<Signup />} />

        {/* Other routes */}
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path='/activity-log' element={<ActivityLog />} />
        <Route path='/knowledge-base-faq' element={<KnowledgeBase />} />
        <Route path='/knowledge-base-accordion' element={<KnowledgeAccord />} />

        {/* Conditional Route rendering */}
        {isDashboardCustomerRoute && <Route path='/dashboard-customer' element={<CustomerDash />} />}
        {isDashboardPolicyRoute && <Route path="/policy-dashboard" element={<PolicyDashboard />} />}
        {isDashboardBillingRoute && <Route path='/billing-dashboard' element={<BillingDashboard />} />}
        {isDashboardSupportRoute && <Route path="/support-dashboard" element={<SupportDashboard />} />}

      </Routes>

      {/* Conditional rendering of detailed side component */}
      {isDashboardCustomerRoute && <CustDetailSide />}
      {isDashboardPolicyRoute && <CustPolicySide />}
      {isDashboardBillingRoute && <CustBillingSide />}
      {isDashboardSupportRoute && <CustSupportSide />}
    </div>
  );
}

export default App;


