"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function HeroSection() {

  const router = useRouter();

  const heroAction = () => {
    console.log("Hero Action");
    router.push("/purpose");
  };

  return (
    <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 pt-[200px] pb-[150px] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4 leading-snug">FreedFi</h1>
      <h1 className="text-7xl font-bold mb-4 leading-snug">
        Super charge <br />
        your Future with <br />
        Talent-backed Loans
      </h1>
      <p className="mb-12 text-xl leading-snug">
        Join FreedFi and put the freedom back in Freelancing. Take control of your <br />
        financial future like never before. Trust Credentials and Skill Capital <br />
        are the tools for your success. We´re here to help you wield them effectively.{"\n          "}
      </p>
      <Button 
      className="bg-[#CEFB7B] hover:bg-[#DAFB9D] text-black rounded-md transition-colors duration-200"
      onClick={ () => heroAction()}>
        Get Started
      </Button>
    </div>
  )
}

