
 import { doc, updateDoc, deleteDoc} from "firebase/firestore";
 import {db} from "./firebase";
 import {useState} from 'react';
 import EditTask from './EditTask'

export default function Task({id, title, description, completed}){

   const [checked] = useState(completed);

    const handleDelete = async () => {
        const taskDocRef = doc(db, 'tasks', id)
        try{
          await deleteDoc(taskDocRef)
        } catch (err) {
          alert(err)
        }
      }

    const handleCheckedChange = async () => {
        const taskDocRef = doc(db, 'tasks', id)
        try{
          await updateDoc(taskDocRef, {
            completed: checked
          })
        } catch (err) {
          alert(err)
        }
      }

    return (
    <div>
        <input 
        id={`checkbox-${id}`} 
        className='checkbox-custom'
        name="checkbox" 
        checked={checked}
        onChange={handleCheckedChange}
        type="checkbox" />

        <span className="title">{title}</span>
        {/* <span className="description">Description: {description}</span> */}
        <button className='task__deleteButton' onClick={handleDelete}>Delete</button>
    </div>
    );

}