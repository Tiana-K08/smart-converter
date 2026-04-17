import { setCurrentConverterType } from '../state/appState.js';
import { updateUnitsByConverterType } from './controller.js';

export function handleConverterTypeChange(event) {
  setCurrentConverterType(event.target.value);
  updateUnitsByConverterType();
}
