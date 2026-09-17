import Input from "./input";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const Email = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    required: true,
  },
};

export const Password = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
};

export const WithError = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    error: "Please enter a valid email address.",
  },
};

export const Disabled = {
  args: {
    label: "Username",
    placeholder: "This input is disabled",
    disabled: true,
  },
};