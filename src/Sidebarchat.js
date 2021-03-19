import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from './firebase';
import './Sidebarchat.css'
function Sidebarchat({ id, name, addNewChat }) {
    const [seed, setseed] = useState("");

    useEffect(() => {

        setseed(Math.floor(Math.random() * 5000))

    }, [])
    const createChat = () => {
        const roomName = prompt("Please Enter name of Room chat");
        if (roomName) {
            //  do same clver stuuf
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }
    return !addNewChat ? (
        <div className="sidebarchat">

            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarchat__info">
                <h2>{name}</h2>
                <p>hy How are you budy😍 </p>
            </div>
        </div>

    ) : (
        <div onClick={createChat} className="sidebarchat">
            <h2>Add new Chat</h2>
        </div>
    );






}

export default Sidebarchat
