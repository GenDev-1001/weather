import { SharedSvgSelector } from "../../../../assets/icons/shared/SharedSvgSelector";
import { Weather } from "../../../../store/types/types";
import s from "./ThisDay.module.scss";

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  const timeNow = Date.now();

  const time = new Date(timeNow).getTime() + weather.timezone * 1000 * 60;

  console.log(weather);
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <SharedSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Time:{" "}
          <span>
            {new Date(time).getHours() + ":" + new Date(time).getMinutes()}
          </span>
        </div>
        <div className={s.this__city}>
          City: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
};
