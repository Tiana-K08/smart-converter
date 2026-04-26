const state = {
  currentConverterType: null,
};

export function getCurrentConverterType() {
  return state.currentConverterType;
}

export function setCurrentConverterType(newType) {
  if (typeof newType !== 'string') {
    throw new TypeError('[setCurrentConverterType] newType must be a string');
  }

  state.currentConverterType = newType;
}
