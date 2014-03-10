protractor-phantomjs-testing
============================

Testing using PhantomJS with Protractor

## Setup

``` javascript
$ npm install
$ node_modules/protractor/bin/webdriver-manager update
```

## Execution

In one terminal window, start the webdriver manager:
``` javascript
$ node_modules/protractor/bin/webdriver-manager start
```

And in another terminal window, run the test spec:
``` javascript
$ node_modules/protractor/bin/protractor protractor.conf.js
```

## Customisation

If you want the test to run in other browsers, uncomment the relevant lines in the `multiCapabilities` section in `protractor.conf.js`.

In the `phantomjs` definition, there is an alternative `'phantomjs.cli.args'` definition that provides more debugging information.
