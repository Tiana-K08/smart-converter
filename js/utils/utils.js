export function capitalize(str) {
  // if (typeof str !== 'string' || str.length === 0) {
  //   return 'Unknown';
  // }

  if (typeof str !== 'string') {
    throw new TypeError('[capitalize] Expected a string');
  }

  if (str.length === 0) {
    return '';
  }

  return str[0].toUpperCase() + str.slice(1);
}
