import { getWeather } from "@/lib/axios";
import Error from "./Error";
import { RateLimitError } from "@/lib/custom-error";

export default async function Weather({ location }: { location: string }) {
  const weatherData = await getWeather(location);

  if (weatherData instanceof RateLimitError) {
    return (
      <Error
        statusCode={weatherData.statusCode}
        message={weatherData.message}
        title="Failed to fetch weather data"
      />
    );
  }
  return (
    <>
      <div>weather data here</div>
      <form>
        <input placeholder="Enter Location" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
