import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  console.log("rendring");
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const formSbmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <div className="w-80  bg-white rounded-2xl ">
      <form
        className="flex flex-col  gap-4 p-6 rounded-2xl "
        onSubmit={handleSubmit((formSbmit) => {})}
      >
        <input
          {...register("productName")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="product name"
        />
        <input
          {...register("price")}
          className="p-2 border border-gray-400 rounded"
          type="number"
          placeholder="Price"
        />
        <span> Select Category:</span>
        <select className="p-2 border border-gray-400 rounded">
          <option value="MENS">MENS</option>
          <option value="WOMEN">WOMEN</option>
          <option value="KIDS">KIDS</option>
        </select>
        <input
          {...register("image")}
          className="p-2 border border-gray-400 rounded "
          type="text"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded ">Create</button>
      </form>
    </div>
  );
};

export default RHF;
