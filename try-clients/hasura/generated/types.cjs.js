module.exports = {
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
            "_eq": [
                3
            ],
            "_gt": [
                3
            ],
            "_gte": [
                3
            ],
            "_in": [
                3
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                3
            ],
            "_lte": [
                3
            ],
            "_neq": [
                3
            ],
            "_nin": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                5
            ],
            "_gt": [
                5
            ],
            "_gte": [
                5
            ],
            "_ilike": [
                5
            ],
            "_in": [
                5
            ],
            "_is_null": [
                0
            ],
            "_like": [
                5
            ],
            "_lt": [
                5
            ],
            "_lte": [
                5
            ],
            "_neq": [
                5
            ],
            "_nilike": [
                5
            ],
            "_nin": [
                5
            ],
            "_nlike": [
                5
            ],
            "_nsimilar": [
                5
            ],
            "_similar": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "order_by": {},
        "user": {
            "age": [
                3
            ],
            "id": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_aggregate": {
            "aggregate": [
                10
            ],
            "nodes": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "user_aggregate_fields": {
            "avg": [
                13
            ],
            "count": [
                3,
                {
                    "columns": [
                        28,
                        "[user_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                19
            ],
            "min": [
                21
            ],
            "stddev": [
                30
            ],
            "stddev_pop": [
                32
            ],
            "stddev_samp": [
                34
            ],
            "sum": [
                36
            ],
            "var_pop": [
                39
            ],
            "var_samp": [
                41
            ],
            "variance": [
                43
            ],
            "__typename": [
                5
            ]
        },
        "user_aggregate_order_by": {
            "avg": [
                14
            ],
            "count": [
                7
            ],
            "max": [
                20
            ],
            "min": [
                22
            ],
            "stddev": [
                31
            ],
            "stddev_pop": [
                33
            ],
            "stddev_samp": [
                35
            ],
            "sum": [
                37
            ],
            "var_pop": [
                40
            ],
            "var_samp": [
                42
            ],
            "variance": [
                44
            ],
            "__typename": [
                5
            ]
        },
        "user_arr_rel_insert_input": {
            "data": [
                18
            ],
            "on_conflict": [
                25
            ],
            "__typename": [
                5
            ]
        },
        "user_avg_fields": {
            "age": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "user_avg_order_by": {
            "age": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_bool_exp": {
            "_and": [
                15
            ],
            "_not": [
                15
            ],
            "_or": [
                15
            ],
            "age": [
                4
            ],
            "id": [
                6
            ],
            "name": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "user_constraint": {},
        "user_inc_input": {
            "age": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "user_insert_input": {
            "age": [
                3
            ],
            "id": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_max_fields": {
            "age": [
                3
            ],
            "id": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_max_order_by": {
            "age": [
                7
            ],
            "id": [
                7
            ],
            "name": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_min_fields": {
            "age": [
                3
            ],
            "id": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_min_order_by": {
            "age": [
                7
            ],
            "id": [
                7
            ],
            "name": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "user_obj_rel_insert_input": {
            "data": [
                18
            ],
            "on_conflict": [
                25
            ],
            "__typename": [
                5
            ]
        },
        "user_on_conflict": {
            "constraint": [
                16
            ],
            "update_columns": [
                38
            ],
            "where": [
                15
            ],
            "__typename": [
                5
            ]
        },
        "user_order_by": {
            "age": [
                7
            ],
            "id": [
                7
            ],
            "name": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_pk_columns_input": {
            "id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_select_column": {},
        "user_set_input": {
            "age": [
                3
            ],
            "id": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_stddev_fields": {
            "age": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "user_stddev_order_by": {
            "age": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_stddev_pop_fields": {
            "age": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "user_stddev_pop_order_by": {
            "age": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_stddev_samp_fields": {
            "age": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "user_stddev_samp_order_by": {
            "age": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_sum_fields": {
            "age": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "user_sum_order_by": {
            "age": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_update_column": {},
        "user_var_pop_fields": {
            "age": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "user_var_pop_order_by": {
            "age": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_var_samp_fields": {
            "age": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "user_var_samp_order_by": {
            "age": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_variance_fields": {
            "age": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "user_variance_order_by": {
            "age": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "Query": {
            "user": [
                8,
                {
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
            ],
            "user_aggregate": [
                9,
                {
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
            ],
            "user_by_pk": [
                8,
                {
                    "id": [
                        5,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Mutation": {
            "delete_user": [
                23,
                {
                    "where": [
                        15,
                        "user_bool_exp!"
                    ]
                }
            ],
            "delete_user_by_pk": [
                8,
                {
                    "id": [
                        5,
                        "String!"
                    ]
                }
            ],
            "insert_user": [
                23,
                {
                    "objects": [
                        18,
                        "[user_insert_input!]!"
                    ],
                    "on_conflict": [
                        25
                    ]
                }
            ],
            "insert_user_one": [
                8,
                {
                    "object": [
                        18,
                        "user_insert_input!"
                    ],
                    "on_conflict": [
                        25
                    ]
                }
            ],
            "update_user": [
                23,
                {
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
            ],
            "update_user_by_pk": [
                8,
                {
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
            ],
            "__typename": [
                5
            ]
        },
        "Subscription": {
            "user": [
                8,
                {
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
            ],
            "user_aggregate": [
                9,
                {
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
            ],
            "user_by_pk": [
                8,
                {
                    "id": [
                        5,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}