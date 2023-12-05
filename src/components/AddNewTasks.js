import React, { useState } from 'react'
import Modal from './Modal';

function AddNewTasks () {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='AddNewTodo'>
      <div className='btn'>
        <button onClick={() => setShowModal(true)}>
          + New Task
        </button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>
          Hello world!
        </div>

        <button onClick={() => setShowModal(false)}>Hide</button>
      </Modal>
    </div>
  )
}

export default AddNewTasks