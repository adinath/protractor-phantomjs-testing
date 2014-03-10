protractor-phantomjs-testing
============================

Testing using PhantomJS with Protractor.


## Rationale

On a separate project, I've been having some issues where `phantomjs` crashes when run with `protractor` – this project is an attempt to find out where & why the crashes occur.

## Findings

`phantomjs` crashes when running a simple Protractor test on [www.angularjs.org](http://www.angularjs.org/), but succeeds when pointing to [mcalthrop.github.io/protractor-phantomjs-testing/](http://mcalthrop.github.io/protractor-phantomjs-testing/), which is an absolutely minimal AngularJS implementation.

Initial investigation has shown that fonts on the angularjs.org site _might_ be a problem, so I'm focusing on that.

However, this is not definitely the reason for the failures, so the testing approach may change in the future.

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

And in another terminal window, run the test specs.

If you want to run each Protractor test individually against a separate instance of `phantomjs`:
``` sh
$ run_tests_individually.bash
```

And to run all Protractor tests together against one instance of `phantomjs`:
``` sh
$ run_tests_together.bash
```

## My results

On a MAC running OSX Mavericks (10.9.2), I am seeing:

* individually: all tests **always** pass
* together:
    * the first two tests **always** pass
    * the third test **sometimes** passes
    * the rest of the tests **always** fail

## Customisation

If you want the test to run in other browsers, uncomment the relevant lines in the `multiCapabilities` section in `protractor.conf.js`.

In the `phantomjs` definition, there is an alternative `'phantomjs.cli.args'` definition that provides more debugging information.

In `test-spec.js`, you can comment-out any individual test by changing `it` to `xit`.

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
