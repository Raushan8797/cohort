import React from "react";

const Usercard = ({ user, deleteUser, ind, setToggle, setUpdatedData }) => {
  return (
    <div className=" p-4 border border-white bg-black rounded  flex flex-col gap-2 rounded-2xl">
      <div className="h-40 w-40">
        <img
          className="object-cover  h-full w-full rounded"
          src={user.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 text-white ">
        <h1>{user.name}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.number}</p>
      </div>
      <div className="flex justify-between w-full gap-4">
        <button
          onClick={() => deleteUser(ind)}
          className="bg-yellow-600 text-white py-2 px-3 rounded-xl"
        >
          Delete
        </button>
        <button
          onClick={() => {
            setUpdatedData(user);
            setToggle((prev) => !prev);
          }}
          className="bg-red-600 text-white py-2 px-3 rounded-xl "
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Usercard;
