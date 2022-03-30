import React from 'react';
import './Profile.css'
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

function Profile(props) {
    return (
        <div>
            <Topbar />
       <div className='profile'>
       <Sidebar />
       <div className='profileRight'>
           <div className='profileRightTop'>
               <div className='profileCover'>
               <img className='profileCoverImg' src='assests/post/3.jpg' alt='' />
               <img className='profileUserImg' src='assests/person/7.jpg' alt='' />
               </div>
               <div className='profileInfo'>
                   <h4 className='profileInfoName'>Norman</h4>
                   <span className='profileInfoDesc'>Hello my friends</span>
                   
               </div>
           </div>
           <div className='profileRightBottom'>
           <Feed />
        <Rightbar profile/>
           </div>
       </div>
      
       </div>
        </div>
    );
}

export default Profile;