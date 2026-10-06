import { useForm } from "react-hook-form";
import { useNavigate } from "react-router"

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../state/AuthSlice";
import { loginUserAction } from "../state/AuthAction";

export const useAuth = () =>{
    let navigate = useNavigate();
    let dispatch = useDispatch()

    
      let {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
     const registerForm = (data) => {
        console.log("register", data);
        
      
     };
    
      const loginForm = async (data) => {
          
            try {
                dispatch(loginUserAction(data))
               
                navigate("/main")
            } catch (error) {
                console.log("form api errer" , error);
                
            }
          
      };
    return{
        navigate,
         register,
        handleSubmit,
        reset,
        errors ,
        registerForm,
        loginForm,
    }
}