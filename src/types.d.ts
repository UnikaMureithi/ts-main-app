type CounterProps = {
    initialCount: number;
};

type WeatherProps = {
    weather:string;
}

type WeatherContextProps = {
    weather: string;
    changeWeather:() => void;
};