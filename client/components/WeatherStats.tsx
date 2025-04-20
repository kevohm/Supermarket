import { Unit } from "@/types/home";

interface WeatherStatsProps {
    windSpeed: number;
    windDirection: string;
    humidity: number;
    unit: Unit;
  }
  
  export const WeatherStats = ({ windSpeed, windDirection, humidity, unit }: WeatherStatsProps) => (
    <div className="row-span-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="card bg-white shadow">
        <div className="card-body items-center text-center">
          <div className="text-gray-500">Wind Status</div>
          <div className="text-2xl font-semibold">{windSpeed} {unit === "metric" ? "km/h" : "mph"}</div>
          <div className="text-sm text-gray-400">{windDirection}</div>
        </div>
      </div>
      <div className="card bg-white shadow">
        <div className="card-body items-center text-center space-y-3">
          <div className="text-gray-500">Humidity</div>
          <div className="text-2xl font-semibold">{humidity}%</div>
          <div className="w-full bg-gray-200 h-3 rounded-full">
            <div
              className="bg-primary h-full rounded-full"
              style={{ width: `${humidity}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
  