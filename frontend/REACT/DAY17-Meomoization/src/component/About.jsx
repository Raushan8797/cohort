import React from "react";

const About = ({users}) => {
  console.log("react rerender");

  return (
    <div>
      <h1>ABOUT</h1>
    </div>
  );
};

export default React.memo(About , (prevProps,nextProps)=>{
    return prevProps.users.id === nextProps.users.id
});
