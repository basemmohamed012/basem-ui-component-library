
import { useState } from "react";

import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Info = {
  args: {
    title: "Information",
    children: "Your profile has been updated successfully.",
    variant: "info",
  },
};

export const Success = {
  args: {
    title: "Success",
    children: "Your changes have been saved successfully.",
    variant: "success",
  },
};

export const Warning = {
  args: {
    title: "Warning",
    children: "Your account storage is almost full.",
    variant: "warning",
  },
};

export const Danger = {
  args: {
    title: "Error",
    children: "Something went wrong. Please try again.",
    variant: "danger",
  },
};

export const Dismissible = {
  render: () => {
    const [visible, setVisible] = useState(true);

    if (!visible) {
      return (
        <button
          type="button"
          onClick={() => setVisible(true)}
          className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Show Alert Again
        </button>
      );
    }

    return (
      <Alert
        title="Session Expiring"
        variant="warning"
        onClose={() => setVisible(false)}
      >
        Your session will expire in 5 minutes. Please save your work.
      </Alert>
    );
  },
};

export const AllVariants = {
  render: () => (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Alert title="Information" variant="info">
        This is an informational message.
      </Alert>

      <Alert title="Success" variant="success">
        Your operation was completed successfully.
      </Alert>

      <Alert title="Warning" variant="warning">
        Please review your information before continuing.
      </Alert>

      <Alert title="Error" variant="danger">
        The operation could not be completed.
      </Alert>
    </div>
  ),
};

