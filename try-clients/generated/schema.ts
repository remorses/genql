import {FieldsSelection,Observable} from 'genql-runtime'


/** query root */
export interface query_root{
    /** fetch data from the table: "user" */
    user: user[]
    /** fetch aggregated fields from the table: "user" */
    user_aggregate: user_aggregate
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk: (user|null)
    __typename: 'query_root'
}


/** select columns of table "user" */
export type user_select_column = 'age' | 'id' | 'name'


/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int=number


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean=boolean


/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String=string


/** columns and relationships of "user" */
export interface user{
    age: Int
    id: String
    name: String
    __typename: 'user'
}


/** aggregated selection of "user" */
export interface user_aggregate{
    aggregate: (user_aggregate_fields|null)
    nodes: user[]
    __typename: 'user_aggregate'
}


/** aggregate fields of "user" */
export interface user_aggregate_fields{
    avg: (user_avg_fields|null)
    count: (Int|null)
    max: (user_max_fields|null)
    min: (user_min_fields|null)
    stddev: (user_stddev_fields|null)
    stddev_pop: (user_stddev_pop_fields|null)
    stddev_samp: (user_stddev_samp_fields|null)
    sum: (user_sum_fields|null)
    var_pop: (user_var_pop_fields|null)
    var_samp: (user_var_samp_fields|null)
    variance: (user_variance_fields|null)
    __typename: 'user_aggregate_fields'
}


/** aggregate avg on columns */
export interface user_avg_fields{
    age: (Float|null)
    __typename: 'user_avg_fields'
}


/** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
export type Float=number


/** aggregate max on columns */
export interface user_max_fields{
    age: (Int|null)
    id: (String|null)
    name: (String|null)
    __typename: 'user_max_fields'
}


/** aggregate min on columns */
export interface user_min_fields{
    age: (Int|null)
    id: (String|null)
    name: (String|null)
    __typename: 'user_min_fields'
}


/** aggregate stddev on columns */
export interface user_stddev_fields{
    age: (Float|null)
    __typename: 'user_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface user_stddev_pop_fields{
    age: (Float|null)
    __typename: 'user_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface user_stddev_samp_fields{
    age: (Float|null)
    __typename: 'user_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface user_sum_fields{
    age: (Int|null)
    __typename: 'user_sum_fields'
}


/** aggregate var_pop on columns */
export interface user_var_pop_fields{
    age: (Float|null)
    __typename: 'user_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface user_var_samp_fields{
    age: (Float|null)
    __typename: 'user_var_samp_fields'
}


/** aggregate variance on columns */
export interface user_variance_fields{
    age: (Float|null)
    __typename: 'user_variance_fields'
}


/** mutation root */
export interface mutation_root{
    /** delete data from the table: "user" */
    delete_user: (user_mutation_response|null)
    /** delete single row from the table: "user" */
    delete_user_by_pk: (user|null)
    /** insert data into the table: "user" */
    insert_user: (user_mutation_response|null)
    /** insert a single row into the table: "user" */
    insert_user_one: (user|null)
    /** update data of the table: "user" */
    update_user: (user_mutation_response|null)
    /** update single row of the table: "user" */
    update_user_by_pk: (user|null)
    __typename: 'mutation_root'
}


/** response of any mutation on the table "user" */
export interface user_mutation_response{
    /** number of affected rows by the mutation */
    affected_rows: Int
    /** data of the affected rows by the mutation */
    returning: user[]
    __typename: 'user_mutation_response'
}


/** unique or primary key constraints on table "user" */
export type user_constraint = 'user_pkey'


/** update columns of table "user" */
export type user_update_column = 'age' | 'id' | 'name'


/** subscription root */
export interface subscription_root{
    /** fetch data from the table: "user" */
    user: user[]
    /** fetch aggregated fields from the table: "user" */
    user_aggregate: user_aggregate
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk: (user|null)
    __typename: 'subscription_root'
}


/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
export type ID=string


