import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, IconButton, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';


function App() {
    const [input, setInput] = useState('');
    const [messeges, setMessage] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {


        db.collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setMessage(snapshot.docs.map(doc => doc.data()))
            });

    }, [])


    useEffect(() => {
        //    const name = prompt('shreyash ');
        setUsername(prompt('Enter your name !'));
    }, [])

    console.log(input);
    console.log(messeges);
    const sendMessege = (event) => {
        event.preventDefault();
        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage([...messeges, { username: username, text: input }]);
        setInput('');
    }
    return ( <
        div className = "App" >
        <
        img height = '70px'
        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Facebook_Messenger_4_Logo.svg/1024px-Facebook_Messenger_4_Logo.svg.png" / >

        <
        h1 > Hello programmers..♥ < /h1> <
        p > Made by @ShreyashAnpat < /p> <
        h2 > Welcome { username } < /h2> <
        form className = "app__form" >

        <
        FormControl className = "flac" >
        <
        InputLabel > Enter a message... < /InputLabel> <
        Input autoFocus className = "inputfield"
        value = { input }
        onChange = { event => setInput(event.target.value) }
        />  <
        IconButton className = "iconbutton"
        disabled = {
            (!input) }
        variant = "contained"
        color = "primary"
        type = 'submit'
        onClick = { sendMessege } >
        <
        SendIcon / >
        <
        /IconButton> { /* <Button disabled ={(!input)} variant="contained" color="primary" type='submit' onClick={sendMessege}>send messege</Button> */ } <
        /FormControl>

        <
        /form>

        <
        FlipMove >


        {
            messeges.map(message => ( <
                Message username = { username }
                message = { message }
                />

            ))
        }

        <
        /FlipMove>

        <
        /div>


    );
}

export default App;