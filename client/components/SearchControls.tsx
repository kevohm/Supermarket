import { Unit } from "@/types/home";

interface SearchControlsProps {
    input: string;
    unit: Unit;
    setInput: (val: string) => void;
    setUnit: (unit: Unit) => void;
    onSearch: () => void;
  }
  
  export const SearchControls = ({ input, unit, setInput, setUnit, onSearch }: SearchControlsProps) => (
    <div className="row-span-1 w-full flex items-center justify-between">
      <div className="w-full flex gap-2.5">
        <input
          type="text"
          placeholder="Search city..."
          className="input input-bordered w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={onSearch}>GO</button>
      </div>
      <div className="flex items-center gap-2.5">
        <button
          className={`btn ${unit === "metric" ? "btn-primary" : ""}`}
          onClick={() => setUnit("metric")}
        >
          °C
        </button>
        <button
          className={`btn ${unit === "imperial" ? "btn-primary" : ""}`}
          onClick={() => setUnit("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
  