export class ThemeStorage {
    constructor() {
        let theme = JSON.parse(localStorage.getItem('themeStorage'));
        if (theme === null) {
            theme = 'light';
        }
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