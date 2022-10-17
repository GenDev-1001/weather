import Select from "react-select";
import { SharedSvgSelector } from "../../assets/icons/shared/SharedSvgSelector";
import { Theme } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";
import s from "./Header.module.scss";

type Props = {};

export const Header = (props: Props) => {
  const theme = useTheme();

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const options = [
    { value: "Minsk", label: "Minsk" },
    { value: "Grodno", label: "Grodno" },
    { value: "Brest", label: "Brest" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
      cursor: "pointer",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
    option: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
      cursor: "pointer",
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <SharedSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <SharedSvgSelector id="change-theme" />
        </div>
        <Select
          options={options}
          styles={colourStyles}
          defaultValue={options[0]}
        />
      </div>
    </header>
  );
};
