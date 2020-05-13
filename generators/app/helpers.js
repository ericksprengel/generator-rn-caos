
const toUpperCaseFirstLetter = function (text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const getStateComponentNameForStorybook = function (state) {
  return toUpperCaseFirstLetter(state)
}

const getHandleActionName = function (action) {
  return 'handle' + toUpperCaseFirstLetter(action)
}

const getInputCallbackName = function (inputName) {
  return 'onChange' + toUpperCaseFirstLetter(inputName)
}

module.exports = {
  toUpperCaseFirstLetter,
  getStateComponentNameForStorybook,
  getHandleActionName,
  getInputCallbackName
}
