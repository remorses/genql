export default {
    "scalars": [
        0,
        1,
        2,
        3,
        5,
        7,
        16,
        28,
        38
    ],
    "types": {
        "Boolean": {},
        "Float": {},
        "ID": {},
        "Int": {},
        "Int_comparison_exp": {
            "_eq": {
                "type": 3
            },
            "_gt": {
                "type": 3
            },
            "_gte": {
                "type": 3
            },
            "_in": {
                "type": 3
            },
            "_is_null": {
                "type": 0
            },
            "_lt": {
                "type": 3
            },
            "_lte": {
                "type": 3
            },
            "_neq": {
                "type": 3
            },
            "_nin": {
                "type": 3
            },
            "__typename": {
                "type": 5
            }
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": {
                "type": 5
            },
            "_gt": {
                "type": 5
            },
            "_gte": {
                "type": 5
            },
            "_ilike": {
                "type": 5
            },
            "_in": {
                "type": 5
            },
            "_is_null": {
                "type": 0
            },
            "_like": {
                "type": 5
            },
            "_lt": {
                "type": 5
            },
            "_lte": {
                "type": 5
            },
            "_neq": {
                "type": 5
            },
            "_nilike": {
                "type": 5
            },
            "_nin": {
                "type": 5
            },
            "_nlike": {
                "type": 5
            },
            "_nsimilar": {
                "type": 5
            },
            "_similar": {
                "type": 5
            },
            "__typename": {
                "type": 5
            }
        },
        "order_by": {},
        "user": {
            "age": {
                "type": 3
            },
            "id": {
                "type": 5
            },
            "name": {
                "type": 5
            },
            "__typename": {
                "type": 5
            }
        },
        "user_aggregate": {
            "aggregate": {
                "type": 10
            },
            "nodes": {
                "type": 8
            },
            "__typename": {
                "type": 5
            }
        },
        "user_aggregate_fields": {
            "avg": {
                "type": 13
            },
            "count": {
                "type": 3,
                "args": {
                    "columns": [
                        28,
                        "[user_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            },
            "max": {
                "type": 19
            },
            "min": {
                "type": 21
            },
            "stddev": {
                "type": 30
            },
            "stddev_pop": {
                "type": 32
            },
            "stddev_samp": {
                "type": 34
            },
            "sum": {
                "type": 36
            },
            "var_pop": {
                "type": 39
            },
            "var_samp": {
                "type": 41
            },
            "variance": {
                "type": 43
            },
            "__typename": {
                "type": 5
            }
        },
        "user_aggregate_order_by": {
            "avg": {
                "type": 14
            },
            "count": {
                "type": 7
            },
            "max": {
                "type": 20
            },
            "min": {
                "type": 22
            },
            "stddev": {
                "type": 31
            },
            "stddev_pop": {
                "type": 33
            },
            "stddev_samp": {
                "type": 35
            },
            "sum": {
                "type": 37
            },
            "var_pop": {
                "type": 40
            },
            "var_samp": {
                "type": 42
            },
            "variance": {
                "type": 44
            },
            "__typename": {
                "type": 5
            }
        },
        "user_arr_rel_insert_input": {
            "data": {
                "type": 18
            },
            "on_conflict": {
                "type": 25
            },
            "__typename": {
                "type": 5
            }
        },
        "user_avg_fields": {
            "age": {
                "type": 1
            },
            "__typename": {
                "type": 5
            }
        },
        "user_avg_order_by": {
            "age": {
                "type": 7
            },
            "__typename": {
                "type": 5
            }
        },
        "user_bool_exp": {
            "_and": {
                "type": 15
            },
            "_not": {
                "type": 15
            },
            "_or": {
                "type": 15
            },
            "age": {
                "type": 4
            },
            "id": {
                "type": 6
            },
            "name": {
                "type": 6
            },
            "__typename": {
                "type": 5
            }
        },
        "user_constraint": {},
        "user_inc_input": {
            "age": {
                "type": 3
            },
            "__typename": {
                "type": 5
            }
        },
        "user_insert_input": {
            "age": {
                "type": 3
            },
            "id": {
                "type": 5
            },
            "name": {
                "type": 5
            },
            "__typename": {
                "type": 5
            }
        },
        "user_max_fields": {
            "age": {
                "type": 3
            },
            "id": {
                "type": 5
            },
            "name": {
                "type": 5
            },
            "__typename": {
                "type": 5
            }
        },
        "user_max_order_by": {
            "age": {
                "type": 7
            },
            "id": {
                "type": 7
            },
            "name": {
                "type": 7
            },
            "__typename": {
                "type": 5
            }
        },
        "user_min_fields": {
            "age": {
                "type": 3
            },
            "id": {
                "type": 5
            },
            "name": {
                "type": 5
            },
            "__typename": {
                "type": 5
            }
        },
        "user_min_order_by": {
            "age": {
                "type": 7
            },
            "id": {
                "type": 7
            },
            "name": {
                "type": 7
            },
            "__typename": {
                "type": 5
            }
        },
        "user_mutation_response": {
            "affected_rows": {
                "type": 3
            },
            "returning": {
                "type": 8
            },
            "__typename": {
                "type": 5
            }
        },
        "user_obj_rel_insert_input": {
            "data": {
                "type": 18
            },
            "on_conflict": {
                "type": 25
            },
            "__typename": {
                "type": 5
            }
        },
        "user_on_conflict": {
            "constraint": {
                "type": 16
            },
            "update_columns": {
                "type": 38
            },
            "where": {
                "type": 15
            },
            "__typename": {
                "type": 5
            }
        },
        "user_order_by": {
            "age": {
                "type": 7
            },
            "id": {
                "type": 7
            },
            "name": {
                "type": 7
            },
            "__typename": {
                "type": 5
            }
        },
        "user_pk_columns_input": {
            "id": {
                "type": 5
            },
            "__typename": {
                "type": 5
            }
        },
        "user_select_column": {},
        "user_set_input": {
            "age": {
                "type": 3
            },
            "id": {
                "type": 5
            },
            "name": {
                "type": 5
            },
            "__typename": {
                "type": 5
            }
        },
        "user_stddev_fields": {
            "age": {
                "type": 1
            },
            "__typename": {
                "type": 5
            }
        },
        "user_stddev_order_by": {
            "age": {
                "type": 7
            },
            "__typename": {
                "type": 5
            }
        },
        "user_stddev_pop_fields": {
            "age": {
                "type": 1
            },
            "__typename": {
                "type": 5
            }
        },
        "user_stddev_pop_order_by": {
            "age": {
                "type": 7
            },
            "__typename": {
                "type": 5
            }
        },
        "user_stddev_samp_fields": {
            "age": {
                "type": 1
            },
            "__typename": {
                "type": 5
            }
        },
        "user_stddev_samp_order_by": {
            "age": {
                "type": 7
            },
            "__typename": {
                "type": 5
            }
        },
        "user_sum_fields": {
            "age": {
                "type": 3
            },
            "__typename": {
                "type": 5
            }
        },
        "user_sum_order_by": {
            "age": {
                "type": 7
            },
            "__typename": {
                "type": 5
            }
        },
        "user_update_column": {},
        "user_var_pop_fields": {
            "age": {
                "type": 1
            },
            "__typename": {
                "type": 5
            }
        },
        "user_var_pop_order_by": {
            "age": {
                "type": 7
            },
            "__typename": {
                "type": 5
            }
        },
        "user_var_samp_fields": {
            "age": {
                "type": 1
            },
            "__typename": {
                "type": 5
            }
        },
        "user_var_samp_order_by": {
            "age": {
                "type": 7
            },
            "__typename": {
                "type": 5
            }
        },
        "user_variance_fields": {
            "age": {
                "type": 1
            },
            "__typename": {
                "type": 5
            }
        },
        "user_variance_order_by": {
            "age": {
                "type": 7
            },
            "__typename": {
                "type": 5
            }
        },
        "Query": {
            "user": {
                "type": 8,
                "args": {
                    "distinct_on": [
                        28,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        26,
                        "[user_order_by!]"
                    ],
                    "where": [
                        15
                    ]
                }
            },
            "user_aggregate": {
                "type": 9,
                "args": {
                    "distinct_on": [
                        28,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        26,
                        "[user_order_by!]"
                    ],
                    "where": [
                        15
                    ]
                }
            },
            "user_by_pk": {
                "type": 8,
                "args": {
                    "id": [
                        5,
                        "String!"
                    ]
                }
            },
            "__typename": {
                "type": 5
            }
        },
        "Mutation": {
            "delete_user": {
                "type": 23,
                "args": {
                    "where": [
                        15,
                        "user_bool_exp!"
                    ]
                }
            },
            "delete_user_by_pk": {
                "type": 8,
                "args": {
                    "id": [
                        5,
                        "String!"
                    ]
                }
            },
            "insert_user": {
                "type": 23,
                "args": {
                    "objects": [
                        18,
                        "[user_insert_input!]!"
                    ],
                    "on_conflict": [
                        25
                    ]
                }
            },
            "insert_user_one": {
                "type": 8,
                "args": {
                    "object": [
                        18,
                        "user_insert_input!"
                    ],
                    "on_conflict": [
                        25
                    ]
                }
            },
            "update_user": {
                "type": 23,
                "args": {
                    "_inc": [
                        17
                    ],
                    "_set": [
                        29
                    ],
                    "where": [
                        15,
                        "user_bool_exp!"
                    ]
                }
            },
            "update_user_by_pk": {
                "type": 8,
                "args": {
                    "_inc": [
                        17
                    ],
                    "_set": [
                        29
                    ],
                    "pk_columns": [
                        27,
                        "user_pk_columns_input!"
                    ]
                }
            },
            "__typename": {
                "type": 5
            }
        },
        "Subscription": {
            "user": {
                "type": 8,
                "args": {
                    "distinct_on": [
                        28,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        26,
                        "[user_order_by!]"
                    ],
                    "where": [
                        15
                    ]
                }
            },
            "user_aggregate": {
                "type": 9,
                "args": {
                    "distinct_on": [
                        28,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        26,
                        "[user_order_by!]"
                    ],
                    "where": [
                        15
                    ]
                }
            },
            "user_by_pk": {
                "type": 8,
                "args": {
                    "id": [
                        5,
                        "String!"
                    ]
                }
            },
            "__typename": {
                "type": 5
            }
        }
    }
}