"use client"

import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function GetStartedButtonHeader() {

  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <> 
        { isConnected && (
            <>
                <div className="hidden lg:block">
                <ConnectButton label="Get Started"/>
                </div>
                <div className="lg:hidden ">
                <ConnectButton showBalance={false} chainStatus="none" label="Get Started"/>
                </div>    
            </>
        )}
        { !isConnected && (
            <Button 
            className="bg-[#CEFB7B] hover:bg-[#DAFB9D] text-black rounded-md transition-colors duration-200"
            onClick={openConnectModal}>
                Get Started
            </Button>            
        )}
    </>    
  )
}

