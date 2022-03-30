import React from 'react';
import './Share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'

function Share(props) {
    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                <img className='shareProfileImg' src='/assests/person/1.jpg' alt='' />
                <input placeholder="What's in your mind?" className='shareInput'></input>
                </div>
                <div className='sharehr'></div>
                    <div className='shareBottom'>
                    <div className='shareOptions'>
                    <div className='shareOption'>
                        <PermMedia htmlColor='#f00' className='shareIcon' />
                        <span className='shareOptionText'>Photo and Video</span>
                    </div>
                    <div className='shareOption'>
                        <Label htmlColor='blue'  className='shareIcon' />
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className='shareOption'>
                        <Room htmlColor='#002d08'  className='shareIcon' />
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className='shareOption'>
                        <EmojiEmotions htmlColor='#ff5722'  className='shareIcon' />
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
                    </div>
            </div>
        </div>
    );
}

export default Share;