import './App.css';
import AdminOverview from './components/AdminOverview/AdminOverview';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPatient from './components/Patient/ListPatient';
import PatientProfile from './components/Patient/PatientProfile';
import Doctors from './pages/Doctors/Doctors';
import DoctorForm from './pages/Doctors/DoctorForm';
import DemoDialog from './components/Dialog/DemoDialog';
import Employees from './pages/Employees/Employees';
function App() {
  return (
    <Router>
      <div
        className=" overflow-hidden lg:overflow-visible"
        style={{ padding: 0 }}>
        <div className="xl:pl-60  pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
          <Topbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/benh-nhan" element={<ListPatient />} />
            <Route path="/chi-tiet-benh-nhan" element={<PatientProfile />} />
            <Route path="/bac-si" element={<Doctors />} />
            <Route path="/demo-dialog" element={<Employees />} />
          </Routes>
        </div>
      </div>

      {/* <Home /> */}
    </Router>
  );
}

export default App;
