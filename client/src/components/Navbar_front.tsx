import { NavbarItemsFront } from "./NavbarItemsFront";

export function Navbar_front() {
  return (
    <nav className="absolute right-28 top-10 flex gap-20">
      <ul>
        <NavbarItemsFront text="Home" href="/" />
        <NavbarItemsFront text="About" href="/About" />
        <NavbarItemsFront text="Contacts" href="/Contacts" />
      </ul>
    </nav>
  );
}
