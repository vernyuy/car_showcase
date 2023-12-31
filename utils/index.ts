import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "fee34c888dmsh47a972ea802714fp1be4a3jsncf89057d228e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
    { headers }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: Number) => {
  const url = new URL("https://cdn.imagin.studio/subscriptions/pricing");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make as string);
  url.searchParams.append("modelFamily", model.split(" ")[0] as string);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}` as string);
  url.searchParams.append("angel", `${angle}`);

  return `${url}`;
};
