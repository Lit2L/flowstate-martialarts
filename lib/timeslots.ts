import { addDays, format } from 'date-fns'

// utils/timeslots.ts
export const TIME_SLOTS = [
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00'
]

export const WEEKLY_AVAILABILITY: Record<string, boolean> = {
  Monday: true,
  Tuesday: true,
  Wednesday: false,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: false
}

export interface TimeSlot {
  date: string
  slots: string[]
}

export function generateTimeSlots(startDate: Date, daysAhead = 14): TimeSlot[] {
  const slots: TimeSlot[] = []
  for (let i = 0; i < daysAhead; i++) {
    const date = addDays(startDate, i)
    const dayName = format(date, 'EEEE') // e.g., 'Monday'
    const iso = format(date, 'yyyy-MM-dd')
    const isOpen = WEEKLY_AVAILABILITY[dayName]
    slots.push({
      date: iso,
      slots: isOpen ? [...TIME_SLOTS] : []
    })
  }
  return slots
}
