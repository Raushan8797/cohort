import React from "react";

const Home = ({users}) => {
  console.log("home rerender");
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default React.memo(Home ,(prevProps,nextProps)=>{
    return prevProps.users.name === nextProps.users.name
});
