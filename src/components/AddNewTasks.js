import React, { useState } from 'react'
import Modal from './Modal';
import { Bell } from 'react-bootstrap-icons';

function AddNewTasks () {

  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  return (
    <div className='AddNewTodo'>
      <div className='btn'>
        <button onClick={() => setShowModal(true)}>
          + New Task
        </button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form>
          <div className='text'>
            <h3>Add New Task!</h3>
            <input 
              type='text'
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder='To do ...'
              autoFocus
            />
          </div>
          <div className='remind'>
            <Bell />
            <p>Remind Me!</p>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddNewTasks