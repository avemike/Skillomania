import { ReactNode } from "react";

/**
 * Renders a standard layout.
 */
export function StandardLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`min-h-screen w-screen `}>
      <div className="max-w-2xl mx-auto px-4">{children}</div>;
    </div>
  );
}
