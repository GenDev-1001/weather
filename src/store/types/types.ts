export type Weather = {
  timezone: number;
  name: string;
  wind: {
    speed: number;
    deg: number;
  };
  main: {
    temp: number;
    pressure: number;
    feels_like: number;
  };
};
