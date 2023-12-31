export function updateLS (variablName, value) {
  localStorage.setItem(variablName, JSON.stringify(value));
  return getLS(variablName);
}

export function getLS (variablName) {
  return JSON.parse(localStorage.getItem(variablName));
}

export function delLS (variablName) {
  return localStorage.removeItem(variablName);
}

export function initLS (variablName, defaultValue) {
  if (getLS(variablName) == null) {
    updateLS (variablName, defaultValue);
    return defaultValue;
  } else {
    return getLS(variablName);
  }
}