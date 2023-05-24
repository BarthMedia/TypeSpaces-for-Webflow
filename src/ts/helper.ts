// + Imports +

// Base
import { async } from 'regenerator-runtime';

// Custom
import * as config from './config';

// + Functions +

// String to array
export function stringToArray(
  string: string,
  splitter: any = ',',
  removeWhiteSpaces = true,
  removeQuotes = true,
  removeBrackets = true
) {
  // - Manipulation -

  // Remove brackets
  if (removeBrackets) string = string.replace(/[\[\]]/g, '');

  // Remove quotes
  if (removeQuotes) string = string.replace(/['"]/g, '');

  // Remove white spaces
  if (removeWhiteSpaces) string = string.replace(/ /g, '').replace(/\n/g, '');

  // Split
  const arr = splitter !== false ? string.split(splitter) : string;

  // Return
  return arr;
}

// Get translated region name
export function getTranslatedRegionName(
  countryCode: string,
  language: boolean | string = false
) {
  // Define
  const regionNames = new Intl.DisplayNames(
    [
      language !== false
        ? language.toString().toLowerCase()
        : countryCode.toLowerCase(),
    ],
    {
      type: 'region',
    }
  );

  // Return
  return regionNames.of(countryCode.toUpperCase());
}

// Timeout
export const timeout = function (s: number) {
  // Return
  return new Promise(function (_, reject) {
    // Timeout
    setTimeout(function () {
      // Create error
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// Return JSON
export const getJson = async function (url: string) {
  try {
    // Values
    const res: any = await Promise.race([
      fetch(url),
      timeout(config.TIMEOUT_SEC),
    ]);
    const data = await res.json();

    // Logic
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    // Return
    return data;
  } catch (err) {
    throw err;
  }
};
