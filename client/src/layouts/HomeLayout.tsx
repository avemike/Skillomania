import { ReactNode } from "react";

/**
 * Renders a standard layout.
 */
export function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-screen bg-[url('./assets/welcome_website.svg')] bg-center bg-cover flex-col">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
