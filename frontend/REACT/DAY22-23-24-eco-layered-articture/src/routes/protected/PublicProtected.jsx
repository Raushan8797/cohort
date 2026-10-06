import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
  let { isAuthenticated, User, isLoading } = useSelector((store) => 
    store.auth
  );
  if (isLoading) return <h1>Loaidng state...</h1>
  if (User) {
    return <Navigate to={"/main"} />;
  }
  return <Outlet />;
};

export default PublicProtected;
