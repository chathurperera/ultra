import React from "react";
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import {Navbar , Footer} from './Components';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/Signup/SignUp';

import Home from './pages/HomePage/Home';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
