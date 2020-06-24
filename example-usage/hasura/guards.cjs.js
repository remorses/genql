
var mutation_root_possibleTypes = ['mutation_root']
module.exports.ismutation_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



var query_root_possibleTypes = ['query_root']
module.exports.isquery_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



var subscription_root_possibleTypes = ['subscription_root']
module.exports.issubscription_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



var user_possibleTypes = ['user']
module.exports.isuser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser"')
  return user_possibleTypes.includes(obj.__typename)
}



var user_aggregate_possibleTypes = ['user_aggregate']
module.exports.isuser_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_aggregate"')
  return user_aggregate_possibleTypes.includes(obj.__typename)
}



var user_aggregate_fields_possibleTypes = ['user_aggregate_fields']
module.exports.isuser_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_aggregate_fields"')
  return user_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var user_avg_fields_possibleTypes = ['user_avg_fields']
module.exports.isuser_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_avg_fields"')
  return user_avg_fields_possibleTypes.includes(obj.__typename)
}



var user_max_fields_possibleTypes = ['user_max_fields']
module.exports.isuser_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_max_fields"')
  return user_max_fields_possibleTypes.includes(obj.__typename)
}



var user_min_fields_possibleTypes = ['user_min_fields']
module.exports.isuser_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_min_fields"')
  return user_min_fields_possibleTypes.includes(obj.__typename)
}



var user_mutation_response_possibleTypes = ['user_mutation_response']
module.exports.isuser_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_mutation_response"')
  return user_mutation_response_possibleTypes.includes(obj.__typename)
}



var user_stddev_fields_possibleTypes = ['user_stddev_fields']
module.exports.isuser_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_stddev_fields"')
  return user_stddev_fields_possibleTypes.includes(obj.__typename)
}



var user_stddev_pop_fields_possibleTypes = ['user_stddev_pop_fields']
module.exports.isuser_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_stddev_pop_fields"')
  return user_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var user_stddev_samp_fields_possibleTypes = ['user_stddev_samp_fields']
module.exports.isuser_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_stddev_samp_fields"')
  return user_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var user_sum_fields_possibleTypes = ['user_sum_fields']
module.exports.isuser_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_sum_fields"')
  return user_sum_fields_possibleTypes.includes(obj.__typename)
}



var user_var_pop_fields_possibleTypes = ['user_var_pop_fields']
module.exports.isuser_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_var_pop_fields"')
  return user_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var user_var_samp_fields_possibleTypes = ['user_var_samp_fields']
module.exports.isuser_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_var_samp_fields"')
  return user_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var user_variance_fields_possibleTypes = ['user_variance_fields']
module.exports.isuser_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_variance_fields"')
  return user_variance_fields_possibleTypes.includes(obj.__typename)
}
