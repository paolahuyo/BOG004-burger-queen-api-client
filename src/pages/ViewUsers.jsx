import React, { useEffect, useState } from 'react';
import "../components/stylesheets/Cards.css";
import { getUser } from "../api/api";
import minusIcons from '../assets/minus-sign.png';
import editIcon from '../assets/edit-icon.png';
import NavBarAdmin from '../components/NavBarAdmin';
import { deleteUsers } from '../api/api';

function ViewUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);

    const editUser = () =>{

    }

    const getUsers = () => {
        getUser()
        .then((response) =>{
        console.log(response.data);
        setUsers(response.data)
        })
        .catch(() =>{});
    }

    const deleteUser = async (id) =>{
        return await deleteUsers(id)
        .then((reponse) =>{
            getUsers();
            console.log("response", reponse)
        })
        .catch((err)=>{console.log(err)})
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

                <button className="btn btn-sm btn-primary" onClick={(id)=> editUser(id)}><img src={editIcon} alt="btn edit" style={{width:15, alignSelf:'center'}} /> Edit User</button>
                <button className="btn btn-sm btn-danger"  onClick={()=> deleteUser(user.id)}><img src={minusIcons} alt="btn plus" style={{width:15, alignSelf:'center'}} /> Delete User</button>
            </div>
            ))}
        </div>
        </>
	);
}

export default ViewUsers;