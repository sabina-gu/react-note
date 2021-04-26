import React from 'react';
import './edit-note.css'


const EditNote = (props) => {

    const {onOpenEdit, idNote,setTitle,setNote, setText ,noteText, noteTitle} = props;


     const onSubmit = (e) => {
        e.preventDefault();
        if (noteTitle.length ===0 || noteText.length === 0){
             return false}

         let nott = JSON.parse(localStorage.getItem('notes'))|| [];
         nott[idNote].title = noteTitle;
         nott[idNote].content = noteText;

         localStorage.setItem('notes',JSON.stringify(nott));
         const updatedNotes = localStorage.getItem('notes') ||[]
         setNote(JSON.parse(updatedNotes));
         onOpenEdit()};



    return (<div className="cont-dialog-save">
        <form className='dialog'>

            <span className='span-dialog close' onClick={onOpenEdit}><i className="fas fa-times"></i></span>
            <span className='span-dialog create' onClick={onSubmit}><i className="fas fa-save"></i></span><br/>


            <input className='note-input title-create'
                   maxLength="20"
                   type="text"
                   placeholder='Title'
                   onChange={e => setTitle(e.target.value)}
                    value={noteTitle}/> <br/>


            <textarea type="text"
                   className='note-input content-create'
                   placeholder='Your note...'
                   onChange={e => setText(e.target.value)}
                   value={noteText}
                  />
        </form>
        </div>

    )

};

export default EditNote