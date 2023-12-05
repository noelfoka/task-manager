import React, { useState } from 'react'
import Modal from './Modal';
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons';

function AddNewTasks () {

  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

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
          <div className='pick-day'>
            <div className='title'>
              <CalendarDay />
              <p>Choose a day</p>
            </div>
            date picker
          </div>
          <div className='pick-time'>
            <div className='title'>
              <Clock />
              <p>Choose a time</p>
            </div>
            time picker
          </div>
          <div className='pick-project'>
            <div className='title'>
              <Palette />
              <p>Choose a project</p>
            </div>
            <div className='projects'>
              <div className='project' active>
                personal
              </div>
              <div className='project'>
                work
              </div>
            </div>
          </div>
          <div className='cancel' onChange={() => setShowModal(false)}>
            <X size='40' />
          </div>
          <div className='confirm'>
            <button>+ Add New Task</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddNewTasks