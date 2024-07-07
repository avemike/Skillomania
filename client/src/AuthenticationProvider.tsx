import { useContext, createContext, ReactNode, useState } from "react";

interface AuthUser {
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthContextValue {
  authUser: AuthUser | null;
  setAuthUser: (user: AuthUser | null) => void;
  token: string | null;
  setToken: (token: string | null) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  authUser: null,
  setAuthUser: () => {},
  token: null,
  setToken: () => {},
  isAuthenticated: false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const tokenFromLocalStorage = localStorage.getItem("token") ?? null;
  const authUserFromLocalStorage = getAuthUserFromLocalStorage();

  const [authUser, setAuthUser] = useState(authUserFromLocalStorage);
  const [token, setToken] = useState(tokenFromLocalStorage);

  const value = {
    authUser,
    setAuthUser,
    token,
    setToken,
    isAuthenticated: Boolean(token),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function getAuthUserFromLocalStorage() {
  const firstNameFromLocalStorage = localStorage.getItem("firstName") ?? null;
  const lastNameFromLocalStorage = localStorage.getItem("lastName") ?? null;
  const emailFromLocalStorage = localStorage.getItem("email") ?? null;

  if (
    !firstNameFromLocalStorage ||
    !lastNameFromLocalStorage ||
    !emailFromLocalStorage
  ) {
    return null;
  }

  const authUser: AuthUser = {
    firstName: firstNameFromLocalStorage,
    lastName: lastNameFromLocalStorage,
    email: emailFromLocalStorage,
  };

  return authUser;
}
