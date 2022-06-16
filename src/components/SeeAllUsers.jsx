import React, {useState, useEffect} from 'react';
import {getUser} from "../api/api"

const SeeAllUsers= () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      getUser()
      .then((response) =>{
      console.log(response.data);
      setUsers(response.data)
      })
      .catch(() =>{});
    }, []);
    
    return (
      <div>   
     </div>
    );
}

export default SeeAllUsers;
