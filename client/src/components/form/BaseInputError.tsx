interface BaseInputErrorProps {
  errorMessage?: string;
}

export function BaseInputError({ errorMessage }: BaseInputErrorProps) {
  if (!errorMessage) {
    return null;
  }

  return <div className="text-red-500 text-sm mt-2">{errorMessage}</div>;
}
