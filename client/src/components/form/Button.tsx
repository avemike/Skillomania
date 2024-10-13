// import { ButtonHTMLAttributes, ReactNode } from "react";

// const PRIMARY_CLASSES = "bg-blue-500";
// const OUTLINE_CLASSES = "bg-transparent border border-blue-500 text-blue-500";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: ReactNode;
//   variant?: "primary" | "outline";
//   isDisabled?: boolean;
//   isLoading?: boolean;
// }

// export function Button({
//   children,
//   className = "",
//   variant = "primary",
//   ...props
// }: ButtonProps) {
//   const variantClasses =
//     variant === "primary" ? PRIMARY_CLASSES : OUTLINE_CLASSES;

//   if (props.isDisabled) {
//     return (
//       <button
//         className={`px-4  py-2 text-white rounded-md bg-gray-300 ${className} cursor-not-allowed`}
//         {...props}
//         disabled
//       >
//         {children}
//       </button>
//     );
//   }

//   if (props.isLoading) {
//     return (
//       <button
//         className={`px-4  py-2 text-white rounded-md bg-gray-300 ${className} cursor-wait flex gap-3 items-center`}
//         {...props}
//         disabled
//       >
//         {children}
//         <div className="animate-spin h-4 w-4 border-t-2 border-b-2 border-blue-500 rounded-full"></div>
//       </button>
//     );
//   }

//   return (
//     <button
//       className={`px-4  py-2 text-white rounded-md ${variantClasses} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );

// }

import { ButtonHTMLAttributes, ReactNode } from "react";
import PropTypes from "prop-types";

const PRIMARY_CLASSES = "bg-blue-500 text-white";
const OUTLINE_CLASSES = "bg-transparent border border-blue-500 text-blue-500";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  isDisabled?: boolean;
  isLoading?: boolean;
  label: string;
  size: string;
  backgroundColor: string;
}

export function Button({
  label,
  backgroundColor,
  size,
  onClick,
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const variantClasses =
    variant === "primary" ? PRIMARY_CLASSES : OUTLINE_CLASSES;

  let style = `px-4 py-2 rounded-md ${variantClasses} ${className}`;
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  if (props.isDisabled) {
    style += `bg-gray-300  cursor-not-allowed`;
  }

  if (props.isLoading) {
    return (
      <button
        className={`${style}  bg-gray-300 cursor-wait flex gap-3 items-center`}
        {...props}
        disabled
      >
        {label}
        <div className="animate-spin h-4 w-4 border-t-2 border-b-2 border-blue-500 rounded-full"></div>
      </button>
    );
  }

  return (
    <button onClick={onClick} className={`${style}`}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};
