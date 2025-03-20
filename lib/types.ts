// lib/types.ts (optional)
export type ReferralType = 'appointment' | 'contact'
export type ContactMethod = 'phone' | 'email'


export interface ProspectData {
  name: string
  phone: string 
  email: string
  notes: string
  referralType: ReferralType
  contactMethod?: ContactMethod


  emailConfirmation?: string

 
  goodDays?: string[] 
  bestTimes?: string[] 
}
