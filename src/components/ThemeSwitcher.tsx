import { useState } from "react";
import { changeTheme } from "../modules/changeTheme";

const ThemeSwitcher = () => {


    function handleClick(e: any) {
        let darkTheme = e.target.checked;

        if (darkTheme) {
            changeTheme("dark");
        } else {
            changeTheme("light");
        }
    }

    return(
        <label className="swap swap-rotate justify-self-end" >
            <input type="checkbox" onClick={e => handleClick(e)} />
            <img className="swap-on dark:skIcoDark h-8" src="../src/assets/sun.svg" />
            <img className="swap-off dark:skIcoDark h-8" src="../src/assets/moon.svg" />
        </label>
    )
}

export default ThemeSwitcher;