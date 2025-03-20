// components/ReferralSubmissionForm.tsx
'use client'

import React, { useState } from 'react'
import { useProspects } from '@/lib/hooks/useProspect'
import { ProspectData } from '@/lib/types'

import InputField from '@/components/ui/inputs/InputField'
import PhoneNumberField from '@/components/ui/inputs/PhoneNumberField'
import NotesField from '@/components/ui/inputs/NotesField'
import ReferralTypeSelect from '@/components/ui/inputs/ReferralTypeSelect'
import ContactMethodSelect from '@/components/ui/inputs/ContactMethodSelect'
import EmailConfirmationField from '@/components/ui/inputs/EmailConfirmationField'
import WeekdayAvailabilitySelect from '@/components/ui/inputs/WeekdayAvailabilitySelect'
import PreferredTimesSelect from '@/components/ui/inputs/PreferredTimesSelect'

export default function ReferralSubmissionForm() {
  const { addProspect } = useProspects()

  const [formData, setFormData] = useState<ProspectData>({
    name: '',
    phone: '',
    email: '',
    notes: '',
    referralType: 'appointment', // default, or 'contact'
    contactMethod: undefined,
    emailConfirmation: '',
    goodDays: [],
    bestTimes: [],
  })

  function handleChange<K extends keyof ProspectData>(key: K, value: ProspectData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Basic validations:
    if (formData.referralType === 'contact') {
      if (formData.contactMethod === 'email') {
        // ensure emails match
        if (formData.email !== formData.emailConfirmation) {
          alert("Emails don't match!")
          return
        }
      }
      if (formData.contactMethod === 'phone') {
        // ensure bestTimes has at least one selection
        if (!formData.bestTimes || formData.bestTimes.length === 0) {
          alert('Please select at least one time to call.')
          return
        }
      }
    }

    // Submit to Firestore
    try {
      await addProspect(formData)
      alert('Prospect submitted successfully!')
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        notes: '',
        referralType: 'appointment',
        contactMethod: undefined,
        emailConfirmation: '',
        goodDays: [],
        bestTimes: [],
      })
    } catch (error) {
      console.error('Error submitting prospect:', error)
      alert('There was an error submitting the prospect.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-3xl my-6 mx-auto p-10 flex flex-col items-center gap-8 bg-slate-950
                 border border-blue-500 rounded-2xl shadow-2xl'
    >
      <h2 className='text-xl font-bold text-sky-100'>
        Enter Contact Information
      </h2>

      {/* Basic Info */}
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
      />

      {/* Appointment vs Contact */}
      <ReferralTypeSelect
        value={formData.referralType}
        onChange={(val) => handleChange('referralType', val)}
      />

      {formData.referralType === 'contact' && (
        <>
          {/* Contact Method */}
          <ContactMethodSelect
            value={formData.contactMethod}
            onChange={(method) => handleChange('contactMethod', method)}
          />

          {/* If Email: show email confirmation */}
          {formData.contactMethod === 'email' && (
            <EmailConfirmationField
              email={formData.email}
              confirmation={formData.emailConfirmation ?? ''}
              onChange={(val) => handleChange('emailConfirmation', val)}
            />
          )}

          {/* If Phone: show day/time availability */}
          {formData.contactMethod === 'phone' && (
            <>
              <WeekdayAvailabilitySelect
                goodDays={formData.goodDays ?? []}
                onChange={(days) => handleChange('goodDays', days)}
              />
              <PreferredTimesSelect
                bestTimes={formData.bestTimes ?? []}
                onChange={(times) => handleChange('bestTimes', times)}
              />
            </>
          )}
        </>
      )}

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