/** query root */
export interface query_rootRequest{
    /** fetch data from the table: "user" */
    user?: [{
    /** distinct select on columns */
    distinct_on?:(user_select_column[]|null),
    /** limit the number of rows returned */
    limit?:(Int|null),
    /** skip the first n rows. Use only with order_by */
    offset?:(Int|null),
    /** sort the rows by one or more columns */
    order_by?:(user_order_by[]|null),
    /** filter the rows returned */
    where?:(user_bool_exp|null)},userRequest]|userRequest
    /** fetch aggregated fields from the table: "user" */
    user_aggregate?: [{
    /** distinct select on columns */
    distinct_on?:(user_select_column[]|null),
    /** limit the number of rows returned */
    limit?:(Int|null),
    /** skip the first n rows. Use only with order_by */
    offset?:(Int|null),
    /** sort the rows by one or more columns */
    order_by?:(user_order_by[]|null),
    /** filter the rows returned */
    where?:(user_bool_exp|null)},user_aggregateRequest]|user_aggregateRequest
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: [{id: String},userRequest]
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** ordering options when selecting data from "user" */
export interface user_order_by{age?:(order_by|null),id?:(order_by|null),name?:(order_by|null)}


/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface user_bool_exp{_and?:((user_bool_exp|null)[]|null),_not?:(user_bool_exp|null),_or?:((user_bool_exp|null)[]|null),age?:(Int_comparison_exp|null),id?:(String_comparison_exp|null),name?:(String_comparison_exp|null)}


/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export interface Int_comparison_exp{_eq?:(Int|null),_gt?:(Int|null),_gte?:(Int|null),_in?:(Int[]|null),_is_null?:(Boolean|null),_lt?:(Int|null),_lte?:(Int|null),_neq?:(Int|null),_nin?:(Int[]|null)}


/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface String_comparison_exp{_eq?:(String|null),_gt?:(String|null),_gte?:(String|null),_ilike?:(String|null),_in?:(String[]|null),_is_null?:(Boolean|null),_like?:(String|null),_lt?:(String|null),_lte?:(String|null),_neq?:(String|null),_nilike?:(String|null),_nin?:(String[]|null),_nlike?:(String|null),_nsimilar?:(String|null),_similar?:(String|null)}


/** columns and relationships of "user" */
export interface userRequest{
    age?: boolean|number
    id?: boolean|number
    name?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregated selection of "user" */
export interface user_aggregateRequest{
    aggregate?: user_aggregate_fieldsRequest
    nodes?: userRequest
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregate fields of "user" */
export interface user_aggregate_fieldsRequest{
    avg?: user_avg_fieldsRequest
    count?: [{columns?:(user_select_column[]|null),distinct?:(Boolean|null)}]|boolean|number
    max?: user_max_fieldsRequest
    min?: user_min_fieldsRequest
    stddev?: user_stddev_fieldsRequest
    stddev_pop?: user_stddev_pop_fieldsRequest
    stddev_samp?: user_stddev_samp_fieldsRequest
    sum?: user_sum_fieldsRequest
    var_pop?: user_var_pop_fieldsRequest
    var_samp?: user_var_samp_fieldsRequest
    variance?: user_variance_fieldsRequest
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregate avg on columns */
export interface user_avg_fieldsRequest{
    age?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregate max on columns */
export interface user_max_fieldsRequest{
    age?: boolean|number
    id?: boolean|number
    name?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregate min on columns */
export interface user_min_fieldsRequest{
    age?: boolean|number
    id?: boolean|number
    name?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregate stddev on columns */
export interface user_stddev_fieldsRequest{
    age?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregate stddev_pop on columns */
export interface user_stddev_pop_fieldsRequest{
    age?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregate stddev_samp on columns */
export interface user_stddev_samp_fieldsRequest{
    age?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregate sum on columns */
export interface user_sum_fieldsRequest{
    age?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregate var_pop on columns */
export interface user_var_pop_fieldsRequest{
    age?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregate var_samp on columns */
export interface user_var_samp_fieldsRequest{
    age?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** aggregate variance on columns */
export interface user_variance_fieldsRequest{
    age?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** mutation root */
export interface mutation_rootRequest{
    /** delete data from the table: "user" */
    delete_user?: [{
    /** filter the rows which have to be deleted */
    where: user_bool_exp},user_mutation_responseRequest]
    /** delete single row from the table: "user" */
    delete_user_by_pk?: [{id: String},userRequest]
    /** insert data into the table: "user" */
    insert_user?: [{
    /** the rows to be inserted */
    objects: user_insert_input[],
    /** on conflict condition */
    on_conflict?:(user_on_conflict|null)},user_mutation_responseRequest]
    /** insert a single row into the table: "user" */
    insert_user_one?: [{
    /** the row to be inserted */
    object: user_insert_input,
    /** on conflict condition */
    on_conflict?:(user_on_conflict|null)},userRequest]
    /** update data of the table: "user" */
    update_user?: [{
    /** increments the integer columns with given value of the filtered values */
    _inc?:(user_inc_input|null),
    /** sets the columns of the filtered rows to the given values */
    _set?:(user_set_input|null),
    /** filter the rows which have to be updated */
    where: user_bool_exp},user_mutation_responseRequest]
    /** update single row of the table: "user" */
    update_user_by_pk?: [{
    /** increments the integer columns with given value of the filtered values */
    _inc?:(user_inc_input|null),
    /** sets the columns of the filtered rows to the given values */
    _set?:(user_set_input|null),pk_columns: user_pk_columns_input},userRequest]
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** response of any mutation on the table "user" */
export interface user_mutation_responseRequest{
    /** number of affected rows by the mutation */
    affected_rows?: boolean|number
    /** data of the affected rows by the mutation */
    returning?: userRequest
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** input type for inserting data into table "user" */
export interface user_insert_input{age?:(Int|null),id?:(String|null),name?:(String|null)}


/** on conflict condition type for table "user" */
export interface user_on_conflict{constraint: user_constraint,update_columns: user_update_column[],where?:(user_bool_exp|null)}


/** input type for incrementing integer column in table "user" */
export interface user_inc_input{age?:(Int|null)}


/** input type for updating data in table "user" */
export interface user_set_input{age?:(Int|null),id?:(String|null),name?:(String|null)}


/** primary key columns input for table: "user" */
export interface user_pk_columns_input{id: String}


/** subscription root */
export interface subscription_rootRequest{
    /** fetch data from the table: "user" */
    user?: [{
    /** distinct select on columns */
    distinct_on?:(user_select_column[]|null),
    /** limit the number of rows returned */
    limit?:(Int|null),
    /** skip the first n rows. Use only with order_by */
    offset?:(Int|null),
    /** sort the rows by one or more columns */
    order_by?:(user_order_by[]|null),
    /** filter the rows returned */
    where?:(user_bool_exp|null)},userRequest]|userRequest
    /** fetch aggregated fields from the table: "user" */
    user_aggregate?: [{
    /** distinct select on columns */
    distinct_on?:(user_select_column[]|null),
    /** limit the number of rows returned */
    limit?:(Int|null),
    /** skip the first n rows. Use only with order_by */
    offset?:(Int|null),
    /** sort the rows by one or more columns */
    order_by?:(user_order_by[]|null),
    /** filter the rows returned */
    where?:(user_bool_exp|null)},user_aggregateRequest]|user_aggregateRequest
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: [{id: String},userRequest]
    __typename?: boolean|number
    __scalar?: boolean|number
}


/** order by aggregate values of table "user" */
export interface user_aggregate_order_by{avg?:(user_avg_order_by|null),count?:(order_by|null),max?:(user_max_order_by|null),min?:(user_min_order_by|null),stddev?:(user_stddev_order_by|null),stddev_pop?:(user_stddev_pop_order_by|null),stddev_samp?:(user_stddev_samp_order_by|null),sum?:(user_sum_order_by|null),var_pop?:(user_var_pop_order_by|null),var_samp?:(user_var_samp_order_by|null),variance?:(user_variance_order_by|null)}


/** order by avg() on columns of table "user" */
export interface user_avg_order_by{age?:(order_by|null)}


/** order by max() on columns of table "user" */
export interface user_max_order_by{age?:(order_by|null),id?:(order_by|null),name?:(order_by|null)}


/** order by min() on columns of table "user" */
export interface user_min_order_by{age?:(order_by|null),id?:(order_by|null),name?:(order_by|null)}


/** order by stddev() on columns of table "user" */
export interface user_stddev_order_by{age?:(order_by|null)}


/** order by stddev_pop() on columns of table "user" */
export interface user_stddev_pop_order_by{age?:(order_by|null)}


/** order by stddev_samp() on columns of table "user" */
export interface user_stddev_samp_order_by{age?:(order_by|null)}


/** order by sum() on columns of table "user" */
export interface user_sum_order_by{age?:(order_by|null)}


/** order by var_pop() on columns of table "user" */
export interface user_var_pop_order_by{age?:(order_by|null)}


/** order by var_samp() on columns of table "user" */
export interface user_var_samp_order_by{age?:(order_by|null)}


/** order by variance() on columns of table "user" */
export interface user_variance_order_by{age?:(order_by|null)}


/** input type for inserting array relation for remote table "user" */
export interface user_arr_rel_insert_input{data: user_insert_input[],on_conflict?:(user_on_conflict|null)}


/** input type for inserting object relation for remote table "user" */
export interface user_obj_rel_insert_input{data: user_insert_input,on_conflict?:(user_on_conflict|null)}


const query_root_possibleTypes = ['query_root']
export const isquery_root = (obj: { __typename: String }): obj is query_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return query_root_possibleTypes.includes(obj.__typename)
}



const user_possibleTypes = ['user']
export const isuser = (obj: { __typename: String }): obj is user => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_possibleTypes.includes(obj.__typename)
}



const user_aggregate_possibleTypes = ['user_aggregate']
export const isuser_aggregate = (obj: { __typename: String }): obj is user_aggregate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_aggregate_possibleTypes.includes(obj.__typename)
}



const user_aggregate_fields_possibleTypes = ['user_aggregate_fields']
export const isuser_aggregate_fields = (obj: { __typename: String }): obj is user_aggregate_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const user_avg_fields_possibleTypes = ['user_avg_fields']
export const isuser_avg_fields = (obj: { __typename: String }): obj is user_avg_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_avg_fields_possibleTypes.includes(obj.__typename)
}



const user_max_fields_possibleTypes = ['user_max_fields']
export const isuser_max_fields = (obj: { __typename: String }): obj is user_max_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_max_fields_possibleTypes.includes(obj.__typename)
}



const user_min_fields_possibleTypes = ['user_min_fields']
export const isuser_min_fields = (obj: { __typename: String }): obj is user_min_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_min_fields_possibleTypes.includes(obj.__typename)
}



const user_stddev_fields_possibleTypes = ['user_stddev_fields']
export const isuser_stddev_fields = (obj: { __typename: String }): obj is user_stddev_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_stddev_fields_possibleTypes.includes(obj.__typename)
}



const user_stddev_pop_fields_possibleTypes = ['user_stddev_pop_fields']
export const isuser_stddev_pop_fields = (obj: { __typename: String }): obj is user_stddev_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const user_stddev_samp_fields_possibleTypes = ['user_stddev_samp_fields']
export const isuser_stddev_samp_fields = (obj: { __typename: String }): obj is user_stddev_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const user_sum_fields_possibleTypes = ['user_sum_fields']
export const isuser_sum_fields = (obj: { __typename: String }): obj is user_sum_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_sum_fields_possibleTypes.includes(obj.__typename)
}



const user_var_pop_fields_possibleTypes = ['user_var_pop_fields']
export const isuser_var_pop_fields = (obj: { __typename: String }): obj is user_var_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const user_var_samp_fields_possibleTypes = ['user_var_samp_fields']
export const isuser_var_samp_fields = (obj: { __typename: String }): obj is user_var_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const user_variance_fields_possibleTypes = ['user_variance_fields']
export const isuser_variance_fields = (obj: { __typename: String }): obj is user_variance_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_variance_fields_possibleTypes.includes(obj.__typename)
}



const mutation_root_possibleTypes = ['mutation_root']
export const ismutation_root = (obj: { __typename: String }): obj is mutation_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



const user_mutation_response_possibleTypes = ['user_mutation_response']
export const isuser_mutation_response = (obj: { __typename: String }): obj is user_mutation_response => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return user_mutation_response_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj: { __typename: String }): obj is subscription_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



/** query root */
export interface query_rootPromiseChain{
/** fetch data from the table: "user" */
user:((args?:{
/** distinct select on columns */
distinct_on?:(user_select_column[]|null),
/** limit the number of rows returned */
limit?:(Int|null),
/** skip the first n rows. Use only with order_by */
offset?:(Int|null),
/** sort the rows by one or more columns */
order_by?:(user_order_by[]|null),
/** filter the rows returned */
where?:(user_bool_exp|null)})=>{get:<R extends userRequest>(request: R, defaultValue?:user[])=>Promise<user[]>})&({get:<R extends userRequest>(request: R, defaultValue?:user[])=>Promise<user[]>}),
/** fetch aggregated fields from the table: "user" */
user_aggregate:((args?:{
/** distinct select on columns */
distinct_on?:(user_select_column[]|null),
/** limit the number of rows returned */
limit?:(Int|null),
/** skip the first n rows. Use only with order_by */
offset?:(Int|null),
/** sort the rows by one or more columns */
order_by?:(user_order_by[]|null),
/** filter the rows returned */
where?:(user_bool_exp|null)})=>user_aggregatePromiseChain & {get:<R extends user_aggregateRequest>(request: R, defaultValue?:user_aggregate)=>Promise<user_aggregate>})&(user_aggregatePromiseChain & {get:<R extends user_aggregateRequest>(request: R, defaultValue?:user_aggregate)=>Promise<user_aggregate>}),
/** fetch data from the table: "user" using primary key columns */
user_by_pk:((args:{id: String})=>userPromiseChain & {get:<R extends userRequest>(request: R, defaultValue?:(FieldsSelection<user, R>|null))=>Promise<(FieldsSelection<user, R>|null)>})}


/** query root */
export interface query_rootObservableChain{
/** fetch data from the table: "user" */
user:((args?:{
/** distinct select on columns */
distinct_on?:(user_select_column[]|null),
/** limit the number of rows returned */
limit?:(Int|null),
/** skip the first n rows. Use only with order_by */
offset?:(Int|null),
/** sort the rows by one or more columns */
order_by?:(user_order_by[]|null),
/** filter the rows returned */
where?:(user_bool_exp|null)})=>{get:<R extends userRequest>(request: R, defaultValue?:user[])=>Observable<user[]>})&({get:<R extends userRequest>(request: R, defaultValue?:user[])=>Observable<user[]>}),
/** fetch aggregated fields from the table: "user" */
user_aggregate:((args?:{
/** distinct select on columns */
distinct_on?:(user_select_column[]|null),
/** limit the number of rows returned */
limit?:(Int|null),
/** skip the first n rows. Use only with order_by */
offset?:(Int|null),
/** sort the rows by one or more columns */
order_by?:(user_order_by[]|null),
/** filter the rows returned */
where?:(user_bool_exp|null)})=>user_aggregateObservableChain & {get:<R extends user_aggregateRequest>(request: R, defaultValue?:user_aggregate)=>Observable<user_aggregate>})&(user_aggregateObservableChain & {get:<R extends user_aggregateRequest>(request: R, defaultValue?:user_aggregate)=>Observable<user_aggregate>}),
/** fetch data from the table: "user" using primary key columns */
user_by_pk:((args:{id: String})=>userObservableChain & {get:<R extends userRequest>(request: R, defaultValue?:(FieldsSelection<user, R>|null))=>Observable<(FieldsSelection<user, R>|null)>})}


/** columns and relationships of "user" */
export interface userPromiseChain{age:({get:(request?:boolean|number,defaultValue?:Int)=>Promise<Int>}),id:({get:(request?:boolean|number,defaultValue?:String)=>Promise<String>}),name:({get:(request?:boolean|number,defaultValue?:String)=>Promise<String>})}


/** columns and relationships of "user" */
export interface userObservableChain{age:({get:(request?:boolean|number,defaultValue?:Int)=>Observable<Int>}),id:({get:(request?:boolean|number,defaultValue?:String)=>Observable<String>}),name:({get:(request?:boolean|number,defaultValue?:String)=>Observable<String>})}


/** aggregated selection of "user" */
export interface user_aggregatePromiseChain{aggregate:(user_aggregate_fieldsPromiseChain & {get:<R extends user_aggregate_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_aggregate_fields, R>|null))=>Promise<(FieldsSelection<user_aggregate_fields, R>|null)>}),nodes:({get:<R extends userRequest>(request: R, defaultValue?:user[])=>Promise<user[]>})}


/** aggregated selection of "user" */
export interface user_aggregateObservableChain{aggregate:(user_aggregate_fieldsObservableChain & {get:<R extends user_aggregate_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_aggregate_fields, R>|null))=>Observable<(FieldsSelection<user_aggregate_fields, R>|null)>}),nodes:({get:<R extends userRequest>(request: R, defaultValue?:user[])=>Observable<user[]>})}


/** aggregate fields of "user" */
export interface user_aggregate_fieldsPromiseChain{avg:(user_avg_fieldsPromiseChain & {get:<R extends user_avg_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_avg_fields, R>|null))=>Promise<(FieldsSelection<user_avg_fields, R>|null)>}),count:((args?:{columns?:(user_select_column[]|null),distinct?:(Boolean|null)})=>{get:(request?:boolean|number,defaultValue?:(Int|null))=>Promise<(Int|null)>})&({get:(request?:boolean|number,defaultValue?:(Int|null))=>Promise<(Int|null)>}),max:(user_max_fieldsPromiseChain & {get:<R extends user_max_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_max_fields, R>|null))=>Promise<(FieldsSelection<user_max_fields, R>|null)>}),min:(user_min_fieldsPromiseChain & {get:<R extends user_min_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_min_fields, R>|null))=>Promise<(FieldsSelection<user_min_fields, R>|null)>}),stddev:(user_stddev_fieldsPromiseChain & {get:<R extends user_stddev_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_stddev_fields, R>|null))=>Promise<(FieldsSelection<user_stddev_fields, R>|null)>}),stddev_pop:(user_stddev_pop_fieldsPromiseChain & {get:<R extends user_stddev_pop_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_stddev_pop_fields, R>|null))=>Promise<(FieldsSelection<user_stddev_pop_fields, R>|null)>}),stddev_samp:(user_stddev_samp_fieldsPromiseChain & {get:<R extends user_stddev_samp_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_stddev_samp_fields, R>|null))=>Promise<(FieldsSelection<user_stddev_samp_fields, R>|null)>}),sum:(user_sum_fieldsPromiseChain & {get:<R extends user_sum_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_sum_fields, R>|null))=>Promise<(FieldsSelection<user_sum_fields, R>|null)>}),var_pop:(user_var_pop_fieldsPromiseChain & {get:<R extends user_var_pop_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_var_pop_fields, R>|null))=>Promise<(FieldsSelection<user_var_pop_fields, R>|null)>}),var_samp:(user_var_samp_fieldsPromiseChain & {get:<R extends user_var_samp_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_var_samp_fields, R>|null))=>Promise<(FieldsSelection<user_var_samp_fields, R>|null)>}),variance:(user_variance_fieldsPromiseChain & {get:<R extends user_variance_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_variance_fields, R>|null))=>Promise<(FieldsSelection<user_variance_fields, R>|null)>})}


/** aggregate fields of "user" */
export interface user_aggregate_fieldsObservableChain{avg:(user_avg_fieldsObservableChain & {get:<R extends user_avg_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_avg_fields, R>|null))=>Observable<(FieldsSelection<user_avg_fields, R>|null)>}),count:((args?:{columns?:(user_select_column[]|null),distinct?:(Boolean|null)})=>{get:(request?:boolean|number,defaultValue?:(Int|null))=>Observable<(Int|null)>})&({get:(request?:boolean|number,defaultValue?:(Int|null))=>Observable<(Int|null)>}),max:(user_max_fieldsObservableChain & {get:<R extends user_max_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_max_fields, R>|null))=>Observable<(FieldsSelection<user_max_fields, R>|null)>}),min:(user_min_fieldsObservableChain & {get:<R extends user_min_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_min_fields, R>|null))=>Observable<(FieldsSelection<user_min_fields, R>|null)>}),stddev:(user_stddev_fieldsObservableChain & {get:<R extends user_stddev_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_stddev_fields, R>|null))=>Observable<(FieldsSelection<user_stddev_fields, R>|null)>}),stddev_pop:(user_stddev_pop_fieldsObservableChain & {get:<R extends user_stddev_pop_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_stddev_pop_fields, R>|null))=>Observable<(FieldsSelection<user_stddev_pop_fields, R>|null)>}),stddev_samp:(user_stddev_samp_fieldsObservableChain & {get:<R extends user_stddev_samp_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_stddev_samp_fields, R>|null))=>Observable<(FieldsSelection<user_stddev_samp_fields, R>|null)>}),sum:(user_sum_fieldsObservableChain & {get:<R extends user_sum_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_sum_fields, R>|null))=>Observable<(FieldsSelection<user_sum_fields, R>|null)>}),var_pop:(user_var_pop_fieldsObservableChain & {get:<R extends user_var_pop_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_var_pop_fields, R>|null))=>Observable<(FieldsSelection<user_var_pop_fields, R>|null)>}),var_samp:(user_var_samp_fieldsObservableChain & {get:<R extends user_var_samp_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_var_samp_fields, R>|null))=>Observable<(FieldsSelection<user_var_samp_fields, R>|null)>}),variance:(user_variance_fieldsObservableChain & {get:<R extends user_variance_fieldsRequest>(request: R, defaultValue?:(FieldsSelection<user_variance_fields, R>|null))=>Observable<(FieldsSelection<user_variance_fields, R>|null)>})}


/** aggregate avg on columns */
export interface user_avg_fieldsPromiseChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Promise<(Float|null)>})}


/** aggregate avg on columns */
export interface user_avg_fieldsObservableChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Observable<(Float|null)>})}


/** aggregate max on columns */
export interface user_max_fieldsPromiseChain{age:({get:(request?:boolean|number,defaultValue?:(Int|null))=>Promise<(Int|null)>}),id:({get:(request?:boolean|number,defaultValue?:(String|null))=>Promise<(String|null)>}),name:({get:(request?:boolean|number,defaultValue?:(String|null))=>Promise<(String|null)>})}


/** aggregate max on columns */
export interface user_max_fieldsObservableChain{age:({get:(request?:boolean|number,defaultValue?:(Int|null))=>Observable<(Int|null)>}),id:({get:(request?:boolean|number,defaultValue?:(String|null))=>Observable<(String|null)>}),name:({get:(request?:boolean|number,defaultValue?:(String|null))=>Observable<(String|null)>})}


/** aggregate min on columns */
export interface user_min_fieldsPromiseChain{age:({get:(request?:boolean|number,defaultValue?:(Int|null))=>Promise<(Int|null)>}),id:({get:(request?:boolean|number,defaultValue?:(String|null))=>Promise<(String|null)>}),name:({get:(request?:boolean|number,defaultValue?:(String|null))=>Promise<(String|null)>})}


/** aggregate min on columns */
export interface user_min_fieldsObservableChain{age:({get:(request?:boolean|number,defaultValue?:(Int|null))=>Observable<(Int|null)>}),id:({get:(request?:boolean|number,defaultValue?:(String|null))=>Observable<(String|null)>}),name:({get:(request?:boolean|number,defaultValue?:(String|null))=>Observable<(String|null)>})}


/** aggregate stddev on columns */
export interface user_stddev_fieldsPromiseChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Promise<(Float|null)>})}


/** aggregate stddev on columns */
export interface user_stddev_fieldsObservableChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Observable<(Float|null)>})}


/** aggregate stddev_pop on columns */
export interface user_stddev_pop_fieldsPromiseChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Promise<(Float|null)>})}


/** aggregate stddev_pop on columns */
export interface user_stddev_pop_fieldsObservableChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Observable<(Float|null)>})}


/** aggregate stddev_samp on columns */
export interface user_stddev_samp_fieldsPromiseChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Promise<(Float|null)>})}


/** aggregate stddev_samp on columns */
export interface user_stddev_samp_fieldsObservableChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Observable<(Float|null)>})}


/** aggregate sum on columns */
export interface user_sum_fieldsPromiseChain{age:({get:(request?:boolean|number,defaultValue?:(Int|null))=>Promise<(Int|null)>})}


