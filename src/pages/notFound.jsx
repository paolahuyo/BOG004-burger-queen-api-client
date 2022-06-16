import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container">
      <h1>Página de menu</h1>
      <p>
        <Link to="/">Login</Link>
      </p>
    </div>
  );
}