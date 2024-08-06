import { ReactNode } from "react";
import { Navbar } from "../components/Navbar";

/**
 * Renders a standard layout.
 */
export function StandardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-dvw bg-[url('./assets/welcome_website.svg')] bg-center bg-cover flex flex-col flex-nowrap">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </div>
    </div>
  );
}
