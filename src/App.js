import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import ChangePassword from "./components/ChangePassword";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recover_password" element={<ChangePassword />} />
        <Route path="home" element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>You hit a wrong route</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
