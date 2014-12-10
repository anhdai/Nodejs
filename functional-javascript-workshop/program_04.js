function getShortMessages(messages) {
  var result = []
  function getMessage(data) {
    return data.message.length < 50
  }
  result = messages.filter(getMessage).
            map(function(data) {return data.message})
  return result
}
module.exports = getShortMessages;