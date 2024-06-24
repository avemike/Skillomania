import { ChangeEvent, forwardRef } from "react";
import { BaseInput } from "./BaseInput";
import { BaseInputWrapper } from "./BaseInputWrapper";
import { BaseInputLabel } from "./BaseInputLabel";

interface SelectProps {
  label: string;
  value: string | number | undefined | null;
  options: { value: number | string; label: string }[];
  onChange: (value: number | string) => void;
  name?: string;
  error?: string;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const {
      label,
      value,
      options,
      onChange,
      name,
      error,
      placeholder = "None",
    } = props;
    const id = `${label}-input`;

    return (
      <BaseInputWrapper error={error}>
        <BaseInputLabel label={label} htmlFor={id} />
        <BaseInput
          as="select"
          id={id}
          value={value}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onChange(e.target.value)
          }
          name={name}
          ref={ref}
        >
          <option selected>-- {placeholder} --</option>
          {options.map((option) => (
            <option
              className="text-base"
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </BaseInput>
      </BaseInputWrapper>
    );
  }
);

Select.displayName = "Select";
