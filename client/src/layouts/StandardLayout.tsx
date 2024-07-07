import { ReactNode } from "react";
import { Navbar } from "../components/Navbar";

/**
 * Renders a standard layout.
 */
export function StandardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-screen bg-[url('./assets/welcome_website.svg')] bg-center bg-cover flex-col">
      <Navbar />
      <div className="container mx-auto">{children}</div>;
    </div>
  );
}
