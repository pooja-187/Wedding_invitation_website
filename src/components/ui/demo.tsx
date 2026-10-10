"use client"

import InkBlotCarousel from "@/components/ui/ink-blot-carousel"

export default function DemoPhotos() {
  return (
    <InkBlotCarousel
      autoplay={4500}
      duration={1000}
      slides={[
        {
          image: "/images/couple/couple-4.jpg",
          title: "Backwater Serenity",
          caption: "Golden hour sunset by the tranquil waters of Kumarakom.",
        },
        {
          image: "/images/couple/couple-2.jpg",
          title: "Golden Moments",
          caption: "Tender connection under the warm Kerala evening glow.",
        },
        {
          image: "/images/couple/couple-3.jpg",
          title: "Golden Hour Dance",
          caption: "Twirling freely beneath the radiant sunset rays.",
        },
        {
          image: "/images/couple/couple-5.jpg",
          title: "Sunlit Meadow",
          caption: "Joy and laughter in the sun-drenched flower fields.",
        },
        {
          image: "/images/couple/couple-1.jpg",
          title: "Hand in Hand",
          caption: "Walking together towards forever in love.",
        },
        {
          image: "/images/couple/couple-4.jpg",
          title: "Alisha & Alex",
          caption: "Celebrating our new journey in God's Own Country.",
        },
      ]}
    />
  )
}
