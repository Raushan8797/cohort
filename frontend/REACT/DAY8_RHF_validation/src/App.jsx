import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  console.log(users);
  const [updatedData, setUpdatedData] = useState(null);
  console.log(updatedData);

  const deleteUser = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id;
    });
    console.log(filterUser);
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };
  return (
    <div className="p-3 h-screen flex flex-col gap-4 bg-gray-400">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((elem, index) => {
            return (
              <Usercard
                deleteUser={deleteUser}
                key={elem.id}
                ind={index}
                user={elem}
                setToggle={setToggle}
                setUpdatedData={setUpdatedData}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <Form
            users={users}
            setUsers={setUsers}
            updatedData={updatedData}
            setToggle={setToggle}
          />
        </div>
      )}
    </div>
  );
};

export default App;
