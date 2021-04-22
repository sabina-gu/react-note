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

    const [isOpen, setOpen] = useState(false);   //открывает окно создания заметки

    const [isOpenEdit, setOpenEdit] = useState(false); //открывает окно редактирование заметки

    const [isRequest, setRequest] = useState(false); //открывает окно confirmation


    let [updateNoteId, setUpdateNoteId] = useState([]);   //передает нужный ID компоненту EditNote

    let [idNote, setIdNote] = useState([]);          //сохраняет ID заметки

    let [noteTitle, setTitle] = useState('');    //сохраняет заголовок

    let [noteText, setText] = useState('');    //сохраняет текст



    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]); //сохраняет заметки в localStorage


    useState(()=>{
        const raw = localStorage.getItem('notes') ||[];
        setNotes(JSON.parse(raw))
    }, []);                  //извлекает заметки из localStorage


    const deleteItem = (id) => {
        toggleRequest();
        const idx = notes.findIndex((el)=>el.id ===id);
        setIdNote(idx)

    };                                                        // передает ID для удаления в компоненте Confirmation


    const editNoteTitle = (id) => {

        toggleDialogEdit();
        const idx = notes.findIndex((el)=>el.id ===id);
        let note2 = JSON.parse(localStorage.getItem('notes'));
        noteTitle = note2[idx].title;
        noteText = note2[idx].content;
        setUpdateNoteId(idx);
        setTitle(noteTitle);
        setText(noteText);
    };                                                   //редактирует заметку



    const toggleDialog = () => {
      setOpen (!isOpen);
    };                                                    //открывает окно создания заметки

    const toggleDialogEdit = () => {
        setOpenEdit (!isOpenEdit);
    };                                                    //открывает окно редактирования заметки

    const toggleRequest = () => {
        setRequest(!isRequest)
    };                                                    //открывает окно confirmation

    const createNote = (title, content) => {
        return {
            title,
            content,
            id: Date.now()
        };
    };                                                    //создает новую заметку

    const addNote = (title, content) => {
        toggleDialog();
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
                <NoteList  notes={notes} onDeleted={deleteItem} onDialog = {toggleRequest} onToggle={toggleDialogEdit} onEdit={editNoteTitle} dialog={EditNote}/>
                <Button modal={toggleDialog}/>

                {isOpen ? <CreateNote onOpen={toggleDialog}
                                  onAdded={addNote}/> : null}

                {isOpenEdit ? <EditNote onOpenEdit={toggleDialogEdit} noteText={noteText} noteTitle={noteTitle}
                                        notes={notes} setNote={setNotes} onEdit={editNoteTitle} updateNoteId ={updateNoteId} setTitle={setTitle} setText={setText}/> : null}

                {isRequest ? <Confirmation onClose={toggleRequest} setNote={setNotes} idNote={idNote} notes={notes} onDeleted={deleteItem}/>: null}

            </div>
        </div>
        </ErrorBoundary>
    )

};

export default App;



