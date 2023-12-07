import { JSX, SVGProps } from "react"


export default function HowWorksSection() {
    return (
      <div className="bg-[#2c2541] text-white">
        <div className="container mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-16">How FreeFi Works for You</h2>
          <div className="flex justify-between">
            <div className="w-1/3 px-4">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-4 bg-[#6e42a5] rounded-full">
                  <ShieldCheckIcon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trust Credentials</h3>
                <p>
                  Your trust credentials are your badge of honor. They open doors to opportunities you've only dreamed of
                  and showcase your financial integrity.
                </p>
              </div>
            </div>
            <div className="w-1/3 px-4">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-4 bg-[#6e42a5] rounded-full">
                  <LockIcon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Privacy and Security</h3>
                <p>
                  Your financial information is safe with us. LancerCreds values your privacy and ensures that your
                  personal finances remain confidential.
                </p>
              </div>
            </div>
            <div className="w-1/3 px-4">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-4 bg-[#6e42a5] rounded-full">
                  <BarChartIcon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Skill Capital Assessment</h3>
                <p>
                  We understand your unique skills and expertise, allowing us to tailor financial solutions that suit your
                  individual needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function BarChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
    )
  }
  
  
  function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
  
  
  function ShieldCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
  