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
import ExamPage from './components/Exam/ExamPage';
import Profile from './components/Dashboard/ProfileComponent';

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
      component = <Dashboard title="Student"/>
      break;

    case '/testing':
      component = <Testing/>
      break;

    case '/about':
      component = <About/>
      break;

    case '/exam':
      component = <ExamPage examname="Computer Science" fullmarks="10" time="00:10:00"/>
      break;


    case '/profile':
      component = <Profile/>
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
