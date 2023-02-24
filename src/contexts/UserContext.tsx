import { createContext, useState, ReactNode, useEffect } from "react";

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as any);

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<any>(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
