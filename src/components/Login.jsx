import{ useState, useEffect, useRef } from 'react';
import { login, saveUser } from "../api/api.js";
import { useNavigate } from 'react-router-dom';
import styles from './stylesheets/Home.module.css';


function Login (){
    const navigate = useNavigate();
    const errRef = useRef();
    const userRef = useRef();

    const [email] = useState('');
    const [password] = useState('');

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await login(values);
            saveUser(response.data);
            navigate("/waiter");
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
            errRef.current.focus();
        } 
    }

    const handleChange = (e) => {
        // const { target } = e;
        // const { name, value } = target;
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
                    ref={userRef}
                    id="email"
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    required
                    onChange={handleChange}
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
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <button type="submit" className={styles.LoginButton}>Log In</button>
        </form>
    )
}
        
export default Login;

// {
//   "email": "grace.hopper@systers.xyz",
//   "password": "123456"
// }