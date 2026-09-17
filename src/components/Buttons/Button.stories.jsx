import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args:{
    children:"Ok",
    variant:"primary",
    type:"button",
    size:"lg",
    disabled:true
  },
};

export const Secondary = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Danger = {
  args: {
    children: "Delete",
    variant: "danger",
  },
};

export const Small = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Large = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const Disabled = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};