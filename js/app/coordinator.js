import { elements } from '../ui/domElements.js';
import { getCurrentConverterType } from '../state/appState.js';
import { selectMeasurementSystems } from '../selectors/converterSelectors.js';
import { renderAllUnitSelects } from '../ui/renderConverter.js';

/**
 * Updates units in select elements based on the measurement systems for the current converter type.
 */
export function updateUnitsByConverterType() {
  const type = getCurrentConverterType();
  const systems = selectMeasurementSystems(type);

  renderAllUnitSelects(elements.unitSelects, systems);
}
