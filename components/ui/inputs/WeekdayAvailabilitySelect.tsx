// components/ui/inputs/WeekdayAvailabilitySelect.tsx
import React from 'react'

// A simple array of days
const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

interface WeekdayAvailabilitySelectProps {
  goodDays: string[]
  onChange: (newGoodDays: string[]) => void
}

export default function WeekdayAvailabilitySelect({
  goodDays,
  onChange,
}: WeekdayAvailabilitySelectProps) {
  const handleCheckboxChange = (day: string) => {
    // If already included, remove it; otherwise add it
    if (goodDays.includes(day)) {
      onChange(goodDays.filter((d) => d !== day))
    } else {
      onChange([...goodDays, day])
    }
  }

  return (
    <div className='flex flex-col gap-1 my-4'>
      <p className='text-sky-200 mb-4'>Which days are good to call?</p>
      <div className='flex flex-wrap gap-4'>
        {DAYS_OF_WEEK.map((day) => {
          const checked = goodDays.includes(day)
          return (
            <div key={day} className='flex items-center gap-2'>
              <label
                key={day}
                className=' relative flex items-center gap-4 py-2 px-4 bg-sky-950 border border-sky-400 rounded-4xl text-yellow-50'
              >
                {day}
                <span className='relative grid items-center'>
                <input
                  type='checkbox'
                  checked={checked}
                  onChange={() => handleCheckboxChange(day)}
                  className='peer relative appearance-none shrink-0 mr-2 w-8 h-8 border border-sky-400 bg-blue-200 checked:bg-sky-300 checked:border-0 rounded cursor-pointer'
                />
                <svg
                  className='
                absolute
                w-16 h-16 
                transform 
                hidden peer-checked:block
               
                stroke-rose-800
                pointer-events-none
                bottom-0 right-0 translate-x-2/5 translate-y-1/2
                '
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 50 50'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='4'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <polyline points='20 6 9 17 4 12'></polyline>
                </svg>

                </span>
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
