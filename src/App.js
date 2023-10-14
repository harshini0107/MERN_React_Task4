import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users)); 
  }, []);

  return (
    <div className="container mt-5"><center>
      <h2 className="text-black">Dummy Data</h2></center>
      <table className="table table-bordered table-dark mt-3">
        <thead>
          <tr>
            <th className="text-white">S.no</th>
            <th className="text-white">Profile Pic</th>
            <th className="text-white">First Name</th>
            <th className="text-white">Last Name</th>
            <th className="text-white">Gender</th>
            <th className="text-white">Email</th>
            <th className="text-white">Username</th>
            <th className="text-white">Domain</th>
            <th className="text-white">IP</th>
            <th className="text-white">University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="text-white">{index + 1}</td>
              <td>
                <img
                  src={user.profile_picture}
                  alt="Profile Pic"
                  className="profile-pic"
                />
              </td>
              <td className="text-white">{user.firstName}</td>
              <td className="text-white">{user.lastName}</td>
              <td className="text-white">{user.gender}</td>
              <td className="text-white">{user.email}</td>
              <td className="text-white">{user.username}</td>
              <td className="text-white">{user.domain}</td>
              <td className="text-white">{user.ip}</td>
              <td className="text-white">{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
