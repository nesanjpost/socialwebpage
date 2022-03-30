import React from 'react';
import './Sidebarfeed.css'

function Sidebarfeed({users}) {
    return (
        <li className='sidebarFriend'>
        <img className='sidebarFriendImg' src={users.profilePicture} alt=''/>
        <span className='sidebarFriendName'>{users.username}</span>
    </li>
    );
}

export default Sidebarfeed;