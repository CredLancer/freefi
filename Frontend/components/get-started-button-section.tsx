"use client"

import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function GetStartedButtonSection() {

    const router = useRouter();
    const { isConnected, address } = useAccount();
    const { openConnectModal } = useConnectModal();

    const buttonAction = () => {
    router.push("/purpose");  
    };

    return (
    <> 
        { isConnected && (
        <Button 
        className="bg-[#CEFB7B] hover:bg-[#DAFB9D] text-black rounded-md transition-colors duration-200"
        onClick={ () => buttonAction()}>
            Get Started
        </Button>
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

