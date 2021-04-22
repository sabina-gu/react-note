import React from 'react';
import './edit-note.css'


const EditNote = (props) => {

    const {onOpenEdit, note, updateNoteId,setTitle,setNote, setText ,noteText, noteTitle} = props;


     const onSubmit = (e) => {
        e.preventDefault();



        const idx = updateNoteId;



         let nott = JSON.parse(localStorage.getItem('notes'))|| []

         nott[idx].title = noteTitle;
         nott[idx].content = noteText;



         localStorage.setItem('notes',JSON.stringify(nott));

         const updatedNotes = localStorage.getItem('notes') ||[]

         setNote(JSON.parse(updatedNotes));

         onOpenEdit();


            };









    return (<div className="cont-dialog-save">
        <form className='dialog'>

            <span className='span-dialog close' onClick={onOpenEdit}><i className="fas fa-times"></i></span>
            <span className='span-dialog create' onClick={onSubmit}><i className="fas fa-save"></i></span><br/>


            <input className='note-input title-create'
                   maxLength="20"
                type="text"
                   placeholder={note}
                   onChange={e => setTitle(e.target.value)}
                    value={noteTitle}/> <br/>


            <textarea type="text"
                   className='note-input content-create'
                   placeholder={note}
                   onChange={e => setText(e.target.value)}
                   value={noteText}
                  />
        </form>
        </div>

    )

};

export default EditNote