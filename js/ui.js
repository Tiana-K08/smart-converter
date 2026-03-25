// =============== UI rendering utilities ===============
/**
 * Appends a disabled placeholder-option to a select element.
 * The option is hidden from the dropdown list but displayed as the default selected value.
 * @param {HTMLSelectElement} container - the select element to append the placeholder to.
 * @param {string} text - the placeholder text to display.
 */
function addPlaceholderOption(container, text) {
  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.selected = true;
  placeholder.disabled = true;
  placeholder.hidden = true;
  placeholder.textContent = text;

  container.appendChild(placeholder);
}

/**
 * Appends multiple option elements to a select or optgroup element.
 * @param {HTMLSelectElement | HTMLOptGroupElement} container - the element to append options to.
 * @param {Object[]} optionItems - the array of objects { value, label }.
 */
function addOptions(container, optionItems) {
  optionItems.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.value;
    option.textContent = item.label;

    container.appendChild(option);
  });
}

/**
 * Appends an optgroup element with options to a select element.
 * @param {HTMLSelectElement} container - the select element to append the optgroup to.
 * @param {string} groupLabel - the label for the optgroup.
 * @param {Object[]} optionItems - the array of objects { value, label }.
 */
function addOptGroup(container, groupLabel, optionItems) {
  const optGroup = document.createElement('optgroup');
  optGroup.label = groupLabel;

  addOptions(optGroup, optionItems);

  container.appendChild(optGroup);
}

// =============== Helper functions ===============
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// =============== Rendering functions ===============
/**
 * Renders converter types as options inside a select element.
 * @param {HTMLSelectElement} select - the select element to populate.
 * @param {Object} converterConfig - the full converter configuration object.
 */
function renderConverterTypes(select, converterConfig) {
  const conversionTypes = Object.keys(converterConfig);

  const formattedTypes = conversionTypes.map((type) => {
    return {
      value: type,
      label: `${capitalize(type)} Conversion`,
    };
  });

  select.replaceChildren();
  addOptions(select, formattedTypes);
}

/**
 * Renders units for the selected converter type inside a select element.
 * Groups units by measurement systems if multiple systems exist.
 * @param {HTMLSelectElement} select - the select element to populate.
 * @param {Object} converterConfig - the full converter configuration object.
 * @param {string} converterType - the selected converter type key.
 */
function renderConverterUnits(select, converterConfig, converterType) {
  const conversionTypeConfig = converterConfig[converterType];

  select.replaceChildren();
  addPlaceholderOption(select, 'Select a unit');

  const measurementSystems = Object.values(conversionTypeConfig.systems);

  measurementSystems.forEach((system) => {
    if (measurementSystems.length > 1) {
      addOptGroup(select, system.label, system.units);
    } else {
      addOptions(select, system.units);
    }
  });
}
