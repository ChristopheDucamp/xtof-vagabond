// Stolen from https://stackoverflow.com/a/31615643
const appendSuffix = n => {
  var s = ['eme', 'er', 'nd', 'eme'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  const months = ['January', 'February', 'March', 'April', 'May', 'Juin', 'Juillet', 'August', 'September', 'October', 'November', 'December'];
  const dayWithSuffix = appendSuffix(dateObject.getDate());

  return `${dayWithSuffix} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
};
