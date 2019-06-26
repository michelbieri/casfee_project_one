
export class ThemeService {
    constructor(themeStorage) {
        this.storage = themeStorage;
        this.theme = "light";
    }

    loadData() {
        this.theme = this.storage.getAll();
        return this.theme;
    }

    saveData(theme) {
        this.theme = theme;
        this.storage.update(this.theme);
    }

}