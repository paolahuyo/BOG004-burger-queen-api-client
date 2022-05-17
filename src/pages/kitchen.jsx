import React from 'react';
import { Link } from 'react-router-dom';

export default function Kitchen() {
  return (
    <div className="container">
      <h1>Página de cocina</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}