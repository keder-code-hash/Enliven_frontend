import './App.css';

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
      component = <Dashboard/>
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
      <div className="background" style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + imgSrc})`,
          aspectRatio: 960 / 540,
          height: '100%',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'absolute',
          top: '8vh'
      }}>
        <div className="container-fluid" style={{
          position: "relative",
          top: "15vh",
        }}>
          {component}
        </div>
        <div style={{
          position: "relative",
          top:"15vh"
        }}>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
