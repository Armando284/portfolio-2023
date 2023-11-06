import React from "react";

const YEAR_I_STARTED_PROGRAMMING = 2019

export default function Experience(){
  const yearsOfExperience = new Date().getFullYear() - YEAR_I_STARTED_PROGRAMMING
  return ( <span className="text-purple-700 italic font-bold">
            {yearsOfExperience} years of experience.
          </span>
        )
}