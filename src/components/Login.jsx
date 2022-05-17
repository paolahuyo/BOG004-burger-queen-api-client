import{ useState } from 'react';
import { login, saveUser } from "../api/api.js";
import { useNavigate } from 'react-router-dom';

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
       <form onSubmit={handleSubmit}>
           <label htmlFor="email">Email:</label>
           <input type="email"
                name='email'
                placeholder='User'
                className='email'
                value={values.email}
                required
                onChange={handleChange}
            />
            <label htmlFor="pws">Contraseña:</label>
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="password"
                value={values.password}
                required
                onChange={handleChange}
            />
        <button type="submit" className="btn-login">Iniciar Sesion</button>
       </form>
    )
}
        
export default Login;