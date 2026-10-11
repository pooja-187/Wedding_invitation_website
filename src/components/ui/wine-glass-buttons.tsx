import * as React from "react"
import { MapPin, CalendarPlus, ArrowRight } from "lucide-react"
import { getGoogleCalendarUrl, getGoogleMapsUrl } from "@/config/wedding"

interface WineGlassButtonsProps {
  className?: string
  style?: React.CSSProperties
}

/**
 * Premium Apple iOS-inspired Wine-Red Glassmorphism Buttons
 * Refined horizontal side-by-side layout:
 * - Left: View Location
 * - Right: Add to Calendar
 * - Deep wine red: #681B30
 * - Burgundy shadow: #3D0D1B
 * - Rose-red reflections: #B85C70
 * - Soft ivory highlights: #FFF5EF
 */
export function WineGlassButtons({ className = "", style }: WineGlassButtonsProps) {
  const mapsUrl = getGoogleMapsUrl()
  const calendarUrl = getGoogleCalendarUrl()

  const buttonStyle: React.CSSProperties = {
    background:
      "linear-gradient(180deg, rgba(184, 92, 112, 0.20) 0%, rgba(104, 27, 48, 0.90) 24%, rgba(61, 13, 27, 0.95) 86%, rgba(45, 9, 19, 0.98) 100%)",
    backdropFilter: "blur(14px) saturate(140%)",
    WebkitBackdropFilter: "blur(14px) saturate(140%)",
    border: "1px solid rgba(184, 92, 112, 0.48)",
    borderBottom: "1.5px solid rgba(45, 9, 19, 0.88)",
    boxShadow:
      "inset 0 1.2px 1px 0 rgba(255, 245, 239, 0.65), inset 0 0 12px 0 rgba(184, 92, 112, 0.16), inset 0 -1.5px 2px 0 rgba(40, 8, 17, 0.75), 0 8px 22px -3px rgba(61, 13, 27, 0.35), 0 3px 8px -2px rgba(61, 13, 27, 0.20)",
  }

  const editorialFont: React.CSSProperties = {
    fontFamily: '"Cormorant Garamond", "Garamond", "Georgia", serif',
  }

  return (
    <div
      className={`flex flex-row items-center justify-center w-full max-w-[390px] sm:max-w-[430px] md:max-w-[460px] px-3 sm:px-4 gap-2.5 sm:gap-3.5 mx-auto ${className}`}
      style={style}
    >
      {/* 1. View Location Button (Left) */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Location — Open Google Maps directions to Kumarakom Lake Resort"
        className="group relative flex-1 min-w-0 h-[46px] sm:h-[50px] px-3 sm:px-4 rounded-full flex items-center justify-between cursor-pointer select-none no-underline transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF5EF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#681B30] motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:active:transform-none"
        style={buttonStyle}
      >
        {/* Upper glass light-reflection highlight layer */}
        <div
          aria-hidden
          className="absolute inset-x-2.5 top-[1px] h-[46%] rounded-t-full pointer-events-none transition-opacity duration-300 opacity-80 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 245, 239, 0.30) 0%, rgba(184, 92, 112, 0.12) 48%, rgba(255, 245, 239, 0) 100%)",
          }}
        />

        {/* Left: MapPin Icon Badge */}
        <div className="flex items-center text-[#FFF5EF] shrink-0 z-10">
          <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(255,245,239,0.08)] border border-[rgba(255,245,239,0.22)] shadow-[inset_0_1px_1px_rgba(255,245,239,0.25)] group-hover:scale-105 transition-transform duration-300">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF5EF]" strokeWidth={1.85} />
          </div>
          {/* Vertical Separator */}
          <div className="w-[1px] h-4 sm:h-5 bg-gradient-to-b from-transparent via-[rgba(255,245,239,0.32)] to-transparent mx-2 sm:mx-2.5" />
        </div>

        {/* Center: Editorial Label */}
        <div className="flex-1 flex items-center justify-start text-left z-10 overflow-hidden">
          <span
            style={editorialFont}
            className="text-[#FFF5EF] text-[13.5px] sm:text-[15px] font-semibold italic tracking-[0.02em] leading-none whitespace-nowrap truncate"
          >
            View Location
          </span>
        </div>

        {/* Right: Arrow Icon */}
        <div className="text-[#FFF5EF]/70 group-hover:text-[#FFF5EF] group-hover:translate-x-0.5 transition-all duration-300 shrink-0 z-10 pl-1.5">
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.85} />
        </div>
      </a>

      {/* 2. Add to Calendar Button (Right) */}
      <a
        href={calendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Add to Calendar — Save Alisha & Alex Wedding to Google Calendar"
        className="group relative flex-1 min-w-0 h-[46px] sm:h-[50px] px-3 sm:px-4 rounded-full flex items-center justify-between cursor-pointer select-none no-underline transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF5EF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#681B30] motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:active:transform-none"
        style={buttonStyle}
      >
        {/* Upper glass light-reflection highlight layer */}
        <div
          aria-hidden
          className="absolute inset-x-2.5 top-[1px] h-[46%] rounded-t-full pointer-events-none transition-opacity duration-300 opacity-80 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 245, 239, 0.30) 0%, rgba(184, 92, 112, 0.12) 48%, rgba(255, 245, 239, 0) 100%)",
          }}
        />

        {/* Left: CalendarPlus Icon Badge */}
        <div className="flex items-center text-[#FFF5EF] shrink-0 z-10">
          <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(255,245,239,0.08)] border border-[rgba(255,245,239,0.22)] shadow-[inset_0_1px_1px_rgba(255,245,239,0.25)] group-hover:scale-105 transition-transform duration-300">
            <CalendarPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFF5EF]" strokeWidth={1.85} />
          </div>
          {/* Vertical Separator */}
          <div className="w-[1px] h-4 sm:h-5 bg-gradient-to-b from-transparent via-[rgba(255,245,239,0.32)] to-transparent mx-2 sm:mx-2.5" />
        </div>

        {/* Center: Editorial Label */}
        <div className="flex-1 flex items-center justify-start text-left z-10 overflow-hidden">
          <span
            style={editorialFont}
            className="text-[#FFF5EF] text-[13.5px] sm:text-[15px] font-semibold italic tracking-[0.02em] leading-none whitespace-nowrap truncate"
          >
            Add to Calendar
          </span>
        </div>

        {/* Right: Arrow Icon */}
        <div className="text-[#FFF5EF]/70 group-hover:text-[#FFF5EF] group-hover:translate-x-0.5 transition-all duration-300 shrink-0 z-10 pl-1.5">
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.85} />
        </div>
      </a>
    </div>
  )
}
