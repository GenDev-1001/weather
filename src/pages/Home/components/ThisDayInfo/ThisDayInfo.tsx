import cloud from "../../../../assets/images/cloud.png";
import { Weather } from "../../../../store/types/types";
import s from "./ThisDayInfo.module.scss";
import { ThisDayItem } from "./ThisDayItem";

interface Props {
  weather: Weather;
}

export interface IItem {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = ({ weather }: Props) => {
  const windDirection = (d: number) => {
    let directions = [
      "northerly",
      "north easterly",
      "easterly",
      "south easterly",
      "southerly",
      "south westerly",
      "westerly",
      "north westerly",
    ];

    d += 22.5;

    if (d < 0) {
      d = 360 - (Math.abs(d) % 360);
    } else {
      d = d % 360;
    }

    let w = d / 45;

    return `${directions[Math.floor(w)]}`;
  };

  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: `${Math.floor(weather.main.temp)}° feels like ${Math.floor(
        weather.main.feels_like
      )}°`,
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: `${weather.main.pressure} mmHg - normal`,
    },
    {
      icon_id: "precipitation",
      name: "Precipitation",
      value: "No precipitation",
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: `${weather.wind.speed} m/s ${windDirection(
        weather.wind.deg
      )} - light breeze`,
    },
  ];

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: IItem) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="cloud" />
    </div>
  );
};
