"use client"

import InkBlotCarousel from "@/components/ui/ink-blot-carousel"

export default function DemoPhotos() {
  return (
    <InkBlotCarousel
      autoplay={2600}
      duration={1400}
      slides={[
        {
          image: "/images/couple/beach-sitting.jpg",
          title: "Shoreline Whispers",
          caption: "Tender moments by the tranquil waves of the Kerala coast.",
        },
        {
          image: "/images/couple/beach-lift.png",
          title: "Joy & Laughter",
          caption: "Unfiltered joy and pure celebration of our love.",
        },
        {
          image: "/images/couple/beach-portrait-bw.png",
          title: "Timeless Devotion",
          caption: "An embrace of quiet grace and enduring promises.",
        },
        {
          image: "/images/couple/beach-ring-hands.png",
          title: "Forever Begins",
          caption: "Hand in hand, stepping into a lifetime of togetherness.",
        },
      ]}
    />
  )
}
