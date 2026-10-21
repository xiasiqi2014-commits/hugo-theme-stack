import slugify from "slugify";

const hasNonLatin = (str: string): boolean => /[^\x00-\x7F]/.test(str);

/**
 * Slugify a string using a hybrid approach:
 * - Latin strings: slugify (e.g. "E2E Testing" → "e2e-testing")
 * - Strings with non-Latin (e.g. Chinese) chars: preserve CJK characters while normalizing spaces/symbols
 */
export const slugifyStr = (str: string): string => {
  if (hasNonLatin(str)) {
    return str
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[/?#%\\&+="':;,.<>|*~`!@^()[\]{}]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }
  return slugify(str, { lower: true });
};

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));
