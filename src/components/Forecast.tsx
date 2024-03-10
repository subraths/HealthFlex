import { getForecast } from "@/lib/axios";
import ErrorComp from "./Error";
import { RateLimitError } from "@/lib/custom-error";

export default async function Forecast({ location }: { location: string }) {
  const forecastData = await getForecast(location);

  if (forecastData instanceof RateLimitError) {
    return (
      <ErrorComp
        statusCode={forecastData.statusCode}
        message={forecastData.message}
        title="Failed to fetch forecast data"
      />
    );
  }

  console.log("forecastData", forecastData?.data);

  return (
    <>
      <div>forecast data here</div>
      <form>
        <input placeholder="Enter Location" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
