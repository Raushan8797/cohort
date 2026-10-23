import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = () => {
  const {register, handleSubmit} = useForm()
  const submitHandeler = async (data) =>{
    const formData = new FormData()
    formData.append("name",data.name)
    formData.append("email",data.email)
      for (let i = 0; i < data.photo.length; i++) {
    formData.append("photo", data.photo[i]);
  }
    

  await axios.post('http://localhost:3000/user/create', formData)

  }
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

<form onSubmit={handleSubmit(submitHandeler)} className="flex flex-col  gap-5 max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
  
  <h2 className="text-2xl font-bold text-gray-800 text-center">
    Create Profile
  </h2>

  
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-gray-700">
      Full Name
    </label>
    <input
    {...register('name')}
      type="text"
      placeholder="Enter your name"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-gray-700">
      Email Address
    </label>
    <input
    {...register('email')}
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>


  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-gray-700">
      Upload Photo
    </label>
    <input
    {...register('photo')} multiple
      type="file"
      accept="image/*"
      className="w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer file:mr-4 file:py-3 file:px-4 file:border-0 file:bg-blue-50 file:text-blue-700 file:font-semibold hover:file:bg-blue-100"
    />
  </div>

  
  <button
    type="submit"
    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition duration-200"
  >
    Submit
  </button>

</form>

    </div>
  );
};

export default App;
