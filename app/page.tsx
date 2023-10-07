import { Hero, About } from "@/components";
// import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Page() {
  // const allCars = await fetchCars();
  // console.log(allCars);
  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <div className="h-screen text-black bg-red-500">jo apoj pojs</div>
    </main>
  );
}
