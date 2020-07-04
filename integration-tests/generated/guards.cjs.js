
var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var RecursiveType_possibleTypes = ['RecursiveType']
module.exports.isRecursiveType = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRecursiveType"')
  return RecursiveType_possibleTypes.includes(obj.__typename)
}



var Repository_possibleTypes = ['Repository']
module.exports.isRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepository"')
  return Repository_possibleTypes.includes(obj.__typename)
}



var ForkConnection_possibleTypes = ['ForkConnection']
module.exports.isForkConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isForkConnection"')
  return ForkConnection_possibleTypes.includes(obj.__typename)
}



var ForkEdge_possibleTypes = ['ForkEdge']
module.exports.isForkEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isForkEdge"')
  return ForkEdge_possibleTypes.includes(obj.__typename)
}



var Fork_possibleTypes = ['Fork']
module.exports.isFork = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFork"')
  return Fork_possibleTypes.includes(obj.__typename)
}



var User_possibleTypes = ['User']
module.exports.isUser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



var Subscription_possibleTypes = ['Subscription']
module.exports.isSubscription = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}



var Account_possibleTypes = ['User','Guest']
module.exports.isAccount = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAccount"')
  return Account_possibleTypes.includes(obj.__typename)
}



var Guest_possibleTypes = ['Guest']
module.exports.isGuest = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGuest"')
  return Guest_possibleTypes.includes(obj.__typename)
}



var House_possibleTypes = ['House']
module.exports.isHouse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHouse"')
  return House_possibleTypes.includes(obj.__typename)
}



var Bank_possibleTypes = ['Bank']
module.exports.isBank = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBank"')
  return Bank_possibleTypes.includes(obj.__typename)
}



var Point_possibleTypes = ['House','Bank']
module.exports.isPoint = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPoint"')
  return Point_possibleTypes.includes(obj.__typename)
}
