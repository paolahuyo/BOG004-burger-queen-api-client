import{ useState, useEffect, useRef } from 'react';
import { login, saveUser } from "../api/api.js";
import { useNavigate } from 'react-router-dom';
import styles from './stylesheets/Home.module.css';


function Login (){
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
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await login(values);
            const { user } = response.data;
            saveUser(response.data);
                if (user.roles.waiter) {
                    navigate('/waiter', {
                      replace: true
                    });
                  } else if (user.roles.chef) {
                    navigate('/kitchen', {
                      replace: true
                    });
                  }
                  else if (user.roles.admin) {
                    navigate('/admin', {
                      replace: true})}
        }
        catch(err) {
            if(!err?.response){
                setErrMsg("There is no response from the server")
            }else if(err.response?.status === 400){
                setErrMsg("The email or password is wrong")
            }else if(err.response?.status === 401){
                setErrMsg("Without authorization")
            }else{
                setErrMsg("Fallo al ingresar")
            }
            errRef.current.focus();
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
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    required
                    onChange={handleChange}
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
            <p ref={errRef} className= { styles.p } aria-live="assertive">{errMsg}</p>
            <button className={styles.LoginButton} type="submit">Log In</button>
        </form>
    )
}
        
export default Login;

// {
//   "email": "grace.hopper@burguers.com",
//   "password": "123456"
// }