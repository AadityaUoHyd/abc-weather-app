import type { Dispatch, SetStateAction } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

type Props = {
  location: string
  setLocation: Dispatch<SetStateAction<string>>
}

export default function LocationDropdown({ location, setLocation }: Props) {
  return (
    <Select value={location} onValueChange={(value) => setLocation(value)}>
      <SelectTrigger className="w-full xs:w-45">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        {location === "custom" && (
          <SelectItem value="custom">Custom</SelectItem>
        )} 
        {locations.map((city) => (
          <SelectItem key={city} value={city}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

const locations = [
  "Bangalore",
  "Bangkok",
  "Barharwa",
  "Beijing",
  "Berlin",
  "Cape town",
  "Chennai",
  "Dubai",
  "Hongkong",
  "Hyderabad",
  "Kolkata",
  "Lisbon",
  "London",
  "Madrid",
  "Malda",
  "Manila",
  "Moscow",
  "Mumbai",
  "New Delhi",
  "New York",
  "Paris",
  "Rio de Janeiro",
  "Rome",
  "Seoul",
  "Sydney",
  "Tokyo"
];
