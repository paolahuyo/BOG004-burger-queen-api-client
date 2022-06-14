import React from 'react';
import { Link } from 'react-router-dom';
import NavBarAdmin from '../components/NavBarAdmin';
import CreateUsers from './CreateUsers';
import SeeAllUsers from '../components/SeeAllUsers';

export default function Admin() {
  return (
    <div className="container">
      {/* <NavBarAdmin /> */}
      <CreateUsers />
      <SeeAllUsers />
      <p>
        <Link to="/">login</Link>
      </p>
    </div>
  );
}