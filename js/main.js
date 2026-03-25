// =============== DOM Elements ===============
const typeSelect = document.getElementById('select-type');
const unitSelects = document.querySelectorAll('.js-select-unit');

// =============== Application state ===============
let currentConverterType = Object.keys(converterConfig)[0];

// =============== Initial UI Render ===============
renderConverterTypes(typeSelect, converterConfig);

unitSelects.forEach((select) => {
  renderConverterUnits(select, converterConfig, currentConverterType);
});

// =============== Event Handlers ===============
/**
 * Handles changes of the converter type select.
 * Updates the current converter type state and rerenders unit selects accordingly.
 * @param {Event} event - the change event triggered by the select element.
 */
function handleConverterTypeChange(event) {
  currentConverterType = event.target.value;

  unitSelects.forEach((select) => {
    renderConverterUnits(select, converterConfig, currentConverterType);
  });
}

// =============== Event Listeners ===============
typeSelect.addEventListener('change', handleConverterTypeChange);
