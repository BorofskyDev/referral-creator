// components/ui/inputs/EmailConfirmationField.tsx
import React from 'react'

interface EmailConfirmationFieldProps {
  email: string // the original email
  confirmation: string
  onChange: (value: string) => void
}

export default function EmailConfirmationField({
  email,
  confirmation,
  onChange,
}: EmailConfirmationFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const isMatch = email === confirmation && email !== ''

  return (
    <div className='flex flex-col gap-1 my-4'>
      <label htmlFor='emailConfirmation' className='text-sky-200'>
        Confirm Email
      </label>
      <input
        type='email'
        id='emailConfirmation'
        name='emailConfirmation'
        value={confirmation}
        onChange={handleChange}
        className='border rounded px-3 py-2 text-yellow-50 focus:bg-blue-950 focus:outline-none focus:ring-4 focus:border-blue-300'
      />
      {!isMatch && confirmation.length > 0 && (
        <p className='text-red-400 text-sm'>Email does not match!</p>
      )}
    </div>
  )
}
