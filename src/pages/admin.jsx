import React from 'react';
import { Link } from 'react-router-dom';
import NavBarAdmin from '../components/NavBarAdmin';
import CreateUsers from './CreateUsers';

export default function Admin() {
  return (
    <>
    <NavBarAdmin></NavBarAdmin>
    <div className='container d-flex flex-column justify-content-center align-items-center h-100'>
      <CreateUsers/>
      <p>
      <button className='btn btn-info btn-lg' style={{marginTop: 40, width:300, alignSelf:'center'}}><Link to="/">Login</Link></button>
      </p>
    </div>

    </>
  );
}