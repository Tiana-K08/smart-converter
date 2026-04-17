import { converterConfig } from '../config/converterConfig.js';

/**
 * Returns the initial converter type.
 * @returns {string} the first available converter type from the configuration.
 */
export function selectInitialConverterType() {
  return Object.keys(converterConfig)[0];
}

/**
 * Returns the available converter types from the configuration.
 * @returns {string[]} the array of converter types.
 */
export function selectAllConverterTypes() {
  return Object.keys(converterConfig);
}

/**
 * Returns measurement systems for a given converter type.
 * @param {string} type - the current converter type.
 * @returns {Object[]} the array of measurement system objects { label, units }.
 */
export function selectMeasurementSystems(type) {
  return Object.values(converterConfig[type].systems);
}
