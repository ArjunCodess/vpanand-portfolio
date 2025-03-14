import Header from "../components/header"
import MainLayout from "../components/main-layout"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] text-black scroll-smooth">
      {/* Navigation */}
      <Header />
      
      <main className="max-w-6xl mx-auto px-8 py-16">
        <MainLayout />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}