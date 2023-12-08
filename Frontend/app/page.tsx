import Image from 'next/image'
import { Button } from "@/components/ui/button"
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import HeroSection from '@/components/hero-section';
import HowWorksSection from '@/components/how-works-section';
import App from 'next/app';
import ApplyForLoanSection from '@/components/apply-for-loan-section';
import DisclaimerSection from '@/components/disclaimer-section';
import FooterSection from '@/components/footer-section';
import HeaderLandingSection from '@/components/header-landing-section';

export default function Home() {
  return (
    <>
      <HeaderLandingSection />
      <HeroSection />
      <HowWorksSection />
      <ApplyForLoanSection />
      <DisclaimerSection />
      <FooterSection />
      </>
      )
}
