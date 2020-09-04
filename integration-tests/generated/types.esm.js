export default {
    "scalars": [
        1,
        7,
        12
    ],
    "types": {
        "Query": {
            "repository": [
                3,
                {
                    "name": [
                        1,
                        "String!"
                    ],
                    "owner": [
                        1
                    ]
                }
            ],
            "user": [
                8
            ],
            "recursiveType": [
                2,
                {
                    "requiredVal": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "account": [
                10
            ],
            "coordinates": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "RecursiveType": {
            "value": [
                1
            ],
            "recurse": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "Repository": {
            "createdAt": [
                1
            ],
            "forks": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ForkConnection": {
            "edges": [
                5
            ],
            "__typename": [
                1
            ]
        },
        "ForkEdge": {
            "cursor": [
                1
            ],
            "node": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "Fork": {
            "name": [
                1
            ],
            "number": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "User": {
            "name": [
                1
            ],
            "common": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "Subscription": {
            "user": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "Account": {
            "on_User": [
                8
            ],
            "on_Guest": [
                11
            ],
            "__typename": [
                1
            ]
        },
        "Guest": {
            "anonymous": [
                12
            ],
            "common": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {},
        "House": {
            "owner": [
                8
            ],
            "x": [
                1
            ],
            "y": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Bank": {
            "address": [
                1
            ],
            "x": [
                1
            ],
            "y": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Point": {
            "x": [
                1
            ],
            "y": [
                1
            ],
            "on_House": [
                13
            ],
            "on_Bank": [
                14
            ],
            "__typename": [
                1
            ]
        }
    }
}