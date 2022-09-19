export function changeTheme(theme: string) {
    let html = document.documentElement;
    html.removeAttribute('data-theme'); // remove previous theme
    html.setAttribute('data-theme', theme); // set new theme
}