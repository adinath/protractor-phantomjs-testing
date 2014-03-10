/*global describe, beforeEach, element, expect, browser, it, by */

describe('simple protractor test', function () {
    var locations;

    beforeEach(function () {
        locations = {
            angularjs: 'http://www.angularjs.org',
            mcalthropWithEotFont: 'http://mcalthrop.github.io/protractor-phantomjs-testing-with-eot-font.html',
            mcalthropWithSvgFont: 'http://mcalthrop.github.io/protractor-phantomjs-testing-with-svg-font.html',
            mcalthropWithTtfFont: 'http://mcalthrop.github.io/protractor-phantomjs-testing-with-ttf-font.html',
            mcalthropWithWoffFont: 'http://mcalthrop.github.io/protractor-phantomjs-testing-with-woff-font.html',
            mcalthropWithAllFonts: 'http://mcalthrop.github.io/protractor-phantomjs-testing-with-fonts.html'
        };
    });

    it('mcalthrop (with all EOT font): should get text from named id', function () {
        var location = locations.mcalthropWithEotFont;

        console.log('Browsing', location);
        browser.get(location);
        expect(element(by.id('test-id')).getText()).toEqual('test text');
    });
    it('mcalthrop (with all EOT font): should pass basic test of data binding', function () {
        var location = locations.mcalthropWithEotFont,
            name = 'Bruce';

        console.log('Browsing', location);
        browser.get(location);
        element(by.model('yourName')).sendKeys(name);
        expect(element(by.binding('yourName')).getText()).toEqual('Hello ' + name);
    });
    it('mcalthrop (with SVG font): should get text from named id', function () {
        var location = locations.mcalthropWithSvgFont;

        console.log('Browsing', location);
        browser.get(location);
        expect(element(by.id('test-id')).getText()).toEqual('test text');
    });
    it('mcalthrop (with SVG font): should pass basic test of data binding', function () {
        var location = locations.mcalthropWithSvgFont,
            name = 'Bruce';

        console.log('Browsing', location);
        browser.get(location);
        element(by.model('yourName')).sendKeys(name);
        expect(element(by.binding('yourName')).getText()).toEqual('Hello ' + name);
    });
    it('mcalthrop (with TTF font): should get text from named id', function () {
        var location = locations.mcalthropWithTtfFont;

        console.log('Browsing', location);
        browser.get(location);
        expect(element(by.id('test-id')).getText()).toEqual('test text');
    });
    it('mcalthrop (with TTF font): should pass basic test of data binding', function () {
        var location = locations.mcalthropWithTtfFont,
            name = 'Bruce';

        console.log('Browsing', location);
        browser.get(location);
        element(by.model('yourName')).sendKeys(name);
        expect(element(by.binding('yourName')).getText()).toEqual('Hello ' + name);
    });
    it('mcalthrop (with WOFF font): should get text from named id', function () {
        var location = locations.mcalthropWithWoffFont;

        console.log('Browsing', location);
        browser.get(location);
        expect(element(by.id('test-id')).getText()).toEqual('test text');
    });
    it('mcalthrop (with WOFF font): should pass basic test of data binding', function () {
        var location = locations.mcalthropWithWoffFont,
            name = 'Bruce';

        console.log('Browsing', location);
        browser.get(location);
        element(by.model('yourName')).sendKeys(name);
        expect(element(by.binding('yourName')).getText()).toEqual('Hello ' + name);
    });
    it('mcalthrop (with all fonts): should get text from named id', function () {
        var location = locations.mcalthropWithAllFonts;

        console.log('Browsing', location);
        browser.get(location);
        expect(element(by.id('test-id')).getText()).toEqual('test text');
    });
    it('mcalthrop (with all fonts): should pass basic test of data binding', function () {
        var location = locations.mcalthropWithAllFonts,
            name = 'Bruce';

        console.log('Browsing', location);
        browser.get(location);
        element(by.model('yourName')).sendKeys(name);
        expect(element(by.binding('yourName')).getText()).toEqual('Hello ' + name);
    });
    it('angularjs: should pass basic test of data binding', function () {
        var location = locations.angularjs,
            name = 'Bruce';

        console.log('Browsing', location);
        browser.get(location);
        element(by.model('yourName')).sendKeys(name);
        expect(element(by.binding('yourName')).getText()).toEqual('Hello ' + name + '!');
    });
});
