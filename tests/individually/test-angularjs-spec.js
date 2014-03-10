/*global describe, beforeEach, element, expect, browser, it, by */

describe('simple protractor test', function () {
    var location;

    beforeEach(function () {
        location = 'http://www.angularjs.org';
    });

    it('angularjs: should pass basic test of data binding', function () {
        var name = 'Bruce';

        console.log('Browsing', location);
        browser.get(location);
        element(by.model('yourName')).sendKeys(name);
        expect(element(by.binding('yourName')).getText()).toEqual('Hello ' + name + '!');
    });
});
