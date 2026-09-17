
import { useState } from "react";

import Button from "../components/Buttons/Button";
import Input from "../components/Inputs/input";
import Card from "../components/Card/Card";
import Badge from "../components/Badge/Badge";
import Modal from "../components/Modal/Modal";
import Alert from "../components/Alert/Alert";
import Spinner from "../components/Spinner/Spinner";

const Showcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-lg shadow-slate-900/15">
              B
            </div>

            <div>
              <p className="text-sm font-bold tracking-tight text-slate-900">
                Basem UI
              </p>
              <p className="text-xs text-slate-400">
                Component Library
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#components"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Components
            </a>

            <a
              href="#showcase"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              Showcase
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              About
            </a>
          </nav>

          <Badge variant="success" size="sm">
            v1.0.0
          </Badge>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white">
          <div
            className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="max-w-4xl">
              <Badge variant="info">React Component Library</Badge>

              <h1 className="mt-6 text-5xl font-bold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                Build beautiful interfaces with{" "}
                <span className="text-violet-600">reusable components.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
                A modern collection of reusable, customizable, and
                accessibility-focused React components built with Tailwind CSS.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#components">
                  <Button size="lg" variant="primary">
                    Explore Components
                  </Button>
                </a>

                <a
                  href="https://github.com/basemmohamed012/basem-ui-component-library"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="lg" variant="outline">
                    View on GitHub
                  </Button>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
                <span>✓ React</span>
                <span>✓ Tailwind CSS</span>
                <span>✓ Storybook</span>
                <span>✓ Accessible</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 lg:grid-cols-4">
            {[
              ["07", "Components"],
              ["04+", "Variants"],
              ["100%", "Reusable"],
              ["A11Y", "Focused"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="px-6 py-8 text-center sm:px-10"
              >
                <p className="text-3xl font-bold tracking-tight text-slate-900">
                  {value}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section
          id="components"
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div className="max-w-2xl">
            <Badge variant="default">Components</Badge>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything you need to build modern interfaces.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Explore the reusable components included in Basem UI and see
              how they can be combined together.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-16 border-t border-slate-200 pt-10">
            <div className="mb-7">
              <h3 className="text-xl font-semibold tracking-tight">
                Buttons
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Multiple variants and sizes for different actions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="danger">Delete</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          {/* Input */}
          <div className="mt-16 border-t border-slate-200 pt-10">
            <div className="mb-7">
              <h3 className="text-xl font-semibold tracking-tight">
                Form Controls
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Clean inputs with validation and accessibility support.
              </p>
            </div>

            <div className="grid max-w-3xl gap-6 md:grid-cols-2">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
              />

              <Input
                label="Username"
                placeholder="basem_dev"
              />

              <Input
                label="Invalid Input"
                placeholder="Something went wrong"
                error="Please enter a valid value."
              />
            </div>
          </div>

          {/* Badges */}
          <div className="mt-16 border-t border-slate-200 pt-10">
            <div className="mb-7">
              <h3 className="text-xl font-semibold tracking-tight">
                Badges
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Status and category indicators for your interface.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="default">Draft</Badge>
              <Badge variant="success">Active</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="danger">Failed</Badge>
              <Badge variant="info">Processing</Badge>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-16 border-t border-slate-200 pt-10">
            <div className="mb-7">
              <h3 className="text-xl font-semibold tracking-tight">
                Cards
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Flexible content containers for projects, products, and more.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <Card
                title="Project Overview"
                description="A reusable card for project information."
              >
                <p>
                  Cards can contain text, actions, badges, images, and custom
                  content.
                </p>
              </Card>

              <Card
                title="Creative Workspace"
                description="A clean environment designed for productivity."
                image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
              >
                <p>
                  Build rich content layouts using the same reusable card
                  component.
                </p>
              </Card>

              <Card
                title="Premium Headphones"
                description="Wireless headphones with immersive sound."
                image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
                footer={
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xl font-bold text-slate-900">
                      $129
                    </span>

                    <Button size="sm">
                      Add to Cart
                    </Button>
                  </div>
                }
              >
                <Badge variant="success" size="sm">
                  In Stock
                </Badge>
              </Card>
            </div>
          </div>
        </section>

        {/* Feedback */}
        <section
          id="showcase"
          className="bg-slate-950 px-6 py-24 text-white lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <Badge variant="info">Feedback</Badge>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Clear feedback for every state.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Inform users about important actions, warnings, and system
                states with reusable alert components.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <Alert
                title="Information"
                variant="info"
              >
                Your profile information has been updated successfully.
              </Alert>

              <Alert
                title="Success"
                variant="success"
              >
                Your changes have been saved successfully.
              </Alert>

              <Alert
                title="Warning"
                variant="warning"
              >
                Your account storage is almost full.
              </Alert>

              <Alert
                title="Error"
                variant="danger"
              >
                Something went wrong. Please try again.
              </Alert>
            </div>
          </div>
        </section>

        {/* Modal */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="default">Modal</Badge>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Interactive dialogs made reusable.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
                Open a reusable modal and use it for confirmations,
                information, forms, or any custom content.
              </p>

              <div className="mt-7">
                <Button onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="rounded-2xl bg-slate-950 p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Interactive
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Modal Component
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Built with controlled state and reusable content.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Welcome to Basem UI"
        >
          <div className="space-y-5">
            <p>
              This is a reusable modal component from the Basem UI component
              library.
            </p>

            <div className="rounded-xl bg-violet-50 p-4 text-sm text-violet-700">
              You can customize the modal content based on your application
              needs.
            </div>

            <div className="flex justify-end">
              <Button onClick={() => setIsModalOpen(false)}>
                Got it
              </Button>
            </div>
          </div>
        </Modal>

        {/* Spinner */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="text-center">
              <Badge variant="default">Loading</Badge>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                Elegant loading states.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500">
                A flexible animated spinner with multiple sizes and variants.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="flex min-h-48 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Spinner size="sm" />
              </div>

              <div className="flex min-h-48 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Spinner size="md" variant="violet" />
              </div>

              <div className="flex min-h-48 items-center justify-center rounded-2xl bg-slate-900 shadow-sm">
                <Spinner size="lg" variant="white" />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div className="rounded-3xl bg-violet-600 px-8 py-12 text-white shadow-2xl shadow-violet-600/20 lg:px-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
                  About the project
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Basem UI Component Library
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-violet-100">
                  A frontend component library created as part of the Codveda
                  Advanced Front-End Development tasks. The project focuses on
                  reusable React components, clean UI, responsive design,
                  Storybook documentation, and accessibility.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Badge variant="info">React</Badge>
                <Badge variant="success">Tailwind</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-900">
              Basem UI
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Reusable React components for modern interfaces.
            </p>
          </div>

          <p className="text-sm text-slate-400">
            Built with React + Tailwind CSS + Storybook
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Showcase;
