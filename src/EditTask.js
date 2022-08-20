

import {useState} from 'react';
import {db} from './firebase';
import {doc, updateDoc} from 'firebase/firestore'

export default function EditTask({id, onClose}){
    

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
   
    const handleUpdate = async (e) => {
        debugger;
        e.preventDefault()
        const taskDocRef = doc(db, 'tasks', id)
        try{
        await updateDoc(taskDocRef, {
            title: title,
            description: description
        })
        onClose()
        } catch (err) {
        alert(err)
        }    
    }

    return (
        <form onSubmit={handleUpdate} className='editTask' name='updateTask'>

            <label forName="title">Title:</label><br/>
            <input type="text" id="title" name="title" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                /><br/>
            <label for="description">description:</label><br/>
            <textarea id="description" name="description" value={description}
                onChange={e => setDescription(e.target.value)}
                /><br/>

            <input type="submit" value="Submit"/>
        </form>
    );
}