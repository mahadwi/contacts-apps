import React from 'react';
import PropTypes from 'prop-types';
import { useInput } from '../utils/data';

function ContactInput({addContact}){
    const [name, handleNameChange] = useInput('');
    const [tag, handleTagChange] = useInput('');

    function onSubmitEventHandler(event){
        event.preventDefault()
        addContact({name, tag});
    }

    return (
        <form className='contact-input' onSubmit={onSubmitEventHandler}>
            <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />
            <input type="text" placeholder="Tag" value={tag} onChange={handleTagChange} />
            <button type="submit">Tambah</button>
        </form>
    )
}

ContactInput.propTypes = {
    addContact: PropTypes.func.isRequired,
}

export default ContactInput;