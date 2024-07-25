import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Navbar'>
      <div><Link className='i'to='/'>Counter</Link></div>
      <div><Link className='i' to='/Meet'>Meet</Link></div>
      <div><Link className='i' to='/Form'>Form</Link></div>     
    </div>
  );
}

export default Nav;
