import { useState } from "react";
import Login from "./component/Login";
import Register from "./component/Register";
import Usercard from "./component/Usercard";

const App = () => {
  const [toggle, setToggle] = useState();
  const [users, setUsers] = useState([]);
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      {toggle ? (
        users.map((elem) => <Usercard user={elem} />)
      ) : (
        <Register setToggle={setToggle} setUsers={setUsers} />
      )}
    </div>
  );
};

export default App;

//<Login setUsers = {setUsers} setToggle = {setToggle} />
