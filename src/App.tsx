import DemoPhotos from "@/components/ui/demo"
import LycorisSpecimen from "@/components/ui/lycoris-specimen"
import PolaroidDemo from "@/components/ui/polaroid-demo"

export default function App() {
  return (
    <main className="w-full min-h-screen bg-[#F8F3E9] text-[#392B2A] antialiased selection:bg-[#800D28]/15 selection:text-[#800D28]">
      {/* 1. Hero Section: Ink Blot Carousel */}
      <section className="w-full relative">
        <DemoPhotos />
      </section>

      {/* 2. Main Kerala Wedding Experience: 3D Spider Lily Specimen */}
      <section className="w-full relative">
        <LycorisSpecimen
          name="Alisha & Alex"
          weddingDate="Sunday, December 28, 2026"
          muhurtham="Muhurtham · 10:30 AM – 11:45 AM"
          venue="The Grand Lawn, Kumarakom Lake Resort"
          location="Kottayam, Kerala, India"
          invitationMessage="Together with their families, request the honour of your presence at their wedding ceremony"
          sadhya="Traditional Kerala Sadhya Feast · 1:00 PM"
          reception="Evening Reception & Dinner · 6:30 PM"
          rsvp="Kindly RSVP · With Love & Blessings"
        />
      </section>

      {/* Decorative Transition Spacing */}
      <div className="w-full pt-8 pb-2 md:pt-12 md:pb-4 flex items-center justify-center bg-[#F8F3E9]">
        <div className="w-20 md:w-32 h-px bg-[#D5C6AC]/80" />
        <div className="mx-4 text-[#800D28] text-xs tracking-[0.35em] uppercase font-serif">❖ ❖ ❖</div>
        <div className="w-20 md:w-32 h-px bg-[#D5C6AC]/80" />
      </div>

      {/* 3. Last Section: Polaroid Line Carousel */}
      <section className="w-full relative bg-[#F8F3E9] pb-8 md:pb-12">
        <PolaroidDemo />
      </section>
    </main>
  )
}
