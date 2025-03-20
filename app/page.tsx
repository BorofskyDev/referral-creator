import ReferralSubmissionForm from "@/components/ui/forms/ReferralSubmissionForm";


export default function Home() {
  return (
    <div className=' h-dvh px-6 py-8 '>
      <h1 className='mb-10 text-4xl font-bold text-center text-yellow-100 uppercase'>
        Joel&apos;s referral tracker
      </h1>
      <ReferralSubmissionForm />
    </div>
  )
}
