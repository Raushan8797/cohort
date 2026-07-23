import React from "react";
import { useRef, useState } from "react";

const Form = () => {
  const formRef = useRef({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef);
  };

  return (
    <div className="w-80  bg-white rounded-2xl ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  gap-4 p-6 rounded-2xl "
      >
        <input
          ref={(e) => (formRef.current.productName = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="product name"
        />
        <input
          ref={(e) => (formRef.current.Price = e)}
          className="p-2 border border-gray-400 rounded"
          type="number"
          placeholder="Price"
        />
        <span> Select Category:</span>
        <select
          className="p-2 border border-gray-400 rounded"
          ref={(e) => (formRef.current.Category = e)}
        >
          <option value="MENS">MENS</option>
          <option value="WOMEN">WOMEN</option>
          <option value="KIDS">KIDS</option>
        </select>
        <input
        ref={(e) => formRef.current.image=e}
          className="p-2 border border-gray-400 rounded "
          type="text"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded ">Create</button>
      </form>
    </div>
  );
};

export default Form;
