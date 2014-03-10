protractor-phantomjs-testing
============================

Testing using PhantomJS with Protractor

## Setup

``` sh
$ npm install
$ node_modules/protractor/bin/webdriver-manager update
```

And make sure `java` is installed and on your `PATH`.

## Execution

In one terminal window, start the webdriver manager:
``` sh
$ node_modules/protractor/bin/webdriver-manager start
```

And in another terminal window, run the test spec:
``` sh
$ node_modules/protractor/bin/protractor protractor.conf.js
```

## Customisation

If you want the test to run in other browsers, uncomment the relevant lines in the `multiCapabilities` section in `protractor.conf.js`.

In the `phantomjs` definition, there is an alternative `'phantomjs.cli.args'` definition that provides more debugging information.


## Troubleshooting

If you get this error:

``` sh
$ node_modules/protractor/bin/webdriver-manager start
execvp(): No such file or directory
seleniumProcess.pid: 10942

events.js:72
        throw er; // Unhandled 'error' event
              ^
Error: spawn ENOENT
    at errnoException (child_process.js:988:11)
    at Process.ChildProcess._handle.onexit (child_process.js:779:34)
```

then `java` has not been installed, or is not on your `PATH`.
