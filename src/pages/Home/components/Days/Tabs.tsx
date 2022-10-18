import s from "./Days.module.scss";

export interface ITabs {
  value: string;
}

interface Props {}

export const Tabs = (props: Props) => {
  const tabs: ITabs[] = [
    {
      value: "for a week",
    },
    {
      value: "for 10 days",
    },
    {
      value: "for a month",
    },
  ];

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {tabs.map((tab: ITabs) => (
          <div className={s.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={s.cancel}>Cancel</div>
    </div>
  );
};
