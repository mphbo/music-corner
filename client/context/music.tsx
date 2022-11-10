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
}

interface IAuthContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}

const AuthContext = createContext<any>({});

export const MusicProvider = ({ children }: any) => {
  const [music, setMusic] = useState(null);
  return (
    <AuthContext.Provider value={{ music, setMusic }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(AuthContext);
};
