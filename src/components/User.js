import React from 'react';
import logos from '../images/logos.png';

const User = () => {
  return (
    <div className='User'>
        <div className='logo'>
            <img src={logos} alt='logo' />
        </div>

        <div className='info'>
            <p>Tasks Manager</p>
            <a href="#">Logout !</a>
        </div>
    </div>
  )
}

export default User