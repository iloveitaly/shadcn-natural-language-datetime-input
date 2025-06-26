"use client"

import { useState } from "react"
import { addDays } from "date-fns"
import { Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { DateTimePicker } from "@/registry/new-york/lingua-time/datetime-picker"

interface AppointmentFormData {
  appointmentDate: Date
  followUpDate?: Date
}

export default function AppointmentFormExample() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedData, setSubmittedData] =
    useState<AppointmentFormData | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Form state
  const [appointmentDate, setAppointmentDate] = useState<Date>(new Date())
  const [followUpDate, setFollowUpDate] = useState<Date | undefined>()

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (appointmentDate < new Date()) {
      newErrors.appointmentDate = "Appointment date cannot be in the past"
    } else if (appointmentDate > addDays(new Date(), 365)) {
      newErrors.appointmentDate =
        "Appointment cannot be more than a year in the future"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmittedData({
      appointmentDate,
      followUpDate,
    })
    setIsSubmitting(false)
  }

  const handleReset = () => {
    setAppointmentDate(new Date())
    setFollowUpDate(undefined)
    setErrors({})
    setSubmittedData(null)
  }

  return (
    <div className="w-full max-w-2xl space-y-6">
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="appointmentDate"
            className="flex items-center gap-2"
          >
            <Clock className="h-4 w-4" />
            Appointment Date & Time
          </Label>
          <DateTimePicker
            id="appointmentDate"
            value={appointmentDate}
            onChange={(date) => date && setAppointmentDate(date)}
            showTimePicker={true}
            suggestions={[
              "Tomorrow at 9am",
              "Next Monday at 2pm",
              "Next Friday at 10:30am",
              "In 3 days at 3pm",
            ]}
            placeholder="Enter appointment date (e.g., 'next Tuesday at 2pm')"
            className={errors.appointmentDate ? "border-red-500" : ""}
          />
          {errors.appointmentDate && (
            <p className="text-sm text-red-500">{errors.appointmentDate}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="followUpDate">Follow-up Date (Optional)</Label>
          <DateTimePicker
            id="followUpDate"
            value={followUpDate || new Date()}
            onChange={(date) => setFollowUpDate(date)}
            showTimePicker={false}
            suggestions={[
              "In 2 weeks",
              "In 1 month",
              "In 3 months",
              "Next quarter",
            ]}
            placeholder="Enter follow-up date (e.g., 'in 2 weeks')"
          />
        </div>

        <div className="flex gap-4">
          <Button type="submit" disabled={isSubmitting} className="flex-1">
            {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
          </Button>
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>

      {submittedData && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg space-y-2">
          <h3 className="font-semibold text-green-800">
            Appointment Scheduled!
          </h3>
          <div className="space-y-1 text-sm">
            <div>
              <strong>Appointment:</strong>{" "}
              {submittedData.appointmentDate.toLocaleString()}
            </div>
            {submittedData.followUpDate && (
              <div>
                <strong>Follow-up:</strong>{" "}
                {submittedData.followUpDate.toLocaleDateString()}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
