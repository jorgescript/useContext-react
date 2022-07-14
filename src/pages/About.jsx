import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const About = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>About Page</h1>
      <p>{user.email}</p>
    </>
  );
};
