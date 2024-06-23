import { ElementType, ComponentPropsWithoutRef } from "react";

interface BaseInputProps<T extends ElementType = "input"> {
  as?: T;
}

type Props<T extends ElementType> = BaseInputProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseInputProps>;

export function BaseInput<T extends ElementType = "input">({
  as,
  ...props
}: Props<T>) {
  const Component = as || "input";
  return (
    <Component
      className="
        w-full
        mt-1
        px-3
        py-2
        border
        border-gray-300
        rounded-md
        shadow-sm
        focus:outline-none
        focus:ring-indigo-500
        focus:border-indigo-500
        sm:text-md
      "
      {...props}
    />
  );
}
