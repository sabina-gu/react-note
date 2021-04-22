import React from 'react';

import './confirmation.css'


const Confirmation = (props) => {

    const {onClose, idNote, setNote, notes} = props;

   const confirm = ()=> {
       const newArray = [...notes.slice(0, idNote),
           ...notes.slice(idNote+1)];

       setNote(newArray);
       onClose()
    };            // удаляет заметку


    return (
        <div className="back">
            <div className="wind">
                <p className="request"> Are you sure to delete  <b>{notes[idNote].title}</b>? </p>
                    <div className="btn">
                        <button className="conf no" onClick={onClose}>
                            No
                        </button>
                        <button className="conf yes" onClick={confirm}>
                            Yes
                        </button>
                    </div>

            </div>
        </div>
    )
}

export default Confirmation