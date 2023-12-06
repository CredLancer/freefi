
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"

export default function HeaderSection() {
  return (
    <div className="px-12 py-6">
        <div className="bg-white rounded-lg flex justify-between items-center px-6 py-4 shadow-sm border-grey border-[1px]">
            <h1 className="text-xl font-semibold">LancerLoans</h1>
            <div className="flex items-center">
                <Button className="mr-4 rounded-xl" variant="outline">Log Out</Button>
                <Avatar alt="User Avatar" className="bg-green-500" src="/placeholder.svg?height=40&width=40" />
            </div>
        </div>
    </div>
  )
}

