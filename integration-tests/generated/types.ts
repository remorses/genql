export default {
    "scalars": [
        0,
        1,
        3,
        5,
        6,
        17,
        27
    ],
    "types": {
        "SomeEnum": {},
        "SomeEnum2": {},
        "InputWithRequiredFields": {
            "requiredField": [
                3
            ],
            "optionalField": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "String": {},
        "Query": {
            "repository": [
                9,
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
            "queryWithDefaultArgs": [
                3,
                {
                    "input": [
                        7
                    ],
                    "defaultValue": [
                        5
                    ]
                }
            ],
            "optionalArgs": [
                9,
                {
                    "name": [
                        3
                    ],
                    "owner": [
                        3
                    ]
                }
            ],
            "user": [
                13
            ],
            "someScalarValue": [
                3,
                {
                    "x": [
                        6
                    ]
                }
            ],
            "recursiveType": [
                8,
                {
                    "requiredVal": [
                        3,
                        "[String!]"
                    ]
                }
            ],
            "throwsError": [
                3
            ],
            "requiredFields": [
                3,
                {
                    "input": [
                        2,
                        "InputWithRequiredFields!"
                    ]
                }
            ],
            "account": [
                15
            ],
            "coordinates": [
                20
            ],
            "unionThatImplementsInterface": [
                25,
                {
                    "typename": [
                        3
                    ]
                }
            ],
            "InterfaceNotImplemented": [
                26
            ],
            "__typename": [
                3
            ]
        },
        "Int": {},
        "Float": {},
        "DefaultArgsInput": {
            "string": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "RecursiveType": {
            "value": [
                3
            ],
            "recurse": [
                8,
                {
                    "arg": [
                        5
                    ]
                }
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
                10,
                {
                    "filter": [
                        3
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "ForkConnection": {
            "edges": [
                11
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
                12
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
                5
            ],
            "__typename": [
                3
            ]
        },
        "User": {
            "name": [
                3
            ],
            "common": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "Subscription": {
            "user": [
                13
            ],
            "__typename": [
                3
            ]
        },
        "Account": {
            "on_User": [
                13
            ],
            "on_Guest": [
                16
            ],
            "__typename": [
                3
            ]
        },
        "Guest": {
            "anonymous": [
                17
            ],
            "common": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "Boolean": {},
        "House": {
            "owner": [
                13
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
                18
            ],
            "on_Bank": [
                19
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
                22
            ],
            "on_ClientErrorNameInvalid": [
                23
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
                22
            ],
            "on_ClientErrorNameInvalid": [
                23
            ],
            "on_ClientErrorWithoutInterface": [
                24
            ],
            "on_ClientError": [
                21
            ],
            "__typename": [
                3
            ]
        },
        "InterfaceNotImplemented": {
            "id": [
                27
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
                27
            ],
            "__typename": [
                3
            ]
        },
        "ID": {}
    }
}