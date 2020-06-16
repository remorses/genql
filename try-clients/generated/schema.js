"use strict";
exports.__esModule = true;
exports.issubscription_root = exports.isuser_mutation_response = exports.ismutation_root = exports.isuser_variance_fields = exports.isuser_var_samp_fields = exports.isuser_var_pop_fields = exports.isuser_sum_fields = exports.isuser_stddev_samp_fields = exports.isuser_stddev_pop_fields = exports.isuser_stddev_fields = exports.isuser_min_fields = exports.isuser_max_fields = exports.isuser_avg_fields = exports.isuser_aggregate_fields = exports.isuser_aggregate = exports.isuser = exports.isquery_root = void 0;
var query_root_possibleTypes = ['query_root'];
exports.isquery_root = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return query_root_possibleTypes.includes(obj.__typename);
};
var user_possibleTypes = ['user'];
exports.isuser = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_possibleTypes.includes(obj.__typename);
};
var user_aggregate_possibleTypes = ['user_aggregate'];
exports.isuser_aggregate = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_aggregate_possibleTypes.includes(obj.__typename);
};
var user_aggregate_fields_possibleTypes = ['user_aggregate_fields'];
exports.isuser_aggregate_fields = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_aggregate_fields_possibleTypes.includes(obj.__typename);
};
var user_avg_fields_possibleTypes = ['user_avg_fields'];
exports.isuser_avg_fields = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_avg_fields_possibleTypes.includes(obj.__typename);
};
var user_max_fields_possibleTypes = ['user_max_fields'];
exports.isuser_max_fields = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_max_fields_possibleTypes.includes(obj.__typename);
};
var user_min_fields_possibleTypes = ['user_min_fields'];
exports.isuser_min_fields = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_min_fields_possibleTypes.includes(obj.__typename);
};
var user_stddev_fields_possibleTypes = ['user_stddev_fields'];
exports.isuser_stddev_fields = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_stddev_fields_possibleTypes.includes(obj.__typename);
};
var user_stddev_pop_fields_possibleTypes = ['user_stddev_pop_fields'];
exports.isuser_stddev_pop_fields = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
var user_stddev_samp_fields_possibleTypes = ['user_stddev_samp_fields'];
exports.isuser_stddev_samp_fields = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
var user_sum_fields_possibleTypes = ['user_sum_fields'];
exports.isuser_sum_fields = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_sum_fields_possibleTypes.includes(obj.__typename);
};
var user_var_pop_fields_possibleTypes = ['user_var_pop_fields'];
exports.isuser_var_pop_fields = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_var_pop_fields_possibleTypes.includes(obj.__typename);
};
var user_var_samp_fields_possibleTypes = ['user_var_samp_fields'];
exports.isuser_var_samp_fields = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_var_samp_fields_possibleTypes.includes(obj.__typename);
};
var user_variance_fields_possibleTypes = ['user_variance_fields'];
exports.isuser_variance_fields = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_variance_fields_possibleTypes.includes(obj.__typename);
};
var mutation_root_possibleTypes = ['mutation_root'];
exports.ismutation_root = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return mutation_root_possibleTypes.includes(obj.__typename);
};
var user_mutation_response_possibleTypes = ['user_mutation_response'];
exports.isuser_mutation_response = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return user_mutation_response_possibleTypes.includes(obj.__typename);
};
var subscription_root_possibleTypes = ['subscription_root'];
exports.issubscription_root = function (obj) {
    if (!obj.__typename)
        throw new Error('__typename is missing');
    return subscription_root_possibleTypes.includes(obj.__typename);
};
//# sourceMappingURL=schema.js.map