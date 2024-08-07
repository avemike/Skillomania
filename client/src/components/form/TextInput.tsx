import { ChangeEvent, forwardRef } from "react";
import { BaseInput } from "./BaseInput";
import { BaseInputWrapper } from "./BaseInputWrapper";
import { BaseInputLabel } from "./BaseInputLabel";

interface TextInputProps {
  label: string;
  placeholder: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  error?: string;
  type?: "text" | "number";
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      label,
      placeholder,
      value,
      onChange,
      onBlur,
      name,
      error,
      type = "text",
    } = props;
    const id = `${label}-input`;

    return (
      <BaseInputWrapper error={error}>
        <BaseInputLabel label={label} htmlFor={id} />
        <BaseInput
          as="input"
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
        />
      </BaseInputWrapper>
    );
  }
);

TextInput.displayName = "TextInput";
