import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import NavigationBar from './components/layout/Navbar/Navbar';
import Dashboard from './pages/admin/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './pages/Details';
import Footer from './components/layout/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
    <NavigationBar />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/:id" element={<Details />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
