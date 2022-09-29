import './App.css';
import AdminOverview from './components/AdminOverview/AdminOverview';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPatient from './components/Patient/ListPatient';
import PatientProfile from './components/Patient/PatientProfile';
function App() {
  return (
    <Router>
      <div className=" overflow-hidden lg:overflow-visible">
        <div className="xl:pl-60  pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
          <Topbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/benh-nhan" element={<ListPatient />} />
            <Route path="/chi-tiet-benh-nhan" element={<PatientProfile />} />
          </Routes>
        </div>
      </div>

      {/* <Home /> */}
    </Router>
  );
}

export default App;
