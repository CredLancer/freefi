"use client"

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

import { createPublicClient, createWalletClient, custom, http } from 'viem'
import { mainnet, polygonMumbai,avalancheFuji } from 'viem/chains'

import { wagmiAbi } from '../abi/abi'


export default function RequestLoanSection() {

  const router = useRouter();
  const [stepOneComplete, setStepOneComplete] = React.useState(false);
  const [credentialAddress, setcredentialAddress] = React.useState('')
  const [contractAddress, setContractAddress] = React.useState('')
  const [loanAmountArray, setLoanAmountArray] = React.useState([0]);
  const [loanAmount, setLoanAmount] = React.useState(0);


  const walletClient = createWalletClient({
    chain: avalancheFuji,
    transport: custom((window as any).ethereum)
  })

  const sectionAction = () => {
    console.log("Validate inputs ");
    //router.push("/submit");
    if (credentialAddress !== '' && contractAddress !== '') {
      setStepOneComplete(true);
    } else {
        // error message
    }
  };

  const goDashboardAction = () => {
    console.log("Request Loan Action");
    //router.push("/dashboard");
    setLoanAmount(loanAmountArray[0]);
    console.log(credentialAddress);
    console.log(contractAddress);
    console.log(loanAmount);
    // Call the Smart Contract in Avax
    ProceessBorrowerRequest();
  };

    const ProceessBorrowerRequest = async () => {
    const [account] = await walletClient.getAddresses();

    await walletClient.writeContract({
      address: "0xddB6BA183a73a6418eDa8a0feb812ED57116Aa3e",
      abi: wagmiAbi,
      functionName: 'borrow',
      args: [credentialAddress as `0x${string}`, contractAddress  as `0x${string}`, loanAmount as unknown as bigint],
      account: account,
      chain: avalancheFuji
    }).then((result) => {
      console.log(result);
        router.push("/dashboard");
    }).catch((error) => {
      console.log(error);
    });

  };


  return (
    <>
    {!stepOneComplete && (
        <div key="1" className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-4">Apply for the Loan</h1>
        <p className="text-center mb-8">Complete the 2 steps to apply for the loan</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow rounded w-full">
            <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="credential-vault-address">
                Add Credential vault address *
            </label>
            <input
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md border-2 h-10 p-1"
                placeholder="Pepe.SuperLancers.ID"
                type="text"
                onChange={e => setcredentialAddress(e.target.value)}
            />
            </div>
        </div>
        <div className="bg-white p-6 shadow rounded">
            <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="contract-address">
                Add Contract address
            </label>
            <input
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md border-2 h-12 p-1"
                placeholder="Paste credential vault address"
                type="text"
                onChange={e => setContractAddress(e.target.value)}
            />
            </div>
        </div>
        </div>
        <div className="mt-6 flex justify-center">
        <Button 
        className="bg-[#CEFB7B] hover:bg-[#DAFB9D] text-black rounded-md transition-colors duration-200"
        onClick={ () => sectionAction()}>
            Apply Now
        </Button>
        </div>
    </div>
    )}
    {stepOneComplete && (
        <div className="text-black bg-white py-32 px-8">

        <h1 className="text-3xl font-bold text-center mb-6">Congratulations! 🎉</h1>
        
        <div className="flex justify-center space-x-4">
        <div className="rounded-lg p-6 w-96">

            <div>
                <p className="text-lg mb-2 text-center">Your skill match score is</p>
                <div className="text-5xl font-bold text-purple-500 mb-4 text-center md:text-center">75%</div>
                <div className="relative pt-1">

                <div className="flex justify-between text-xs px-2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>$ {loanAmount}</span>
                </div>
                <Slider className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200"
                step={100}
                max={20000}
                onValueChange={e => {
                    setLoanAmountArray(e)
                    setLoanAmount(e[0]);
                }}>
                </Slider>
                <div className="flex justify-between text-xs px-2">
                    <span>0</span>
                    <span>5000</span>
                    <span>10000</span>
                    <span>15000</span>
                    <span>20000</span>
                </div>

            </div>
            <p className="text-sm italic mt-8">Your limit is determined by work, contract and escrows</p>

            </div>          

        </div>
        <div className="rounded-lg p-6 w-96 justify-center items-center">
            <div className="px-8">
            <p className="mt-8 mb-4 font-semibold text-center md:text-left">Would you like to submit?</p>
            <div className="flex justify-center md:justify-start">
                <Button 
                className="bg-[#CEFB7B] hover:bg-[#DAFB9D] text-black rounded-md font-bold py-2 px-4 mr-2"
                onClick={ () => goDashboardAction()}>
                Yes
                </Button>
                <Button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                No, I want more
                </Button>
            </div>
            </div>
        </div>
        </div>
    </div>

    )}
    </>
  )
}

