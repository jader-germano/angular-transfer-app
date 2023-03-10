// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    proxies: {
      '/assets/': '/base/src/assets/'
    },
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/my-app'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
    },
    reporters: ['progress', 'kjhtml', "coverage-istanbul"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: [
          "--no-sandbox",
          "--disable-gpu",
          "--enable-logging",
          "--no-default-browser-check",
          "--no-first-run",
          "--disable-default-apps",
          "--disable-popup-blocking",
          "--disable-translate",
          "--disable-background-timer-throttling",
          "--disable-renderer-backgrounding",
          "--disable-device-discovery-notifications",
          "--remote-debugging-port=9222",
          "--disable-web-security",
        ],
      },
    },
    singleRun: false,
    failOnEmptyTestSuite: false,
    browserNoActivityTimeout: 1000 * 60 * 3,
    restartOnFileChange: true
  });
};
