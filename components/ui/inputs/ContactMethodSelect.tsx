// components/ui/inputs/ContactMethodSelect.tsx
import React from 'react'
import { ContactMethod } from '@/lib/types'

interface ContactMethodSelectProps {
  value?: ContactMethod
  onChange: (value: ContactMethod) => void
}

export default function ContactMethodSelect({
  value,
  onChange,
}: ContactMethodSelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as ContactMethod)
  }

  return (
    <div className='flex flex-col gap-1 my-4'>
      <label htmlFor='contactMethod' className='text-sky-200'>
        Preferred Contact Method
      </label>
      <select
        id='contactMethod'
        name='contactMethod'
        value={value || ''}
        onChange={handleChange}
        className='border rounded px-3 py-2 text-yellow-50 cursor-pointer focus:bg-blue-950 focus:outline-none focus:ring focus:border-blue-300'
      >
        <option value='' disabled>
          --Select--
        </option>
        <option value='email'>Email</option>
        <option value='phone'>Phone</option>
      </select>
    </div>
  )
}
