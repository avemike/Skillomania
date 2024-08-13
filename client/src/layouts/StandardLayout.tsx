import { ReactNode } from "react";
import { Navbar } from "../components/Navbar";

/**
 * Renders a standard layout.
 */
export function StandardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh w-dvw overflow-x-hidden bg-[url('./assets/welcome_website.svg')] bg-top bg-repeat flex flex-col flex-nowrap">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 grow flex flex-col flex-nowrap">
        {children}
      </div>
    </div>
  );
}
