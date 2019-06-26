//const key = "themeStorage";
export class ThemeStorage {
    constructor() {
        const theme = JSON.parse(localStorage.getItem('themeStorage') || null );
        this.theme = theme;
        localStorage.setItem('themeStorage', JSON.stringify(theme));
    }

    getAll() {
        return this.theme;
    }

    update(theme) {
        localStorage.setItem('themeStorage', JSON.stringify(theme));
        this.theme = theme;
        return this.theme;
    }
}