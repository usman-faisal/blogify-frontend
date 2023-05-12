import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../features/userSlice";
import { Avatar, Badge, Button, createStyles, Flex, Menu } from "@mantine/core";
import { Link } from "react-router-dom";
import { searchByUsername } from "../../features/usersSlice";

const useStyles = createStyles((theme) => ({
  menu: {
    textAlign: "center",
  },
}));

const NavMenu = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const logout = () => {
    dispatch(removeUser());
  };
  const userId = dispatch(searchByUsername(user.username));
  return (
    <Flex ml="auto" align="center">
      <Menu shadow="md" width="auto">
        <Menu.Target>
          <Avatar color="cyan" radius="xl" />
        </Menu.Target>
        <Menu.Dropdown className={classes.menu}>
          <Menu.Label onClick={logout}>
            <Badge>{user.username} logged in</Badge>
          </Menu.Label>
          <Menu.Label>
            <Link to={`/users/${userId?.id}/likedBlogs`}>Liked Blogs</Link>
          </Menu.Label>
          <Menu.Label style={{ cursor: "pointer" }} onClick={logout}>
            Logout
          </Menu.Label>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  );
};

export default NavMenu;
