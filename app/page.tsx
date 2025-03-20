import ReferralSubmissionForm from "@/components/ui/forms/ReferralSubmissionForm";


export default function Home() {
  return (
    <div className='mt-10 h-dvh flex flex-col justify-center items-center gap-6 '>
      <h1 className='text-4xl font-bold text-center text-yellow-100 uppercase'>
        Joel&apos;s referral tracker
      </h1>
      <ReferralSubmissionForm />
    </div>
  )
}
