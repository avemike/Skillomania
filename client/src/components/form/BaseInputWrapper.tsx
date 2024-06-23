import { ReactNode } from "react";

interface BaseInputWrapperProps {
  children: ReactNode;
}

export function BaseInputWrapper({ children }: BaseInputWrapperProps) {
  return <div className="w-full">{children}</div>;
}
