import { useNavigate } from "react-router";
import { FormState, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { addUser } from "../feature/AuthSlice";
import{useDispatch} from "react-redux"

export const useAuth = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate();
  const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem("registeredUser")) ||[])

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 const registerForm = (data) => {
  let arr = [...registeredUser,data]
  
  setRegisteredUser (arr)
  localStorage.setItem("registeredUser", JSON.stringify(arr))
  toast.success("usser registered")
  
 };

  const loginForm = (data) => {
      let user = registeredUser.find((val) =>{
        return val.email === data.email && val.password == data.password
      })
      if (!user){
        toast.error("invalid something.....")
        return;
      }
      dispatch(addUser(user))
      localStorage.setItem("loggedinUser", JSON.stringify(user))
      toast.success("usser loggedin....")
        reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerForm,
    loginForm,
  };
};