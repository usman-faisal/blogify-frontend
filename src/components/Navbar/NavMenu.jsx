import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../features/userSlice";
import { Avatar, Badge, Button, createStyles, Flex, Menu } from "@mantine/core";
import { Link } from "react-router-dom";

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
            <Link to="/">Your Blogs</Link>
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
