/*global describe, element, expect, browser, it, by */
describe('angularjs homepage', function() {
    var name = 'Bruce';

    it('should greet the named user', function() {
        browser.get('http://www.angularjs.org');
        element(by.model('yourName')).sendKeys(name);
        var greeting = element(by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello ' + name + '!');
    });
});