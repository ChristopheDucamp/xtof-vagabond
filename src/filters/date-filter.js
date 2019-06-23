// Stolen from https://stackoverflow.com/a/31615643
const appendSuffix = n => {
  var s = [' ', 'er', ' ', ' '],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'august', 'septembre', 'octobre', 'novembre', 'décembre'];
  const dayWithSuffix = appendSuffix(dateObject.getDate());

  return `${dayWithSuffix} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
};
