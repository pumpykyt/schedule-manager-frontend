import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.min.css';
import Nav from "./components/Nav";
import HomePage from "./containers/HomePage";
import {ToastContainer} from "react-toastify";
import AdminPage from "./containers/AdminPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/admin" element={<AdminPage/>}/>
        </Routes>
        <ToastContainer position="top-left" />
      </Router>
    </div>
  );
}

export default App;
