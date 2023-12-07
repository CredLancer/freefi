import '@rainbow-me/rainbowkit/styles.css';

import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";

export default function HeaderSection() {
  return (
    <div className="px-12 py-6">
        <div className="bg-white rounded-lg flex justify-between items-center px-6 py-4 shadow-sm border-grey border-[1px]">

            <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                    <Link href="/" className="block px-2 py-1 text-lg">
                    Home
                    </Link>
                    <Link href="/purpose" className="block px-2 py-1 text-lg">
                    Dashboard
                    </Link>
                    <Link href="/purpose" className="block px-2 py-1 text-lg">
                    Participate
                    </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">FreeFi</h1>
            </Link>
          </div>

            <nav className="mx-4 flex items-center space-x-2 lg:space-x-4 hidden md:block">
              <Button asChild variant="ghost">
                  <Link href="/" className="text-sm font-medium transition-colors">
                      Home
                  </Link>
              </Button>
              <Button asChild variant="ghost">
                  <Link href="/purpose" className="text-sm font-medium transition-colors">
                      Dashboard
                  </Link>
              </Button>
              <Button asChild variant="ghost">
                  <Link href="/purpose" className="text-sm font-medium transition-colors">
                      Participate
                  </Link>
              </Button>
          </nav>

            <div className="flex items-center">
              <div className="hidden lg:block">
                <ConnectButton />
              </div>
              <div className="lg:hidden ">
                <ConnectButton showBalance={false} chainStatus="none"/>
              </div>
            </div>
        </div>
    </div>
  )
}

