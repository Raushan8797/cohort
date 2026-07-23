import React, { useEffect, useState } from "react";
import UserCard from "../component/UserCard";
import { axiosInstance } from "../config/axiosinstance";

const UserPage = () => {
  const [userData, setUserData] = useState([]);
  const [isloading, setIsloading] = useState(true);

  let getUserData = async () => {
    try {
      let res = await axiosInstance.get("/users");

      setUserData(res.data);
      setIsloading(false);
      console.log(userData);
    } catch (error) {
      console.log("error in catch", error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  if (isloading) return <h1 className="text-6xl">Loading users....</h1>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {userData.map((val) => (
        <UserCard key={val.id} user={val} />
      ))}
    </div>
  );
};

export default UserPage;
