"use client"

import GetStartedButtonSection from "./get-started-button-section";

export default function ApplyForLoanSection() {

  return (
    <div className="text-black bg-white py-32 px-8">
      <h2 className="text-5xl font-bold text-center mb-12">Apply for a loan <br/>in 2 simple steps</h2>
      <div className="flex justify-center space-x-4">
        <div className="bg-[#333] text-white rounded-lg p-6 w-96">
          <h3 className="text-purple-500 text-6xl font-bold mb-4">1</h3>
          <h4 className="text-xl font-semibold mb-2">Your Skill Credentials</h4>
          <p className="text-sm">
            We will determine your Skill Capital based on the quantity of verified skill markers in your vault.
          </p>
        </div>
        <div className="bg-[#333] text-white rounded-lg p-6 w-96">
          <h3 className="text-purple-500 text-6xl font-bold mb-4">2</h3>
          <h4 className="text-xl font-semibold mb-2">Your Work Contracts</h4>
          <p className="text-sm">
            We will scan your open work contracts and determine your limit based on escrow amount.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <GetStartedButtonSection />
      </div>
    </div>
  )
}

