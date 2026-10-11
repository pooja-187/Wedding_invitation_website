/**
 * Wedding configuration for Alisha & Alex Kerala Wedding Invitation.
 * All event dates, times, venue details, and calendar metadata are managed here.
 */
export const WEDDING_CONFIG = {
  couple: {
    groom: "Alex",
    bride: "Alisha",
    title: "Alisha & Alex Wedding",
  },
  date: {
    display: "Sunday, December 28, 2026",
    muhurtham: "10:30 AM – 11:45 AM",
    sadhya: "1:00 PM",
    reception: "6:30 PM",
    timeZone: "Asia/Kolkata",
    // ISO string for countdown calculation
    isoTarget: "2026-12-28T10:30:00+05:30",
  },
  venue: {
    name: "The Grand Lawn, Kumarakom Lake Resort",
    location: "Kottayam, Kerala, India",
    address: "Kumarakom Lake Resort, North Post, Kumarakom, Kottayam, Kerala 686563, India",
    // Direct Google Maps directions URL (works seamlessly on iOS, Android, and Desktop)
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Kumarakom+Lake+Resort,+Kottayam,+Kerala,+India",
  },
  calendar: {
    title: "Alisha & Alex Wedding",
    description: "Together with their families, Alisha & Alex invite you to celebrate their wedding ceremony & celebration at Kumarakom Lake Resort, Kerala.",
    location: "The Grand Lawn, Kumarakom Lake Resort, Kottayam, Kerala, India",
    // 10:30 AM IST to 10:00 PM IST on Dec 28, 2026
    startTime: "20261228T103000",
    endTime: "20261228T220000",
    timeZone: "Asia/Kolkata",
  },
} as const

/**
 * Generates pre-filled Google Calendar event creation URL.
 */
export function getGoogleCalendarUrl(): string {
  const { title, description, location, startTime, endTime, timeZone } = WEDDING_CONFIG.calendar
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${startTime}/${endTime}`,
    details: description,
    location: location,
    ctz: timeZone,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

/**
 * Returns Google Maps directions URL for the wedding venue.
 */
export function getGoogleMapsUrl(): string {
  return WEDDING_CONFIG.venue.googleMapsUrl
}
