/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const test_choose = () => run_test([
  "choose(52,5)",
  "2598960",

  "choose(n,k)",
  "n!/(k!*(-k+n)!)",

  "choose(0,k)",
  "1/(k!*(-k)!)",

  "choose(n,0)",
  "1",

  "choose(-1,k)",
  "0",

  "choose(n,-1)",
  "0",
]);

