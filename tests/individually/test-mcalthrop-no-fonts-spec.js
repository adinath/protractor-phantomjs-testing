/*global describe, beforeEach, element, expect, browser, it, by */

describe('simple protractor test', function () {
    var location;

    beforeEach(function () {
        location = 'http://mcalthrop.github.io/protractor-phantomjs-testing/index.html';
    });

    it('mcalthrop (with NO fonts): should get text from named id', function () {
        console.log('Browsing', location);
        browser.get(location);
        expect(element(by.id('test-id')).getText()).toEqual('test text');
    });
    it('mcalthrop (with NO fonts): should pass basic test of data binding', function () {
        var name = 'Bruce';

        console.log('Browsing', location);
        browser.get(location);
        element(by.model('yourName')).sendKeys(name);
        expect(element(by.binding('yourName')).getText()).toEqual('Hello ' + name);
    });
});
