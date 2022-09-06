
import './App.css';
import { Routes,Route } from 'react-router-dom';
import DashBoard  from './components/Dashboard';
import Register from './components/register';
import Footer from './components/footer';
import Navbar from './components/navbar';
function App() {
  return (

    <div className="App">
      <Navbar className="navbar"></Navbar>
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/Login" element={<Register/>}></Route>
      </Routes>
      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;
