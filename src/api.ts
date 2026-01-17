import { AirPollutionSchema } from "./schemas/airPollutionSchema"
import { GeocodeSchema } from "./schemas/geocodeSchema"
import { weatherSchema } from "./schemas/weatherSchema"

const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
  )
  if (!res.ok) {
    throw new Error(`Weather API error: ${res.status} ${res.statusText}`)
  }
  const data = await res.json()
  return weatherSchema.parse(data)
}

export async function getGeocode(location: string) {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
  )
  if (!res.ok) {
    throw new Error(`Geocode API error: ${res.status} ${res.statusText}`)
  }
  const data = await res.json()
  return GeocodeSchema.parse(data)
}

export async function getAirPollution({
  lat,
  lon,
}: {
  lat: number
  lon: number
}) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
  if (!res.ok) {
    throw new Error(`Air pollution API error: ${res.status} ${res.statusText}`)
  }
  const data = await res.json()
  return AirPollutionSchema.parse(data)
}
