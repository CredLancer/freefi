"use client"
import GetStartedButtonSection from "./get-started-button-section";

export default function HeroSection() {

  return (
    <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 pt-[200px] pb-[150px] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4 leading-snug">FreedFi</h1>
      <h1 className="text-7xl font-bold mb-4 leading-snug  max-w-4xl">
        "Super charge your Future with Talent-backed Loans"
      </h1>
      <p className="mb-12 text-xl leading-snug max-w-4xl">
        Join FreedFi and put the freedom back in Freelancing. Take control of your financial future like never before. Trust Credentials and Skill Capital are the tools for your success. We´re here to help you wield them effectively.
      </p>
      <GetStartedButtonSection />
    </div>
  )
}

