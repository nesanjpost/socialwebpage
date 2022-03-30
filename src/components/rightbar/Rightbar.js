import React from 'react';
import './Rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

function Rightbar( {profile}) {

    const HomeRightbar = () => {
        return(
            <>
            <div className='birthdayContainer'>
                    <img className='birthdayImg' src='assests/gift.png' alt='' />
                    <span className='birthdayText'><b>Pola poster</b> and <b>3 other friends</b> have a birthday today</span>
                </div>
                <img className='rightbarAd' src='assests/ad.jpg' alt='' />
                <div className='rightbarhr'></div>
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className='rightbarFriendList'>
                    {Users.map((u) => ( 
                          <Online 
                        key = {u.id}
                        users = {u}
                        />
                        ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () =>{
        return(
          <>
            <h4 className='rightbarTitle'>User Information</h4>
            <div className='rightbarInfo'>
                <div className='rightbarInfoItem'>
                    <span className='rightbarInfoKey'>City : </span>
                    <span className='rightbarInfoValue'>Bhopal</span>
                </div>
                <div className='rightbarInfoItem'>
                    <span className='rightbarInfoKey'> from : </span>
                    <span className='rightbarInfoValue'>India</span>
                </div>
                <div className='rightbarInfoItem'>
                    <span className='rightbarInfoKey'>Relationship : </span>
                    <span className='rightbarInfoValue'>Single</span>
                </div>
            </div>

            <h4 className='rightbarTitle'>User friends</h4>
            <div className='rightbarFollowings'>
                <div className='rightbarFollowing'>
                    <img src='assests/person/1.jpg' alt='' className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Manilla Boss</span>
                </div>
                <div className='rightbarFollowing'>
                    <img src='assests/person/2.jpg' alt='' className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Jane Doe</span>
                </div>
                <div className='rightbarFollowing'>
                    <img src='assests/person/3.jpg' alt='' className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Maria Carter </span>
                </div>
                <div className='rightbarFollowing'>
                    <img src='assests/person/4.jpg' alt='' className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Mufti Roy</span>
                </div>
                <div className='rightbarFollowing'>
                    <img src='assests/person/5.jpg' alt='' className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Britenia </span>
                </div>
                <div className='rightbarFollowing'>
                    <img src='assests/person/6.jpg' alt='' className='rightbarFollowingImg' />
                    <span className='rightbarFollowingName'>Cristina </span>
                </div>
            </div>
          </>
        )
    }
    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    );
}

export default Rightbar;