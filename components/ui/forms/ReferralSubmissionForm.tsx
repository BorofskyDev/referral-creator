// components/ReferralSubmissionForm.tsx
'use client'

import React, { useState } from 'react'
import { useProspects } from '@/lib/hooks/useProspect'
// Import the new components
import InputField from '@/components/ui/inputs/InputField'
import PhoneNumberField from '@/components/ui/inputs/PhoneNumberField'
import NotesField from '../inputs/NotesField'

export default function ReferralSubmissionForm() {
  const { addProspect } = useProspects()

  // We'll store the "raw" phone digits in phone
  const [formData, setFormData] = useState({
    name: '',
    phone: '', // only digits
    email: '',
    notes: '',
  })

  function handleChange(field: 'name' | 'email' | 'phone' | 'notes', value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      await addProspect(formData)
      alert('Prospect submitted successfully!')
      setFormData({ name: '', phone: '', email: '' , notes:''})
    } catch (error) {
      console.error('Error submitting prospect:', error)
      alert('There was an error submitting the prospect.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='p-10 flex flex-col items-center gap-8
                 border border-blue-500 rounded-2xl shadow-2xl'
    >
      <h2 className='text-xl font-bold text-sky-100'>
        Enter Contact Information
      </h2>

      <InputField
        label='Name'
        name='name'
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
        required
      />

      <PhoneNumberField
        label='Phone'
        name='phone'
        value={formData.phone}
        onChange={(rawDigits) => handleChange('phone', rawDigits)}
        required
      />

      <InputField
        label='Email'
        name='email'
        type='email'
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        required
      />

      <NotesField
      label='Notes'
      name='notes'
      value={formData.notes}
      onChange={(e) => handleChange('notes', e.target.value)}
      required
      />

      <button
        type='submit'
        className='py-2 px-8 border border-blue-400 rounded-lg text-yellow-100
                   transition-all duration-200 hover:shadow-2xl
                   hover:bg-blue-600 hover:text-yellow-50 cursor-pointer'
      >
        Submit Referral
      </button>
    </form>
  )
}
