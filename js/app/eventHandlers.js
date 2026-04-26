import { setCurrentConverterType } from '../state/appState.js';
import { updateUnitsByConverterType } from './coordinator.js';

export function handleConverterTypeChange(event) {
  setCurrentConverterType(event.target.value);
  updateUnitsByConverterType();
}
