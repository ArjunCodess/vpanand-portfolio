import MainLayout from "../components/main-layout"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] text-black scroll-smooth">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <MainLayout />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}