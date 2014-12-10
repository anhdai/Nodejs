function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(user1, index1, array1) {
      return goodUsers.some(function(user2, index2, array2) {
        return user2.id === user1.id
      })
    })
  }
}
module.exports = checkUsersValid;