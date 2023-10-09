import { imported, luxury, premium } from "@/constants";
import { CarProps, FilersProps } from "@/types";






export async function fetchCars(filters: FilersProps){
  const {manufacturer , model, year, fuel, limit} = filters;

    const headers : HeadersInit = {
    
		"X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY || "",
		"X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST || "cars-by-api-ninjas.p.rapidapi.com",
	
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,

    });

    const result = await response.json();
    return result;


}



export const calculateCarRent = (city_mpg: number, year: number, make: string) => {
  
  
  



    let basePricePerDay = 0 ;
     let mileageFactor = 0;
     let ageFactor = 0;

  if(premium.includes(make)){
     basePricePerDay = 100000 ;
     mileageFactor = 1000;
     ageFactor = 1534;
  } else if(luxury.includes(make)){
     basePricePerDay = 50000;
     mileageFactor = 500;
     ageFactor = 752;

  } else if(imported.includes(make)){
     basePricePerDay = 70000 ;
     mileageFactor = 700;
     ageFactor = 854; 
  }else{
    basePricePerDay = 10000 ;
     mileageFactor = 100;
     ageFactor = 10;

  }
  console.log(make);
   // Base rental price per day in dollars
   // Additional rate per mile driven
   // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl =(car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const {make, year , model } = car;
  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGINE_STUDIO_KEY|| "");
  url.searchParams.append('modelFamily',model.split(' ')[0]);
  url.searchParams.append('zoomType','fullscreen');
  url.searchParams.append('modelYear',`${year}`);
  url.searchParams.append('make',make);
  url.searchParams.append('angle',`${angle}`);
  return `${url}`

}

export const  updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value)
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`
  return newPathname;
}