
const getHandleActionName = function (action) {
  return 'handle' + action.charAt(0).toUpperCase() + action.slice(1)
}

const getInputCallbackName = function (inputName) {
  return 'onChange' + inputName.charAt(0).toUpperCase() + inputName.slice(1)
}

module.exports = {
  getHandleActionName,
  getInputCallbackName
}
