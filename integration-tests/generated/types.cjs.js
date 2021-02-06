module.exports = {
    "scalars": [
        1,
        2,
        8,
        13
    ],
    "types": {
        "Query": {
            "repository": [
                4,
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
                9
            ],
            "someScalarValue": [
                1,
                {
                    "x": [
                        2
                    ]
                }
            ],
            "recursiveType": [
                3,
                {
                    "requiredVal": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "account": [
                11
            ],
            "coordinates": [
                16
            ],
            "unionThatImplementsInterface": [
                20,
                {
                    "typename": [
                        1
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "Float": {},
        "RecursiveType": {
            "value": [
                1
            ],
            "recurse": [
                3
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
                5
            ],
            "__typename": [
                1
            ]
        },
        "ForkConnection": {
            "edges": [
                6
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
                7
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
                8
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
                8
            ],
            "__typename": [
                1
            ]
        },
        "Subscription": {
            "user": [
                9
            ],
            "__typename": [
                1
            ]
        },
        "Account": {
            "on_User": [
                9
            ],
            "on_Guest": [
                12
            ],
            "__typename": [
                1
            ]
        },
        "Guest": {
            "anonymous": [
                13
            ],
            "common": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {},
        "House": {
            "owner": [
                9
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
                14
            ],
            "on_Bank": [
                15
            ],
            "__typename": [
                1
            ]
        },
        "ClientError": {
            "message": [
                1
            ],
            "on_ClientErrorNameAlreadyTaken": [
                18
            ],
            "on_ClientErrorNameInvalid": [
                19
            ],
            "__typename": [
                1
            ]
        },
        "ClientErrorNameAlreadyTaken": {
            "message": [
                1
            ],
            "ownProp1": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClientErrorNameInvalid": {
            "message": [
                1
            ],
            "ownProp2": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GenericError": {
            "on_ClientErrorNameAlreadyTaken": [
                18
            ],
            "on_ClientErrorNameInvalid": [
                19
            ],
            "on_ClientError": [
                17
            ],
            "__typename": [
                1
            ]
        }
    }
}