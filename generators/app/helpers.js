
const getHandleActionName = function (action) {
  return 'handle' + action.charAt(0).toUpperCase() + action.slice(1)
}

module.exports = {
  getHandleActionName
}
