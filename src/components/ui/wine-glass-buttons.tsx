import * as React from "react"
import { MapPin, CalendarPlus, ArrowRight } from "lucide-react"
import { getGoogleCalendarUrl, getGoogleMapsUrl } from "@/config/wedding"

interface WineGlassButtonsProps {
  className?: string
  style?: React.CSSProperties
}

/**
 * Premium Apple iOS-inspired Wine-Red Glassmorphism Buttons
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
      "linear-gradient(180deg, rgba(184, 92, 112, 0.22) 0%, rgba(104, 27, 48, 0.90) 22%, rgba(61, 13, 27, 0.95) 85%, rgba(45, 9, 19, 0.98) 100%)",
    backdropFilter: "blur(16px) saturate(140%)",
    WebkitBackdropFilter: "blur(16px) saturate(140%)",
    border: "1px solid rgba(184, 92, 112, 0.5)",
    borderBottom: "1.5px solid rgba(45, 9, 19, 0.9)",
    boxShadow:
      "inset 0 1.5px 1px 0 rgba(255, 245, 239, 0.65), inset 0 0 16px 0 rgba(184, 92, 112, 0.18), inset 0 -2px 3px 0 rgba(40, 8, 17, 0.8), 0 12px 28px -4px rgba(61, 13, 27, 0.38), 0 4px 10px -2px rgba(61, 13, 27, 0.22)",
  }

  const editorialFont: React.CSSProperties = {
    fontFamily: '"Cormorant Garamond", "Garamond", "Georgia", serif',
  }

  return (
    <div
      className={`flex flex-col items-center justify-center w-full gap-3 sm:gap-3.5 ${className}`}
      style={style}
    >
      {/* 1. View Location Button */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Location — Open Google Maps directions to Kumarakom Lake Resort"
        className="group relative flex items-center justify-between w-[78%] max-w-[340px] sm:max-w-[365px] h-[76px] sm:h-[82px] px-4 sm:px-5 rounded-full cursor-pointer select-none no-underline transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF5EF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#681B30] motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:active:transform-none"
        style={buttonStyle}
      >
        {/* Upper glass light-reflection highlight layer */}
        <div
          aria-hidden
          className="absolute inset-x-3.5 top-[1px] h-[46%] rounded-t-full pointer-events-none transition-opacity duration-300 opacity-80 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 245, 239, 0.28) 0%, rgba(184, 92, 112, 0.12) 45%, rgba(255, 245, 239, 0) 100%)",
          }}
        />

        {/* Left: MapPin Icon Badge */}
        <div className="flex items-center text-[#FFF5EF] shrink-0 z-10">
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[rgba(255,245,239,0.08)] border border-[rgba(255,245,239,0.2)] shadow-[inset_0_1px_1px_rgba(255,245,239,0.25)] group-hover:scale-105 transition-transform duration-300">
            <MapPin className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#FFF5EF]" strokeWidth={1.75} />
          </div>
          {/* Vertical Separator */}
          <div className="w-[1px] h-7 bg-gradient-to-b from-transparent via-[rgba(255,245,239,0.3)] to-transparent mx-3 sm:mx-3.5" />
        </div>

        {/* Center: Editorial Label & Details */}
        <div className="flex-1 flex flex-col items-start justify-center text-left z-10 overflow-hidden pr-2">
          <span
            style={editorialFont}
            className="text-[#FFF5EF] text-[18px] sm:text-[19.5px] font-semibold tracking-[0.02em] leading-tight"
          >
            View Location
          </span>
          <span className="text-[#FFF5EF]/75 text-[10px] sm:text-[11px] tracking-[0.08em] uppercase font-medium mt-0.5 truncate">
            Kumarakom Lake Resort
          </span>
        </div>

        {/* Right: Arrow Icon */}
        <div className="text-[#FFF5EF]/70 group-hover:text-[#FFF5EF] group-hover:translate-x-1 transition-all duration-300 shrink-0 z-10 pr-1">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.85} />
        </div>
      </a>

      {/* 2. Add to Calendar Button */}
      <a
        href={calendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Add to Calendar — Save Alisha & Alex Wedding to Google Calendar"
        className="group relative flex items-center justify-between w-[78%] max-w-[340px] sm:max-w-[365px] h-[76px] sm:h-[82px] px-4 sm:px-5 rounded-full cursor-pointer select-none no-underline transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF5EF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#681B30] motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:active:transform-none"
        style={buttonStyle}
      >
        {/* Upper glass light-reflection highlight layer */}
        <div
          aria-hidden
          className="absolute inset-x-3.5 top-[1px] h-[46%] rounded-t-full pointer-events-none transition-opacity duration-300 opacity-80 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 245, 239, 0.28) 0%, rgba(184, 92, 112, 0.12) 45%, rgba(255, 245, 239, 0) 100%)",
          }}
        />

        {/* Left: CalendarPlus Icon Badge */}
        <div className="flex items-center text-[#FFF5EF] shrink-0 z-10">
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[rgba(255,245,239,0.08)] border border-[rgba(255,245,239,0.2)] shadow-[inset_0_1px_1px_rgba(255,245,239,0.25)] group-hover:scale-105 transition-transform duration-300">
            <CalendarPlus className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#FFF5EF]" strokeWidth={1.75} />
          </div>
          {/* Vertical Separator */}
          <div className="w-[1px] h-7 bg-gradient-to-b from-transparent via-[rgba(255,245,239,0.3)] to-transparent mx-3 sm:mx-3.5" />
        </div>

        {/* Center: Editorial Label & Details */}
        <div className="flex-1 flex flex-col items-start justify-center text-left z-10 overflow-hidden pr-2">
          <span
            style={editorialFont}
            className="text-[#FFF5EF] text-[18px] sm:text-[19.5px] font-semibold tracking-[0.02em] leading-tight"
          >
            Add to Calendar
          </span>
          <span className="text-[#FFF5EF]/75 text-[10px] sm:text-[11px] tracking-[0.08em] uppercase font-medium mt-0.5 truncate">
            Sunday, Dec 28, 2026
          </span>
        </div>

        {/* Right: Arrow Icon */}
        <div className="text-[#FFF5EF]/70 group-hover:text-[#FFF5EF] group-hover:translate-x-1 transition-all duration-300 shrink-0 z-10 pr-1">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.85} />
        </div>
      </a>
    </div>
  )
}
