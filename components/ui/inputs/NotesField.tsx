// components/ui/inputs/NotesField.tsx
import React from 'react'

interface NotesFieldProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
}

export default function NotesField({
  label,
  name,
  value,
  onChange,
  required = false,
}: NotesFieldProps) {
  return (
    <div className='flex flex-col gap-1 my-4'>
      <label htmlFor={name} className='text-sky-200'>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className='w-full my-1 px-3 py-2 border rounded focus:bg-blue-950 text-yellow-100
                   focus:outline-none focus:ring focus:border-blue-300'
      />
    </div>
  )
}