/** aggregate sum on columns */
export interface user_sum_fieldsObservableChain{age:({get:(request?:boolean|number,defaultValue?:(Int|null))=>Observable<(Int|null)>})}


/** aggregate var_pop on columns */
export interface user_var_pop_fieldsPromiseChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Promise<(Float|null)>})}


/** aggregate var_pop on columns */
export interface user_var_pop_fieldsObservableChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Observable<(Float|null)>})}


/** aggregate var_samp on columns */
export interface user_var_samp_fieldsPromiseChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Promise<(Float|null)>})}


/** aggregate var_samp on columns */
export interface user_var_samp_fieldsObservableChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Observable<(Float|null)>})}


/** aggregate variance on columns */
export interface user_variance_fieldsPromiseChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Promise<(Float|null)>})}


/** aggregate variance on columns */
export interface user_variance_fieldsObservableChain{age:({get:(request?:boolean|number,defaultValue?:(Float|null))=>Observable<(Float|null)>})}


/** mutation root */
export interface mutation_rootPromiseChain{
/** delete data from the table: "user" */
delete_user:((args:{
/** filter the rows which have to be deleted */
where: user_bool_exp})=>user_mutation_responsePromiseChain & {get:<R extends user_mutation_responseRequest>(request: R, defaultValue?:(FieldsSelection<user_mutation_response, R>|null))=>Promise<(FieldsSelection<user_mutation_response, R>|null)>}),
/** delete single row from the table: "user" */
delete_user_by_pk:((args:{id: String})=>userPromiseChain & {get:<R extends userRequest>(request: R, defaultValue?:(FieldsSelection<user, R>|null))=>Promise<(FieldsSelection<user, R>|null)>}),
/** insert data into the table: "user" */
insert_user:((args:{
/** the rows to be inserted */
objects: user_insert_input[],
/** on conflict condition */
on_conflict?:(user_on_conflict|null)})=>user_mutation_responsePromiseChain & {get:<R extends user_mutation_responseRequest>(request: R, defaultValue?:(FieldsSelection<user_mutation_response, R>|null))=>Promise<(FieldsSelection<user_mutation_response, R>|null)>}),
/** insert a single row into the table: "user" */
insert_user_one:((args:{
/** the row to be inserted */
object: user_insert_input,
/** on conflict condition */
on_conflict?:(user_on_conflict|null)})=>userPromiseChain & {get:<R extends userRequest>(request: R, defaultValue?:(FieldsSelection<user, R>|null))=>Promise<(FieldsSelection<user, R>|null)>}),
/** update data of the table: "user" */
update_user:((args:{
/** increments the integer columns with given value of the filtered values */
_inc?:(user_inc_input|null),
/** sets the columns of the filtered rows to the given values */
_set?:(user_set_input|null),
/** filter the rows which have to be updated */
where: user_bool_exp})=>user_mutation_responsePromiseChain & {get:<R extends user_mutation_responseRequest>(request: R, defaultValue?:(FieldsSelection<user_mutation_response, R>|null))=>Promise<(FieldsSelection<user_mutation_response, R>|null)>}),
/** update single row of the table: "user" */
update_user_by_pk:((args:{
/** increments the integer columns with given value of the filtered values */
_inc?:(user_inc_input|null),
/** sets the columns of the filtered rows to the given values */
_set?:(user_set_input|null),pk_columns: user_pk_columns_input})=>userPromiseChain & {get:<R extends userRequest>(request: R, defaultValue?:(FieldsSelection<user, R>|null))=>Promise<(FieldsSelection<user, R>|null)>})}


