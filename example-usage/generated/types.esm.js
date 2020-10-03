export default {
    "scalars": [
        3,
        5,
        8,
        12,
        13,
        14
    ],
    "types": {
        "Query": {
            "continents": [
                4,
                {
                    "filter": [
                        1
                    ]
                }
            ],
            "continent": [
                4,
                {
                    "code": [
                        5,
                        "ID!"
                    ]
                }
            ],
            "countries": [
                6,
                {
                    "filter": [
                        10
                    ]
                }
            ],
            "country": [
                6,
                {
                    "code": [
                        5,
                        "ID!"
                    ]
                }
            ],
            "languages": [
                7,
                {
                    "filter": [
                        11
                    ]
                }
            ],
            "language": [
                7,
                {
                    "code": [
                        5,
                        "ID!"
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "ContinentFilterInput": {
            "code": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "StringQueryOperatorInput": {
            "eq": [
                3
            ],
            "ne": [
                3
            ],
            "in": [
                3
            ],
            "nin": [
                3
            ],
            "regex": [
                3
            ],
            "glob": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "String": {},
        "Continent": {
            "code": [
                5
            ],
            "name": [
                3
            ],
            "countries": [
                6
            ],
            "__typename": [
                3
            ]
        },
        "ID": {},
        "Country": {
            "code": [
                5
            ],
            "name": [
                3
            ],
            "native": [
                3
            ],
            "phone": [
                3
            ],
            "continent": [
                4
            ],
            "capital": [
                3
            ],
            "currency": [
                3
            ],
            "languages": [
                7
            ],
            "emoji": [
                3
            ],
            "emojiU": [
                3
            ],
            "states": [
                9
            ],
            "__typename": [
                3
            ]
        },
        "Language": {
            "code": [
                5
            ],
            "name": [
                3
            ],
            "native": [
                3
            ],
            "rtl": [
                8
            ],
            "__typename": [
                3
            ]
        },
        "Boolean": {},
        "State": {
            "code": [
                3
            ],
            "name": [
                3
            ],
            "country": [
                6
            ],
            "__typename": [
                3
            ]
        },
        "CountryFilterInput": {
            "code": [
                2
            ],
            "currency": [
                2
            ],
            "continent": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "LanguageFilterInput": {
            "code": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "CacheControlScope": {},
        "Upload": {},
        "Int": {}
    }
}