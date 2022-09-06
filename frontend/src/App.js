
import './App.css';
import { Routes,Route } from 'react-router-dom';
import DashBoard  from './components/Dashboard';
import Register from './components/register';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { DocRegister } from './components/doctersignup';
import { DocSignIn } from './components/docterSignin';
import { PatientRegister } from './components/patientsignup';
import { PatientSignIn } from './components/patientSignin';
function App() {
  return (

    <div className="App">
      <Navbar className="navbar"></Navbar>
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/Login" element={<Register />}></Route>
        <Route path="/DocRegister" element={<DocRegister />}></Route>
        <Route path="/DocSignIn" element={<DocSignIn/>}></Route>
        <Route path="/PatientRegister" element={<PatientRegister />}></Route>
        <Route path='/PatientLogin' element={<PatientSignIn/>}></Route>
      </Routes>

      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;
