export function changeTheme(theme: string) {
    let html = document.documentElement;
    html.removeAttribute('data-theme'); // remove previous theme
    html.setAttribute('data-theme', theme); // set new theme
}

export function updateIcons() {
    let theme = document.documentElement.getAttribute('data-theme');
    let icons: any = document.getElementsByClassName("icon");


    if( theme === "light") {
        for(let icon of icons) {
            icon.classList.remove("iconDark");
        } 
    }

    if (theme === "dark") {
        for(let icon of icons) {
            icon.classList.add("iconDark");
        }
    }   
}