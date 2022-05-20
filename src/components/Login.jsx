import React, { useState, useEffect, useRef } from 'react';
import { login, saveUser } from "../api/api.js";
import { useNavigate } from 'react-router-dom';
import styles from './stylesheets/Home.module.css';

function Login () {
    const navigate = useNavigate();
    const errRef = useRef();
    const userRef = useRef();
    const [email] = useState('');
    const [password] = useState('');
    // const [user, setUser] = useState(null);
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleLogin = async (e) =>{
        e.preventDefault();
        try{
            const response = await login(values);
            const {user} = response.data;
            saveUser(response.data);
            console.log(user);
            if (user.roles.waiter) {
                navigate('/waiter');
            } else if (user.roles.chef) {
                navigate('/kitchen');
            } else if (user.roles.admin) {
                console.log("hola entra")
                navigate('/admin')
            }
        } catch(err) {
            if(!err?.response){
                setErrMsg("No hay respuesta del server")
            }else if(err.response?.status === 400){
                setErrMsg("El usuario o contraseña son erroneos")
            }else if(err.response?.status === 401){
                setErrMsg("Sin autorizacion")
            }else{
                setErrMsg("Fallo al ingresar")
            }
            //// errRef.current.focus();
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
        <form className={styles.LoginForm} onSubmit={handleLogin}>
            <h3 className={styles.h3}>User Login</h3>
            <label className={styles.LoginLabel} htmlFor="email">Email:</label>
            <input className={styles.LoginInput} type="email"
                    ref={userRef}
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
                    id="password"
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

// {
//   "email": "grace.hopper@systers.xyz",
//   "password": "123456"
// }

//Tutorial de login




    // const handleLogout = () => setUser(null);