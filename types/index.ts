import { Dispatch, MouseEventHandler } from "react";

export interface CustomButtonsProps{
    title: string;
    containerStyles?: string;
    textStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    rightIcon?: string;
    isDisabled?: boolean;
    btnType?:"button" | "submit";

}
export  interface searchBarProps  {
  setManufacturer : (manufacturer: string) => void;
  setModel:(model: string) => void;

}
export interface CustomFiltersProps<T>{
    title: string;
    options: OptionProps[];
    setFilter: (selected: T)=> void;
}

export interface OptionProps{
    title: string;
    value: string;
}
export interface FilersProps{
    manufacturer: string;
    model: string;
    year: number;
    fuel: string;
    limit: number;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext : boolean;
    setLimit: (limit : number) => void;
}


export interface SearchManufacturerProps {
    selected : string;
    setSelected:(manufacturer: string) => void;
}
export interface CarProps{
    city_mpg: number;
    class: string;
    combination_mpg:number;
    cylinders:number;
    displacement: number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;

}