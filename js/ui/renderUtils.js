/**
 * Appends a disabled placeholder-option to a select element.
 * The option is hidden from the dropdown list but displayed as the default selected value.
 * @param {HTMLSelectElement} container - the select element to append the placeholder to.
 * @param {string} text - the placeholder text to display.
 */
export function addPlaceholderOption(container, text) {
  if (!(container instanceof HTMLSelectElement)) {
    throw new Error(
      '[addPlaceholderOption] container must be HTMLSelectElement',
    );
  }

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
export function addOptions(container, optionItems) {
  if (
    !(container instanceof HTMLSelectElement) &&
    !(container instanceof HTMLOptGroupElement)
  ) {
    throw new Error(
      '[addOptions] container must be HTMLSelectElement or HTMLOptGroupElement',
    );
  }

  if (!Array.isArray(optionItems)) {
    throw new TypeError('[addOptions] optionItems must be array');
  }

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
export function addOptGroup(container, groupLabel, optionItems) {
  if (!(container instanceof HTMLSelectElement)) {
    throw new Error('[addOptGroup] container must be HTMLSelectElement');
  }

  const optGroup = document.createElement('optgroup');
  optGroup.label = groupLabel;

  addOptions(optGroup, optionItems);

  container.appendChild(optGroup);
}
