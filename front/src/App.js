import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <Routes>
          <Route path="*" element={<Auth/>} /> 
          <Route path="Home" element={<Home/>} />  
          <Route path="profile" element={<Profile/>} /> 
        </Routes>
        
    </div>
  );
}

export default App;
