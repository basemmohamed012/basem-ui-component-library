
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "Modern Card",
    description: "This is a modern reusable card component.",
    children: (
      <p className="text-sm leading-6 text-slate-600">
        This card is built as a reusable component for modern React
        applications.
      </p>
    ),
  },
};

export const WithFooter = {
  args: {
    title: "Project Overview",
    description: "Manage your project and track your progress.",
    children: (
      <p className="text-sm leading-6 text-slate-600">
        Review your project details and continue working on your current
        tasks.
      </p>
    ),
    footer: (
      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          View Project
        </button>
      </div>
    ),
  },
};

export const WithImage = {
  args: {
    title: "Creative Workspace",
    description:
      "A clean and inspiring workspace designed for productivity.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    children: (
      <p className="text-sm leading-6 text-slate-600">
        A modern workspace that helps you stay focused and productive
        throughout the day.
      </p>
    ),
  },
};

export const ProductCard = {
  args: {
    title: "Premium Headphones",
    description: "Wireless headphones with immersive sound and premium comfort.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    children: (
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-slate-900">$129</span>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
          In Stock
        </span>
      </div>
    ),
    footer: (
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-slate-500">Free shipping</span>

        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Add to Cart
        </button>
      </div>
    ),
  },
};

