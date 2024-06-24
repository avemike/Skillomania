import { ReactNode } from "react";
import { BaseInputError } from "./BaseInputError";

interface BaseInputWrapperProps {
  children: ReactNode;
  error?: string;
}

export function BaseInputWrapper({ children, error }: BaseInputWrapperProps) {
  return (
    <div className="w-full">
      {children}
      <BaseInputError errorMessage={error} />
    </div>
  );
}
