// deno-lint-ignore-file no-prototype-builtins
// @ts-nocheck: no-prototype-builtins

/**
 * Deep merges two objects
 *
 * @param target
 * @param source
 * @returns
 */
const deepMerge = (target: object, source: object) => {
   const result = { ...target };
   for (const key in source) {
      if (source.hasOwnProperty(key)) {
         if (typeof source[key] === 'object' && typeof result[key] === 'object') {
            result[key] = deepMerge(result[key], source[key]);
         } else {
            result[key] = source[key];
         }
      }
   }
   return result;
}

export { deepMerge }