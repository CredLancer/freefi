import Image from 'next/image'
import { Button } from "@/components/ui/button"
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-between p-24">
    //   <div className="items-center justify-center">
    //     <ConnectButton />
    //     </div>     
    //     <br />
    //     <div className="items-center justify-center">
    //     <Button>Click me</Button>
    //   </div>
    // </main>
      <HeroSection />    
      )
}
