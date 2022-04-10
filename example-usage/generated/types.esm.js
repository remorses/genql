export default {
    "scalars": [
        0,
        1,
        3,
        13
    ],
    "types": {
        "Boolean": {},
        "String": {},
        "Country": {
            "code": [
                3
            ],
            "name": [
                1
            ],
            "native": [
                1
            ],
            "phone": [
                1
            ],
            "continent": [
                4
            ],
            "capital": [
                1
            ],
            "currency": [
                1
            ],
            "languages": [
                5
            ],
            "emoji": [
                1
            ],
            "emojiU": [
                1
            ],
            "states": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "Continent": {
            "code": [
                3
            ],
            "name": [
                1
            ],
            "countries": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "Language": {
            "code": [
                3
            ],
            "name": [
                1
            ],
            "native": [
                1
            ],
            "rtl": [
                0
            ],
            "__typename": [
                1
            ]
        },
        "State": {
            "code": [
                1
            ],
            "name": [
                1
            ],
            "country": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "StringQueryOperatorInput": {
            "eq": [
                1
            ],
            "ne": [
                1
            ],
            "in": [
                1
            ],
            "nin": [
                1
            ],
            "regex": [
                1
            ],
            "glob": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CountryFilterInput": {
            "code": [
                7
            ],
            "currency": [
                7
            ],
            "continent": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "ContinentFilterInput": {
            "code": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "LanguageFilterInput": {
            "code": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "_entities": [
                12,
                {
                    "representations": [
                        13,
                        "[_Any!]!"
                    ]
                }
            ],
            "_service": [
                14
            ],
            "countries": [
                2,
                {
                    "filter": [
                        8
                    ]
                }
            ],
            "country": [
                2,
                {
                    "code": [
                        3,
                        "ID!"
                    ]
                }
            ],
            "continents": [
                4,
                {
                    "filter": [
                        9
                    ]
                }
            ],
            "continent": [
                4,
                {
                    "code": [
                        3,
                        "ID!"
                    ]
                }
            ],
            "languages": [
                5,
                {
                    "filter": [
                        10
                    ]
                }
            ],
            "language": [
                5,
                {
                    "code": [
                        3,
                        "ID!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "_Entity": {
            "on_Country": [
                2
            ],
            "on_Continent": [
                4
            ],
            "on_Language": [
                5
            ],
            "__typename": [
                1
            ]
        },
        "_Any": {},
        "_Service": {
            "sdl": [
                1
            ],
            "__typename": [
                1
            ]
        }
    }
}