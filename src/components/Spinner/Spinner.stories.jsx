
import Spinner from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    size: "md",
    variant: "primary",
    label: "Loading",
  },
};

export const Small = {
  args: {
    size: "sm",
    variant: "primary",
    label: "Loading",
  },
};

export const Large = {
  args: {
    size: "lg",
    variant: "violet",
    label: "Loading",
  },
};

export const ExtraLarge = {
  args: {
    size: "xl",
    variant: "violet",
    label: "Loading content",
  },
};

export const OnDarkBackground = {
  render: () => (
    <div className="flex min-h-32 min-w-72 items-center justify-center rounded-2xl bg-slate-900 p-8">
      <Spinner
        size="lg"
        variant="white"
        label="Loading content"
      />
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" variant="violet" />
      <Spinner size="xl" variant="violet" />
    </div>
  ),
};
