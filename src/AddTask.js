import {useState} from 'react';
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

export default function AddTask({onClose, open}){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);

    const handleSubmit = async (e) => {
        // debugger;
        e.preventDefault()
        try {
          await addDoc(collection(db, 'tasks'), {
            title: title,
            description: description,
            completed: false,
            created: Timestamp.now()
          })
          onClose()
        } catch (err) {
          alert(err)
        }
      }

    return (
        <form onSubmit={handleSubmit} className='addTask' name='addTask'>

            <label forName="title">Title:</label><br/>
            <input type="text" id="title" name="title" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                /><br/>
            <label for="description">description:</label><br/>
            <textarea id="description" name="description" value={description}
                onChange={e => setDescription(e.target.value)}
                /><br/>
            <input type="checkbox" id="completed" name="completed" checked={completed}
                onChange={e=>setCompleted(e.target.value)}
                />
            <label for="completed">Completed</label><br/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    );
}