const ThemeSwitcher = () => {
    return(
        <label className="swap swap-rotate justify-self-end">
            <input type="checkbox" />
            <img className="swap-on dark:skIcoDark h-8" src="../src/assets/moon.svg" />
            <img className="swap-off dark:skIcoDark h-8" src="../src/assets/sun.svg" />
        </label>
    )
}

export default ThemeSwitcher;