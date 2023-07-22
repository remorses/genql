export default {
    "scalars": [
        0,
        1,
        3,
        5,
        7,
        16,
        26
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
                8,
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
            "optionalArgs": [
                8,
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
                12
            ],
            "someScalarValue": [
                3,
                {
                    "x": [
                        5
                    ]
                }
            ],
            "recursiveType": [
                6,
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
                14
            ],
            "coordinates": [
                19
            ],
            "unionThatImplementsInterface": [
                24,
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
        "Float": {},
        "RecursiveType": {
            "value": [
                3
            ],
            "recurse": [
                6,
                {
                    "arg": [
                        7
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "Int": {},
        "Repository": {
            "createdAt": [
                3
            ],
            "forks": [
                9,
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
                10
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
                11
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
                7
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
                7
            ],
            "__typename": [
                3
            ]
        },
        "Subscription": {
            "user": [
                12
            ],
            "__typename": [
                3
            ]
        },
        "Account": {
            "on_User": [
                12
            ],
            "on_Guest": [
                15
            ],
            "__typename": [
                3
            ]
        },
        "Guest": {
            "anonymous": [
                16
            ],
            "common": [
                7
            ],
            "__typename": [
                3
            ]
        },
        "Boolean": {},
        "House": {
            "owner": [
                12
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
                17
            ],
            "on_Bank": [
                18
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
                21
            ],
            "on_ClientErrorNameInvalid": [
                22
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
                21
            ],
            "on_ClientErrorNameInvalid": [
                22
            ],
            "on_ClientErrorWithoutInterface": [
                23
            ],
            "on_ClientError": [
                20
            ],
            "__typename": [
                3
            ]
        },
        "InterfaceNotImplemented": {
            "id": [
                26
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
                26
            ],
            "__typename": [
                3
            ]
        },
        "ID": {}
    }
}