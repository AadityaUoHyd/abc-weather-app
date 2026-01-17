import Card from "./Card"
import type { Coords } from "../../types"

type Props = {
  coords: Coords
}

export default function DailyForecast({ }: Props) {
  // For now, show a message that daily forecast is not available
  // Would need One Call API 3.0 subscription for this data
  return (
    <Card
      title="Daily Forecast"
      childrenClassName="flex items-center justify-center h-32"
    >
      <p className="text-gray-500 text-center">
        Daily forecast data requires premium API subscription
      </p>
    </Card>
  )
}
