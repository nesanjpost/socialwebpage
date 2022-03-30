import Home from './pages/home/Home'
import { Person } from '@material-ui/icons'
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
    {/* <Profile /> */}
     
      {/* <Profile />
      <Home />
      <Login /> 
       <Register /> */}
      


      <Router className="router">
      <div className='App'>
     <Link to="Profile" className='Apps'>Profile</Link>
      <Link to="/" className='Apps'>Home</Link>
      <Link to="Login" className='Apps'>Login</Link>
      <Link to="Register" className='Apps'>Register</Link>
     </div>
      
      <Routes >
        <Route exact path="Profile" element={<Profile />}/>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Login" element={<Login />} />
          <Route exact path="Register" element={<Register />} />
      </Routes>
     
      </Router>
    </div>
  );
}

export default App;
