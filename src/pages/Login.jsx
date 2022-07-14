import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Login = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>Login Page</h1>
      <p>{user?.name}</p>
    </>
  );
};
