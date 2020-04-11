const global = {};

function setGlobal(name, config) {
  global[name] = config;
}

function getGlobal(name) {
  return global[name];
}

export { setGlobal, getGlobal };