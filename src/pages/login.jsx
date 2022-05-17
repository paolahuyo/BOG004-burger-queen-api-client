import React from 'react';
import { Link } from 'react-router-dom';
import "./stylesheets/login.css";

export default function Login() {

  return (
    <div className="container">
      <h1>Página de inicio</h1>
      <ol>
        <li><Link to="/menu">menu</Link></li>
        <li><Link to="/admin">admin</Link></li>
        <li><Link to="/kitchen">cocina</Link></li>
        <li><Link to="/orders">ordenes</Link></li>
      </ol>
    </div>
  );
}