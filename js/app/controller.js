import { elements } from '../ui/domElements.js';
import { state } from '../state/appState.js';
import { selectMeasurementSystems } from '../selectors/converterSelectors.js';
import { renderAllUnitSelects } from '../ui/converterRendering.js';

/**
 * Updates units in select elements based on the measurement systems for the current converter type.
 */
export function updateUnitsByConverterType() {
  const systems = selectMeasurementSystems(state.currentConverterType);
  renderAllUnitSelects(elements.unitSelects, systems);
}
