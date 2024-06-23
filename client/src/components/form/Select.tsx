import { ChangeEvent } from "react";
import { BaseInput } from "./BaseInput";
import { BaseInputWrapper } from "./BaseInputWrapper";
import { BaseInputLabel } from "./BaseInputLabel";

interface SelectProps {
  label: string;
  value: string;
  options: { value: number | string; label: string }[];
  onChange: (value: number | string) => void;
}

export function Select(props: SelectProps) {
  const id = `${props.label}-input`;

  return (
    <BaseInputWrapper>
      <BaseInputLabel label={props.label} htmlFor={id} />
      <BaseInput
        as="select"
        id={id}
        value={props.value}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          props.onChange(e.target.value)
        }
      >
        <option value="" className="text-base">
          Select series
        </option>
        {props.options.map((option) => (
          <option className="text-base" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </BaseInput>
    </BaseInputWrapper>
  );
}