/** mutation root */
export interface mutation_rootObservableChain{
/** delete data from the table: "user" */
delete_user:((args:{
/** filter the rows which have to be deleted */
where: user_bool_exp})=>user_mutation_responseObservableChain & {get:<R extends user_mutation_responseRequest>(request: R, defaultValue?:(FieldsSelection<user_mutation_response, R>|null))=>Observable<(FieldsSelection<user_mutation_response, R>|null)>}),
/** delete single row from the table: "user" */
delete_user_by_pk:((args:{id: String})=>userObservableChain & {get:<R extends userRequest>(request: R, defaultValue?:(FieldsSelection<user, R>|null))=>Observable<(FieldsSelection<user, R>|null)>}),
/** insert data into the table: "user" */
insert_user:((args:{
/** the rows to be inserted */
objects: user_insert_input[],
/** on conflict condition */
on_conflict?:(user_on_conflict|null)})=>user_mutation_responseObservableChain & {get:<R extends user_mutation_responseRequest>(request: R, defaultValue?:(FieldsSelection<user_mutation_response, R>|null))=>Observable<(FieldsSelection<user_mutation_response, R>|null)>}),
/** insert a single row into the table: "user" */
insert_user_one:((args:{
/** the row to be inserted */
object: user_insert_input,
/** on conflict condition */
on_conflict?:(user_on_conflict|null)})=>userObservableChain & {get:<R extends userRequest>(request: R, defaultValue?:(FieldsSelection<user, R>|null))=>Observable<(FieldsSelection<user, R>|null)>}),
/** update data of the table: "user" */
update_user:((args:{
/** increments the integer columns with given value of the filtered values */
_inc?:(user_inc_input|null),
/** sets the columns of the filtered rows to the given values */
_set?:(user_set_input|null),
/** filter the rows which have to be updated */
where: user_bool_exp})=>user_mutation_responseObservableChain & {get:<R extends user_mutation_responseRequest>(request: R, defaultValue?:(FieldsSelection<user_mutation_response, R>|null))=>Observable<(FieldsSelection<user_mutation_response, R>|null)>}),
/** update single row of the table: "user" */
update_user_by_pk:((args:{
/** increments the integer columns with given value of the filtered values */
_inc?:(user_inc_input|null),
/** sets the columns of the filtered rows to the given values */
_set?:(user_set_input|null),pk_columns: user_pk_columns_input})=>userObservableChain & {get:<R extends userRequest>(request: R, defaultValue?:(FieldsSelection<user, R>|null))=>Observable<(FieldsSelection<user, R>|null)>})}


/** response of any mutation on the table "user" */
export interface user_mutation_responsePromiseChain{
/** number of affected rows by the mutation */
affected_rows:({get:(request?:boolean|number,defaultValue?:Int)=>Promise<Int>}),
/** data of the affected rows by the mutation */
returning:({get:<R extends userRequest>(request: R, defaultValue?:user[])=>Promise<user[]>})}


/** response of any mutation on the table "user" */
export interface user_mutation_responseObservableChain{
/** number of affected rows by the mutation */
affected_rows:({get:(request?:boolean|number,defaultValue?:Int)=>Observable<Int>}),
/** data of the affected rows by the mutation */
returning:({get:<R extends userRequest>(request: R, defaultValue?:user[])=>Observable<user[]>})}


/** subscription root */
export interface subscription_rootPromiseChain{
/** fetch data from the table: "user" */
user:((args?:{
/** distinct select on columns */
distinct_on?:(user_select_column[]|null),
/** limit the number of rows returned */
limit?:(Int|null),
/** skip the first n rows. Use only with order_by */
offset?:(Int|null),
/** sort the rows by one or more columns */
order_by?:(user_order_by[]|null),
/** filter the rows returned */
where?:(user_bool_exp|null)})=>{get:<R extends userRequest>(request: R, defaultValue?:user[])=>Promise<user[]>})&({get:<R extends userRequest>(request: R, defaultValue?:user[])=>Promise<user[]>}),
/** fetch aggregated fields from the table: "user" */
user_aggregate:((args?:{
/** distinct select on columns */
distinct_on?:(user_select_column[]|null),
/** limit the number of rows returned */
limit?:(Int|null),
/** skip the first n rows. Use only with order_by */
offset?:(Int|null),
/** sort the rows by one or more columns */
order_by?:(user_order_by[]|null),
/** filter the rows returned */
where?:(user_bool_exp|null)})=>user_aggregatePromiseChain & {get:<R extends user_aggregateRequest>(request: R, defaultValue?:user_aggregate)=>Promise<user_aggregate>})&(user_aggregatePromiseChain & {get:<R extends user_aggregateRequest>(request: R, defaultValue?:user_aggregate)=>Promise<user_aggregate>}),
/** fetch data from the table: "user" using primary key columns */
user_by_pk:((args:{id: String})=>userPromiseChain & {get:<R extends userRequest>(request: R, defaultValue?:(FieldsSelection<user, R>|null))=>Promise<(FieldsSelection<user, R>|null)>})}


/** subscription root */
export interface subscription_rootObservableChain{
/** fetch data from the table: "user" */
user:((args?:{
/** distinct select on columns */
distinct_on?:(user_select_column[]|null),
/** limit the number of rows returned */
limit?:(Int|null),
/** skip the first n rows. Use only with order_by */
offset?:(Int|null),
/** sort the rows by one or more columns */
order_by?:(user_order_by[]|null),
/** filter the rows returned */
where?:(user_bool_exp|null)})=>{get:<R extends userRequest>(request: R, defaultValue?:user[])=>Observable<user[]>})&({get:<R extends userRequest>(request: R, defaultValue?:user[])=>Observable<user[]>}),
/** fetch aggregated fields from the table: "user" */
user_aggregate:((args?:{
/** distinct select on columns */
distinct_on?:(user_select_column[]|null),
/** limit the number of rows returned */
limit?:(Int|null),
/** skip the first n rows. Use only with order_by */
offset?:(Int|null),
/** sort the rows by one or more columns */
order_by?:(user_order_by[]|null),
/** filter the rows returned */
where?:(user_bool_exp|null)})=>user_aggregateObservableChain & {get:<R extends user_aggregateRequest>(request: R, defaultValue?:user_aggregate)=>Observable<user_aggregate>})&(user_aggregateObservableChain & {get:<R extends user_aggregateRequest>(request: R, defaultValue?:user_aggregate)=>Observable<user_aggregate>}),
/** fetch data from the table: "user" using primary key columns */
user_by_pk:((args:{id: String})=>userObservableChain & {get:<R extends userRequest>(request: R, defaultValue?:(FieldsSelection<user, R>|null))=>Observable<(FieldsSelection<user, R>|null)>})}