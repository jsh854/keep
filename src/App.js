import { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button} from 'react-bootstrap';
import TodoSaveModal from './ui/molecules/TodoSaveModal';

import NotesScreen from './ui/organisms/NotesScreen';
import { useSelector } from 'react-redux';
import {Plus} from 'react-bootstrap-icons'


const App=() =>{
  const notes = useSelector((state) => state.notes.value)
  const [showModal, setShowModal] = useState(false);
  const closeModal = ()=>setShowModal(!showModal);
  const saveNote = ()=>setShowModal(true);
  return (
    <div className="App">
      {notes.length<1?
      <>
      <header className="App-header">
          <h1 color='white'>Start your note taking journey with us</h1>
          <Button variant="primary" large onClick={()=>setShowModal(true)} ><Plus/> create a note</Button>   
      </header>
     </>
     :<NotesScreen saveNote={saveNote}/>
        }
      <TodoSaveModal show={showModal} close={closeModal}/>
    </div>
  );
}

export default App;
