
var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Continent_possibleTypes = ['Continent']
module.exports.isContinent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContinent"')
  return Continent_possibleTypes.includes(obj.__typename)
}



var Country_possibleTypes = ['Country']
module.exports.isCountry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCountry"')
  return Country_possibleTypes.includes(obj.__typename)
}



var Language_possibleTypes = ['Language']
module.exports.isLanguage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLanguage"')
  return Language_possibleTypes.includes(obj.__typename)
}



var State_possibleTypes = ['State']
module.exports.isState = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isState"')
  return State_possibleTypes.includes(obj.__typename)
}
