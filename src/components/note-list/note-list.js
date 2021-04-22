import React from 'react';
import NoteListItem from '../note-list-item/note-list-item'
import './note-list.css'

const NoteList = (props) => {


const {notes, onDeleted, onToggle, onEdit, onSubmit} = props;

    const elements = notes.map((item)=>{

        const {id, ...itemProps} = item;



        return (
            <li className='item-list' key={id} >
                <NoteListItem  {...itemProps} onDeleted ={()=>  onDeleted(id)}  onToggle={()=> onToggle()} onEdit ={()=>onEdit(id)} onUpdate ={() =>onSubmit( id)}/></li>
        );
    });

return (
    <ul>

        {elements}

    </ul>
)

};

export default NoteList