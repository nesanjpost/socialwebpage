import React from 'react';
import './online.css'

function Online({users}) {
    return (
        <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img className='rightbarProfileImg' src={users.profilePicture} alt='' />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>{users.username}</span>
                    </li>
    );
}

export default Online;