import React from 'react';
import { Link } from 'react-router-dom';

export default function Orders() {
  return (
    <div className="container">
      <h1>Página de menu</h1>
      <p>
        <Link to="/">login</Link>
      </p>
    </div>
  );
}