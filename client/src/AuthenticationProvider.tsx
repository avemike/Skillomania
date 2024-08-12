import { useContext, createContext, ReactNode, useState } from "react";
import { logoutWithRefresh } from "./api/logoutWithRefresh";

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
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  authUser: null,
  setAuthUser: () => {},
  token: null,
  setToken: () => {},
  isAuthenticated: false,
  handleLogout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const tokenFromLocalStorage = localStorage.getItem("token") ?? null;
  const authUserFromLocalStorage = getAuthUserFromLocalStorage();

  const [authUser, setAuthUser] = useState(authUserFromLocalStorage);
  const [token, setToken] = useState(tokenFromLocalStorage);

  const isTokenExpired = (token: string | null): boolean => {
    if (!token) {
      return true;
    }

    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp;

    if (!exp) {
      return true;
    }

    return Date.now() >= exp * 1000;
  };

  const handleLogout = () => {
    setAuthUser(null);
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");

    logoutWithRefresh();
  };

  const value = {
    authUser,
    setAuthUser,
    token,
    setToken,
    isAuthenticated: Boolean(token) && !isTokenExpired(token),
    handleLogout,
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
