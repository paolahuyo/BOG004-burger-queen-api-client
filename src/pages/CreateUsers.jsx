import { useState, useEffect, useMemo } from "react";
import { createUser } from "../api/api";

const CreateUsers = ({edit, success,  userData}) => {
  const channel = useMemo(() => new BroadcastChannel("user"), []);

  const [hasError, setHasError] = useState("");
  const [message, setMessage] = useState("");

  const [values, setValues] = useState(userData || {
    // estado para guardar los datos del form
    name: "",
    email: "",
    password: "",
    roles: "",
  });

  const user = {
    name: values.name,
    email: values.email,
    password: values.password,
    roles: values.roles,
  };

  
  const startRegister = async (e) => {
    e.preventDefault();
    // funcion para iniciar sesion, (se llama con el handleSumbmit)
    try {
      await createUser(user).then((response) => {
        channel.postMessage("registerUser");
        setMessage("Usuario creado correctamente");
      }); // llamada a la funcion login de la api
    } catch {
      setHasError("El usuario ya está registrado");
    }
    setTimeout(() => {
      setMessage(null);
    }, 1500);
    setValues({
      name: "",
      email: "",
      password: "",
      roles: "",
    });
  };

  useEffect(() => {
    return () => channel.close();
  }, [channel]);

  const handleChange = (e) => {
    // funcion para guardar los datos del formulario
    const { target } = e;
    const { name, value } = target;

    const newValues = {
      // nuevo estado con los datos del formulario
      ...values, // estado anterior
      [name]: value, // nuevo valor
    };
    setValues(newValues); // actualizar el estado
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="form-workers" onSubmit={handleSubmit}>
        <div>
        <p>name</p>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Nombre"
            className="name-worker"
            value={values.name}
            onChange={handleChange} // cuando se cambia el valor del input
            data-testid="name-worker"
          />
        </div>
        <div>
            <p>Email</p>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            className="email-worker"
            value={values.email}
            onChange={handleChange} // cuando se cambia el valor del input
            data-testid="email-worker"
          />
        </div>
        <div>
        <p>password</p>
          <input
            id="password" // input para el password
            type="password"
            name="password"
            placeholder="Contraseña"
            className="password-worker"
            value={values.password}
            onChange={handleChange} // cuando se cambia el valor del input
            data-testid="password-worker"
          />
            {/* <span>{errors.password.message}</span> */}
        </div>

        <div>
            roles
          <input
            id="roles" // input para el password
            type="name"
            name="roles"
            placeholder="Rol"
            className="roles-worker"
            value={values.roles}
            onChange={handleChange} // cuando se cambia el valor del input
            data-testid="roles-worker"
          />
        </div>
          <button type="submit" className="btn-register" onClick={startRegister}>REGISTRAR</button>
        {hasError && (
            <p>{hasError}</p>
        )}
      </form>
      {message && (
        <p>{message}</p>
      )}
    </div>
  );
};

export default CreateUsers;