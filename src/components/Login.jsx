import React, { useState, useEffect, useRef } from 'react';
import { login, saveUser } from "../api/api.js";
import { useNavigate } from 'react-router-dom';
import styles from './stylesheets/Home.module.css';

function Login () {
    const navigate = useNavigate();
    const errRef = useRef();

    const [email] = useState('');
    const [password] = useState('');

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        sessionStorage.clear();
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await login(values);
            const { user } = response.data;
            saveUser(response.data);
                if (user.roles.waiter) {
                    navigate('/waiter');
                } else if (user.roles.chef) {
                    navigate('/kitchen');
                } else if (user.roles.admin) {
                    navigate('/admin')
                }
        } catch(err) {
            // if(!err?.response){
            //     setErrMsg("There is no response from the server")
            // }else if(err.response?.status === 400){
            //     setErrMsg("The email or password is wrong")
            // }else if(err.response?.status === 401){
            //     setErrMsg("Without authorization")
            // }else{
            //     setErrMsg("Fallo al ingresar")
            // }
        }
    }

    const handleChange = (e) => {
        const newValues = {
        ...values,
        [e.target.name]: e.target.value,
        };
        setValues(newValues);
      }
    return (
        <form className={styles.LoginForm} onSubmit={handleSubmit}>
            <h3 className={styles.h3}>User Login</h3>
            <label className={styles.LoginLabel} htmlFor="email">Email:</label>
            <input className={styles.LoginInput} type="email"
                    id="email"
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    required
                    onChange={handleChange}
                    data-testid="login-email-input"
                />
            <label className={styles.LoginLabel} htmlFor="pws">Password:</label>
            <input className={styles.LoginInput}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    required
                    onChange={handleChange}
                />
            {errMsg && <p ref={errRef} className={styles.LoginFormEr} aria-live="assertive" data-testid="login-error-message">{errMsg}</p>}
            <button type="submit" className={styles.LoginButton}>Log In</button>
        </form>
    )
}

export default Login;
