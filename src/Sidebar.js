import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic)=> (
<div className="sidebar__recentItem">

    <span className="sidebar__hash">#</span>
    <p>{topic}</p>
    
</div>

    )
return (
        <div className="sidebar">
            <div className="sidebar__top">

                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICg0HBgYGBgYHDQoHBgYHBw8ICRANFREWIhQRExUYHCggGBolGxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NGg0NGisZFR0rKysrKysrKysrKysrLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAgAG/8QAFRABAQAAAAAAAAAAAAAAAAAAAAH/xAAYAQEBAQEBAAAAAAAAAAAAAAADBAcIBf/EABYRAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEQMRAD8A4sgvCxrNEwGFlNRUmKLiejCIS4momAlxPRMBhsTUSIS4mpUIhLieiYDCymomAwuJ6KkqLKajDBDC4mowwQwuJ6MMEMLiajCIS4npUMEMNKajDBDCYnokGGxNRhBJienLQiFkmOmqJgMLiazFJii4nowiEuJrJBNieiYDCymowiEuJqVCIS4nsmAwspqJgMLiaipKiynowwQwuJrMMEMLiejDBDC4mowglxPSoYIYaU1GGCGFxNRMBhcT0SCTE+uWILJJdNUTAYXE1GKTFGxPRhEJMTWSCbE1EwGFxPRikxRcTUYRCXE9EwGFxNRMBhcTUVJUXE9GGCGFxNRhghhcT0YYIYXE1EglxPSoYIYaU1GGCGFxNRMBhcT0SCTE+uWILJJdNUTAYXE1GKTFGxPRhEJMTUSCbE1EwGFxPRhEJcTUqEEuJ6JgMLiaiYDC4moqSouJ6MMEMLiajDBDCynsmAwuJqJBLialQwQw0p6MMEMLiaiYDC4nokEifXLEFkkumqJgMLiajFJijYmswiEuJ6JBLiaiYDC4noxSYouJqJEJcTUTAYXE9EwGFxNRUlRcT0YYIYXE1GGCGFlPZMEMLiaiQS4mpUMEMNiejDBDC4mowwQwuJ6JBIn1yxELJJdNUVRKobE1NFJii4mowiEuJ6JBLiayYDC4msxSYouJ6MIJZTUTAS4nsmCGFlNRUlRcT0YYIYXE1GGCGFlNRhBNieiQSYmpUMEMNiejDAYXE1GGAwuJ6JBIn1yxgMZJjpmyqJVDYnpopKi4mowiEuJ6JgJcTUTAYXE1mKTFFxPRIJZTUSCXE9EwGFlNRUlRcT0YYIYXE1EwGFxNRMBhsT0SCTE1KhghhsT0TAYXE1EwGFxNZIhIDXLQiFkmOmaKolUNiemUmKLiajCIS4nskEuJqJgMLiazFJii4nokEuJqJBLieiYDCymoxSVFxNRhghhZT0TAS4momAw2J6JEJMTWqGCGGxNRMBhcT0TAYXE1GEQkBrliDGS46ZoqiVQuJ6aKTFFxNRhEJcTUSCXE9EwGFxNRikxRcT0SCXE1EgllPRMBhcTUYpMUXE1mGCGFlPRIJsTUTAYXE9KZmLialQwQwuJqJgMLieiYCXE1EgkBrljAYyXHTNFUSqFxPTRQhLiajCIS4mokEuJ6JgMLiajFJii4nokEuJrJBLKeiYDC4mpREJcTUYYIYaU9kgwuJqJgMLielEEuJqMMEMLiayYDC4nokEuJqJBIDXLGMzJcdM0VRmLiejCzFxNRhZi4mslmLieiYWLiamimYspqJZi4nolmLKaiYWLiemimYuJqMMZjSnsmMxcTUTCxcTUSGLielQxmLiayYzFxPRJYuJqYsxAa/9k=" alt="image"></img>
                <Avatar src={user.photoUrl} className="sidebar__avatar" >{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                  <div className="sidebar__stat">

                    <p>who viewed you</p>
                    <p className="sidebar__statNumber">2,324</p>
                    </div>
               
                <div className="sidebar__stat">

               <p>views on your post</p>
             <p className="sidebar__statNumber">2,534</p>

           </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>

               {recentItem('software')}
               {recentItem('Reactjs')}
               {recentItem('Flutter')}
               {recentItem('popular')}
            </div>

            
        </div>
    )
}

export default Sidebar
