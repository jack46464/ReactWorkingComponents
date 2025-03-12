import React, { useState, useEffect } from 'react';

const AsyncPromise = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')

    .then((response) => {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            resolve(response.json());
        } else {
            reject("Error fetching user data.");
        }
    })
   })
    
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  
  useEffect(() => {
  fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncPromise;