import { Forecast } from "@/types/home";
import { ForecastCard } from "./ForecastCard";

interface ForecastListProps {
  forecast: Forecast[];
}

export const ForecastList = ({ forecast }: ForecastListProps) => (
  <div className="row-span-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
    {forecast.map((f, i) => (
      <ForecastCard key={i} {...f} />
    ))}
  </div>
);
