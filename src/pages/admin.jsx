import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div className="container">
      <h1>Página de admin</h1>
      <p>
        <Link to="/">login</Link>
      </p>
    </div>
  );
}