'use client'

import { useEffect, useState } from 'react'
import { addDays, format, startOfWeek } from 'date-fns'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export interface Service {
  id: string
  name: string
  price: number
  duration: number
}

export interface Staff {
  id: string
  name: string
  title: string
  avatar: string
}

export interface TimeSlot {
  date: string
  slots: string[]
}

const services: Service[] = [
  { id: 'muay-thai', name: 'Muay Thai', price: 45, duration: 60 },
  { id: 'female-cut', name: 'Female Haircut', price: 45, duration: 60 },
  { id: 'massage', name: 'Back Massage', price: 700, duration: 60 }
]

const staffList: Staff[] = [
  {
    id: 'larry',
    name: 'Coach Larry',
    title: 'Muay Thai/Striking Coach',
    avatar: '/_static/face.png'
  }
]

/**
 * Define custom time slots per weekday (0 = Sunday, 6 = Saturday)
 */
const customSlotsByDay: Record<number, string[]> = {
  0: ['08:00 am'], // Sunday — no slots
  1: ['07:00 am', '08:00 am'], // Monday
  2: ['07:00 am', '08:00 am'], // Tuesday
  3: ['Off Day'], // Wednesday
  4: ['07:00 am', '08:00 am'], // Thursday
  5: ['Off Day'], // Friday
  6: ['08:00 am'] // Saturday
}

export function generateTimeSlots(startDate: Date, weeks = 2): TimeSlot[] {
  const slotData: TimeSlot[] = []
  const weekStart = startOfWeek(startDate, { weekStartsOn: 1 })

  for (let week = 0; week < weeks; week++) {
    for (let day = 0; day < 7; day++) {
      const date = addDays(weekStart, week * 7 + day)
      const iso = format(date, 'yyyy-MM-dd')
      const weekday = date.getDay()
      const slots = customSlotsByDay[weekday] || []
      slotData.push({ date: iso, slots })
    }
  }

  return slotData
}

function ServiceSidebar({
  selectedService,
  selectedStaff,
  onSelectStaff
}: {
  selectedService: Service
  selectedStaff: string
  onSelectStaff: (id: string) => void
}) {
  return (
    <div className='w-ful border-4l'>
      <h2 className='text-lg font-semibold'>Class Schedule</h2>
      <div>
        {/* <p className='text-base font-medium'>{selectedService.name}</p> */}
        {/* <p className='mt-2 flex items-center gap-2 text-sm text-muted-foreground'>
          <span>{selectedService.duration} min</span>
          <span className='text-foreground'>${selectedService.price}</span>
          <a href='#' className='ml-auto text-primary underline'>
            Change
          </a>
        </p> */}
      </div>
      <div>
        {/* <h3 className='font-medium'>Choose Your Provider</h3> */}
        <RadioGroup
          value={selectedStaff}
          onValueChange={onSelectStaff}
          className='mt-4 grid gap-3'
        >
          {staffList.map((staff) => {
            const isSelected = selectedStaff === staff.id
            return (
              <Label
                key={staff.id}
                htmlFor={staff.id}
                className={cn(
                  `relative flex items-center gap-4 rounded-lg border p-4`,
                  isSelected && 'border-primary'
                )}
              >
                <RadioGroupItem
                  value={staff.id}
                  id={staff.id}
                  className='absolute right-2 top-2 h-9 w-9'
                />
                <Avatar className='bg-muted'>
                  <AvatarImage src={staff.avatar} alt={staff.name} />
                </Avatar>
                <div className='grid gap-1'>
                  <div className='text-sm/none font-medium'>{staff.name}</div>
                  <div className='text-xs text-muted-foreground'>
                    {staff.title}
                  </div>
                </div>
              </Label>
            )
          })}
        </RadioGroup>
      </div>
    </div>
  )
}

export default function BookingSection() {
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 })
  const [currentWeekStartDate, setCurrentWeekStartDate] =
    useState<Date>(weekStart)
  const [selectedService] = useState<Service>(services[0])
  const [selectedStaff, setSelectedStaff] = useState<string>(staffList[0].id)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [dummySlots, setDummySlots] = useState<TimeSlot[]>([])

  useEffect(() => {
    const generated = generateTimeSlots(new Date())
    setDummySlots(generated)
  }, [])

  const days = Array.from({ length: 7 }).map((_, i) =>
    addDays(currentWeekStartDate, i)
  )

  function handleDateSelect(date: Date) {
    const newStart = startOfWeek(date, { weekStartsOn: 1 })
    setCurrentWeekStartDate(newStart)
    setPopoverOpen(false)
  }

  return (
    <section className='py-16 lg:py-32'>
      <div className='mx-auto w-full max-w-2xl px-6 lg:max-w-7xl'>
        <div className='relative flex flex-col gap-8 lg:flex-row'>
          <div className='flex flex-1 flex-col'>
            <div className='flex items-center justify-between'>
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button size='sm' variant='ghost'>
                    {format(days[0], 'MMM d')}–{format(days[6], 'd, yyyy')}{' '}
                    <ChevronDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align='start'>
                  <Calendar
                    mode='single'
                    required
                    selected={currentWeekStartDate}
                    onSelect={(date) => date && handleDateSelect(date)}
                  />
                </PopoverContent>
              </Popover>

              <div className='flex items-center gap-2'>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() =>
                    setCurrentWeekStartDate((prev) => addDays(prev, -7))
                  }
                >
                  <ChevronLeft />
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() =>
                    setCurrentWeekStartDate((prev) => addDays(prev, 7))
                  }
                >
                  <ChevronRight />
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button size='sm' variant='outline' className='lg:hidden'>
                      Details
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align='end'>
                    <ServiceSidebar
                      selectedService={selectedService}
                      selectedStaff={selectedStaff}
                      onSelectStaff={setSelectedStaff}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className='mt-4 grid flex-1 grid-cols-7 overflow-hidden rounded-xl border'>
              {days.map((date) => {
                const dayStr = format(date, 'EEE')
                const dateIso = format(date, 'yyyy-MM-dd')
                const times =
                  dummySlots.find((s) => s.date === dateIso)?.slots || []
                return (
                  <div
                    key={dateIso}
                    className='bg-muted/50 [&:not(:last-child)]:border-r'
                  >
                    <div className='flex flex-col items-center gap-1 p-4 text-sm'>
                      <div>{dayStr}</div>
                      <div>{format(date, 'd')}</div>
                    </div>
                    <div className='grid gap-2 p-0.5 sm:p-2'>
                      {times.map((time) => (
                        <Button
                          key={time}
                          variant='outline'
                          className='px-0 text-xs sm:text-sm'
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <Card className='w-84 hidden shadow-none lg:block'>
            <CardContent>
              <ServiceSidebar
                selectedService={selectedService}
                selectedStaff={selectedStaff}
                onSelectStaff={setSelectedStaff}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
