import React from 'react'

const CreateNotes = ({ inputText, setinputText, saveHandler }) => {
    let chartLimit = 100 - inputText.length;

    return (
        <div className='create-notes'>
            <textarea name="text" id="text"
                maxLength={100}
                placeholder='Type...'
                value={inputText}
                onChange={(e) => setinputText(e.target.value)}
            >
            </textarea>
            <div className='notes-footer'>
                <span className='label'>{chartLimit} Left</span>
                <button className='btn-save' onClick={saveHandler}>Save</button>
            </div>
        </div>
    )
}

export default CreateNotes;