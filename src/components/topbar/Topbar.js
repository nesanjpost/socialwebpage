import React from 'react';
import './Topbar.css'
import {Search, Person, Chat, Notifications, Home, Settings } from '@material-ui/icons';
import Profile from '../../pages/profile/Profile';
// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import { Link } from "react-router-dom";



function Topbar() {
    return (
        
       
        <div className='topbarContainer'>
       
     
      
            <div className='topbarLeft'>
                <Link to="/" style={{ textDecoration: "none" }}> <span className='logo'>BeSocial</span></Link>
               
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <Search className='searchIcon'/>
                    <input placeholder='search for friend, post or video' className='searchInput'></input>

                </div>
            </div>
            <div className='topbarRight'>
            <div className='topbarLinks'>
                <Link to="/Profile"><span className='topbarLink'><Home  /></span></Link>
                
                {/* <Route exact path="Profile" element={<Profile />}/> */}
                <span className='topbarLink'><Settings/></span>
            </div>
            <div className='topbarIcons'>
                <div className='topbariconItem'>
                    <Person />
                    <span className='topbariconBadge'>1</span>
                </div>
                <div className='topbariconItem'>
                    <Chat />
                    <span className='topbariconBadge'>2</span>
                </div>
                <div className='topbariconItem'>
                    <Notifications />
                    <span className='topbariconBadge'>1</span>
                </div>
            </div>
            <img src='/assests/person/1.jpg' alt='' className='topbarImg' onClick={()=>{<Profile/>}}/>

            </div>
        </div>
    
    );
}


export default Topbar;