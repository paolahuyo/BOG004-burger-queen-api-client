import React from 'react';
import { Link } from 'react-router-dom';
import NavBarAdmin from '../components/NavBarAdmin';
import CreateUsers from './CreateUsers';
import SeeAllUsers from '../components/SeeAllUsers';

export default function Admin() {
  return (
<<<<<<< HEAD
    <>
    <NavBarAdmin></NavBarAdmin>
    <div className='container d-flex flex-column justify-content-center align-items-center h-100'>
      <CreateUsers/>
=======
    <div className="container">
      {/* <NavBarAdmin /> */}
      <CreateUsers />
      <SeeAllUsers />
>>>>>>> 4431672c (creando nuevos test)
      <p>
      <button className='btn btn-info btn-lg' style={{marginTop: 40, width:300, alignSelf:'center'}}><Link to="/">login</Link></button>
      </p>
    </div>

    </>
  );
}