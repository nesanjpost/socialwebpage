import React from 'react';
import './Sidebar.css'
import { PlayCircleFilledOutlined, RssFeed, Chat, Group, Bookmark, HelpOutline, WorkOutline, Event, School} from '@material-ui/icons'
import { Users } from '../../dummyData';
import Sidebarfeed from '../sidebarfeed/Sidebarfeed';

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className='sidebarwrapper'>
              <ul className='sidebarList'>
              <li className='sidebarListItem'>
                  <RssFeed className="sidebarIcon"/>
                  <span className='sidebarListItemText'>Feed</span>
              </li>
              <li className='sidebarListItem'>
                  <Chat className="sidebarIcon chat"/>
                  <span className='sidebarListItemText'>Chats</span>
              </li>
              <li className='sidebarListItem'>
                  <PlayCircleFilledOutlined className="sidebarIcon playcircle"/>
                  <span className='sidebarListItemText'>Videos</span>
              </li>
              <li className='sidebarListItem'>
                  <Group className="sidebarIcon group"/>
                  <span className='sidebarListItemText'>Groups</span>
              </li>
              <li className='sidebarListItem'>
                  <Bookmark className="sidebarIcon bookmark"/>
                  <span className='sidebarListItemText'>Bookmarks</span>
              </li>
              <li className='sidebarListItem'>
                  <HelpOutline className="sidebarIcon help"/>
                  <span className='sidebarListItemText'>Questions</span>
              </li>
              <li className='sidebarListItem'>
                  <WorkOutline className="sidebarIcon work"/>
                  <span className='sidebarListItemText'>Jobs</span>
              </li>
              <li className='sidebarListItem'>
                  <Event className="sidebarIcon event"/>
                  <span className='sidebarListItemText'>Events</span>
              </li>
              <li className='sidebarListItem'>
                  <School className="sidebarIcon school"/>
                  <span className='sidebarListItemText'>Courses</span>
              </li>
              </ul>
              <button className='sidebarButton'>Show More</button>
              <div className='sidebarHr'></div>
              <ul className='sidebarFriendList'>
                  {
                      Users.map((u)=>(
                          <Sidebarfeed 
                          key = {u.id}
                          users = {u}
                          />
                      ))
                  }
              </ul>
            </div>
        </div>
    );
}

export default Sidebar;