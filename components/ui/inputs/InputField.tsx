// components/form/InputField.tsx
import React from 'react'

interface InputFieldProps {
  label: string
  name: string
  type?: React.InputHTMLAttributes<unknown>['type']
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

export default function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
}: InputFieldProps) {
  return (
    <div className='flex flex-col gap-1 my-4'>
      <label htmlFor={name} className='text-sky-200'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className='w-full my-1 px-3 py-2 border rounded text-yellow-50
                   focus:outline-none focus:ring-4 focus:border-blue-500 focus:bg-blue-950'
      />
    </div>
  )
}
