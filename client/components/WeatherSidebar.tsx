interface WeatherSidebarProps {
  weatherIcon: string;
  temperature: string;
  weatherType: string;
  date: string;
  location: string;
}

export const WeatherSidebar = ({
  weatherIcon,
  temperature,
  weatherType,
  date,
  location,
}: WeatherSidebarProps) => (
  <>
    <div className="flex flex-col items-center space-y-2">
      <div className="text-8xl">{weatherIcon}</div>
      <div className="text-3xl font-semibold">{temperature}</div>
      <div className="text-xl text-gray-600">{weatherType}</div>
    </div>
    <div className="flex flex-col items-center text-sm text-gray-500">
      <p>{date}</p>
      <p>{location}</p>
    </div>
  </>
);
