// components/ui/inputs/ReferralTypeSelect.tsx
import React from 'react'
import { ReferralType } from '@/lib/types'

interface ReferralTypeSelectProps {
  value: ReferralType
  onChange: (value: ReferralType) => void
}

export default function ReferralTypeSelect({
  value,
  onChange,
}: ReferralTypeSelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as ReferralType)
  }

  return (
    <div className='flex flex-col gap-1 my-4'>
      <label htmlFor='referralType' className='text-sky-200'>
        Referral Type
      </label>
      <select
        id='referralType'
        name='referralType'
        value={value}
        onChange={handleChange}
        className='border rounded px-4 py-2 text-yellow-50 cursor-pointer focus:outline-none focus:ring focus:border-blue-300 focus:bg-blue-950'
      >
        <option value='appointment'>Appointment</option>
        <option value='contact'>Contact</option>
      </select>
    </div>
  )
}
