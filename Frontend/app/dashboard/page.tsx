import DashboardSection from "@/components/dashboard-section";
import FooterSectionWhite from "@/components/footer-section-white"
import HeaderSection from "@/components/header-section"

export default function Page() {
    return (
        <>
            <HeaderSection />
            <div className="min-h-viewport-minus-sections">
                <DashboardSection />
            </div>
            <FooterSectionWhite />
        </>
    )
  }