
import Badge from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    children: "Default",
    variant: "default",
  },
};

export const Success = {
  args: {
    children: "Success",
    variant: "success",
  },
};

export const Warning = {
  args: {
    children: "Warning",
    variant: "warning",
  },
};

export const Danger = {
  args: {
    children: "Danger",
    variant: "danger",
  },
};

export const Info = {
  args: {
    children: "Information",
    variant: "info",
  },
};

export const Small = {
  args: {
    children: "Small Badge",
    variant: "success",
    size: "sm",
  },
};

export const Large = {
  args: {
    children: "Medium Badge",
    variant: "info",
    size: "md",
  },
};

export const StatusExamples = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="danger">Failed</Badge>
      <Badge variant="info">Processing</Badge>
      <Badge variant="default">Draft</Badge>
    </div>
  ),
};
