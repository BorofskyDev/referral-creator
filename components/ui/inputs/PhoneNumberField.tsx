// components/form/PhoneNumberField.tsx
import React from 'react'

interface PhoneNumberFieldProps {
  label: string
  name: string
  value: string // store digits only in state, e.g., "5143450192"
  onChange: (newValue: string) => void // pass back digits only
  required?: boolean
}

// Utility function: transform raw digits -> (xxx) xxx-xxxx
function formatPhoneNumber(digits: string) {
  const cleaned = digits.replace(/\D/g, '') // ensure only digits
  const len = cleaned.length

  if (len < 4) return cleaned // up to 3 digits: "514"
  if (len < 7) {
    // (514) 345
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`
  }
  // (514) 345-0192
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
  // We'll store the digits in `value` but display the masked text in the <input>

  // When the user types, we remove non-digits, store them,
  // but set the input's visible value to the formatted version
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.g., user typed "(51" -> remove parentheses -> "51"
    const rawDigits = e.target.value.replace(/\D/g, '')
    // Then we call onChange with just digits
    onChange(rawDigits)
  }

  // The input's 'value' prop shows the masked phone number
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
