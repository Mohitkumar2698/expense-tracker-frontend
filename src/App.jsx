import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dhashboard from "./pages/Dhashboard";
import Navbar from "./components/Navbar";
import Transactions from "./pages/Transactions";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Dhashboard />} path="/" />
        <Route element={<Transactions />} path="/transactions" />
      </Routes>
    </Router>
  );
};

export default App;
