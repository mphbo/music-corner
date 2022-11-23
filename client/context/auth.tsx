import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface IUser {
  username: string;
  email: string;
  url: string;
  id: number;
}

interface IAuthContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}

const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
