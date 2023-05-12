import {
  createStyles,
  Header,
  Container,
  Group,
  Chip,
  Button,
  ColorSchemeProvider,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavMenu from "./NavMenu";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    maxWidth: "100rem",
  },
  logo: {
    fontSize: "1.4rem",
  },
}));

export default function Navbar() {
  const { classes } = useStyles();
  const user = useSelector((state) => state.user);

  return (
    <Header height={60} mb={20}>
      <Container className={classes.header}>
        <Link className={classes.logo} to="/">
          BLOGIFY
        </Link>
        <Group spacing={5}>
          <ThemeSwitch />
          <Link to="/users">
            <Button variant="default">Users</Button>
          </Link>
          {user ? (
            <NavMenu />
          ) : (
            <Link to="/login">
              <Button variant="gradient">Login</Button>
            </Link>
          )}
        </Group>
      </Container>
    </Header>
  );
}
