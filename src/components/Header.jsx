import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewTodo } from '../features/todosSlice';

const Header = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    //function to handle key press
    const handleChange = e => setText(e.target.value)

    const handleKeyDown = e => {
        const trimmedText = e.target.value.trim()
        if (e.key === 'Enter' && trimmedText) {
            //dispatch thunk function with the arguments required.
            dispatch(saveNewTodo(trimmedText))
            setText('')
        }
    }

    return (
        <TextField sx={{width:'100%'}} id="standard-basic" label="What needs to be done?" variant="standard" value={text} onChange={handleChange} onKeyDown={handleKeyDown}/>
    );
};

export default Header;