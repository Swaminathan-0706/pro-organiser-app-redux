import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import CreateBoard from './Pages/CreateBoard/CreateBoard';
import SignUp from './Pages/SignUp/SignUp';


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route strict path='/createboard' component={CreateBoard} />
      <Route strict path='/signup' component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
