import { capitalize } from '../utils/utils.js';
import {
  addPlaceholderOption,
  addOptions,
  addOptGroup,
} from './renderUtils.js';

/**
 * Renders converter types as options inside a select element.
 * @param {HTMLSelectElement} select - the select element to populate.
 * @param {string[]} types - the array of converter types.
 */
export function renderConverterTypes(select, types) {
  // if (!select) {
  //   throw new Error('[UI] Missing select element in renderConverterTypes');
  // }

  // if (!Array.isArray(types)) {
  //   throw new Error(
  //     '[UI] Invalid types in renderConverterTypes: expected array',
  //   );
  // }

  const formattedTypes = types.map((type) => ({
    value: type,
    label: `${capitalize(type)} Conversion`,
  }));

  select.replaceChildren();
  addOptions(select, formattedTypes);
}

/**
 * Renders units as options inside a select element.
 * Groups units by systems if multiple systems exist.
 * @param {HTMLSelectElement} select - the select element to populate.
 * @param {Object[]} unitSystems - the array of unit system objects { label, units }.
 */
export function renderConverterUnits(select, unitSystems) {
  // if (!select) {
  //   throw new Error('[UI] Missing select element in renderConverterUnits');
  // }

  // if (!Array.isArray(unitSystems)) {
  //   throw new Error(
  //     '[UI] Invalid unitSystems in renderConverterUnits: expected array',
  //   );
  // }

  select.replaceChildren();
  addPlaceholderOption(select, 'Select a unit');

  unitSystems.forEach((system) => {
    if (unitSystems.length > 1) {
      addOptGroup(select, system.label, system.units);
    } else {
      addOptions(select, system.units);
    }
  });
}

/**
 * Renders units in multiple select elements at once.
 * @param {HTMLSelectElement[]} selects - the array of select elements to populate.
 * @param {Object[]} unitSystems - the array of unit system objects { label, units }.
 */
export function renderAllUnitSelects(selects, unitSystems) {
  selects.forEach((select) => {
    renderConverterUnits(select, unitSystems);
  });
}
