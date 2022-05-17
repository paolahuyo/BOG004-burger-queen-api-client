import React from 'react';
import { Link } from 'react-router-dom';

export default function Waiter() {
  return (
    <div className="container">
      <h1>Página de mesero</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}