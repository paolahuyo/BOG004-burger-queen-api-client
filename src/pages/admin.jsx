import React from 'react';
import { Link } from 'react-router-dom';
import NavBarAdmin from '../components/NavBarAdmin';
import CreateUsers from './CreateUsers';

export default function Admin() {
  return (
    <div className="container">
      {/* <NavBarAdmin /> */}
      <CreateUsers />
      <p>
        <Link to="/">login</Link>
      </p>
    </div>
  );
}