"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { DateTimePicker } from "@/registry/new-york/lingua-time/datetime-picker"

export default function BasicDateTimePickerExample() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  return (
    <div className="w-full max-w-md space-y-4">
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
    </div>
  )
}
