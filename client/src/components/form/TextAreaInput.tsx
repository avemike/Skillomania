import React, { ChangeEvent, forwardRef } from "react";
import { BaseInput } from "./BaseInput";
import { BaseInputWrapper } from "./BaseInputWrapper";
import { BaseInputLabel } from "./BaseInputLabel";

interface TextAreaInputProps {
  label: string;
  placeholder: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  error?: string;
}

export const TextAreaInput = forwardRef<
  HTMLTextAreaElement,
  TextAreaInputProps
>((props, ref) => {
  const { label, placeholder, value, onChange, onBlur, name, error } = props;
  const id = `${props.label}-input`;

  return (
    <BaseInputWrapper error={error}>
      <BaseInputLabel label={label} htmlFor={id} />
      <BaseInput
        as="textarea"
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
});

TextAreaInput.displayName = "TextAreaInput";
