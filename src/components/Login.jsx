import{ useState } from 'react';
import { login, saveUser } from "../api/api.js";
import { useNavigate } from 'react-router-dom';
import styles from './stylesheets/Login.module.css';


function Login (){
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await login(values);
            saveUser(response.data);
            navigate("/waiter");
        } catch(err) {
            if(!err?.response){
                console.log("No hay respues del server")
            }else if(err.response?.status === 400){
                console.log("El usuario o contraseña son erroneos")
            }else if(err.response?.status === 401){
                console.log("Sin autorizacion")
            }else{
                console.log("Fallo al ingresar")
            }
        } 
        // navigate('/order'); 
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
        <div className={styles.Login}>
        <form className={styles.LoginForm} onSubmit={handleSubmit}>
            <h3 className={styles.LoginFormh3}>User Login</h3>
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
            <button className={styles.LoginButton} type="submit">Log In</button>
        </form>
       </div>
    )
}
        
export default Login;