import React, { useEffect, useState } from 'react';
import "../components/stylesheets/Cards.css";
import { getUser } from "../api/api";
import minusIcons from '../assets/minus-sign.png';
import editIcon from '../assets/edit-icon.png';
import NavBarAdmin from '../components/NavBarAdmin';
import Modal from '../components/Modal';
import { deleteUsers, updateUser } from '../api/api';

function ViewUsers() {

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [hasError, setHasError] = useState("");
    const [modalState1, changeStatusModal1] = useState(false);
    const [messageModal, setMessageModal] = useState("");
    const [hasErrorModal, setHasErrorModal] = useState("");

    const [values, setValues] = useState({
        email: "",
        password: "",
        roles: { }
    });

    const getUsers = () => {
        getUser()
        .then((response) =>{
        console.log(response.data);
        setUsers(response.data)
        })
        .catch(() =>{});
    }

    useEffect(() => {
      getUsers();
    }, []);


    const editUser = async (e) => {
        e.preventDefault();
        try {
          const response = await updateUser(values);
          const { user } = response.data;
          getUsers();
          setMessageModal("Datos actualizados correctamente");
          console.log(user)
        } catch (error) {
          setHasErrorModal("No se ha podido actualizar el usuario");
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

    const deleteUser = async (id) =>{
        return await deleteUsers(id)
        .then((response) =>{
            getUsers();
            setMessage("El usuario fue eliminado correctamente");
            console.log("response", response)
        })
        .catch(()=>{
            setHasError("No se ha podido borrar el usuario");
        })
    }

	return (
        <>
        <NavBarAdmin></NavBarAdmin>
        <div className='container d-flex flex-column justify-content-center align-items-center h-100' style={{marginTop:40}}>
            {users.map((user)=>(
            <div className='' key={user.id}>
                <ul className=''>
                    <li className='users-li'> Email: {user.email}</li>
                    <li className='users-li'> Password: {user.password}</li>
                    <li className='users-li'> Roles: {Object.keys(user.roles)}</li>
                </ul>

                <button className="btn btn-sm btn-primary" onClick={()=> {changeStatusModal1(!modalState1)}}><img src={editIcon} alt="btn edit" style={{width:15, alignSelf:'center'}} /> Edit User</button>
                <button className="btn btn-sm btn-danger"  onClick={()=> deleteUser(user.id)}><img src={minusIcons} alt="btn plus" style={{width:15, alignSelf:'center'}} /> Delete User</button>
                <Modal condition={modalState1} changeStatus={changeStatusModal1}>
                  <div>
                    <form onSubmit={editUser}>
                        <h3>Edit user</h3>
                        <div>
                          <label htmlFor="email">Email</label>
                          <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            required
                            onChange={handleInput}
                          />
                        </div>
                        <div>
                          <label htmlFor="pws">Password</label>
                          <input 
                            type="password"
                            id='password'
                            name='password'
                            placeholder='Password'
                            value={values.password}
                            required
                            onChange={handleInput}
                          />
                        </div>
                        <div>
                          <label>Rol</label>
                          <select 
                            name="roles" 
                            id="roles"
                            placeholder='Rol'
                            value={Object.keys(values.roles)[0]}
                            onChange={handleChange}
                          >
                            <option >Choose Rol</option>
                            <option value='admin'>Administrator</option>
                            <option value='chef'>Chef</option>
                            <option value='waiter'>Waiter</option>
                          </select>
                        </div>
                        <button type='submit'>Guardar</button>
                    </form>
                    <p> {messageModal} </p>
                    <p> {hasErrorModal} </p>
                  </div>
                </Modal>
            </div>
            ))}
        <p> {message} </p>
        <p> {hasError} </p>
        </div>
        </>
	);
}

export default ViewUsers;