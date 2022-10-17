import { SharedSvgSelector } from "../../assets/icons/shared/SharedSvgSelector";
import { IItem } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import s from "./Popup.module.scss";

interface Props {}

export const Popup = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: "20° feels like 17°",
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: "765 mmHg - normal",
    },
    {
      icon_id: "precipitation",
      name: "Precipitation",
      value: "No precipitation",
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: "3 m/s southwest - light breeze",
    },
  ];

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>12°</div>
          <div className={s.day__name}>Wensday</div>
          <div className={s.img}>
            <SharedSvgSelector id="rain" />
          </div>
          <div className={s.day__time}>
            Time: <span>21:54</span>
          </div>
          <div className={s.day__city}>
            City: <span>Minsk</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item: IItem) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <SharedSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
