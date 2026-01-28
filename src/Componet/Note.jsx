import React from 'react'
import './Note.css'
export default function Note({ id, text, editHandler, delHandler }) {
    return (
        <div className='note'>
            <div className="note-body">{text}</div>
            <div className="note-footer">
                <button className='btn-del' onClick={() => delHandler(id)}>Delete</button>
                <button className='btn-edit' onClick={() => editHandler(id, text)} >Edit</button>
            </div>
        </div>
    )
}
