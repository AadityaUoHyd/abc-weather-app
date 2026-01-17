import Card from "./Card"
import type { Coords } from "../../types"

type Props = {
  coords: Coords
}

export default function HourlyForecast({ }: Props) {
  // For now, show a message that hourly forecast is not available
  // Would need One Call API 3.0 subscription for this data
  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="flex items-center justify-center h-32"
    >
      <p className="text-gray-500 text-center">
        Hourly forecast data requires premium API subscription
      </p>
    </Card>
  )
}
