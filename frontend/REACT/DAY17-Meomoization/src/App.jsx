import React, { useCallback, useMemo, useState } from "react";
import Home from "./component/Home";
import About from "./component/About";

const App = () => {
  const [count, setCount] = useState(0);
  const [users, setusers] = useState({ name: "raghav", id: 163 });
  console.log("app rerender");

  let greet = useCallback(() => {
    console.log("sssssssssssssssssssssssssss");
  }, []);


  let calculation = useMemo(( ) => {
    console.log('calculation rerendring');
    
    
    let sum = 0;

    for (let i = 0; i < 1000000000; i++) {
      sum +=  i
   
  }
   return sum;
  },[])

console.log(calculation);

  return (
    <div>
      <h1>memoization</h1>
      <h1>count is {count}</h1>
      <h2>name is {users.name}</h2>
      <h2> my calculation is {calculation} </h2>
      <button onClick={() => setusers({ ...users, name: "ranjeet" })}>
        change name
      </button>
       <button onClick={() => setCount(count + 1)}>increment</button>
      <h2>id is {users.id}</h2>

      <Home users={users} greet={greet} />
      <About users={users} greet={greet} />
    </div>
  );
};

export default App;
