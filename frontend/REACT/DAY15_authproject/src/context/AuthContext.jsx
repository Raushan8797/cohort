import { createContext, useState } from "react";

export const Auth = createContext();
("");
export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );
  const [loogedUser, setLoogedUser] = useState(
    JSON.parse(localStorage.getItem("loogedinUser")),
  );
  console.log(registeredUser);
  console.log(loogedUser);

  return (
    <Auth.Provider
      value={{ loogedUser, setLoogedUser, registeredUser, setRegisteredUser }}
    >
      {children}
    </Auth.Provider>
  );
};
