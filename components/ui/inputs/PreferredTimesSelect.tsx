// components/ui/inputs/PreferredTimesSelect.tsx
import React from 'react'

const TIME_BLOCKS = ['Morning', 'Afternoon', 'Evening']

interface PreferredTimesSelectProps {
  bestTimes: string[]
  onChange: (newTimes: string[]) => void
}

export default function PreferredTimesSelect({
  bestTimes,
  onChange,
}: PreferredTimesSelectProps) {
  const handleCheckboxChange = (block: string) => {
    if (bestTimes.includes(block)) {
      onChange(bestTimes.filter((t) => t !== block))
    } else {
      onChange([...bestTimes, block])
    }
  }

  return (
    <div className='flex flex-col gap-4 my-4'>
      <p className='text-sky-200'>Best times to call (select at least one):</p>
      <p className="text-sky-100 text-sm">Morning (8am-11am) | Afternoon (noon-4pm) | Evening (4pm-8pm)</p>
      <div className='flex flex-wrap gap-2'>
        {TIME_BLOCKS.map((block) => {
          const checked = bestTimes.includes(block)
          return (
            <label
              key={block}
              className=' relative flex items-center gap-4 py-2 px-4 bg-sky-950 border border-sky-400 rounded-4xl text-yellow-50'
            >
              <span className='relative grid items-center'>
                <input
                  type='checkbox'
                  checked={checked}
                  onChange={() => handleCheckboxChange(block)}
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

              {block}
            </label>
          )
        })}
      </div>
      {/* Example validation feedback: */}
      
      {bestTimes.length === 0 && (
        <p className='text-red-200 text-sm'>Please select at least one time.</p>
      )}
    </div>
  )
}
