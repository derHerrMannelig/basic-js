const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let reversed = email.split("").reverse().join("");
  const [domain] = reversed.split('@');
  return domain.split("").reverse().join("");

}

module.exports = {
  getEmailDomain
};
