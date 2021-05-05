import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';


function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {

       dispatch(logout());
       auth.signOut();
    }
    return (
        <div className="header">
        

           <div className="header__left">

                  <img src="data:image/png;base64,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" alt="image"></img>
                <div className="header__search">

                    <SearchIcon />
                    <input type="text"  placeholder="Search"/>
                </div>
            </div>

            
            <div className="header__right">

      <HeaderOption Icon={HomeIcon} title="home" />
      
     <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
     <HeaderOption Icon={ BusinessCenterIcon}  title="jobs"/>
     <HeaderOption Icon={ChatIcon} title="messaging"/>
     <HeaderOption Icon={NotificationsIcon} title="Notification" />
     <HeaderOption onClick={logoutOfApp} avatar={true}   />
    


</div>

       

            
        </div>
        
    )
}

export default Header
