import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

// Import pages
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Team from './pages/Team';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import PricingPage from './pages/PricingPage';
import DevasPage from './pages/DevasPage';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />  
        <Route exact path="/categories/all" element={<Categories />} />
        <Route exact path="/team/members" element={<Team />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/resetpassword" element={<ResetPassword />} />
        <Route exact path="/pricing" element={<PricingPage />} />
        <Route exact path="/devas" element={<DevasPage />} />
      </Routes>
    </>
  );
}

export default App;
