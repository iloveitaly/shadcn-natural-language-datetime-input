import * as React from "react"

import AppointmentFormExample from "@/app/examples/appointment-form"
import BasicDateTimePickerExample from "@/app/examples/basic-datetime-picker"
import DateTimePickerShowcaseExample from "@/app/examples/datetime-showcase"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { RegistryCommand } from "@/components/registry-command"
import { ShowSourceButton } from "@/components/show-source-button"

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

interface ComponentDisplayProps {
  name: string
  description: string
  minHeight?: string
  filePath: string
  children: React.ReactNode
}

function ComponentDisplay({
  name,
  description,
  minHeight = "400px",
  filePath,
  children,
}: ComponentDisplayProps) {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">{description}</h2>
        <div className="flex gap-2">
          <ShowSourceButton filePath={filePath} />
          <OpenInV0Button name={name} />
        </div>
      </div>
      <div
        className={`flex items-center justify-center min-h-[${minHeight}] relative`}
      >
        {children}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1 space-y-6 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          ShadCN Natural Language DateTime Input
        </h1>
        <p className="text-muted-foreground">
          A powerful and intuitive ShadCN/UI component that allows users to
          input dates and times using natural language expressions like
          "tomorrow", "next Monday at 3pm", or "in 2 hours". Built with
          chrono-node for robust natural language parsing.
        </p>
        <RegistryCommand registryId="lingua-time" />
      </header>

      <main className="flex flex-col flex-1 gap-8">
        <ComponentDisplay
          name="basic-datetime-picker"
          description="A simple datetime picker with natural language input"
          filePath="app/examples/basic-datetime-picker.tsx"
        >
          <BasicDateTimePickerExample />
        </ComponentDisplay>

        <ComponentDisplay
          name="appointment-form"
          description="A complete appointment scheduling form with validation"
          minHeight="600px"
          filePath="app/examples/appointment-form.tsx"
        >
          <AppointmentFormExample />
        </ComponentDisplay>

        <ComponentDisplay
          name="datetime-showcase"
          description="Showcase of different use cases and natural language examples"
          minHeight="700px"
          filePath="app/examples/datetime-showcase.tsx"
        >
          <DateTimePickerShowcaseExample />
        </ComponentDisplay>
      </main>
    </div>
  )
}
