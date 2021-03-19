import React, { useEffect, useState } from 'react'
import './Chat.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar, IconButton } from '@material-ui/core'
import { useParams } from 'react-router';
import db from './firebase';

function Chat() {
    const [seed, setseed] = useState("");
    const [input, setinput] = useState('');


    useEffect(() => {

        setseed(Math.floor(Math.random() * 5000))

    }, [])
    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input)
        setinput('');
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Developers</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        < AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciver"}`}><span className="chat__name">Akhiesh</span>hy Guyes
                <span className="chat__timestamp">3:53pm</span>
                </p>     <p className="chat__message">hy how are you</p>
                <p className={`chat__message ${true && "chat__reciver"}`}><span className="chat__name">Akhiesh</span>im fine what about you
                <span className="chat__timestamp">3:54pm</span>
                </p><p className="chat__message">Iam also fine</p>
                <p className={`chat__message ${true && "chat__reciver"}`}><span className="chat__name">Akhiesh</span>How is your study is going on
                <span className="chat__timestamp">3:54pm</span>
                </p>
                <p className="chat__message">very well tell me about u</p>
                <p className={`chat__message ${true && "chat__reciver"}`}><span className="chat__name">Akhiesh</span>yha! not that bad
                <span className="chat__timestamp">3:55pm</span>
                </p>

                <p className="chat__message">when did you come to collage</p>
                <p className={`chat__message ${true && "chat__reciver"}`}><span className="chat__name">Akhiesh</span> On monday
                <span className="chat__timestamp">3:55pm</span>
                </p>  <p className="chat__message">Okh!</p>
                <p className="chat__message">when did you come to collage</p>
                <p className={`chat__message ${true && "chat__reciver"}`}><span className="chat__name">Akhiesh</span> Bye
                <span className="chat__timestamp">3:55pm</span>
                </p>  <p className="chat__message">bye tc!</p>
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>


                <form >
                    <input type="text" value={input} onChange={(e) => setinput(e.target.value)} placeholder="Type a message.." />
                    <button onClick={sendMessage} type="submit">send a message</button>

                </form> <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
