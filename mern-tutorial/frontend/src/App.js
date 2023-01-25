/**
 *  Author: CastleBomber
 *  Project: Mern-Tutorial
 *  Date: January 14th, 2023
 *
 *  Acknowledgements: Traversy Media's Youtube MERN stack series
 *
 *  Tips:
 *  npm run server
 *  npm run client
 *  npm run dev - runs both server && client
 *  cmd+D will change opening and closing tag simultaneously
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";

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
    </>
  );
}

export default App;
