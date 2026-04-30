import { elements } from '../ui/domElements.js';
import { setCurrentConverterType } from '../state/appState.js';
import {
  selectInitialConverterType,
  selectAllConverterTypes,
} from '../selectors/converterSelectors.js';
import { renderConverterTypes } from '../ui/renderConverter.js';
import { updateUnitsByConverterType } from './coordinator.js';
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
