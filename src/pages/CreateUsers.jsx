import { useState, useEffect } from "react";
import { createUser } from "../api/api";

const CreateUsers = () => {

  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState("");

  const [values, setValues] = useState({
      email: "",
      password: "",
      roles: ""
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
    const newValues = {
    ...values,
    [e.target.name]: e.target.value,
    };
    setValues(newValues);
  }

  return (
    <div>
      <form className="form-workers" onSubmit={submitHandler}>
        <div>
            <p>Email</p>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            className="email-worker"
            value={values.email}
            data-testid="email-worker"
            onChange={handleChange}
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
            data-testid="password-worker"
            onChange={handleChange}
          />
        </div>

        <div>
            roles
          <select
            id="roles"
            name="roles"
            placeholder="Rol"
            className="roles-worker"
            value={values.roles}
            data-testid="roles-worker"
            onChange={handleChange}
          >
          <option value="0">Rol</option>
          <option value="admin">Administrator</option>
          <option value="chef">Chef</option>
          <option value="waiter">Waiter</option>
        </select>
        </div>
          <button type="submit" className="btn-register">REGISTRAR</button>
      </form>
      {hasError}
      {message}
    </div>
  );
};

export default CreateUsers;