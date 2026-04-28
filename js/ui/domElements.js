const typeSelect = document.getElementById('select-type');

if (!typeSelect) {
  throw new Error('[dom] missing required DOM element: #select-type');
}

const unitSelects = [...document.querySelectorAll('.js-select-unit')];

// Converter requires exactly 2 unit selects (from / to)
if (unitSelects.length !== 2) {
  throw new Error(
    `[dom] incorrect number of required DOM elements: .js-select-unit (expected 2, found ${unitSelects.length})`,
  );
}

export const elements = Object.freeze({
  typeSelect,
  unitSelects,
});
