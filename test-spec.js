/*global describe, beforeEach, element, expect, browser, it, by */

describe('simple protractor test', function () {
    var locations;

    beforeEach(function () {
        locations = {
            angularjs: 'http://www.angularjs.org',
            mcalthrop: 'http://mcalthrop.github.io/protractor-phantomjs-testing.html'
        };
    });

    xit('angularjs: should pass basic test of data binding on AngularJS page', function () {
        var location = locations.angularjs,
            name = 'Bruce';

        console.log('Browsing', location);
        browser.get(location);
        element(by.model('yourName')).sendKeys(name);
        expect(element(by.binding('yourName')).getText()).toEqual('Hello ' + name + '!');
    });
    it('mcalthrop: should get text from named id', function () {
        var location = locations.mcalthrop;

        console.log('Browsing', location);
        browser.get(location);
        expect(element(by.id('test-id')).getText()).toEqual('test text');
    });
    it('mcalthrop: should pass basic test of data binding on AngularJS page', function () {
        var location = locations.mcalthrop,
            name = 'Bruce';

        console.log('Browsing', location);
        browser.get(location);
        element(by.model('yourName')).sendKeys(name);
        expect(element(by.binding('yourName')).getText()).toEqual('Hello ' + name);
    });
});