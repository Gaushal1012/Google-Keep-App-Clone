import React, {useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const InputEvent = (e) =>{
        // const value = e.taget.value;
        // const name = e.taget.name;

        const { value, name } = e.target;
        setNote((preData)=>{
            return {
                ...preData, 
                [name]: value
            }
        })
    }

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title: '',
            content: ''
        })
    }

  return (
    <>
    <div className='main_note'>
     <form>
        <input type="text" name='title' value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off'/>
        <textarea cols="" rows="" name='content' value={note.content} onChange={InputEvent} placeholder='Write a note...'></textarea>
        <Button onClick={addEvent}>
            <AddIcon className='plus_sign'/>
        </Button>
     </form>
    </div>
    </>
  )
}

export default CreateNote
