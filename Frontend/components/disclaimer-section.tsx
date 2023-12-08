"use client"

import GetStartedButtonSection from "./get-started-button-section";

export default function DisclaimerSection() {

  return (
    <div className="bg-[#f8f9fa] py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-8">Disclaimer</h2>
        <p className="mb-8 text-lg">
          FreedFi is not a financial institution and does not provide banking services. LancerCreds is a platform
          that connects freelancers with potential lenders based on trust credentials and skill capital assessments.
          Loan terms and conditions apply.
        </p>
        <div className="flex justify-center mt-12">
          <GetStartedButtonSection />
        </div>
      </div>
    </div>
  )
}

