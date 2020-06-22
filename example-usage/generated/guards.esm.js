
var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Continent_possibleTypes = ['Continent']
export var isContinent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContinent"')
  return Continent_possibleTypes.includes(obj.__typename)
}



var Country_possibleTypes = ['Country']
export var isCountry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCountry"')
  return Country_possibleTypes.includes(obj.__typename)
}



var Language_possibleTypes = ['Language']
export var isLanguage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLanguage"')
  return Language_possibleTypes.includes(obj.__typename)
}



var State_possibleTypes = ['State']
export var isState = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isState"')
  return State_possibleTypes.includes(obj.__typename)
}
