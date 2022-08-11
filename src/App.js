import './App.css';
import './css/bee.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Testing from './pages/Testing';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Notfound from './pages/Notfound';

import Header from './components/Utils/Header';
import Footer from './components/Utils/Footer';

function App() {
  let component;
  let imgSrc = "";
  switch (window.location.pathname) {
    case '/':
      component = <Home/>
      imgSrc = "assets/images/background/background.png";
      break;
    
    case '/login':
      component = <Login/>
      imgSrc = "assets/images/background/background.png";
      break;

    case '/signup':
      component = <Signup/>
      imgSrc = "assets/images/background/background.png";
      break;  

    case '/dashboard':
      component = <Dashboard title="Student"/>
      imgSrc = "assets/images/background/background.png";
      break;

    case '/testing':
      component = <Testing/>
      break;

    case '/about':
      component = <About/>
      imgSrc = "assets/images/background/background.png";
      break;

    default:
      component = <Notfound/>
      break;
  }
  return (
    <>
      <Header/>
      {component}
      <Footer/>
    </>
  );
}

export default App;
