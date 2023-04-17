
import React,{ useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUserList((prev) =>{
      return [
        ...prev,
        {name:uName,age:uAge,id:Math.random().toString()},
      ]
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );

}

export default App;
