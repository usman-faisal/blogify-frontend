import React, { useEffect, useState } from "react";

import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { initializeUsers } from "../../features/usersSlice";
const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeUsers());
  }, []);

  if (!users) return null;
  return (
    <div>
      <ul>
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
