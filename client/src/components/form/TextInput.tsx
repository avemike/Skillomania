import { BaseInput } from "./BaseInput";
import { BaseInputLabel } from "./BaseInputLabel";
import { BaseInputWrapper } from "./BaseInputWrapper";

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function TextInput(props: TextInputProps) {
  const id = `${props.label}-input`;

  return (
    <BaseInputWrapper>
      <BaseInputLabel label={props.label} htmlFor={id} />
      <BaseInput
        as="input"
        type="text"
        id={id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.onChange(e.target.value)
        }
      />
    </BaseInputWrapper>
  );
}
