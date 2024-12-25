import Axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

function UserList() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    Axios({
      url: "https://jsonplaceholder.typicode.com/users",
    })
      .then((response) => {
        setUsersList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1> User List</h1>
      {usersList.map((user) => (
        <div key={user.id} style={styles.card}>
          <h3 style={styles.name}>{user.name}</h3>
          <p style={styles.email}>{user.email}</p>
          <p style={styles.address}>
            {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f4f4f9",
  },
  card: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    padding: "15px",
    width: "250px",
    textAlign: "center",
  },
  name: {
    margin: "0",
    fontSize: "1.2em",
    color: "#333",
  },
  email: {
    margin: "8px 0",
    color: "#666",
    fontSize: "0.9em",
  },
  address: {
    margin: "8px 0 0",
    color: "#555",
    fontSize: "0.85em",
  },
};

export default UserList;

 
