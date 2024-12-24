import  Axios  from "axios";
import { useState, useEffect } from "react";
import React from 'react'

function UserList() {
    const [usersList, setUsersList]= useState([])
    useEffect(()=>{
        Axios({
            url:"https://jsonplaceholder.typicode.com/users"
        })
        .then(response=>{
          setUsersList(response.data);
        })
        .catch(error=>{
          console.log(error);
        });
    },[setUsersList]);
  return (
    <div className="UserList">
           {usersList.map(user => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}

    </div>
  )
}

export default UserList
