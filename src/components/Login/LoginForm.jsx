import React, { useState } from "react";
import { loginUser } from "../../features/userSlice";
import { setNotification } from "../../features/notificationSlice";
import { useDispatch } from "react-redux";
import { Button, Card, Center, Flex, Input, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import userService from "../../services/user";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        loginUser({
          username,
          password,
        })
      );
      setUsername("");
      setPassword("");
      navigate("/", { replace: true });
    } catch (error) {
      dispatch(setNotification(error.response.data.error, "error"));
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await userService.createUser({ username, password });
      setNotification("User created please login to continue", "success");
      setIsLogin(true);
      setUsername("");
      setPassword("");
    } catch (err) {
      setNotification("Something Went Wrong", "error");
    }
  };

  return (
    <Center h="100vh">
      <Card miw={300} shadow="sm" padding="lg" radius="md" withBorder>
        <Title align="center" mb={16} size="x-large">
          {isLogin ? "Login" : "Signup"}
        </Title>
        <form onSubmit={isLogin ? handleLogin : handleSignUp}>
          <Flex direction="column" gap="0.5rem">
            <Input.Wrapper label="Username">
              <Input
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="your username here"
              />
            </Input.Wrapper>
            <Input.Wrapper label="Password">
              <Input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="your password here"
              />
            </Input.Wrapper>
            <Button type="submit" mt="0.5rem">
              {isLogin ? "Login" : "Signup"}
            </Button>
          </Flex>
        </form>
        <Text size="sm" color="dimmed">
          {!isLogin ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                style={{ cursor: "pointer" }}
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                style={{ cursor: "pointer" }}
              >
                Signup
              </span>
            </>
          )}
        </Text>
      </Card>
    </Center>
  );
};

export default LoginForm;
