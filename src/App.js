import React from "react";
import { Route } from 'react-router-dom';
import Home from './Components/Home'
import Form from './Components/Form'
import Navigation from './Components/Navigation'

const App = () => {
  return (
    <div>
    <Navigation />
    <Route exact path="/"/>
    <Route path="/Form" component={Form}/>
    
    </div>
  )
};
export default App;
