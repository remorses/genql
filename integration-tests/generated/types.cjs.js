module.exports = {
    "scalars": [
        1,
        7,
        12
    ],
    "types": {
        "Query": {
            "repository": {
                "type": 3,
                "args": {
                    "name": [
                        1,
                        "String!"
                    ],
                    "owner": [
                        1
                    ]
                }
            },
            "user": {
                "type": 8
            },
            "recursiveType": {
                "type": 2,
                "args": {
                    "requiredVal": [
                        1,
                        "[String!]"
                    ]
                }
            },
            "account": {
                "type": 10
            },
            "coordinates": {
                "type": 15
            },
            "__typename": {
                "type": 1
            }
        },
        "String": {},
        "RecursiveType": {
            "value": {
                "type": 1
            },
            "recurse": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "Repository": {
            "createdAt": {
                "type": 1
            },
            "forks": {
                "type": 4
            },
            "__typename": {
                "type": 1
            }
        },
        "ForkConnection": {
            "edges": {
                "type": 5
            },
            "__typename": {
                "type": 1
            }
        },
        "ForkEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 6
            },
            "__typename": {
                "type": 1
            }
        },
        "Fork": {
            "name": {
                "type": 1
            },
            "number": {
                "type": 7
            },
            "__typename": {
                "type": 1
            }
        },
        "Int": {},
        "User": {
            "name": {
                "type": 1
            },
            "common": {
                "type": 7
            },
            "__typename": {
                "type": 1
            }
        },
        "Subscription": {
            "user": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "Account": {
            "on_User": {
                "type": 8
            },
            "on_Guest": {
                "type": 11
            },
            "__typename": {
                "type": 1
            }
        },
        "Guest": {
            "anonymous": {
                "type": 12
            },
            "common": {
                "type": 7
            },
            "__typename": {
                "type": 1
            }
        },
        "Boolean": {},
        "House": {
            "owner": {
                "type": 8
            },
            "x": {
                "type": 1
            },
            "y": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "Bank": {
            "address": {
                "type": 1
            },
            "x": {
                "type": 1
            },
            "y": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "Point": {
            "x": {
                "type": 1
            },
            "y": {
                "type": 1
            },
            "on_House": {
                "type": 13
            },
            "on_Bank": {
                "type": 14
            },
            "__typename": {
                "type": 1
            }
        }
    }
}