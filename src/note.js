import React from 'react';
import {ListItem, ListItemText,Button,Icon} from '@material-ui/core';
import './note.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Note = (props) => {
    return (
        <div>
            <div className="list">
                <ListItem>
                    <ListItemText>
                        {props.text}
                    </ListItemText>
                </ListItem>
                    <DeleteForeverIcon style={{cursor:'pointer', alignItems:"right"}}/>
               
            </div>
        </div>
    );
};

export default Note;