import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Notfound from './pages/Notfound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route component={Notfound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
