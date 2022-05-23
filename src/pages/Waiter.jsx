import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/stylesheets/Waiter.module.css';
import logo from '../assets/logo-burger-queen.png';

import Card from '../components/Card';

export default function Waiter() {

  const clientRef = useRef();
  const [values, setValues] = useState({
      clientName: ""
  });

  const handleClient = (e) => {
    e.preventDefault();
    const newValues = {
      ...values,
      [e.target.name]: e.target.value,
      };
      setValues(newValues);
  }

    return (
      <div className={styles.Waiter}>
        <img src={logo} className={styles.Logo} alt="logo" />
        <div>
          <form>
            <label className={styles.p} htmlFor="client">Client Name: </label>
            <input className={styles.Input} type="text"
              ref={clientRef}
              id="clientName"
              name='clientName'
              placeholder='The Client Name'
              value={values.clientName}
              required
              onChange={handleClient}
              data-testid="test-client-name"
            />
            <button type="submit" className={styles.Button}>Send</button>
          </form>
        </div>
        {values.clientName && <p className={styles.p} ref={clientRef} aria-live="assertive" data-testid="client-name-message">{values.clientName}</p>}
        <h1 className={styles.h1}>Menu & Orders</h1>
        <Card/>
        <p>
          <Link className={styles.Link} to="/">Home</Link>
        </p>
      </div>
    );
}

