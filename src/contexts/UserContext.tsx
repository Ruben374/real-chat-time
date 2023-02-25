import { createContext, useState, ReactNode, useEffect } from "react";
import { useApi } from "../services/useApi";
type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as any);

export function UserProvider({ children }: UserProviderProps) {
  const Api = useApi();
  const [userData, setUserData] = useState<any>({});
  //const [token, setToken] = useState<any>(localStorage.getItem("token"));
  async function getUser() {
    console.log("aqqq")
      const user = await Api.getUserData()
        .then((data: any) => data)
        .catch((error: Error) => console.log(error.message));
      console.log(user.data);
      setUserData(user.data);
  }
  return (
    <UserContext.Provider value={{ userData, getUser }}>
      {children}
    </UserContext.Provider>
  );
}
