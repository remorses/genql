export default {
    "scalars": [
        0,
        1,
        2,
        4,
        6,
        7,
        18,
        28
    ],
    "types": {
        "SomeEnum": {},
        "SomeEnum2": {},
        "MyCustomScalar": {},
        "InputWithRequiredFields": {
            "requiredField": [
                4
            ],
            "optionalField": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "String": {},
        "Query": {
            "repository": [
                10,
                {
                    "name": [
                        4,
                        "String!"
                    ],
                    "owner": [
                        4
                    ]
                }
            ],
            "queryWithDefaultArgs": [
                4,
                {
                    "input": [
                        8
                    ],
                    "defaultValue": [
                        6
                    ],
                    "requiredButDefault": [
                        6,
                        "Int!"
                    ]
                }
            ],
            "optionalArgs": [
                10,
                {
                    "name": [
                        4
                    ],
                    "owner": [
                        4
                    ]
                }
            ],
            "user": [
                14
            ],
            "someScalarValue": [
                4,
                {
                    "x": [
                        7
                    ]
                }
            ],
            "recursiveType": [
                9,
                {
                    "requiredVal": [
                        4,
                        "[String!]"
                    ]
                }
            ],
            "throwsError": [
                4
            ],
            "requiredFields": [
                4,
                {
                    "input": [
                        3,
                        "InputWithRequiredFields!"
                    ]
                }
            ],
            "account": [
                16
            ],
            "coordinates": [
                21
            ],
            "unionThatImplementsInterface": [
                26,
                {
                    "typename": [
                        4
                    ]
                }
            ],
            "InterfaceNotImplemented": [
                27
            ],
            "__typename": [
                4
            ]
        },
        "Int": {},
        "Float": {},
        "DefaultArgsInput": {
            "string": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "RecursiveType": {
            "value": [
                4
            ],
            "recurse": [
                9,
                {
                    "arg": [
                        6
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "Repository": {
            "createdAt": [
                4
            ],
            "forks": [
                11,
                {
                    "filter": [
                        4
                    ]
                }
            ],
            "scalarButWithRequiredArgs": [
                4,
                {
                    "x": [
                        6,
                        "Int!"
                    ]
                }
            ],
            "customScalar": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "ForkConnection": {
            "edges": [
                12
            ],
            "__typename": [
                4
            ]
        },
        "ForkEdge": {
            "cursor": [
                4
            ],
            "node": [
                13
            ],
            "__typename": [
                4
            ]
        },
        "Fork": {
            "name": [
                4
            ],
            "number": [
                6
            ],
            "__typename": [
                4
            ]
        },
        "User": {
            "name": [
                4
            ],
            "common": [
                6
            ],
            "__typename": [
                4
            ]
        },
        "Subscription": {
            "user": [
                14
            ],
            "__typename": [
                4
            ]
        },
        "Account": {
            "on_User": [
                14
            ],
            "on_Guest": [
                17
            ],
            "__typename": [
                4
            ]
        },
        "Guest": {
            "anonymous": [
                18
            ],
            "common": [
                6
            ],
            "__typename": [
                4
            ]
        },
        "Boolean": {},
        "House": {
            "owner": [
                14
            ],
            "x": [
                4
            ],
            "y": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Bank": {
            "address": [
                4
            ],
            "x": [
                4
            ],
            "y": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "Point": {
            "x": [
                4
            ],
            "y": [
                4
            ],
            "on_House": [
                19
            ],
            "on_Bank": [
                20
            ],
            "__typename": [
                4
            ]
        },
        "ClientError": {
            "message": [
                4
            ],
            "on_ClientErrorNameAlreadyTaken": [
                23
            ],
            "on_ClientErrorNameInvalid": [
                24
            ],
            "__typename": [
                4
            ]
        },
        "ClientErrorNameAlreadyTaken": {
            "message": [
                4
            ],
            "ownProp1": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ClientErrorNameInvalid": {
            "message": [
                4
            ],
            "ownProp2": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "ClientErrorWithoutInterface": {
            "ownProp3": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "GenericError": {
            "on_ClientErrorNameAlreadyTaken": [
                23
            ],
            "on_ClientErrorNameInvalid": [
                24
            ],
            "on_ClientErrorWithoutInterface": [
                25
            ],
            "on_ClientError": [
                22
            ],
            "__typename": [
                4
            ]
        },
        "InterfaceNotImplemented": {
            "id": [
                28
            ],
            "title": [
                4
            ],
            "url": [
                4
            ],
            "permalink": [
                4
            ],
            "entry_id": [
                28
            ],
            "__typename": [
                4
            ]
        },
        "ID": {}
    }
}