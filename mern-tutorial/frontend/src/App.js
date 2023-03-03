/**
 *  Author: CastleBomber
 *  Project: Mern-Tutorial
 *  Date: January 14th, 2023
 *
 *  Acknowledgements: Traversy Media's Youtube MERN stack series
 *
 *  Accounts:
 *  robby@gmail.com password
 *  cbombs@gmail.com cbombs
 *
 *  Tips:
 *  To get app running, affirm correct folder,
 *  npm run server
 *  npm run client
 *  npm run dev - runs both server && client
 *
 *  cmd+D will change opening and closing tag simultaneously
 *  cmd+D (+ D..) change multiple nearby instances of a name
 *  cors-heroku error: open https://cors-anywhere.herokuapp.com/corsdemo
 *
 *  Watch out for:
 *  In app, older syntax 'component', needs to be switched to 'element'
 *  older syntax of 'Switch', need to be 'Router' surrounding 'Route'
 *
 *  URL variables may need ending '/' added to function properly
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
