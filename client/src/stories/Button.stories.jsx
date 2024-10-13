import { Button } from "../components/form/Button";
import "../index.css";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Press me",
  size: "md",
  isDisabled: false,
  isLoading: false,
};
