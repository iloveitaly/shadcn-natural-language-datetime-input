"use client"

import { useState } from "react"
import { CalendarDays } from "lucide-react"
import { DateTimePicker } from "@/registry/new-york/lingua-time/datetime-picker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function BasicDateTimePickerExample() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  return (
    <div className="w-full max-w-md space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Basic DateTime Picker
          </CardTitle>
          <CardDescription>
            Try typing natural language like "tomorrow at 3pm", "next Monday", or "in 2 hours"
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="datetime">Select Date & Time</Label>
            <DateTimePicker
              id="datetime"
              value={selectedDate}
              onChange={(date) => date && setSelectedDate(date)}
              showTimePicker={true}
              placeholder="Enter date and time (e.g., 'tomorrow at 3pm')"
            />
          </div>
          
          {selectedDate && (
            <div className="p-3 bg-muted rounded-md">
              <p className="text-sm text-muted-foreground">Selected:</p>
              <p className="font-medium">{selectedDate.toLocaleString()}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
