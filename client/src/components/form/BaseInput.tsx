import { ElementType, ComponentPropsWithoutRef, forwardRef, Ref } from "react";

interface BaseInputProps<T extends ElementType = "input"> {
  as?: T;
}

type Props<T extends ElementType> = BaseInputProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BaseInputProps>;

const BaseInput = forwardRef(
  <T extends ElementType = "input">(
    { as, ...props }: Props<T>,
    ref: Ref<any>
  ) => {
    const Component = as || "input";
    return (
      <Component
        ref={ref}
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
);

BaseInput.displayName = "BaseInput";

export { BaseInput };
