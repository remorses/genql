module.exports = {
    "scalars": [
        0,
        1,
        3,
        4,
        10,
        15,
        24
    ],
    "types": {
        "SomeEnum": {},
        "SomeEnum2": {},
        "Query": {
            "repository": [
                6,
                {
                    "name": [
                        3,
                        "String!"
                    ],
                    "owner": [
                        3
                    ]
                }
            ],
            "user": [
                11
            ],
            "someScalarValue": [
                3,
                {
                    "x": [
                        4
                    ]
                }
            ],
            "recursiveType": [
                5,
                {
                    "requiredVal": [
                        3,
                        "[String!]"
                    ]
                }
            ],
            "account": [
                13
            ],
            "coordinates": [
                18
            ],
            "unionThatImplementsInterface": [
                23,
                {
                    "typename": [
                        3
                    ]
                }
            ],
            "InterfaceNotImplemented": [
                25
            ],
            "__typename": [
                3
            ]
        },
        "String": {},
        "Float": {},
        "RecursiveType": {
            "value": [
                3
            ],
            "recurse": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "Repository": {
            "createdAt": [
                3
            ],
            "forks": [
                7
            ],
            "__typename": [
                3
            ]
        },
        "ForkConnection": {
            "edges": [
                8
            ],
            "__typename": [
                3
            ]
        },
        "ForkEdge": {
            "cursor": [
                3
            ],
            "node": [
                9
            ],
            "__typename": [
                3
            ]
        },
        "Fork": {
            "name": [
                3
            ],
            "number": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "Int": {},
        "User": {
            "name": [
                3
            ],
            "common": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "Subscription": {
            "user": [
                11
            ],
            "__typename": [
                3
            ]
        },
        "Account": {
            "on_User": [
                11
            ],
            "on_Guest": [
                14
            ],
            "__typename": [
                3
            ]
        },
        "Guest": {
            "anonymous": [
                15
            ],
            "common": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "Boolean": {},
        "House": {
            "owner": [
                11
            ],
            "x": [
                3
            ],
            "y": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Bank": {
            "address": [
                3
            ],
            "x": [
                3
            ],
            "y": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Point": {
            "x": [
                3
            ],
            "y": [
                3
            ],
            "on_House": [
                16
            ],
            "on_Bank": [
                17
            ],
            "__typename": [
                3
            ]
        },
        "ClientError": {
            "message": [
                3
            ],
            "on_ClientErrorNameAlreadyTaken": [
                20
            ],
            "on_ClientErrorNameInvalid": [
                21
            ],
            "__typename": [
                3
            ]
        },
        "ClientErrorNameAlreadyTaken": {
            "message": [
                3
            ],
            "ownProp1": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ClientErrorNameInvalid": {
            "message": [
                3
            ],
            "ownProp2": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ClientErrorWithoutInterface": {
            "ownProp3": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "GenericError": {
            "on_ClientErrorNameAlreadyTaken": [
                20
            ],
            "on_ClientErrorNameInvalid": [
                21
            ],
            "on_ClientErrorWithoutInterface": [
                22
            ],
            "on_ClientError": [
                19
            ],
            "__typename": [
                3
            ]
        },
        "ID": {},
        "InterfaceNotImplemented": {
            "id": [
                24
            ],
            "title": [
                3
            ],
            "url": [
                3
            ],
            "permalink": [
                3
            ],
            "entry_id": [
                24
            ],
            "__typename": [
                3
            ]
        }
    }
}