import FooterSectionWhite from "@/components/footer-section-white"
import HeaderSection from "@/components/header-section"
import RequestLoanSection from "@/components/request-loan";

export default function Page() {
    return (
        <>
            <HeaderSection />
            <div className="min-h-viewport-minus-sections">
                <RequestLoanSection />
            </div>
            <FooterSectionWhite />
        </>
    )
  }