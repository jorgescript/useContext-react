import { UserContext } from "./UserContext";

const user = {
  id: "khfi8fyafafhashiu",
  name: "Jorge",
  email: "email@email.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
