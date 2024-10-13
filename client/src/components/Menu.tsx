import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

function MenuWrapper({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      <div ref={menuRef} className="relative inline-block">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

function MenuButton({ children }: { children: ReactNode }) {
  const { toggleMenu } = useMenuContext();

  return (
    <button onClick={toggleMenu} className="px-4 py-2 ">
      {children}
    </button>
  );
}

function MenuList({ children }: { children: React.ReactNode }) {
  const { isOpen } = useMenuContext();

  if (!isOpen) return null;

  return (
    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
      {children}
    </ul>
  );
}

function MenuItem({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <li
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </li>
  );
}

interface MenuContextValue {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

function useMenuContext() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }

  return context;
}

export const Menu = {
  Wrapper: MenuWrapper,
  Button: MenuButton,
  List: MenuList,
  Item: MenuItem,
};
