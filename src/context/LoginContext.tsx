import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface ILogin {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  isLogin: false,
  setIsLogin: (model: boolean) => {},
} as ILogin;
export const LoginContext = createContext(defaultState);

type ChildNode = { children: ReactNode };
export default function UserLoginProvider({ children }: ChildNode) {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <LoginContext.Provider value={{ isLogin: isLogin, setIsLogin: setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
}
