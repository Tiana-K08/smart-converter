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

  let safeText = text;

  if (typeof text !== 'string' || text.trim() === '') {
    console.warn('[addPlaceholderOption] text should be non-empty string');
    safeText = 'Select an option';
  }

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.selected = true;
  placeholder.disabled = true;
  placeholder.hidden = true;
  placeholder.textContent = safeText;

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

  if (!Array.isArray(optionItems) || optionItems.length === 0) {
    throw new Error('[addOptions] optionItems must be non-empty array');
  }

  optionItems.forEach((item) => {
    if (
      !item ||
      typeof item.value !== 'string' ||
      typeof item.label !== 'string'
    ) {
      throw new Error(
        `[addOptions] invalid item in optionItems (expected { value: string, label: string }, received ${JSON.stringify(item)})`,
      );
    }

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

  let safeGroupLabel = groupLabel;

  if (typeof groupLabel !== 'string') {
    console.warn('[addOptGroup] groupLabel should be string');
    safeGroupLabel = '';
  }

  const optGroup = document.createElement('optgroup');
  optGroup.label = safeGroupLabel;

  addOptions(optGroup, optionItems);

  container.appendChild(optGroup);
}
