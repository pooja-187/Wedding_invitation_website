"use client"

import PolaroidLineCarousel from "@/components/ui/polaroid-line-carousel"

export default function PolaroidDemo() {
  return (
    <PolaroidLineCarousel
      background="#F8F3E9"
      ink="#392B2A"
      string="#8A6B5F"
      cardWidth={330}
      slides={[
        {
          image: "/images/couple/couple-1.jpg",
          title: "Where It Began",
          caption: "A quiet morning walk in the summer meadow.",
        },
        {
          image: "/images/couple/couple-2.jpg",
          title: "Golden Hour",
          caption: "Sunlit warmth and tender smiles.",
        },
        {
          image: "/images/couple/couple-3.jpg",
          title: "Our First Dance",
          caption: "Twirling under the golden Kerala sunset.",
        },
        {
          image: "/images/couple/couple-4.jpg",
          title: "By the Backwaters",
          caption: "Tranquil dockside afternoon in Kumarakom.",
        },
        {
          image: "/images/couple/couple-5.jpg",
          title: "Pure Joy",
          caption: "Laughter in the sun-drenched wildflower fields.",
        },
        {
          image: "/images/couple/couple-2.jpg",
          title: "Forever & Always",
          caption: "Ready for a lifetime together as one.",
        },
      ]}
    />
  )
}
