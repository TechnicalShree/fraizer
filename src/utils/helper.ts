/**
 * Capitalizes the first letter of each word in a given string.
 */
export function capitalizeWords(inputString: string) {
  return inputString.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}
