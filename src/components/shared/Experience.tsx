const YEAR_I_STARTED_PROGRAMMING = 2018

export default function Experience() {
  const yearsOfExperience = new Date().getFullYear() - YEAR_I_STARTED_PROGRAMMING
  return (<span className="text-yellow-500 italic font-bold">
    +{yearsOfExperience} years of experience
  </span>
  )
}