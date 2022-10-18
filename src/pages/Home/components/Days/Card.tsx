import { SharedSvgSelector } from "../../../../assets/icons/shared/SharedSvgSelector";
import { IDay } from "./Days";
import s from "./Days.module.scss";

interface Props {
  dayProps: IDay;
}

export const Card = ({ dayProps }: Props) => {
  const { day, day_info, icon_id, temp_day, temp_night, info } = dayProps;
  return (
    <div className={s.card}>
      <div className={s.day}>{day}</div>
      <div className={s.day__info}>{day_info}</div>
      <div className={s.img}>
        <SharedSvgSelector id={icon_id} />
      </div>
      <div className={s.temp__day}>{temp_day}</div>
      <div className={s.temp__night}>{temp_night}</div>
      <div className={s.info}>{info}</div>
    </div>
  );
};
