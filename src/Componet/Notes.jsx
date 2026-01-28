import React, { useEffect, useState } from 'react'
import CreateNotes from './CreateNotes'
import './Notes.css'
import { v4 } from 'uuid'
import Note from './Note'

const Notes = () => {
  let [inputText, setinputText] = useState("");
  let [notes, setNotes] = useState([]);
  let [edit, setEdit] = useState(null);

  let editHandler = (id, text) => {
    setEdit(id);
    setinputText(text);
  };

  let delHandler = (id) => {
    let newNotes = notes.filter(n => n.id !== id);
    setNotes(newNotes);
  };

  let saveHandler = () => {

    if (inputText === "") {
      alert("Please enter the note .....");
    }
    else {
      if (edit) {
        setNotes(notes.map((note) => (
          note.id === edit ?
            { ...note, text: inputText } :
            note
        )))
      }
      else {
        setNotes((prevNotes) => [...prevNotes,
        {
          id: v4(),
          text: inputText
        }])
      };
    };

    setinputText("");
    setEdit(null);
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes-app"));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='notes'>
      {
        setEdit ? <CreateNotes
          inputText={inputText}
          setinputText={setinputText}
          saveHandler={saveHandler} />
          : <></>
      }
      {
        notes.map((note) => (
          edit === note.id ?
            <> </>
            :
            <Note key={note.id}
              id={note.id}
              text={note.text}
              editHandler={editHandler}
              delHandler={delHandler}>

            </Note>
        )
        )}
    </div>
  )
}

export default Notes;