import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

export const useAuth = () => {

    const { loogedUser, setLoogedUser, registeredUser ,setRegisteredUser  } = useContext(Auth);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  //loggin logic
  let loginFormSubmit = (data) => {
    let user = registeredUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("User Not Found");
      reset();
      return;
    }
    setLoogedUser(user);
    localStorage.setItem("loogedinUser", JSON.stringify(user));
    toast.success("User Looged In 😘");
    navigate("/main");

    reset();
  };

  //register logic
  let registerFormSubmit = (data) => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    alert("User registered");
    localStorage.setItem("registeredUser", JSON.stringify(arr));
    console.log(data);
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};
