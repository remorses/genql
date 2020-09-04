export default {
    "scalars": [
        1,
        2,
        6,
        8,
        40,
        48,
        64,
        68,
        76,
        77,
        97,
        99,
        100,
        110,
        179,
        180,
        183,
        231,
        232,
        236,
        237,
        250,
        251,
        254,
        255,
        256,
        257,
        263,
        264,
        265,
        282,
        290,
        292,
        297,
        298,
        302,
        303,
        314,
        324,
        325,
        329,
        330,
        331,
        333,
        334,
        336,
        342,
        347,
        352,
        364,
        365,
        372,
        378,
        385,
        392,
        412,
        413,
        420,
        421,
        435,
        436,
        437,
        440,
        445,
        458,
        460,
        461,
        463,
        464,
        472,
        474,
        476,
        489,
        490,
        493,
        494,
        496,
        506,
        508,
        512,
        517,
        527,
        532,
        539,
        544,
        549,
        553,
        555,
        556,
        571,
        573,
        578,
        581,
        583,
        584,
        589,
        596,
        597,
        610,
        614,
        620,
        631,
        643,
        655,
        681,
        683,
        686,
        688,
        700,
        702,
        704,
        706,
        708,
        713,
        720,
        721,
        724,
        726,
        727,
        731,
        739,
        757,
        758,
        763,
        767,
        770,
        774,
        776,
        780,
        785,
        797,
        802,
        803,
        805,
        817,
        825,
        839,
        843,
        848,
        849,
        850,
        852,
        853,
        859,
        860,
        861,
        868,
        874,
        980,
        991,
        993
    ],
    "types": {
        "AcceptEnterpriseAdministratorInvitationInput": {
            "clientMutationId": [
                1
            ],
            "invitationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "ID": {},
        "AcceptEnterpriseAdministratorInvitationPayload": {
            "clientMutationId": [
                1
            ],
            "invitation": [
                246
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AcceptTopicSuggestionInput": {
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AcceptTopicSuggestionPayload": {
            "clientMutationId": [
                1
            ],
            "topic": [
                864
            ],
            "__typename": [
                1
            ]
        },
        "ActionExecutionCapabilitySetting": {},
        "Actor": {
            "avatarUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "login": [
                1
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "on_Bot": [
                49
            ],
            "on_EnterpriseUserAccount": [
                299
            ],
            "on_Mannequin": [
                395
            ],
            "on_Organization": [
                478
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "ActorLocation": {
            "city": [
                1
            ],
            "country": [
                1
            ],
            "countryCode": [
                1
            ],
            "region": [
                1
            ],
            "regionCode": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AddAssigneesToAssignableInput": {
            "assignableId": [
                2
            ],
            "assigneeIds": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AddAssigneesToAssignablePayload": {
            "assignable": [
                34
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AddCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddCommentPayload": {
            "clientMutationId": [
                1
            ],
            "commentEdge": [
                357
            ],
            "subject": [
                432
            ],
            "timelineEdge": [
                368
            ],
            "__typename": [
                1
            ]
        },
        "AddLabelsToLabelableInput": {
            "clientMutationId": [
                1
            ],
            "labelIds": [
                2
            ],
            "labelableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddLabelsToLabelablePayload": {
            "clientMutationId": [
                1
            ],
            "labelable": [
                379
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectCardInput": {
            "clientMutationId": [
                1
            ],
            "contentId": [
                2
            ],
            "note": [
                1
            ],
            "projectColumnId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectCardPayload": {
            "cardEdge": [
                541
            ],
            "clientMutationId": [
                1
            ],
            "projectColumn": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectColumnInput": {
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddProjectColumnPayload": {
            "clientMutationId": [
                1
            ],
            "columnEdge": [
                547
            ],
            "project": [
                537
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "commitOID": [
                329
            ],
            "inReplyTo": [
                2
            ],
            "path": [
                1
            ],
            "position": [
                8
            ],
            "pullRequestId": [
                2
            ],
            "pullRequestReviewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewCommentPayload": {
            "clientMutationId": [
                1
            ],
            "comment": [
                575
            ],
            "commentEdge": [
                577
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "comments": [
                241
            ],
            "commitOID": [
                329
            ],
            "event": [
                583
            ],
            "pullRequestId": [
                2
            ],
            "threads": [
                242
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                574
            ],
            "reviewEdge": [
                582
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewThreadInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "line": [
                8
            ],
            "path": [
                1
            ],
            "pullRequestReviewId": [
                2
            ],
            "side": [
                237
            ],
            "startLine": [
                8
            ],
            "startSide": [
                237
            ],
            "__typename": [
                1
            ]
        },
        "AddPullRequestReviewThreadPayload": {
            "clientMutationId": [
                1
            ],
            "thread": [
                585
            ],
            "__typename": [
                1
            ]
        },
        "AddReactionInput": {
            "clientMutationId": [
                1
            ],
            "content": [
                610
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddReactionPayload": {
            "clientMutationId": [
                1
            ],
            "reaction": [
                608
            ],
            "subject": [
                605
            ],
            "__typename": [
                1
            ]
        },
        "AddStarInput": {
            "clientMutationId": [
                1
            ],
            "starrableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AddStarPayload": {
            "clientMutationId": [
                1
            ],
            "starrable": [
                808
            ],
            "__typename": [
                1
            ]
        },
        "AddedToProjectEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "project": [
                537
            ],
            "projectCard": [
                538
            ],
            "projectColumnName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "App": {
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "logoBackgroundColor": [
                1
            ],
            "logoUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "name": [
                1
            ],
            "slug": [
                1
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "ArchiveRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ArchiveRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "Assignable": {
            "assignees": [
                982,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "on_Issue": [
                354
            ],
            "on_PullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "AssignedEvent": {
            "actor": [
                7
            ],
            "assignable": [
                34
            ],
            "assignee": [
                36
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "Assignee": {
            "on_Bot": [
                49
            ],
            "on_Mannequin": [
                395
            ],
            "on_Organization": [
                478
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "AuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "operationType": [
                436
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                404
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                405
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                406
            ],
            "on_OauthApplicationCreateAuditEntry": [
                434
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                438
            ],
            "on_OrgAddMemberAuditEntry": [
                439
            ],
            "on_OrgBlockUserAuditEntry": [
                441
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                442
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                443
            ],
            "on_OrgCreateAuditEntry": [
                444
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                446
            ],
            "on_OrgDisableSamlAuditEntry": [
                447
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                448
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                449
            ],
            "on_OrgEnableSamlAuditEntry": [
                450
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                451
            ],
            "on_OrgInviteMemberAuditEntry": [
                452
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                453
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                454
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                455
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                456
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                457
            ],
            "on_OrgRemoveMemberAuditEntry": [
                459
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                462
            ],
            "on_OrgRestoreMemberAuditEntry": [
                465
            ],
            "on_OrgUnblockUserAuditEntry": [
                470
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                471
            ],
            "on_OrgUpdateMemberAuditEntry": [
                473
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                475
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                477
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                533
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                534
            ],
            "on_RepoAccessAuditEntry": [
                680
            ],
            "on_RepoAddMemberAuditEntry": [
                682
            ],
            "on_RepoAddTopicAuditEntry": [
                684
            ],
            "on_RepoArchivedAuditEntry": [
                685
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                687
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                689
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                690
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                691
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                692
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                693
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                694
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                695
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                696
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                697
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                698
            ],
            "on_RepoCreateAuditEntry": [
                699
            ],
            "on_RepoDestroyAuditEntry": [
                701
            ],
            "on_RepoRemoveMemberAuditEntry": [
                703
            ],
            "on_RepoRemoveTopicAuditEntry": [
                705
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                732
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                733
            ],
            "on_TeamAddMemberAuditEntry": [
                829
            ],
            "on_TeamAddRepositoryAuditEntry": [
                830
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                832
            ],
            "on_TeamRemoveMemberAuditEntry": [
                854
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                855
            ],
            "__typename": [
                1
            ]
        },
        "AuditEntryActor": {
            "on_Bot": [
                49
            ],
            "on_Organization": [
                478
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "AuditLogOrder": {
            "direction": [
                437
            ],
            "field": [
                40
            ],
            "__typename": [
                1
            ]
        },
        "AuditLogOrderField": {},
        "AutomaticBaseChangeFailedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "newBase": [
                1
            ],
            "oldBase": [
                1
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "AutomaticBaseChangeSucceededEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "newBase": [
                1
            ],
            "oldBase": [
                1
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "BaseRefChangedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "BaseRefForcePushedEvent": {
            "actor": [
                7
            ],
            "afterCommit": [
                102
            ],
            "beforeCommit": [
                102
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "ref": [
                616
            ],
            "__typename": [
                1
            ]
        },
        "Blame": {
            "ranges": [
                46
            ],
            "__typename": [
                1
            ]
        },
        "BlameRange": {
            "age": [
                8
            ],
            "commit": [
                102
            ],
            "endingLine": [
                8
            ],
            "startingLine": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "Blob": {
            "abbreviatedOid": [
                1
            ],
            "byteSize": [
                8
            ],
            "commitResourcePath": [
                874
            ],
            "commitUrl": [
                874
            ],
            "id": [
                2
            ],
            "isBinary": [
                48
            ],
            "isTruncated": [
                48
            ],
            "oid": [
                329
            ],
            "repository": [
                707
            ],
            "text": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {},
        "Bot": {
            "avatarUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "login": [
                1
            ],
            "resourcePath": [
                874
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRule": {
            "branchProtectionRuleConflicts": [
                52,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "creator": [
                7
            ],
            "databaseId": [
                8
            ],
            "dismissesStaleReviews": [
                48
            ],
            "id": [
                2
            ],
            "isAdminEnforced": [
                48
            ],
            "matchingRefs": [
                617,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "pattern": [
                1
            ],
            "pushAllowances": [
                601,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "repository": [
                707
            ],
            "requiredApprovingReviewCount": [
                8
            ],
            "requiredStatusCheckContexts": [
                1
            ],
            "requiresApprovingReviews": [
                48
            ],
            "requiresCodeOwnerReviews": [
                48
            ],
            "requiresCommitSignatures": [
                48
            ],
            "requiresStatusChecks": [
                48
            ],
            "requiresStrictStatusChecks": [
                48
            ],
            "restrictsPushes": [
                48
            ],
            "restrictsReviewDismissals": [
                48
            ],
            "reviewDismissalAllowances": [
                748,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRuleConflict": {
            "branchProtectionRule": [
                50
            ],
            "conflictingBranchProtectionRule": [
                50
            ],
            "ref": [
                616
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRuleConflictConnection": {
            "edges": [
                53
            ],
            "nodes": [
                51
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRuleConflictEdge": {
            "cursor": [
                1
            ],
            "node": [
                51
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRuleConnection": {
            "edges": [
                55
            ],
            "nodes": [
                50
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "BranchProtectionRuleEdge": {
            "cursor": [
                1
            ],
            "node": [
                50
            ],
            "__typename": [
                1
            ]
        },
        "CancelEnterpriseAdminInvitationInput": {
            "clientMutationId": [
                1
            ],
            "invitationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CancelEnterpriseAdminInvitationPayload": {
            "clientMutationId": [
                1
            ],
            "invitation": [
                246
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ChangeUserStatusInput": {
            "clientMutationId": [
                1
            ],
            "emoji": [
                1
            ],
            "expiresAt": [
                180
            ],
            "limitedAvailability": [
                48
            ],
            "message": [
                1
            ],
            "organizationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ChangeUserStatusPayload": {
            "clientMutationId": [
                1
            ],
            "status": [
                987
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotation": {
            "annotationLevel": [
                64
            ],
            "blobUrl": [
                874
            ],
            "databaseId": [
                8
            ],
            "location": [
                67
            ],
            "message": [
                1
            ],
            "path": [
                1
            ],
            "rawDetails": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationConnection": {
            "edges": [
                63
            ],
            "nodes": [
                60
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationData": {
            "annotationLevel": [
                64
            ],
            "location": [
                66
            ],
            "message": [
                1
            ],
            "path": [
                1
            ],
            "rawDetails": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationEdge": {
            "cursor": [
                1
            ],
            "node": [
                60
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationLevel": {},
        "CheckAnnotationPosition": {
            "column": [
                8
            ],
            "line": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationRange": {
            "endColumn": [
                8
            ],
            "endLine": [
                8
            ],
            "startColumn": [
                8
            ],
            "startLine": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CheckAnnotationSpan": {
            "end": [
                65
            ],
            "start": [
                65
            ],
            "__typename": [
                1
            ]
        },
        "CheckConclusionState": {},
        "CheckRun": {
            "annotations": [
                61,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "checkSuite": [
                78
            ],
            "completedAt": [
                180
            ],
            "conclusion": [
                68
            ],
            "databaseId": [
                8
            ],
            "detailsUrl": [
                874
            ],
            "externalId": [
                1
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "permalink": [
                874
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "startedAt": [
                180
            ],
            "status": [
                77
            ],
            "summary": [
                1
            ],
            "text": [
                1
            ],
            "title": [
                1
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunAction": {
            "description": [
                1
            ],
            "identifier": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunConnection": {
            "edges": [
                72
            ],
            "nodes": [
                69
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunEdge": {
            "cursor": [
                1
            ],
            "node": [
                69
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunFilter": {
            "appId": [
                8
            ],
            "checkName": [
                1
            ],
            "checkType": [
                76
            ],
            "status": [
                77
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunOutput": {
            "annotations": [
                62
            ],
            "images": [
                75
            ],
            "summary": [
                1
            ],
            "text": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunOutputImage": {
            "alt": [
                1
            ],
            "caption": [
                1
            ],
            "imageUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "CheckRunType": {},
        "CheckStatusState": {},
        "CheckSuite": {
            "app": [
                31
            ],
            "branch": [
                616
            ],
            "checkRuns": [
                71,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        73
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "commit": [
                102
            ],
            "conclusion": [
                68
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "matchingPullRequests": [
                568,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        363
                    ],
                    "states": [
                        589,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "push": [
                598
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "status": [
                77
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "CheckSuiteAutoTriggerPreference": {
            "appId": [
                2
            ],
            "setting": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "CheckSuiteConnection": {
            "edges": [
                81
            ],
            "nodes": [
                78
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CheckSuiteEdge": {
            "cursor": [
                1
            ],
            "node": [
                78
            ],
            "__typename": [
                1
            ]
        },
        "CheckSuiteFilter": {
            "appId": [
                8
            ],
            "checkName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClearLabelsFromLabelableInput": {
            "clientMutationId": [
                1
            ],
            "labelableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ClearLabelsFromLabelablePayload": {
            "clientMutationId": [
                1
            ],
            "labelable": [
                379
            ],
            "__typename": [
                1
            ]
        },
        "CloneProjectInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "includeWorkflows": [
                48
            ],
            "name": [
                1
            ],
            "public": [
                48
            ],
            "sourceId": [
                2
            ],
            "targetOwnerId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CloneProjectPayload": {
            "clientMutationId": [
                1
            ],
            "jobStatusId": [
                1
            ],
            "project": [
                537
            ],
            "__typename": [
                1
            ]
        },
        "CloneTemplateRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "includeAllBranches": [
                48
            ],
            "name": [
                1
            ],
            "ownerId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "visibility": [
                731
            ],
            "__typename": [
                1
            ]
        },
        "CloneTemplateRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "Closable": {
            "closed": [
                48
            ],
            "closedAt": [
                180
            ],
            "on_Issue": [
                354
            ],
            "on_Milestone": [
                415
            ],
            "on_Project": [
                537
            ],
            "on_PullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "CloseIssueInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CloseIssuePayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                354
            ],
            "__typename": [
                1
            ]
        },
        "ClosePullRequestInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ClosePullRequestPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "ClosedEvent": {
            "actor": [
                7
            ],
            "closable": [
                89
            ],
            "closer": [
                95
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "Closer": {
            "on_Commit": [
                102
            ],
            "on_PullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "CodeOfConduct": {
            "body": [
                1
            ],
            "id": [
                2
            ],
            "key": [
                1
            ],
            "name": [
                1
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "CollaboratorAffiliation": {},
        "Comment": {
            "author": [
                7
            ],
            "authorAssociation": [
                99
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "bodyText": [
                1
            ],
            "createdAt": [
                180
            ],
            "createdViaEmail": [
                48
            ],
            "editor": [
                7
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                48
            ],
            "lastEditedAt": [
                180
            ],
            "publishedAt": [
                180
            ],
            "updatedAt": [
                180
            ],
            "userContentEdits": [
                984,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerDidAuthor": [
                48
            ],
            "on_CommitComment": [
                104
            ],
            "on_GistComment": [
                317
            ],
            "on_Issue": [
                354
            ],
            "on_IssueComment": [
                355
            ],
            "on_PullRequest": [
                560
            ],
            "on_PullRequestReview": [
                574
            ],
            "on_PullRequestReviewComment": [
                575
            ],
            "on_TeamDiscussion": [
                834
            ],
            "on_TeamDiscussionComment": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "CommentAuthorAssociation": {},
        "CommentCannotUpdateReason": {},
        "CommentDeletedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "Commit": {
            "abbreviatedOid": [
                1
            ],
            "additions": [
                8
            ],
            "associatedPullRequests": [
                568,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        572
                    ]
                }
            ],
            "author": [
                326
            ],
            "authoredByCommitter": [
                48
            ],
            "authoredDate": [
                180
            ],
            "blame": [
                45,
                {
                    "path": [
                        1,
                        "String!"
                    ]
                }
            ],
            "changedFiles": [
                8
            ],
            "checkSuites": [
                80,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        82
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "comments": [
                105,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "commitResourcePath": [
                874
            ],
            "commitUrl": [
                874
            ],
            "committedDate": [
                180
            ],
            "committedViaWeb": [
                48
            ],
            "committer": [
                326
            ],
            "deletions": [
                8
            ],
            "deployments": [
                227,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "environments": [
                        1,
                        "[String!]"
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        230
                    ]
                }
            ],
            "history": [
                113,
                {
                    "after": [
                        1
                    ],
                    "author": [
                        103
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "path": [
                        1
                    ],
                    "since": [
                        334
                    ],
                    "until": [
                        334
                    ]
                }
            ],
            "id": [
                2
            ],
            "message": [
                1
            ],
            "messageBody": [
                1
            ],
            "messageBodyHTML": [
                336
            ],
            "messageHeadline": [
                1
            ],
            "messageHeadlineHTML": [
                336
            ],
            "oid": [
                329
            ],
            "onBehalfOf": [
                478
            ],
            "parents": [
                108,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "pushedDate": [
                180
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "signature": [
                332
            ],
            "status": [
                811
            ],
            "statusCheckRollup": [
                812
            ],
            "submodules": [
                821,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "tarballUrl": [
                874
            ],
            "tree": [
                872
            ],
            "treeResourcePath": [
                874
            ],
            "treeUrl": [
                874
            ],
            "url": [
                874
            ],
            "viewerCanSubscribe": [
                48
            ],
            "viewerSubscription": [
                825
            ],
            "zipballUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "CommitAuthor": {
            "emails": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CommitComment": {
            "author": [
                7
            ],
            "authorAssociation": [
                99
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "bodyText": [
                1
            ],
            "commit": [
                102
            ],
            "createdAt": [
                180
            ],
            "createdViaEmail": [
                48
            ],
            "databaseId": [
                8
            ],
            "editor": [
                7
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                48
            ],
            "isMinimized": [
                48
            ],
            "lastEditedAt": [
                180
            ],
            "minimizedReason": [
                1
            ],
            "path": [
                1
            ],
            "position": [
                8
            ],
            "publishedAt": [
                180
            ],
            "reactionGroups": [
                612
            ],
            "reactions": [
                609,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        610
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        613
                    ]
                }
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "userContentEdits": [
                984,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerCanDelete": [
                48
            ],
            "viewerCanMinimize": [
                48
            ],
            "viewerCanReact": [
                48
            ],
            "viewerCanUpdate": [
                48
            ],
            "viewerCannotUpdateReasons": [
                100
            ],
            "viewerDidAuthor": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "CommitCommentConnection": {
            "edges": [
                106
            ],
            "nodes": [
                104
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CommitCommentEdge": {
            "cursor": [
                1
            ],
            "node": [
                104
            ],
            "__typename": [
                1
            ]
        },
        "CommitCommentThread": {
            "comments": [
                105,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "commit": [
                102
            ],
            "id": [
                2
            ],
            "path": [
                1
            ],
            "position": [
                8
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "CommitConnection": {
            "edges": [
                112
            ],
            "nodes": [
                102
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CommitContributionOrder": {
            "direction": [
                437
            ],
            "field": [
                110
            ],
            "__typename": [
                1
            ]
        },
        "CommitContributionOrderField": {},
        "CommitContributionsByRepository": {
            "contributions": [
                161,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        109
                    ]
                }
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "CommitEdge": {
            "cursor": [
                1
            ],
            "node": [
                102
            ],
            "__typename": [
                1
            ]
        },
        "CommitHistoryConnection": {
            "edges": [
                112
            ],
            "nodes": [
                102
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ConnectedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "isCrossRepository": [
                48
            ],
            "source": [
                623
            ],
            "subject": [
                623
            ],
            "__typename": [
                1
            ]
        },
        "ContentAttachment": {
            "body": [
                1
            ],
            "contentReference": [
                116
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ContentReference": {
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "reference": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Contribution": {
            "isRestricted": [
                48
            ],
            "occurredAt": [
                180
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "user": [
                979
            ],
            "on_CreatedCommitContribution": [
                160
            ],
            "on_CreatedIssueContribution": [
                163
            ],
            "on_CreatedPullRequestContribution": [
                167
            ],
            "on_CreatedPullRequestReviewContribution": [
                171
            ],
            "on_CreatedRepositoryContribution": [
                174
            ],
            "on_JoinedGitHubContribution": [
                373
            ],
            "on_RestrictedContribution": [
                745
            ],
            "__typename": [
                1
            ]
        },
        "ContributionCalendar": {
            "colors": [
                1
            ],
            "isHalloween": [
                48
            ],
            "months": [
                120
            ],
            "totalContributions": [
                8
            ],
            "weeks": [
                121
            ],
            "__typename": [
                1
            ]
        },
        "ContributionCalendarDay": {
            "color": [
                1
            ],
            "contributionCount": [
                8
            ],
            "date": [
                179
            ],
            "weekday": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ContributionCalendarMonth": {
            "firstDay": [
                179
            ],
            "name": [
                1
            ],
            "totalWeeks": [
                8
            ],
            "year": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ContributionCalendarWeek": {
            "contributionDays": [
                119
            ],
            "firstDay": [
                179
            ],
            "__typename": [
                1
            ]
        },
        "ContributionOrder": {
            "direction": [
                437
            ],
            "__typename": [
                1
            ]
        },
        "ContributionsCollection": {
            "commitContributionsByRepository": [
                111,
                {
                    "maxRepositories": [
                        8
                    ]
                }
            ],
            "contributionCalendar": [
                118
            ],
            "contributionYears": [
                8
            ],
            "doesEndInCurrentMonth": [
                48
            ],
            "earliestRestrictedContributionDate": [
                179
            ],
            "endedAt": [
                180
            ],
            "firstIssueContribution": [
                166
            ],
            "firstPullRequestContribution": [
                170
            ],
            "firstRepositoryContribution": [
                177
            ],
            "hasActivityInThePast": [
                48
            ],
            "hasAnyContributions": [
                48
            ],
            "hasAnyRestrictedContributions": [
                48
            ],
            "isSingleDay": [
                48
            ],
            "issueContributions": [
                164,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        122
                    ]
                }
            ],
            "issueContributionsByRepository": [
                359,
                {
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ],
                    "maxRepositories": [
                        8
                    ]
                }
            ],
            "joinedGitHubContribution": [
                373
            ],
            "latestRestrictedContributionDate": [
                179
            ],
            "mostRecentCollectionWithActivity": [
                123
            ],
            "mostRecentCollectionWithoutActivity": [
                123
            ],
            "popularIssueContribution": [
                163
            ],
            "popularPullRequestContribution": [
                167
            ],
            "pullRequestContributions": [
                168,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        122
                    ]
                }
            ],
            "pullRequestContributionsByRepository": [
                569,
                {
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ],
                    "maxRepositories": [
                        8
                    ]
                }
            ],
            "pullRequestReviewContributions": [
                172,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        122
                    ]
                }
            ],
            "pullRequestReviewContributionsByRepository": [
                580,
                {
                    "maxRepositories": [
                        8
                    ]
                }
            ],
            "repositoryContributions": [
                175,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "excludeFirst": [
                        48
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        122
                    ]
                }
            ],
            "restrictedContributionsCount": [
                8
            ],
            "startedAt": [
                180
            ],
            "totalCommitContributions": [
                8
            ],
            "totalIssueContributions": [
                8,
                {
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ]
                }
            ],
            "totalPullRequestContributions": [
                8,
                {
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ]
                }
            ],
            "totalPullRequestReviewContributions": [
                8
            ],
            "totalRepositoriesWithContributedCommits": [
                8
            ],
            "totalRepositoriesWithContributedIssues": [
                8,
                {
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ]
                }
            ],
            "totalRepositoriesWithContributedPullRequestReviews": [
                8
            ],
            "totalRepositoriesWithContributedPullRequests": [
                8,
                {
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ]
                }
            ],
            "totalRepositoryContributions": [
                8,
                {
                    "excludeFirst": [
                        48
                    ]
                }
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "ConvertProjectCardNoteToIssueInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "projectCardId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ConvertProjectCardNoteToIssuePayload": {
            "clientMutationId": [
                1
            ],
            "projectCard": [
                538
            ],
            "__typename": [
                1
            ]
        },
        "ConvertToDraftEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "ConvertedNoteToIssueEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "project": [
                537
            ],
            "projectCard": [
                538
            ],
            "projectColumnName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateBranchProtectionRuleInput": {
            "clientMutationId": [
                1
            ],
            "dismissesStaleReviews": [
                48
            ],
            "isAdminEnforced": [
                48
            ],
            "pattern": [
                1
            ],
            "pushActorIds": [
                2
            ],
            "repositoryId": [
                2
            ],
            "requiredApprovingReviewCount": [
                8
            ],
            "requiredStatusCheckContexts": [
                1
            ],
            "requiresApprovingReviews": [
                48
            ],
            "requiresCodeOwnerReviews": [
                48
            ],
            "requiresCommitSignatures": [
                48
            ],
            "requiresStatusChecks": [
                48
            ],
            "requiresStrictStatusChecks": [
                48
            ],
            "restrictsPushes": [
                48
            ],
            "restrictsReviewDismissals": [
                48
            ],
            "reviewDismissalActorIds": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateBranchProtectionRulePayload": {
            "branchProtectionRule": [
                50
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCheckRunInput": {
            "actions": [
                70
            ],
            "clientMutationId": [
                1
            ],
            "completedAt": [
                180
            ],
            "conclusion": [
                68
            ],
            "detailsUrl": [
                874
            ],
            "externalId": [
                1
            ],
            "headSha": [
                329
            ],
            "name": [
                1
            ],
            "output": [
                74
            ],
            "repositoryId": [
                2
            ],
            "startedAt": [
                180
            ],
            "status": [
                739
            ],
            "__typename": [
                1
            ]
        },
        "CreateCheckRunPayload": {
            "checkRun": [
                69
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCheckSuiteInput": {
            "clientMutationId": [
                1
            ],
            "headSha": [
                329
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateCheckSuitePayload": {
            "checkSuite": [
                78
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateContentAttachmentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "contentReferenceId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateContentAttachmentPayload": {
            "clientMutationId": [
                1
            ],
            "contentAttachment": [
                115
            ],
            "__typename": [
                1
            ]
        },
        "CreateDeploymentInput": {
            "autoMerge": [
                48
            ],
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "environment": [
                1
            ],
            "payload": [
                1
            ],
            "refId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "requiredContexts": [
                1
            ],
            "task": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateDeploymentPayload": {
            "autoMerged": [
                48
            ],
            "clientMutationId": [
                1
            ],
            "deployment": [
                226
            ],
            "__typename": [
                1
            ]
        },
        "CreateDeploymentStatusInput": {
            "autoInactive": [
                48
            ],
            "clientMutationId": [
                1
            ],
            "deploymentId": [
                2
            ],
            "description": [
                1
            ],
            "environment": [
                1
            ],
            "environmentUrl": [
                1
            ],
            "logUrl": [
                1
            ],
            "state": [
                236
            ],
            "__typename": [
                1
            ]
        },
        "CreateDeploymentStatusPayload": {
            "clientMutationId": [
                1
            ],
            "deploymentStatus": [
                233
            ],
            "__typename": [
                1
            ]
        },
        "CreateEnterpriseOrganizationInput": {
            "adminLogins": [
                1
            ],
            "billingEmail": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "login": [
                1
            ],
            "profileName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateEnterpriseOrganizationPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "organization": [
                478
            ],
            "__typename": [
                1
            ]
        },
        "CreateIpAllowListEntryInput": {
            "allowListValue": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "isActive": [
                48
            ],
            "name": [
                1
            ],
            "ownerId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateIpAllowListEntryPayload": {
            "clientMutationId": [
                1
            ],
            "ipAllowListEntry": [
                348
            ],
            "__typename": [
                1
            ]
        },
        "CreateIssueInput": {
            "assigneeIds": [
                2
            ],
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "labelIds": [
                2
            ],
            "milestoneId": [
                2
            ],
            "projectIds": [
                2
            ],
            "repositoryId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateIssuePayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                354
            ],
            "__typename": [
                1
            ]
        },
        "CreateLabelInput": {
            "clientMutationId": [
                1
            ],
            "color": [
                1
            ],
            "description": [
                1
            ],
            "name": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateLabelPayload": {
            "clientMutationId": [
                1
            ],
            "label": [
                374
            ],
            "__typename": [
                1
            ]
        },
        "CreateProjectInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "ownerId": [
                2
            ],
            "repositoryIds": [
                2
            ],
            "template": [
                556
            ],
            "__typename": [
                1
            ]
        },
        "CreateProjectPayload": {
            "clientMutationId": [
                1
            ],
            "project": [
                537
            ],
            "__typename": [
                1
            ]
        },
        "CreatePullRequestInput": {
            "baseRefName": [
                1
            ],
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "draft": [
                48
            ],
            "headRefName": [
                1
            ],
            "maintainerCanModify": [
                48
            ],
            "repositoryId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreatePullRequestPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "CreateRefInput": {
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "oid": [
                329
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateRefPayload": {
            "clientMutationId": [
                1
            ],
            "ref": [
                616
            ],
            "__typename": [
                1
            ]
        },
        "CreateRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "hasIssuesEnabled": [
                48
            ],
            "hasWikiEnabled": [
                48
            ],
            "homepageUrl": [
                874
            ],
            "name": [
                1
            ],
            "ownerId": [
                2
            ],
            "teamId": [
                2
            ],
            "template": [
                48
            ],
            "visibility": [
                731
            ],
            "__typename": [
                1
            ]
        },
        "CreateRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "CreateTeamDiscussionCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "discussionId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateTeamDiscussionCommentPayload": {
            "clientMutationId": [
                1
            ],
            "teamDiscussionComment": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "CreateTeamDiscussionInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "private": [
                48
            ],
            "teamId": [
                2
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateTeamDiscussionPayload": {
            "clientMutationId": [
                1
            ],
            "teamDiscussion": [
                834
            ],
            "__typename": [
                1
            ]
        },
        "CreatedCommitContribution": {
            "commitCount": [
                8
            ],
            "isRestricted": [
                48
            ],
            "occurredAt": [
                180
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "CreatedCommitContributionConnection": {
            "edges": [
                162
            ],
            "nodes": [
                160
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CreatedCommitContributionEdge": {
            "cursor": [
                1
            ],
            "node": [
                160
            ],
            "__typename": [
                1
            ]
        },
        "CreatedIssueContribution": {
            "isRestricted": [
                48
            ],
            "issue": [
                354
            ],
            "occurredAt": [
                180
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "CreatedIssueContributionConnection": {
            "edges": [
                165
            ],
            "nodes": [
                163
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CreatedIssueContributionEdge": {
            "cursor": [
                1
            ],
            "node": [
                163
            ],
            "__typename": [
                1
            ]
        },
        "CreatedIssueOrRestrictedContribution": {
            "on_CreatedIssueContribution": [
                163
            ],
            "on_RestrictedContribution": [
                745
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestContribution": {
            "isRestricted": [
                48
            ],
            "occurredAt": [
                180
            ],
            "pullRequest": [
                560
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestContributionConnection": {
            "edges": [
                169
            ],
            "nodes": [
                167
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestContributionEdge": {
            "cursor": [
                1
            ],
            "node": [
                167
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestOrRestrictedContribution": {
            "on_CreatedPullRequestContribution": [
                167
            ],
            "on_RestrictedContribution": [
                745
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestReviewContribution": {
            "isRestricted": [
                48
            ],
            "occurredAt": [
                180
            ],
            "pullRequest": [
                560
            ],
            "pullRequestReview": [
                574
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestReviewContributionConnection": {
            "edges": [
                173
            ],
            "nodes": [
                171
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CreatedPullRequestReviewContributionEdge": {
            "cursor": [
                1
            ],
            "node": [
                171
            ],
            "__typename": [
                1
            ]
        },
        "CreatedRepositoryContribution": {
            "isRestricted": [
                48
            ],
            "occurredAt": [
                180
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "CreatedRepositoryContributionConnection": {
            "edges": [
                176
            ],
            "nodes": [
                174
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CreatedRepositoryContributionEdge": {
            "cursor": [
                1
            ],
            "node": [
                174
            ],
            "__typename": [
                1
            ]
        },
        "CreatedRepositoryOrRestrictedContribution": {
            "on_CreatedRepositoryContribution": [
                174
            ],
            "on_RestrictedContribution": [
                745
            ],
            "__typename": [
                1
            ]
        },
        "CrossReferencedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "isCrossRepository": [
                48
            ],
            "referencedAt": [
                180
            ],
            "resourcePath": [
                874
            ],
            "source": [
                623
            ],
            "target": [
                623
            ],
            "url": [
                874
            ],
            "willCloseTarget": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "Date": {},
        "DateTime": {},
        "DeclineTopicSuggestionInput": {
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "reason": [
                868
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeclineTopicSuggestionPayload": {
            "clientMutationId": [
                1
            ],
            "topic": [
                864
            ],
            "__typename": [
                1
            ]
        },
        "DefaultRepositoryPermissionField": {},
        "Deletable": {
            "viewerCanDelete": [
                48
            ],
            "on_CommitComment": [
                104
            ],
            "on_GistComment": [
                317
            ],
            "on_IssueComment": [
                355
            ],
            "on_PullRequestReview": [
                574
            ],
            "on_PullRequestReviewComment": [
                575
            ],
            "on_TeamDiscussion": [
                834
            ],
            "on_TeamDiscussionComment": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "DeleteBranchProtectionRuleInput": {
            "branchProtectionRuleId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteBranchProtectionRulePayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteDeploymentInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteDeploymentPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIpAllowListEntryInput": {
            "clientMutationId": [
                1
            ],
            "ipAllowListEntryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIpAllowListEntryPayload": {
            "clientMutationId": [
                1
            ],
            "ipAllowListEntry": [
                348
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIssueCommentInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIssueCommentPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIssueInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteIssuePayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "DeleteLabelInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteLabelPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeletePackageVersionInput": {
            "clientMutationId": [
                1
            ],
            "packageVersionId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeletePackageVersionPayload": {
            "clientMutationId": [
                1
            ],
            "success": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectCardInput": {
            "cardId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectCardPayload": {
            "clientMutationId": [
                1
            ],
            "column": [
                545
            ],
            "deletedCardId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectColumnInput": {
            "clientMutationId": [
                1
            ],
            "columnId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectColumnPayload": {
            "clientMutationId": [
                1
            ],
            "deletedColumnId": [
                2
            ],
            "project": [
                537
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteProjectPayload": {
            "clientMutationId": [
                1
            ],
            "owner": [
                554
            ],
            "__typename": [
                1
            ]
        },
        "DeletePullRequestReviewCommentInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeletePullRequestReviewCommentPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                574
            ],
            "__typename": [
                1
            ]
        },
        "DeletePullRequestReviewInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestReviewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeletePullRequestReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                574
            ],
            "__typename": [
                1
            ]
        },
        "DeleteRefInput": {
            "clientMutationId": [
                1
            ],
            "refId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteRefPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTeamDiscussionCommentInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTeamDiscussionCommentPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTeamDiscussionInput": {
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTeamDiscussionPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DemilestonedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "milestoneTitle": [
                1
            ],
            "subject": [
                418
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphDependency": {
            "hasDependencies": [
                48
            ],
            "packageManager": [
                1
            ],
            "packageName": [
                1
            ],
            "repository": [
                707
            ],
            "requirements": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphDependencyConnection": {
            "edges": [
                218
            ],
            "nodes": [
                216
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphDependencyEdge": {
            "cursor": [
                1
            ],
            "node": [
                216
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphManifest": {
            "blobPath": [
                1
            ],
            "dependencies": [
                217,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "dependenciesCount": [
                8
            ],
            "exceedsMaxSize": [
                48
            ],
            "filename": [
                1
            ],
            "id": [
                2
            ],
            "parseable": [
                48
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphManifestConnection": {
            "edges": [
                221
            ],
            "nodes": [
                219
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "DependencyGraphManifestEdge": {
            "cursor": [
                1
            ],
            "node": [
                219
            ],
            "__typename": [
                1
            ]
        },
        "DeployKey": {
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "key": [
                1
            ],
            "readOnly": [
                48
            ],
            "title": [
                1
            ],
            "verified": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "DeployKeyConnection": {
            "edges": [
                224
            ],
            "nodes": [
                222
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "DeployKeyEdge": {
            "cursor": [
                1
            ],
            "node": [
                222
            ],
            "__typename": [
                1
            ]
        },
        "DeployedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "deployment": [
                226
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "ref": [
                616
            ],
            "__typename": [
                1
            ]
        },
        "Deployment": {
            "commit": [
                102
            ],
            "commitOid": [
                1
            ],
            "createdAt": [
                180
            ],
            "creator": [
                7
            ],
            "databaseId": [
                8
            ],
            "description": [
                1
            ],
            "environment": [
                1
            ],
            "id": [
                2
            ],
            "latestEnvironment": [
                1
            ],
            "latestStatus": [
                233
            ],
            "originalEnvironment": [
                1
            ],
            "payload": [
                1
            ],
            "ref": [
                616
            ],
            "repository": [
                707
            ],
            "state": [
                232
            ],
            "statuses": [
                234,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "task": [
                1
            ],
            "updatedAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentConnection": {
            "edges": [
                228
            ],
            "nodes": [
                226
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentEdge": {
            "cursor": [
                1
            ],
            "node": [
                226
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentEnvironmentChangedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "deploymentStatus": [
                233
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentOrder": {
            "direction": [
                437
            ],
            "field": [
                231
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentOrderField": {},
        "DeploymentState": {},
        "DeploymentStatus": {
            "createdAt": [
                180
            ],
            "creator": [
                7
            ],
            "deployment": [
                226
            ],
            "description": [
                1
            ],
            "environment": [
                1
            ],
            "environmentUrl": [
                874
            ],
            "id": [
                2
            ],
            "logUrl": [
                874
            ],
            "state": [
                236
            ],
            "updatedAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentStatusConnection": {
            "edges": [
                235
            ],
            "nodes": [
                233
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentStatusEdge": {
            "cursor": [
                1
            ],
            "node": [
                233
            ],
            "__typename": [
                1
            ]
        },
        "DeploymentStatusState": {},
        "DiffSide": {},
        "DisconnectedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "isCrossRepository": [
                48
            ],
            "source": [
                623
            ],
            "subject": [
                623
            ],
            "__typename": [
                1
            ]
        },
        "DismissPullRequestReviewInput": {
            "clientMutationId": [
                1
            ],
            "message": [
                1
            ],
            "pullRequestReviewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DismissPullRequestReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                574
            ],
            "__typename": [
                1
            ]
        },
        "DraftPullRequestReviewComment": {
            "body": [
                1
            ],
            "path": [
                1
            ],
            "position": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "DraftPullRequestReviewThread": {
            "body": [
                1
            ],
            "line": [
                8
            ],
            "path": [
                1
            ],
            "side": [
                237
            ],
            "startLine": [
                8
            ],
            "startSide": [
                237
            ],
            "__typename": [
                1
            ]
        },
        "Enterprise": {
            "avatarUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "billingInfo": [
                253
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                336
            ],
            "id": [
                2
            ],
            "location": [
                1
            ],
            "members": [
                260,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "deployment": [
                        303
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        262
                    ],
                    "organizationLogins": [
                        1,
                        "[String!]"
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        302
                    ]
                }
            ],
            "name": [
                1
            ],
            "organizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "ownerInfo": [
                270
            ],
            "resourcePath": [
                874
            ],
            "slug": [
                1
            ],
            "url": [
                874
            ],
            "userAccounts": [
                300,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerIsAdmin": [
                48
            ],
            "websiteUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorConnection": {
            "edges": [
                245
            ],
            "nodes": [
                979
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorEdge": {
            "cursor": [
                1
            ],
            "node": [
                979
            ],
            "role": [
                251
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorInvitation": {
            "createdAt": [
                180
            ],
            "email": [
                1
            ],
            "enterprise": [
                243
            ],
            "id": [
                2
            ],
            "invitee": [
                979
            ],
            "inviter": [
                979
            ],
            "role": [
                251
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorInvitationConnection": {
            "edges": [
                248
            ],
            "nodes": [
                246
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorInvitationEdge": {
            "cursor": [
                1
            ],
            "node": [
                246
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorInvitationOrder": {
            "direction": [
                437
            ],
            "field": [
                250
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseAdministratorInvitationOrderField": {},
        "EnterpriseAdministratorRole": {},
        "EnterpriseAuditEntryData": {
            "enterpriseResourcePath": [
                874
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                874
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                404
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                405
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                406
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                453
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                533
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                534
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                732
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                733
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseBillingInfo": {
            "allLicensableUsersCount": [
                8
            ],
            "assetPacks": [
                8
            ],
            "availableSeats": [
                8
            ],
            "bandwidthQuota": [
                254
            ],
            "bandwidthUsage": [
                254
            ],
            "bandwidthUsagePercentage": [
                8
            ],
            "seats": [
                8
            ],
            "storageQuota": [
                254
            ],
            "storageUsage": [
                254
            ],
            "storageUsagePercentage": [
                8
            ],
            "totalAvailableLicenses": [
                8
            ],
            "totalLicenses": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "Float": {},
        "EnterpriseDefaultRepositoryPermissionSettingValue": {},
        "EnterpriseEnabledDisabledSettingValue": {},
        "EnterpriseEnabledSettingValue": {},
        "EnterpriseIdentityProvider": {
            "digestMethod": [
                757
            ],
            "enterprise": [
                243
            ],
            "externalIdentities": [
                305,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "id": [
                2
            ],
            "idpCertificate": [
                993
            ],
            "issuer": [
                1
            ],
            "recoveryCodes": [
                1
            ],
            "signatureMethod": [
                758
            ],
            "ssoUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMember": {
            "on_EnterpriseUserAccount": [
                299
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberConnection": {
            "edges": [
                261
            ],
            "nodes": [
                259
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberEdge": {
            "cursor": [
                1
            ],
            "isUnlicensed": [
                48
            ],
            "node": [
                259
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberOrder": {
            "direction": [
                437
            ],
            "field": [
                263
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseMemberOrderField": {},
        "EnterpriseMembersCanCreateRepositoriesSettingValue": {},
        "EnterpriseMembersCanMakePurchasesSettingValue": {},
        "EnterpriseOrganizationMembershipConnection": {
            "edges": [
                267
            ],
            "nodes": [
                478
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseOrganizationMembershipEdge": {
            "cursor": [
                1
            ],
            "node": [
                478
            ],
            "role": [
                302
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseOutsideCollaboratorConnection": {
            "edges": [
                269
            ],
            "nodes": [
                979
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseOutsideCollaboratorEdge": {
            "cursor": [
                1
            ],
            "isUnlicensed": [
                48
            ],
            "node": [
                979
            ],
            "repositories": [
                276,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        723
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseOwnerInfo": {
            "actionExecutionCapabilitySettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ]
                }
            ],
            "admins": [
                244,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        262
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        251
                    ]
                }
            ],
            "affiliatedUsersWithTwoFactorDisabled": [
                982,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "affiliatedUsersWithTwoFactorDisabledExist": [
                48
            ],
            "allowPrivateRepositoryForkingSetting": [
                256
            ],
            "allowPrivateRepositoryForkingSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        48,
                        "Boolean!"
                    ]
                }
            ],
            "defaultRepositoryPermissionSetting": [
                255
            ],
            "defaultRepositoryPermissionSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        183,
                        "DefaultRepositoryPermissionField!"
                    ]
                }
            ],
            "enterpriseServerInstallations": [
                279,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "connectedOnly": [
                        48
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        281
                    ]
                }
            ],
            "ipAllowListEnabledSetting": [
                347
            ],
            "ipAllowListEntries": [
                349,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        351
                    ]
                }
            ],
            "isUpdatingDefaultRepositoryPermission": [
                48
            ],
            "isUpdatingTwoFactorRequirement": [
                48
            ],
            "membersCanChangeRepositoryVisibilitySetting": [
                256
            ],
            "membersCanChangeRepositoryVisibilitySettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        48,
                        "Boolean!"
                    ]
                }
            ],
            "membersCanCreateInternalRepositoriesSetting": [
                48
            ],
            "membersCanCreatePrivateRepositoriesSetting": [
                48
            ],
            "membersCanCreatePublicRepositoriesSetting": [
                48
            ],
            "membersCanCreateRepositoriesSetting": [
                264
            ],
            "membersCanCreateRepositoriesSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        494,
                        "OrganizationMembersCanCreateRepositoriesSettingValue!"
                    ]
                }
            ],
            "membersCanDeleteIssuesSetting": [
                256
            ],
            "membersCanDeleteIssuesSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        48,
                        "Boolean!"
                    ]
                }
            ],
            "membersCanDeleteRepositoriesSetting": [
                256
            ],
            "membersCanDeleteRepositoriesSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        48,
                        "Boolean!"
                    ]
                }
            ],
            "membersCanInviteCollaboratorsSetting": [
                256
            ],
            "membersCanInviteCollaboratorsSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        48,
                        "Boolean!"
                    ]
                }
            ],
            "membersCanMakePurchasesSetting": [
                265
            ],
            "membersCanUpdateProtectedBranchesSetting": [
                256
            ],
            "membersCanUpdateProtectedBranchesSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        48,
                        "Boolean!"
                    ]
                }
            ],
            "membersCanViewDependencyInsightsSetting": [
                256
            ],
            "membersCanViewDependencyInsightsSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        48,
                        "Boolean!"
                    ]
                }
            ],
            "organizationProjectsSetting": [
                256
            ],
            "organizationProjectsSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        48,
                        "Boolean!"
                    ]
                }
            ],
            "outsideCollaborators": [
                268,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "login": [
                        1
                    ],
                    "orderBy": [
                        262
                    ],
                    "query": [
                        1
                    ],
                    "visibility": [
                        731
                    ]
                }
            ],
            "pendingAdminInvitations": [
                247,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        249
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        251
                    ]
                }
            ],
            "pendingCollaboratorInvitations": [
                717,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        719
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "pendingCollaborators": [
                271,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        719
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "pendingMemberInvitations": [
                273,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "repositoryProjectsSetting": [
                256
            ],
            "repositoryProjectsSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        48,
                        "Boolean!"
                    ]
                }
            ],
            "samlIdentityProvider": [
                258
            ],
            "samlIdentityProviderSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        342,
                        "IdentityProviderConfigurationState!"
                    ]
                }
            ],
            "teamDiscussionsSetting": [
                256
            ],
            "teamDiscussionsSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        48,
                        "Boolean!"
                    ]
                }
            ],
            "twoFactorRequiredSetting": [
                257
            ],
            "twoFactorRequiredSettingOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "value": [
                        48,
                        "Boolean!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "EnterprisePendingCollaboratorConnection": {
            "edges": [
                272
            ],
            "nodes": [
                979
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterprisePendingCollaboratorEdge": {
            "cursor": [
                1
            ],
            "isUnlicensed": [
                48
            ],
            "node": [
                979
            ],
            "repositories": [
                276,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        723
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "EnterprisePendingMemberInvitationConnection": {
            "edges": [
                274
            ],
            "nodes": [
                486
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "totalUniqueUserCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterprisePendingMemberInvitationEdge": {
            "cursor": [
                1
            ],
            "isUnlicensed": [
                48
            ],
            "node": [
                486
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseRepositoryInfo": {
            "id": [
                2
            ],
            "isPrivate": [
                48
            ],
            "name": [
                1
            ],
            "nameWithOwner": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseRepositoryInfoConnection": {
            "edges": [
                277
            ],
            "nodes": [
                275
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseRepositoryInfoEdge": {
            "cursor": [
                1
            ],
            "node": [
                275
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallation": {
            "createdAt": [
                180
            ],
            "customerName": [
                1
            ],
            "hostName": [
                1
            ],
            "id": [
                2
            ],
            "isConnected": [
                48
            ],
            "updatedAt": [
                180
            ],
            "userAccounts": [
                284,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        291
                    ]
                }
            ],
            "userAccountsUploads": [
                294,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        296
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallationConnection": {
            "edges": [
                280
            ],
            "nodes": [
                278
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallationEdge": {
            "cursor": [
                1
            ],
            "node": [
                278
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallationOrder": {
            "direction": [
                437
            ],
            "field": [
                282
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerInstallationOrderField": {},
        "EnterpriseServerUserAccount": {
            "createdAt": [
                180
            ],
            "emails": [
                287,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        289
                    ]
                }
            ],
            "enterpriseServerInstallation": [
                278
            ],
            "id": [
                2
            ],
            "isSiteAdmin": [
                48
            ],
            "login": [
                1
            ],
            "profileName": [
                1
            ],
            "remoteCreatedAt": [
                180
            ],
            "remoteUserId": [
                8
            ],
            "updatedAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountConnection": {
            "edges": [
                285
            ],
            "nodes": [
                283
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEdge": {
            "cursor": [
                1
            ],
            "node": [
                283
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEmail": {
            "createdAt": [
                180
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "isPrimary": [
                48
            ],
            "updatedAt": [
                180
            ],
            "userAccount": [
                283
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEmailConnection": {
            "edges": [
                288
            ],
            "nodes": [
                286
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEmailEdge": {
            "cursor": [
                1
            ],
            "node": [
                286
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEmailOrder": {
            "direction": [
                437
            ],
            "field": [
                290
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountEmailOrderField": {},
        "EnterpriseServerUserAccountOrder": {
            "direction": [
                437
            ],
            "field": [
                292
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountOrderField": {},
        "EnterpriseServerUserAccountsUpload": {
            "createdAt": [
                180
            ],
            "enterprise": [
                243
            ],
            "enterpriseServerInstallation": [
                278
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "syncState": [
                298
            ],
            "updatedAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountsUploadConnection": {
            "edges": [
                295
            ],
            "nodes": [
                293
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountsUploadEdge": {
            "cursor": [
                1
            ],
            "node": [
                293
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountsUploadOrder": {
            "direction": [
                437
            ],
            "field": [
                297
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseServerUserAccountsUploadOrderField": {},
        "EnterpriseServerUserAccountsUploadSyncState": {},
        "EnterpriseUserAccount": {
            "avatarUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "createdAt": [
                180
            ],
            "enterprise": [
                243
            ],
            "id": [
                2
            ],
            "login": [
                1
            ],
            "name": [
                1
            ],
            "organizations": [
                266,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        495
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        302
                    ]
                }
            ],
            "resourcePath": [
                874
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseUserAccountConnection": {
            "edges": [
                301
            ],
            "nodes": [
                299
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseUserAccountEdge": {
            "cursor": [
                1
            ],
            "node": [
                299
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseUserAccountMembershipRole": {},
        "EnterpriseUserDeployment": {},
        "ExternalIdentity": {
            "guid": [
                1
            ],
            "id": [
                2
            ],
            "organizationInvitation": [
                486
            ],
            "samlIdentity": [
                307
            ],
            "scimIdentity": [
                308
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "ExternalIdentityConnection": {
            "edges": [
                306
            ],
            "nodes": [
                304
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ExternalIdentityEdge": {
            "cursor": [
                1
            ],
            "node": [
                304
            ],
            "__typename": [
                1
            ]
        },
        "ExternalIdentitySamlAttributes": {
            "nameId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ExternalIdentityScimAttributes": {
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FollowUserInput": {
            "clientMutationId": [
                1
            ],
            "userId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "FollowUserPayload": {
            "clientMutationId": [
                1
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "FollowerConnection": {
            "edges": [
                986
            ],
            "nodes": [
                979
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "FollowingConnection": {
            "edges": [
                986
            ],
            "nodes": [
                979
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "FundingLink": {
            "platform": [
                314
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "FundingPlatform": {},
        "GenericHovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Gist": {
            "comments": [
                318,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "createdAt": [
                180
            ],
            "description": [
                1
            ],
            "files": [
                322,
                {
                    "limit": [
                        8
                    ],
                    "oid": [
                        329
                    ]
                }
            ],
            "forks": [
                320,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        323
                    ]
                }
            ],
            "id": [
                2
            ],
            "isFork": [
                48
            ],
            "isPublic": [
                48
            ],
            "name": [
                1
            ],
            "owner": [
                725
            ],
            "pushedAt": [
                180
            ],
            "resourcePath": [
                874
            ],
            "stargazers": [
                806,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        804
                    ]
                }
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "viewerHasStarred": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "GistComment": {
            "author": [
                7
            ],
            "authorAssociation": [
                99
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "bodyText": [
                1
            ],
            "createdAt": [
                180
            ],
            "createdViaEmail": [
                48
            ],
            "databaseId": [
                8
            ],
            "editor": [
                7
            ],
            "gist": [
                316
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                48
            ],
            "isMinimized": [
                48
            ],
            "lastEditedAt": [
                180
            ],
            "minimizedReason": [
                1
            ],
            "publishedAt": [
                180
            ],
            "updatedAt": [
                180
            ],
            "userContentEdits": [
                984,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerCanDelete": [
                48
            ],
            "viewerCanMinimize": [
                48
            ],
            "viewerCanUpdate": [
                48
            ],
            "viewerCannotUpdateReasons": [
                100
            ],
            "viewerDidAuthor": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "GistCommentConnection": {
            "edges": [
                319
            ],
            "nodes": [
                317
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "GistCommentEdge": {
            "cursor": [
                1
            ],
            "node": [
                317
            ],
            "__typename": [
                1
            ]
        },
        "GistConnection": {
            "edges": [
                321
            ],
            "nodes": [
                316
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "GistEdge": {
            "cursor": [
                1
            ],
            "node": [
                316
            ],
            "__typename": [
                1
            ]
        },
        "GistFile": {
            "encodedName": [
                1
            ],
            "encoding": [
                1
            ],
            "extension": [
                1
            ],
            "isImage": [
                48
            ],
            "isTruncated": [
                48
            ],
            "language": [
                381
            ],
            "name": [
                1
            ],
            "size": [
                8
            ],
            "text": [
                1,
                {
                    "truncate": [
                        8
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "GistOrder": {
            "direction": [
                437
            ],
            "field": [
                324
            ],
            "__typename": [
                1
            ]
        },
        "GistOrderField": {},
        "GistPrivacy": {},
        "GitActor": {
            "avatarUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "date": [
                334
            ],
            "email": [
                1
            ],
            "name": [
                1
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "GitHubMetadata": {
            "gitHubServicesSha": [
                329
            ],
            "gitIpAddresses": [
                1
            ],
            "hookIpAddresses": [
                1
            ],
            "importerIpAddresses": [
                1
            ],
            "isPasswordAuthenticationVerifiable": [
                48
            ],
            "pagesIpAddresses": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GitObject": {
            "abbreviatedOid": [
                1
            ],
            "commitResourcePath": [
                874
            ],
            "commitUrl": [
                874
            ],
            "id": [
                2
            ],
            "oid": [
                329
            ],
            "repository": [
                707
            ],
            "on_Blob": [
                47
            ],
            "on_Commit": [
                102
            ],
            "on_Tag": [
                827
            ],
            "on_Tree": [
                872
            ],
            "__typename": [
                1
            ]
        },
        "GitObjectID": {},
        "GitRefname": {},
        "GitSSHRemote": {},
        "GitSignature": {
            "email": [
                1
            ],
            "isValid": [
                48
            ],
            "payload": [
                1
            ],
            "signature": [
                1
            ],
            "signer": [
                979
            ],
            "state": [
                333
            ],
            "wasSignedByGitHub": [
                48
            ],
            "on_GpgSignature": [
                335
            ],
            "on_SmimeSignature": [
                788
            ],
            "on_UnknownSignature": [
                881
            ],
            "__typename": [
                1
            ]
        },
        "GitSignatureState": {},
        "GitTimestamp": {},
        "GpgSignature": {
            "email": [
                1
            ],
            "isValid": [
                48
            ],
            "keyId": [
                1
            ],
            "payload": [
                1
            ],
            "signature": [
                1
            ],
            "signer": [
                979
            ],
            "state": [
                333
            ],
            "wasSignedByGitHub": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "HTML": {},
        "HeadRefDeletedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "headRef": [
                616
            ],
            "headRefName": [
                1
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "HeadRefForcePushedEvent": {
            "actor": [
                7
            ],
            "afterCommit": [
                102
            ],
            "beforeCommit": [
                102
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "ref": [
                616
            ],
            "__typename": [
                1
            ]
        },
        "HeadRefRestoredEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "Hovercard": {
            "contexts": [
                341
            ],
            "__typename": [
                1
            ]
        },
        "HovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "on_GenericHovercardContext": [
                315
            ],
            "on_OrganizationTeamsHovercardContext": [
                497
            ],
            "on_OrganizationsHovercardContext": [
                498
            ],
            "on_ReviewStatusHovercardContext": [
                756
            ],
            "on_ViewerHovercardContext": [
                992
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderConfigurationState": {},
        "ImportProjectInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "columnImports": [
                548
            ],
            "name": [
                1
            ],
            "ownerName": [
                1
            ],
            "public": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "ImportProjectPayload": {
            "clientMutationId": [
                1
            ],
            "project": [
                537
            ],
            "__typename": [
                1
            ]
        },
        "InviteEnterpriseAdminInput": {
            "clientMutationId": [
                1
            ],
            "email": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "invitee": [
                1
            ],
            "role": [
                251
            ],
            "__typename": [
                1
            ]
        },
        "InviteEnterpriseAdminPayload": {
            "clientMutationId": [
                1
            ],
            "invitation": [
                246
            ],
            "__typename": [
                1
            ]
        },
        "IpAllowListEnabledSettingValue": {},
        "IpAllowListEntry": {
            "allowListValue": [
                1
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "isActive": [
                48
            ],
            "name": [
                1
            ],
            "owner": [
                353
            ],
            "updatedAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "IpAllowListEntryConnection": {
            "edges": [
                350
            ],
            "nodes": [
                348
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "IpAllowListEntryEdge": {
            "cursor": [
                1
            ],
            "node": [
                348
            ],
            "__typename": [
                1
            ]
        },
        "IpAllowListEntryOrder": {
            "direction": [
                437
            ],
            "field": [
                352
            ],
            "__typename": [
                1
            ]
        },
        "IpAllowListEntryOrderField": {},
        "IpAllowListOwner": {
            "on_Enterprise": [
                243
            ],
            "on_Organization": [
                478
            ],
            "__typename": [
                1
            ]
        },
        "Issue": {
            "activeLockReason": [
                392
            ],
            "assignees": [
                982,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "author": [
                7
            ],
            "authorAssociation": [
                99
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "bodyText": [
                1
            ],
            "closed": [
                48
            ],
            "closedAt": [
                180
            ],
            "comments": [
                356,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "createdAt": [
                180
            ],
            "createdViaEmail": [
                48
            ],
            "databaseId": [
                8
            ],
            "editor": [
                7
            ],
            "hovercard": [
                340,
                {
                    "includeNotificationContexts": [
                        48
                    ]
                }
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                48
            ],
            "labels": [
                375,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        377
                    ]
                }
            ],
            "lastEditedAt": [
                180
            ],
            "locked": [
                48
            ],
            "milestone": [
                415
            ],
            "number": [
                8
            ],
            "participants": [
                982,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "projectCards": [
                540,
                {
                    "after": [
                        1
                    ],
                    "archivedStates": [
                        539,
                        "[ProjectCardArchivedState]"
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "publishedAt": [
                180
            ],
            "reactionGroups": [
                612
            ],
            "reactions": [
                609,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        610
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        613
                    ]
                }
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "state": [
                365
            ],
            "timeline": [
                366,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "since": [
                        180
                    ]
                }
            ],
            "timelineItems": [
                370,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "itemTypes": [
                        372,
                        "[IssueTimelineItemsItemType!]"
                    ],
                    "last": [
                        8
                    ],
                    "since": [
                        180
                    ],
                    "skip": [
                        8
                    ]
                }
            ],
            "title": [
                1
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "userContentEdits": [
                984,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerCanReact": [
                48
            ],
            "viewerCanSubscribe": [
                48
            ],
            "viewerCanUpdate": [
                48
            ],
            "viewerCannotUpdateReasons": [
                100
            ],
            "viewerDidAuthor": [
                48
            ],
            "viewerSubscription": [
                825
            ],
            "__typename": [
                1
            ]
        },
        "IssueComment": {
            "author": [
                7
            ],
            "authorAssociation": [
                99
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "bodyText": [
                1
            ],
            "createdAt": [
                180
            ],
            "createdViaEmail": [
                48
            ],
            "databaseId": [
                8
            ],
            "editor": [
                7
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                48
            ],
            "isMinimized": [
                48
            ],
            "issue": [
                354
            ],
            "lastEditedAt": [
                180
            ],
            "minimizedReason": [
                1
            ],
            "publishedAt": [
                180
            ],
            "pullRequest": [
                560
            ],
            "reactionGroups": [
                612
            ],
            "reactions": [
                609,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        610
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        613
                    ]
                }
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "userContentEdits": [
                984,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerCanDelete": [
                48
            ],
            "viewerCanMinimize": [
                48
            ],
            "viewerCanReact": [
                48
            ],
            "viewerCanUpdate": [
                48
            ],
            "viewerCannotUpdateReasons": [
                100
            ],
            "viewerDidAuthor": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "IssueCommentConnection": {
            "edges": [
                357
            ],
            "nodes": [
                355
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "IssueCommentEdge": {
            "cursor": [
                1
            ],
            "node": [
                355
            ],
            "__typename": [
                1
            ]
        },
        "IssueConnection": {
            "edges": [
                360
            ],
            "nodes": [
                354
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "IssueContributionsByRepository": {
            "contributions": [
                164,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        122
                    ]
                }
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "IssueEdge": {
            "cursor": [
                1
            ],
            "node": [
                354
            ],
            "__typename": [
                1
            ]
        },
        "IssueFilters": {
            "assignee": [
                1
            ],
            "createdBy": [
                1
            ],
            "labels": [
                1
            ],
            "mentioned": [
                1
            ],
            "milestone": [
                1
            ],
            "since": [
                180
            ],
            "states": [
                365
            ],
            "viewerSubscribed": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "IssueOrPullRequest": {
            "on_Issue": [
                354
            ],
            "on_PullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "IssueOrder": {
            "direction": [
                437
            ],
            "field": [
                364
            ],
            "__typename": [
                1
            ]
        },
        "IssueOrderField": {},
        "IssueState": {},
        "IssueTimelineConnection": {
            "edges": [
                368
            ],
            "nodes": [
                367
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItem": {
            "on_AssignedEvent": [
                35
            ],
            "on_ClosedEvent": [
                94
            ],
            "on_Commit": [
                102
            ],
            "on_CrossReferencedEvent": [
                178
            ],
            "on_DemilestonedEvent": [
                215
            ],
            "on_IssueComment": [
                355
            ],
            "on_LabeledEvent": [
                380
            ],
            "on_LockedEvent": [
                394
            ],
            "on_MilestonedEvent": [
                422
            ],
            "on_ReferencedEvent": [
                622
            ],
            "on_RenamedTitleEvent": [
                673
            ],
            "on_ReopenedEvent": [
                679
            ],
            "on_SubscribedEvent": [
                824
            ],
            "on_TransferredEvent": [
                871
            ],
            "on_UnassignedEvent": [
                877
            ],
            "on_UnlabeledEvent": [
                882
            ],
            "on_UnlockedEvent": [
                887
            ],
            "on_UnsubscribedEvent": [
                898
            ],
            "on_UserBlockedEvent": [
                981
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                367
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItems": {
            "on_AddedToProjectEvent": [
                30
            ],
            "on_AssignedEvent": [
                35
            ],
            "on_ClosedEvent": [
                94
            ],
            "on_CommentDeletedEvent": [
                101
            ],
            "on_ConnectedEvent": [
                114
            ],
            "on_ConvertedNoteToIssueEvent": [
                127
            ],
            "on_CrossReferencedEvent": [
                178
            ],
            "on_DemilestonedEvent": [
                215
            ],
            "on_DisconnectedEvent": [
                238
            ],
            "on_IssueComment": [
                355
            ],
            "on_LabeledEvent": [
                380
            ],
            "on_LockedEvent": [
                394
            ],
            "on_MarkedAsDuplicateEvent": [
                398
            ],
            "on_MentionedEvent": [
                407
            ],
            "on_MilestonedEvent": [
                422
            ],
            "on_MovedColumnsInProjectEvent": [
                430
            ],
            "on_PinnedEvent": [
                528
            ],
            "on_ReferencedEvent": [
                622
            ],
            "on_RemovedFromProjectEvent": [
                672
            ],
            "on_RenamedTitleEvent": [
                673
            ],
            "on_ReopenedEvent": [
                679
            ],
            "on_SubscribedEvent": [
                824
            ],
            "on_TransferredEvent": [
                871
            ],
            "on_UnassignedEvent": [
                877
            ],
            "on_UnlabeledEvent": [
                882
            ],
            "on_UnlockedEvent": [
                887
            ],
            "on_UnmarkedAsDuplicateEvent": [
                890
            ],
            "on_UnpinnedEvent": [
                895
            ],
            "on_UnsubscribedEvent": [
                898
            ],
            "on_UserBlockedEvent": [
                981
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItemsConnection": {
            "edges": [
                371
            ],
            "filteredCount": [
                8
            ],
            "nodes": [
                369
            ],
            "pageCount": [
                8
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "updatedAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItemsEdge": {
            "cursor": [
                1
            ],
            "node": [
                369
            ],
            "__typename": [
                1
            ]
        },
        "IssueTimelineItemsItemType": {},
        "JoinedGitHubContribution": {
            "isRestricted": [
                48
            ],
            "occurredAt": [
                180
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "Label": {
            "color": [
                1
            ],
            "createdAt": [
                180
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "isDefault": [
                48
            ],
            "issues": [
                358,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        361
                    ],
                    "first": [
                        8
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        363
                    ],
                    "states": [
                        365,
                        "[IssueState!]"
                    ]
                }
            ],
            "name": [
                1
            ],
            "pullRequests": [
                568,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        363
                    ],
                    "states": [
                        589,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "LabelConnection": {
            "edges": [
                376
            ],
            "nodes": [
                374
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "LabelEdge": {
            "cursor": [
                1
            ],
            "node": [
                374
            ],
            "__typename": [
                1
            ]
        },
        "LabelOrder": {
            "direction": [
                437
            ],
            "field": [
                378
            ],
            "__typename": [
                1
            ]
        },
        "LabelOrderField": {},
        "Labelable": {
            "labels": [
                375,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        377
                    ]
                }
            ],
            "on_Issue": [
                354
            ],
            "on_PullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "LabeledEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "label": [
                374
            ],
            "labelable": [
                379
            ],
            "__typename": [
                1
            ]
        },
        "Language": {
            "color": [
                1
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LanguageConnection": {
            "edges": [
                383
            ],
            "nodes": [
                381
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "totalSize": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "LanguageEdge": {
            "cursor": [
                1
            ],
            "node": [
                381
            ],
            "size": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "LanguageOrder": {
            "direction": [
                437
            ],
            "field": [
                385
            ],
            "__typename": [
                1
            ]
        },
        "LanguageOrderField": {},
        "License": {
            "body": [
                1
            ],
            "conditions": [
                387
            ],
            "description": [
                1
            ],
            "featured": [
                48
            ],
            "hidden": [
                48
            ],
            "id": [
                2
            ],
            "implementation": [
                1
            ],
            "key": [
                1
            ],
            "limitations": [
                387
            ],
            "name": [
                1
            ],
            "nickname": [
                1
            ],
            "permissions": [
                387
            ],
            "pseudoLicense": [
                48
            ],
            "spdxId": [
                1
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "LicenseRule": {
            "description": [
                1
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LinkRepositoryToProjectInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "LinkRepositoryToProjectPayload": {
            "clientMutationId": [
                1
            ],
            "project": [
                537
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "LockLockableInput": {
            "clientMutationId": [
                1
            ],
            "lockReason": [
                392
            ],
            "lockableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "LockLockablePayload": {
            "actor": [
                7
            ],
            "clientMutationId": [
                1
            ],
            "lockedRecord": [
                393
            ],
            "__typename": [
                1
            ]
        },
        "LockReason": {},
        "Lockable": {
            "activeLockReason": [
                392
            ],
            "locked": [
                48
            ],
            "on_Issue": [
                354
            ],
            "on_PullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "LockedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "lockReason": [
                392
            ],
            "lockable": [
                393
            ],
            "__typename": [
                1
            ]
        },
        "Mannequin": {
            "avatarUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "login": [
                1
            ],
            "resourcePath": [
                874
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "MarkPullRequestReadyForReviewInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MarkPullRequestReadyForReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "MarkedAsDuplicateEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceCategory": {
            "description": [
                1
            ],
            "howItWorks": [
                1
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "primaryListingCount": [
                8
            ],
            "resourcePath": [
                874
            ],
            "secondaryListingCount": [
                8
            ],
            "slug": [
                1
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceListing": {
            "app": [
                31
            ],
            "companyUrl": [
                874
            ],
            "configurationResourcePath": [
                874
            ],
            "configurationUrl": [
                874
            ],
            "documentationUrl": [
                874
            ],
            "extendedDescription": [
                1
            ],
            "extendedDescriptionHTML": [
                336
            ],
            "fullDescription": [
                1
            ],
            "fullDescriptionHTML": [
                336
            ],
            "hasPublishedFreeTrialPlans": [
                48
            ],
            "hasTermsOfService": [
                48
            ],
            "howItWorks": [
                1
            ],
            "howItWorksHTML": [
                336
            ],
            "id": [
                2
            ],
            "installationUrl": [
                874
            ],
            "installedForViewer": [
                48
            ],
            "isArchived": [
                48
            ],
            "isDraft": [
                48
            ],
            "isPaid": [
                48
            ],
            "isPublic": [
                48
            ],
            "isRejected": [
                48
            ],
            "isUnverified": [
                48
            ],
            "isUnverifiedPending": [
                48
            ],
            "isVerificationPendingFromDraft": [
                48
            ],
            "isVerificationPendingFromUnverified": [
                48
            ],
            "isVerified": [
                48
            ],
            "logoBackgroundColor": [
                1
            ],
            "logoUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "name": [
                1
            ],
            "normalizedShortDescription": [
                1
            ],
            "pricingUrl": [
                874
            ],
            "primaryCategory": [
                399
            ],
            "privacyPolicyUrl": [
                874
            ],
            "resourcePath": [
                874
            ],
            "screenshotUrls": [
                1
            ],
            "secondaryCategory": [
                399
            ],
            "shortDescription": [
                1
            ],
            "slug": [
                1
            ],
            "statusUrl": [
                874
            ],
            "supportEmail": [
                1
            ],
            "supportUrl": [
                874
            ],
            "termsOfServiceUrl": [
                874
            ],
            "url": [
                874
            ],
            "viewerCanAddPlans": [
                48
            ],
            "viewerCanApprove": [
                48
            ],
            "viewerCanDelist": [
                48
            ],
            "viewerCanEdit": [
                48
            ],
            "viewerCanEditCategories": [
                48
            ],
            "viewerCanEditPlans": [
                48
            ],
            "viewerCanRedraft": [
                48
            ],
            "viewerCanReject": [
                48
            ],
            "viewerCanRequestApproval": [
                48
            ],
            "viewerHasPurchased": [
                48
            ],
            "viewerHasPurchasedForAllOrganizations": [
                48
            ],
            "viewerIsListingAdmin": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceListingConnection": {
            "edges": [
                402
            ],
            "nodes": [
                400
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceListingEdge": {
            "cursor": [
                1
            ],
            "node": [
                400
            ],
            "__typename": [
                1
            ]
        },
        "MemberStatusable": {
            "memberStatuses": [
                988,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        990
                    ]
                }
            ],
            "on_Organization": [
                478
            ],
            "on_Team": [
                828
            ],
            "__typename": [
                1
            ]
        },
        "MembersCanDeleteReposClearAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "enterpriseResourcePath": [
                874
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                874
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "MembersCanDeleteReposDisableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "enterpriseResourcePath": [
                874
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                874
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "MembersCanDeleteReposEnableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "enterpriseResourcePath": [
                874
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                874
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "MentionedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MergeBranchInput": {
            "base": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "commitMessage": [
                1
            ],
            "head": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MergeBranchPayload": {
            "clientMutationId": [
                1
            ],
            "mergeCommit": [
                102
            ],
            "__typename": [
                1
            ]
        },
        "MergePullRequestInput": {
            "clientMutationId": [
                1
            ],
            "commitBody": [
                1
            ],
            "commitHeadline": [
                1
            ],
            "expectedHeadOid": [
                329
            ],
            "mergeMethod": [
                571
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MergePullRequestPayload": {
            "actor": [
                7
            ],
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "MergeStateStatus": {},
        "MergeableState": {},
        "MergedEvent": {
            "actor": [
                7
            ],
            "commit": [
                102
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "mergeRef": [
                616
            ],
            "mergeRefName": [
                1
            ],
            "pullRequest": [
                560
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "Milestone": {
            "closed": [
                48
            ],
            "closedAt": [
                180
            ],
            "createdAt": [
                180
            ],
            "creator": [
                7
            ],
            "description": [
                1
            ],
            "dueOn": [
                180
            ],
            "id": [
                2
            ],
            "issuePrioritiesDebug": [
                1
            ],
            "issues": [
                358,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        361
                    ],
                    "first": [
                        8
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        363
                    ],
                    "states": [
                        365,
                        "[IssueState!]"
                    ]
                }
            ],
            "number": [
                8
            ],
            "pullRequests": [
                568,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        363
                    ],
                    "states": [
                        589,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "state": [
                421
            ],
            "title": [
                1
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "MilestoneConnection": {
            "edges": [
                417
            ],
            "nodes": [
                415
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "MilestoneEdge": {
            "cursor": [
                1
            ],
            "node": [
                415
            ],
            "__typename": [
                1
            ]
        },
        "MilestoneItem": {
            "on_Issue": [
                354
            ],
            "on_PullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "MilestoneOrder": {
            "direction": [
                437
            ],
            "field": [
                420
            ],
            "__typename": [
                1
            ]
        },
        "MilestoneOrderField": {},
        "MilestoneState": {},
        "MilestonedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "milestoneTitle": [
                1
            ],
            "subject": [
                418
            ],
            "__typename": [
                1
            ]
        },
        "Minimizable": {
            "isMinimized": [
                48
            ],
            "minimizedReason": [
                1
            ],
            "viewerCanMinimize": [
                48
            ],
            "on_CommitComment": [
                104
            ],
            "on_GistComment": [
                317
            ],
            "on_IssueComment": [
                355
            ],
            "on_PullRequestReviewComment": [
                575
            ],
            "__typename": [
                1
            ]
        },
        "MinimizeCommentInput": {
            "classifier": [
                706
            ],
            "clientMutationId": [
                1
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MinimizeCommentPayload": {
            "clientMutationId": [
                1
            ],
            "minimizedComment": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "MoveProjectCardInput": {
            "afterCardId": [
                2
            ],
            "cardId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "columnId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MoveProjectCardPayload": {
            "cardEdge": [
                541
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MoveProjectColumnInput": {
            "afterColumnId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "columnId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MoveProjectColumnPayload": {
            "clientMutationId": [
                1
            ],
            "columnEdge": [
                547
            ],
            "__typename": [
                1
            ]
        },
        "MovedColumnsInProjectEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "previousProjectColumnName": [
                1
            ],
            "project": [
                537
            ],
            "projectCard": [
                538
            ],
            "projectColumnName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Mutation": {
            "acceptEnterpriseAdministratorInvitation": [
                3,
                {
                    "input": [
                        0,
                        "AcceptEnterpriseAdministratorInvitationInput!"
                    ]
                }
            ],
            "acceptTopicSuggestion": [
                5,
                {
                    "input": [
                        4,
                        "AcceptTopicSuggestionInput!"
                    ]
                }
            ],
            "addAssigneesToAssignable": [
                11,
                {
                    "input": [
                        10,
                        "AddAssigneesToAssignableInput!"
                    ]
                }
            ],
            "addComment": [
                13,
                {
                    "input": [
                        12,
                        "AddCommentInput!"
                    ]
                }
            ],
            "addLabelsToLabelable": [
                15,
                {
                    "input": [
                        14,
                        "AddLabelsToLabelableInput!"
                    ]
                }
            ],
            "addProjectCard": [
                17,
                {
                    "input": [
                        16,
                        "AddProjectCardInput!"
                    ]
                }
            ],
            "addProjectColumn": [
                19,
                {
                    "input": [
                        18,
                        "AddProjectColumnInput!"
                    ]
                }
            ],
            "addPullRequestReview": [
                23,
                {
                    "input": [
                        22,
                        "AddPullRequestReviewInput!"
                    ]
                }
            ],
            "addPullRequestReviewComment": [
                21,
                {
                    "input": [
                        20,
                        "AddPullRequestReviewCommentInput!"
                    ]
                }
            ],
            "addPullRequestReviewThread": [
                25,
                {
                    "input": [
                        24,
                        "AddPullRequestReviewThreadInput!"
                    ]
                }
            ],
            "addReaction": [
                27,
                {
                    "input": [
                        26,
                        "AddReactionInput!"
                    ]
                }
            ],
            "addStar": [
                29,
                {
                    "input": [
                        28,
                        "AddStarInput!"
                    ]
                }
            ],
            "archiveRepository": [
                33,
                {
                    "input": [
                        32,
                        "ArchiveRepositoryInput!"
                    ]
                }
            ],
            "cancelEnterpriseAdminInvitation": [
                57,
                {
                    "input": [
                        56,
                        "CancelEnterpriseAdminInvitationInput!"
                    ]
                }
            ],
            "changeUserStatus": [
                59,
                {
                    "input": [
                        58,
                        "ChangeUserStatusInput!"
                    ]
                }
            ],
            "clearLabelsFromLabelable": [
                84,
                {
                    "input": [
                        83,
                        "ClearLabelsFromLabelableInput!"
                    ]
                }
            ],
            "cloneProject": [
                86,
                {
                    "input": [
                        85,
                        "CloneProjectInput!"
                    ]
                }
            ],
            "cloneTemplateRepository": [
                88,
                {
                    "input": [
                        87,
                        "CloneTemplateRepositoryInput!"
                    ]
                }
            ],
            "closeIssue": [
                91,
                {
                    "input": [
                        90,
                        "CloseIssueInput!"
                    ]
                }
            ],
            "closePullRequest": [
                93,
                {
                    "input": [
                        92,
                        "ClosePullRequestInput!"
                    ]
                }
            ],
            "convertProjectCardNoteToIssue": [
                125,
                {
                    "input": [
                        124,
                        "ConvertProjectCardNoteToIssueInput!"
                    ]
                }
            ],
            "createBranchProtectionRule": [
                129,
                {
                    "input": [
                        128,
                        "CreateBranchProtectionRuleInput!"
                    ]
                }
            ],
            "createCheckRun": [
                131,
                {
                    "input": [
                        130,
                        "CreateCheckRunInput!"
                    ]
                }
            ],
            "createCheckSuite": [
                133,
                {
                    "input": [
                        132,
                        "CreateCheckSuiteInput!"
                    ]
                }
            ],
            "createContentAttachment": [
                135,
                {
                    "input": [
                        134,
                        "CreateContentAttachmentInput!"
                    ]
                }
            ],
            "createDeployment": [
                137,
                {
                    "input": [
                        136,
                        "CreateDeploymentInput!"
                    ]
                }
            ],
            "createDeploymentStatus": [
                139,
                {
                    "input": [
                        138,
                        "CreateDeploymentStatusInput!"
                    ]
                }
            ],
            "createEnterpriseOrganization": [
                141,
                {
                    "input": [
                        140,
                        "CreateEnterpriseOrganizationInput!"
                    ]
                }
            ],
            "createIpAllowListEntry": [
                143,
                {
                    "input": [
                        142,
                        "CreateIpAllowListEntryInput!"
                    ]
                }
            ],
            "createIssue": [
                145,
                {
                    "input": [
                        144,
                        "CreateIssueInput!"
                    ]
                }
            ],
            "createLabel": [
                147,
                {
                    "input": [
                        146,
                        "CreateLabelInput!"
                    ]
                }
            ],
            "createProject": [
                149,
                {
                    "input": [
                        148,
                        "CreateProjectInput!"
                    ]
                }
            ],
            "createPullRequest": [
                151,
                {
                    "input": [
                        150,
                        "CreatePullRequestInput!"
                    ]
                }
            ],
            "createRef": [
                153,
                {
                    "input": [
                        152,
                        "CreateRefInput!"
                    ]
                }
            ],
            "createRepository": [
                155,
                {
                    "input": [
                        154,
                        "CreateRepositoryInput!"
                    ]
                }
            ],
            "createTeamDiscussion": [
                159,
                {
                    "input": [
                        158,
                        "CreateTeamDiscussionInput!"
                    ]
                }
            ],
            "createTeamDiscussionComment": [
                157,
                {
                    "input": [
                        156,
                        "CreateTeamDiscussionCommentInput!"
                    ]
                }
            ],
            "declineTopicSuggestion": [
                182,
                {
                    "input": [
                        181,
                        "DeclineTopicSuggestionInput!"
                    ]
                }
            ],
            "deleteBranchProtectionRule": [
                186,
                {
                    "input": [
                        185,
                        "DeleteBranchProtectionRuleInput!"
                    ]
                }
            ],
            "deleteDeployment": [
                188,
                {
                    "input": [
                        187,
                        "DeleteDeploymentInput!"
                    ]
                }
            ],
            "deleteIpAllowListEntry": [
                190,
                {
                    "input": [
                        189,
                        "DeleteIpAllowListEntryInput!"
                    ]
                }
            ],
            "deleteIssue": [
                194,
                {
                    "input": [
                        193,
                        "DeleteIssueInput!"
                    ]
                }
            ],
            "deleteIssueComment": [
                192,
                {
                    "input": [
                        191,
                        "DeleteIssueCommentInput!"
                    ]
                }
            ],
            "deleteLabel": [
                196,
                {
                    "input": [
                        195,
                        "DeleteLabelInput!"
                    ]
                }
            ],
            "deletePackageVersion": [
                198,
                {
                    "input": [
                        197,
                        "DeletePackageVersionInput!"
                    ]
                }
            ],
            "deleteProject": [
                204,
                {
                    "input": [
                        203,
                        "DeleteProjectInput!"
                    ]
                }
            ],
            "deleteProjectCard": [
                200,
                {
                    "input": [
                        199,
                        "DeleteProjectCardInput!"
                    ]
                }
            ],
            "deleteProjectColumn": [
                202,
                {
                    "input": [
                        201,
                        "DeleteProjectColumnInput!"
                    ]
                }
            ],
            "deletePullRequestReview": [
                208,
                {
                    "input": [
                        207,
                        "DeletePullRequestReviewInput!"
                    ]
                }
            ],
            "deletePullRequestReviewComment": [
                206,
                {
                    "input": [
                        205,
                        "DeletePullRequestReviewCommentInput!"
                    ]
                }
            ],
            "deleteRef": [
                210,
                {
                    "input": [
                        209,
                        "DeleteRefInput!"
                    ]
                }
            ],
            "deleteTeamDiscussion": [
                214,
                {
                    "input": [
                        213,
                        "DeleteTeamDiscussionInput!"
                    ]
                }
            ],
            "deleteTeamDiscussionComment": [
                212,
                {
                    "input": [
                        211,
                        "DeleteTeamDiscussionCommentInput!"
                    ]
                }
            ],
            "dismissPullRequestReview": [
                240,
                {
                    "input": [
                        239,
                        "DismissPullRequestReviewInput!"
                    ]
                }
            ],
            "followUser": [
                310,
                {
                    "input": [
                        309,
                        "FollowUserInput!"
                    ]
                }
            ],
            "importProject": [
                344,
                {
                    "input": [
                        343,
                        "ImportProjectInput!"
                    ]
                }
            ],
            "inviteEnterpriseAdmin": [
                346,
                {
                    "input": [
                        345,
                        "InviteEnterpriseAdminInput!"
                    ]
                }
            ],
            "linkRepositoryToProject": [
                389,
                {
                    "input": [
                        388,
                        "LinkRepositoryToProjectInput!"
                    ]
                }
            ],
            "lockLockable": [
                391,
                {
                    "input": [
                        390,
                        "LockLockableInput!"
                    ]
                }
            ],
            "markPullRequestReadyForReview": [
                397,
                {
                    "input": [
                        396,
                        "MarkPullRequestReadyForReviewInput!"
                    ]
                }
            ],
            "mergeBranch": [
                409,
                {
                    "input": [
                        408,
                        "MergeBranchInput!"
                    ]
                }
            ],
            "mergePullRequest": [
                411,
                {
                    "input": [
                        410,
                        "MergePullRequestInput!"
                    ]
                }
            ],
            "minimizeComment": [
                425,
                {
                    "input": [
                        424,
                        "MinimizeCommentInput!"
                    ]
                }
            ],
            "moveProjectCard": [
                427,
                {
                    "input": [
                        426,
                        "MoveProjectCardInput!"
                    ]
                }
            ],
            "moveProjectColumn": [
                429,
                {
                    "input": [
                        428,
                        "MoveProjectColumnInput!"
                    ]
                }
            ],
            "pinIssue": [
                523,
                {
                    "input": [
                        522,
                        "PinIssueInput!"
                    ]
                }
            ],
            "regenerateEnterpriseIdentityProviderRecoveryCodes": [
                625,
                {
                    "input": [
                        624,
                        "RegenerateEnterpriseIdentityProviderRecoveryCodesInput!"
                    ]
                }
            ],
            "removeAssigneesFromAssignable": [
                657,
                {
                    "input": [
                        656,
                        "RemoveAssigneesFromAssignableInput!"
                    ]
                }
            ],
            "removeEnterpriseAdmin": [
                659,
                {
                    "input": [
                        658,
                        "RemoveEnterpriseAdminInput!"
                    ]
                }
            ],
            "removeEnterpriseIdentityProvider": [
                661,
                {
                    "input": [
                        660,
                        "RemoveEnterpriseIdentityProviderInput!"
                    ]
                }
            ],
            "removeEnterpriseOrganization": [
                663,
                {
                    "input": [
                        662,
                        "RemoveEnterpriseOrganizationInput!"
                    ]
                }
            ],
            "removeLabelsFromLabelable": [
                665,
                {
                    "input": [
                        664,
                        "RemoveLabelsFromLabelableInput!"
                    ]
                }
            ],
            "removeOutsideCollaborator": [
                667,
                {
                    "input": [
                        666,
                        "RemoveOutsideCollaboratorInput!"
                    ]
                }
            ],
            "removeReaction": [
                669,
                {
                    "input": [
                        668,
                        "RemoveReactionInput!"
                    ]
                }
            ],
            "removeStar": [
                671,
                {
                    "input": [
                        670,
                        "RemoveStarInput!"
                    ]
                }
            ],
            "reopenIssue": [
                676,
                {
                    "input": [
                        675,
                        "ReopenIssueInput!"
                    ]
                }
            ],
            "reopenPullRequest": [
                678,
                {
                    "input": [
                        677,
                        "ReopenPullRequestInput!"
                    ]
                }
            ],
            "requestReviews": [
                738,
                {
                    "input": [
                        737,
                        "RequestReviewsInput!"
                    ]
                }
            ],
            "rerequestCheckSuite": [
                742,
                {
                    "input": [
                        741,
                        "RerequestCheckSuiteInput!"
                    ]
                }
            ],
            "resolveReviewThread": [
                744,
                {
                    "input": [
                        743,
                        "ResolveReviewThreadInput!"
                    ]
                }
            ],
            "setEnterpriseIdentityProvider": [
                787,
                {
                    "input": [
                        786,
                        "SetEnterpriseIdentityProviderInput!"
                    ]
                }
            ],
            "submitPullRequestReview": [
                819,
                {
                    "input": [
                        818,
                        "SubmitPullRequestReviewInput!"
                    ]
                }
            ],
            "transferIssue": [
                870,
                {
                    "input": [
                        869,
                        "TransferIssueInput!"
                    ]
                }
            ],
            "unarchiveRepository": [
                876,
                {
                    "input": [
                        875,
                        "UnarchiveRepositoryInput!"
                    ]
                }
            ],
            "unfollowUser": [
                879,
                {
                    "input": [
                        878,
                        "UnfollowUserInput!"
                    ]
                }
            ],
            "unlinkRepositoryFromProject": [
                884,
                {
                    "input": [
                        883,
                        "UnlinkRepositoryFromProjectInput!"
                    ]
                }
            ],
            "unlockLockable": [
                886,
                {
                    "input": [
                        885,
                        "UnlockLockableInput!"
                    ]
                }
            ],
            "unmarkIssueAsDuplicate": [
                889,
                {
                    "input": [
                        888,
                        "UnmarkIssueAsDuplicateInput!"
                    ]
                }
            ],
            "unminimizeComment": [
                892,
                {
                    "input": [
                        891,
                        "UnminimizeCommentInput!"
                    ]
                }
            ],
            "unpinIssue": [
                894,
                {
                    "input": [
                        893,
                        "UnpinIssueInput!"
                    ]
                }
            ],
            "unresolveReviewThread": [
                897,
                {
                    "input": [
                        896,
                        "UnresolveReviewThreadInput!"
                    ]
                }
            ],
            "updateBranchProtectionRule": [
                902,
                {
                    "input": [
                        901,
                        "UpdateBranchProtectionRuleInput!"
                    ]
                }
            ],
            "updateCheckRun": [
                904,
                {
                    "input": [
                        903,
                        "UpdateCheckRunInput!"
                    ]
                }
            ],
            "updateCheckSuitePreferences": [
                906,
                {
                    "input": [
                        905,
                        "UpdateCheckSuitePreferencesInput!"
                    ]
                }
            ],
            "updateEnterpriseActionExecutionCapabilitySetting": [
                908,
                {
                    "input": [
                        907,
                        "UpdateEnterpriseActionExecutionCapabilitySettingInput!"
                    ]
                }
            ],
            "updateEnterpriseAdministratorRole": [
                910,
                {
                    "input": [
                        909,
                        "UpdateEnterpriseAdministratorRoleInput!"
                    ]
                }
            ],
            "updateEnterpriseAllowPrivateRepositoryForkingSetting": [
                912,
                {
                    "input": [
                        911,
                        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseDefaultRepositoryPermissionSetting": [
                914,
                {
                    "input": [
                        913,
                        "UpdateEnterpriseDefaultRepositoryPermissionSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanChangeRepositoryVisibilitySetting": [
                916,
                {
                    "input": [
                        915,
                        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanCreateRepositoriesSetting": [
                918,
                {
                    "input": [
                        917,
                        "UpdateEnterpriseMembersCanCreateRepositoriesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanDeleteIssuesSetting": [
                920,
                {
                    "input": [
                        919,
                        "UpdateEnterpriseMembersCanDeleteIssuesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanDeleteRepositoriesSetting": [
                922,
                {
                    "input": [
                        921,
                        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanInviteCollaboratorsSetting": [
                924,
                {
                    "input": [
                        923,
                        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanMakePurchasesSetting": [
                926,
                {
                    "input": [
                        925,
                        "UpdateEnterpriseMembersCanMakePurchasesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanUpdateProtectedBranchesSetting": [
                928,
                {
                    "input": [
                        927,
                        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseMembersCanViewDependencyInsightsSetting": [
                930,
                {
                    "input": [
                        929,
                        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseOrganizationProjectsSetting": [
                932,
                {
                    "input": [
                        931,
                        "UpdateEnterpriseOrganizationProjectsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseProfile": [
                934,
                {
                    "input": [
                        933,
                        "UpdateEnterpriseProfileInput!"
                    ]
                }
            ],
            "updateEnterpriseRepositoryProjectsSetting": [
                936,
                {
                    "input": [
                        935,
                        "UpdateEnterpriseRepositoryProjectsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseTeamDiscussionsSetting": [
                938,
                {
                    "input": [
                        937,
                        "UpdateEnterpriseTeamDiscussionsSettingInput!"
                    ]
                }
            ],
            "updateEnterpriseTwoFactorAuthenticationRequiredSetting": [
                940,
                {
                    "input": [
                        939,
                        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput!"
                    ]
                }
            ],
            "updateIpAllowListEnabledSetting": [
                942,
                {
                    "input": [
                        941,
                        "UpdateIpAllowListEnabledSettingInput!"
                    ]
                }
            ],
            "updateIpAllowListEntry": [
                944,
                {
                    "input": [
                        943,
                        "UpdateIpAllowListEntryInput!"
                    ]
                }
            ],
            "updateIssue": [
                948,
                {
                    "input": [
                        947,
                        "UpdateIssueInput!"
                    ]
                }
            ],
            "updateIssueComment": [
                946,
                {
                    "input": [
                        945,
                        "UpdateIssueCommentInput!"
                    ]
                }
            ],
            "updateLabel": [
                950,
                {
                    "input": [
                        949,
                        "UpdateLabelInput!"
                    ]
                }
            ],
            "updateProject": [
                956,
                {
                    "input": [
                        955,
                        "UpdateProjectInput!"
                    ]
                }
            ],
            "updateProjectCard": [
                952,
                {
                    "input": [
                        951,
                        "UpdateProjectCardInput!"
                    ]
                }
            ],
            "updateProjectColumn": [
                954,
                {
                    "input": [
                        953,
                        "UpdateProjectColumnInput!"
                    ]
                }
            ],
            "updatePullRequest": [
                958,
                {
                    "input": [
                        957,
                        "UpdatePullRequestInput!"
                    ]
                }
            ],
            "updatePullRequestReview": [
                962,
                {
                    "input": [
                        961,
                        "UpdatePullRequestReviewInput!"
                    ]
                }
            ],
            "updatePullRequestReviewComment": [
                960,
                {
                    "input": [
                        959,
                        "UpdatePullRequestReviewCommentInput!"
                    ]
                }
            ],
            "updateRef": [
                964,
                {
                    "input": [
                        963,
                        "UpdateRefInput!"
                    ]
                }
            ],
            "updateRefs": [
                966,
                {
                    "input": [
                        965,
                        "UpdateRefsInput!"
                    ]
                }
            ],
            "updateRepository": [
                968,
                {
                    "input": [
                        967,
                        "UpdateRepositoryInput!"
                    ]
                }
            ],
            "updateSubscription": [
                970,
                {
                    "input": [
                        969,
                        "UpdateSubscriptionInput!"
                    ]
                }
            ],
            "updateTeamDiscussion": [
                974,
                {
                    "input": [
                        973,
                        "UpdateTeamDiscussionInput!"
                    ]
                }
            ],
            "updateTeamDiscussionComment": [
                972,
                {
                    "input": [
                        971,
                        "UpdateTeamDiscussionCommentInput!"
                    ]
                }
            ],
            "updateTeamReviewAssignment": [
                976,
                {
                    "input": [
                        975,
                        "UpdateTeamReviewAssignmentInput!"
                    ]
                }
            ],
            "updateTopics": [
                978,
                {
                    "input": [
                        977,
                        "UpdateTopicsInput!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "Node": {
            "id": [
                2
            ],
            "on_AddedToProjectEvent": [
                30
            ],
            "on_App": [
                31
            ],
            "on_AssignedEvent": [
                35
            ],
            "on_AutomaticBaseChangeFailedEvent": [
                41
            ],
            "on_AutomaticBaseChangeSucceededEvent": [
                42
            ],
            "on_BaseRefChangedEvent": [
                43
            ],
            "on_BaseRefForcePushedEvent": [
                44
            ],
            "on_Blob": [
                47
            ],
            "on_Bot": [
                49
            ],
            "on_BranchProtectionRule": [
                50
            ],
            "on_CheckRun": [
                69
            ],
            "on_CheckSuite": [
                78
            ],
            "on_ClosedEvent": [
                94
            ],
            "on_CodeOfConduct": [
                96
            ],
            "on_CommentDeletedEvent": [
                101
            ],
            "on_Commit": [
                102
            ],
            "on_CommitComment": [
                104
            ],
            "on_CommitCommentThread": [
                107
            ],
            "on_ConnectedEvent": [
                114
            ],
            "on_ConvertToDraftEvent": [
                126
            ],
            "on_ConvertedNoteToIssueEvent": [
                127
            ],
            "on_CrossReferencedEvent": [
                178
            ],
            "on_DemilestonedEvent": [
                215
            ],
            "on_DependencyGraphManifest": [
                219
            ],
            "on_DeployKey": [
                222
            ],
            "on_DeployedEvent": [
                225
            ],
            "on_Deployment": [
                226
            ],
            "on_DeploymentEnvironmentChangedEvent": [
                229
            ],
            "on_DeploymentStatus": [
                233
            ],
            "on_DisconnectedEvent": [
                238
            ],
            "on_Enterprise": [
                243
            ],
            "on_EnterpriseAdministratorInvitation": [
                246
            ],
            "on_EnterpriseIdentityProvider": [
                258
            ],
            "on_EnterpriseRepositoryInfo": [
                275
            ],
            "on_EnterpriseServerInstallation": [
                278
            ],
            "on_EnterpriseServerUserAccount": [
                283
            ],
            "on_EnterpriseServerUserAccountEmail": [
                286
            ],
            "on_EnterpriseServerUserAccountsUpload": [
                293
            ],
            "on_EnterpriseUserAccount": [
                299
            ],
            "on_ExternalIdentity": [
                304
            ],
            "on_Gist": [
                316
            ],
            "on_GistComment": [
                317
            ],
            "on_HeadRefDeletedEvent": [
                337
            ],
            "on_HeadRefForcePushedEvent": [
                338
            ],
            "on_HeadRefRestoredEvent": [
                339
            ],
            "on_IpAllowListEntry": [
                348
            ],
            "on_Issue": [
                354
            ],
            "on_IssueComment": [
                355
            ],
            "on_Label": [
                374
            ],
            "on_LabeledEvent": [
                380
            ],
            "on_Language": [
                381
            ],
            "on_License": [
                386
            ],
            "on_LockedEvent": [
                394
            ],
            "on_Mannequin": [
                395
            ],
            "on_MarkedAsDuplicateEvent": [
                398
            ],
            "on_MarketplaceCategory": [
                399
            ],
            "on_MarketplaceListing": [
                400
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                404
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                405
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                406
            ],
            "on_MentionedEvent": [
                407
            ],
            "on_MergedEvent": [
                414
            ],
            "on_Milestone": [
                415
            ],
            "on_MilestonedEvent": [
                422
            ],
            "on_MovedColumnsInProjectEvent": [
                430
            ],
            "on_OauthApplicationCreateAuditEntry": [
                434
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                438
            ],
            "on_OrgAddMemberAuditEntry": [
                439
            ],
            "on_OrgBlockUserAuditEntry": [
                441
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                442
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                443
            ],
            "on_OrgCreateAuditEntry": [
                444
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                446
            ],
            "on_OrgDisableSamlAuditEntry": [
                447
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                448
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                449
            ],
            "on_OrgEnableSamlAuditEntry": [
                450
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                451
            ],
            "on_OrgInviteMemberAuditEntry": [
                452
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                453
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                454
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                455
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                456
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                457
            ],
            "on_OrgRemoveMemberAuditEntry": [
                459
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                462
            ],
            "on_OrgRestoreMemberAuditEntry": [
                465
            ],
            "on_OrgUnblockUserAuditEntry": [
                470
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                471
            ],
            "on_OrgUpdateMemberAuditEntry": [
                473
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                475
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                477
            ],
            "on_Organization": [
                478
            ],
            "on_OrganizationIdentityProvider": [
                485
            ],
            "on_OrganizationInvitation": [
                486
            ],
            "on_Package": [
                499
            ],
            "on_PackageFile": [
                502
            ],
            "on_PackageTag": [
                511
            ],
            "on_PackageVersion": [
                513
            ],
            "on_PinnedEvent": [
                528
            ],
            "on_PinnedIssue": [
                529
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                533
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                534
            ],
            "on_Project": [
                537
            ],
            "on_ProjectCard": [
                538
            ],
            "on_ProjectColumn": [
                545
            ],
            "on_PublicKey": [
                557
            ],
            "on_PullRequest": [
                560
            ],
            "on_PullRequestCommit": [
                564
            ],
            "on_PullRequestCommitCommentThread": [
                565
            ],
            "on_PullRequestReview": [
                574
            ],
            "on_PullRequestReviewComment": [
                575
            ],
            "on_PullRequestReviewThread": [
                585
            ],
            "on_Push": [
                598
            ],
            "on_PushAllowance": [
                599
            ],
            "on_Reaction": [
                608
            ],
            "on_ReadyForReviewEvent": [
                615
            ],
            "on_Ref": [
                616
            ],
            "on_ReferencedEvent": [
                622
            ],
            "on_RegistryPackage": [
                626
            ],
            "on_RegistryPackageDependency": [
                628
            ],
            "on_RegistryPackageFile": [
                633
            ],
            "on_RegistryPackageTag": [
                640
            ],
            "on_RegistryPackageVersion": [
                644
            ],
            "on_Release": [
                648
            ],
            "on_ReleaseAsset": [
                649
            ],
            "on_RemovedFromProjectEvent": [
                672
            ],
            "on_RenamedTitleEvent": [
                673
            ],
            "on_ReopenedEvent": [
                679
            ],
            "on_RepoAccessAuditEntry": [
                680
            ],
            "on_RepoAddMemberAuditEntry": [
                682
            ],
            "on_RepoAddTopicAuditEntry": [
                684
            ],
            "on_RepoArchivedAuditEntry": [
                685
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                687
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                689
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                690
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                691
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                692
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                693
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                694
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                695
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                696
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                697
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                698
            ],
            "on_RepoCreateAuditEntry": [
                699
            ],
            "on_RepoDestroyAuditEntry": [
                701
            ],
            "on_RepoRemoveMemberAuditEntry": [
                703
            ],
            "on_RepoRemoveTopicAuditEntry": [
                705
            ],
            "on_Repository": [
                707
            ],
            "on_RepositoryInvitation": [
                716
            ],
            "on_RepositoryTopic": [
                728
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                732
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                733
            ],
            "on_RepositoryVulnerabilityAlert": [
                734
            ],
            "on_ReviewDismissalAllowance": [
                746
            ],
            "on_ReviewDismissedEvent": [
                750
            ],
            "on_ReviewRequest": [
                751
            ],
            "on_ReviewRequestRemovedEvent": [
                754
            ],
            "on_ReviewRequestedEvent": [
                755
            ],
            "on_SavedReply": [
                759
            ],
            "on_SecurityAdvisory": [
                768
            ],
            "on_SponsorsListing": [
                791
            ],
            "on_SponsorsTier": [
                792
            ],
            "on_Sponsorship": [
                798
            ],
            "on_Status": [
                811
            ],
            "on_StatusCheckRollup": [
                812
            ],
            "on_StatusContext": [
                816
            ],
            "on_SubscribedEvent": [
                824
            ],
            "on_Tag": [
                827
            ],
            "on_Team": [
                828
            ],
            "on_TeamAddMemberAuditEntry": [
                829
            ],
            "on_TeamAddRepositoryAuditEntry": [
                830
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                832
            ],
            "on_TeamDiscussion": [
                834
            ],
            "on_TeamDiscussionComment": [
                835
            ],
            "on_TeamRemoveMemberAuditEntry": [
                854
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                855
            ],
            "on_Topic": [
                864
            ],
            "on_TransferredEvent": [
                871
            ],
            "on_Tree": [
                872
            ],
            "on_UnassignedEvent": [
                877
            ],
            "on_UnlabeledEvent": [
                882
            ],
            "on_UnlockedEvent": [
                887
            ],
            "on_UnmarkedAsDuplicateEvent": [
                890
            ],
            "on_UnpinnedEvent": [
                895
            ],
            "on_UnsubscribedEvent": [
                898
            ],
            "on_User": [
                979
            ],
            "on_UserBlockedEvent": [
                981
            ],
            "on_UserContentEdit": [
                983
            ],
            "on_UserStatus": [
                987
            ],
            "__typename": [
                1
            ]
        },
        "OauthApplicationAuditEntryData": {
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                874
            ],
            "oauthApplicationUrl": [
                874
            ],
            "on_OauthApplicationCreateAuditEntry": [
                434
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                454
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                455
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                456
            ],
            "__typename": [
                1
            ]
        },
        "OauthApplicationCreateAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "applicationUrl": [
                874
            ],
            "callbackUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                874
            ],
            "oauthApplicationUrl": [
                874
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "rateLimit": [
                8
            ],
            "state": [
                435
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OauthApplicationCreateAuditEntryState": {},
        "OperationType": {},
        "OrderDirection": {},
        "OrgAddBillingManagerAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "invitationEmail": [
                1
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgAddMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "permission": [
                440
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgAddMemberAuditEntryPermission": {},
        "OrgBlockUserAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "blockedUser": [
                979
            ],
            "blockedUserName": [
                1
            ],
            "blockedUserResourcePath": [
                874
            ],
            "blockedUserUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgConfigDisableCollaboratorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgConfigEnableCollaboratorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgCreateAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "billingPlan": [
                445
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgCreateAuditEntryBillingPlan": {},
        "OrgDisableOauthAppRestrictionsAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgDisableSamlAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "digestMethodUrl": [
                874
            ],
            "id": [
                2
            ],
            "issuerUrl": [
                874
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "signatureMethodUrl": [
                874
            ],
            "singleSignOnUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgDisableTwoFactorRequirementAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgEnableOauthAppRestrictionsAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgEnableSamlAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "digestMethodUrl": [
                874
            ],
            "id": [
                2
            ],
            "issuerUrl": [
                874
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "signatureMethodUrl": [
                874
            ],
            "singleSignOnUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgEnableTwoFactorRequirementAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgInviteMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationInvitation": [
                486
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgInviteToBusinessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "enterpriseResourcePath": [
                874
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                874
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgOauthAppAccessApprovedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                874
            ],
            "oauthApplicationUrl": [
                874
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgOauthAppAccessDeniedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                874
            ],
            "oauthApplicationUrl": [
                874
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgOauthAppAccessRequestedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "oauthApplicationName": [
                1
            ],
            "oauthApplicationResourcePath": [
                874
            ],
            "oauthApplicationUrl": [
                874
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgRemoveBillingManagerAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "reason": [
                458
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgRemoveBillingManagerAuditEntryReason": {},
        "OrgRemoveMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "membershipTypes": [
                460
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "reason": [
                461
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgRemoveMemberAuditEntryMembershipType": {},
        "OrgRemoveMemberAuditEntryReason": {},
        "OrgRemoveOutsideCollaboratorAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "membershipTypes": [
                463
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "reason": [
                464
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgRemoveOutsideCollaboratorAuditEntryMembershipType": {},
        "OrgRemoveOutsideCollaboratorAuditEntryReason": {},
        "OrgRestoreMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "restoredCustomEmailRoutingsCount": [
                8
            ],
            "restoredIssueAssignmentsCount": [
                8
            ],
            "restoredMemberships": [
                466
            ],
            "restoredMembershipsCount": [
                8
            ],
            "restoredRepositoriesCount": [
                8
            ],
            "restoredRepositoryStarsCount": [
                8
            ],
            "restoredRepositoryWatchesCount": [
                8
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgRestoreMemberAuditEntryMembership": {
            "on_OrgRestoreMemberMembershipOrganizationAuditEntryData": [
                467
            ],
            "on_OrgRestoreMemberMembershipRepositoryAuditEntryData": [
                468
            ],
            "on_OrgRestoreMemberMembershipTeamAuditEntryData": [
                469
            ],
            "__typename": [
                1
            ]
        },
        "OrgRestoreMemberMembershipOrganizationAuditEntryData": {
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgRestoreMemberMembershipRepositoryAuditEntryData": {
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgRestoreMemberMembershipTeamAuditEntryData": {
            "team": [
                828
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                874
            ],
            "teamUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgUnblockUserAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "blockedUser": [
                979
            ],
            "blockedUserName": [
                1
            ],
            "blockedUserResourcePath": [
                874
            ],
            "blockedUserUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgUpdateDefaultRepositoryPermissionAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "permission": [
                472
            ],
            "permissionWas": [
                472
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgUpdateDefaultRepositoryPermissionAuditEntryPermission": {},
        "OrgUpdateMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "permission": [
                474
            ],
            "permissionWas": [
                474
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrgUpdateMemberAuditEntryPermission": {},
        "OrgUpdateMemberRepositoryCreationPermissionAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "canCreateRepositories": [
                48
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "visibility": [
                476
            ],
            "__typename": [
                1
            ]
        },
        "OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility": {},
        "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "canInviteOutsideCollaboratorsToRepositories": [
                48
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "Organization": {
            "anyPinnableItems": [
                48,
                {
                    "type": [
                        527
                    ]
                }
            ],
            "auditLog": [
                480,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        39
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "avatarUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                1
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "ipAllowListEnabledSetting": [
                347
            ],
            "ipAllowListEntries": [
                349,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        351
                    ]
                }
            ],
            "isVerified": [
                48
            ],
            "itemShowcase": [
                535
            ],
            "location": [
                1
            ],
            "login": [
                1
            ],
            "memberStatuses": [
                988,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        990
                    ]
                }
            ],
            "membersWithRole": [
                491,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "name": [
                1
            ],
            "newTeamResourcePath": [
                874
            ],
            "newTeamUrl": [
                874
            ],
            "organizationBillingEmail": [
                1
            ],
            "packages": [
                500,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "orderBy": [
                        507
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "pendingMembers": [
                982,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "pinnableItems": [
                525,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "types": [
                        527,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItems": [
                525,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "types": [
                        527,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItemsRemaining": [
                8
            ],
            "project": [
                537,
                {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                550,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        552
                    ],
                    "search": [
                        1
                    ],
                    "states": [
                        555,
                        "[ProjectState!]"
                    ]
                }
            ],
            "projectsResourcePath": [
                874
            ],
            "projectsUrl": [
                874
            ],
            "registryPackages": [
                627,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "name": [
                        1
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "packageType": [
                        643
                    ],
                    "publicOnly": [
                        48
                    ],
                    "registryPackageType": [
                        1
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "registryPackagesForQuery": [
                627,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "packageType": [
                        643
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "repositories": [
                712,
                {
                    "affiliations": [
                        708,
                        "[RepositoryAffiliation]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "isFork": [
                        48
                    ],
                    "isLocked": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        723
                    ],
                    "ownerAffiliations": [
                        708,
                        "[RepositoryAffiliation]"
                    ],
                    "privacy": [
                        727
                    ]
                }
            ],
            "repository": [
                707,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "requiresTwoFactorAuthentication": [
                48
            ],
            "resourcePath": [
                874
            ],
            "samlIdentityProvider": [
                485
            ],
            "sponsorsListing": [
                791
            ],
            "sponsorshipsAsMaintainer": [
                799,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "includePrivate": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        801
                    ]
                }
            ],
            "sponsorshipsAsSponsor": [
                799,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        801
                    ]
                }
            ],
            "team": [
                828,
                {
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "teams": [
                833,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "ldapMapped": [
                        48
                    ],
                    "orderBy": [
                        851
                    ],
                    "privacy": [
                        853
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        861
                    ],
                    "rootTeamsOnly": [
                        48
                    ],
                    "userLogins": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "teamsResourcePath": [
                874
            ],
            "teamsUrl": [
                874
            ],
            "twitterUsername": [
                1
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "viewerCanAdminister": [
                48
            ],
            "viewerCanChangePinnedItems": [
                48
            ],
            "viewerCanCreateProjects": [
                48
            ],
            "viewerCanCreateRepositories": [
                48
            ],
            "viewerCanCreateTeams": [
                48
            ],
            "viewerIsAMember": [
                48
            ],
            "websiteUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAuditEntry": {
            "on_MembersCanDeleteReposClearAuditEntry": [
                404
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                405
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                406
            ],
            "on_OauthApplicationCreateAuditEntry": [
                434
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                438
            ],
            "on_OrgAddMemberAuditEntry": [
                439
            ],
            "on_OrgBlockUserAuditEntry": [
                441
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                442
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                443
            ],
            "on_OrgCreateAuditEntry": [
                444
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                446
            ],
            "on_OrgDisableSamlAuditEntry": [
                447
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                448
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                449
            ],
            "on_OrgEnableSamlAuditEntry": [
                450
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                451
            ],
            "on_OrgInviteMemberAuditEntry": [
                452
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                453
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                454
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                455
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                456
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                457
            ],
            "on_OrgRemoveMemberAuditEntry": [
                459
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                462
            ],
            "on_OrgRestoreMemberAuditEntry": [
                465
            ],
            "on_OrgUnblockUserAuditEntry": [
                470
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                471
            ],
            "on_OrgUpdateMemberAuditEntry": [
                473
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                475
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                477
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                533
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                534
            ],
            "on_RepoAccessAuditEntry": [
                680
            ],
            "on_RepoAddMemberAuditEntry": [
                682
            ],
            "on_RepoAddTopicAuditEntry": [
                684
            ],
            "on_RepoArchivedAuditEntry": [
                685
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                687
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                689
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                690
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                691
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                692
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                693
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                694
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                695
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                696
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                697
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                698
            ],
            "on_RepoCreateAuditEntry": [
                699
            ],
            "on_RepoDestroyAuditEntry": [
                701
            ],
            "on_RepoRemoveMemberAuditEntry": [
                703
            ],
            "on_RepoRemoveTopicAuditEntry": [
                705
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                732
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                733
            ],
            "on_TeamAddMemberAuditEntry": [
                829
            ],
            "on_TeamAddRepositoryAuditEntry": [
                830
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                832
            ],
            "on_TeamRemoveMemberAuditEntry": [
                854
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                855
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAuditEntryConnection": {
            "edges": [
                482
            ],
            "nodes": [
                479
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAuditEntryData": {
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "on_MembersCanDeleteReposClearAuditEntry": [
                404
            ],
            "on_MembersCanDeleteReposDisableAuditEntry": [
                405
            ],
            "on_MembersCanDeleteReposEnableAuditEntry": [
                406
            ],
            "on_OauthApplicationCreateAuditEntry": [
                434
            ],
            "on_OrgAddBillingManagerAuditEntry": [
                438
            ],
            "on_OrgAddMemberAuditEntry": [
                439
            ],
            "on_OrgBlockUserAuditEntry": [
                441
            ],
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": [
                442
            ],
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": [
                443
            ],
            "on_OrgCreateAuditEntry": [
                444
            ],
            "on_OrgDisableOauthAppRestrictionsAuditEntry": [
                446
            ],
            "on_OrgDisableSamlAuditEntry": [
                447
            ],
            "on_OrgDisableTwoFactorRequirementAuditEntry": [
                448
            ],
            "on_OrgEnableOauthAppRestrictionsAuditEntry": [
                449
            ],
            "on_OrgEnableSamlAuditEntry": [
                450
            ],
            "on_OrgEnableTwoFactorRequirementAuditEntry": [
                451
            ],
            "on_OrgInviteMemberAuditEntry": [
                452
            ],
            "on_OrgInviteToBusinessAuditEntry": [
                453
            ],
            "on_OrgOauthAppAccessApprovedAuditEntry": [
                454
            ],
            "on_OrgOauthAppAccessDeniedAuditEntry": [
                455
            ],
            "on_OrgOauthAppAccessRequestedAuditEntry": [
                456
            ],
            "on_OrgRemoveBillingManagerAuditEntry": [
                457
            ],
            "on_OrgRemoveMemberAuditEntry": [
                459
            ],
            "on_OrgRemoveOutsideCollaboratorAuditEntry": [
                462
            ],
            "on_OrgRestoreMemberAuditEntry": [
                465
            ],
            "on_OrgRestoreMemberMembershipOrganizationAuditEntryData": [
                467
            ],
            "on_OrgUnblockUserAuditEntry": [
                470
            ],
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": [
                471
            ],
            "on_OrgUpdateMemberAuditEntry": [
                473
            ],
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": [
                475
            ],
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": [
                477
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                533
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                534
            ],
            "on_RepoAccessAuditEntry": [
                680
            ],
            "on_RepoAddMemberAuditEntry": [
                682
            ],
            "on_RepoAddTopicAuditEntry": [
                684
            ],
            "on_RepoArchivedAuditEntry": [
                685
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                687
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                689
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                690
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                691
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                692
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                693
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                694
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                695
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                696
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                697
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                698
            ],
            "on_RepoCreateAuditEntry": [
                699
            ],
            "on_RepoDestroyAuditEntry": [
                701
            ],
            "on_RepoRemoveMemberAuditEntry": [
                703
            ],
            "on_RepoRemoveTopicAuditEntry": [
                705
            ],
            "on_RepositoryVisibilityChangeDisableAuditEntry": [
                732
            ],
            "on_RepositoryVisibilityChangeEnableAuditEntry": [
                733
            ],
            "on_TeamAddMemberAuditEntry": [
                829
            ],
            "on_TeamAddRepositoryAuditEntry": [
                830
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                832
            ],
            "on_TeamRemoveMemberAuditEntry": [
                854
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                855
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationAuditEntryEdge": {
            "cursor": [
                1
            ],
            "node": [
                479
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationConnection": {
            "edges": [
                484
            ],
            "nodes": [
                478
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationEdge": {
            "cursor": [
                1
            ],
            "node": [
                478
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationIdentityProvider": {
            "digestMethod": [
                874
            ],
            "externalIdentities": [
                305,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "id": [
                2
            ],
            "idpCertificate": [
                993
            ],
            "issuer": [
                1
            ],
            "organization": [
                478
            ],
            "signatureMethod": [
                874
            ],
            "ssoUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationInvitation": {
            "createdAt": [
                180
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "invitationType": [
                490
            ],
            "invitee": [
                979
            ],
            "inviter": [
                979
            ],
            "organization": [
                478
            ],
            "role": [
                489
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationInvitationConnection": {
            "edges": [
                488
            ],
            "nodes": [
                486
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationInvitationEdge": {
            "cursor": [
                1
            ],
            "node": [
                486
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationInvitationRole": {},
        "OrganizationInvitationType": {},
        "OrganizationMemberConnection": {
            "edges": [
                492
            ],
            "nodes": [
                979
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationMemberEdge": {
            "cursor": [
                1
            ],
            "hasTwoFactorEnabled": [
                48
            ],
            "node": [
                979
            ],
            "role": [
                493
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationMemberRole": {},
        "OrganizationMembersCanCreateRepositoriesSettingValue": {},
        "OrganizationOrder": {
            "direction": [
                437
            ],
            "field": [
                496
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationOrderField": {},
        "OrganizationTeamsHovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "relevantTeams": [
                833,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "teamsResourcePath": [
                874
            ],
            "teamsUrl": [
                874
            ],
            "totalTeamCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "OrganizationsHovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "relevantOrganizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "totalOrganizationCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "Package": {
            "id": [
                2
            ],
            "latestVersion": [
                513
            ],
            "name": [
                1
            ],
            "packageType": [
                512
            ],
            "repository": [
                707
            ],
            "statistics": [
                510
            ],
            "version": [
                513,
                {
                    "version": [
                        1,
                        "String!"
                    ]
                }
            ],
            "versions": [
                514,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        516
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "PackageConnection": {
            "edges": [
                501
            ],
            "nodes": [
                499
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PackageEdge": {
            "cursor": [
                1
            ],
            "node": [
                499
            ],
            "__typename": [
                1
            ]
        },
        "PackageFile": {
            "id": [
                2
            ],
            "md5": [
                1
            ],
            "name": [
                1
            ],
            "packageVersion": [
                513
            ],
            "sha1": [
                1
            ],
            "sha256": [
                1
            ],
            "size": [
                8
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "PackageFileConnection": {
            "edges": [
                504
            ],
            "nodes": [
                502
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PackageFileEdge": {
            "cursor": [
                1
            ],
            "node": [
                502
            ],
            "__typename": [
                1
            ]
        },
        "PackageFileOrder": {
            "direction": [
                437
            ],
            "field": [
                506
            ],
            "__typename": [
                1
            ]
        },
        "PackageFileOrderField": {},
        "PackageOrder": {
            "direction": [
                437
            ],
            "field": [
                508
            ],
            "__typename": [
                1
            ]
        },
        "PackageOrderField": {},
        "PackageOwner": {
            "id": [
                2
            ],
            "packages": [
                500,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "orderBy": [
                        507
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "on_Organization": [
                478
            ],
            "on_Repository": [
                707
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "PackageStatistics": {
            "downloadsTotalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PackageTag": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "version": [
                513
            ],
            "__typename": [
                1
            ]
        },
        "PackageType": {},
        "PackageVersion": {
            "files": [
                503,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        505
                    ]
                }
            ],
            "id": [
                2
            ],
            "package": [
                499
            ],
            "platform": [
                1
            ],
            "preRelease": [
                48
            ],
            "readme": [
                1
            ],
            "release": [
                648
            ],
            "statistics": [
                518
            ],
            "summary": [
                1
            ],
            "version": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PackageVersionConnection": {
            "edges": [
                515
            ],
            "nodes": [
                513
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PackageVersionEdge": {
            "cursor": [
                1
            ],
            "node": [
                513
            ],
            "__typename": [
                1
            ]
        },
        "PackageVersionOrder": {
            "direction": [
                437
            ],
            "field": [
                517
            ],
            "__typename": [
                1
            ]
        },
        "PackageVersionOrderField": {},
        "PackageVersionStatistics": {
            "downloadsTotalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PageInfo": {
            "endCursor": [
                1
            ],
            "hasNextPage": [
                48
            ],
            "hasPreviousPage": [
                48
            ],
            "startCursor": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PermissionGranter": {
            "on_Organization": [
                478
            ],
            "on_Repository": [
                707
            ],
            "on_Team": [
                828
            ],
            "__typename": [
                1
            ]
        },
        "PermissionSource": {
            "organization": [
                478
            ],
            "permission": [
                183
            ],
            "source": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "PinIssueInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "PinIssuePayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                354
            ],
            "__typename": [
                1
            ]
        },
        "PinnableItem": {
            "on_Gist": [
                316
            ],
            "on_Repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "PinnableItemConnection": {
            "edges": [
                526
            ],
            "nodes": [
                524
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PinnableItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                524
            ],
            "__typename": [
                1
            ]
        },
        "PinnableItemType": {},
        "PinnedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "issue": [
                354
            ],
            "__typename": [
                1
            ]
        },
        "PinnedIssue": {
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "issue": [
                354
            ],
            "pinnedBy": [
                7
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "PinnedIssueConnection": {
            "edges": [
                531
            ],
            "nodes": [
                529
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PinnedIssueEdge": {
            "cursor": [
                1
            ],
            "node": [
                529
            ],
            "__typename": [
                1
            ]
        },
        "PreciseDateTime": {},
        "PrivateRepositoryForkingDisableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "enterpriseResourcePath": [
                874
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                874
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "PrivateRepositoryForkingEnableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "enterpriseResourcePath": [
                874
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                874
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "ProfileItemShowcase": {
            "hasPinnedItems": [
                48
            ],
            "items": [
                525,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "ProfileOwner": {
            "anyPinnableItems": [
                48,
                {
                    "type": [
                        527
                    ]
                }
            ],
            "email": [
                1
            ],
            "id": [
                2
            ],
            "itemShowcase": [
                535
            ],
            "location": [
                1
            ],
            "login": [
                1
            ],
            "name": [
                1
            ],
            "pinnableItems": [
                525,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "types": [
                        527,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItems": [
                525,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "types": [
                        527,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItemsRemaining": [
                8
            ],
            "viewerCanChangePinnedItems": [
                48
            ],
            "websiteUrl": [
                874
            ],
            "on_Organization": [
                478
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "Project": {
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "closed": [
                48
            ],
            "closedAt": [
                180
            ],
            "columns": [
                546,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "createdAt": [
                180
            ],
            "creator": [
                7
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "number": [
                8
            ],
            "owner": [
                554
            ],
            "pendingCards": [
                540,
                {
                    "after": [
                        1
                    ],
                    "archivedStates": [
                        539,
                        "[ProjectCardArchivedState]"
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "resourcePath": [
                874
            ],
            "state": [
                555
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "viewerCanUpdate": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCard": {
            "column": [
                545
            ],
            "content": [
                543
            ],
            "createdAt": [
                180
            ],
            "creator": [
                7
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "isArchived": [
                48
            ],
            "note": [
                1
            ],
            "project": [
                537
            ],
            "resourcePath": [
                874
            ],
            "state": [
                544
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCardArchivedState": {},
        "ProjectCardConnection": {
            "edges": [
                541
            ],
            "nodes": [
                538
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCardEdge": {
            "cursor": [
                1
            ],
            "node": [
                538
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCardImport": {
            "number": [
                8
            ],
            "repository": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCardItem": {
            "on_Issue": [
                354
            ],
            "on_PullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "ProjectCardState": {},
        "ProjectColumn": {
            "cards": [
                540,
                {
                    "after": [
                        1
                    ],
                    "archivedStates": [
                        539,
                        "[ProjectCardArchivedState]"
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "project": [
                537
            ],
            "purpose": [
                549
            ],
            "resourcePath": [
                874
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "ProjectColumnConnection": {
            "edges": [
                547
            ],
            "nodes": [
                545
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ProjectColumnEdge": {
            "cursor": [
                1
            ],
            "node": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "ProjectColumnImport": {
            "columnName": [
                1
            ],
            "issues": [
                542
            ],
            "position": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ProjectColumnPurpose": {},
        "ProjectConnection": {
            "edges": [
                551
            ],
            "nodes": [
                537
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ProjectEdge": {
            "cursor": [
                1
            ],
            "node": [
                537
            ],
            "__typename": [
                1
            ]
        },
        "ProjectOrder": {
            "direction": [
                437
            ],
            "field": [
                553
            ],
            "__typename": [
                1
            ]
        },
        "ProjectOrderField": {},
        "ProjectOwner": {
            "id": [
                2
            ],
            "project": [
                537,
                {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                550,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        552
                    ],
                    "search": [
                        1
                    ],
                    "states": [
                        555,
                        "[ProjectState!]"
                    ]
                }
            ],
            "projectsResourcePath": [
                874
            ],
            "projectsUrl": [
                874
            ],
            "viewerCanCreateProjects": [
                48
            ],
            "on_Organization": [
                478
            ],
            "on_Repository": [
                707
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "ProjectState": {},
        "ProjectTemplate": {},
        "PublicKey": {
            "accessedAt": [
                180
            ],
            "createdAt": [
                180
            ],
            "fingerprint": [
                1
            ],
            "id": [
                2
            ],
            "isReadOnly": [
                48
            ],
            "key": [
                1
            ],
            "updatedAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "PublicKeyConnection": {
            "edges": [
                559
            ],
            "nodes": [
                557
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PublicKeyEdge": {
            "cursor": [
                1
            ],
            "node": [
                557
            ],
            "__typename": [
                1
            ]
        },
        "PullRequest": {
            "activeLockReason": [
                392
            ],
            "additions": [
                8
            ],
            "assignees": [
                982,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "author": [
                7
            ],
            "authorAssociation": [
                99
            ],
            "baseRef": [
                616
            ],
            "baseRefName": [
                1
            ],
            "baseRefOid": [
                329
            ],
            "baseRepository": [
                707
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "bodyText": [
                1
            ],
            "canBeRebased": [
                48
            ],
            "changedFiles": [
                8
            ],
            "checksResourcePath": [
                874
            ],
            "checksUrl": [
                874
            ],
            "closed": [
                48
            ],
            "closedAt": [
                180
            ],
            "comments": [
                356,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "commits": [
                566,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "createdAt": [
                180
            ],
            "createdViaEmail": [
                48
            ],
            "databaseId": [
                8
            ],
            "deletions": [
                8
            ],
            "editor": [
                7
            ],
            "files": [
                562,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "headRef": [
                616
            ],
            "headRefName": [
                1
            ],
            "headRefOid": [
                329
            ],
            "headRepository": [
                707
            ],
            "headRepositoryOwner": [
                725
            ],
            "hovercard": [
                340,
                {
                    "includeNotificationContexts": [
                        48
                    ]
                }
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                48
            ],
            "isCrossRepository": [
                48
            ],
            "isDraft": [
                48
            ],
            "labels": [
                375,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        377
                    ]
                }
            ],
            "lastEditedAt": [
                180
            ],
            "locked": [
                48
            ],
            "maintainerCanModify": [
                48
            ],
            "mergeCommit": [
                102
            ],
            "mergeStateStatus": [
                412
            ],
            "mergeable": [
                413
            ],
            "merged": [
                48
            ],
            "mergedAt": [
                180
            ],
            "mergedBy": [
                7
            ],
            "milestone": [
                415
            ],
            "number": [
                8
            ],
            "participants": [
                982,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "permalink": [
                874
            ],
            "potentialMergeCommit": [
                102
            ],
            "projectCards": [
                540,
                {
                    "after": [
                        1
                    ],
                    "archivedStates": [
                        539,
                        "[ProjectCardArchivedState]"
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "publishedAt": [
                180
            ],
            "reactionGroups": [
                612
            ],
            "reactions": [
                609,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        610
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        613
                    ]
                }
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "revertResourcePath": [
                874
            ],
            "revertUrl": [
                874
            ],
            "reviewDecision": [
                581
            ],
            "reviewRequests": [
                752,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "reviewThreads": [
                586,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "reviews": [
                579,
                {
                    "after": [
                        1
                    ],
                    "author": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "states": [
                        584,
                        "[PullRequestReviewState!]"
                    ]
                }
            ],
            "state": [
                589
            ],
            "suggestedReviewers": [
                826
            ],
            "timeline": [
                590,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "since": [
                        180
                    ]
                }
            ],
            "timelineItems": [
                594,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "itemTypes": [
                        596,
                        "[PullRequestTimelineItemsItemType!]"
                    ],
                    "last": [
                        8
                    ],
                    "since": [
                        180
                    ],
                    "skip": [
                        8
                    ]
                }
            ],
            "title": [
                1
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "userContentEdits": [
                984,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerCanApplySuggestion": [
                48
            ],
            "viewerCanReact": [
                48
            ],
            "viewerCanSubscribe": [
                48
            ],
            "viewerCanUpdate": [
                48
            ],
            "viewerCannotUpdateReasons": [
                100
            ],
            "viewerDidAuthor": [
                48
            ],
            "viewerSubscription": [
                825
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestChangedFile": {
            "additions": [
                8
            ],
            "deletions": [
                8
            ],
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestChangedFileConnection": {
            "edges": [
                563
            ],
            "nodes": [
                561
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestChangedFileEdge": {
            "cursor": [
                1
            ],
            "node": [
                561
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestCommit": {
            "commit": [
                102
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestCommitCommentThread": {
            "comments": [
                105,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "commit": [
                102
            ],
            "id": [
                2
            ],
            "path": [
                1
            ],
            "position": [
                8
            ],
            "pullRequest": [
                560
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestCommitConnection": {
            "edges": [
                567
            ],
            "nodes": [
                564
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestCommitEdge": {
            "cursor": [
                1
            ],
            "node": [
                564
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestConnection": {
            "edges": [
                570
            ],
            "nodes": [
                560
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestContributionsByRepository": {
            "contributions": [
                168,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        122
                    ]
                }
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestEdge": {
            "cursor": [
                1
            ],
            "node": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestMergeMethod": {},
        "PullRequestOrder": {
            "direction": [
                437
            ],
            "field": [
                573
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestOrderField": {},
        "PullRequestReview": {
            "author": [
                7
            ],
            "authorAssociation": [
                99
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "bodyText": [
                1
            ],
            "comments": [
                576,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "commit": [
                102
            ],
            "createdAt": [
                180
            ],
            "createdViaEmail": [
                48
            ],
            "databaseId": [
                8
            ],
            "editor": [
                7
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                48
            ],
            "lastEditedAt": [
                180
            ],
            "onBehalfOf": [
                833,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "publishedAt": [
                180
            ],
            "pullRequest": [
                560
            ],
            "reactionGroups": [
                612
            ],
            "reactions": [
                609,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        610
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        613
                    ]
                }
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "state": [
                584
            ],
            "submittedAt": [
                180
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "userContentEdits": [
                984,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerCanDelete": [
                48
            ],
            "viewerCanReact": [
                48
            ],
            "viewerCanUpdate": [
                48
            ],
            "viewerCannotUpdateReasons": [
                100
            ],
            "viewerDidAuthor": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewComment": {
            "author": [
                7
            ],
            "authorAssociation": [
                99
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "bodyText": [
                1
            ],
            "commit": [
                102
            ],
            "createdAt": [
                180
            ],
            "createdViaEmail": [
                48
            ],
            "databaseId": [
                8
            ],
            "diffHunk": [
                1
            ],
            "draftedAt": [
                180
            ],
            "editor": [
                7
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                48
            ],
            "isMinimized": [
                48
            ],
            "lastEditedAt": [
                180
            ],
            "minimizedReason": [
                1
            ],
            "originalCommit": [
                102
            ],
            "originalPosition": [
                8
            ],
            "outdated": [
                48
            ],
            "path": [
                1
            ],
            "position": [
                8
            ],
            "publishedAt": [
                180
            ],
            "pullRequest": [
                560
            ],
            "pullRequestReview": [
                574
            ],
            "reactionGroups": [
                612
            ],
            "reactions": [
                609,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        610
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        613
                    ]
                }
            ],
            "replyTo": [
                575
            ],
            "repository": [
                707
            ],
            "resourcePath": [
                874
            ],
            "state": [
                578
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "userContentEdits": [
                984,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerCanDelete": [
                48
            ],
            "viewerCanMinimize": [
                48
            ],
            "viewerCanReact": [
                48
            ],
            "viewerCanUpdate": [
                48
            ],
            "viewerCannotUpdateReasons": [
                100
            ],
            "viewerDidAuthor": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewCommentConnection": {
            "edges": [
                577
            ],
            "nodes": [
                575
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewCommentEdge": {
            "cursor": [
                1
            ],
            "node": [
                575
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewCommentState": {},
        "PullRequestReviewConnection": {
            "edges": [
                582
            ],
            "nodes": [
                574
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewContributionsByRepository": {
            "contributions": [
                172,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        122
                    ]
                }
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewDecision": {},
        "PullRequestReviewEdge": {
            "cursor": [
                1
            ],
            "node": [
                574
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewEvent": {},
        "PullRequestReviewState": {},
        "PullRequestReviewThread": {
            "comments": [
                576,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "skip": [
                        8
                    ]
                }
            ],
            "diffSide": [
                237
            ],
            "id": [
                2
            ],
            "isResolved": [
                48
            ],
            "line": [
                8
            ],
            "originalLine": [
                8
            ],
            "originalStartLine": [
                8
            ],
            "pullRequest": [
                560
            ],
            "repository": [
                707
            ],
            "resolvedBy": [
                979
            ],
            "startDiffSide": [
                237
            ],
            "startLine": [
                8
            ],
            "viewerCanResolve": [
                48
            ],
            "viewerCanUnresolve": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewThreadConnection": {
            "edges": [
                587
            ],
            "nodes": [
                585
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestReviewThreadEdge": {
            "cursor": [
                1
            ],
            "node": [
                585
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestRevisionMarker": {
            "createdAt": [
                180
            ],
            "lastSeenCommit": [
                102
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestState": {},
        "PullRequestTimelineConnection": {
            "edges": [
                592
            ],
            "nodes": [
                591
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItem": {
            "on_AssignedEvent": [
                35
            ],
            "on_BaseRefForcePushedEvent": [
                44
            ],
            "on_ClosedEvent": [
                94
            ],
            "on_Commit": [
                102
            ],
            "on_CommitCommentThread": [
                107
            ],
            "on_CrossReferencedEvent": [
                178
            ],
            "on_DemilestonedEvent": [
                215
            ],
            "on_DeployedEvent": [
                225
            ],
            "on_DeploymentEnvironmentChangedEvent": [
                229
            ],
            "on_HeadRefDeletedEvent": [
                337
            ],
            "on_HeadRefForcePushedEvent": [
                338
            ],
            "on_HeadRefRestoredEvent": [
                339
            ],
            "on_IssueComment": [
                355
            ],
            "on_LabeledEvent": [
                380
            ],
            "on_LockedEvent": [
                394
            ],
            "on_MergedEvent": [
                414
            ],
            "on_MilestonedEvent": [
                422
            ],
            "on_PullRequestReview": [
                574
            ],
            "on_PullRequestReviewComment": [
                575
            ],
            "on_PullRequestReviewThread": [
                585
            ],
            "on_ReferencedEvent": [
                622
            ],
            "on_RenamedTitleEvent": [
                673
            ],
            "on_ReopenedEvent": [
                679
            ],
            "on_ReviewDismissedEvent": [
                750
            ],
            "on_ReviewRequestRemovedEvent": [
                754
            ],
            "on_ReviewRequestedEvent": [
                755
            ],
            "on_SubscribedEvent": [
                824
            ],
            "on_UnassignedEvent": [
                877
            ],
            "on_UnlabeledEvent": [
                882
            ],
            "on_UnlockedEvent": [
                887
            ],
            "on_UnsubscribedEvent": [
                898
            ],
            "on_UserBlockedEvent": [
                981
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                591
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItems": {
            "on_AddedToProjectEvent": [
                30
            ],
            "on_AssignedEvent": [
                35
            ],
            "on_AutomaticBaseChangeFailedEvent": [
                41
            ],
            "on_AutomaticBaseChangeSucceededEvent": [
                42
            ],
            "on_BaseRefChangedEvent": [
                43
            ],
            "on_BaseRefForcePushedEvent": [
                44
            ],
            "on_ClosedEvent": [
                94
            ],
            "on_CommentDeletedEvent": [
                101
            ],
            "on_ConnectedEvent": [
                114
            ],
            "on_ConvertToDraftEvent": [
                126
            ],
            "on_ConvertedNoteToIssueEvent": [
                127
            ],
            "on_CrossReferencedEvent": [
                178
            ],
            "on_DemilestonedEvent": [
                215
            ],
            "on_DeployedEvent": [
                225
            ],
            "on_DeploymentEnvironmentChangedEvent": [
                229
            ],
            "on_DisconnectedEvent": [
                238
            ],
            "on_HeadRefDeletedEvent": [
                337
            ],
            "on_HeadRefForcePushedEvent": [
                338
            ],
            "on_HeadRefRestoredEvent": [
                339
            ],
            "on_IssueComment": [
                355
            ],
            "on_LabeledEvent": [
                380
            ],
            "on_LockedEvent": [
                394
            ],
            "on_MarkedAsDuplicateEvent": [
                398
            ],
            "on_MentionedEvent": [
                407
            ],
            "on_MergedEvent": [
                414
            ],
            "on_MilestonedEvent": [
                422
            ],
            "on_MovedColumnsInProjectEvent": [
                430
            ],
            "on_PinnedEvent": [
                528
            ],
            "on_PullRequestCommit": [
                564
            ],
            "on_PullRequestCommitCommentThread": [
                565
            ],
            "on_PullRequestReview": [
                574
            ],
            "on_PullRequestReviewThread": [
                585
            ],
            "on_PullRequestRevisionMarker": [
                588
            ],
            "on_ReadyForReviewEvent": [
                615
            ],
            "on_ReferencedEvent": [
                622
            ],
            "on_RemovedFromProjectEvent": [
                672
            ],
            "on_RenamedTitleEvent": [
                673
            ],
            "on_ReopenedEvent": [
                679
            ],
            "on_ReviewDismissedEvent": [
                750
            ],
            "on_ReviewRequestRemovedEvent": [
                754
            ],
            "on_ReviewRequestedEvent": [
                755
            ],
            "on_SubscribedEvent": [
                824
            ],
            "on_TransferredEvent": [
                871
            ],
            "on_UnassignedEvent": [
                877
            ],
            "on_UnlabeledEvent": [
                882
            ],
            "on_UnlockedEvent": [
                887
            ],
            "on_UnmarkedAsDuplicateEvent": [
                890
            ],
            "on_UnpinnedEvent": [
                895
            ],
            "on_UnsubscribedEvent": [
                898
            ],
            "on_UserBlockedEvent": [
                981
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItemsConnection": {
            "edges": [
                595
            ],
            "filteredCount": [
                8
            ],
            "nodes": [
                593
            ],
            "pageCount": [
                8
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "updatedAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItemsEdge": {
            "cursor": [
                1
            ],
            "node": [
                593
            ],
            "__typename": [
                1
            ]
        },
        "PullRequestTimelineItemsItemType": {},
        "PullRequestUpdateState": {},
        "Push": {
            "id": [
                2
            ],
            "nextSha": [
                329
            ],
            "permalink": [
                874
            ],
            "previousSha": [
                329
            ],
            "pusher": [
                979
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "PushAllowance": {
            "actor": [
                600
            ],
            "branchProtectionRule": [
                50
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "PushAllowanceActor": {
            "on_App": [
                31
            ],
            "on_Team": [
                828
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "PushAllowanceConnection": {
            "edges": [
                602
            ],
            "nodes": [
                599
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PushAllowanceEdge": {
            "cursor": [
                1
            ],
            "node": [
                599
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "codeOfConduct": [
                96,
                {
                    "key": [
                        1,
                        "String!"
                    ]
                }
            ],
            "codesOfConduct": [
                96
            ],
            "enterprise": [
                243,
                {
                    "invitationToken": [
                        1
                    ],
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "enterpriseAdministratorInvitation": [
                246,
                {
                    "enterpriseSlug": [
                        1,
                        "String!"
                    ],
                    "role": [
                        251,
                        "EnterpriseAdministratorRole!"
                    ],
                    "userLogin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "enterpriseAdministratorInvitationByToken": [
                246,
                {
                    "invitationToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "license": [
                386,
                {
                    "key": [
                        1,
                        "String!"
                    ]
                }
            ],
            "licenses": [
                386
            ],
            "marketplaceCategories": [
                399,
                {
                    "excludeEmpty": [
                        48
                    ],
                    "excludeSubcategories": [
                        48
                    ],
                    "includeCategories": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "marketplaceCategory": [
                399,
                {
                    "slug": [
                        1,
                        "String!"
                    ],
                    "useTopicAliases": [
                        48
                    ]
                }
            ],
            "marketplaceListing": [
                400,
                {
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "marketplaceListings": [
                401,
                {
                    "adminId": [
                        2
                    ],
                    "after": [
                        1
                    ],
                    "allStates": [
                        48
                    ],
                    "before": [
                        1
                    ],
                    "categorySlug": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "organizationId": [
                        2
                    ],
                    "primaryCategoryOnly": [
                        48
                    ],
                    "slugs": [
                        1,
                        "[String]"
                    ],
                    "useTopicAliases": [
                        48
                    ],
                    "viewerCanAdmin": [
                        48
                    ],
                    "withFreeTrialsOnly": [
                        48
                    ]
                }
            ],
            "meta": [
                327
            ],
            "node": [
                432,
                {
                    "id": [
                        2,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                432,
                {
                    "ids": [
                        2,
                        "[ID!]!"
                    ]
                }
            ],
            "organization": [
                478,
                {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            ],
            "rateLimit": [
                604,
                {
                    "dryRun": [
                        48
                    ]
                }
            ],
            "relay": [
                603
            ],
            "repository": [
                707,
                {
                    "name": [
                        1,
                        "String!"
                    ],
                    "owner": [
                        1,
                        "String!"
                    ]
                }
            ],
            "repositoryOwner": [
                725,
                {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resource": [
                880,
                {
                    "url": [
                        874,
                        "URI!"
                    ]
                }
            ],
            "search": [
                765,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "query": [
                        1,
                        "String!"
                    ],
                    "type": [
                        767,
                        "SearchType!"
                    ]
                }
            ],
            "securityAdvisories": [
                769,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "identifier": [
                        773
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        775
                    ],
                    "publishedSince": [
                        180
                    ],
                    "updatedSince": [
                        180
                    ]
                }
            ],
            "securityAdvisory": [
                768,
                {
                    "ghsaId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "securityVulnerabilities": [
                782,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "ecosystem": [
                        770
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        784
                    ],
                    "package": [
                        1
                    ],
                    "severities": [
                        780,
                        "[SecurityAdvisorySeverity!]"
                    ]
                }
            ],
            "sponsorsListing": [
                791,
                {
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            ],
            "topic": [
                864,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "user": [
                979,
                {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            ],
            "viewer": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "RateLimit": {
            "cost": [
                8
            ],
            "limit": [
                8
            ],
            "nodeCount": [
                8
            ],
            "remaining": [
                8
            ],
            "resetAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "Reactable": {
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "reactionGroups": [
                612
            ],
            "reactions": [
                609,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        610
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        613
                    ]
                }
            ],
            "viewerCanReact": [
                48
            ],
            "on_CommitComment": [
                104
            ],
            "on_Issue": [
                354
            ],
            "on_IssueComment": [
                355
            ],
            "on_PullRequest": [
                560
            ],
            "on_PullRequestReview": [
                574
            ],
            "on_PullRequestReviewComment": [
                575
            ],
            "on_TeamDiscussion": [
                834
            ],
            "on_TeamDiscussionComment": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "ReactingUserConnection": {
            "edges": [
                607
            ],
            "nodes": [
                979
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ReactingUserEdge": {
            "cursor": [
                1
            ],
            "node": [
                979
            ],
            "reactedAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "Reaction": {
            "content": [
                610
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "reactable": [
                605
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "ReactionConnection": {
            "edges": [
                611
            ],
            "nodes": [
                608
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "viewerHasReacted": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "ReactionContent": {},
        "ReactionEdge": {
            "cursor": [
                1
            ],
            "node": [
                608
            ],
            "__typename": [
                1
            ]
        },
        "ReactionGroup": {
            "content": [
                610
            ],
            "createdAt": [
                180
            ],
            "subject": [
                605
            ],
            "users": [
                606,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerHasReacted": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "ReactionOrder": {
            "direction": [
                437
            ],
            "field": [
                614
            ],
            "__typename": [
                1
            ]
        },
        "ReactionOrderField": {},
        "ReadyForReviewEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "Ref": {
            "associatedPullRequests": [
                568,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        363
                    ],
                    "states": [
                        589,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "prefix": [
                1
            ],
            "repository": [
                707
            ],
            "target": [
                328
            ],
            "__typename": [
                1
            ]
        },
        "RefConnection": {
            "edges": [
                618
            ],
            "nodes": [
                616
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RefEdge": {
            "cursor": [
                1
            ],
            "node": [
                616
            ],
            "__typename": [
                1
            ]
        },
        "RefOrder": {
            "direction": [
                437
            ],
            "field": [
                620
            ],
            "__typename": [
                1
            ]
        },
        "RefOrderField": {},
        "RefUpdate": {
            "afterOid": [
                329
            ],
            "beforeOid": [
                329
            ],
            "force": [
                48
            ],
            "name": [
                330
            ],
            "__typename": [
                1
            ]
        },
        "ReferencedEvent": {
            "actor": [
                7
            ],
            "commit": [
                102
            ],
            "commitRepository": [
                707
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "isCrossRepository": [
                48
            ],
            "isDirectReference": [
                48
            ],
            "subject": [
                623
            ],
            "__typename": [
                1
            ]
        },
        "ReferencedSubject": {
            "on_Issue": [
                354
            ],
            "on_PullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "RegenerateEnterpriseIdentityProviderRecoveryCodesInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RegenerateEnterpriseIdentityProviderRecoveryCodesPayload": {
            "clientMutationId": [
                1
            ],
            "identityProvider": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackage": {
            "color": [
                1
            ],
            "id": [
                2
            ],
            "latestVersion": [
                644
            ],
            "name": [
                1
            ],
            "nameWithOwner": [
                1
            ],
            "packageFileByGuid": [
                633,
                {
                    "guid": [
                        1,
                        "String!"
                    ]
                }
            ],
            "packageFileBySha256": [
                633,
                {
                    "sha256": [
                        1,
                        "String!"
                    ]
                }
            ],
            "packageType": [
                643
            ],
            "preReleaseVersions": [
                645,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "registryPackageType": [
                1
            ],
            "repository": [
                707
            ],
            "statistics": [
                639
            ],
            "tags": [
                641,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "topics": [
                866,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "version": [
                644,
                {
                    "version": [
                        1,
                        "String!"
                    ]
                }
            ],
            "versionByPlatform": [
                644,
                {
                    "platform": [
                        1,
                        "String!"
                    ],
                    "version": [
                        1,
                        "String!"
                    ]
                }
            ],
            "versionBySha256": [
                644,
                {
                    "sha256": [
                        1,
                        "String!"
                    ]
                }
            ],
            "versions": [
                645,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "versionsByMetadatum": [
                645,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "metadatum": [
                        636,
                        "RegistryPackageMetadatum!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageConnection": {
            "edges": [
                632
            ],
            "nodes": [
                626
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageDependency": {
            "dependencyType": [
                631
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "version": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageDependencyConnection": {
            "edges": [
                630
            ],
            "nodes": [
                628
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageDependencyEdge": {
            "cursor": [
                1
            ],
            "node": [
                628
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageDependencyType": {},
        "RegistryPackageEdge": {
            "cursor": [
                1
            ],
            "node": [
                626
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageFile": {
            "guid": [
                1
            ],
            "id": [
                2
            ],
            "md5": [
                1
            ],
            "metadataUrl": [
                874
            ],
            "name": [
                1
            ],
            "packageVersion": [
                644
            ],
            "sha1": [
                1
            ],
            "sha256": [
                1
            ],
            "size": [
                8
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageFileConnection": {
            "edges": [
                635
            ],
            "nodes": [
                633
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageFileEdge": {
            "cursor": [
                1
            ],
            "node": [
                633
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageMetadatum": {
            "name": [
                1
            ],
            "update": [
                48
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageOwner": {
            "id": [
                2
            ],
            "registryPackages": [
                627,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "name": [
                        1
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "packageType": [
                        643
                    ],
                    "publicOnly": [
                        48
                    ],
                    "registryPackageType": [
                        1
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "on_Organization": [
                478
            ],
            "on_Repository": [
                707
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageSearch": {
            "id": [
                2
            ],
            "registryPackagesForQuery": [
                627,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "packageType": [
                        643
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "on_Organization": [
                478
            ],
            "on_Repository": [
                707
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageStatistics": {
            "downloadsThisMonth": [
                8
            ],
            "downloadsThisWeek": [
                8
            ],
            "downloadsThisYear": [
                8
            ],
            "downloadsToday": [
                8
            ],
            "downloadsTotalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageTag": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "version": [
                644
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageTagConnection": {
            "edges": [
                642
            ],
            "nodes": [
                640
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageTagEdge": {
            "cursor": [
                1
            ],
            "node": [
                640
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageType": {},
        "RegistryPackageVersion": {
            "deleted": [
                48
            ],
            "dependencies": [
                629,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "type": [
                        631
                    ]
                }
            ],
            "fileByName": [
                633,
                {
                    "filename": [
                        1,
                        "String!"
                    ]
                }
            ],
            "files": [
                634,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "id": [
                2
            ],
            "installationCommand": [
                1
            ],
            "manifest": [
                1
            ],
            "platform": [
                1
            ],
            "preRelease": [
                48
            ],
            "readme": [
                1
            ],
            "readmeHtml": [
                336
            ],
            "registryPackage": [
                626
            ],
            "release": [
                648
            ],
            "sha256": [
                1
            ],
            "size": [
                8
            ],
            "statistics": [
                647
            ],
            "summary": [
                1
            ],
            "updatedAt": [
                180
            ],
            "version": [
                1
            ],
            "viewerCanEdit": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageVersionConnection": {
            "edges": [
                646
            ],
            "nodes": [
                644
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageVersionEdge": {
            "cursor": [
                1
            ],
            "node": [
                644
            ],
            "__typename": [
                1
            ]
        },
        "RegistryPackageVersionStatistics": {
            "downloadsThisMonth": [
                8
            ],
            "downloadsThisWeek": [
                8
            ],
            "downloadsThisYear": [
                8
            ],
            "downloadsToday": [
                8
            ],
            "downloadsTotalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "Release": {
            "author": [
                979
            ],
            "createdAt": [
                180
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                336
            ],
            "id": [
                2
            ],
            "isDraft": [
                48
            ],
            "isPrerelease": [
                48
            ],
            "name": [
                1
            ],
            "publishedAt": [
                180
            ],
            "releaseAssets": [
                650,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "name": [
                        1
                    ]
                }
            ],
            "resourcePath": [
                874
            ],
            "shortDescriptionHTML": [
                336,
                {
                    "limit": [
                        8
                    ]
                }
            ],
            "tag": [
                616
            ],
            "tagName": [
                1
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseAsset": {
            "contentType": [
                1
            ],
            "createdAt": [
                180
            ],
            "downloadCount": [
                8
            ],
            "downloadUrl": [
                874
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "release": [
                648
            ],
            "size": [
                8
            ],
            "updatedAt": [
                180
            ],
            "uploadedBy": [
                979
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseAssetConnection": {
            "edges": [
                651
            ],
            "nodes": [
                649
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseAssetEdge": {
            "cursor": [
                1
            ],
            "node": [
                649
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseConnection": {
            "edges": [
                653
            ],
            "nodes": [
                648
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseEdge": {
            "cursor": [
                1
            ],
            "node": [
                648
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseOrder": {
            "direction": [
                437
            ],
            "field": [
                655
            ],
            "__typename": [
                1
            ]
        },
        "ReleaseOrderField": {},
        "RemoveAssigneesFromAssignableInput": {
            "assignableId": [
                2
            ],
            "assigneeIds": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RemoveAssigneesFromAssignablePayload": {
            "assignable": [
                34
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseAdminInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "login": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseAdminPayload": {
            "admin": [
                979
            ],
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "viewer": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseIdentityProviderInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseIdentityProviderPayload": {
            "clientMutationId": [
                1
            ],
            "identityProvider": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseOrganizationInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "organizationId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveEnterpriseOrganizationPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "organization": [
                478
            ],
            "viewer": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "RemoveLabelsFromLabelableInput": {
            "clientMutationId": [
                1
            ],
            "labelIds": [
                2
            ],
            "labelableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveLabelsFromLabelablePayload": {
            "clientMutationId": [
                1
            ],
            "labelable": [
                379
            ],
            "__typename": [
                1
            ]
        },
        "RemoveOutsideCollaboratorInput": {
            "clientMutationId": [
                1
            ],
            "organizationId": [
                2
            ],
            "userId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveOutsideCollaboratorPayload": {
            "clientMutationId": [
                1
            ],
            "removedUser": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "RemoveReactionInput": {
            "clientMutationId": [
                1
            ],
            "content": [
                610
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveReactionPayload": {
            "clientMutationId": [
                1
            ],
            "reaction": [
                608
            ],
            "subject": [
                605
            ],
            "__typename": [
                1
            ]
        },
        "RemoveStarInput": {
            "clientMutationId": [
                1
            ],
            "starrableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RemoveStarPayload": {
            "clientMutationId": [
                1
            ],
            "starrable": [
                808
            ],
            "__typename": [
                1
            ]
        },
        "RemovedFromProjectEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "project": [
                537
            ],
            "projectColumnName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RenamedTitleEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "currentTitle": [
                1
            ],
            "id": [
                2
            ],
            "previousTitle": [
                1
            ],
            "subject": [
                674
            ],
            "__typename": [
                1
            ]
        },
        "RenamedTitleSubject": {
            "on_Issue": [
                354
            ],
            "on_PullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "ReopenIssueInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ReopenIssuePayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                354
            ],
            "__typename": [
                1
            ]
        },
        "ReopenPullRequestInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ReopenPullRequestPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "ReopenedEvent": {
            "actor": [
                7
            ],
            "closable": [
                89
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RepoAccessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "visibility": [
                681
            ],
            "__typename": [
                1
            ]
        },
        "RepoAccessAuditEntryVisibility": {},
        "RepoAddMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "visibility": [
                683
            ],
            "__typename": [
                1
            ]
        },
        "RepoAddMemberAuditEntryVisibility": {},
        "RepoAddTopicAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "topic": [
                864
            ],
            "topicName": [
                1
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoArchivedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "visibility": [
                686
            ],
            "__typename": [
                1
            ]
        },
        "RepoArchivedAuditEntryVisibility": {},
        "RepoChangeMergeSettingAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "isEnabled": [
                48
            ],
            "mergeType": [
                688
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoChangeMergeSettingAuditEntryMergeType": {},
        "RepoConfigDisableAnonymousGitAccessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigDisableCollaboratorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigDisableContributorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigDisableSockpuppetDisallowedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigEnableAnonymousGitAccessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigEnableCollaboratorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigEnableContributorsOnlyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigEnableSockpuppetDisallowedAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigLockAnonymousGitAccessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoConfigUnlockAnonymousGitAccessAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepoCreateAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "forkParentName": [
                1
            ],
            "forkSourceName": [
                1
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "visibility": [
                700
            ],
            "__typename": [
                1
            ]
        },
        "RepoCreateAuditEntryVisibility": {},
        "RepoDestroyAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "visibility": [
                702
            ],
            "__typename": [
                1
            ]
        },
        "RepoDestroyAuditEntryVisibility": {},
        "RepoRemoveMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "visibility": [
                704
            ],
            "__typename": [
                1
            ]
        },
        "RepoRemoveMemberAuditEntryVisibility": {},
        "RepoRemoveTopicAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "topic": [
                864
            ],
            "topicName": [
                1
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "ReportedContentClassifiers": {},
        "Repository": {
            "assignableUsers": [
                982,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "branchProtectionRules": [
                54,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "codeOfConduct": [
                96
            ],
            "collaborators": [
                710,
                {
                    "affiliation": [
                        97
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "commitComments": [
                105,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "defaultBranchRef": [
                616
            ],
            "deleteBranchOnMerge": [
                48
            ],
            "dependencyGraphManifests": [
                220,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "dependenciesAfter": [
                        1
                    ],
                    "dependenciesFirst": [
                        8
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "withDependencies": [
                        48
                    ]
                }
            ],
            "deployKeys": [
                223,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "deployments": [
                227,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "environments": [
                        1,
                        "[String!]"
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        230
                    ]
                }
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                336
            ],
            "diskUsage": [
                8
            ],
            "forkCount": [
                8
            ],
            "forks": [
                712,
                {
                    "affiliations": [
                        708,
                        "[RepositoryAffiliation]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "isLocked": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        723
                    ],
                    "ownerAffiliations": [
                        708,
                        "[RepositoryAffiliation]"
                    ],
                    "privacy": [
                        727
                    ]
                }
            ],
            "fundingLinks": [
                313
            ],
            "hasIssuesEnabled": [
                48
            ],
            "hasProjectsEnabled": [
                48
            ],
            "hasWikiEnabled": [
                48
            ],
            "homepageUrl": [
                874
            ],
            "id": [
                2
            ],
            "isArchived": [
                48
            ],
            "isDisabled": [
                48
            ],
            "isFork": [
                48
            ],
            "isLocked": [
                48
            ],
            "isMirror": [
                48
            ],
            "isPrivate": [
                48
            ],
            "isTemplate": [
                48
            ],
            "issue": [
                354,
                {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            ],
            "issueOrPullRequest": [
                362,
                {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            ],
            "issues": [
                358,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        361
                    ],
                    "first": [
                        8
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        363
                    ],
                    "states": [
                        365,
                        "[IssueState!]"
                    ]
                }
            ],
            "label": [
                374,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "labels": [
                375,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        377
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "languages": [
                382,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        384
                    ]
                }
            ],
            "licenseInfo": [
                386
            ],
            "lockReason": [
                721
            ],
            "mentionableUsers": [
                982,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "mergeCommitAllowed": [
                48
            ],
            "milestone": [
                415,
                {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            ],
            "milestones": [
                416,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        419
                    ],
                    "states": [
                        421,
                        "[MilestoneState!]"
                    ]
                }
            ],
            "mirrorUrl": [
                874
            ],
            "name": [
                1
            ],
            "nameWithOwner": [
                1
            ],
            "object": [
                328,
                {
                    "expression": [
                        1
                    ],
                    "oid": [
                        329
                    ]
                }
            ],
            "openGraphImageUrl": [
                874
            ],
            "owner": [
                725
            ],
            "packages": [
                500,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "orderBy": [
                        507
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "parent": [
                707
            ],
            "pinnedIssues": [
                530,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "primaryLanguage": [
                381
            ],
            "project": [
                537,
                {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                550,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        552
                    ],
                    "search": [
                        1
                    ],
                    "states": [
                        555,
                        "[ProjectState!]"
                    ]
                }
            ],
            "projectsResourcePath": [
                874
            ],
            "projectsUrl": [
                874
            ],
            "pullRequest": [
                560,
                {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            ],
            "pullRequests": [
                568,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        363
                    ],
                    "states": [
                        589,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "pushedAt": [
                180
            ],
            "rebaseMergeAllowed": [
                48
            ],
            "ref": [
                616,
                {
                    "qualifiedName": [
                        1,
                        "String!"
                    ]
                }
            ],
            "refs": [
                617,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "direction": [
                        437
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        619
                    ],
                    "query": [
                        1
                    ],
                    "refPrefix": [
                        1,
                        "String!"
                    ]
                }
            ],
            "registryPackages": [
                627,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "name": [
                        1
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "packageType": [
                        643
                    ],
                    "publicOnly": [
                        48
                    ],
                    "registryPackageType": [
                        1
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "registryPackagesForQuery": [
                627,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "packageType": [
                        643
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "release": [
                648,
                {
                    "tagName": [
                        1,
                        "String!"
                    ]
                }
            ],
            "releases": [
                652,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        654
                    ]
                }
            ],
            "repositoryTopics": [
                729,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "resourcePath": [
                874
            ],
            "shortDescriptionHTML": [
                336,
                {
                    "limit": [
                        8
                    ]
                }
            ],
            "squashMergeAllowed": [
                48
            ],
            "sshUrl": [
                331
            ],
            "stargazers": [
                806,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        804
                    ]
                }
            ],
            "submodules": [
                821,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "tempCloneToken": [
                1
            ],
            "templateRepository": [
                707
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "usesCustomOpenGraphImage": [
                48
            ],
            "viewerCanAdminister": [
                48
            ],
            "viewerCanCreateProjects": [
                48
            ],
            "viewerCanSubscribe": [
                48
            ],
            "viewerCanUpdateTopics": [
                48
            ],
            "viewerHasStarred": [
                48
            ],
            "viewerPermission": [
                726
            ],
            "viewerSubscription": [
                825
            ],
            "vulnerabilityAlerts": [
                735,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "watchers": [
                982,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryAffiliation": {},
        "RepositoryAuditEntryData": {
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "on_OrgRestoreMemberMembershipRepositoryAuditEntryData": [
                468
            ],
            "on_PrivateRepositoryForkingDisableAuditEntry": [
                533
            ],
            "on_PrivateRepositoryForkingEnableAuditEntry": [
                534
            ],
            "on_RepoAccessAuditEntry": [
                680
            ],
            "on_RepoAddMemberAuditEntry": [
                682
            ],
            "on_RepoAddTopicAuditEntry": [
                684
            ],
            "on_RepoArchivedAuditEntry": [
                685
            ],
            "on_RepoChangeMergeSettingAuditEntry": [
                687
            ],
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": [
                689
            ],
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": [
                690
            ],
            "on_RepoConfigDisableContributorsOnlyAuditEntry": [
                691
            ],
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": [
                692
            ],
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": [
                693
            ],
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": [
                694
            ],
            "on_RepoConfigEnableContributorsOnlyAuditEntry": [
                695
            ],
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": [
                696
            ],
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": [
                697
            ],
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": [
                698
            ],
            "on_RepoCreateAuditEntry": [
                699
            ],
            "on_RepoDestroyAuditEntry": [
                701
            ],
            "on_RepoRemoveMemberAuditEntry": [
                703
            ],
            "on_RepoRemoveTopicAuditEntry": [
                705
            ],
            "on_TeamAddRepositoryAuditEntry": [
                830
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                855
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryCollaboratorConnection": {
            "edges": [
                711
            ],
            "nodes": [
                979
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryCollaboratorEdge": {
            "cursor": [
                1
            ],
            "node": [
                979
            ],
            "permission": [
                726
            ],
            "permissionSources": [
                521
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryConnection": {
            "edges": [
                714
            ],
            "nodes": [
                707
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "totalDiskUsage": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryContributionType": {},
        "RepositoryEdge": {
            "cursor": [
                1
            ],
            "node": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInfo": {
            "createdAt": [
                180
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                336
            ],
            "forkCount": [
                8
            ],
            "hasIssuesEnabled": [
                48
            ],
            "hasProjectsEnabled": [
                48
            ],
            "hasWikiEnabled": [
                48
            ],
            "homepageUrl": [
                874
            ],
            "isArchived": [
                48
            ],
            "isFork": [
                48
            ],
            "isLocked": [
                48
            ],
            "isMirror": [
                48
            ],
            "isPrivate": [
                48
            ],
            "isTemplate": [
                48
            ],
            "licenseInfo": [
                386
            ],
            "lockReason": [
                721
            ],
            "mirrorUrl": [
                874
            ],
            "name": [
                1
            ],
            "nameWithOwner": [
                1
            ],
            "openGraphImageUrl": [
                874
            ],
            "owner": [
                725
            ],
            "pushedAt": [
                180
            ],
            "resourcePath": [
                874
            ],
            "shortDescriptionHTML": [
                336,
                {
                    "limit": [
                        8
                    ]
                }
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "usesCustomOpenGraphImage": [
                48
            ],
            "on_Repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInvitation": {
            "email": [
                1
            ],
            "id": [
                2
            ],
            "invitee": [
                979
            ],
            "inviter": [
                979
            ],
            "permission": [
                726
            ],
            "repository": [
                715
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInvitationConnection": {
            "edges": [
                718
            ],
            "nodes": [
                716
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInvitationEdge": {
            "cursor": [
                1
            ],
            "node": [
                716
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInvitationOrder": {
            "direction": [
                437
            ],
            "field": [
                720
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryInvitationOrderField": {},
        "RepositoryLockReason": {},
        "RepositoryNode": {
            "repository": [
                707
            ],
            "on_CommitComment": [
                104
            ],
            "on_CommitCommentThread": [
                107
            ],
            "on_Issue": [
                354
            ],
            "on_IssueComment": [
                355
            ],
            "on_PullRequest": [
                560
            ],
            "on_PullRequestCommitCommentThread": [
                565
            ],
            "on_PullRequestReview": [
                574
            ],
            "on_PullRequestReviewComment": [
                575
            ],
            "on_RepositoryVulnerabilityAlert": [
                734
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryOrder": {
            "direction": [
                437
            ],
            "field": [
                724
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryOrderField": {},
        "RepositoryOwner": {
            "avatarUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "id": [
                2
            ],
            "login": [
                1
            ],
            "repositories": [
                712,
                {
                    "affiliations": [
                        708,
                        "[RepositoryAffiliation]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "isFork": [
                        48
                    ],
                    "isLocked": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        723
                    ],
                    "ownerAffiliations": [
                        708,
                        "[RepositoryAffiliation]"
                    ],
                    "privacy": [
                        727
                    ]
                }
            ],
            "repository": [
                707,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "on_Organization": [
                478
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryPermission": {},
        "RepositoryPrivacy": {},
        "RepositoryTopic": {
            "id": [
                2
            ],
            "resourcePath": [
                874
            ],
            "topic": [
                864
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryTopicConnection": {
            "edges": [
                730
            ],
            "nodes": [
                728
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryTopicEdge": {
            "cursor": [
                1
            ],
            "node": [
                728
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryVisibility": {},
        "RepositoryVisibilityChangeDisableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "enterpriseResourcePath": [
                874
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                874
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryVisibilityChangeEnableAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "enterpriseResourcePath": [
                874
            ],
            "enterpriseSlug": [
                1
            ],
            "enterpriseUrl": [
                874
            ],
            "id": [
                2
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryVulnerabilityAlert": {
            "createdAt": [
                180
            ],
            "dismissReason": [
                1
            ],
            "dismissedAt": [
                180
            ],
            "dismisser": [
                979
            ],
            "id": [
                2
            ],
            "repository": [
                707
            ],
            "securityAdvisory": [
                768
            ],
            "securityVulnerability": [
                781
            ],
            "vulnerableManifestFilename": [
                1
            ],
            "vulnerableManifestPath": [
                1
            ],
            "vulnerableRequirements": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryVulnerabilityAlertConnection": {
            "edges": [
                736
            ],
            "nodes": [
                734
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RepositoryVulnerabilityAlertEdge": {
            "cursor": [
                1
            ],
            "node": [
                734
            ],
            "__typename": [
                1
            ]
        },
        "RequestReviewsInput": {
            "clientMutationId": [
                1
            ],
            "pullRequestId": [
                2
            ],
            "teamIds": [
                2
            ],
            "union": [
                48
            ],
            "userIds": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RequestReviewsPayload": {
            "actor": [
                7
            ],
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                560
            ],
            "requestedReviewersEdge": [
                986
            ],
            "__typename": [
                1
            ]
        },
        "RequestableCheckStatusState": {},
        "RequestedReviewer": {
            "on_Mannequin": [
                395
            ],
            "on_Team": [
                828
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "RerequestCheckSuiteInput": {
            "checkSuiteId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "RerequestCheckSuitePayload": {
            "checkSuite": [
                78
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ResolveReviewThreadInput": {
            "clientMutationId": [
                1
            ],
            "threadId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ResolveReviewThreadPayload": {
            "clientMutationId": [
                1
            ],
            "thread": [
                585
            ],
            "__typename": [
                1
            ]
        },
        "RestrictedContribution": {
            "isRestricted": [
                48
            ],
            "occurredAt": [
                180
            ],
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "ReviewDismissalAllowance": {
            "actor": [
                747
            ],
            "branchProtectionRule": [
                50
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ReviewDismissalAllowanceActor": {
            "on_Team": [
                828
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "ReviewDismissalAllowanceConnection": {
            "edges": [
                749
            ],
            "nodes": [
                746
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ReviewDismissalAllowanceEdge": {
            "cursor": [
                1
            ],
            "node": [
                746
            ],
            "__typename": [
                1
            ]
        },
        "ReviewDismissedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "dismissalMessage": [
                1
            ],
            "dismissalMessageHTML": [
                1
            ],
            "id": [
                2
            ],
            "previousReviewState": [
                584
            ],
            "pullRequest": [
                560
            ],
            "pullRequestCommit": [
                564
            ],
            "resourcePath": [
                874
            ],
            "review": [
                574
            ],
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "ReviewRequest": {
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "requestedReviewer": [
                740
            ],
            "__typename": [
                1
            ]
        },
        "ReviewRequestConnection": {
            "edges": [
                753
            ],
            "nodes": [
                751
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ReviewRequestEdge": {
            "cursor": [
                1
            ],
            "node": [
                751
            ],
            "__typename": [
                1
            ]
        },
        "ReviewRequestRemovedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "requestedReviewer": [
                740
            ],
            "__typename": [
                1
            ]
        },
        "ReviewRequestedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "pullRequest": [
                560
            ],
            "requestedReviewer": [
                740
            ],
            "__typename": [
                1
            ]
        },
        "ReviewStatusHovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "reviewDecision": [
                581
            ],
            "__typename": [
                1
            ]
        },
        "SamlDigestAlgorithm": {},
        "SamlSignatureAlgorithm": {},
        "SavedReply": {
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "databaseId": [
                8
            ],
            "id": [
                2
            ],
            "title": [
                1
            ],
            "user": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "SavedReplyConnection": {
            "edges": [
                761
            ],
            "nodes": [
                759
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "SavedReplyEdge": {
            "cursor": [
                1
            ],
            "node": [
                759
            ],
            "__typename": [
                1
            ]
        },
        "SavedReplyOrder": {
            "direction": [
                437
            ],
            "field": [
                763
            ],
            "__typename": [
                1
            ]
        },
        "SavedReplyOrderField": {},
        "SearchResultItem": {
            "on_App": [
                31
            ],
            "on_Issue": [
                354
            ],
            "on_MarketplaceListing": [
                400
            ],
            "on_Organization": [
                478
            ],
            "on_PullRequest": [
                560
            ],
            "on_Repository": [
                707
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "SearchResultItemConnection": {
            "codeCount": [
                8
            ],
            "edges": [
                766
            ],
            "issueCount": [
                8
            ],
            "nodes": [
                764
            ],
            "pageInfo": [
                519
            ],
            "repositoryCount": [
                8
            ],
            "userCount": [
                8
            ],
            "wikiCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "SearchResultItemEdge": {
            "cursor": [
                1
            ],
            "node": [
                764
            ],
            "textMatches": [
                862
            ],
            "__typename": [
                1
            ]
        },
        "SearchType": {},
        "SecurityAdvisory": {
            "databaseId": [
                8
            ],
            "description": [
                1
            ],
            "ghsaId": [
                1
            ],
            "id": [
                2
            ],
            "identifiers": [
                772
            ],
            "origin": [
                1
            ],
            "permalink": [
                874
            ],
            "publishedAt": [
                180
            ],
            "references": [
                779
            ],
            "severity": [
                780
            ],
            "summary": [
                1
            ],
            "updatedAt": [
                180
            ],
            "vulnerabilities": [
                782,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "ecosystem": [
                        770
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        784
                    ],
                    "package": [
                        1
                    ],
                    "severities": [
                        780,
                        "[SecurityAdvisorySeverity!]"
                    ]
                }
            ],
            "withdrawnAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryConnection": {
            "edges": [
                771
            ],
            "nodes": [
                768
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryEcosystem": {},
        "SecurityAdvisoryEdge": {
            "cursor": [
                1
            ],
            "node": [
                768
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryIdentifier": {
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryIdentifierFilter": {
            "type": [
                774
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryIdentifierType": {},
        "SecurityAdvisoryOrder": {
            "direction": [
                437
            ],
            "field": [
                776
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryOrderField": {},
        "SecurityAdvisoryPackage": {
            "ecosystem": [
                770
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryPackageVersion": {
            "identifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisoryReference": {
            "url": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "SecurityAdvisorySeverity": {},
        "SecurityVulnerability": {
            "advisory": [
                768
            ],
            "firstPatchedVersion": [
                778
            ],
            "package": [
                777
            ],
            "severity": [
                780
            ],
            "updatedAt": [
                180
            ],
            "vulnerableVersionRange": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SecurityVulnerabilityConnection": {
            "edges": [
                783
            ],
            "nodes": [
                781
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "SecurityVulnerabilityEdge": {
            "cursor": [
                1
            ],
            "node": [
                781
            ],
            "__typename": [
                1
            ]
        },
        "SecurityVulnerabilityOrder": {
            "direction": [
                437
            ],
            "field": [
                785
            ],
            "__typename": [
                1
            ]
        },
        "SecurityVulnerabilityOrderField": {},
        "SetEnterpriseIdentityProviderInput": {
            "clientMutationId": [
                1
            ],
            "digestMethod": [
                757
            ],
            "enterpriseId": [
                2
            ],
            "idpCertificate": [
                1
            ],
            "issuer": [
                1
            ],
            "signatureMethod": [
                758
            ],
            "ssoUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "SetEnterpriseIdentityProviderPayload": {
            "clientMutationId": [
                1
            ],
            "identityProvider": [
                258
            ],
            "__typename": [
                1
            ]
        },
        "SmimeSignature": {
            "email": [
                1
            ],
            "isValid": [
                48
            ],
            "payload": [
                1
            ],
            "signature": [
                1
            ],
            "signer": [
                979
            ],
            "state": [
                333
            ],
            "wasSignedByGitHub": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "Sponsor": {
            "on_Organization": [
                478
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "Sponsorable": {
            "sponsorsListing": [
                791
            ],
            "sponsorshipsAsMaintainer": [
                799,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "includePrivate": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        801
                    ]
                }
            ],
            "sponsorshipsAsSponsor": [
                799,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        801
                    ]
                }
            ],
            "on_Organization": [
                478
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsListing": {
            "createdAt": [
                180
            ],
            "fullDescription": [
                1
            ],
            "fullDescriptionHTML": [
                336
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "shortDescription": [
                1
            ],
            "slug": [
                1
            ],
            "tiers": [
                794,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        796
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsTier": {
            "adminInfo": [
                793
            ],
            "createdAt": [
                180
            ],
            "description": [
                1
            ],
            "descriptionHTML": [
                336
            ],
            "id": [
                2
            ],
            "monthlyPriceInCents": [
                8
            ],
            "monthlyPriceInDollars": [
                8
            ],
            "name": [
                1
            ],
            "sponsorsListing": [
                791
            ],
            "updatedAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsTierAdminInfo": {
            "sponsorships": [
                799,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "includePrivate": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        801
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsTierConnection": {
            "edges": [
                795
            ],
            "nodes": [
                792
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsTierEdge": {
            "cursor": [
                1
            ],
            "node": [
                792
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsTierOrder": {
            "direction": [
                437
            ],
            "field": [
                797
            ],
            "__typename": [
                1
            ]
        },
        "SponsorsTierOrderField": {},
        "Sponsorship": {
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "maintainer": [
                979
            ],
            "privacyLevel": [
                803
            ],
            "sponsor": [
                979
            ],
            "sponsorEntity": [
                789
            ],
            "sponsorable": [
                790
            ],
            "tier": [
                792
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipConnection": {
            "edges": [
                800
            ],
            "nodes": [
                798
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipEdge": {
            "cursor": [
                1
            ],
            "node": [
                798
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipOrder": {
            "direction": [
                437
            ],
            "field": [
                802
            ],
            "__typename": [
                1
            ]
        },
        "SponsorshipOrderField": {},
        "SponsorshipPrivacy": {},
        "StarOrder": {
            "direction": [
                437
            ],
            "field": [
                805
            ],
            "__typename": [
                1
            ]
        },
        "StarOrderField": {},
        "StargazerConnection": {
            "edges": [
                807
            ],
            "nodes": [
                979
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "StargazerEdge": {
            "cursor": [
                1
            ],
            "node": [
                979
            ],
            "starredAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "Starrable": {
            "id": [
                2
            ],
            "stargazers": [
                806,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        804
                    ]
                }
            ],
            "viewerHasStarred": [
                48
            ],
            "on_Gist": [
                316
            ],
            "on_Repository": [
                707
            ],
            "on_Topic": [
                864
            ],
            "__typename": [
                1
            ]
        },
        "StarredRepositoryConnection": {
            "edges": [
                810
            ],
            "isOverLimit": [
                48
            ],
            "nodes": [
                707
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "StarredRepositoryEdge": {
            "cursor": [
                1
            ],
            "node": [
                707
            ],
            "starredAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "Status": {
            "commit": [
                102
            ],
            "context": [
                816,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "contexts": [
                816
            ],
            "id": [
                2
            ],
            "state": [
                817
            ],
            "__typename": [
                1
            ]
        },
        "StatusCheckRollup": {
            "commit": [
                102
            ],
            "contexts": [
                814,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "id": [
                2
            ],
            "state": [
                817
            ],
            "__typename": [
                1
            ]
        },
        "StatusCheckRollupContext": {
            "on_CheckRun": [
                69
            ],
            "on_StatusContext": [
                816
            ],
            "__typename": [
                1
            ]
        },
        "StatusCheckRollupContextConnection": {
            "edges": [
                815
            ],
            "nodes": [
                813
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "StatusCheckRollupContextEdge": {
            "cursor": [
                1
            ],
            "node": [
                813
            ],
            "__typename": [
                1
            ]
        },
        "StatusContext": {
            "avatarUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "commit": [
                102
            ],
            "context": [
                1
            ],
            "createdAt": [
                180
            ],
            "creator": [
                7
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "state": [
                817
            ],
            "targetUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "StatusState": {},
        "SubmitPullRequestReviewInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "event": [
                583
            ],
            "pullRequestId": [
                2
            ],
            "pullRequestReviewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "SubmitPullRequestReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                574
            ],
            "__typename": [
                1
            ]
        },
        "Submodule": {
            "branch": [
                1
            ],
            "gitUrl": [
                874
            ],
            "name": [
                1
            ],
            "path": [
                1
            ],
            "subprojectCommitOid": [
                329
            ],
            "__typename": [
                1
            ]
        },
        "SubmoduleConnection": {
            "edges": [
                822
            ],
            "nodes": [
                820
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "SubmoduleEdge": {
            "cursor": [
                1
            ],
            "node": [
                820
            ],
            "__typename": [
                1
            ]
        },
        "Subscribable": {
            "id": [
                2
            ],
            "viewerCanSubscribe": [
                48
            ],
            "viewerSubscription": [
                825
            ],
            "on_Commit": [
                102
            ],
            "on_Issue": [
                354
            ],
            "on_PullRequest": [
                560
            ],
            "on_Repository": [
                707
            ],
            "on_Team": [
                828
            ],
            "on_TeamDiscussion": [
                834
            ],
            "__typename": [
                1
            ]
        },
        "SubscribedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "subscribable": [
                823
            ],
            "__typename": [
                1
            ]
        },
        "SubscriptionState": {},
        "SuggestedReviewer": {
            "isAuthor": [
                48
            ],
            "isCommenter": [
                48
            ],
            "reviewer": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "Tag": {
            "abbreviatedOid": [
                1
            ],
            "commitResourcePath": [
                874
            ],
            "commitUrl": [
                874
            ],
            "id": [
                2
            ],
            "message": [
                1
            ],
            "name": [
                1
            ],
            "oid": [
                329
            ],
            "repository": [
                707
            ],
            "tagger": [
                326
            ],
            "target": [
                328
            ],
            "__typename": [
                1
            ]
        },
        "Team": {
            "ancestors": [
                833,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "avatarUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "childTeams": [
                833,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "immediateOnly": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        851
                    ],
                    "userLogins": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "combinedSlug": [
                1
            ],
            "createdAt": [
                180
            ],
            "description": [
                1
            ],
            "discussion": [
                834,
                {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            ],
            "discussions": [
                840,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "isPinned": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        842
                    ]
                }
            ],
            "discussionsResourcePath": [
                874
            ],
            "discussionsUrl": [
                874
            ],
            "editTeamResourcePath": [
                874
            ],
            "editTeamUrl": [
                874
            ],
            "id": [
                2
            ],
            "invitations": [
                487,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "memberStatuses": [
                988,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        990
                    ]
                }
            ],
            "members": [
                845,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "membership": [
                        850
                    ],
                    "orderBy": [
                        847
                    ],
                    "query": [
                        1
                    ],
                    "role": [
                        849
                    ]
                }
            ],
            "membersResourcePath": [
                874
            ],
            "membersUrl": [
                874
            ],
            "name": [
                1
            ],
            "newTeamResourcePath": [
                874
            ],
            "newTeamUrl": [
                874
            ],
            "organization": [
                478
            ],
            "parentTeam": [
                828
            ],
            "privacy": [
                853
            ],
            "repositories": [
                856,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        858
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "repositoriesResourcePath": [
                874
            ],
            "repositoriesUrl": [
                874
            ],
            "resourcePath": [
                874
            ],
            "reviewRequestDelegationAlgorithm": [
                860
            ],
            "reviewRequestDelegationEnabled": [
                48
            ],
            "reviewRequestDelegationMemberCount": [
                8
            ],
            "reviewRequestDelegationNotifyTeam": [
                48
            ],
            "slug": [
                1
            ],
            "teamsResourcePath": [
                874
            ],
            "teamsUrl": [
                874
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "viewerCanAdminister": [
                48
            ],
            "viewerCanSubscribe": [
                48
            ],
            "viewerSubscription": [
                825
            ],
            "__typename": [
                1
            ]
        },
        "TeamAddMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "isLdapMapped": [
                48
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "team": [
                828
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                874
            ],
            "teamUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "TeamAddRepositoryAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "isLdapMapped": [
                48
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "team": [
                828
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                874
            ],
            "teamUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "TeamAuditEntryData": {
            "team": [
                828
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                874
            ],
            "teamUrl": [
                874
            ],
            "on_OrgRestoreMemberMembershipTeamAuditEntryData": [
                469
            ],
            "on_TeamAddMemberAuditEntry": [
                829
            ],
            "on_TeamAddRepositoryAuditEntry": [
                830
            ],
            "on_TeamChangeParentTeamAuditEntry": [
                832
            ],
            "on_TeamRemoveMemberAuditEntry": [
                854
            ],
            "on_TeamRemoveRepositoryAuditEntry": [
                855
            ],
            "__typename": [
                1
            ]
        },
        "TeamChangeParentTeamAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "isLdapMapped": [
                48
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "parentTeam": [
                828
            ],
            "parentTeamName": [
                1
            ],
            "parentTeamNameWas": [
                1
            ],
            "parentTeamResourcePath": [
                874
            ],
            "parentTeamUrl": [
                874
            ],
            "parentTeamWas": [
                828
            ],
            "parentTeamWasResourcePath": [
                874
            ],
            "parentTeamWasUrl": [
                874
            ],
            "team": [
                828
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                874
            ],
            "teamUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "TeamConnection": {
            "edges": [
                844
            ],
            "nodes": [
                828
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussion": {
            "author": [
                7
            ],
            "authorAssociation": [
                99
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "bodyText": [
                1
            ],
            "bodyVersion": [
                1
            ],
            "comments": [
                836,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "fromComment": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        838
                    ]
                }
            ],
            "commentsResourcePath": [
                874
            ],
            "commentsUrl": [
                874
            ],
            "createdAt": [
                180
            ],
            "createdViaEmail": [
                48
            ],
            "databaseId": [
                8
            ],
            "editor": [
                7
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                48
            ],
            "isPinned": [
                48
            ],
            "isPrivate": [
                48
            ],
            "lastEditedAt": [
                180
            ],
            "number": [
                8
            ],
            "publishedAt": [
                180
            ],
            "reactionGroups": [
                612
            ],
            "reactions": [
                609,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        610
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        613
                    ]
                }
            ],
            "resourcePath": [
                874
            ],
            "team": [
                828
            ],
            "title": [
                1
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "userContentEdits": [
                984,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerCanDelete": [
                48
            ],
            "viewerCanPin": [
                48
            ],
            "viewerCanReact": [
                48
            ],
            "viewerCanSubscribe": [
                48
            ],
            "viewerCanUpdate": [
                48
            ],
            "viewerCannotUpdateReasons": [
                100
            ],
            "viewerDidAuthor": [
                48
            ],
            "viewerSubscription": [
                825
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionComment": {
            "author": [
                7
            ],
            "authorAssociation": [
                99
            ],
            "body": [
                1
            ],
            "bodyHTML": [
                336
            ],
            "bodyText": [
                1
            ],
            "bodyVersion": [
                1
            ],
            "createdAt": [
                180
            ],
            "createdViaEmail": [
                48
            ],
            "databaseId": [
                8
            ],
            "discussion": [
                834
            ],
            "editor": [
                7
            ],
            "id": [
                2
            ],
            "includesCreatedEdit": [
                48
            ],
            "lastEditedAt": [
                180
            ],
            "number": [
                8
            ],
            "publishedAt": [
                180
            ],
            "reactionGroups": [
                612
            ],
            "reactions": [
                609,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "content": [
                        610
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        613
                    ]
                }
            ],
            "resourcePath": [
                874
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "userContentEdits": [
                984,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "viewerCanDelete": [
                48
            ],
            "viewerCanReact": [
                48
            ],
            "viewerCanUpdate": [
                48
            ],
            "viewerCannotUpdateReasons": [
                100
            ],
            "viewerDidAuthor": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionCommentConnection": {
            "edges": [
                837
            ],
            "nodes": [
                835
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionCommentEdge": {
            "cursor": [
                1
            ],
            "node": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionCommentOrder": {
            "direction": [
                437
            ],
            "field": [
                839
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionCommentOrderField": {},
        "TeamDiscussionConnection": {
            "edges": [
                841
            ],
            "nodes": [
                834
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionEdge": {
            "cursor": [
                1
            ],
            "node": [
                834
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionOrder": {
            "direction": [
                437
            ],
            "field": [
                843
            ],
            "__typename": [
                1
            ]
        },
        "TeamDiscussionOrderField": {},
        "TeamEdge": {
            "cursor": [
                1
            ],
            "node": [
                828
            ],
            "__typename": [
                1
            ]
        },
        "TeamMemberConnection": {
            "edges": [
                846
            ],
            "nodes": [
                979
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "TeamMemberEdge": {
            "cursor": [
                1
            ],
            "memberAccessResourcePath": [
                874
            ],
            "memberAccessUrl": [
                874
            ],
            "node": [
                979
            ],
            "role": [
                849
            ],
            "__typename": [
                1
            ]
        },
        "TeamMemberOrder": {
            "direction": [
                437
            ],
            "field": [
                848
            ],
            "__typename": [
                1
            ]
        },
        "TeamMemberOrderField": {},
        "TeamMemberRole": {},
        "TeamMembershipType": {},
        "TeamOrder": {
            "direction": [
                437
            ],
            "field": [
                852
            ],
            "__typename": [
                1
            ]
        },
        "TeamOrderField": {},
        "TeamPrivacy": {},
        "TeamRemoveMemberAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "isLdapMapped": [
                48
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "team": [
                828
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                874
            ],
            "teamUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "TeamRemoveRepositoryAuditEntry": {
            "action": [
                1
            ],
            "actor": [
                38
            ],
            "actorIp": [
                1
            ],
            "actorLocation": [
                9
            ],
            "actorLogin": [
                1
            ],
            "actorResourcePath": [
                874
            ],
            "actorUrl": [
                874
            ],
            "createdAt": [
                532
            ],
            "id": [
                2
            ],
            "isLdapMapped": [
                48
            ],
            "operationType": [
                436
            ],
            "organization": [
                478
            ],
            "organizationName": [
                1
            ],
            "organizationResourcePath": [
                874
            ],
            "organizationUrl": [
                874
            ],
            "repository": [
                707
            ],
            "repositoryName": [
                1
            ],
            "repositoryResourcePath": [
                874
            ],
            "repositoryUrl": [
                874
            ],
            "team": [
                828
            ],
            "teamName": [
                1
            ],
            "teamResourcePath": [
                874
            ],
            "teamUrl": [
                874
            ],
            "user": [
                979
            ],
            "userLogin": [
                1
            ],
            "userResourcePath": [
                874
            ],
            "userUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "TeamRepositoryConnection": {
            "edges": [
                857
            ],
            "nodes": [
                707
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "TeamRepositoryEdge": {
            "cursor": [
                1
            ],
            "node": [
                707
            ],
            "permission": [
                726
            ],
            "__typename": [
                1
            ]
        },
        "TeamRepositoryOrder": {
            "direction": [
                437
            ],
            "field": [
                859
            ],
            "__typename": [
                1
            ]
        },
        "TeamRepositoryOrderField": {},
        "TeamReviewAssignmentAlgorithm": {},
        "TeamRole": {},
        "TextMatch": {
            "fragment": [
                1
            ],
            "highlights": [
                863
            ],
            "property": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TextMatchHighlight": {
            "beginIndice": [
                8
            ],
            "endIndice": [
                8
            ],
            "text": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Topic": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "relatedTopics": [
                864,
                {
                    "first": [
                        8
                    ]
                }
            ],
            "stargazers": [
                806,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        804
                    ]
                }
            ],
            "viewerHasStarred": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "TopicAuditEntryData": {
            "topic": [
                864
            ],
            "topicName": [
                1
            ],
            "on_RepoAddTopicAuditEntry": [
                684
            ],
            "on_RepoRemoveTopicAuditEntry": [
                705
            ],
            "__typename": [
                1
            ]
        },
        "TopicConnection": {
            "edges": [
                867
            ],
            "nodes": [
                864
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "TopicEdge": {
            "cursor": [
                1
            ],
            "node": [
                864
            ],
            "__typename": [
                1
            ]
        },
        "TopicSuggestionDeclineReason": {},
        "TransferIssueInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "TransferIssuePayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                354
            ],
            "__typename": [
                1
            ]
        },
        "TransferredEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "fromRepository": [
                707
            ],
            "id": [
                2
            ],
            "issue": [
                354
            ],
            "__typename": [
                1
            ]
        },
        "Tree": {
            "abbreviatedOid": [
                1
            ],
            "commitResourcePath": [
                874
            ],
            "commitUrl": [
                874
            ],
            "entries": [
                873
            ],
            "id": [
                2
            ],
            "oid": [
                329
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "TreeEntry": {
            "mode": [
                8
            ],
            "name": [
                1
            ],
            "object": [
                328
            ],
            "oid": [
                329
            ],
            "repository": [
                707
            ],
            "submodule": [
                820
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "URI": {},
        "UnarchiveRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnarchiveRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "UnassignedEvent": {
            "actor": [
                7
            ],
            "assignable": [
                34
            ],
            "assignee": [
                36
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "UnfollowUserInput": {
            "clientMutationId": [
                1
            ],
            "userId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnfollowUserPayload": {
            "clientMutationId": [
                1
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "UniformResourceLocatable": {
            "resourcePath": [
                874
            ],
            "url": [
                874
            ],
            "on_Bot": [
                49
            ],
            "on_CheckRun": [
                69
            ],
            "on_ClosedEvent": [
                94
            ],
            "on_Commit": [
                102
            ],
            "on_ConvertToDraftEvent": [
                126
            ],
            "on_CrossReferencedEvent": [
                178
            ],
            "on_Gist": [
                316
            ],
            "on_Issue": [
                354
            ],
            "on_Mannequin": [
                395
            ],
            "on_MergedEvent": [
                414
            ],
            "on_Milestone": [
                415
            ],
            "on_Organization": [
                478
            ],
            "on_PullRequest": [
                560
            ],
            "on_PullRequestCommit": [
                564
            ],
            "on_ReadyForReviewEvent": [
                615
            ],
            "on_Release": [
                648
            ],
            "on_Repository": [
                707
            ],
            "on_RepositoryTopic": [
                728
            ],
            "on_ReviewDismissedEvent": [
                750
            ],
            "on_TeamDiscussion": [
                834
            ],
            "on_TeamDiscussionComment": [
                835
            ],
            "on_User": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "UnknownSignature": {
            "email": [
                1
            ],
            "isValid": [
                48
            ],
            "payload": [
                1
            ],
            "signature": [
                1
            ],
            "signer": [
                979
            ],
            "state": [
                333
            ],
            "wasSignedByGitHub": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "UnlabeledEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "label": [
                374
            ],
            "labelable": [
                379
            ],
            "__typename": [
                1
            ]
        },
        "UnlinkRepositoryFromProjectInput": {
            "clientMutationId": [
                1
            ],
            "projectId": [
                2
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnlinkRepositoryFromProjectPayload": {
            "clientMutationId": [
                1
            ],
            "project": [
                537
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "UnlockLockableInput": {
            "clientMutationId": [
                1
            ],
            "lockableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnlockLockablePayload": {
            "actor": [
                7
            ],
            "clientMutationId": [
                1
            ],
            "unlockedRecord": [
                393
            ],
            "__typename": [
                1
            ]
        },
        "UnlockedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "lockable": [
                393
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkIssueAsDuplicateInput": {
            "canonicalId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "duplicateId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkIssueAsDuplicatePayload": {
            "clientMutationId": [
                1
            ],
            "duplicate": [
                362
            ],
            "__typename": [
                1
            ]
        },
        "UnmarkedAsDuplicateEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnminimizeCommentInput": {
            "clientMutationId": [
                1
            ],
            "subjectId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnminimizeCommentPayload": {
            "clientMutationId": [
                1
            ],
            "unminimizedComment": [
                423
            ],
            "__typename": [
                1
            ]
        },
        "UnpinIssueInput": {
            "clientMutationId": [
                1
            ],
            "issueId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnpinIssuePayload": {
            "clientMutationId": [
                1
            ],
            "issue": [
                354
            ],
            "__typename": [
                1
            ]
        },
        "UnpinnedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "issue": [
                354
            ],
            "__typename": [
                1
            ]
        },
        "UnresolveReviewThreadInput": {
            "clientMutationId": [
                1
            ],
            "threadId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UnresolveReviewThreadPayload": {
            "clientMutationId": [
                1
            ],
            "thread": [
                585
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribedEvent": {
            "actor": [
                7
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "subscribable": [
                823
            ],
            "__typename": [
                1
            ]
        },
        "Updatable": {
            "viewerCanUpdate": [
                48
            ],
            "on_CommitComment": [
                104
            ],
            "on_GistComment": [
                317
            ],
            "on_Issue": [
                354
            ],
            "on_IssueComment": [
                355
            ],
            "on_Project": [
                537
            ],
            "on_PullRequest": [
                560
            ],
            "on_PullRequestReview": [
                574
            ],
            "on_PullRequestReviewComment": [
                575
            ],
            "on_TeamDiscussion": [
                834
            ],
            "on_TeamDiscussionComment": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "UpdatableComment": {
            "viewerCannotUpdateReasons": [
                100
            ],
            "on_CommitComment": [
                104
            ],
            "on_GistComment": [
                317
            ],
            "on_Issue": [
                354
            ],
            "on_IssueComment": [
                355
            ],
            "on_PullRequest": [
                560
            ],
            "on_PullRequestReview": [
                574
            ],
            "on_PullRequestReviewComment": [
                575
            ],
            "on_TeamDiscussion": [
                834
            ],
            "on_TeamDiscussionComment": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "UpdateBranchProtectionRuleInput": {
            "branchProtectionRuleId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "dismissesStaleReviews": [
                48
            ],
            "isAdminEnforced": [
                48
            ],
            "pattern": [
                1
            ],
            "pushActorIds": [
                2
            ],
            "requiredApprovingReviewCount": [
                8
            ],
            "requiredStatusCheckContexts": [
                1
            ],
            "requiresApprovingReviews": [
                48
            ],
            "requiresCodeOwnerReviews": [
                48
            ],
            "requiresCommitSignatures": [
                48
            ],
            "requiresStatusChecks": [
                48
            ],
            "requiresStrictStatusChecks": [
                48
            ],
            "restrictsPushes": [
                48
            ],
            "restrictsReviewDismissals": [
                48
            ],
            "reviewDismissalActorIds": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateBranchProtectionRulePayload": {
            "branchProtectionRule": [
                50
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCheckRunInput": {
            "actions": [
                70
            ],
            "checkRunId": [
                2
            ],
            "clientMutationId": [
                1
            ],
            "completedAt": [
                180
            ],
            "conclusion": [
                68
            ],
            "detailsUrl": [
                874
            ],
            "externalId": [
                1
            ],
            "name": [
                1
            ],
            "output": [
                74
            ],
            "repositoryId": [
                2
            ],
            "startedAt": [
                180
            ],
            "status": [
                739
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCheckRunPayload": {
            "checkRun": [
                69
            ],
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCheckSuitePreferencesInput": {
            "autoTriggerPreferences": [
                79
            ],
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCheckSuitePreferencesPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseActionExecutionCapabilitySettingInput": {
            "capability": [
                6
            ],
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseActionExecutionCapabilitySettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseAdministratorRoleInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "login": [
                1
            ],
            "role": [
                251
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseAdministratorRolePayload": {
            "clientMutationId": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseDefaultRepositoryPermissionSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                255
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseDefaultRepositoryPermissionSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanCreateRepositoriesSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "membersCanCreateInternalRepositories": [
                48
            ],
            "membersCanCreatePrivateRepositories": [
                48
            ],
            "membersCanCreatePublicRepositories": [
                48
            ],
            "membersCanCreateRepositoriesPolicyEnabled": [
                48
            ],
            "settingValue": [
                264
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanDeleteIssuesSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanDeleteIssuesSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanMakePurchasesSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                265
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanMakePurchasesSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseOrganizationProjectsSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseOrganizationProjectsSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseProfileInput": {
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "location": [
                1
            ],
            "name": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseProfilePayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseRepositoryProjectsSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseRepositoryProjectsSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseTeamDiscussionsSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                256
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseTeamDiscussionsSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput": {
            "clientMutationId": [
                1
            ],
            "enterpriseId": [
                2
            ],
            "settingValue": [
                257
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload": {
            "clientMutationId": [
                1
            ],
            "enterprise": [
                243
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIpAllowListEnabledSettingInput": {
            "clientMutationId": [
                1
            ],
            "ownerId": [
                2
            ],
            "settingValue": [
                347
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIpAllowListEnabledSettingPayload": {
            "clientMutationId": [
                1
            ],
            "owner": [
                353
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIpAllowListEntryInput": {
            "allowListValue": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "ipAllowListEntryId": [
                2
            ],
            "isActive": [
                48
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIpAllowListEntryPayload": {
            "clientMutationId": [
                1
            ],
            "ipAllowListEntry": [
                348
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIssueCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIssueCommentPayload": {
            "clientMutationId": [
                1
            ],
            "issueComment": [
                355
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIssueInput": {
            "assigneeIds": [
                2
            ],
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "labelIds": [
                2
            ],
            "milestoneId": [
                2
            ],
            "projectIds": [
                2
            ],
            "state": [
                365
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateIssuePayload": {
            "actor": [
                7
            ],
            "clientMutationId": [
                1
            ],
            "issue": [
                354
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLabelInput": {
            "clientMutationId": [
                1
            ],
            "color": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                2
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLabelPayload": {
            "clientMutationId": [
                1
            ],
            "label": [
                374
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectCardInput": {
            "clientMutationId": [
                1
            ],
            "isArchived": [
                48
            ],
            "note": [
                1
            ],
            "projectCardId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectCardPayload": {
            "clientMutationId": [
                1
            ],
            "projectCard": [
                538
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectColumnInput": {
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "projectColumnId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectColumnPayload": {
            "clientMutationId": [
                1
            ],
            "projectColumn": [
                545
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "name": [
                1
            ],
            "projectId": [
                2
            ],
            "public": [
                48
            ],
            "state": [
                555
            ],
            "__typename": [
                1
            ]
        },
        "UpdateProjectPayload": {
            "clientMutationId": [
                1
            ],
            "project": [
                537
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestInput": {
            "assigneeIds": [
                2
            ],
            "baseRefName": [
                1
            ],
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "labelIds": [
                2
            ],
            "maintainerCanModify": [
                48
            ],
            "milestoneId": [
                2
            ],
            "projectIds": [
                2
            ],
            "pullRequestId": [
                2
            ],
            "state": [
                597
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestPayload": {
            "actor": [
                7
            ],
            "clientMutationId": [
                1
            ],
            "pullRequest": [
                560
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestReviewCommentInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "pullRequestReviewCommentId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestReviewCommentPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReviewComment": [
                575
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestReviewInput": {
            "body": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "pullRequestReviewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePullRequestReviewPayload": {
            "clientMutationId": [
                1
            ],
            "pullRequestReview": [
                574
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRefInput": {
            "clientMutationId": [
                1
            ],
            "force": [
                48
            ],
            "oid": [
                329
            ],
            "refId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRefPayload": {
            "clientMutationId": [
                1
            ],
            "ref": [
                616
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRefsInput": {
            "clientMutationId": [
                1
            ],
            "refUpdates": [
                621
            ],
            "repositoryId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRefsPayload": {
            "clientMutationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRepositoryInput": {
            "clientMutationId": [
                1
            ],
            "description": [
                1
            ],
            "hasIssuesEnabled": [
                48
            ],
            "hasProjectsEnabled": [
                48
            ],
            "hasWikiEnabled": [
                48
            ],
            "homepageUrl": [
                874
            ],
            "name": [
                1
            ],
            "repositoryId": [
                2
            ],
            "template": [
                48
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRepositoryPayload": {
            "clientMutationId": [
                1
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "UpdateSubscriptionInput": {
            "clientMutationId": [
                1
            ],
            "state": [
                825
            ],
            "subscribableId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateSubscriptionPayload": {
            "clientMutationId": [
                1
            ],
            "subscribable": [
                823
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamDiscussionCommentInput": {
            "body": [
                1
            ],
            "bodyVersion": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamDiscussionCommentPayload": {
            "clientMutationId": [
                1
            ],
            "teamDiscussionComment": [
                835
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamDiscussionInput": {
            "body": [
                1
            ],
            "bodyVersion": [
                1
            ],
            "clientMutationId": [
                1
            ],
            "id": [
                2
            ],
            "pinned": [
                48
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamDiscussionPayload": {
            "clientMutationId": [
                1
            ],
            "teamDiscussion": [
                834
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamReviewAssignmentInput": {
            "algorithm": [
                860
            ],
            "clientMutationId": [
                1
            ],
            "enabled": [
                48
            ],
            "excludedTeamMemberIds": [
                2
            ],
            "id": [
                2
            ],
            "notifyTeam": [
                48
            ],
            "teamMemberCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTeamReviewAssignmentPayload": {
            "clientMutationId": [
                1
            ],
            "team": [
                828
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTopicsInput": {
            "clientMutationId": [
                1
            ],
            "repositoryId": [
                2
            ],
            "topicNames": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTopicsPayload": {
            "clientMutationId": [
                1
            ],
            "invalidTopicNames": [
                1
            ],
            "repository": [
                707
            ],
            "__typename": [
                1
            ]
        },
        "User": {
            "anyPinnableItems": [
                48,
                {
                    "type": [
                        527
                    ]
                }
            ],
            "avatarUrl": [
                874,
                {
                    "size": [
                        8
                    ]
                }
            ],
            "bio": [
                1
            ],
            "bioHTML": [
                336
            ],
            "commitComments": [
                105,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "company": [
                1
            ],
            "companyHTML": [
                336
            ],
            "contributionsCollection": [
                123,
                {
                    "from": [
                        180
                    ],
                    "organizationID": [
                        2
                    ],
                    "to": [
                        180
                    ]
                }
            ],
            "createdAt": [
                180
            ],
            "databaseId": [
                8
            ],
            "email": [
                1
            ],
            "followers": [
                311,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "following": [
                312,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "gist": [
                316,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "gistComments": [
                318,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "gists": [
                320,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        323
                    ],
                    "privacy": [
                        325
                    ]
                }
            ],
            "hovercard": [
                340,
                {
                    "primarySubjectId": [
                        2
                    ]
                }
            ],
            "id": [
                2
            ],
            "isBountyHunter": [
                48
            ],
            "isCampusExpert": [
                48
            ],
            "isDeveloperProgramMember": [
                48
            ],
            "isEmployee": [
                48
            ],
            "isHireable": [
                48
            ],
            "isSiteAdmin": [
                48
            ],
            "isViewer": [
                48
            ],
            "issueComments": [
                356,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "issues": [
                358,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "filterBy": [
                        361
                    ],
                    "first": [
                        8
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        363
                    ],
                    "states": [
                        365,
                        "[IssueState!]"
                    ]
                }
            ],
            "itemShowcase": [
                535
            ],
            "location": [
                1
            ],
            "login": [
                1
            ],
            "name": [
                1
            ],
            "organization": [
                478,
                {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizationVerifiedDomainEmails": [
                1,
                {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            ],
            "organizations": [
                483,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "packages": [
                500,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "orderBy": [
                        507
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "pinnableItems": [
                525,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "types": [
                        527,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItems": [
                525,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "types": [
                        527,
                        "[PinnableItemType!]"
                    ]
                }
            ],
            "pinnedItemsRemaining": [
                8
            ],
            "project": [
                537,
                {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            ],
            "projects": [
                550,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        552
                    ],
                    "search": [
                        1
                    ],
                    "states": [
                        555,
                        "[ProjectState!]"
                    ]
                }
            ],
            "projectsResourcePath": [
                874
            ],
            "projectsUrl": [
                874
            ],
            "publicKeys": [
                558,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ]
                }
            ],
            "pullRequests": [
                568,
                {
                    "after": [
                        1
                    ],
                    "baseRefName": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "headRefName": [
                        1
                    ],
                    "labels": [
                        1,
                        "[String!]"
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        363
                    ],
                    "states": [
                        589,
                        "[PullRequestState!]"
                    ]
                }
            ],
            "registryPackages": [
                627,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "name": [
                        1
                    ],
                    "names": [
                        1,
                        "[String]"
                    ],
                    "packageType": [
                        643
                    ],
                    "publicOnly": [
                        48
                    ],
                    "registryPackageType": [
                        1
                    ],
                    "repositoryId": [
                        2
                    ]
                }
            ],
            "registryPackagesForQuery": [
                627,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "packageType": [
                        643
                    ],
                    "query": [
                        1
                    ]
                }
            ],
            "repositories": [
                712,
                {
                    "affiliations": [
                        708,
                        "[RepositoryAffiliation]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "isFork": [
                        48
                    ],
                    "isLocked": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        723
                    ],
                    "ownerAffiliations": [
                        708,
                        "[RepositoryAffiliation]"
                    ],
                    "privacy": [
                        727
                    ]
                }
            ],
            "repositoriesContributedTo": [
                712,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "contributionTypes": [
                        713,
                        "[RepositoryContributionType]"
                    ],
                    "first": [
                        8
                    ],
                    "includeUserRepositories": [
                        48
                    ],
                    "isLocked": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        723
                    ],
                    "privacy": [
                        727
                    ]
                }
            ],
            "repository": [
                707,
                {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resourcePath": [
                874
            ],
            "savedReplies": [
                760,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        762
                    ]
                }
            ],
            "sponsorsListing": [
                791
            ],
            "sponsorshipsAsMaintainer": [
                799,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "includePrivate": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        801
                    ]
                }
            ],
            "sponsorshipsAsSponsor": [
                799,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        801
                    ]
                }
            ],
            "starredRepositories": [
                809,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        804
                    ],
                    "ownedByViewer": [
                        48
                    ]
                }
            ],
            "status": [
                987
            ],
            "topRepositories": [
                712,
                {
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        723,
                        "RepositoryOrder!"
                    ],
                    "since": [
                        180
                    ]
                }
            ],
            "twitterUsername": [
                1
            ],
            "updatedAt": [
                180
            ],
            "url": [
                874
            ],
            "viewerCanChangePinnedItems": [
                48
            ],
            "viewerCanCreateProjects": [
                48
            ],
            "viewerCanFollow": [
                48
            ],
            "viewerIsFollowing": [
                48
            ],
            "watching": [
                712,
                {
                    "affiliations": [
                        708,
                        "[RepositoryAffiliation]"
                    ],
                    "after": [
                        1
                    ],
                    "before": [
                        1
                    ],
                    "first": [
                        8
                    ],
                    "isLocked": [
                        48
                    ],
                    "last": [
                        8
                    ],
                    "orderBy": [
                        723
                    ],
                    "ownerAffiliations": [
                        708,
                        "[RepositoryAffiliation]"
                    ],
                    "privacy": [
                        727
                    ]
                }
            ],
            "websiteUrl": [
                874
            ],
            "__typename": [
                1
            ]
        },
        "UserBlockDuration": {},
        "UserBlockedEvent": {
            "actor": [
                7
            ],
            "blockDuration": [
                980
            ],
            "createdAt": [
                180
            ],
            "id": [
                2
            ],
            "subject": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "UserConnection": {
            "edges": [
                986
            ],
            "nodes": [
                979
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "UserContentEdit": {
            "createdAt": [
                180
            ],
            "deletedAt": [
                180
            ],
            "deletedBy": [
                7
            ],
            "diff": [
                1
            ],
            "editedAt": [
                180
            ],
            "editor": [
                7
            ],
            "id": [
                2
            ],
            "updatedAt": [
                180
            ],
            "__typename": [
                1
            ]
        },
        "UserContentEditConnection": {
            "edges": [
                985
            ],
            "nodes": [
                983
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "UserContentEditEdge": {
            "cursor": [
                1
            ],
            "node": [
                983
            ],
            "__typename": [
                1
            ]
        },
        "UserEdge": {
            "cursor": [
                1
            ],
            "node": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "UserStatus": {
            "createdAt": [
                180
            ],
            "emoji": [
                1
            ],
            "emojiHTML": [
                336
            ],
            "expiresAt": [
                180
            ],
            "id": [
                2
            ],
            "indicatesLimitedAvailability": [
                48
            ],
            "message": [
                1
            ],
            "organization": [
                478
            ],
            "updatedAt": [
                180
            ],
            "user": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "UserStatusConnection": {
            "edges": [
                989
            ],
            "nodes": [
                987
            ],
            "pageInfo": [
                519
            ],
            "totalCount": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "UserStatusEdge": {
            "cursor": [
                1
            ],
            "node": [
                987
            ],
            "__typename": [
                1
            ]
        },
        "UserStatusOrder": {
            "direction": [
                437
            ],
            "field": [
                991
            ],
            "__typename": [
                1
            ]
        },
        "UserStatusOrderField": {},
        "ViewerHovercardContext": {
            "message": [
                1
            ],
            "octicon": [
                1
            ],
            "viewer": [
                979
            ],
            "__typename": [
                1
            ]
        },
        "X509Certificate": {}
    }
}