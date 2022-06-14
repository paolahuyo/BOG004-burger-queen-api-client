import React, { useState } from "react";
import { createUser } from "../api/api";
import styles from "../components/stylesheets/Home.module.css";

const CreateUsers = () => {

  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState("");

  const [values, setValues] = useState({
      email: "",
      password: "",
<<<<<<< HEAD
      roles: { }
=======
      roles:{
        admin: false,
        waiter: false,
        chef: false
      }
>>>>>>> 4431672c (creando nuevos test)
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser(values);
      const { user } = response.data;
      setMessage("Usuario creado correctamente");
      console.log(user)
    } catch (error) {
      setHasError("El usuario ya está registrado");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value, 'values', values)
    const newValues = {
      ...values,
      roles: { },
    };
    newValues.roles[e.target.value]=true
    setValues(newValues);
  }

  const handleInput = (e) => {
    const newValues = {
    ...values,
    [e.target.name]: e.target.value,
    };
    setValues(newValues);
  }

  return (
    <div>
      <h3 style={{color:'white', margin:40}}>Admin Panel</h3>
      <form className={styles.LoginForm} style={{height:'auto', alignSelf:'center', marginTop: 100}} onSubmit={submitHandler}>
      <h3 className={styles.h3}>Register User</h3>
        <div>
          <label className={styles.LoginLabel} htmlFor="email">Email</label>
          <input className={styles.LoginInput}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            data-testid="email-worker"
            required
            onChange={handleInput}
          />
        </div>
        <div>
        <label className={styles.LoginLabel} htmlFor="pws">Password</label>
          <input className={styles.LoginInput}
            id="password" // input para el password
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            data-testid="password-worker"
            required
            onChange={handleInput}
          />
        </div>
        <div>
          <label className={styles.LoginLabel}>Role</label>
          <select className='form-select form-select-sm' aria-label=".form-select-sm example"
            id="roles"
            name="roles"
            placeholder="Rol"
<<<<<<< HEAD
            data-testid="roles-worker"
            value={Object.keys(values.roles)[0]}
            onChange={handleChange}>
          <option >Choose Rol</option>
          <option value='admin'>Administrator</option>
          <option value='chef'>Chef</option>
          <option value='waiter'>Waiter</option>
=======
            className="roles-worker"
            data-testid="roles-worker"
            onChange={handleChange}
          >
          <option value="0">Rol</option>
          <option value={{roles:{admin:true}}}>Administrator</option>
          <option value={{roles:{chef:true}}}>Chef</option>
          <option value={{roles:{waiter:true}}}>Waiter</option>
>>>>>>> 4431672c (creando nuevos test)
        </select>
        </div>
          <button type="submit" className={styles.LoginButton}  name="submitRegister">Register</button>
      </form>
      <p className={styles.LoginFormEr} data-testid="login-error-message">{hasError}</p>
      {/* {hasError} */}
      <p className={styles.LoginFormEr} data-testid="login-error-message">{message}</p>
      {/* {message} */}
    </div>
  );
};

export default CreateUsers;