// components/form/PhoneNumberField.tsx
import React from 'react'

interface PhoneNumberFieldProps {
  label: string
  name: string
  value: string
  onChange: (newValue: string) => void
  required?: boolean
}

function formatPhoneNumber(digits: string) {
  const cleaned = digits.replace(/\D/g, '')
  const len = cleaned.length

  if (len < 4) return cleaned
  if (len < 7) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`
  }

  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
    6,
    10
  )}`
}

export default function PhoneNumberField({
  label,
  name,
  value,
  onChange,
  required = false,
}: PhoneNumberFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawDigits = e.target.value.replace(/\D/g, '')

    onChange(rawDigits)
  }

  const displayValue = formatPhoneNumber(value)

  return (
    <div className='flex flex-col gap-1 my-4'>
      <label htmlFor={name} className='text-sky-200'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type='tel'
        value={displayValue}
        onChange={handleChange}
        required={required}
        className='w-full my-1 px-3 py-2 border rounded text-yellow-50
                   focus:outline-none focus:ring-4 focus:border-blue-400 focus:bg-blue-950'
      />
    </div>
  )
}
