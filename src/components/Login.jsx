import{ useState, useEffect, useRef } from 'react';
import { login, saveUser } from "../api/api.js";
import { useNavigate } from 'react-router-dom';

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
        const newValues = {
          ...values,
          [e.target.name]: e.target.value,
        };
        setValues(newValues);
      }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email"
                    ref={userRef}
                    name='email'
                    id="email"
                    placeholder='User'
                    className='email'
                    value={values.email}
                    required
                    onChange={handleChange}
                />
                <label htmlFor="pws">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    className="password"
                    value={values.password}
                    required
                    onChange={handleChange}
                />
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <button type="submit" className="btn-login">Iniciar Sesion</button>
        </form>
       </div>
    )
}
        
export default Login;