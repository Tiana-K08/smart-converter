import { elements } from '../ui/domElements.js';
import { setCurrentConverterType } from '../state/appState.js';
import {
  selectInitialConverterType,
  selectAllConverterTypes,
} from '../selectors/converterSelectors.js';
import { renderConverterTypes } from '../ui/converterRendering.js';
import { updateUnitsByConverterType } from './controller.js';
import { handleConverterTypeChange } from './eventHandlers.js';

export function initApp() {
  // State Initialization
  const initialConverterType = selectInitialConverterType();
  setCurrentConverterType(initialConverterType);

  // Initial UI Render
  const converterTypes = selectAllConverterTypes();
  renderConverterTypes(elements.typeSelect, converterTypes);

  updateUnitsByConverterType();

  // Event Listeners
  elements.typeSelect.addEventListener('change', handleConverterTypeChange);
}
