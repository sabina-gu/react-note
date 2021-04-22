import React from 'react';
import './note-list-item.css'



const NoteListItem = (props) => {

    const {title, content, onDeleted, onEdit} = props;

   const cutContent = content.slice(0, 50) + ' ...';

   const cutTitle = title.slice(0, 26);


      return <div className='li-div'>

            <div className="text"><p className='titleText'>{cutTitle}</p> <br/> <p className='contentText' >{cutContent}</p></div>
            <div className="i">


            <button className='btn-item edit' onClick={onEdit}> <span className="material-icons-outlined">
<i className="fas fa-pen"></i>
</span>
            </button>
                <button className='btn-item delete' onClick={onDeleted}><i className="fas fa-trash"></i></button >
            </div>
      </div>
};

export default NoteListItem