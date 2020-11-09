// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const Jasmine2AllureReporter = require('jasmine-allure-reporter');
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    suites: {
        login: [
            './src/specs/signin.e2e-spec.ts'
        ],
        register: [
            './src/specs/signup.e2e-spec.ts'
        ],
        photo: [
            './src/specs/photo.e2e-spec.ts'
        ]
    },
    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: false,
        maxInstances: 2
    },
    directConnect: true, // Colocar como false caso queira usar SeleniumGRID
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    onPrepare: async () => {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.e2e.json')
        });
        await browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
        by.addLocator('formControlName', (valor) => {
            return document.querySelectorAll(`[formControlName="${valor}"]`);
        });
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    }
};