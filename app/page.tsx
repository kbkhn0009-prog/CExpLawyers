import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { PracticesGrid } from "@/components/sections/PracticesGrid"
import { AboutLawyers } from "@/components/sections/AboutLawyers"
import { TrustBar } from "@/components/sections/TrustBar"
import { FAQSchema } from "@/components/sections/FAQSchema"
import { AILawyerWidget } from "@/components/ui/AILawyerWidget"
import dynamic from "next/dynamic"

const SocialProof = dynamic(() => import("@/components/sections/SocialProof").then(mod => ({ default: mod.SocialProof })))

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <PracticesGrid />
        <AboutLawyers />
        <SocialProof />
        <FAQSchema />
      </main>
      <Footer />
      <AILawyerWidget />
    </>
  )
}

