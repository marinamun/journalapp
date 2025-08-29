import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:userId" element={<Dashboard />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
