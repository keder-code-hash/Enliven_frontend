import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/bee.css";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Testing from "./pages/Testing";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Notfound from "./pages/Error/Notfound";

import Header from "./components/Utils/Header";
import Footer from "./components/Utils/Footer";
import ExamPage from "./components/Exam/ExamPage";
import Profile from "./components/Dashboard/ProfileComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/exam"
            element={
              <ExamPage
                examname="Computer Science"
                fullmarks="10"
                time="00:10:00"
              />
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
