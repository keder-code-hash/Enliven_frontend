import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Notfound from './pages/Notfound';
import Navbar from './components/Utils/NavbarComponent';
import Alert from './components/Utils/Alert';


function App() {
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Home/>
      break;
    
    case '/login':
      component = <Login/>
      break;

    case '/signup':
      component = <Signup/>
      break;  

    case '/dashboard':
      component = <Dashboard/>
      break;

    default:
      component = <Notfound/>
      break;
  }
  return (
    <>
      <Navbar/>
      <Alert/> 
          <div className="background" style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/images/background/bg2.png'})`,
              aspectRatio: 960 / 540,
              height: '100%',
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              position: 'absolute',
              top: '8vh'
          }}>
            <div className="container-fluid" style={{position: "relative",top:"15vh"}}>
              {component}
            </div>
          </div>
    </>
  );
}

export default App;
