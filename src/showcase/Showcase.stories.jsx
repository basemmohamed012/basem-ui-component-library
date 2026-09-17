
import { useState } from "react";

import Button from "../components/Buttons/Button";
import Input from "../components/Inputs/input";
import Card from "../components/Card/Card";
import Badge from "../components/Badge/Badge";
import Modal from "../components/Modal/Modal";
import Alert from "../components/Alert/Alert";
import Spinner from "../components/Spinner/Spinner";

export default {
  title: "Showcase/Component Library",
  parameters: {
    layout: "fullscreen",
  },
};

export const Overview = {
  render: () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">

        {/* ==================== HEADER ==================== */}
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                B
              </div>

              <div>
                <p className="text-sm font-bold tracking-tight text-slate-900">
                  Basem UI
                </p>
                <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                  Component Library
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-6 text-sm font-medium text-slate-500 md:flex">
              <a href="#components" className="transition hover:text-slate-900">
                Components
              </a>

              <a href="#examples" className="transition hover:text-slate-900">
                Examples
              </a>

              <a href="#about" className="transition hover:text-slate-900">
                About
              </a>
            </div>

            <Badge variant="success" size="sm">
              v1.0
            </Badge>
          </div>
        </header>

        {/* ==================== HERO ==================== */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">

          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-200/30 blur-3xl" />
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

            <div className="max-w-4xl">

              <Badge variant="info">
                React UI System
              </Badge>

              <h1 className="mt-7 text-5xl font-bold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                Build beautiful interfaces
                <span className="block text-violet-600">
                  with reusable components.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500">
                Basem UI is a modern React component library built with
                reusable components, accessible patterns, Tailwind CSS,
                and Storybook.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("components")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Components
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setModalOpen(true)}
                >
                  View Documentation
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
                <span>✓ React</span>
                <span>✓ Tailwind CSS</span>
                <span>✓ Storybook</span>
                <span>✓ Accessible</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== STATS ==================== */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">

            <div className="px-6 py-8 text-center">
              <p className="text-3xl font-bold tracking-tight text-slate-900">
                7
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Components
              </p>
            </div>

            <div className="px-6 py-8 text-center">
              <p className="text-3xl font-bold tracking-tight text-slate-900">
                20+
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Variants
              </p>
            </div>

            <div className="border-t border-slate-200 px-6 py-8 text-center md:border-t-0">
              <p className="text-3xl font-bold tracking-tight text-slate-900">
                100%
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Reusable
              </p>
            </div>

            <div className="border-t border-slate-200 px-6 py-8 text-center md:border-t-0">
              <p className="text-3xl font-bold tracking-tight text-slate-900">
                A11y
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Mindful
              </p>
            </div>

          </div>
        </section>

        {/* ==================== COMPONENTS ==================== */}
        <main id="components" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
              Component System
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything you need to build interfaces
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              A focused collection of reusable building blocks for modern
              React applications.
            </p>
          </div>

          {/* BUTTONS */}
          <section className="mt-16">

            <div className="mb-6 flex items-end justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Buttons
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Actions, controls, and user interactions.
                </p>
              </div>

              <Badge variant="default">
                Button
              </Badge>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">
                  Primary
                </Button>

                <Button variant="secondary">
                  Secondary
                </Button>

                <Button variant="outline">
                  Outline
                </Button>

                <Button variant="danger">
                  Delete
                </Button>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-8">

                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Sizes
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">
                    Small
                  </Button>

                  <Button size="md">
                    Medium
                  </Button>

                  <Button size="lg">
                    Large
                  </Button>

                  <Button disabled>
                    Disabled
                  </Button>
                </div>

              </div>
            </div>
          </section>

          {/* INPUTS */}
          <section className="mt-20">

            <div className="mb-6 flex items-end justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Form Controls
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Accessible inputs with validation states.
                </p>
              </div>

              <Badge variant="default">
                Input
              </Badge>
            </div>

            <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">

              <Input
                label="Full Name"
                placeholder="Enter your full name"
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                required
              />

              <Input
                label="Username"
                placeholder="Choose a username"
              />

              <Input
                label="Validation Error"
                placeholder="Invalid value"
                error="Please enter a valid value."
              />

            </div>
          </section>

          {/* CARDS */}
          <section id="examples" className="mt-20">

            <div className="mb-6 flex items-end justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Cards
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Flexible content containers for applications and dashboards.
                </p>
              </div>

              <Badge variant="default">
                Card
              </Badge>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">

              <Card
                title="Project Dashboard"
                description="Track project activity, progress, and recent updates."
                footer={
                  <div className="flex items-center justify-between">
                    <Badge variant="success">
                      Active
                    </Badge>

                    <Button size="sm">
                      View Project
                    </Button>
                  </div>
                }
              >
                <p>
                  Create reusable content layouts with custom children
                  and footer sections.
                </p>
              </Card>

              <Card
                title="Creative Workspace"
                description="A clean workspace designed for modern teams."
                image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
                footer={
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      Available now
                    </span>

                    <Badge variant="info">
                      Premium
                    </Badge>
                  </div>
                }
              >
                <p>
                  Cards support images, content, badges, and custom
                  footer elements.
                </p>
              </Card>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge variant="default">Draft</Badge>
              <Badge variant="success">Active</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="danger">Failed</Badge>
              <Badge variant="info">Processing</Badge>
            </div>
          </section>

          {/* ALERTS */}
          <section className="mt-20">

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Feedback
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Communicate application states clearly.
              </p>
            </div>

            <div className="space-y-4">

              <Alert title="Information" variant="info">
                Your profile information is up to date.
              </Alert>

              <Alert title="Success" variant="success">
                Your changes have been saved successfully.
              </Alert>

              <Alert title="Warning" variant="warning">
                Your account storage is almost full.
              </Alert>

              <Alert title="Error" variant="danger">
                Something went wrong while processing your request.
              </Alert>

            </div>
          </section>

          {/* MODAL */}
          <section className="mt-20">

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Modal
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Dialog windows for confirmations and focused interactions.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

              <div className="flex flex-col items-start gap-4">

                <Button onClick={() => setModalOpen(true)}>
                  Open Modal
                </Button>

                <p className="max-w-xl text-sm leading-6 text-slate-500">
                  Click the button to preview the reusable modal component
                  with its accessible dialog structure.
                </p>

              </div>

            </div>

            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Component Documentation"
            >
              <div className="space-y-5">

                <p>
                  This modal demonstrates how the component can be used
                  for focused interactions and contextual information.
                </p>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-800">
                    Basem UI
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Reusable React components for modern applications.
                  </p>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => setModalOpen(false)}>
                    Got it
                  </Button>
                </div>

              </div>
            </Modal>

          </section>

          {/* SPINNER */}
          <section className="mt-20">

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Loading States
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Animated indicators for asynchronous operations.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-12 shadow-sm">

              <div className="flex flex-wrap items-center justify-center gap-14">

                <div className="flex flex-col items-center gap-4">
                  <Spinner size="sm" />
                  <span className="text-xs font-medium text-slate-500">
                    Small
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <Spinner size="md" />
                  <span className="text-xs font-medium text-slate-500">
                    Medium
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <Spinner size="lg" variant="violet" />
                  <span className="text-xs font-medium text-slate-500">
                    Large
                  </span>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <Spinner size="xl" variant="violet" />
                  <span className="text-xs font-medium text-slate-500">
                    Extra Large
                  </span>
                </div>

              </div>

              <div className="mt-12 rounded-2xl bg-slate-950 p-10">

                <div className="flex flex-col items-center gap-4">
                  <Spinner
                    size="lg"
                    variant="white"
                    label="Loading content"
                  />

                  <span className="text-sm font-medium text-slate-400">
                    Dark background
                  </span>
                </div>

              </div>

            </div>
          </section>

          {/* ==================== ABOUT ==================== */}
          <section
            id="about"
            className="mt-24 overflow-hidden rounded-3xl bg-slate-950"
          >

            <div className="grid gap-12 px-8 py-12 lg:grid-cols-2 lg:px-14 lg:py-16">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                  About the library
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                  Designed for consistency.
                  <span className="block text-slate-400">
                    Built for reuse.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                  Basem UI provides a consistent foundation for building
                  modern React interfaces faster while keeping components
                  reusable, customizable, and easy to document.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold text-white">
                    React
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Component based
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold text-white">
                    Tailwind
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Utility styling
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold text-white">
                    Storybook
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Documentation
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold text-white">
                    A11y
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Accessibility
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ==================== FOOTER ==================== */}
          <footer className="border-t border-slate-200 py-10">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Basem UI
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  React Component Library
                </p>
              </div>

              <p className="text-xs text-slate-400">
                Built with React, Tailwind CSS & Storybook
              </p>

            </div>

          </footer>

        </main>
      </div>
    );
  },
};
