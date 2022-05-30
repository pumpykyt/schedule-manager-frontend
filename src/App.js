import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./components/Nav";
import HomePage from "./containers/HomePage";
import {ToastContainer} from "react-toastify";
import AdminPage from "./containers/AdminPage";
import ScheduleList from "./containers/ScheduleList";
import LoginPage from "./containers/LoginPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/admin" element={<AdminPage/>}/>
          <Route exact path="/schedules" element={<ScheduleList/>}/>
          <Route exact path="/login" element={<LoginPage/>}/>
        </Routes>
        <ToastContainer position="top-left" />
      </Router>
    </div>
  );
}

export default App;
