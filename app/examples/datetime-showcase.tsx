"use client"

import { useState } from "react"
import { Clock, CalendarCheck, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { DateTimePicker } from "@/registry/new-york/lingua-time/datetime-picker"

export default function DateTimePickerShowcaseExample() {
  const [meetingDate, setMeetingDate] = useState<Date>(new Date())
  const [deadlineDate, setDeadlineDate] = useState<Date>(new Date())
  const [eventDate, setEventDate] = useState<Date>(new Date())

  const [parseHistory, setParseHistory] = useState<
    Array<{
      input: string
      parsed: Date
      timestamp: number
    }>
  >([])

  const handleDateChange = (date: Date | undefined, input: string) => {
    if (date) {
      setParseHistory((prev) => [
        { input, parsed: date, timestamp: Date.now() },
        ...prev.slice(0, 4), // Keep only last 5 entries
      ])
    }
  }

  const naturalLanguageExamples = [
    "tomorrow at 3pm",
    "next Monday",
    "in 2 hours",
    "Friday morning",
    "next week",
    "end of the month",
    "Christmas day",
    "New Year's Eve",
  ]

  return (
    <div className="w-full max-w-4xl space-y-8">
      {/* Meeting Scheduler */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <h3 className="font-semibold">Meeting Scheduler</h3>
        </div>
        <div className="space-y-2">
          <Label htmlFor="meeting">Schedule a meeting</Label>
          <DateTimePicker
            id="meeting"
            value={meetingDate}
            onChange={(date) => {
              if (date) {
                setMeetingDate(date)
                handleDateChange(date, "Meeting scheduled")
              }
            }}
            showTimePicker={true}
            suggestions={[
              "Tomorrow at 10am",
              "Next Monday at 2pm",
              "Friday afternoon",
              "Next week at 9am",
            ]}
            placeholder="When should we meet? (e.g., 'next Tuesday at 2pm')"
          />
          <p className="text-sm text-muted-foreground">
            Selected: <strong>{meetingDate.toLocaleString()}</strong>
          </p>
        </div>
      </div>

      {/* Deadline Tracker */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <CalendarCheck className="h-4 w-4" />
          <h3 className="font-semibold">Deadline Tracker</h3>
        </div>
        <div className="space-y-2">
          <Label htmlFor="deadline">Set project deadline</Label>
          <DateTimePicker
            id="deadline"
            value={deadlineDate}
            onChange={(date) => {
              if (date) {
                setDeadlineDate(date)
                handleDateChange(date, "Deadline set")
              }
            }}
            showTimePicker={false}
            suggestions={[
              "End of this week",
              "End of the month",
              "In 2 weeks",
              "Next quarter",
            ]}
            placeholder="When is the deadline? (e.g., 'end of next week')"
          />
          <p className="text-sm text-muted-foreground">
            Deadline: <strong>{deadlineDate.toLocaleDateString()}</strong>
          </p>
        </div>
      </div>

      {/* Event Planner */}
      <div className="space-y-4">
        <h3 className="font-semibold">Event Planner</h3>
        <div className="space-y-2">
          <Label htmlFor="event">Plan an event</Label>
          <DateTimePicker
            id="event"
            value={eventDate}
            onChange={(date) => {
              if (date) {
                setEventDate(date)
                handleDateChange(date, "Event planned")
              }
            }}
            showTimePicker={true}
            suggestions={[
              "Next Saturday at 7pm",
              "Christmas Eve",
              "New Year's Day",
              "Next holiday",
            ]}
            placeholder="When is the event? (e.g., 'next Saturday evening')"
          />
          <p className="text-sm text-muted-foreground">
            Event: <strong>{eventDate.toLocaleString()}</strong>
          </p>
        </div>
      </div>

      {/* Natural Language Examples */}
      <div className="space-y-4">
        <h3 className="font-semibold">Try These Natural Language Examples</h3>
        <p className="text-sm text-muted-foreground">
          Click any of these examples to see how they're parsed
        </p>
        <div className="flex flex-wrap gap-2">
          {naturalLanguageExamples.map((example, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => {
                const parsed = new Date() // This would normally use chrono-node parsing
                setMeetingDate(parsed)
                handleDateChange(parsed, example)
              }}
            >
              "{example}"
            </Button>
          ))}
        </div>
      </div>

      {/* Parse History */}
      {parseHistory.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold">Recent Parsing History</h3>
          <p className="text-sm text-muted-foreground">
            See how your natural language inputs were interpreted
          </p>
          <div className="space-y-3">
            {parseHistory.map((entry, index) => (
              <div
                key={entry.timestamp}
                className="flex items-center justify-between p-3 bg-muted rounded-lg"
              >
                <div>
                  <p className="font-medium">"{entry.input}"</p>
                  <p className="text-sm text-muted-foreground">
                    Parsed as: {entry.parsed.toLocaleString()}
                  </p>
                </div>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                  {index === 0 ? "Latest" : `${index + 1} ago`}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
