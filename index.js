const newrelic = require('newrelic')

/**
 * Monkey patching consol.error to log
 * to new relic as well.
 */
const originalConsoleError = console.error;

console.error = function() {
  originalConsoleError.apply(this, arguments);
  newrelic.noticeError.apply(newrelic, arguments);
};

module.exports = newrelic
