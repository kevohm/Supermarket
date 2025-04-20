import { Forecast } from "@/types/home";


export const ForecastCard = ({
  date,
  icon,
  temperature,
}: Forecast) => (
  <div className="card bg-white shadow">
    <div className="card-body items-center text-center space-y-3">
      <div className="font-bold">{date}</div>
      <div className="text-6xl">{icon}</div>
      <div className="text-sm font-normal text-gray-700">{temperature}</div>
    </div>
  </div>
);
