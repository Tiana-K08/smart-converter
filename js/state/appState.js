export const state = {
  currentConverterType: null,
};

/**
 * Updates the current converter type in the application state.
 * @param {string} type - the new converter type to set.
 */
export function setCurrentConverterType(type) {
  state.currentConverterType = type;
}
