import { Card } from "./Card";
import s from "./Days.module.scss";
import { Tabs } from "./Tabs";

export interface IDay {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

type Props = {};

export const Days = (props: Props) => {
  const days: IDay[] = [
    {
      day: "Today",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18°",
      temp_night: "+15°",
      info: "Небольшой дождь",
    },
    {
      day: "Tomorrow",
      day_info: "29 авг",
      icon_id: "small_rain_sun",
      temp_day: "+15",
      temp_night: "+10°",
      info: "Облачно",
    },
    {
      day: "Mon.",
      day_info: "28 авг",
      icon_id: "small_rain",
      temp_day: "+18°",
      temp_night: "+15°",
      info: "Небольшой дождь",
    },
    {
      day: "Tue.",
      day_info: "28 авг",
      icon_id: "mainly_cloudy",
      temp_day: "+18°",
      temp_night: "+15°",
      info: "Небольшой дождь",
    },
    {
      day: "Wed.",
      day_info: "28 авг",
      icon_id: "rain",
      temp_day: "+18°",
      temp_night: "+15°",
      info: "Небольшой дождь",
    },
    {
      day: "Thu.",
      day_info: "28 авг",
      icon_id: "rain",
      temp_day: "+18°",
      temp_night: "+15°",
      info: "Небольшой дождь",
    },
    {
      day: "Fri.",
      day_info: "28 авг",
      icon_id: "rain",
      temp_day: "+18°",
      temp_night: "+15°",
      info: "Небольшой дождь",
    },
  ];
  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: IDay) => (
          <Card key={day.day} dayProps={day} />
        ))}
      </div>
    </>
  );
};
