import { ChangeEvent } from "react";
import { BaseInput } from "./BaseInput";
import { BaseInputWrapper } from "./BaseInputWrapper";
import { BaseInputLabel } from "./BaseInputLabel";

interface TextAreaInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function TextAreaInput(props: TextAreaInputProps) {
  const id = `${props.label}-input`;

  return (
    <BaseInputWrapper>
      <BaseInputLabel label={props.label} htmlFor={id} />
      <BaseInput
        as="textarea"
        id={id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          props.onChange(e.target.value)
        }
      />
    </BaseInputWrapper>
  );
}
