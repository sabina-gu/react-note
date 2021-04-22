import React, {useState} from 'react';
import './create-note.css'

const CreateNote = (props) => {


    const {onOpen, onAdded} = props;

    const [noteTitle, setTitle] = useState('');  //хранит содержание несохраненного заголовка заметки
    const [noteText, setText] = useState('');     //хранит содержание  несохраненного текста заметки

    const onNoteChangeTitle = (e) => {
        setTitle(e.target.value)        //отображает содержимое заголовка
    };


    const onNoteChangeText = (e) => {
        setText(e.target.value);            //отображает содержимое текста

    };


    const onSubmit = (e) => {
        e.preventDefault();
        if (noteTitle.length ===0 || noteText.length === 0){
            return false
        } else {
            onAdded(noteTitle, noteText);
            onOpen();
        }

                                                        //сохраняет заметку
    };



    return (<div className="cont-dialog">
        <form className='dialog'>

            <span className='span-dialog close' onClick={onOpen}><i className="fas fa-times"></i></span>
            <span className='span-dialog create' onClick={onSubmit}><i className="fas fa-save"></i></span><br/>


            <input className='note-input title-create'
                   maxLength="20"
                   type="text" value={noteTitle}
                   placeholder='Title'
                   onChange={onNoteChangeTitle}/><br/>


            <textarea className='note-input content-create'
                   type="text"
                   placeholder='Your note...'
                   value={noteText}

                   onChange={onNoteChangeText}/>
        </form>
        </div>
    )

};

export default CreateNote


