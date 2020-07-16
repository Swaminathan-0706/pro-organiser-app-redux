import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import CreateBoard from './Pages/CreateBoard/CreateBoard';
import Boards from './Pages/Boards/Boards';



function App() {
  return (
    <>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route strict path='/createboard' component={CreateBoard} />
      <Route path='/board/:boardid' component={Boards} />
      </Switch>
    </>
  );
}

export default App;
