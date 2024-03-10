import axios from "axios";
import { RateLimitError } from "./custom-error";

export const API_KEY = "2aj7QwO7BAn76KjXQ6V8Ww5QMcPefSJU";

export const server = axios.create({
  baseURL: "https://api.tomorrow.io/v4/weather",
});

export const getWeather = async (location: string) => {
  try {
    return await server.get(`/realtime?location=${location}&apikey=${API_KEY}`);
  } catch (err) {
    if (err instanceof Error) {
      if (err.message.includes("limit exceeded")) {
        throw new RateLimitError("Weather API rate limit exceeded");
      }
      return err;
    }
  }
};

export const getForecast = async (location: string) => {
  try {
    return await server.get(`/forecast?location=${location}&apikey=${API_KEY}`);
  } catch (err) {
    if (err instanceof Error) {
      if (err.message.includes("limit exceeded")) {
        throw new RateLimitError("Forecast API rate limit exceeded");
      }
      return err;
    }
  }
};
