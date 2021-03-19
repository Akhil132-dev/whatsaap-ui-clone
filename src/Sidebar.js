import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar, IconButton, ModalManager } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import Sidebarchat from './Sidebarchat';
import db from './firebase';

function Sidebar() {
    const [rooms, setrooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot((spanshot) =>
            setrooms(spanshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                })

            )
            )
        )
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>


                </div>
            </div>
            <div className="sidebar__search">
                <div className="siderbar__searchContainer">
                    <SearchIcon />
                    <input type=" text" placeholder="Search or start new chat" />
                </div>

            </div>
            <div className="sidebar__chats">
                <Sidebarchat addNewChat />
                {rooms.map((room) => (
                    <Sidebarchat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
