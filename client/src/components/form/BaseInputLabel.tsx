interface BaseInputLabelProps {
  label: string;
  htmlFor: string;
}

export function BaseInputLabel(props: BaseInputLabelProps) {
  return (
    <label
      htmlFor={`${props.htmlFor}-input`}
      className="block text-sm font-medium text-gray-700 mt-4"
    >
      {props.label}
    </label>
  );
}
