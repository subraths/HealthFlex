import Forecast from "@/components/Forecast";
import Weather from "@/components/Weather";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="space-y-8">
      <Suspense fallback={<Loading />}>
        <Forecast location="Paris" />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Weather location="Paris" />
      </Suspense>
    </main>
  );
}
