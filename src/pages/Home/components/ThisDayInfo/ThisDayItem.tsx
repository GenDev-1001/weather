import { SharedSvgSelector } from "../../../../assets/icons/indicators/IndicatorSvgSelector";
import { IItem } from "./ThisDayInfo";
import s from "./ThisDayInfo.module.scss";

interface Props {
  item: IItem;
}

export const ThisDayItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;

  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <SharedSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  );
};
