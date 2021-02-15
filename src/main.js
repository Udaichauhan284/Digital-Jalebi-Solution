import React from "react";
import {useState} from "react";
import Note from "./note.js";
import "./note.css";

const Main = (props) => {
    const[notes,setNotes]=useState(['Make a app','Make a food']);
    const {handleLogout}=props
    const [inputNote,setInput]=useState('');
    const handleNotes = (event) => {
        event.preventDefault();
        const newNote=[...notes, inputNote];
        setNotes(newNote);
        setInput('');
    }
    return(
        <section className="main">
            <nav>
                <h2>Welcome 😊</h2>
                <button onClick={handleLogout}>Log Out</button>
            </nav>
            <div  style={{display:"flex", justifyContent:"center", padding:"10px",outline:"none"}}>
                <form>
                <textarea value={inputNote} rows={10} cols={95} onChange={e => setInput(e.target.value)} placeholder={" Write your notes"}></textarea>
                <button style={{backgroundColor:"#555555",
                border:"none",
                color:"white",
                paddingLeft:"5px",
                textAlign:"center",
                textDecoration:"none",
                display:"inline-block",
                fontSize:"16px",
                width:"79px",
                height:"50px",
                marginLeft:"5px"}} onClick={handleNotes}>ADD+</button>
                
                <button style={{backgroundColor:"#555555",
                border:"none",
                color:"white",
                paddingLeft:"5px",
                textAlign:"center",
                textDecoration:"none",
                display:"inline-block",
                fontSize:"16px",
                width:"79px",
                height:"50px",
                marginLeft:"10px"}}>Clear</button>
                </form>
            </div>
            
            <div className="listItems">
                {
                    notes.map(nt => <Note text={nt}></Note>)
                }
            </div>
            
        </section>
    );
};

export default Main;