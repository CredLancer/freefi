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
        <h1 className="text-4xl font-bold mb-4 leading-snug">FreeFi</h1>
      <h1 className="text-7xl font-bold mb-4 leading-snug">
        Supercharge Your
        <br /> Future with
        <br /> FreeFi
      </h1>
      <p className="mb-12 text-xl leading-snug">
        Join FreeFi and take control of your freelance future like never
        <br /> before. Trust credentials and skill capital are your tools for success,
        <br /> and we're here to help you wield them effectively.{"\n          "}
      </p>
      <Button 
      className="bg-[#CEFB7B] hover:bg-[#DAFB9D] text-black rounded-md transition-colors duration-200"
      onClick={ () => heroAction()}>
        Get Started
      </Button>
    </div>
  )
}

