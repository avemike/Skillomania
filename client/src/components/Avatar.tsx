import { useAuth } from "../AuthenticationProvider";
import { Menu } from "./Menu";

/** Round div with initials */
export function Avatar() {
  const { authUser, handleLogout } = useAuth();

  if (!authUser) {
    return null;
  }
  const { firstName, lastName } = authUser;

  return (
    <Menu.Wrapper>
      <Menu.Button>
        <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 text-white font-bold rounded-full">
          {firstName[0]}
          {lastName[0]}
        </div>
      </Menu.Button>
      <Menu.List>
        <Menu.Item onClick={handleLogout}>
          <p>Logout</p>
        </Menu.Item>
      </Menu.List>
    </Menu.Wrapper>
  );
}
