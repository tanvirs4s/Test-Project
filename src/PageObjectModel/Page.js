export default class Page {
    constructor() {
        this.title = 'My Page';
    }

    open(path) {
        //browser.windowHandleSize({width: 1200, height: 800});
        browser.url(path);
    }
}