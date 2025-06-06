import cloudy from '../images/cloudy.png';
import sunny from '../images/sunny.png';
import mostlyCloudy from '../images/mostly-cloudy.png';
import clearCloudy from '../images/clear-cloudy.png';
import showers from '../images/showers.png';
import drizzle from '../images/drizzle.png';
import thunderstroms from '../images/thunderstroms.png';
import snow from '../images/snow.png';
import foggy from '../images/foggy.png';

// TODO: Create the interface of Weather Response


export interface WeatherResponse {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

interface Wind {
    speed: number,
    deg: number,
    gust: number
        
}

interface Weather {
    id: number,
    main: string,
    description: string,    
    icon: string
           
}

interface Main {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

interface Coord  {
    lon: number,
    lat: number
}
 interface Rain {
    "1h": number;
}

 interface Clouds {
    all: number;
}

 interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}



export const WeatherIcon = {
    "01d": sunny,
    "01n": sunny,
    "02d": clearCloudy,
    "02n": clearCloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d": mostlyCloudy,
    "04n": mostlyCloudy,
    "09d": showers,
    "09n": showers,
    "10d": drizzle,
    "10n": drizzle,
    "11d": thunderstroms,
    "11n": thunderstroms,
    "13d": snow,
    "13n": snow,
    "50d": foggy,
    "50n": foggy,
} as const;

export const DayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

export type WeatherIcontype = keyof typeof WeatherIcon;