import React, {useState, useEffect} from 'react';

import NoteList from '../note-list/note-list';
import CreateNote from '../create-note/create-note';
import EditNote from '../edit-note/edit-note'
import Confirmation from '../confirmation/confirmation'
import ErrorButton from "../error-button";
import ErrorBoundary from "../error-boundary";
import Button from "../button";

import './app.css'


const App = () => {

    const [notes, setNotes] = useState([]);  //создает пустой массив с заметками


    let [idNote, setIdNote] = useState(null);          //сохраняет ID заметки






    const [isOpen, setOpen] = useState(false);   //открывает окно создания заметки


    const [isOpenEdit, setOpenEdit] = useState(false); //открывает окно редактирование заметки

    const [isConfirmation, setConfirmation] = useState(false); //открывает окно confirmation









    let [noteTitle, setTitle] = useState('');    //сохраняет заголовок

    let [noteText, setText] = useState('');    //сохраняет текст







    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]); //сохраняет заметки в localStorage


    useState(()=>{
        const raw = localStorage.getItem('notes') ||[];
        setNotes(JSON.parse(raw))
    }, []);                  //извлекает заметки из localStorage



    const findId = (id) => {
        toggleConfirmation();
        const idx = notes.findIndex((el)=>el.id ===id);
        setIdNote(idx);
    };                                                        // передает ID для удаления в компоненте Confirmation


    const editNote = (id) => {
        toggleDialogEdit();
        const idx = notes.findIndex((el)=>el.id ===id);
        let note2 = JSON.parse(localStorage.getItem('notes'));
        setIdNote(idx);
        setTitle(note2[idx].title);
        setText(note2[idx].content);
    };                                                   //редактирует заметку



    const toggleDialog = () => {
      setOpen (!isOpen);
    };                                                    //открывает окно создания заметки

    const toggleDialogEdit = () => {
        setOpenEdit (!isOpenEdit);
    };                                                    //открывает окно редактирования заметки

    const toggleConfirmation = () => {
        setConfirmation(!isConfirmation)
    };                                                    //открывает окно confirmation






    const addNote = (title, content) => {
        toggleDialog();

        const createNote = (title, content) => {
            return {
                title,
                content,
                id: Date.now()
            };
        };
        const newNote = createNote(title, content);

            const newArr = [
                ...notes,
                newNote
            ];
            setNotes(newArr)
    };                                                //добавляет новую заметку в массив заметок


    return (
        <ErrorBoundary>
        <div className='wrapper'>
            <div className='container'>
                <div className='main'>
                <h1 className='note-title'>NOTES</h1>
                <ErrorButton/>
                </div>
                {notes.length ?  <NoteList  notes={notes} onDeleted={findId} onDialog = {toggleConfirmation} onToggle={toggleDialogEdit} onEdit={editNote} dialog={EditNote}/> :
                    <p className='no-notes'>Add some note now!</p>}

                <Button modal={toggleDialog}/>

                {isOpen ? <CreateNote onOpen={toggleDialog}
                                  onAdded={addNote}/> : null}

                {isOpenEdit ? <EditNote onOpenEdit={toggleDialogEdit} noteText={noteText} noteTitle={noteTitle}
                                        setNote={setNotes} idNote ={idNote} setTitle={setTitle} setText={setText}/> : null}

                {isConfirmation ? <Confirmation onClose={toggleConfirmation} setNote={setNotes} idNote={idNote} notes={notes} onDeleted={findId}/>: null}

            </div>
        </div>
        </ErrorBoundary>
    )

};

export default App;



