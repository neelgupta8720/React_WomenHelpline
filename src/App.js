import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.scss';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team';
import Messages from './pages/Messages';
import Support from './pages/Support';
import Footer from './pages/Footer';
import post from './pages/post-page';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  
  return (
    <>


      <Router>
        <ChakraProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reports" component={Reports} />
            <Route path="/products" component={Products} />
            <Route path="/team" component={Team} />
            <Route path="/messages" component={Messages} />
            <Route path="/support" component={Support} />
            <Route path="/post-page" component={post} />
            
          </Switch>
          <Footer />


        
        </ChakraProvider>
      </Router>

    </>
  );
}

export default App;
