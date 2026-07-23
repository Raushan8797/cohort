import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'

const Form = ({ setUsers, setToggle, users, updatedData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedData,
  });
  // console.log("errors", errors);

  let formSubmit = (data) => {
    console.log(data);
    if (updatedData) {
      setUsers((prev) => {
        return prev.map((val) =>{
          return val.id === updatedData.id ? {...data} : val
        })
      })
    } else {
      let arr = [...users, {...data , id: nanoid()}];
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-3 ">
      <h1 className="text-xl font-bold">Create user</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90  flex flex-col bg-black gap-3 p-4 rounded-2xl border-2 border-white"
      >
        <input
          {...register("name", { required: "Name is reqired" })}
          className="p-2 rounded outline-0 border border-white text-white"
          type="text"
          placeholder="name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", { required: "Email is reqired" })}
          className="p-2 rounded outline-0 border border-white text-white"
          type="email"
          placeholder="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("number", {
            required: "Number is reqired",
            minLength: { value: 10, message: "minimum 10 digit are required" },
            maxLength: { value: 10, message: "maximum 10 digit are required" },
          })}
          className="p-2 rounded outline-0 border border-white text-white"
          type="number"
          placeholder="number"
        />
        {errors.number && (
          <p className="text-red-500">{errors.number.message}</p>
        )}
        <input
          {...register("image", { required: "Image is reqired" })}
          className="p-2 rounded outline-0 border border-white text-white"
          type="url"
          placeholder="image"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button className="bg-blue-700 text-white p-2  rounded-2xl hover:bg-blue-300">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
