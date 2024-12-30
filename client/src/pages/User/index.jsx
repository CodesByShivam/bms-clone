import React from "react";
import Bookings from "./Bookings";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.users);
  return (
    <div className="main-content">
      <h1>Hi {user.name}</h1>
      <Bookings />
    </div>
  );
}

export default Profile;
