module.exports = {
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
            "clientMutationId": {
                "type": 1
            },
            "invitationId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "String": {},
        "ID": {},
        "AcceptEnterpriseAdministratorInvitationPayload": {
            "clientMutationId": {
                "type": 1
            },
            "invitation": {
                "type": 246
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "AcceptTopicSuggestionInput": {
            "clientMutationId": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "AcceptTopicSuggestionPayload": {
            "clientMutationId": {
                "type": 1
            },
            "topic": {
                "type": 864
            },
            "__typename": {
                "type": 1
            }
        },
        "ActionExecutionCapabilitySetting": {},
        "Actor": {
            "avatarUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "login": {
                "type": 1
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "on_Bot": {
                "type": 49
            },
            "on_EnterpriseUserAccount": {
                "type": 299
            },
            "on_Mannequin": {
                "type": 395
            },
            "on_Organization": {
                "type": 478
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "Int": {},
        "ActorLocation": {
            "city": {
                "type": 1
            },
            "country": {
                "type": 1
            },
            "countryCode": {
                "type": 1
            },
            "region": {
                "type": 1
            },
            "regionCode": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "AddAssigneesToAssignableInput": {
            "assignableId": {
                "type": 2
            },
            "assigneeIds": {
                "type": 2
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "AddAssigneesToAssignablePayload": {
            "assignable": {
                "type": 34
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "AddCommentInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "subjectId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "AddCommentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "commentEdge": {
                "type": 357
            },
            "subject": {
                "type": 432
            },
            "timelineEdge": {
                "type": 368
            },
            "__typename": {
                "type": 1
            }
        },
        "AddLabelsToLabelableInput": {
            "clientMutationId": {
                "type": 1
            },
            "labelIds": {
                "type": 2
            },
            "labelableId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "AddLabelsToLabelablePayload": {
            "clientMutationId": {
                "type": 1
            },
            "labelable": {
                "type": 379
            },
            "__typename": {
                "type": 1
            }
        },
        "AddProjectCardInput": {
            "clientMutationId": {
                "type": 1
            },
            "contentId": {
                "type": 2
            },
            "note": {
                "type": 1
            },
            "projectColumnId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "AddProjectCardPayload": {
            "cardEdge": {
                "type": 541
            },
            "clientMutationId": {
                "type": 1
            },
            "projectColumn": {
                "type": 545
            },
            "__typename": {
                "type": 1
            }
        },
        "AddProjectColumnInput": {
            "clientMutationId": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "projectId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "AddProjectColumnPayload": {
            "clientMutationId": {
                "type": 1
            },
            "columnEdge": {
                "type": 547
            },
            "project": {
                "type": 537
            },
            "__typename": {
                "type": 1
            }
        },
        "AddPullRequestReviewCommentInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "commitOID": {
                "type": 329
            },
            "inReplyTo": {
                "type": 2
            },
            "path": {
                "type": 1
            },
            "position": {
                "type": 8
            },
            "pullRequestId": {
                "type": 2
            },
            "pullRequestReviewId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "AddPullRequestReviewCommentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "comment": {
                "type": 575
            },
            "commentEdge": {
                "type": 577
            },
            "__typename": {
                "type": 1
            }
        },
        "AddPullRequestReviewInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "comments": {
                "type": 241
            },
            "commitOID": {
                "type": 329
            },
            "event": {
                "type": 583
            },
            "pullRequestId": {
                "type": 2
            },
            "threads": {
                "type": 242
            },
            "__typename": {
                "type": 1
            }
        },
        "AddPullRequestReviewPayload": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestReview": {
                "type": 574
            },
            "reviewEdge": {
                "type": 582
            },
            "__typename": {
                "type": 1
            }
        },
        "AddPullRequestReviewThreadInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "line": {
                "type": 8
            },
            "path": {
                "type": 1
            },
            "pullRequestReviewId": {
                "type": 2
            },
            "side": {
                "type": 237
            },
            "startLine": {
                "type": 8
            },
            "startSide": {
                "type": 237
            },
            "__typename": {
                "type": 1
            }
        },
        "AddPullRequestReviewThreadPayload": {
            "clientMutationId": {
                "type": 1
            },
            "thread": {
                "type": 585
            },
            "__typename": {
                "type": 1
            }
        },
        "AddReactionInput": {
            "clientMutationId": {
                "type": 1
            },
            "content": {
                "type": 610
            },
            "subjectId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "AddReactionPayload": {
            "clientMutationId": {
                "type": 1
            },
            "reaction": {
                "type": 608
            },
            "subject": {
                "type": 605
            },
            "__typename": {
                "type": 1
            }
        },
        "AddStarInput": {
            "clientMutationId": {
                "type": 1
            },
            "starrableId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "AddStarPayload": {
            "clientMutationId": {
                "type": 1
            },
            "starrable": {
                "type": 808
            },
            "__typename": {
                "type": 1
            }
        },
        "AddedToProjectEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "project": {
                "type": 537
            },
            "projectCard": {
                "type": 538
            },
            "projectColumnName": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "App": {
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "description": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "logoBackgroundColor": {
                "type": 1
            },
            "logoUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "name": {
                "type": 1
            },
            "slug": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "ArchiveRepositoryInput": {
            "clientMutationId": {
                "type": 1
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "ArchiveRepositoryPayload": {
            "clientMutationId": {
                "type": 1
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "Assignable": {
            "assignees": {
                "type": 982,
                "args": {
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
            },
            "on_Issue": {
                "type": 354
            },
            "on_PullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "AssignedEvent": {
            "actor": {
                "type": 7
            },
            "assignable": {
                "type": 34
            },
            "assignee": {
                "type": 36
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "Assignee": {
            "on_Bot": {
                "type": 49
            },
            "on_Mannequin": {
                "type": 395
            },
            "on_Organization": {
                "type": 478
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "AuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "operationType": {
                "type": 436
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "on_MembersCanDeleteReposClearAuditEntry": {
                "type": 404
            },
            "on_MembersCanDeleteReposDisableAuditEntry": {
                "type": 405
            },
            "on_MembersCanDeleteReposEnableAuditEntry": {
                "type": 406
            },
            "on_OauthApplicationCreateAuditEntry": {
                "type": 434
            },
            "on_OrgAddBillingManagerAuditEntry": {
                "type": 438
            },
            "on_OrgAddMemberAuditEntry": {
                "type": 439
            },
            "on_OrgBlockUserAuditEntry": {
                "type": 441
            },
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": {
                "type": 442
            },
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": {
                "type": 443
            },
            "on_OrgCreateAuditEntry": {
                "type": 444
            },
            "on_OrgDisableOauthAppRestrictionsAuditEntry": {
                "type": 446
            },
            "on_OrgDisableSamlAuditEntry": {
                "type": 447
            },
            "on_OrgDisableTwoFactorRequirementAuditEntry": {
                "type": 448
            },
            "on_OrgEnableOauthAppRestrictionsAuditEntry": {
                "type": 449
            },
            "on_OrgEnableSamlAuditEntry": {
                "type": 450
            },
            "on_OrgEnableTwoFactorRequirementAuditEntry": {
                "type": 451
            },
            "on_OrgInviteMemberAuditEntry": {
                "type": 452
            },
            "on_OrgInviteToBusinessAuditEntry": {
                "type": 453
            },
            "on_OrgOauthAppAccessApprovedAuditEntry": {
                "type": 454
            },
            "on_OrgOauthAppAccessDeniedAuditEntry": {
                "type": 455
            },
            "on_OrgOauthAppAccessRequestedAuditEntry": {
                "type": 456
            },
            "on_OrgRemoveBillingManagerAuditEntry": {
                "type": 457
            },
            "on_OrgRemoveMemberAuditEntry": {
                "type": 459
            },
            "on_OrgRemoveOutsideCollaboratorAuditEntry": {
                "type": 462
            },
            "on_OrgRestoreMemberAuditEntry": {
                "type": 465
            },
            "on_OrgUnblockUserAuditEntry": {
                "type": 470
            },
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": {
                "type": 471
            },
            "on_OrgUpdateMemberAuditEntry": {
                "type": 473
            },
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": {
                "type": 475
            },
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": {
                "type": 477
            },
            "on_PrivateRepositoryForkingDisableAuditEntry": {
                "type": 533
            },
            "on_PrivateRepositoryForkingEnableAuditEntry": {
                "type": 534
            },
            "on_RepoAccessAuditEntry": {
                "type": 680
            },
            "on_RepoAddMemberAuditEntry": {
                "type": 682
            },
            "on_RepoAddTopicAuditEntry": {
                "type": 684
            },
            "on_RepoArchivedAuditEntry": {
                "type": 685
            },
            "on_RepoChangeMergeSettingAuditEntry": {
                "type": 687
            },
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": {
                "type": 689
            },
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": {
                "type": 690
            },
            "on_RepoConfigDisableContributorsOnlyAuditEntry": {
                "type": 691
            },
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": {
                "type": 692
            },
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": {
                "type": 693
            },
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": {
                "type": 694
            },
            "on_RepoConfigEnableContributorsOnlyAuditEntry": {
                "type": 695
            },
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": {
                "type": 696
            },
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": {
                "type": 697
            },
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": {
                "type": 698
            },
            "on_RepoCreateAuditEntry": {
                "type": 699
            },
            "on_RepoDestroyAuditEntry": {
                "type": 701
            },
            "on_RepoRemoveMemberAuditEntry": {
                "type": 703
            },
            "on_RepoRemoveTopicAuditEntry": {
                "type": 705
            },
            "on_RepositoryVisibilityChangeDisableAuditEntry": {
                "type": 732
            },
            "on_RepositoryVisibilityChangeEnableAuditEntry": {
                "type": 733
            },
            "on_TeamAddMemberAuditEntry": {
                "type": 829
            },
            "on_TeamAddRepositoryAuditEntry": {
                "type": 830
            },
            "on_TeamChangeParentTeamAuditEntry": {
                "type": 832
            },
            "on_TeamRemoveMemberAuditEntry": {
                "type": 854
            },
            "on_TeamRemoveRepositoryAuditEntry": {
                "type": 855
            },
            "__typename": {
                "type": 1
            }
        },
        "AuditEntryActor": {
            "on_Bot": {
                "type": 49
            },
            "on_Organization": {
                "type": 478
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "AuditLogOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 40
            },
            "__typename": {
                "type": 1
            }
        },
        "AuditLogOrderField": {},
        "AutomaticBaseChangeFailedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "newBase": {
                "type": 1
            },
            "oldBase": {
                "type": 1
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "AutomaticBaseChangeSucceededEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "newBase": {
                "type": 1
            },
            "oldBase": {
                "type": 1
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "BaseRefChangedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "BaseRefForcePushedEvent": {
            "actor": {
                "type": 7
            },
            "afterCommit": {
                "type": 102
            },
            "beforeCommit": {
                "type": 102
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "ref": {
                "type": 616
            },
            "__typename": {
                "type": 1
            }
        },
        "Blame": {
            "ranges": {
                "type": 46
            },
            "__typename": {
                "type": 1
            }
        },
        "BlameRange": {
            "age": {
                "type": 8
            },
            "commit": {
                "type": 102
            },
            "endingLine": {
                "type": 8
            },
            "startingLine": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "Blob": {
            "abbreviatedOid": {
                "type": 1
            },
            "byteSize": {
                "type": 8
            },
            "commitResourcePath": {
                "type": 874
            },
            "commitUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "isBinary": {
                "type": 48
            },
            "isTruncated": {
                "type": 48
            },
            "oid": {
                "type": 329
            },
            "repository": {
                "type": 707
            },
            "text": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "Boolean": {},
        "Bot": {
            "avatarUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "login": {
                "type": 1
            },
            "resourcePath": {
                "type": 874
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "BranchProtectionRule": {
            "branchProtectionRuleConflicts": {
                "type": 52,
                "args": {
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
            },
            "creator": {
                "type": 7
            },
            "databaseId": {
                "type": 8
            },
            "dismissesStaleReviews": {
                "type": 48
            },
            "id": {
                "type": 2
            },
            "isAdminEnforced": {
                "type": 48
            },
            "matchingRefs": {
                "type": 617,
                "args": {
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
            },
            "pattern": {
                "type": 1
            },
            "pushAllowances": {
                "type": 601,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "requiredApprovingReviewCount": {
                "type": 8
            },
            "requiredStatusCheckContexts": {
                "type": 1
            },
            "requiresApprovingReviews": {
                "type": 48
            },
            "requiresCodeOwnerReviews": {
                "type": 48
            },
            "requiresCommitSignatures": {
                "type": 48
            },
            "requiresStatusChecks": {
                "type": 48
            },
            "requiresStrictStatusChecks": {
                "type": 48
            },
            "restrictsPushes": {
                "type": 48
            },
            "restrictsReviewDismissals": {
                "type": 48
            },
            "reviewDismissalAllowances": {
                "type": 748,
                "args": {
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
            },
            "__typename": {
                "type": 1
            }
        },
        "BranchProtectionRuleConflict": {
            "branchProtectionRule": {
                "type": 50
            },
            "conflictingBranchProtectionRule": {
                "type": 50
            },
            "ref": {
                "type": 616
            },
            "__typename": {
                "type": 1
            }
        },
        "BranchProtectionRuleConflictConnection": {
            "edges": {
                "type": 53
            },
            "nodes": {
                "type": 51
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "BranchProtectionRuleConflictEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 51
            },
            "__typename": {
                "type": 1
            }
        },
        "BranchProtectionRuleConnection": {
            "edges": {
                "type": 55
            },
            "nodes": {
                "type": 50
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "BranchProtectionRuleEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 50
            },
            "__typename": {
                "type": 1
            }
        },
        "CancelEnterpriseAdminInvitationInput": {
            "clientMutationId": {
                "type": 1
            },
            "invitationId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "CancelEnterpriseAdminInvitationPayload": {
            "clientMutationId": {
                "type": 1
            },
            "invitation": {
                "type": 246
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "ChangeUserStatusInput": {
            "clientMutationId": {
                "type": 1
            },
            "emoji": {
                "type": 1
            },
            "expiresAt": {
                "type": 180
            },
            "limitedAvailability": {
                "type": 48
            },
            "message": {
                "type": 1
            },
            "organizationId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "ChangeUserStatusPayload": {
            "clientMutationId": {
                "type": 1
            },
            "status": {
                "type": 987
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckAnnotation": {
            "annotationLevel": {
                "type": 64
            },
            "blobUrl": {
                "type": 874
            },
            "databaseId": {
                "type": 8
            },
            "location": {
                "type": 67
            },
            "message": {
                "type": 1
            },
            "path": {
                "type": 1
            },
            "rawDetails": {
                "type": 1
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckAnnotationConnection": {
            "edges": {
                "type": 63
            },
            "nodes": {
                "type": 60
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckAnnotationData": {
            "annotationLevel": {
                "type": 64
            },
            "location": {
                "type": 66
            },
            "message": {
                "type": 1
            },
            "path": {
                "type": 1
            },
            "rawDetails": {
                "type": 1
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckAnnotationEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 60
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckAnnotationLevel": {},
        "CheckAnnotationPosition": {
            "column": {
                "type": 8
            },
            "line": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckAnnotationRange": {
            "endColumn": {
                "type": 8
            },
            "endLine": {
                "type": 8
            },
            "startColumn": {
                "type": 8
            },
            "startLine": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckAnnotationSpan": {
            "end": {
                "type": 65
            },
            "start": {
                "type": 65
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckConclusionState": {},
        "CheckRun": {
            "annotations": {
                "type": 61,
                "args": {
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
            },
            "checkSuite": {
                "type": 78
            },
            "completedAt": {
                "type": 180
            },
            "conclusion": {
                "type": 68
            },
            "databaseId": {
                "type": 8
            },
            "detailsUrl": {
                "type": 874
            },
            "externalId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "permalink": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "startedAt": {
                "type": 180
            },
            "status": {
                "type": 77
            },
            "summary": {
                "type": 1
            },
            "text": {
                "type": 1
            },
            "title": {
                "type": 1
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckRunAction": {
            "description": {
                "type": 1
            },
            "identifier": {
                "type": 1
            },
            "label": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckRunConnection": {
            "edges": {
                "type": 72
            },
            "nodes": {
                "type": 69
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckRunEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 69
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckRunFilter": {
            "appId": {
                "type": 8
            },
            "checkName": {
                "type": 1
            },
            "checkType": {
                "type": 76
            },
            "status": {
                "type": 77
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckRunOutput": {
            "annotations": {
                "type": 62
            },
            "images": {
                "type": 75
            },
            "summary": {
                "type": 1
            },
            "text": {
                "type": 1
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckRunOutputImage": {
            "alt": {
                "type": 1
            },
            "caption": {
                "type": 1
            },
            "imageUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckRunType": {},
        "CheckStatusState": {},
        "CheckSuite": {
            "app": {
                "type": 31
            },
            "branch": {
                "type": 616
            },
            "checkRuns": {
                "type": 71,
                "args": {
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
            },
            "commit": {
                "type": 102
            },
            "conclusion": {
                "type": 68
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "matchingPullRequests": {
                "type": 568,
                "args": {
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
            },
            "push": {
                "type": 598
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "status": {
                "type": 77
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckSuiteAutoTriggerPreference": {
            "appId": {
                "type": 2
            },
            "setting": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckSuiteConnection": {
            "edges": {
                "type": 81
            },
            "nodes": {
                "type": 78
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckSuiteEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 78
            },
            "__typename": {
                "type": 1
            }
        },
        "CheckSuiteFilter": {
            "appId": {
                "type": 8
            },
            "checkName": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "ClearLabelsFromLabelableInput": {
            "clientMutationId": {
                "type": 1
            },
            "labelableId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "ClearLabelsFromLabelablePayload": {
            "clientMutationId": {
                "type": 1
            },
            "labelable": {
                "type": 379
            },
            "__typename": {
                "type": 1
            }
        },
        "CloneProjectInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "includeWorkflows": {
                "type": 48
            },
            "name": {
                "type": 1
            },
            "public": {
                "type": 48
            },
            "sourceId": {
                "type": 2
            },
            "targetOwnerId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "CloneProjectPayload": {
            "clientMutationId": {
                "type": 1
            },
            "jobStatusId": {
                "type": 1
            },
            "project": {
                "type": 537
            },
            "__typename": {
                "type": 1
            }
        },
        "CloneTemplateRepositoryInput": {
            "clientMutationId": {
                "type": 1
            },
            "description": {
                "type": 1
            },
            "includeAllBranches": {
                "type": 48
            },
            "name": {
                "type": 1
            },
            "ownerId": {
                "type": 2
            },
            "repositoryId": {
                "type": 2
            },
            "visibility": {
                "type": 731
            },
            "__typename": {
                "type": 1
            }
        },
        "CloneTemplateRepositoryPayload": {
            "clientMutationId": {
                "type": 1
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "Closable": {
            "closed": {
                "type": 48
            },
            "closedAt": {
                "type": 180
            },
            "on_Issue": {
                "type": 354
            },
            "on_Milestone": {
                "type": 415
            },
            "on_Project": {
                "type": 537
            },
            "on_PullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "CloseIssueInput": {
            "clientMutationId": {
                "type": 1
            },
            "issueId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "CloseIssuePayload": {
            "clientMutationId": {
                "type": 1
            },
            "issue": {
                "type": 354
            },
            "__typename": {
                "type": 1
            }
        },
        "ClosePullRequestInput": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "ClosePullRequestPayload": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "ClosedEvent": {
            "actor": {
                "type": 7
            },
            "closable": {
                "type": 89
            },
            "closer": {
                "type": 95
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "Closer": {
            "on_Commit": {
                "type": 102
            },
            "on_PullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "CodeOfConduct": {
            "body": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "key": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "CollaboratorAffiliation": {},
        "Comment": {
            "author": {
                "type": 7
            },
            "authorAssociation": {
                "type": 99
            },
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "bodyText": {
                "type": 1
            },
            "createdAt": {
                "type": 180
            },
            "createdViaEmail": {
                "type": 48
            },
            "editor": {
                "type": 7
            },
            "id": {
                "type": 2
            },
            "includesCreatedEdit": {
                "type": 48
            },
            "lastEditedAt": {
                "type": 180
            },
            "publishedAt": {
                "type": 180
            },
            "updatedAt": {
                "type": 180
            },
            "userContentEdits": {
                "type": 984,
                "args": {
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
            },
            "viewerDidAuthor": {
                "type": 48
            },
            "on_CommitComment": {
                "type": 104
            },
            "on_GistComment": {
                "type": 317
            },
            "on_Issue": {
                "type": 354
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_PullRequest": {
                "type": 560
            },
            "on_PullRequestReview": {
                "type": 574
            },
            "on_PullRequestReviewComment": {
                "type": 575
            },
            "on_TeamDiscussion": {
                "type": 834
            },
            "on_TeamDiscussionComment": {
                "type": 835
            },
            "__typename": {
                "type": 1
            }
        },
        "CommentAuthorAssociation": {},
        "CommentCannotUpdateReason": {},
        "CommentDeletedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "Commit": {
            "abbreviatedOid": {
                "type": 1
            },
            "additions": {
                "type": 8
            },
            "associatedPullRequests": {
                "type": 568,
                "args": {
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
            },
            "author": {
                "type": 326
            },
            "authoredByCommitter": {
                "type": 48
            },
            "authoredDate": {
                "type": 180
            },
            "blame": {
                "type": 45,
                "args": {
                    "path": [
                        1,
                        "String!"
                    ]
                }
            },
            "changedFiles": {
                "type": 8
            },
            "checkSuites": {
                "type": 80,
                "args": {
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
            },
            "comments": {
                "type": 105,
                "args": {
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
            },
            "commitResourcePath": {
                "type": 874
            },
            "commitUrl": {
                "type": 874
            },
            "committedDate": {
                "type": 180
            },
            "committedViaWeb": {
                "type": 48
            },
            "committer": {
                "type": 326
            },
            "deletions": {
                "type": 8
            },
            "deployments": {
                "type": 227,
                "args": {
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
            },
            "history": {
                "type": 113,
                "args": {
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
            },
            "id": {
                "type": 2
            },
            "message": {
                "type": 1
            },
            "messageBody": {
                "type": 1
            },
            "messageBodyHTML": {
                "type": 336
            },
            "messageHeadline": {
                "type": 1
            },
            "messageHeadlineHTML": {
                "type": 336
            },
            "oid": {
                "type": 329
            },
            "onBehalfOf": {
                "type": 478
            },
            "parents": {
                "type": 108,
                "args": {
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
            },
            "pushedDate": {
                "type": 180
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "signature": {
                "type": 332
            },
            "status": {
                "type": 811
            },
            "statusCheckRollup": {
                "type": 812
            },
            "submodules": {
                "type": 821,
                "args": {
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
            },
            "tarballUrl": {
                "type": 874
            },
            "tree": {
                "type": 872
            },
            "treeResourcePath": {
                "type": 874
            },
            "treeUrl": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "viewerCanSubscribe": {
                "type": 48
            },
            "viewerSubscription": {
                "type": 825
            },
            "zipballUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "CommitAuthor": {
            "emails": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "CommitComment": {
            "author": {
                "type": 7
            },
            "authorAssociation": {
                "type": 99
            },
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "bodyText": {
                "type": 1
            },
            "commit": {
                "type": 102
            },
            "createdAt": {
                "type": 180
            },
            "createdViaEmail": {
                "type": 48
            },
            "databaseId": {
                "type": 8
            },
            "editor": {
                "type": 7
            },
            "id": {
                "type": 2
            },
            "includesCreatedEdit": {
                "type": 48
            },
            "isMinimized": {
                "type": 48
            },
            "lastEditedAt": {
                "type": 180
            },
            "minimizedReason": {
                "type": 1
            },
            "path": {
                "type": 1
            },
            "position": {
                "type": 8
            },
            "publishedAt": {
                "type": 180
            },
            "reactionGroups": {
                "type": 612
            },
            "reactions": {
                "type": 609,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "userContentEdits": {
                "type": 984,
                "args": {
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
            },
            "viewerCanDelete": {
                "type": 48
            },
            "viewerCanMinimize": {
                "type": 48
            },
            "viewerCanReact": {
                "type": 48
            },
            "viewerCanUpdate": {
                "type": 48
            },
            "viewerCannotUpdateReasons": {
                "type": 100
            },
            "viewerDidAuthor": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "CommitCommentConnection": {
            "edges": {
                "type": 106
            },
            "nodes": {
                "type": 104
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CommitCommentEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 104
            },
            "__typename": {
                "type": 1
            }
        },
        "CommitCommentThread": {
            "comments": {
                "type": 105,
                "args": {
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
            },
            "commit": {
                "type": 102
            },
            "id": {
                "type": 2
            },
            "path": {
                "type": 1
            },
            "position": {
                "type": 8
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "CommitConnection": {
            "edges": {
                "type": 112
            },
            "nodes": {
                "type": 102
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CommitContributionOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 110
            },
            "__typename": {
                "type": 1
            }
        },
        "CommitContributionOrderField": {},
        "CommitContributionsByRepository": {
            "contributions": {
                "type": 161,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "CommitEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 102
            },
            "__typename": {
                "type": 1
            }
        },
        "CommitHistoryConnection": {
            "edges": {
                "type": 112
            },
            "nodes": {
                "type": 102
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ConnectedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "isCrossRepository": {
                "type": 48
            },
            "source": {
                "type": 623
            },
            "subject": {
                "type": 623
            },
            "__typename": {
                "type": 1
            }
        },
        "ContentAttachment": {
            "body": {
                "type": 1
            },
            "contentReference": {
                "type": 116
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "ContentReference": {
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "reference": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "Contribution": {
            "isRestricted": {
                "type": 48
            },
            "occurredAt": {
                "type": 180
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "on_CreatedCommitContribution": {
                "type": 160
            },
            "on_CreatedIssueContribution": {
                "type": 163
            },
            "on_CreatedPullRequestContribution": {
                "type": 167
            },
            "on_CreatedPullRequestReviewContribution": {
                "type": 171
            },
            "on_CreatedRepositoryContribution": {
                "type": 174
            },
            "on_JoinedGitHubContribution": {
                "type": 373
            },
            "on_RestrictedContribution": {
                "type": 745
            },
            "__typename": {
                "type": 1
            }
        },
        "ContributionCalendar": {
            "colors": {
                "type": 1
            },
            "isHalloween": {
                "type": 48
            },
            "months": {
                "type": 120
            },
            "totalContributions": {
                "type": 8
            },
            "weeks": {
                "type": 121
            },
            "__typename": {
                "type": 1
            }
        },
        "ContributionCalendarDay": {
            "color": {
                "type": 1
            },
            "contributionCount": {
                "type": 8
            },
            "date": {
                "type": 179
            },
            "weekday": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ContributionCalendarMonth": {
            "firstDay": {
                "type": 179
            },
            "name": {
                "type": 1
            },
            "totalWeeks": {
                "type": 8
            },
            "year": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ContributionCalendarWeek": {
            "contributionDays": {
                "type": 119
            },
            "firstDay": {
                "type": 179
            },
            "__typename": {
                "type": 1
            }
        },
        "ContributionOrder": {
            "direction": {
                "type": 437
            },
            "__typename": {
                "type": 1
            }
        },
        "ContributionsCollection": {
            "commitContributionsByRepository": {
                "type": 111,
                "args": {
                    "maxRepositories": [
                        8
                    ]
                }
            },
            "contributionCalendar": {
                "type": 118
            },
            "contributionYears": {
                "type": 8
            },
            "doesEndInCurrentMonth": {
                "type": 48
            },
            "earliestRestrictedContributionDate": {
                "type": 179
            },
            "endedAt": {
                "type": 180
            },
            "firstIssueContribution": {
                "type": 166
            },
            "firstPullRequestContribution": {
                "type": 170
            },
            "firstRepositoryContribution": {
                "type": 177
            },
            "hasActivityInThePast": {
                "type": 48
            },
            "hasAnyContributions": {
                "type": 48
            },
            "hasAnyRestrictedContributions": {
                "type": 48
            },
            "isSingleDay": {
                "type": 48
            },
            "issueContributions": {
                "type": 164,
                "args": {
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
            },
            "issueContributionsByRepository": {
                "type": 359,
                "args": {
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
            },
            "joinedGitHubContribution": {
                "type": 373
            },
            "latestRestrictedContributionDate": {
                "type": 179
            },
            "mostRecentCollectionWithActivity": {
                "type": 123
            },
            "mostRecentCollectionWithoutActivity": {
                "type": 123
            },
            "popularIssueContribution": {
                "type": 163
            },
            "popularPullRequestContribution": {
                "type": 167
            },
            "pullRequestContributions": {
                "type": 168,
                "args": {
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
            },
            "pullRequestContributionsByRepository": {
                "type": 569,
                "args": {
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
            },
            "pullRequestReviewContributions": {
                "type": 172,
                "args": {
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
            },
            "pullRequestReviewContributionsByRepository": {
                "type": 580,
                "args": {
                    "maxRepositories": [
                        8
                    ]
                }
            },
            "repositoryContributions": {
                "type": 175,
                "args": {
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
            },
            "restrictedContributionsCount": {
                "type": 8
            },
            "startedAt": {
                "type": 180
            },
            "totalCommitContributions": {
                "type": 8
            },
            "totalIssueContributions": {
                "type": 8,
                "args": {
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ]
                }
            },
            "totalPullRequestContributions": {
                "type": 8,
                "args": {
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ]
                }
            },
            "totalPullRequestReviewContributions": {
                "type": 8
            },
            "totalRepositoriesWithContributedCommits": {
                "type": 8
            },
            "totalRepositoriesWithContributedIssues": {
                "type": 8,
                "args": {
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ]
                }
            },
            "totalRepositoriesWithContributedPullRequestReviews": {
                "type": 8
            },
            "totalRepositoriesWithContributedPullRequests": {
                "type": 8,
                "args": {
                    "excludeFirst": [
                        48
                    ],
                    "excludePopular": [
                        48
                    ]
                }
            },
            "totalRepositoryContributions": {
                "type": 8,
                "args": {
                    "excludeFirst": [
                        48
                    ]
                }
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "ConvertProjectCardNoteToIssueInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "projectCardId": {
                "type": 2
            },
            "repositoryId": {
                "type": 2
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "ConvertProjectCardNoteToIssuePayload": {
            "clientMutationId": {
                "type": 1
            },
            "projectCard": {
                "type": 538
            },
            "__typename": {
                "type": 1
            }
        },
        "ConvertToDraftEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "ConvertedNoteToIssueEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "project": {
                "type": 537
            },
            "projectCard": {
                "type": 538
            },
            "projectColumnName": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateBranchProtectionRuleInput": {
            "clientMutationId": {
                "type": 1
            },
            "dismissesStaleReviews": {
                "type": 48
            },
            "isAdminEnforced": {
                "type": 48
            },
            "pattern": {
                "type": 1
            },
            "pushActorIds": {
                "type": 2
            },
            "repositoryId": {
                "type": 2
            },
            "requiredApprovingReviewCount": {
                "type": 8
            },
            "requiredStatusCheckContexts": {
                "type": 1
            },
            "requiresApprovingReviews": {
                "type": 48
            },
            "requiresCodeOwnerReviews": {
                "type": 48
            },
            "requiresCommitSignatures": {
                "type": 48
            },
            "requiresStatusChecks": {
                "type": 48
            },
            "requiresStrictStatusChecks": {
                "type": 48
            },
            "restrictsPushes": {
                "type": 48
            },
            "restrictsReviewDismissals": {
                "type": 48
            },
            "reviewDismissalActorIds": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateBranchProtectionRulePayload": {
            "branchProtectionRule": {
                "type": 50
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateCheckRunInput": {
            "actions": {
                "type": 70
            },
            "clientMutationId": {
                "type": 1
            },
            "completedAt": {
                "type": 180
            },
            "conclusion": {
                "type": 68
            },
            "detailsUrl": {
                "type": 874
            },
            "externalId": {
                "type": 1
            },
            "headSha": {
                "type": 329
            },
            "name": {
                "type": 1
            },
            "output": {
                "type": 74
            },
            "repositoryId": {
                "type": 2
            },
            "startedAt": {
                "type": 180
            },
            "status": {
                "type": 739
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateCheckRunPayload": {
            "checkRun": {
                "type": 69
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateCheckSuiteInput": {
            "clientMutationId": {
                "type": 1
            },
            "headSha": {
                "type": 329
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateCheckSuitePayload": {
            "checkSuite": {
                "type": 78
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateContentAttachmentInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "contentReferenceId": {
                "type": 2
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateContentAttachmentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "contentAttachment": {
                "type": 115
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateDeploymentInput": {
            "autoMerge": {
                "type": 48
            },
            "clientMutationId": {
                "type": 1
            },
            "description": {
                "type": 1
            },
            "environment": {
                "type": 1
            },
            "payload": {
                "type": 1
            },
            "refId": {
                "type": 2
            },
            "repositoryId": {
                "type": 2
            },
            "requiredContexts": {
                "type": 1
            },
            "task": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateDeploymentPayload": {
            "autoMerged": {
                "type": 48
            },
            "clientMutationId": {
                "type": 1
            },
            "deployment": {
                "type": 226
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateDeploymentStatusInput": {
            "autoInactive": {
                "type": 48
            },
            "clientMutationId": {
                "type": 1
            },
            "deploymentId": {
                "type": 2
            },
            "description": {
                "type": 1
            },
            "environment": {
                "type": 1
            },
            "environmentUrl": {
                "type": 1
            },
            "logUrl": {
                "type": 1
            },
            "state": {
                "type": 236
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateDeploymentStatusPayload": {
            "clientMutationId": {
                "type": 1
            },
            "deploymentStatus": {
                "type": 233
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateEnterpriseOrganizationInput": {
            "adminLogins": {
                "type": 1
            },
            "billingEmail": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "login": {
                "type": 1
            },
            "profileName": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateEnterpriseOrganizationPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "organization": {
                "type": 478
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateIpAllowListEntryInput": {
            "allowListValue": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "isActive": {
                "type": 48
            },
            "name": {
                "type": 1
            },
            "ownerId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateIpAllowListEntryPayload": {
            "clientMutationId": {
                "type": 1
            },
            "ipAllowListEntry": {
                "type": 348
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateIssueInput": {
            "assigneeIds": {
                "type": 2
            },
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "labelIds": {
                "type": 2
            },
            "milestoneId": {
                "type": 2
            },
            "projectIds": {
                "type": 2
            },
            "repositoryId": {
                "type": 2
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateIssuePayload": {
            "clientMutationId": {
                "type": 1
            },
            "issue": {
                "type": 354
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateLabelInput": {
            "clientMutationId": {
                "type": 1
            },
            "color": {
                "type": 1
            },
            "description": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateLabelPayload": {
            "clientMutationId": {
                "type": 1
            },
            "label": {
                "type": 374
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateProjectInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "ownerId": {
                "type": 2
            },
            "repositoryIds": {
                "type": 2
            },
            "template": {
                "type": 556
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateProjectPayload": {
            "clientMutationId": {
                "type": 1
            },
            "project": {
                "type": 537
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatePullRequestInput": {
            "baseRefName": {
                "type": 1
            },
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "draft": {
                "type": 48
            },
            "headRefName": {
                "type": 1
            },
            "maintainerCanModify": {
                "type": 48
            },
            "repositoryId": {
                "type": 2
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatePullRequestPayload": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateRefInput": {
            "clientMutationId": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "oid": {
                "type": 329
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateRefPayload": {
            "clientMutationId": {
                "type": 1
            },
            "ref": {
                "type": 616
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateRepositoryInput": {
            "clientMutationId": {
                "type": 1
            },
            "description": {
                "type": 1
            },
            "hasIssuesEnabled": {
                "type": 48
            },
            "hasWikiEnabled": {
                "type": 48
            },
            "homepageUrl": {
                "type": 874
            },
            "name": {
                "type": 1
            },
            "ownerId": {
                "type": 2
            },
            "teamId": {
                "type": 2
            },
            "template": {
                "type": 48
            },
            "visibility": {
                "type": 731
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateRepositoryPayload": {
            "clientMutationId": {
                "type": 1
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateTeamDiscussionCommentInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "discussionId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateTeamDiscussionCommentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "teamDiscussionComment": {
                "type": 835
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateTeamDiscussionInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "private": {
                "type": 48
            },
            "teamId": {
                "type": 2
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "CreateTeamDiscussionPayload": {
            "clientMutationId": {
                "type": 1
            },
            "teamDiscussion": {
                "type": 834
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedCommitContribution": {
            "commitCount": {
                "type": 8
            },
            "isRestricted": {
                "type": 48
            },
            "occurredAt": {
                "type": 180
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedCommitContributionConnection": {
            "edges": {
                "type": 162
            },
            "nodes": {
                "type": 160
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedCommitContributionEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 160
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedIssueContribution": {
            "isRestricted": {
                "type": 48
            },
            "issue": {
                "type": 354
            },
            "occurredAt": {
                "type": 180
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedIssueContributionConnection": {
            "edges": {
                "type": 165
            },
            "nodes": {
                "type": 163
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedIssueContributionEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 163
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedIssueOrRestrictedContribution": {
            "on_CreatedIssueContribution": {
                "type": 163
            },
            "on_RestrictedContribution": {
                "type": 745
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedPullRequestContribution": {
            "isRestricted": {
                "type": 48
            },
            "occurredAt": {
                "type": 180
            },
            "pullRequest": {
                "type": 560
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedPullRequestContributionConnection": {
            "edges": {
                "type": 169
            },
            "nodes": {
                "type": 167
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedPullRequestContributionEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 167
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedPullRequestOrRestrictedContribution": {
            "on_CreatedPullRequestContribution": {
                "type": 167
            },
            "on_RestrictedContribution": {
                "type": 745
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedPullRequestReviewContribution": {
            "isRestricted": {
                "type": 48
            },
            "occurredAt": {
                "type": 180
            },
            "pullRequest": {
                "type": 560
            },
            "pullRequestReview": {
                "type": 574
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedPullRequestReviewContributionConnection": {
            "edges": {
                "type": 173
            },
            "nodes": {
                "type": 171
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedPullRequestReviewContributionEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 171
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedRepositoryContribution": {
            "isRestricted": {
                "type": 48
            },
            "occurredAt": {
                "type": 180
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedRepositoryContributionConnection": {
            "edges": {
                "type": 176
            },
            "nodes": {
                "type": 174
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedRepositoryContributionEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 174
            },
            "__typename": {
                "type": 1
            }
        },
        "CreatedRepositoryOrRestrictedContribution": {
            "on_CreatedRepositoryContribution": {
                "type": 174
            },
            "on_RestrictedContribution": {
                "type": 745
            },
            "__typename": {
                "type": 1
            }
        },
        "CrossReferencedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "isCrossRepository": {
                "type": 48
            },
            "referencedAt": {
                "type": 180
            },
            "resourcePath": {
                "type": 874
            },
            "source": {
                "type": 623
            },
            "target": {
                "type": 623
            },
            "url": {
                "type": 874
            },
            "willCloseTarget": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "Date": {},
        "DateTime": {},
        "DeclineTopicSuggestionInput": {
            "clientMutationId": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "reason": {
                "type": 868
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeclineTopicSuggestionPayload": {
            "clientMutationId": {
                "type": 1
            },
            "topic": {
                "type": 864
            },
            "__typename": {
                "type": 1
            }
        },
        "DefaultRepositoryPermissionField": {},
        "Deletable": {
            "viewerCanDelete": {
                "type": 48
            },
            "on_CommitComment": {
                "type": 104
            },
            "on_GistComment": {
                "type": 317
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_PullRequestReview": {
                "type": 574
            },
            "on_PullRequestReviewComment": {
                "type": 575
            },
            "on_TeamDiscussion": {
                "type": 834
            },
            "on_TeamDiscussionComment": {
                "type": 835
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteBranchProtectionRuleInput": {
            "branchProtectionRuleId": {
                "type": 2
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteBranchProtectionRulePayload": {
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteDeploymentInput": {
            "clientMutationId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteDeploymentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteIpAllowListEntryInput": {
            "clientMutationId": {
                "type": 1
            },
            "ipAllowListEntryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteIpAllowListEntryPayload": {
            "clientMutationId": {
                "type": 1
            },
            "ipAllowListEntry": {
                "type": 348
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteIssueCommentInput": {
            "clientMutationId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteIssueCommentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteIssueInput": {
            "clientMutationId": {
                "type": 1
            },
            "issueId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteIssuePayload": {
            "clientMutationId": {
                "type": 1
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteLabelInput": {
            "clientMutationId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteLabelPayload": {
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "DeletePackageVersionInput": {
            "clientMutationId": {
                "type": 1
            },
            "packageVersionId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeletePackageVersionPayload": {
            "clientMutationId": {
                "type": 1
            },
            "success": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteProjectCardInput": {
            "cardId": {
                "type": 2
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteProjectCardPayload": {
            "clientMutationId": {
                "type": 1
            },
            "column": {
                "type": 545
            },
            "deletedCardId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteProjectColumnInput": {
            "clientMutationId": {
                "type": 1
            },
            "columnId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteProjectColumnPayload": {
            "clientMutationId": {
                "type": 1
            },
            "deletedColumnId": {
                "type": 2
            },
            "project": {
                "type": 537
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteProjectInput": {
            "clientMutationId": {
                "type": 1
            },
            "projectId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteProjectPayload": {
            "clientMutationId": {
                "type": 1
            },
            "owner": {
                "type": 554
            },
            "__typename": {
                "type": 1
            }
        },
        "DeletePullRequestReviewCommentInput": {
            "clientMutationId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeletePullRequestReviewCommentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestReview": {
                "type": 574
            },
            "__typename": {
                "type": 1
            }
        },
        "DeletePullRequestReviewInput": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestReviewId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeletePullRequestReviewPayload": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestReview": {
                "type": 574
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteRefInput": {
            "clientMutationId": {
                "type": 1
            },
            "refId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteRefPayload": {
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteTeamDiscussionCommentInput": {
            "clientMutationId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteTeamDiscussionCommentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteTeamDiscussionInput": {
            "clientMutationId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DeleteTeamDiscussionPayload": {
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "DemilestonedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "milestoneTitle": {
                "type": 1
            },
            "subject": {
                "type": 418
            },
            "__typename": {
                "type": 1
            }
        },
        "DependencyGraphDependency": {
            "hasDependencies": {
                "type": 48
            },
            "packageManager": {
                "type": 1
            },
            "packageName": {
                "type": 1
            },
            "repository": {
                "type": 707
            },
            "requirements": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "DependencyGraphDependencyConnection": {
            "edges": {
                "type": 218
            },
            "nodes": {
                "type": 216
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "DependencyGraphDependencyEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 216
            },
            "__typename": {
                "type": 1
            }
        },
        "DependencyGraphManifest": {
            "blobPath": {
                "type": 1
            },
            "dependencies": {
                "type": 217,
                "args": {
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
            },
            "dependenciesCount": {
                "type": 8
            },
            "exceedsMaxSize": {
                "type": 48
            },
            "filename": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "parseable": {
                "type": 48
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "DependencyGraphManifestConnection": {
            "edges": {
                "type": 221
            },
            "nodes": {
                "type": 219
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "DependencyGraphManifestEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 219
            },
            "__typename": {
                "type": 1
            }
        },
        "DeployKey": {
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "key": {
                "type": 1
            },
            "readOnly": {
                "type": 48
            },
            "title": {
                "type": 1
            },
            "verified": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "DeployKeyConnection": {
            "edges": {
                "type": 224
            },
            "nodes": {
                "type": 222
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "DeployKeyEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 222
            },
            "__typename": {
                "type": 1
            }
        },
        "DeployedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "deployment": {
                "type": 226
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "ref": {
                "type": 616
            },
            "__typename": {
                "type": 1
            }
        },
        "Deployment": {
            "commit": {
                "type": 102
            },
            "commitOid": {
                "type": 1
            },
            "createdAt": {
                "type": 180
            },
            "creator": {
                "type": 7
            },
            "databaseId": {
                "type": 8
            },
            "description": {
                "type": 1
            },
            "environment": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "latestEnvironment": {
                "type": 1
            },
            "latestStatus": {
                "type": 233
            },
            "originalEnvironment": {
                "type": 1
            },
            "payload": {
                "type": 1
            },
            "ref": {
                "type": 616
            },
            "repository": {
                "type": 707
            },
            "state": {
                "type": 232
            },
            "statuses": {
                "type": 234,
                "args": {
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
            },
            "task": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "DeploymentConnection": {
            "edges": {
                "type": 228
            },
            "nodes": {
                "type": 226
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "DeploymentEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 226
            },
            "__typename": {
                "type": 1
            }
        },
        "DeploymentEnvironmentChangedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "deploymentStatus": {
                "type": 233
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "DeploymentOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 231
            },
            "__typename": {
                "type": 1
            }
        },
        "DeploymentOrderField": {},
        "DeploymentState": {},
        "DeploymentStatus": {
            "createdAt": {
                "type": 180
            },
            "creator": {
                "type": 7
            },
            "deployment": {
                "type": 226
            },
            "description": {
                "type": 1
            },
            "environment": {
                "type": 1
            },
            "environmentUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "logUrl": {
                "type": 874
            },
            "state": {
                "type": 236
            },
            "updatedAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "DeploymentStatusConnection": {
            "edges": {
                "type": 235
            },
            "nodes": {
                "type": 233
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "DeploymentStatusEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 233
            },
            "__typename": {
                "type": 1
            }
        },
        "DeploymentStatusState": {},
        "DiffSide": {},
        "DisconnectedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "isCrossRepository": {
                "type": 48
            },
            "source": {
                "type": 623
            },
            "subject": {
                "type": 623
            },
            "__typename": {
                "type": 1
            }
        },
        "DismissPullRequestReviewInput": {
            "clientMutationId": {
                "type": 1
            },
            "message": {
                "type": 1
            },
            "pullRequestReviewId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "DismissPullRequestReviewPayload": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestReview": {
                "type": 574
            },
            "__typename": {
                "type": 1
            }
        },
        "DraftPullRequestReviewComment": {
            "body": {
                "type": 1
            },
            "path": {
                "type": 1
            },
            "position": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "DraftPullRequestReviewThread": {
            "body": {
                "type": 1
            },
            "line": {
                "type": 8
            },
            "path": {
                "type": 1
            },
            "side": {
                "type": 237
            },
            "startLine": {
                "type": 8
            },
            "startSide": {
                "type": 237
            },
            "__typename": {
                "type": 1
            }
        },
        "Enterprise": {
            "avatarUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "billingInfo": {
                "type": 253
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "description": {
                "type": 1
            },
            "descriptionHTML": {
                "type": 336
            },
            "id": {
                "type": 2
            },
            "location": {
                "type": 1
            },
            "members": {
                "type": 260,
                "args": {
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
            },
            "name": {
                "type": 1
            },
            "organizations": {
                "type": 483,
                "args": {
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
            },
            "ownerInfo": {
                "type": 270
            },
            "resourcePath": {
                "type": 874
            },
            "slug": {
                "type": 1
            },
            "url": {
                "type": 874
            },
            "userAccounts": {
                "type": 300,
                "args": {
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
            },
            "viewerIsAdmin": {
                "type": 48
            },
            "websiteUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseAdministratorConnection": {
            "edges": {
                "type": 245
            },
            "nodes": {
                "type": 979
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseAdministratorEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 979
            },
            "role": {
                "type": 251
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseAdministratorInvitation": {
            "createdAt": {
                "type": 180
            },
            "email": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "id": {
                "type": 2
            },
            "invitee": {
                "type": 979
            },
            "inviter": {
                "type": 979
            },
            "role": {
                "type": 251
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseAdministratorInvitationConnection": {
            "edges": {
                "type": 248
            },
            "nodes": {
                "type": 246
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseAdministratorInvitationEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 246
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseAdministratorInvitationOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 250
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseAdministratorInvitationOrderField": {},
        "EnterpriseAdministratorRole": {},
        "EnterpriseAuditEntryData": {
            "enterpriseResourcePath": {
                "type": 874
            },
            "enterpriseSlug": {
                "type": 1
            },
            "enterpriseUrl": {
                "type": 874
            },
            "on_MembersCanDeleteReposClearAuditEntry": {
                "type": 404
            },
            "on_MembersCanDeleteReposDisableAuditEntry": {
                "type": 405
            },
            "on_MembersCanDeleteReposEnableAuditEntry": {
                "type": 406
            },
            "on_OrgInviteToBusinessAuditEntry": {
                "type": 453
            },
            "on_PrivateRepositoryForkingDisableAuditEntry": {
                "type": 533
            },
            "on_PrivateRepositoryForkingEnableAuditEntry": {
                "type": 534
            },
            "on_RepositoryVisibilityChangeDisableAuditEntry": {
                "type": 732
            },
            "on_RepositoryVisibilityChangeEnableAuditEntry": {
                "type": 733
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseBillingInfo": {
            "allLicensableUsersCount": {
                "type": 8
            },
            "assetPacks": {
                "type": 8
            },
            "availableSeats": {
                "type": 8
            },
            "bandwidthQuota": {
                "type": 254
            },
            "bandwidthUsage": {
                "type": 254
            },
            "bandwidthUsagePercentage": {
                "type": 8
            },
            "seats": {
                "type": 8
            },
            "storageQuota": {
                "type": 254
            },
            "storageUsage": {
                "type": 254
            },
            "storageUsagePercentage": {
                "type": 8
            },
            "totalAvailableLicenses": {
                "type": 8
            },
            "totalLicenses": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "Float": {},
        "EnterpriseDefaultRepositoryPermissionSettingValue": {},
        "EnterpriseEnabledDisabledSettingValue": {},
        "EnterpriseEnabledSettingValue": {},
        "EnterpriseIdentityProvider": {
            "digestMethod": {
                "type": 757
            },
            "enterprise": {
                "type": 243
            },
            "externalIdentities": {
                "type": 305,
                "args": {
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
            },
            "id": {
                "type": 2
            },
            "idpCertificate": {
                "type": 993
            },
            "issuer": {
                "type": 1
            },
            "recoveryCodes": {
                "type": 1
            },
            "signatureMethod": {
                "type": 758
            },
            "ssoUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseMember": {
            "on_EnterpriseUserAccount": {
                "type": 299
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseMemberConnection": {
            "edges": {
                "type": 261
            },
            "nodes": {
                "type": 259
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseMemberEdge": {
            "cursor": {
                "type": 1
            },
            "isUnlicensed": {
                "type": 48
            },
            "node": {
                "type": 259
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseMemberOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 263
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseMemberOrderField": {},
        "EnterpriseMembersCanCreateRepositoriesSettingValue": {},
        "EnterpriseMembersCanMakePurchasesSettingValue": {},
        "EnterpriseOrganizationMembershipConnection": {
            "edges": {
                "type": 267
            },
            "nodes": {
                "type": 478
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseOrganizationMembershipEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 478
            },
            "role": {
                "type": 302
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseOutsideCollaboratorConnection": {
            "edges": {
                "type": 269
            },
            "nodes": {
                "type": 979
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseOutsideCollaboratorEdge": {
            "cursor": {
                "type": 1
            },
            "isUnlicensed": {
                "type": 48
            },
            "node": {
                "type": 979
            },
            "repositories": {
                "type": 276,
                "args": {
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
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseOwnerInfo": {
            "actionExecutionCapabilitySettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "admins": {
                "type": 244,
                "args": {
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
            },
            "affiliatedUsersWithTwoFactorDisabled": {
                "type": 982,
                "args": {
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
            },
            "affiliatedUsersWithTwoFactorDisabledExist": {
                "type": 48
            },
            "allowPrivateRepositoryForkingSetting": {
                "type": 256
            },
            "allowPrivateRepositoryForkingSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "defaultRepositoryPermissionSetting": {
                "type": 255
            },
            "defaultRepositoryPermissionSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "enterpriseServerInstallations": {
                "type": 279,
                "args": {
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
            },
            "ipAllowListEnabledSetting": {
                "type": 347
            },
            "ipAllowListEntries": {
                "type": 349,
                "args": {
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
            },
            "isUpdatingDefaultRepositoryPermission": {
                "type": 48
            },
            "isUpdatingTwoFactorRequirement": {
                "type": 48
            },
            "membersCanChangeRepositoryVisibilitySetting": {
                "type": 256
            },
            "membersCanChangeRepositoryVisibilitySettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "membersCanCreateInternalRepositoriesSetting": {
                "type": 48
            },
            "membersCanCreatePrivateRepositoriesSetting": {
                "type": 48
            },
            "membersCanCreatePublicRepositoriesSetting": {
                "type": 48
            },
            "membersCanCreateRepositoriesSetting": {
                "type": 264
            },
            "membersCanCreateRepositoriesSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "membersCanDeleteIssuesSetting": {
                "type": 256
            },
            "membersCanDeleteIssuesSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "membersCanDeleteRepositoriesSetting": {
                "type": 256
            },
            "membersCanDeleteRepositoriesSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "membersCanInviteCollaboratorsSetting": {
                "type": 256
            },
            "membersCanInviteCollaboratorsSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "membersCanMakePurchasesSetting": {
                "type": 265
            },
            "membersCanUpdateProtectedBranchesSetting": {
                "type": 256
            },
            "membersCanUpdateProtectedBranchesSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "membersCanViewDependencyInsightsSetting": {
                "type": 256
            },
            "membersCanViewDependencyInsightsSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "organizationProjectsSetting": {
                "type": 256
            },
            "organizationProjectsSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "outsideCollaborators": {
                "type": 268,
                "args": {
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
            },
            "pendingAdminInvitations": {
                "type": 247,
                "args": {
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
            },
            "pendingCollaboratorInvitations": {
                "type": 717,
                "args": {
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
            },
            "pendingCollaborators": {
                "type": 271,
                "args": {
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
            },
            "pendingMemberInvitations": {
                "type": 273,
                "args": {
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
            },
            "repositoryProjectsSetting": {
                "type": 256
            },
            "repositoryProjectsSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "samlIdentityProvider": {
                "type": 258
            },
            "samlIdentityProviderSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "teamDiscussionsSetting": {
                "type": 256
            },
            "teamDiscussionsSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "twoFactorRequiredSetting": {
                "type": 257
            },
            "twoFactorRequiredSettingOrganizations": {
                "type": 483,
                "args": {
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
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterprisePendingCollaboratorConnection": {
            "edges": {
                "type": 272
            },
            "nodes": {
                "type": 979
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterprisePendingCollaboratorEdge": {
            "cursor": {
                "type": 1
            },
            "isUnlicensed": {
                "type": 48
            },
            "node": {
                "type": 979
            },
            "repositories": {
                "type": 276,
                "args": {
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
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterprisePendingMemberInvitationConnection": {
            "edges": {
                "type": 274
            },
            "nodes": {
                "type": 486
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "totalUniqueUserCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterprisePendingMemberInvitationEdge": {
            "cursor": {
                "type": 1
            },
            "isUnlicensed": {
                "type": 48
            },
            "node": {
                "type": 486
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseRepositoryInfo": {
            "id": {
                "type": 2
            },
            "isPrivate": {
                "type": 48
            },
            "name": {
                "type": 1
            },
            "nameWithOwner": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseRepositoryInfoConnection": {
            "edges": {
                "type": 277
            },
            "nodes": {
                "type": 275
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseRepositoryInfoEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 275
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerInstallation": {
            "createdAt": {
                "type": 180
            },
            "customerName": {
                "type": 1
            },
            "hostName": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "isConnected": {
                "type": 48
            },
            "updatedAt": {
                "type": 180
            },
            "userAccounts": {
                "type": 284,
                "args": {
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
            },
            "userAccountsUploads": {
                "type": 294,
                "args": {
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
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerInstallationConnection": {
            "edges": {
                "type": 280
            },
            "nodes": {
                "type": 278
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerInstallationEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 278
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerInstallationOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 282
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerInstallationOrderField": {},
        "EnterpriseServerUserAccount": {
            "createdAt": {
                "type": 180
            },
            "emails": {
                "type": 287,
                "args": {
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
            },
            "enterpriseServerInstallation": {
                "type": 278
            },
            "id": {
                "type": 2
            },
            "isSiteAdmin": {
                "type": 48
            },
            "login": {
                "type": 1
            },
            "profileName": {
                "type": 1
            },
            "remoteCreatedAt": {
                "type": 180
            },
            "remoteUserId": {
                "type": 8
            },
            "updatedAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountConnection": {
            "edges": {
                "type": 285
            },
            "nodes": {
                "type": 283
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 283
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountEmail": {
            "createdAt": {
                "type": 180
            },
            "email": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "isPrimary": {
                "type": 48
            },
            "updatedAt": {
                "type": 180
            },
            "userAccount": {
                "type": 283
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountEmailConnection": {
            "edges": {
                "type": 288
            },
            "nodes": {
                "type": 286
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountEmailEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 286
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountEmailOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 290
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountEmailOrderField": {},
        "EnterpriseServerUserAccountOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 292
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountOrderField": {},
        "EnterpriseServerUserAccountsUpload": {
            "createdAt": {
                "type": 180
            },
            "enterprise": {
                "type": 243
            },
            "enterpriseServerInstallation": {
                "type": 278
            },
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "syncState": {
                "type": 298
            },
            "updatedAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountsUploadConnection": {
            "edges": {
                "type": 295
            },
            "nodes": {
                "type": 293
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountsUploadEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 293
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountsUploadOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 297
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseServerUserAccountsUploadOrderField": {},
        "EnterpriseServerUserAccountsUploadSyncState": {},
        "EnterpriseUserAccount": {
            "avatarUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "createdAt": {
                "type": 180
            },
            "enterprise": {
                "type": 243
            },
            "id": {
                "type": 2
            },
            "login": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "organizations": {
                "type": 266,
                "args": {
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
            },
            "resourcePath": {
                "type": 874
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseUserAccountConnection": {
            "edges": {
                "type": 301
            },
            "nodes": {
                "type": 299
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseUserAccountEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 299
            },
            "__typename": {
                "type": 1
            }
        },
        "EnterpriseUserAccountMembershipRole": {},
        "EnterpriseUserDeployment": {},
        "ExternalIdentity": {
            "guid": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "organizationInvitation": {
                "type": 486
            },
            "samlIdentity": {
                "type": 307
            },
            "scimIdentity": {
                "type": 308
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "ExternalIdentityConnection": {
            "edges": {
                "type": 306
            },
            "nodes": {
                "type": 304
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ExternalIdentityEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 304
            },
            "__typename": {
                "type": 1
            }
        },
        "ExternalIdentitySamlAttributes": {
            "nameId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "ExternalIdentityScimAttributes": {
            "username": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "FollowUserInput": {
            "clientMutationId": {
                "type": 1
            },
            "userId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "FollowUserPayload": {
            "clientMutationId": {
                "type": 1
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "FollowerConnection": {
            "edges": {
                "type": 986
            },
            "nodes": {
                "type": 979
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "FollowingConnection": {
            "edges": {
                "type": 986
            },
            "nodes": {
                "type": 979
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "FundingLink": {
            "platform": {
                "type": 314
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "FundingPlatform": {},
        "GenericHovercardContext": {
            "message": {
                "type": 1
            },
            "octicon": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "Gist": {
            "comments": {
                "type": 318,
                "args": {
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
            },
            "createdAt": {
                "type": 180
            },
            "description": {
                "type": 1
            },
            "files": {
                "type": 322,
                "args": {
                    "limit": [
                        8
                    ],
                    "oid": [
                        329
                    ]
                }
            },
            "forks": {
                "type": 320,
                "args": {
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
            },
            "id": {
                "type": 2
            },
            "isFork": {
                "type": 48
            },
            "isPublic": {
                "type": 48
            },
            "name": {
                "type": 1
            },
            "owner": {
                "type": 725
            },
            "pushedAt": {
                "type": 180
            },
            "resourcePath": {
                "type": 874
            },
            "stargazers": {
                "type": 806,
                "args": {
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
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "viewerHasStarred": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "GistComment": {
            "author": {
                "type": 7
            },
            "authorAssociation": {
                "type": 99
            },
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "bodyText": {
                "type": 1
            },
            "createdAt": {
                "type": 180
            },
            "createdViaEmail": {
                "type": 48
            },
            "databaseId": {
                "type": 8
            },
            "editor": {
                "type": 7
            },
            "gist": {
                "type": 316
            },
            "id": {
                "type": 2
            },
            "includesCreatedEdit": {
                "type": 48
            },
            "isMinimized": {
                "type": 48
            },
            "lastEditedAt": {
                "type": 180
            },
            "minimizedReason": {
                "type": 1
            },
            "publishedAt": {
                "type": 180
            },
            "updatedAt": {
                "type": 180
            },
            "userContentEdits": {
                "type": 984,
                "args": {
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
            },
            "viewerCanDelete": {
                "type": 48
            },
            "viewerCanMinimize": {
                "type": 48
            },
            "viewerCanUpdate": {
                "type": 48
            },
            "viewerCannotUpdateReasons": {
                "type": 100
            },
            "viewerDidAuthor": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "GistCommentConnection": {
            "edges": {
                "type": 319
            },
            "nodes": {
                "type": 317
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "GistCommentEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 317
            },
            "__typename": {
                "type": 1
            }
        },
        "GistConnection": {
            "edges": {
                "type": 321
            },
            "nodes": {
                "type": 316
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "GistEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 316
            },
            "__typename": {
                "type": 1
            }
        },
        "GistFile": {
            "encodedName": {
                "type": 1
            },
            "encoding": {
                "type": 1
            },
            "extension": {
                "type": 1
            },
            "isImage": {
                "type": 48
            },
            "isTruncated": {
                "type": 48
            },
            "language": {
                "type": 381
            },
            "name": {
                "type": 1
            },
            "size": {
                "type": 8
            },
            "text": {
                "type": 1,
                "args": {
                    "truncate": [
                        8
                    ]
                }
            },
            "__typename": {
                "type": 1
            }
        },
        "GistOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 324
            },
            "__typename": {
                "type": 1
            }
        },
        "GistOrderField": {},
        "GistPrivacy": {},
        "GitActor": {
            "avatarUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "date": {
                "type": 334
            },
            "email": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "GitHubMetadata": {
            "gitHubServicesSha": {
                "type": 329
            },
            "gitIpAddresses": {
                "type": 1
            },
            "hookIpAddresses": {
                "type": 1
            },
            "importerIpAddresses": {
                "type": 1
            },
            "isPasswordAuthenticationVerifiable": {
                "type": 48
            },
            "pagesIpAddresses": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "GitObject": {
            "abbreviatedOid": {
                "type": 1
            },
            "commitResourcePath": {
                "type": 874
            },
            "commitUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "oid": {
                "type": 329
            },
            "repository": {
                "type": 707
            },
            "on_Blob": {
                "type": 47
            },
            "on_Commit": {
                "type": 102
            },
            "on_Tag": {
                "type": 827
            },
            "on_Tree": {
                "type": 872
            },
            "__typename": {
                "type": 1
            }
        },
        "GitObjectID": {},
        "GitRefname": {},
        "GitSSHRemote": {},
        "GitSignature": {
            "email": {
                "type": 1
            },
            "isValid": {
                "type": 48
            },
            "payload": {
                "type": 1
            },
            "signature": {
                "type": 1
            },
            "signer": {
                "type": 979
            },
            "state": {
                "type": 333
            },
            "wasSignedByGitHub": {
                "type": 48
            },
            "on_GpgSignature": {
                "type": 335
            },
            "on_SmimeSignature": {
                "type": 788
            },
            "on_UnknownSignature": {
                "type": 881
            },
            "__typename": {
                "type": 1
            }
        },
        "GitSignatureState": {},
        "GitTimestamp": {},
        "GpgSignature": {
            "email": {
                "type": 1
            },
            "isValid": {
                "type": 48
            },
            "keyId": {
                "type": 1
            },
            "payload": {
                "type": 1
            },
            "signature": {
                "type": 1
            },
            "signer": {
                "type": 979
            },
            "state": {
                "type": 333
            },
            "wasSignedByGitHub": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "HTML": {},
        "HeadRefDeletedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "headRef": {
                "type": 616
            },
            "headRefName": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "HeadRefForcePushedEvent": {
            "actor": {
                "type": 7
            },
            "afterCommit": {
                "type": 102
            },
            "beforeCommit": {
                "type": 102
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "ref": {
                "type": 616
            },
            "__typename": {
                "type": 1
            }
        },
        "HeadRefRestoredEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "Hovercard": {
            "contexts": {
                "type": 341
            },
            "__typename": {
                "type": 1
            }
        },
        "HovercardContext": {
            "message": {
                "type": 1
            },
            "octicon": {
                "type": 1
            },
            "on_GenericHovercardContext": {
                "type": 315
            },
            "on_OrganizationTeamsHovercardContext": {
                "type": 497
            },
            "on_OrganizationsHovercardContext": {
                "type": 498
            },
            "on_ReviewStatusHovercardContext": {
                "type": 756
            },
            "on_ViewerHovercardContext": {
                "type": 992
            },
            "__typename": {
                "type": 1
            }
        },
        "IdentityProviderConfigurationState": {},
        "ImportProjectInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "columnImports": {
                "type": 548
            },
            "name": {
                "type": 1
            },
            "ownerName": {
                "type": 1
            },
            "public": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "ImportProjectPayload": {
            "clientMutationId": {
                "type": 1
            },
            "project": {
                "type": 537
            },
            "__typename": {
                "type": 1
            }
        },
        "InviteEnterpriseAdminInput": {
            "clientMutationId": {
                "type": 1
            },
            "email": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "invitee": {
                "type": 1
            },
            "role": {
                "type": 251
            },
            "__typename": {
                "type": 1
            }
        },
        "InviteEnterpriseAdminPayload": {
            "clientMutationId": {
                "type": 1
            },
            "invitation": {
                "type": 246
            },
            "__typename": {
                "type": 1
            }
        },
        "IpAllowListEnabledSettingValue": {},
        "IpAllowListEntry": {
            "allowListValue": {
                "type": 1
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "isActive": {
                "type": 48
            },
            "name": {
                "type": 1
            },
            "owner": {
                "type": 353
            },
            "updatedAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "IpAllowListEntryConnection": {
            "edges": {
                "type": 350
            },
            "nodes": {
                "type": 348
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "IpAllowListEntryEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 348
            },
            "__typename": {
                "type": 1
            }
        },
        "IpAllowListEntryOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 352
            },
            "__typename": {
                "type": 1
            }
        },
        "IpAllowListEntryOrderField": {},
        "IpAllowListOwner": {
            "on_Enterprise": {
                "type": 243
            },
            "on_Organization": {
                "type": 478
            },
            "__typename": {
                "type": 1
            }
        },
        "Issue": {
            "activeLockReason": {
                "type": 392
            },
            "assignees": {
                "type": 982,
                "args": {
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
            },
            "author": {
                "type": 7
            },
            "authorAssociation": {
                "type": 99
            },
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "bodyText": {
                "type": 1
            },
            "closed": {
                "type": 48
            },
            "closedAt": {
                "type": 180
            },
            "comments": {
                "type": 356,
                "args": {
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
            },
            "createdAt": {
                "type": 180
            },
            "createdViaEmail": {
                "type": 48
            },
            "databaseId": {
                "type": 8
            },
            "editor": {
                "type": 7
            },
            "hovercard": {
                "type": 340,
                "args": {
                    "includeNotificationContexts": [
                        48
                    ]
                }
            },
            "id": {
                "type": 2
            },
            "includesCreatedEdit": {
                "type": 48
            },
            "labels": {
                "type": 375,
                "args": {
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
            },
            "lastEditedAt": {
                "type": 180
            },
            "locked": {
                "type": 48
            },
            "milestone": {
                "type": 415
            },
            "number": {
                "type": 8
            },
            "participants": {
                "type": 982,
                "args": {
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
            },
            "projectCards": {
                "type": 540,
                "args": {
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
            },
            "publishedAt": {
                "type": 180
            },
            "reactionGroups": {
                "type": 612
            },
            "reactions": {
                "type": 609,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "state": {
                "type": 365
            },
            "timeline": {
                "type": 366,
                "args": {
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
            },
            "timelineItems": {
                "type": 370,
                "args": {
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
            },
            "title": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "userContentEdits": {
                "type": 984,
                "args": {
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
            },
            "viewerCanReact": {
                "type": 48
            },
            "viewerCanSubscribe": {
                "type": 48
            },
            "viewerCanUpdate": {
                "type": 48
            },
            "viewerCannotUpdateReasons": {
                "type": 100
            },
            "viewerDidAuthor": {
                "type": 48
            },
            "viewerSubscription": {
                "type": 825
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueComment": {
            "author": {
                "type": 7
            },
            "authorAssociation": {
                "type": 99
            },
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "bodyText": {
                "type": 1
            },
            "createdAt": {
                "type": 180
            },
            "createdViaEmail": {
                "type": 48
            },
            "databaseId": {
                "type": 8
            },
            "editor": {
                "type": 7
            },
            "id": {
                "type": 2
            },
            "includesCreatedEdit": {
                "type": 48
            },
            "isMinimized": {
                "type": 48
            },
            "issue": {
                "type": 354
            },
            "lastEditedAt": {
                "type": 180
            },
            "minimizedReason": {
                "type": 1
            },
            "publishedAt": {
                "type": 180
            },
            "pullRequest": {
                "type": 560
            },
            "reactionGroups": {
                "type": 612
            },
            "reactions": {
                "type": 609,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "userContentEdits": {
                "type": 984,
                "args": {
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
            },
            "viewerCanDelete": {
                "type": 48
            },
            "viewerCanMinimize": {
                "type": 48
            },
            "viewerCanReact": {
                "type": 48
            },
            "viewerCanUpdate": {
                "type": 48
            },
            "viewerCannotUpdateReasons": {
                "type": 100
            },
            "viewerDidAuthor": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueCommentConnection": {
            "edges": {
                "type": 357
            },
            "nodes": {
                "type": 355
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueCommentEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 355
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueConnection": {
            "edges": {
                "type": 360
            },
            "nodes": {
                "type": 354
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueContributionsByRepository": {
            "contributions": {
                "type": 164,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 354
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueFilters": {
            "assignee": {
                "type": 1
            },
            "createdBy": {
                "type": 1
            },
            "labels": {
                "type": 1
            },
            "mentioned": {
                "type": 1
            },
            "milestone": {
                "type": 1
            },
            "since": {
                "type": 180
            },
            "states": {
                "type": 365
            },
            "viewerSubscribed": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueOrPullRequest": {
            "on_Issue": {
                "type": 354
            },
            "on_PullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 364
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueOrderField": {},
        "IssueState": {},
        "IssueTimelineConnection": {
            "edges": {
                "type": 368
            },
            "nodes": {
                "type": 367
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueTimelineItem": {
            "on_AssignedEvent": {
                "type": 35
            },
            "on_ClosedEvent": {
                "type": 94
            },
            "on_Commit": {
                "type": 102
            },
            "on_CrossReferencedEvent": {
                "type": 178
            },
            "on_DemilestonedEvent": {
                "type": 215
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_LabeledEvent": {
                "type": 380
            },
            "on_LockedEvent": {
                "type": 394
            },
            "on_MilestonedEvent": {
                "type": 422
            },
            "on_ReferencedEvent": {
                "type": 622
            },
            "on_RenamedTitleEvent": {
                "type": 673
            },
            "on_ReopenedEvent": {
                "type": 679
            },
            "on_SubscribedEvent": {
                "type": 824
            },
            "on_TransferredEvent": {
                "type": 871
            },
            "on_UnassignedEvent": {
                "type": 877
            },
            "on_UnlabeledEvent": {
                "type": 882
            },
            "on_UnlockedEvent": {
                "type": 887
            },
            "on_UnsubscribedEvent": {
                "type": 898
            },
            "on_UserBlockedEvent": {
                "type": 981
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueTimelineItemEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 367
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueTimelineItems": {
            "on_AddedToProjectEvent": {
                "type": 30
            },
            "on_AssignedEvent": {
                "type": 35
            },
            "on_ClosedEvent": {
                "type": 94
            },
            "on_CommentDeletedEvent": {
                "type": 101
            },
            "on_ConnectedEvent": {
                "type": 114
            },
            "on_ConvertedNoteToIssueEvent": {
                "type": 127
            },
            "on_CrossReferencedEvent": {
                "type": 178
            },
            "on_DemilestonedEvent": {
                "type": 215
            },
            "on_DisconnectedEvent": {
                "type": 238
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_LabeledEvent": {
                "type": 380
            },
            "on_LockedEvent": {
                "type": 394
            },
            "on_MarkedAsDuplicateEvent": {
                "type": 398
            },
            "on_MentionedEvent": {
                "type": 407
            },
            "on_MilestonedEvent": {
                "type": 422
            },
            "on_MovedColumnsInProjectEvent": {
                "type": 430
            },
            "on_PinnedEvent": {
                "type": 528
            },
            "on_ReferencedEvent": {
                "type": 622
            },
            "on_RemovedFromProjectEvent": {
                "type": 672
            },
            "on_RenamedTitleEvent": {
                "type": 673
            },
            "on_ReopenedEvent": {
                "type": 679
            },
            "on_SubscribedEvent": {
                "type": 824
            },
            "on_TransferredEvent": {
                "type": 871
            },
            "on_UnassignedEvent": {
                "type": 877
            },
            "on_UnlabeledEvent": {
                "type": 882
            },
            "on_UnlockedEvent": {
                "type": 887
            },
            "on_UnmarkedAsDuplicateEvent": {
                "type": 890
            },
            "on_UnpinnedEvent": {
                "type": 895
            },
            "on_UnsubscribedEvent": {
                "type": 898
            },
            "on_UserBlockedEvent": {
                "type": 981
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueTimelineItemsConnection": {
            "edges": {
                "type": 371
            },
            "filteredCount": {
                "type": 8
            },
            "nodes": {
                "type": 369
            },
            "pageCount": {
                "type": 8
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "updatedAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueTimelineItemsEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 369
            },
            "__typename": {
                "type": 1
            }
        },
        "IssueTimelineItemsItemType": {},
        "JoinedGitHubContribution": {
            "isRestricted": {
                "type": 48
            },
            "occurredAt": {
                "type": 180
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "Label": {
            "color": {
                "type": 1
            },
            "createdAt": {
                "type": 180
            },
            "description": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "isDefault": {
                "type": 48
            },
            "issues": {
                "type": 358,
                "args": {
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
            },
            "name": {
                "type": 1
            },
            "pullRequests": {
                "type": 568,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "LabelConnection": {
            "edges": {
                "type": 376
            },
            "nodes": {
                "type": 374
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "LabelEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 374
            },
            "__typename": {
                "type": 1
            }
        },
        "LabelOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 378
            },
            "__typename": {
                "type": 1
            }
        },
        "LabelOrderField": {},
        "Labelable": {
            "labels": {
                "type": 375,
                "args": {
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
            },
            "on_Issue": {
                "type": 354
            },
            "on_PullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "LabeledEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "label": {
                "type": 374
            },
            "labelable": {
                "type": 379
            },
            "__typename": {
                "type": 1
            }
        },
        "Language": {
            "color": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "LanguageConnection": {
            "edges": {
                "type": 383
            },
            "nodes": {
                "type": 381
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "totalSize": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "LanguageEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 381
            },
            "size": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "LanguageOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 385
            },
            "__typename": {
                "type": 1
            }
        },
        "LanguageOrderField": {},
        "License": {
            "body": {
                "type": 1
            },
            "conditions": {
                "type": 387
            },
            "description": {
                "type": 1
            },
            "featured": {
                "type": 48
            },
            "hidden": {
                "type": 48
            },
            "id": {
                "type": 2
            },
            "implementation": {
                "type": 1
            },
            "key": {
                "type": 1
            },
            "limitations": {
                "type": 387
            },
            "name": {
                "type": 1
            },
            "nickname": {
                "type": 1
            },
            "permissions": {
                "type": 387
            },
            "pseudoLicense": {
                "type": 48
            },
            "spdxId": {
                "type": 1
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "LicenseRule": {
            "description": {
                "type": 1
            },
            "key": {
                "type": 1
            },
            "label": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "LinkRepositoryToProjectInput": {
            "clientMutationId": {
                "type": 1
            },
            "projectId": {
                "type": 2
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "LinkRepositoryToProjectPayload": {
            "clientMutationId": {
                "type": 1
            },
            "project": {
                "type": 537
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "LockLockableInput": {
            "clientMutationId": {
                "type": 1
            },
            "lockReason": {
                "type": 392
            },
            "lockableId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "LockLockablePayload": {
            "actor": {
                "type": 7
            },
            "clientMutationId": {
                "type": 1
            },
            "lockedRecord": {
                "type": 393
            },
            "__typename": {
                "type": 1
            }
        },
        "LockReason": {},
        "Lockable": {
            "activeLockReason": {
                "type": 392
            },
            "locked": {
                "type": 48
            },
            "on_Issue": {
                "type": 354
            },
            "on_PullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "LockedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "lockReason": {
                "type": 392
            },
            "lockable": {
                "type": 393
            },
            "__typename": {
                "type": 1
            }
        },
        "Mannequin": {
            "avatarUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "email": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "login": {
                "type": 1
            },
            "resourcePath": {
                "type": 874
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "MarkPullRequestReadyForReviewInput": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "MarkPullRequestReadyForReviewPayload": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "MarkedAsDuplicateEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "MarketplaceCategory": {
            "description": {
                "type": 1
            },
            "howItWorks": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "primaryListingCount": {
                "type": 8
            },
            "resourcePath": {
                "type": 874
            },
            "secondaryListingCount": {
                "type": 8
            },
            "slug": {
                "type": 1
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "MarketplaceListing": {
            "app": {
                "type": 31
            },
            "companyUrl": {
                "type": 874
            },
            "configurationResourcePath": {
                "type": 874
            },
            "configurationUrl": {
                "type": 874
            },
            "documentationUrl": {
                "type": 874
            },
            "extendedDescription": {
                "type": 1
            },
            "extendedDescriptionHTML": {
                "type": 336
            },
            "fullDescription": {
                "type": 1
            },
            "fullDescriptionHTML": {
                "type": 336
            },
            "hasPublishedFreeTrialPlans": {
                "type": 48
            },
            "hasTermsOfService": {
                "type": 48
            },
            "howItWorks": {
                "type": 1
            },
            "howItWorksHTML": {
                "type": 336
            },
            "id": {
                "type": 2
            },
            "installationUrl": {
                "type": 874
            },
            "installedForViewer": {
                "type": 48
            },
            "isArchived": {
                "type": 48
            },
            "isDraft": {
                "type": 48
            },
            "isPaid": {
                "type": 48
            },
            "isPublic": {
                "type": 48
            },
            "isRejected": {
                "type": 48
            },
            "isUnverified": {
                "type": 48
            },
            "isUnverifiedPending": {
                "type": 48
            },
            "isVerificationPendingFromDraft": {
                "type": 48
            },
            "isVerificationPendingFromUnverified": {
                "type": 48
            },
            "isVerified": {
                "type": 48
            },
            "logoBackgroundColor": {
                "type": 1
            },
            "logoUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "name": {
                "type": 1
            },
            "normalizedShortDescription": {
                "type": 1
            },
            "pricingUrl": {
                "type": 874
            },
            "primaryCategory": {
                "type": 399
            },
            "privacyPolicyUrl": {
                "type": 874
            },
            "resourcePath": {
                "type": 874
            },
            "screenshotUrls": {
                "type": 1
            },
            "secondaryCategory": {
                "type": 399
            },
            "shortDescription": {
                "type": 1
            },
            "slug": {
                "type": 1
            },
            "statusUrl": {
                "type": 874
            },
            "supportEmail": {
                "type": 1
            },
            "supportUrl": {
                "type": 874
            },
            "termsOfServiceUrl": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "viewerCanAddPlans": {
                "type": 48
            },
            "viewerCanApprove": {
                "type": 48
            },
            "viewerCanDelist": {
                "type": 48
            },
            "viewerCanEdit": {
                "type": 48
            },
            "viewerCanEditCategories": {
                "type": 48
            },
            "viewerCanEditPlans": {
                "type": 48
            },
            "viewerCanRedraft": {
                "type": 48
            },
            "viewerCanReject": {
                "type": 48
            },
            "viewerCanRequestApproval": {
                "type": 48
            },
            "viewerHasPurchased": {
                "type": 48
            },
            "viewerHasPurchasedForAllOrganizations": {
                "type": 48
            },
            "viewerIsListingAdmin": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "MarketplaceListingConnection": {
            "edges": {
                "type": 402
            },
            "nodes": {
                "type": 400
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "MarketplaceListingEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 400
            },
            "__typename": {
                "type": 1
            }
        },
        "MemberStatusable": {
            "memberStatuses": {
                "type": 988,
                "args": {
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
            },
            "on_Organization": {
                "type": 478
            },
            "on_Team": {
                "type": 828
            },
            "__typename": {
                "type": 1
            }
        },
        "MembersCanDeleteReposClearAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "enterpriseResourcePath": {
                "type": 874
            },
            "enterpriseSlug": {
                "type": 1
            },
            "enterpriseUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "MembersCanDeleteReposDisableAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "enterpriseResourcePath": {
                "type": 874
            },
            "enterpriseSlug": {
                "type": 1
            },
            "enterpriseUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "MembersCanDeleteReposEnableAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "enterpriseResourcePath": {
                "type": 874
            },
            "enterpriseSlug": {
                "type": 1
            },
            "enterpriseUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "MentionedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "MergeBranchInput": {
            "base": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "commitMessage": {
                "type": 1
            },
            "head": {
                "type": 1
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "MergeBranchPayload": {
            "clientMutationId": {
                "type": 1
            },
            "mergeCommit": {
                "type": 102
            },
            "__typename": {
                "type": 1
            }
        },
        "MergePullRequestInput": {
            "clientMutationId": {
                "type": 1
            },
            "commitBody": {
                "type": 1
            },
            "commitHeadline": {
                "type": 1
            },
            "expectedHeadOid": {
                "type": 329
            },
            "mergeMethod": {
                "type": 571
            },
            "pullRequestId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "MergePullRequestPayload": {
            "actor": {
                "type": 7
            },
            "clientMutationId": {
                "type": 1
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "MergeStateStatus": {},
        "MergeableState": {},
        "MergedEvent": {
            "actor": {
                "type": 7
            },
            "commit": {
                "type": 102
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "mergeRef": {
                "type": 616
            },
            "mergeRefName": {
                "type": 1
            },
            "pullRequest": {
                "type": 560
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "Milestone": {
            "closed": {
                "type": 48
            },
            "closedAt": {
                "type": 180
            },
            "createdAt": {
                "type": 180
            },
            "creator": {
                "type": 7
            },
            "description": {
                "type": 1
            },
            "dueOn": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "issuePrioritiesDebug": {
                "type": 1
            },
            "issues": {
                "type": 358,
                "args": {
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
            },
            "number": {
                "type": 8
            },
            "pullRequests": {
                "type": 568,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "state": {
                "type": 421
            },
            "title": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "MilestoneConnection": {
            "edges": {
                "type": 417
            },
            "nodes": {
                "type": 415
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "MilestoneEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 415
            },
            "__typename": {
                "type": 1
            }
        },
        "MilestoneItem": {
            "on_Issue": {
                "type": 354
            },
            "on_PullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "MilestoneOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 420
            },
            "__typename": {
                "type": 1
            }
        },
        "MilestoneOrderField": {},
        "MilestoneState": {},
        "MilestonedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "milestoneTitle": {
                "type": 1
            },
            "subject": {
                "type": 418
            },
            "__typename": {
                "type": 1
            }
        },
        "Minimizable": {
            "isMinimized": {
                "type": 48
            },
            "minimizedReason": {
                "type": 1
            },
            "viewerCanMinimize": {
                "type": 48
            },
            "on_CommitComment": {
                "type": 104
            },
            "on_GistComment": {
                "type": 317
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_PullRequestReviewComment": {
                "type": 575
            },
            "__typename": {
                "type": 1
            }
        },
        "MinimizeCommentInput": {
            "classifier": {
                "type": 706
            },
            "clientMutationId": {
                "type": 1
            },
            "subjectId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "MinimizeCommentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "minimizedComment": {
                "type": 423
            },
            "__typename": {
                "type": 1
            }
        },
        "MoveProjectCardInput": {
            "afterCardId": {
                "type": 2
            },
            "cardId": {
                "type": 2
            },
            "clientMutationId": {
                "type": 1
            },
            "columnId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "MoveProjectCardPayload": {
            "cardEdge": {
                "type": 541
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "MoveProjectColumnInput": {
            "afterColumnId": {
                "type": 2
            },
            "clientMutationId": {
                "type": 1
            },
            "columnId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "MoveProjectColumnPayload": {
            "clientMutationId": {
                "type": 1
            },
            "columnEdge": {
                "type": 547
            },
            "__typename": {
                "type": 1
            }
        },
        "MovedColumnsInProjectEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "previousProjectColumnName": {
                "type": 1
            },
            "project": {
                "type": 537
            },
            "projectCard": {
                "type": 538
            },
            "projectColumnName": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "Mutation": {
            "acceptEnterpriseAdministratorInvitation": {
                "type": 3,
                "args": {
                    "input": [
                        0,
                        "AcceptEnterpriseAdministratorInvitationInput!"
                    ]
                }
            },
            "acceptTopicSuggestion": {
                "type": 5,
                "args": {
                    "input": [
                        4,
                        "AcceptTopicSuggestionInput!"
                    ]
                }
            },
            "addAssigneesToAssignable": {
                "type": 11,
                "args": {
                    "input": [
                        10,
                        "AddAssigneesToAssignableInput!"
                    ]
                }
            },
            "addComment": {
                "type": 13,
                "args": {
                    "input": [
                        12,
                        "AddCommentInput!"
                    ]
                }
            },
            "addLabelsToLabelable": {
                "type": 15,
                "args": {
                    "input": [
                        14,
                        "AddLabelsToLabelableInput!"
                    ]
                }
            },
            "addProjectCard": {
                "type": 17,
                "args": {
                    "input": [
                        16,
                        "AddProjectCardInput!"
                    ]
                }
            },
            "addProjectColumn": {
                "type": 19,
                "args": {
                    "input": [
                        18,
                        "AddProjectColumnInput!"
                    ]
                }
            },
            "addPullRequestReview": {
                "type": 23,
                "args": {
                    "input": [
                        22,
                        "AddPullRequestReviewInput!"
                    ]
                }
            },
            "addPullRequestReviewComment": {
                "type": 21,
                "args": {
                    "input": [
                        20,
                        "AddPullRequestReviewCommentInput!"
                    ]
                }
            },
            "addPullRequestReviewThread": {
                "type": 25,
                "args": {
                    "input": [
                        24,
                        "AddPullRequestReviewThreadInput!"
                    ]
                }
            },
            "addReaction": {
                "type": 27,
                "args": {
                    "input": [
                        26,
                        "AddReactionInput!"
                    ]
                }
            },
            "addStar": {
                "type": 29,
                "args": {
                    "input": [
                        28,
                        "AddStarInput!"
                    ]
                }
            },
            "archiveRepository": {
                "type": 33,
                "args": {
                    "input": [
                        32,
                        "ArchiveRepositoryInput!"
                    ]
                }
            },
            "cancelEnterpriseAdminInvitation": {
                "type": 57,
                "args": {
                    "input": [
                        56,
                        "CancelEnterpriseAdminInvitationInput!"
                    ]
                }
            },
            "changeUserStatus": {
                "type": 59,
                "args": {
                    "input": [
                        58,
                        "ChangeUserStatusInput!"
                    ]
                }
            },
            "clearLabelsFromLabelable": {
                "type": 84,
                "args": {
                    "input": [
                        83,
                        "ClearLabelsFromLabelableInput!"
                    ]
                }
            },
            "cloneProject": {
                "type": 86,
                "args": {
                    "input": [
                        85,
                        "CloneProjectInput!"
                    ]
                }
            },
            "cloneTemplateRepository": {
                "type": 88,
                "args": {
                    "input": [
                        87,
                        "CloneTemplateRepositoryInput!"
                    ]
                }
            },
            "closeIssue": {
                "type": 91,
                "args": {
                    "input": [
                        90,
                        "CloseIssueInput!"
                    ]
                }
            },
            "closePullRequest": {
                "type": 93,
                "args": {
                    "input": [
                        92,
                        "ClosePullRequestInput!"
                    ]
                }
            },
            "convertProjectCardNoteToIssue": {
                "type": 125,
                "args": {
                    "input": [
                        124,
                        "ConvertProjectCardNoteToIssueInput!"
                    ]
                }
            },
            "createBranchProtectionRule": {
                "type": 129,
                "args": {
                    "input": [
                        128,
                        "CreateBranchProtectionRuleInput!"
                    ]
                }
            },
            "createCheckRun": {
                "type": 131,
                "args": {
                    "input": [
                        130,
                        "CreateCheckRunInput!"
                    ]
                }
            },
            "createCheckSuite": {
                "type": 133,
                "args": {
                    "input": [
                        132,
                        "CreateCheckSuiteInput!"
                    ]
                }
            },
            "createContentAttachment": {
                "type": 135,
                "args": {
                    "input": [
                        134,
                        "CreateContentAttachmentInput!"
                    ]
                }
            },
            "createDeployment": {
                "type": 137,
                "args": {
                    "input": [
                        136,
                        "CreateDeploymentInput!"
                    ]
                }
            },
            "createDeploymentStatus": {
                "type": 139,
                "args": {
                    "input": [
                        138,
                        "CreateDeploymentStatusInput!"
                    ]
                }
            },
            "createEnterpriseOrganization": {
                "type": 141,
                "args": {
                    "input": [
                        140,
                        "CreateEnterpriseOrganizationInput!"
                    ]
                }
            },
            "createIpAllowListEntry": {
                "type": 143,
                "args": {
                    "input": [
                        142,
                        "CreateIpAllowListEntryInput!"
                    ]
                }
            },
            "createIssue": {
                "type": 145,
                "args": {
                    "input": [
                        144,
                        "CreateIssueInput!"
                    ]
                }
            },
            "createLabel": {
                "type": 147,
                "args": {
                    "input": [
                        146,
                        "CreateLabelInput!"
                    ]
                }
            },
            "createProject": {
                "type": 149,
                "args": {
                    "input": [
                        148,
                        "CreateProjectInput!"
                    ]
                }
            },
            "createPullRequest": {
                "type": 151,
                "args": {
                    "input": [
                        150,
                        "CreatePullRequestInput!"
                    ]
                }
            },
            "createRef": {
                "type": 153,
                "args": {
                    "input": [
                        152,
                        "CreateRefInput!"
                    ]
                }
            },
            "createRepository": {
                "type": 155,
                "args": {
                    "input": [
                        154,
                        "CreateRepositoryInput!"
                    ]
                }
            },
            "createTeamDiscussion": {
                "type": 159,
                "args": {
                    "input": [
                        158,
                        "CreateTeamDiscussionInput!"
                    ]
                }
            },
            "createTeamDiscussionComment": {
                "type": 157,
                "args": {
                    "input": [
                        156,
                        "CreateTeamDiscussionCommentInput!"
                    ]
                }
            },
            "declineTopicSuggestion": {
                "type": 182,
                "args": {
                    "input": [
                        181,
                        "DeclineTopicSuggestionInput!"
                    ]
                }
            },
            "deleteBranchProtectionRule": {
                "type": 186,
                "args": {
                    "input": [
                        185,
                        "DeleteBranchProtectionRuleInput!"
                    ]
                }
            },
            "deleteDeployment": {
                "type": 188,
                "args": {
                    "input": [
                        187,
                        "DeleteDeploymentInput!"
                    ]
                }
            },
            "deleteIpAllowListEntry": {
                "type": 190,
                "args": {
                    "input": [
                        189,
                        "DeleteIpAllowListEntryInput!"
                    ]
                }
            },
            "deleteIssue": {
                "type": 194,
                "args": {
                    "input": [
                        193,
                        "DeleteIssueInput!"
                    ]
                }
            },
            "deleteIssueComment": {
                "type": 192,
                "args": {
                    "input": [
                        191,
                        "DeleteIssueCommentInput!"
                    ]
                }
            },
            "deleteLabel": {
                "type": 196,
                "args": {
                    "input": [
                        195,
                        "DeleteLabelInput!"
                    ]
                }
            },
            "deletePackageVersion": {
                "type": 198,
                "args": {
                    "input": [
                        197,
                        "DeletePackageVersionInput!"
                    ]
                }
            },
            "deleteProject": {
                "type": 204,
                "args": {
                    "input": [
                        203,
                        "DeleteProjectInput!"
                    ]
                }
            },
            "deleteProjectCard": {
                "type": 200,
                "args": {
                    "input": [
                        199,
                        "DeleteProjectCardInput!"
                    ]
                }
            },
            "deleteProjectColumn": {
                "type": 202,
                "args": {
                    "input": [
                        201,
                        "DeleteProjectColumnInput!"
                    ]
                }
            },
            "deletePullRequestReview": {
                "type": 208,
                "args": {
                    "input": [
                        207,
                        "DeletePullRequestReviewInput!"
                    ]
                }
            },
            "deletePullRequestReviewComment": {
                "type": 206,
                "args": {
                    "input": [
                        205,
                        "DeletePullRequestReviewCommentInput!"
                    ]
                }
            },
            "deleteRef": {
                "type": 210,
                "args": {
                    "input": [
                        209,
                        "DeleteRefInput!"
                    ]
                }
            },
            "deleteTeamDiscussion": {
                "type": 214,
                "args": {
                    "input": [
                        213,
                        "DeleteTeamDiscussionInput!"
                    ]
                }
            },
            "deleteTeamDiscussionComment": {
                "type": 212,
                "args": {
                    "input": [
                        211,
                        "DeleteTeamDiscussionCommentInput!"
                    ]
                }
            },
            "dismissPullRequestReview": {
                "type": 240,
                "args": {
                    "input": [
                        239,
                        "DismissPullRequestReviewInput!"
                    ]
                }
            },
            "followUser": {
                "type": 310,
                "args": {
                    "input": [
                        309,
                        "FollowUserInput!"
                    ]
                }
            },
            "importProject": {
                "type": 344,
                "args": {
                    "input": [
                        343,
                        "ImportProjectInput!"
                    ]
                }
            },
            "inviteEnterpriseAdmin": {
                "type": 346,
                "args": {
                    "input": [
                        345,
                        "InviteEnterpriseAdminInput!"
                    ]
                }
            },
            "linkRepositoryToProject": {
                "type": 389,
                "args": {
                    "input": [
                        388,
                        "LinkRepositoryToProjectInput!"
                    ]
                }
            },
            "lockLockable": {
                "type": 391,
                "args": {
                    "input": [
                        390,
                        "LockLockableInput!"
                    ]
                }
            },
            "markPullRequestReadyForReview": {
                "type": 397,
                "args": {
                    "input": [
                        396,
                        "MarkPullRequestReadyForReviewInput!"
                    ]
                }
            },
            "mergeBranch": {
                "type": 409,
                "args": {
                    "input": [
                        408,
                        "MergeBranchInput!"
                    ]
                }
            },
            "mergePullRequest": {
                "type": 411,
                "args": {
                    "input": [
                        410,
                        "MergePullRequestInput!"
                    ]
                }
            },
            "minimizeComment": {
                "type": 425,
                "args": {
                    "input": [
                        424,
                        "MinimizeCommentInput!"
                    ]
                }
            },
            "moveProjectCard": {
                "type": 427,
                "args": {
                    "input": [
                        426,
                        "MoveProjectCardInput!"
                    ]
                }
            },
            "moveProjectColumn": {
                "type": 429,
                "args": {
                    "input": [
                        428,
                        "MoveProjectColumnInput!"
                    ]
                }
            },
            "pinIssue": {
                "type": 523,
                "args": {
                    "input": [
                        522,
                        "PinIssueInput!"
                    ]
                }
            },
            "regenerateEnterpriseIdentityProviderRecoveryCodes": {
                "type": 625,
                "args": {
                    "input": [
                        624,
                        "RegenerateEnterpriseIdentityProviderRecoveryCodesInput!"
                    ]
                }
            },
            "removeAssigneesFromAssignable": {
                "type": 657,
                "args": {
                    "input": [
                        656,
                        "RemoveAssigneesFromAssignableInput!"
                    ]
                }
            },
            "removeEnterpriseAdmin": {
                "type": 659,
                "args": {
                    "input": [
                        658,
                        "RemoveEnterpriseAdminInput!"
                    ]
                }
            },
            "removeEnterpriseIdentityProvider": {
                "type": 661,
                "args": {
                    "input": [
                        660,
                        "RemoveEnterpriseIdentityProviderInput!"
                    ]
                }
            },
            "removeEnterpriseOrganization": {
                "type": 663,
                "args": {
                    "input": [
                        662,
                        "RemoveEnterpriseOrganizationInput!"
                    ]
                }
            },
            "removeLabelsFromLabelable": {
                "type": 665,
                "args": {
                    "input": [
                        664,
                        "RemoveLabelsFromLabelableInput!"
                    ]
                }
            },
            "removeOutsideCollaborator": {
                "type": 667,
                "args": {
                    "input": [
                        666,
                        "RemoveOutsideCollaboratorInput!"
                    ]
                }
            },
            "removeReaction": {
                "type": 669,
                "args": {
                    "input": [
                        668,
                        "RemoveReactionInput!"
                    ]
                }
            },
            "removeStar": {
                "type": 671,
                "args": {
                    "input": [
                        670,
                        "RemoveStarInput!"
                    ]
                }
            },
            "reopenIssue": {
                "type": 676,
                "args": {
                    "input": [
                        675,
                        "ReopenIssueInput!"
                    ]
                }
            },
            "reopenPullRequest": {
                "type": 678,
                "args": {
                    "input": [
                        677,
                        "ReopenPullRequestInput!"
                    ]
                }
            },
            "requestReviews": {
                "type": 738,
                "args": {
                    "input": [
                        737,
                        "RequestReviewsInput!"
                    ]
                }
            },
            "rerequestCheckSuite": {
                "type": 742,
                "args": {
                    "input": [
                        741,
                        "RerequestCheckSuiteInput!"
                    ]
                }
            },
            "resolveReviewThread": {
                "type": 744,
                "args": {
                    "input": [
                        743,
                        "ResolveReviewThreadInput!"
                    ]
                }
            },
            "setEnterpriseIdentityProvider": {
                "type": 787,
                "args": {
                    "input": [
                        786,
                        "SetEnterpriseIdentityProviderInput!"
                    ]
                }
            },
            "submitPullRequestReview": {
                "type": 819,
                "args": {
                    "input": [
                        818,
                        "SubmitPullRequestReviewInput!"
                    ]
                }
            },
            "transferIssue": {
                "type": 870,
                "args": {
                    "input": [
                        869,
                        "TransferIssueInput!"
                    ]
                }
            },
            "unarchiveRepository": {
                "type": 876,
                "args": {
                    "input": [
                        875,
                        "UnarchiveRepositoryInput!"
                    ]
                }
            },
            "unfollowUser": {
                "type": 879,
                "args": {
                    "input": [
                        878,
                        "UnfollowUserInput!"
                    ]
                }
            },
            "unlinkRepositoryFromProject": {
                "type": 884,
                "args": {
                    "input": [
                        883,
                        "UnlinkRepositoryFromProjectInput!"
                    ]
                }
            },
            "unlockLockable": {
                "type": 886,
                "args": {
                    "input": [
                        885,
                        "UnlockLockableInput!"
                    ]
                }
            },
            "unmarkIssueAsDuplicate": {
                "type": 889,
                "args": {
                    "input": [
                        888,
                        "UnmarkIssueAsDuplicateInput!"
                    ]
                }
            },
            "unminimizeComment": {
                "type": 892,
                "args": {
                    "input": [
                        891,
                        "UnminimizeCommentInput!"
                    ]
                }
            },
            "unpinIssue": {
                "type": 894,
                "args": {
                    "input": [
                        893,
                        "UnpinIssueInput!"
                    ]
                }
            },
            "unresolveReviewThread": {
                "type": 897,
                "args": {
                    "input": [
                        896,
                        "UnresolveReviewThreadInput!"
                    ]
                }
            },
            "updateBranchProtectionRule": {
                "type": 902,
                "args": {
                    "input": [
                        901,
                        "UpdateBranchProtectionRuleInput!"
                    ]
                }
            },
            "updateCheckRun": {
                "type": 904,
                "args": {
                    "input": [
                        903,
                        "UpdateCheckRunInput!"
                    ]
                }
            },
            "updateCheckSuitePreferences": {
                "type": 906,
                "args": {
                    "input": [
                        905,
                        "UpdateCheckSuitePreferencesInput!"
                    ]
                }
            },
            "updateEnterpriseActionExecutionCapabilitySetting": {
                "type": 908,
                "args": {
                    "input": [
                        907,
                        "UpdateEnterpriseActionExecutionCapabilitySettingInput!"
                    ]
                }
            },
            "updateEnterpriseAdministratorRole": {
                "type": 910,
                "args": {
                    "input": [
                        909,
                        "UpdateEnterpriseAdministratorRoleInput!"
                    ]
                }
            },
            "updateEnterpriseAllowPrivateRepositoryForkingSetting": {
                "type": 912,
                "args": {
                    "input": [
                        911,
                        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput!"
                    ]
                }
            },
            "updateEnterpriseDefaultRepositoryPermissionSetting": {
                "type": 914,
                "args": {
                    "input": [
                        913,
                        "UpdateEnterpriseDefaultRepositoryPermissionSettingInput!"
                    ]
                }
            },
            "updateEnterpriseMembersCanChangeRepositoryVisibilitySetting": {
                "type": 916,
                "args": {
                    "input": [
                        915,
                        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput!"
                    ]
                }
            },
            "updateEnterpriseMembersCanCreateRepositoriesSetting": {
                "type": 918,
                "args": {
                    "input": [
                        917,
                        "UpdateEnterpriseMembersCanCreateRepositoriesSettingInput!"
                    ]
                }
            },
            "updateEnterpriseMembersCanDeleteIssuesSetting": {
                "type": 920,
                "args": {
                    "input": [
                        919,
                        "UpdateEnterpriseMembersCanDeleteIssuesSettingInput!"
                    ]
                }
            },
            "updateEnterpriseMembersCanDeleteRepositoriesSetting": {
                "type": 922,
                "args": {
                    "input": [
                        921,
                        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput!"
                    ]
                }
            },
            "updateEnterpriseMembersCanInviteCollaboratorsSetting": {
                "type": 924,
                "args": {
                    "input": [
                        923,
                        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput!"
                    ]
                }
            },
            "updateEnterpriseMembersCanMakePurchasesSetting": {
                "type": 926,
                "args": {
                    "input": [
                        925,
                        "UpdateEnterpriseMembersCanMakePurchasesSettingInput!"
                    ]
                }
            },
            "updateEnterpriseMembersCanUpdateProtectedBranchesSetting": {
                "type": 928,
                "args": {
                    "input": [
                        927,
                        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput!"
                    ]
                }
            },
            "updateEnterpriseMembersCanViewDependencyInsightsSetting": {
                "type": 930,
                "args": {
                    "input": [
                        929,
                        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput!"
                    ]
                }
            },
            "updateEnterpriseOrganizationProjectsSetting": {
                "type": 932,
                "args": {
                    "input": [
                        931,
                        "UpdateEnterpriseOrganizationProjectsSettingInput!"
                    ]
                }
            },
            "updateEnterpriseProfile": {
                "type": 934,
                "args": {
                    "input": [
                        933,
                        "UpdateEnterpriseProfileInput!"
                    ]
                }
            },
            "updateEnterpriseRepositoryProjectsSetting": {
                "type": 936,
                "args": {
                    "input": [
                        935,
                        "UpdateEnterpriseRepositoryProjectsSettingInput!"
                    ]
                }
            },
            "updateEnterpriseTeamDiscussionsSetting": {
                "type": 938,
                "args": {
                    "input": [
                        937,
                        "UpdateEnterpriseTeamDiscussionsSettingInput!"
                    ]
                }
            },
            "updateEnterpriseTwoFactorAuthenticationRequiredSetting": {
                "type": 940,
                "args": {
                    "input": [
                        939,
                        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput!"
                    ]
                }
            },
            "updateIpAllowListEnabledSetting": {
                "type": 942,
                "args": {
                    "input": [
                        941,
                        "UpdateIpAllowListEnabledSettingInput!"
                    ]
                }
            },
            "updateIpAllowListEntry": {
                "type": 944,
                "args": {
                    "input": [
                        943,
                        "UpdateIpAllowListEntryInput!"
                    ]
                }
            },
            "updateIssue": {
                "type": 948,
                "args": {
                    "input": [
                        947,
                        "UpdateIssueInput!"
                    ]
                }
            },
            "updateIssueComment": {
                "type": 946,
                "args": {
                    "input": [
                        945,
                        "UpdateIssueCommentInput!"
                    ]
                }
            },
            "updateLabel": {
                "type": 950,
                "args": {
                    "input": [
                        949,
                        "UpdateLabelInput!"
                    ]
                }
            },
            "updateProject": {
                "type": 956,
                "args": {
                    "input": [
                        955,
                        "UpdateProjectInput!"
                    ]
                }
            },
            "updateProjectCard": {
                "type": 952,
                "args": {
                    "input": [
                        951,
                        "UpdateProjectCardInput!"
                    ]
                }
            },
            "updateProjectColumn": {
                "type": 954,
                "args": {
                    "input": [
                        953,
                        "UpdateProjectColumnInput!"
                    ]
                }
            },
            "updatePullRequest": {
                "type": 958,
                "args": {
                    "input": [
                        957,
                        "UpdatePullRequestInput!"
                    ]
                }
            },
            "updatePullRequestReview": {
                "type": 962,
                "args": {
                    "input": [
                        961,
                        "UpdatePullRequestReviewInput!"
                    ]
                }
            },
            "updatePullRequestReviewComment": {
                "type": 960,
                "args": {
                    "input": [
                        959,
                        "UpdatePullRequestReviewCommentInput!"
                    ]
                }
            },
            "updateRef": {
                "type": 964,
                "args": {
                    "input": [
                        963,
                        "UpdateRefInput!"
                    ]
                }
            },
            "updateRefs": {
                "type": 966,
                "args": {
                    "input": [
                        965,
                        "UpdateRefsInput!"
                    ]
                }
            },
            "updateRepository": {
                "type": 968,
                "args": {
                    "input": [
                        967,
                        "UpdateRepositoryInput!"
                    ]
                }
            },
            "updateSubscription": {
                "type": 970,
                "args": {
                    "input": [
                        969,
                        "UpdateSubscriptionInput!"
                    ]
                }
            },
            "updateTeamDiscussion": {
                "type": 974,
                "args": {
                    "input": [
                        973,
                        "UpdateTeamDiscussionInput!"
                    ]
                }
            },
            "updateTeamDiscussionComment": {
                "type": 972,
                "args": {
                    "input": [
                        971,
                        "UpdateTeamDiscussionCommentInput!"
                    ]
                }
            },
            "updateTeamReviewAssignment": {
                "type": 976,
                "args": {
                    "input": [
                        975,
                        "UpdateTeamReviewAssignmentInput!"
                    ]
                }
            },
            "updateTopics": {
                "type": 978,
                "args": {
                    "input": [
                        977,
                        "UpdateTopicsInput!"
                    ]
                }
            },
            "__typename": {
                "type": 1
            }
        },
        "Node": {
            "id": {
                "type": 2
            },
            "on_AddedToProjectEvent": {
                "type": 30
            },
            "on_App": {
                "type": 31
            },
            "on_AssignedEvent": {
                "type": 35
            },
            "on_AutomaticBaseChangeFailedEvent": {
                "type": 41
            },
            "on_AutomaticBaseChangeSucceededEvent": {
                "type": 42
            },
            "on_BaseRefChangedEvent": {
                "type": 43
            },
            "on_BaseRefForcePushedEvent": {
                "type": 44
            },
            "on_Blob": {
                "type": 47
            },
            "on_Bot": {
                "type": 49
            },
            "on_BranchProtectionRule": {
                "type": 50
            },
            "on_CheckRun": {
                "type": 69
            },
            "on_CheckSuite": {
                "type": 78
            },
            "on_ClosedEvent": {
                "type": 94
            },
            "on_CodeOfConduct": {
                "type": 96
            },
            "on_CommentDeletedEvent": {
                "type": 101
            },
            "on_Commit": {
                "type": 102
            },
            "on_CommitComment": {
                "type": 104
            },
            "on_CommitCommentThread": {
                "type": 107
            },
            "on_ConnectedEvent": {
                "type": 114
            },
            "on_ConvertToDraftEvent": {
                "type": 126
            },
            "on_ConvertedNoteToIssueEvent": {
                "type": 127
            },
            "on_CrossReferencedEvent": {
                "type": 178
            },
            "on_DemilestonedEvent": {
                "type": 215
            },
            "on_DependencyGraphManifest": {
                "type": 219
            },
            "on_DeployKey": {
                "type": 222
            },
            "on_DeployedEvent": {
                "type": 225
            },
            "on_Deployment": {
                "type": 226
            },
            "on_DeploymentEnvironmentChangedEvent": {
                "type": 229
            },
            "on_DeploymentStatus": {
                "type": 233
            },
            "on_DisconnectedEvent": {
                "type": 238
            },
            "on_Enterprise": {
                "type": 243
            },
            "on_EnterpriseAdministratorInvitation": {
                "type": 246
            },
            "on_EnterpriseIdentityProvider": {
                "type": 258
            },
            "on_EnterpriseRepositoryInfo": {
                "type": 275
            },
            "on_EnterpriseServerInstallation": {
                "type": 278
            },
            "on_EnterpriseServerUserAccount": {
                "type": 283
            },
            "on_EnterpriseServerUserAccountEmail": {
                "type": 286
            },
            "on_EnterpriseServerUserAccountsUpload": {
                "type": 293
            },
            "on_EnterpriseUserAccount": {
                "type": 299
            },
            "on_ExternalIdentity": {
                "type": 304
            },
            "on_Gist": {
                "type": 316
            },
            "on_GistComment": {
                "type": 317
            },
            "on_HeadRefDeletedEvent": {
                "type": 337
            },
            "on_HeadRefForcePushedEvent": {
                "type": 338
            },
            "on_HeadRefRestoredEvent": {
                "type": 339
            },
            "on_IpAllowListEntry": {
                "type": 348
            },
            "on_Issue": {
                "type": 354
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_Label": {
                "type": 374
            },
            "on_LabeledEvent": {
                "type": 380
            },
            "on_Language": {
                "type": 381
            },
            "on_License": {
                "type": 386
            },
            "on_LockedEvent": {
                "type": 394
            },
            "on_Mannequin": {
                "type": 395
            },
            "on_MarkedAsDuplicateEvent": {
                "type": 398
            },
            "on_MarketplaceCategory": {
                "type": 399
            },
            "on_MarketplaceListing": {
                "type": 400
            },
            "on_MembersCanDeleteReposClearAuditEntry": {
                "type": 404
            },
            "on_MembersCanDeleteReposDisableAuditEntry": {
                "type": 405
            },
            "on_MembersCanDeleteReposEnableAuditEntry": {
                "type": 406
            },
            "on_MentionedEvent": {
                "type": 407
            },
            "on_MergedEvent": {
                "type": 414
            },
            "on_Milestone": {
                "type": 415
            },
            "on_MilestonedEvent": {
                "type": 422
            },
            "on_MovedColumnsInProjectEvent": {
                "type": 430
            },
            "on_OauthApplicationCreateAuditEntry": {
                "type": 434
            },
            "on_OrgAddBillingManagerAuditEntry": {
                "type": 438
            },
            "on_OrgAddMemberAuditEntry": {
                "type": 439
            },
            "on_OrgBlockUserAuditEntry": {
                "type": 441
            },
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": {
                "type": 442
            },
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": {
                "type": 443
            },
            "on_OrgCreateAuditEntry": {
                "type": 444
            },
            "on_OrgDisableOauthAppRestrictionsAuditEntry": {
                "type": 446
            },
            "on_OrgDisableSamlAuditEntry": {
                "type": 447
            },
            "on_OrgDisableTwoFactorRequirementAuditEntry": {
                "type": 448
            },
            "on_OrgEnableOauthAppRestrictionsAuditEntry": {
                "type": 449
            },
            "on_OrgEnableSamlAuditEntry": {
                "type": 450
            },
            "on_OrgEnableTwoFactorRequirementAuditEntry": {
                "type": 451
            },
            "on_OrgInviteMemberAuditEntry": {
                "type": 452
            },
            "on_OrgInviteToBusinessAuditEntry": {
                "type": 453
            },
            "on_OrgOauthAppAccessApprovedAuditEntry": {
                "type": 454
            },
            "on_OrgOauthAppAccessDeniedAuditEntry": {
                "type": 455
            },
            "on_OrgOauthAppAccessRequestedAuditEntry": {
                "type": 456
            },
            "on_OrgRemoveBillingManagerAuditEntry": {
                "type": 457
            },
            "on_OrgRemoveMemberAuditEntry": {
                "type": 459
            },
            "on_OrgRemoveOutsideCollaboratorAuditEntry": {
                "type": 462
            },
            "on_OrgRestoreMemberAuditEntry": {
                "type": 465
            },
            "on_OrgUnblockUserAuditEntry": {
                "type": 470
            },
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": {
                "type": 471
            },
            "on_OrgUpdateMemberAuditEntry": {
                "type": 473
            },
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": {
                "type": 475
            },
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": {
                "type": 477
            },
            "on_Organization": {
                "type": 478
            },
            "on_OrganizationIdentityProvider": {
                "type": 485
            },
            "on_OrganizationInvitation": {
                "type": 486
            },
            "on_Package": {
                "type": 499
            },
            "on_PackageFile": {
                "type": 502
            },
            "on_PackageTag": {
                "type": 511
            },
            "on_PackageVersion": {
                "type": 513
            },
            "on_PinnedEvent": {
                "type": 528
            },
            "on_PinnedIssue": {
                "type": 529
            },
            "on_PrivateRepositoryForkingDisableAuditEntry": {
                "type": 533
            },
            "on_PrivateRepositoryForkingEnableAuditEntry": {
                "type": 534
            },
            "on_Project": {
                "type": 537
            },
            "on_ProjectCard": {
                "type": 538
            },
            "on_ProjectColumn": {
                "type": 545
            },
            "on_PublicKey": {
                "type": 557
            },
            "on_PullRequest": {
                "type": 560
            },
            "on_PullRequestCommit": {
                "type": 564
            },
            "on_PullRequestCommitCommentThread": {
                "type": 565
            },
            "on_PullRequestReview": {
                "type": 574
            },
            "on_PullRequestReviewComment": {
                "type": 575
            },
            "on_PullRequestReviewThread": {
                "type": 585
            },
            "on_Push": {
                "type": 598
            },
            "on_PushAllowance": {
                "type": 599
            },
            "on_Reaction": {
                "type": 608
            },
            "on_ReadyForReviewEvent": {
                "type": 615
            },
            "on_Ref": {
                "type": 616
            },
            "on_ReferencedEvent": {
                "type": 622
            },
            "on_RegistryPackage": {
                "type": 626
            },
            "on_RegistryPackageDependency": {
                "type": 628
            },
            "on_RegistryPackageFile": {
                "type": 633
            },
            "on_RegistryPackageTag": {
                "type": 640
            },
            "on_RegistryPackageVersion": {
                "type": 644
            },
            "on_Release": {
                "type": 648
            },
            "on_ReleaseAsset": {
                "type": 649
            },
            "on_RemovedFromProjectEvent": {
                "type": 672
            },
            "on_RenamedTitleEvent": {
                "type": 673
            },
            "on_ReopenedEvent": {
                "type": 679
            },
            "on_RepoAccessAuditEntry": {
                "type": 680
            },
            "on_RepoAddMemberAuditEntry": {
                "type": 682
            },
            "on_RepoAddTopicAuditEntry": {
                "type": 684
            },
            "on_RepoArchivedAuditEntry": {
                "type": 685
            },
            "on_RepoChangeMergeSettingAuditEntry": {
                "type": 687
            },
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": {
                "type": 689
            },
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": {
                "type": 690
            },
            "on_RepoConfigDisableContributorsOnlyAuditEntry": {
                "type": 691
            },
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": {
                "type": 692
            },
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": {
                "type": 693
            },
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": {
                "type": 694
            },
            "on_RepoConfigEnableContributorsOnlyAuditEntry": {
                "type": 695
            },
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": {
                "type": 696
            },
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": {
                "type": 697
            },
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": {
                "type": 698
            },
            "on_RepoCreateAuditEntry": {
                "type": 699
            },
            "on_RepoDestroyAuditEntry": {
                "type": 701
            },
            "on_RepoRemoveMemberAuditEntry": {
                "type": 703
            },
            "on_RepoRemoveTopicAuditEntry": {
                "type": 705
            },
            "on_Repository": {
                "type": 707
            },
            "on_RepositoryInvitation": {
                "type": 716
            },
            "on_RepositoryTopic": {
                "type": 728
            },
            "on_RepositoryVisibilityChangeDisableAuditEntry": {
                "type": 732
            },
            "on_RepositoryVisibilityChangeEnableAuditEntry": {
                "type": 733
            },
            "on_RepositoryVulnerabilityAlert": {
                "type": 734
            },
            "on_ReviewDismissalAllowance": {
                "type": 746
            },
            "on_ReviewDismissedEvent": {
                "type": 750
            },
            "on_ReviewRequest": {
                "type": 751
            },
            "on_ReviewRequestRemovedEvent": {
                "type": 754
            },
            "on_ReviewRequestedEvent": {
                "type": 755
            },
            "on_SavedReply": {
                "type": 759
            },
            "on_SecurityAdvisory": {
                "type": 768
            },
            "on_SponsorsListing": {
                "type": 791
            },
            "on_SponsorsTier": {
                "type": 792
            },
            "on_Sponsorship": {
                "type": 798
            },
            "on_Status": {
                "type": 811
            },
            "on_StatusCheckRollup": {
                "type": 812
            },
            "on_StatusContext": {
                "type": 816
            },
            "on_SubscribedEvent": {
                "type": 824
            },
            "on_Tag": {
                "type": 827
            },
            "on_Team": {
                "type": 828
            },
            "on_TeamAddMemberAuditEntry": {
                "type": 829
            },
            "on_TeamAddRepositoryAuditEntry": {
                "type": 830
            },
            "on_TeamChangeParentTeamAuditEntry": {
                "type": 832
            },
            "on_TeamDiscussion": {
                "type": 834
            },
            "on_TeamDiscussionComment": {
                "type": 835
            },
            "on_TeamRemoveMemberAuditEntry": {
                "type": 854
            },
            "on_TeamRemoveRepositoryAuditEntry": {
                "type": 855
            },
            "on_Topic": {
                "type": 864
            },
            "on_TransferredEvent": {
                "type": 871
            },
            "on_Tree": {
                "type": 872
            },
            "on_UnassignedEvent": {
                "type": 877
            },
            "on_UnlabeledEvent": {
                "type": 882
            },
            "on_UnlockedEvent": {
                "type": 887
            },
            "on_UnmarkedAsDuplicateEvent": {
                "type": 890
            },
            "on_UnpinnedEvent": {
                "type": 895
            },
            "on_UnsubscribedEvent": {
                "type": 898
            },
            "on_User": {
                "type": 979
            },
            "on_UserBlockedEvent": {
                "type": 981
            },
            "on_UserContentEdit": {
                "type": 983
            },
            "on_UserStatus": {
                "type": 987
            },
            "__typename": {
                "type": 1
            }
        },
        "OauthApplicationAuditEntryData": {
            "oauthApplicationName": {
                "type": 1
            },
            "oauthApplicationResourcePath": {
                "type": 874
            },
            "oauthApplicationUrl": {
                "type": 874
            },
            "on_OauthApplicationCreateAuditEntry": {
                "type": 434
            },
            "on_OrgOauthAppAccessApprovedAuditEntry": {
                "type": 454
            },
            "on_OrgOauthAppAccessDeniedAuditEntry": {
                "type": 455
            },
            "on_OrgOauthAppAccessRequestedAuditEntry": {
                "type": 456
            },
            "__typename": {
                "type": 1
            }
        },
        "OauthApplicationCreateAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "applicationUrl": {
                "type": 874
            },
            "callbackUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "oauthApplicationName": {
                "type": 1
            },
            "oauthApplicationResourcePath": {
                "type": 874
            },
            "oauthApplicationUrl": {
                "type": 874
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "rateLimit": {
                "type": 8
            },
            "state": {
                "type": 435
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OauthApplicationCreateAuditEntryState": {},
        "OperationType": {},
        "OrderDirection": {},
        "OrgAddBillingManagerAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "invitationEmail": {
                "type": 1
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgAddMemberAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "permission": {
                "type": 440
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgAddMemberAuditEntryPermission": {},
        "OrgBlockUserAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "blockedUser": {
                "type": 979
            },
            "blockedUserName": {
                "type": 1
            },
            "blockedUserResourcePath": {
                "type": 874
            },
            "blockedUserUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgConfigDisableCollaboratorsOnlyAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgConfigEnableCollaboratorsOnlyAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgCreateAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "billingPlan": {
                "type": 445
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgCreateAuditEntryBillingPlan": {},
        "OrgDisableOauthAppRestrictionsAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgDisableSamlAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "digestMethodUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "issuerUrl": {
                "type": 874
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "signatureMethodUrl": {
                "type": 874
            },
            "singleSignOnUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgDisableTwoFactorRequirementAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgEnableOauthAppRestrictionsAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgEnableSamlAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "digestMethodUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "issuerUrl": {
                "type": 874
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "signatureMethodUrl": {
                "type": 874
            },
            "singleSignOnUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgEnableTwoFactorRequirementAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgInviteMemberAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "email": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationInvitation": {
                "type": 486
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgInviteToBusinessAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "enterpriseResourcePath": {
                "type": 874
            },
            "enterpriseSlug": {
                "type": 1
            },
            "enterpriseUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgOauthAppAccessApprovedAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "oauthApplicationName": {
                "type": 1
            },
            "oauthApplicationResourcePath": {
                "type": 874
            },
            "oauthApplicationUrl": {
                "type": 874
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgOauthAppAccessDeniedAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "oauthApplicationName": {
                "type": 1
            },
            "oauthApplicationResourcePath": {
                "type": 874
            },
            "oauthApplicationUrl": {
                "type": 874
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgOauthAppAccessRequestedAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "oauthApplicationName": {
                "type": 1
            },
            "oauthApplicationResourcePath": {
                "type": 874
            },
            "oauthApplicationUrl": {
                "type": 874
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgRemoveBillingManagerAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "reason": {
                "type": 458
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgRemoveBillingManagerAuditEntryReason": {},
        "OrgRemoveMemberAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "membershipTypes": {
                "type": 460
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "reason": {
                "type": 461
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgRemoveMemberAuditEntryMembershipType": {},
        "OrgRemoveMemberAuditEntryReason": {},
        "OrgRemoveOutsideCollaboratorAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "membershipTypes": {
                "type": 463
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "reason": {
                "type": 464
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgRemoveOutsideCollaboratorAuditEntryMembershipType": {},
        "OrgRemoveOutsideCollaboratorAuditEntryReason": {},
        "OrgRestoreMemberAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "restoredCustomEmailRoutingsCount": {
                "type": 8
            },
            "restoredIssueAssignmentsCount": {
                "type": 8
            },
            "restoredMemberships": {
                "type": 466
            },
            "restoredMembershipsCount": {
                "type": 8
            },
            "restoredRepositoriesCount": {
                "type": 8
            },
            "restoredRepositoryStarsCount": {
                "type": 8
            },
            "restoredRepositoryWatchesCount": {
                "type": 8
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgRestoreMemberAuditEntryMembership": {
            "on_OrgRestoreMemberMembershipOrganizationAuditEntryData": {
                "type": 467
            },
            "on_OrgRestoreMemberMembershipRepositoryAuditEntryData": {
                "type": 468
            },
            "on_OrgRestoreMemberMembershipTeamAuditEntryData": {
                "type": 469
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgRestoreMemberMembershipOrganizationAuditEntryData": {
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgRestoreMemberMembershipRepositoryAuditEntryData": {
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgRestoreMemberMembershipTeamAuditEntryData": {
            "team": {
                "type": 828
            },
            "teamName": {
                "type": 1
            },
            "teamResourcePath": {
                "type": 874
            },
            "teamUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgUnblockUserAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "blockedUser": {
                "type": 979
            },
            "blockedUserName": {
                "type": 1
            },
            "blockedUserResourcePath": {
                "type": 874
            },
            "blockedUserUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgUpdateDefaultRepositoryPermissionAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "permission": {
                "type": 472
            },
            "permissionWas": {
                "type": 472
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgUpdateDefaultRepositoryPermissionAuditEntryPermission": {},
        "OrgUpdateMemberAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "permission": {
                "type": 474
            },
            "permissionWas": {
                "type": 474
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgUpdateMemberAuditEntryPermission": {},
        "OrgUpdateMemberRepositoryCreationPermissionAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "canCreateRepositories": {
                "type": 48
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "visibility": {
                "type": 476
            },
            "__typename": {
                "type": 1
            }
        },
        "OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility": {},
        "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "canInviteOutsideCollaboratorsToRepositories": {
                "type": 48
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "Organization": {
            "anyPinnableItems": {
                "type": 48,
                "args": {
                    "type": [
                        527
                    ]
                }
            },
            "auditLog": {
                "type": 480,
                "args": {
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
            },
            "avatarUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "description": {
                "type": 1
            },
            "descriptionHTML": {
                "type": 1
            },
            "email": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "ipAllowListEnabledSetting": {
                "type": 347
            },
            "ipAllowListEntries": {
                "type": 349,
                "args": {
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
            },
            "isVerified": {
                "type": 48
            },
            "itemShowcase": {
                "type": 535
            },
            "location": {
                "type": 1
            },
            "login": {
                "type": 1
            },
            "memberStatuses": {
                "type": 988,
                "args": {
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
            },
            "membersWithRole": {
                "type": 491,
                "args": {
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
            },
            "name": {
                "type": 1
            },
            "newTeamResourcePath": {
                "type": 874
            },
            "newTeamUrl": {
                "type": 874
            },
            "organizationBillingEmail": {
                "type": 1
            },
            "packages": {
                "type": 500,
                "args": {
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
            },
            "pendingMembers": {
                "type": 982,
                "args": {
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
            },
            "pinnableItems": {
                "type": 525,
                "args": {
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
            },
            "pinnedItems": {
                "type": 525,
                "args": {
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
            },
            "pinnedItemsRemaining": {
                "type": 8
            },
            "project": {
                "type": 537,
                "args": {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            },
            "projects": {
                "type": 550,
                "args": {
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
            },
            "projectsResourcePath": {
                "type": 874
            },
            "projectsUrl": {
                "type": 874
            },
            "registryPackages": {
                "type": 627,
                "args": {
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
            },
            "registryPackagesForQuery": {
                "type": 627,
                "args": {
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
            },
            "repositories": {
                "type": 712,
                "args": {
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
            },
            "repository": {
                "type": 707,
                "args": {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            },
            "requiresTwoFactorAuthentication": {
                "type": 48
            },
            "resourcePath": {
                "type": 874
            },
            "samlIdentityProvider": {
                "type": 485
            },
            "sponsorsListing": {
                "type": 791
            },
            "sponsorshipsAsMaintainer": {
                "type": 799,
                "args": {
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
            },
            "sponsorshipsAsSponsor": {
                "type": 799,
                "args": {
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
            },
            "team": {
                "type": 828,
                "args": {
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            },
            "teams": {
                "type": 833,
                "args": {
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
            },
            "teamsResourcePath": {
                "type": 874
            },
            "teamsUrl": {
                "type": 874
            },
            "twitterUsername": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "viewerCanAdminister": {
                "type": 48
            },
            "viewerCanChangePinnedItems": {
                "type": 48
            },
            "viewerCanCreateProjects": {
                "type": 48
            },
            "viewerCanCreateRepositories": {
                "type": 48
            },
            "viewerCanCreateTeams": {
                "type": 48
            },
            "viewerIsAMember": {
                "type": 48
            },
            "websiteUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationAuditEntry": {
            "on_MembersCanDeleteReposClearAuditEntry": {
                "type": 404
            },
            "on_MembersCanDeleteReposDisableAuditEntry": {
                "type": 405
            },
            "on_MembersCanDeleteReposEnableAuditEntry": {
                "type": 406
            },
            "on_OauthApplicationCreateAuditEntry": {
                "type": 434
            },
            "on_OrgAddBillingManagerAuditEntry": {
                "type": 438
            },
            "on_OrgAddMemberAuditEntry": {
                "type": 439
            },
            "on_OrgBlockUserAuditEntry": {
                "type": 441
            },
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": {
                "type": 442
            },
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": {
                "type": 443
            },
            "on_OrgCreateAuditEntry": {
                "type": 444
            },
            "on_OrgDisableOauthAppRestrictionsAuditEntry": {
                "type": 446
            },
            "on_OrgDisableSamlAuditEntry": {
                "type": 447
            },
            "on_OrgDisableTwoFactorRequirementAuditEntry": {
                "type": 448
            },
            "on_OrgEnableOauthAppRestrictionsAuditEntry": {
                "type": 449
            },
            "on_OrgEnableSamlAuditEntry": {
                "type": 450
            },
            "on_OrgEnableTwoFactorRequirementAuditEntry": {
                "type": 451
            },
            "on_OrgInviteMemberAuditEntry": {
                "type": 452
            },
            "on_OrgInviteToBusinessAuditEntry": {
                "type": 453
            },
            "on_OrgOauthAppAccessApprovedAuditEntry": {
                "type": 454
            },
            "on_OrgOauthAppAccessDeniedAuditEntry": {
                "type": 455
            },
            "on_OrgOauthAppAccessRequestedAuditEntry": {
                "type": 456
            },
            "on_OrgRemoveBillingManagerAuditEntry": {
                "type": 457
            },
            "on_OrgRemoveMemberAuditEntry": {
                "type": 459
            },
            "on_OrgRemoveOutsideCollaboratorAuditEntry": {
                "type": 462
            },
            "on_OrgRestoreMemberAuditEntry": {
                "type": 465
            },
            "on_OrgUnblockUserAuditEntry": {
                "type": 470
            },
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": {
                "type": 471
            },
            "on_OrgUpdateMemberAuditEntry": {
                "type": 473
            },
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": {
                "type": 475
            },
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": {
                "type": 477
            },
            "on_PrivateRepositoryForkingDisableAuditEntry": {
                "type": 533
            },
            "on_PrivateRepositoryForkingEnableAuditEntry": {
                "type": 534
            },
            "on_RepoAccessAuditEntry": {
                "type": 680
            },
            "on_RepoAddMemberAuditEntry": {
                "type": 682
            },
            "on_RepoAddTopicAuditEntry": {
                "type": 684
            },
            "on_RepoArchivedAuditEntry": {
                "type": 685
            },
            "on_RepoChangeMergeSettingAuditEntry": {
                "type": 687
            },
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": {
                "type": 689
            },
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": {
                "type": 690
            },
            "on_RepoConfigDisableContributorsOnlyAuditEntry": {
                "type": 691
            },
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": {
                "type": 692
            },
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": {
                "type": 693
            },
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": {
                "type": 694
            },
            "on_RepoConfigEnableContributorsOnlyAuditEntry": {
                "type": 695
            },
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": {
                "type": 696
            },
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": {
                "type": 697
            },
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": {
                "type": 698
            },
            "on_RepoCreateAuditEntry": {
                "type": 699
            },
            "on_RepoDestroyAuditEntry": {
                "type": 701
            },
            "on_RepoRemoveMemberAuditEntry": {
                "type": 703
            },
            "on_RepoRemoveTopicAuditEntry": {
                "type": 705
            },
            "on_RepositoryVisibilityChangeDisableAuditEntry": {
                "type": 732
            },
            "on_RepositoryVisibilityChangeEnableAuditEntry": {
                "type": 733
            },
            "on_TeamAddMemberAuditEntry": {
                "type": 829
            },
            "on_TeamAddRepositoryAuditEntry": {
                "type": 830
            },
            "on_TeamChangeParentTeamAuditEntry": {
                "type": 832
            },
            "on_TeamRemoveMemberAuditEntry": {
                "type": 854
            },
            "on_TeamRemoveRepositoryAuditEntry": {
                "type": 855
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationAuditEntryConnection": {
            "edges": {
                "type": 482
            },
            "nodes": {
                "type": 479
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationAuditEntryData": {
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "on_MembersCanDeleteReposClearAuditEntry": {
                "type": 404
            },
            "on_MembersCanDeleteReposDisableAuditEntry": {
                "type": 405
            },
            "on_MembersCanDeleteReposEnableAuditEntry": {
                "type": 406
            },
            "on_OauthApplicationCreateAuditEntry": {
                "type": 434
            },
            "on_OrgAddBillingManagerAuditEntry": {
                "type": 438
            },
            "on_OrgAddMemberAuditEntry": {
                "type": 439
            },
            "on_OrgBlockUserAuditEntry": {
                "type": 441
            },
            "on_OrgConfigDisableCollaboratorsOnlyAuditEntry": {
                "type": 442
            },
            "on_OrgConfigEnableCollaboratorsOnlyAuditEntry": {
                "type": 443
            },
            "on_OrgCreateAuditEntry": {
                "type": 444
            },
            "on_OrgDisableOauthAppRestrictionsAuditEntry": {
                "type": 446
            },
            "on_OrgDisableSamlAuditEntry": {
                "type": 447
            },
            "on_OrgDisableTwoFactorRequirementAuditEntry": {
                "type": 448
            },
            "on_OrgEnableOauthAppRestrictionsAuditEntry": {
                "type": 449
            },
            "on_OrgEnableSamlAuditEntry": {
                "type": 450
            },
            "on_OrgEnableTwoFactorRequirementAuditEntry": {
                "type": 451
            },
            "on_OrgInviteMemberAuditEntry": {
                "type": 452
            },
            "on_OrgInviteToBusinessAuditEntry": {
                "type": 453
            },
            "on_OrgOauthAppAccessApprovedAuditEntry": {
                "type": 454
            },
            "on_OrgOauthAppAccessDeniedAuditEntry": {
                "type": 455
            },
            "on_OrgOauthAppAccessRequestedAuditEntry": {
                "type": 456
            },
            "on_OrgRemoveBillingManagerAuditEntry": {
                "type": 457
            },
            "on_OrgRemoveMemberAuditEntry": {
                "type": 459
            },
            "on_OrgRemoveOutsideCollaboratorAuditEntry": {
                "type": 462
            },
            "on_OrgRestoreMemberAuditEntry": {
                "type": 465
            },
            "on_OrgRestoreMemberMembershipOrganizationAuditEntryData": {
                "type": 467
            },
            "on_OrgUnblockUserAuditEntry": {
                "type": 470
            },
            "on_OrgUpdateDefaultRepositoryPermissionAuditEntry": {
                "type": 471
            },
            "on_OrgUpdateMemberAuditEntry": {
                "type": 473
            },
            "on_OrgUpdateMemberRepositoryCreationPermissionAuditEntry": {
                "type": 475
            },
            "on_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry": {
                "type": 477
            },
            "on_PrivateRepositoryForkingDisableAuditEntry": {
                "type": 533
            },
            "on_PrivateRepositoryForkingEnableAuditEntry": {
                "type": 534
            },
            "on_RepoAccessAuditEntry": {
                "type": 680
            },
            "on_RepoAddMemberAuditEntry": {
                "type": 682
            },
            "on_RepoAddTopicAuditEntry": {
                "type": 684
            },
            "on_RepoArchivedAuditEntry": {
                "type": 685
            },
            "on_RepoChangeMergeSettingAuditEntry": {
                "type": 687
            },
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": {
                "type": 689
            },
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": {
                "type": 690
            },
            "on_RepoConfigDisableContributorsOnlyAuditEntry": {
                "type": 691
            },
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": {
                "type": 692
            },
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": {
                "type": 693
            },
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": {
                "type": 694
            },
            "on_RepoConfigEnableContributorsOnlyAuditEntry": {
                "type": 695
            },
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": {
                "type": 696
            },
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": {
                "type": 697
            },
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": {
                "type": 698
            },
            "on_RepoCreateAuditEntry": {
                "type": 699
            },
            "on_RepoDestroyAuditEntry": {
                "type": 701
            },
            "on_RepoRemoveMemberAuditEntry": {
                "type": 703
            },
            "on_RepoRemoveTopicAuditEntry": {
                "type": 705
            },
            "on_RepositoryVisibilityChangeDisableAuditEntry": {
                "type": 732
            },
            "on_RepositoryVisibilityChangeEnableAuditEntry": {
                "type": 733
            },
            "on_TeamAddMemberAuditEntry": {
                "type": 829
            },
            "on_TeamAddRepositoryAuditEntry": {
                "type": 830
            },
            "on_TeamChangeParentTeamAuditEntry": {
                "type": 832
            },
            "on_TeamRemoveMemberAuditEntry": {
                "type": 854
            },
            "on_TeamRemoveRepositoryAuditEntry": {
                "type": 855
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationAuditEntryEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 479
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationConnection": {
            "edges": {
                "type": 484
            },
            "nodes": {
                "type": 478
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 478
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationIdentityProvider": {
            "digestMethod": {
                "type": 874
            },
            "externalIdentities": {
                "type": 305,
                "args": {
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
            },
            "id": {
                "type": 2
            },
            "idpCertificate": {
                "type": 993
            },
            "issuer": {
                "type": 1
            },
            "organization": {
                "type": 478
            },
            "signatureMethod": {
                "type": 874
            },
            "ssoUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationInvitation": {
            "createdAt": {
                "type": 180
            },
            "email": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "invitationType": {
                "type": 490
            },
            "invitee": {
                "type": 979
            },
            "inviter": {
                "type": 979
            },
            "organization": {
                "type": 478
            },
            "role": {
                "type": 489
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationInvitationConnection": {
            "edges": {
                "type": 488
            },
            "nodes": {
                "type": 486
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationInvitationEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 486
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationInvitationRole": {},
        "OrganizationInvitationType": {},
        "OrganizationMemberConnection": {
            "edges": {
                "type": 492
            },
            "nodes": {
                "type": 979
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationMemberEdge": {
            "cursor": {
                "type": 1
            },
            "hasTwoFactorEnabled": {
                "type": 48
            },
            "node": {
                "type": 979
            },
            "role": {
                "type": 493
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationMemberRole": {},
        "OrganizationMembersCanCreateRepositoriesSettingValue": {},
        "OrganizationOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 496
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationOrderField": {},
        "OrganizationTeamsHovercardContext": {
            "message": {
                "type": 1
            },
            "octicon": {
                "type": 1
            },
            "relevantTeams": {
                "type": 833,
                "args": {
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
            },
            "teamsResourcePath": {
                "type": 874
            },
            "teamsUrl": {
                "type": 874
            },
            "totalTeamCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "OrganizationsHovercardContext": {
            "message": {
                "type": 1
            },
            "octicon": {
                "type": 1
            },
            "relevantOrganizations": {
                "type": 483,
                "args": {
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
            },
            "totalOrganizationCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "Package": {
            "id": {
                "type": 2
            },
            "latestVersion": {
                "type": 513
            },
            "name": {
                "type": 1
            },
            "packageType": {
                "type": 512
            },
            "repository": {
                "type": 707
            },
            "statistics": {
                "type": 510
            },
            "version": {
                "type": 513,
                "args": {
                    "version": [
                        1,
                        "String!"
                    ]
                }
            },
            "versions": {
                "type": 514,
                "args": {
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
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageConnection": {
            "edges": {
                "type": 501
            },
            "nodes": {
                "type": 499
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 499
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageFile": {
            "id": {
                "type": 2
            },
            "md5": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "packageVersion": {
                "type": 513
            },
            "sha1": {
                "type": 1
            },
            "sha256": {
                "type": 1
            },
            "size": {
                "type": 8
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageFileConnection": {
            "edges": {
                "type": 504
            },
            "nodes": {
                "type": 502
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageFileEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 502
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageFileOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 506
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageFileOrderField": {},
        "PackageOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 508
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageOrderField": {},
        "PackageOwner": {
            "id": {
                "type": 2
            },
            "packages": {
                "type": 500,
                "args": {
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
            },
            "on_Organization": {
                "type": 478
            },
            "on_Repository": {
                "type": 707
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageStatistics": {
            "downloadsTotalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageTag": {
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "version": {
                "type": 513
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageType": {},
        "PackageVersion": {
            "files": {
                "type": 503,
                "args": {
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
            },
            "id": {
                "type": 2
            },
            "package": {
                "type": 499
            },
            "platform": {
                "type": 1
            },
            "preRelease": {
                "type": 48
            },
            "readme": {
                "type": 1
            },
            "release": {
                "type": 648
            },
            "statistics": {
                "type": 518
            },
            "summary": {
                "type": 1
            },
            "version": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageVersionConnection": {
            "edges": {
                "type": 515
            },
            "nodes": {
                "type": 513
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageVersionEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 513
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageVersionOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 517
            },
            "__typename": {
                "type": 1
            }
        },
        "PackageVersionOrderField": {},
        "PackageVersionStatistics": {
            "downloadsTotalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PageInfo": {
            "endCursor": {
                "type": 1
            },
            "hasNextPage": {
                "type": 48
            },
            "hasPreviousPage": {
                "type": 48
            },
            "startCursor": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "PermissionGranter": {
            "on_Organization": {
                "type": 478
            },
            "on_Repository": {
                "type": 707
            },
            "on_Team": {
                "type": 828
            },
            "__typename": {
                "type": 1
            }
        },
        "PermissionSource": {
            "organization": {
                "type": 478
            },
            "permission": {
                "type": 183
            },
            "source": {
                "type": 520
            },
            "__typename": {
                "type": 1
            }
        },
        "PinIssueInput": {
            "clientMutationId": {
                "type": 1
            },
            "issueId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "PinIssuePayload": {
            "clientMutationId": {
                "type": 1
            },
            "issue": {
                "type": 354
            },
            "__typename": {
                "type": 1
            }
        },
        "PinnableItem": {
            "on_Gist": {
                "type": 316
            },
            "on_Repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "PinnableItemConnection": {
            "edges": {
                "type": 526
            },
            "nodes": {
                "type": 524
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PinnableItemEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 524
            },
            "__typename": {
                "type": 1
            }
        },
        "PinnableItemType": {},
        "PinnedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "issue": {
                "type": 354
            },
            "__typename": {
                "type": 1
            }
        },
        "PinnedIssue": {
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "issue": {
                "type": 354
            },
            "pinnedBy": {
                "type": 7
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "PinnedIssueConnection": {
            "edges": {
                "type": 531
            },
            "nodes": {
                "type": 529
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PinnedIssueEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 529
            },
            "__typename": {
                "type": 1
            }
        },
        "PreciseDateTime": {},
        "PrivateRepositoryForkingDisableAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "enterpriseResourcePath": {
                "type": 874
            },
            "enterpriseSlug": {
                "type": 1
            },
            "enterpriseUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "PrivateRepositoryForkingEnableAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "enterpriseResourcePath": {
                "type": 874
            },
            "enterpriseSlug": {
                "type": 1
            },
            "enterpriseUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "ProfileItemShowcase": {
            "hasPinnedItems": {
                "type": 48
            },
            "items": {
                "type": 525,
                "args": {
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
            },
            "__typename": {
                "type": 1
            }
        },
        "ProfileOwner": {
            "anyPinnableItems": {
                "type": 48,
                "args": {
                    "type": [
                        527
                    ]
                }
            },
            "email": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "itemShowcase": {
                "type": 535
            },
            "location": {
                "type": 1
            },
            "login": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "pinnableItems": {
                "type": 525,
                "args": {
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
            },
            "pinnedItems": {
                "type": 525,
                "args": {
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
            },
            "pinnedItemsRemaining": {
                "type": 8
            },
            "viewerCanChangePinnedItems": {
                "type": 48
            },
            "websiteUrl": {
                "type": 874
            },
            "on_Organization": {
                "type": 478
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "Project": {
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "closed": {
                "type": 48
            },
            "closedAt": {
                "type": 180
            },
            "columns": {
                "type": 546,
                "args": {
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
            },
            "createdAt": {
                "type": 180
            },
            "creator": {
                "type": 7
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "number": {
                "type": 8
            },
            "owner": {
                "type": 554
            },
            "pendingCards": {
                "type": 540,
                "args": {
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
            },
            "resourcePath": {
                "type": 874
            },
            "state": {
                "type": 555
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "viewerCanUpdate": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectCard": {
            "column": {
                "type": 545
            },
            "content": {
                "type": 543
            },
            "createdAt": {
                "type": 180
            },
            "creator": {
                "type": 7
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "isArchived": {
                "type": 48
            },
            "note": {
                "type": 1
            },
            "project": {
                "type": 537
            },
            "resourcePath": {
                "type": 874
            },
            "state": {
                "type": 544
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectCardArchivedState": {},
        "ProjectCardConnection": {
            "edges": {
                "type": 541
            },
            "nodes": {
                "type": 538
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectCardEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 538
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectCardImport": {
            "number": {
                "type": 8
            },
            "repository": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectCardItem": {
            "on_Issue": {
                "type": 354
            },
            "on_PullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectCardState": {},
        "ProjectColumn": {
            "cards": {
                "type": 540,
                "args": {
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
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "project": {
                "type": 537
            },
            "purpose": {
                "type": 549
            },
            "resourcePath": {
                "type": 874
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectColumnConnection": {
            "edges": {
                "type": 547
            },
            "nodes": {
                "type": 545
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectColumnEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 545
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectColumnImport": {
            "columnName": {
                "type": 1
            },
            "issues": {
                "type": 542
            },
            "position": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectColumnPurpose": {},
        "ProjectConnection": {
            "edges": {
                "type": 551
            },
            "nodes": {
                "type": 537
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 537
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 553
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectOrderField": {},
        "ProjectOwner": {
            "id": {
                "type": 2
            },
            "project": {
                "type": 537,
                "args": {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            },
            "projects": {
                "type": 550,
                "args": {
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
            },
            "projectsResourcePath": {
                "type": 874
            },
            "projectsUrl": {
                "type": 874
            },
            "viewerCanCreateProjects": {
                "type": 48
            },
            "on_Organization": {
                "type": 478
            },
            "on_Repository": {
                "type": 707
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "ProjectState": {},
        "ProjectTemplate": {},
        "PublicKey": {
            "accessedAt": {
                "type": 180
            },
            "createdAt": {
                "type": 180
            },
            "fingerprint": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "isReadOnly": {
                "type": 48
            },
            "key": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "PublicKeyConnection": {
            "edges": {
                "type": 559
            },
            "nodes": {
                "type": 557
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PublicKeyEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 557
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequest": {
            "activeLockReason": {
                "type": 392
            },
            "additions": {
                "type": 8
            },
            "assignees": {
                "type": 982,
                "args": {
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
            },
            "author": {
                "type": 7
            },
            "authorAssociation": {
                "type": 99
            },
            "baseRef": {
                "type": 616
            },
            "baseRefName": {
                "type": 1
            },
            "baseRefOid": {
                "type": 329
            },
            "baseRepository": {
                "type": 707
            },
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "bodyText": {
                "type": 1
            },
            "canBeRebased": {
                "type": 48
            },
            "changedFiles": {
                "type": 8
            },
            "checksResourcePath": {
                "type": 874
            },
            "checksUrl": {
                "type": 874
            },
            "closed": {
                "type": 48
            },
            "closedAt": {
                "type": 180
            },
            "comments": {
                "type": 356,
                "args": {
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
            },
            "commits": {
                "type": 566,
                "args": {
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
            },
            "createdAt": {
                "type": 180
            },
            "createdViaEmail": {
                "type": 48
            },
            "databaseId": {
                "type": 8
            },
            "deletions": {
                "type": 8
            },
            "editor": {
                "type": 7
            },
            "files": {
                "type": 562,
                "args": {
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
            },
            "headRef": {
                "type": 616
            },
            "headRefName": {
                "type": 1
            },
            "headRefOid": {
                "type": 329
            },
            "headRepository": {
                "type": 707
            },
            "headRepositoryOwner": {
                "type": 725
            },
            "hovercard": {
                "type": 340,
                "args": {
                    "includeNotificationContexts": [
                        48
                    ]
                }
            },
            "id": {
                "type": 2
            },
            "includesCreatedEdit": {
                "type": 48
            },
            "isCrossRepository": {
                "type": 48
            },
            "isDraft": {
                "type": 48
            },
            "labels": {
                "type": 375,
                "args": {
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
            },
            "lastEditedAt": {
                "type": 180
            },
            "locked": {
                "type": 48
            },
            "maintainerCanModify": {
                "type": 48
            },
            "mergeCommit": {
                "type": 102
            },
            "mergeStateStatus": {
                "type": 412
            },
            "mergeable": {
                "type": 413
            },
            "merged": {
                "type": 48
            },
            "mergedAt": {
                "type": 180
            },
            "mergedBy": {
                "type": 7
            },
            "milestone": {
                "type": 415
            },
            "number": {
                "type": 8
            },
            "participants": {
                "type": 982,
                "args": {
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
            },
            "permalink": {
                "type": 874
            },
            "potentialMergeCommit": {
                "type": 102
            },
            "projectCards": {
                "type": 540,
                "args": {
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
            },
            "publishedAt": {
                "type": 180
            },
            "reactionGroups": {
                "type": 612
            },
            "reactions": {
                "type": 609,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "revertResourcePath": {
                "type": 874
            },
            "revertUrl": {
                "type": 874
            },
            "reviewDecision": {
                "type": 581
            },
            "reviewRequests": {
                "type": 752,
                "args": {
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
            },
            "reviewThreads": {
                "type": 586,
                "args": {
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
            },
            "reviews": {
                "type": 579,
                "args": {
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
            },
            "state": {
                "type": 589
            },
            "suggestedReviewers": {
                "type": 826
            },
            "timeline": {
                "type": 590,
                "args": {
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
            },
            "timelineItems": {
                "type": 594,
                "args": {
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
            },
            "title": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "userContentEdits": {
                "type": 984,
                "args": {
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
            },
            "viewerCanApplySuggestion": {
                "type": 48
            },
            "viewerCanReact": {
                "type": 48
            },
            "viewerCanSubscribe": {
                "type": 48
            },
            "viewerCanUpdate": {
                "type": 48
            },
            "viewerCannotUpdateReasons": {
                "type": 100
            },
            "viewerDidAuthor": {
                "type": 48
            },
            "viewerSubscription": {
                "type": 825
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestChangedFile": {
            "additions": {
                "type": 8
            },
            "deletions": {
                "type": 8
            },
            "path": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestChangedFileConnection": {
            "edges": {
                "type": 563
            },
            "nodes": {
                "type": 561
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestChangedFileEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 561
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestCommit": {
            "commit": {
                "type": 102
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestCommitCommentThread": {
            "comments": {
                "type": 105,
                "args": {
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
            },
            "commit": {
                "type": 102
            },
            "id": {
                "type": 2
            },
            "path": {
                "type": 1
            },
            "position": {
                "type": 8
            },
            "pullRequest": {
                "type": 560
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestCommitConnection": {
            "edges": {
                "type": 567
            },
            "nodes": {
                "type": 564
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestCommitEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 564
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestConnection": {
            "edges": {
                "type": 570
            },
            "nodes": {
                "type": 560
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestContributionsByRepository": {
            "contributions": {
                "type": 168,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestMergeMethod": {},
        "PullRequestOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 573
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestOrderField": {},
        "PullRequestReview": {
            "author": {
                "type": 7
            },
            "authorAssociation": {
                "type": 99
            },
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "bodyText": {
                "type": 1
            },
            "comments": {
                "type": 576,
                "args": {
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
            },
            "commit": {
                "type": 102
            },
            "createdAt": {
                "type": 180
            },
            "createdViaEmail": {
                "type": 48
            },
            "databaseId": {
                "type": 8
            },
            "editor": {
                "type": 7
            },
            "id": {
                "type": 2
            },
            "includesCreatedEdit": {
                "type": 48
            },
            "lastEditedAt": {
                "type": 180
            },
            "onBehalfOf": {
                "type": 833,
                "args": {
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
            },
            "publishedAt": {
                "type": 180
            },
            "pullRequest": {
                "type": 560
            },
            "reactionGroups": {
                "type": 612
            },
            "reactions": {
                "type": 609,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "state": {
                "type": 584
            },
            "submittedAt": {
                "type": 180
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "userContentEdits": {
                "type": 984,
                "args": {
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
            },
            "viewerCanDelete": {
                "type": 48
            },
            "viewerCanReact": {
                "type": 48
            },
            "viewerCanUpdate": {
                "type": 48
            },
            "viewerCannotUpdateReasons": {
                "type": 100
            },
            "viewerDidAuthor": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestReviewComment": {
            "author": {
                "type": 7
            },
            "authorAssociation": {
                "type": 99
            },
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "bodyText": {
                "type": 1
            },
            "commit": {
                "type": 102
            },
            "createdAt": {
                "type": 180
            },
            "createdViaEmail": {
                "type": 48
            },
            "databaseId": {
                "type": 8
            },
            "diffHunk": {
                "type": 1
            },
            "draftedAt": {
                "type": 180
            },
            "editor": {
                "type": 7
            },
            "id": {
                "type": 2
            },
            "includesCreatedEdit": {
                "type": 48
            },
            "isMinimized": {
                "type": 48
            },
            "lastEditedAt": {
                "type": 180
            },
            "minimizedReason": {
                "type": 1
            },
            "originalCommit": {
                "type": 102
            },
            "originalPosition": {
                "type": 8
            },
            "outdated": {
                "type": 48
            },
            "path": {
                "type": 1
            },
            "position": {
                "type": 8
            },
            "publishedAt": {
                "type": 180
            },
            "pullRequest": {
                "type": 560
            },
            "pullRequestReview": {
                "type": 574
            },
            "reactionGroups": {
                "type": 612
            },
            "reactions": {
                "type": 609,
                "args": {
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
            },
            "replyTo": {
                "type": 575
            },
            "repository": {
                "type": 707
            },
            "resourcePath": {
                "type": 874
            },
            "state": {
                "type": 578
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "userContentEdits": {
                "type": 984,
                "args": {
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
            },
            "viewerCanDelete": {
                "type": 48
            },
            "viewerCanMinimize": {
                "type": 48
            },
            "viewerCanReact": {
                "type": 48
            },
            "viewerCanUpdate": {
                "type": 48
            },
            "viewerCannotUpdateReasons": {
                "type": 100
            },
            "viewerDidAuthor": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestReviewCommentConnection": {
            "edges": {
                "type": 577
            },
            "nodes": {
                "type": 575
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestReviewCommentEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 575
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestReviewCommentState": {},
        "PullRequestReviewConnection": {
            "edges": {
                "type": 582
            },
            "nodes": {
                "type": 574
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestReviewContributionsByRepository": {
            "contributions": {
                "type": 172,
                "args": {
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
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestReviewDecision": {},
        "PullRequestReviewEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 574
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestReviewEvent": {},
        "PullRequestReviewState": {},
        "PullRequestReviewThread": {
            "comments": {
                "type": 576,
                "args": {
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
            },
            "diffSide": {
                "type": 237
            },
            "id": {
                "type": 2
            },
            "isResolved": {
                "type": 48
            },
            "line": {
                "type": 8
            },
            "originalLine": {
                "type": 8
            },
            "originalStartLine": {
                "type": 8
            },
            "pullRequest": {
                "type": 560
            },
            "repository": {
                "type": 707
            },
            "resolvedBy": {
                "type": 979
            },
            "startDiffSide": {
                "type": 237
            },
            "startLine": {
                "type": 8
            },
            "viewerCanResolve": {
                "type": 48
            },
            "viewerCanUnresolve": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestReviewThreadConnection": {
            "edges": {
                "type": 587
            },
            "nodes": {
                "type": 585
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestReviewThreadEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 585
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestRevisionMarker": {
            "createdAt": {
                "type": 180
            },
            "lastSeenCommit": {
                "type": 102
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestState": {},
        "PullRequestTimelineConnection": {
            "edges": {
                "type": 592
            },
            "nodes": {
                "type": 591
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestTimelineItem": {
            "on_AssignedEvent": {
                "type": 35
            },
            "on_BaseRefForcePushedEvent": {
                "type": 44
            },
            "on_ClosedEvent": {
                "type": 94
            },
            "on_Commit": {
                "type": 102
            },
            "on_CommitCommentThread": {
                "type": 107
            },
            "on_CrossReferencedEvent": {
                "type": 178
            },
            "on_DemilestonedEvent": {
                "type": 215
            },
            "on_DeployedEvent": {
                "type": 225
            },
            "on_DeploymentEnvironmentChangedEvent": {
                "type": 229
            },
            "on_HeadRefDeletedEvent": {
                "type": 337
            },
            "on_HeadRefForcePushedEvent": {
                "type": 338
            },
            "on_HeadRefRestoredEvent": {
                "type": 339
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_LabeledEvent": {
                "type": 380
            },
            "on_LockedEvent": {
                "type": 394
            },
            "on_MergedEvent": {
                "type": 414
            },
            "on_MilestonedEvent": {
                "type": 422
            },
            "on_PullRequestReview": {
                "type": 574
            },
            "on_PullRequestReviewComment": {
                "type": 575
            },
            "on_PullRequestReviewThread": {
                "type": 585
            },
            "on_ReferencedEvent": {
                "type": 622
            },
            "on_RenamedTitleEvent": {
                "type": 673
            },
            "on_ReopenedEvent": {
                "type": 679
            },
            "on_ReviewDismissedEvent": {
                "type": 750
            },
            "on_ReviewRequestRemovedEvent": {
                "type": 754
            },
            "on_ReviewRequestedEvent": {
                "type": 755
            },
            "on_SubscribedEvent": {
                "type": 824
            },
            "on_UnassignedEvent": {
                "type": 877
            },
            "on_UnlabeledEvent": {
                "type": 882
            },
            "on_UnlockedEvent": {
                "type": 887
            },
            "on_UnsubscribedEvent": {
                "type": 898
            },
            "on_UserBlockedEvent": {
                "type": 981
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestTimelineItemEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 591
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestTimelineItems": {
            "on_AddedToProjectEvent": {
                "type": 30
            },
            "on_AssignedEvent": {
                "type": 35
            },
            "on_AutomaticBaseChangeFailedEvent": {
                "type": 41
            },
            "on_AutomaticBaseChangeSucceededEvent": {
                "type": 42
            },
            "on_BaseRefChangedEvent": {
                "type": 43
            },
            "on_BaseRefForcePushedEvent": {
                "type": 44
            },
            "on_ClosedEvent": {
                "type": 94
            },
            "on_CommentDeletedEvent": {
                "type": 101
            },
            "on_ConnectedEvent": {
                "type": 114
            },
            "on_ConvertToDraftEvent": {
                "type": 126
            },
            "on_ConvertedNoteToIssueEvent": {
                "type": 127
            },
            "on_CrossReferencedEvent": {
                "type": 178
            },
            "on_DemilestonedEvent": {
                "type": 215
            },
            "on_DeployedEvent": {
                "type": 225
            },
            "on_DeploymentEnvironmentChangedEvent": {
                "type": 229
            },
            "on_DisconnectedEvent": {
                "type": 238
            },
            "on_HeadRefDeletedEvent": {
                "type": 337
            },
            "on_HeadRefForcePushedEvent": {
                "type": 338
            },
            "on_HeadRefRestoredEvent": {
                "type": 339
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_LabeledEvent": {
                "type": 380
            },
            "on_LockedEvent": {
                "type": 394
            },
            "on_MarkedAsDuplicateEvent": {
                "type": 398
            },
            "on_MentionedEvent": {
                "type": 407
            },
            "on_MergedEvent": {
                "type": 414
            },
            "on_MilestonedEvent": {
                "type": 422
            },
            "on_MovedColumnsInProjectEvent": {
                "type": 430
            },
            "on_PinnedEvent": {
                "type": 528
            },
            "on_PullRequestCommit": {
                "type": 564
            },
            "on_PullRequestCommitCommentThread": {
                "type": 565
            },
            "on_PullRequestReview": {
                "type": 574
            },
            "on_PullRequestReviewThread": {
                "type": 585
            },
            "on_PullRequestRevisionMarker": {
                "type": 588
            },
            "on_ReadyForReviewEvent": {
                "type": 615
            },
            "on_ReferencedEvent": {
                "type": 622
            },
            "on_RemovedFromProjectEvent": {
                "type": 672
            },
            "on_RenamedTitleEvent": {
                "type": 673
            },
            "on_ReopenedEvent": {
                "type": 679
            },
            "on_ReviewDismissedEvent": {
                "type": 750
            },
            "on_ReviewRequestRemovedEvent": {
                "type": 754
            },
            "on_ReviewRequestedEvent": {
                "type": 755
            },
            "on_SubscribedEvent": {
                "type": 824
            },
            "on_TransferredEvent": {
                "type": 871
            },
            "on_UnassignedEvent": {
                "type": 877
            },
            "on_UnlabeledEvent": {
                "type": 882
            },
            "on_UnlockedEvent": {
                "type": 887
            },
            "on_UnmarkedAsDuplicateEvent": {
                "type": 890
            },
            "on_UnpinnedEvent": {
                "type": 895
            },
            "on_UnsubscribedEvent": {
                "type": 898
            },
            "on_UserBlockedEvent": {
                "type": 981
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestTimelineItemsConnection": {
            "edges": {
                "type": 595
            },
            "filteredCount": {
                "type": 8
            },
            "nodes": {
                "type": 593
            },
            "pageCount": {
                "type": 8
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "updatedAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestTimelineItemsEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 593
            },
            "__typename": {
                "type": 1
            }
        },
        "PullRequestTimelineItemsItemType": {},
        "PullRequestUpdateState": {},
        "Push": {
            "id": {
                "type": 2
            },
            "nextSha": {
                "type": 329
            },
            "permalink": {
                "type": 874
            },
            "previousSha": {
                "type": 329
            },
            "pusher": {
                "type": 979
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "PushAllowance": {
            "actor": {
                "type": 600
            },
            "branchProtectionRule": {
                "type": 50
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "PushAllowanceActor": {
            "on_App": {
                "type": 31
            },
            "on_Team": {
                "type": 828
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "PushAllowanceConnection": {
            "edges": {
                "type": 602
            },
            "nodes": {
                "type": 599
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "PushAllowanceEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 599
            },
            "__typename": {
                "type": 1
            }
        },
        "Query": {
            "codeOfConduct": {
                "type": 96,
                "args": {
                    "key": [
                        1,
                        "String!"
                    ]
                }
            },
            "codesOfConduct": {
                "type": 96
            },
            "enterprise": {
                "type": 243,
                "args": {
                    "invitationToken": [
                        1
                    ],
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            },
            "enterpriseAdministratorInvitation": {
                "type": 246,
                "args": {
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
            },
            "enterpriseAdministratorInvitationByToken": {
                "type": 246,
                "args": {
                    "invitationToken": [
                        1,
                        "String!"
                    ]
                }
            },
            "license": {
                "type": 386,
                "args": {
                    "key": [
                        1,
                        "String!"
                    ]
                }
            },
            "licenses": {
                "type": 386
            },
            "marketplaceCategories": {
                "type": 399,
                "args": {
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
            },
            "marketplaceCategory": {
                "type": 399,
                "args": {
                    "slug": [
                        1,
                        "String!"
                    ],
                    "useTopicAliases": [
                        48
                    ]
                }
            },
            "marketplaceListing": {
                "type": 400,
                "args": {
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            },
            "marketplaceListings": {
                "type": 401,
                "args": {
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
            },
            "meta": {
                "type": 327
            },
            "node": {
                "type": 432,
                "args": {
                    "id": [
                        2,
                        "ID!"
                    ]
                }
            },
            "nodes": {
                "type": 432,
                "args": {
                    "ids": [
                        2,
                        "[ID!]!"
                    ]
                }
            },
            "organization": {
                "type": 478,
                "args": {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            },
            "rateLimit": {
                "type": 604,
                "args": {
                    "dryRun": [
                        48
                    ]
                }
            },
            "relay": {
                "type": 603
            },
            "repository": {
                "type": 707,
                "args": {
                    "name": [
                        1,
                        "String!"
                    ],
                    "owner": [
                        1,
                        "String!"
                    ]
                }
            },
            "repositoryOwner": {
                "type": 725,
                "args": {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            },
            "resource": {
                "type": 880,
                "args": {
                    "url": [
                        874,
                        "URI!"
                    ]
                }
            },
            "search": {
                "type": 765,
                "args": {
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
            },
            "securityAdvisories": {
                "type": 769,
                "args": {
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
            },
            "securityAdvisory": {
                "type": 768,
                "args": {
                    "ghsaId": [
                        1,
                        "String!"
                    ]
                }
            },
            "securityVulnerabilities": {
                "type": 782,
                "args": {
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
            },
            "sponsorsListing": {
                "type": 791,
                "args": {
                    "slug": [
                        1,
                        "String!"
                    ]
                }
            },
            "topic": {
                "type": 864,
                "args": {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            },
            "user": {
                "type": 979,
                "args": {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            },
            "viewer": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "RateLimit": {
            "cost": {
                "type": 8
            },
            "limit": {
                "type": 8
            },
            "nodeCount": {
                "type": 8
            },
            "remaining": {
                "type": 8
            },
            "resetAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "Reactable": {
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "reactionGroups": {
                "type": 612
            },
            "reactions": {
                "type": 609,
                "args": {
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
            },
            "viewerCanReact": {
                "type": 48
            },
            "on_CommitComment": {
                "type": 104
            },
            "on_Issue": {
                "type": 354
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_PullRequest": {
                "type": 560
            },
            "on_PullRequestReview": {
                "type": 574
            },
            "on_PullRequestReviewComment": {
                "type": 575
            },
            "on_TeamDiscussion": {
                "type": 834
            },
            "on_TeamDiscussionComment": {
                "type": 835
            },
            "__typename": {
                "type": 1
            }
        },
        "ReactingUserConnection": {
            "edges": {
                "type": 607
            },
            "nodes": {
                "type": 979
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ReactingUserEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 979
            },
            "reactedAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "Reaction": {
            "content": {
                "type": 610
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "reactable": {
                "type": 605
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "ReactionConnection": {
            "edges": {
                "type": 611
            },
            "nodes": {
                "type": 608
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "viewerHasReacted": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "ReactionContent": {},
        "ReactionEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 608
            },
            "__typename": {
                "type": 1
            }
        },
        "ReactionGroup": {
            "content": {
                "type": 610
            },
            "createdAt": {
                "type": 180
            },
            "subject": {
                "type": 605
            },
            "users": {
                "type": 606,
                "args": {
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
            },
            "viewerHasReacted": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "ReactionOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 614
            },
            "__typename": {
                "type": 1
            }
        },
        "ReactionOrderField": {},
        "ReadyForReviewEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "Ref": {
            "associatedPullRequests": {
                "type": 568,
                "args": {
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
            },
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "prefix": {
                "type": 1
            },
            "repository": {
                "type": 707
            },
            "target": {
                "type": 328
            },
            "__typename": {
                "type": 1
            }
        },
        "RefConnection": {
            "edges": {
                "type": 618
            },
            "nodes": {
                "type": 616
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RefEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 616
            },
            "__typename": {
                "type": 1
            }
        },
        "RefOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 620
            },
            "__typename": {
                "type": 1
            }
        },
        "RefOrderField": {},
        "RefUpdate": {
            "afterOid": {
                "type": 329
            },
            "beforeOid": {
                "type": 329
            },
            "force": {
                "type": 48
            },
            "name": {
                "type": 330
            },
            "__typename": {
                "type": 1
            }
        },
        "ReferencedEvent": {
            "actor": {
                "type": 7
            },
            "commit": {
                "type": 102
            },
            "commitRepository": {
                "type": 707
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "isCrossRepository": {
                "type": 48
            },
            "isDirectReference": {
                "type": 48
            },
            "subject": {
                "type": 623
            },
            "__typename": {
                "type": 1
            }
        },
        "ReferencedSubject": {
            "on_Issue": {
                "type": 354
            },
            "on_PullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "RegenerateEnterpriseIdentityProviderRecoveryCodesInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "RegenerateEnterpriseIdentityProviderRecoveryCodesPayload": {
            "clientMutationId": {
                "type": 1
            },
            "identityProvider": {
                "type": 258
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackage": {
            "color": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "latestVersion": {
                "type": 644
            },
            "name": {
                "type": 1
            },
            "nameWithOwner": {
                "type": 1
            },
            "packageFileByGuid": {
                "type": 633,
                "args": {
                    "guid": [
                        1,
                        "String!"
                    ]
                }
            },
            "packageFileBySha256": {
                "type": 633,
                "args": {
                    "sha256": [
                        1,
                        "String!"
                    ]
                }
            },
            "packageType": {
                "type": 643
            },
            "preReleaseVersions": {
                "type": 645,
                "args": {
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
            },
            "registryPackageType": {
                "type": 1
            },
            "repository": {
                "type": 707
            },
            "statistics": {
                "type": 639
            },
            "tags": {
                "type": 641,
                "args": {
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
            },
            "topics": {
                "type": 866,
                "args": {
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
            },
            "version": {
                "type": 644,
                "args": {
                    "version": [
                        1,
                        "String!"
                    ]
                }
            },
            "versionByPlatform": {
                "type": 644,
                "args": {
                    "platform": [
                        1,
                        "String!"
                    ],
                    "version": [
                        1,
                        "String!"
                    ]
                }
            },
            "versionBySha256": {
                "type": 644,
                "args": {
                    "sha256": [
                        1,
                        "String!"
                    ]
                }
            },
            "versions": {
                "type": 645,
                "args": {
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
            },
            "versionsByMetadatum": {
                "type": 645,
                "args": {
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
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageConnection": {
            "edges": {
                "type": 632
            },
            "nodes": {
                "type": 626
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageDependency": {
            "dependencyType": {
                "type": 631
            },
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "version": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageDependencyConnection": {
            "edges": {
                "type": 630
            },
            "nodes": {
                "type": 628
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageDependencyEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 628
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageDependencyType": {},
        "RegistryPackageEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 626
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageFile": {
            "guid": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "md5": {
                "type": 1
            },
            "metadataUrl": {
                "type": 874
            },
            "name": {
                "type": 1
            },
            "packageVersion": {
                "type": 644
            },
            "sha1": {
                "type": 1
            },
            "sha256": {
                "type": 1
            },
            "size": {
                "type": 8
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageFileConnection": {
            "edges": {
                "type": 635
            },
            "nodes": {
                "type": 633
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageFileEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 633
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageMetadatum": {
            "name": {
                "type": 1
            },
            "update": {
                "type": 48
            },
            "value": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageOwner": {
            "id": {
                "type": 2
            },
            "registryPackages": {
                "type": 627,
                "args": {
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
            },
            "on_Organization": {
                "type": 478
            },
            "on_Repository": {
                "type": 707
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageSearch": {
            "id": {
                "type": 2
            },
            "registryPackagesForQuery": {
                "type": 627,
                "args": {
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
            },
            "on_Organization": {
                "type": 478
            },
            "on_Repository": {
                "type": 707
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageStatistics": {
            "downloadsThisMonth": {
                "type": 8
            },
            "downloadsThisWeek": {
                "type": 8
            },
            "downloadsThisYear": {
                "type": 8
            },
            "downloadsToday": {
                "type": 8
            },
            "downloadsTotalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageTag": {
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "version": {
                "type": 644
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageTagConnection": {
            "edges": {
                "type": 642
            },
            "nodes": {
                "type": 640
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageTagEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 640
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageType": {},
        "RegistryPackageVersion": {
            "deleted": {
                "type": 48
            },
            "dependencies": {
                "type": 629,
                "args": {
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
            },
            "fileByName": {
                "type": 633,
                "args": {
                    "filename": [
                        1,
                        "String!"
                    ]
                }
            },
            "files": {
                "type": 634,
                "args": {
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
            },
            "id": {
                "type": 2
            },
            "installationCommand": {
                "type": 1
            },
            "manifest": {
                "type": 1
            },
            "platform": {
                "type": 1
            },
            "preRelease": {
                "type": 48
            },
            "readme": {
                "type": 1
            },
            "readmeHtml": {
                "type": 336
            },
            "registryPackage": {
                "type": 626
            },
            "release": {
                "type": 648
            },
            "sha256": {
                "type": 1
            },
            "size": {
                "type": 8
            },
            "statistics": {
                "type": 647
            },
            "summary": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "version": {
                "type": 1
            },
            "viewerCanEdit": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageVersionConnection": {
            "edges": {
                "type": 646
            },
            "nodes": {
                "type": 644
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageVersionEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 644
            },
            "__typename": {
                "type": 1
            }
        },
        "RegistryPackageVersionStatistics": {
            "downloadsThisMonth": {
                "type": 8
            },
            "downloadsThisWeek": {
                "type": 8
            },
            "downloadsThisYear": {
                "type": 8
            },
            "downloadsToday": {
                "type": 8
            },
            "downloadsTotalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "Release": {
            "author": {
                "type": 979
            },
            "createdAt": {
                "type": 180
            },
            "description": {
                "type": 1
            },
            "descriptionHTML": {
                "type": 336
            },
            "id": {
                "type": 2
            },
            "isDraft": {
                "type": 48
            },
            "isPrerelease": {
                "type": 48
            },
            "name": {
                "type": 1
            },
            "publishedAt": {
                "type": 180
            },
            "releaseAssets": {
                "type": 650,
                "args": {
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
            },
            "resourcePath": {
                "type": 874
            },
            "shortDescriptionHTML": {
                "type": 336,
                "args": {
                    "limit": [
                        8
                    ]
                }
            },
            "tag": {
                "type": 616
            },
            "tagName": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "ReleaseAsset": {
            "contentType": {
                "type": 1
            },
            "createdAt": {
                "type": 180
            },
            "downloadCount": {
                "type": 8
            },
            "downloadUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "release": {
                "type": 648
            },
            "size": {
                "type": 8
            },
            "updatedAt": {
                "type": 180
            },
            "uploadedBy": {
                "type": 979
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "ReleaseAssetConnection": {
            "edges": {
                "type": 651
            },
            "nodes": {
                "type": 649
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ReleaseAssetEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 649
            },
            "__typename": {
                "type": 1
            }
        },
        "ReleaseConnection": {
            "edges": {
                "type": 653
            },
            "nodes": {
                "type": 648
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ReleaseEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 648
            },
            "__typename": {
                "type": 1
            }
        },
        "ReleaseOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 655
            },
            "__typename": {
                "type": 1
            }
        },
        "ReleaseOrderField": {},
        "RemoveAssigneesFromAssignableInput": {
            "assignableId": {
                "type": 2
            },
            "assigneeIds": {
                "type": 2
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveAssigneesFromAssignablePayload": {
            "assignable": {
                "type": 34
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveEnterpriseAdminInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "login": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveEnterpriseAdminPayload": {
            "admin": {
                "type": 979
            },
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "viewer": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveEnterpriseIdentityProviderInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveEnterpriseIdentityProviderPayload": {
            "clientMutationId": {
                "type": 1
            },
            "identityProvider": {
                "type": 258
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveEnterpriseOrganizationInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "organizationId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveEnterpriseOrganizationPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "organization": {
                "type": 478
            },
            "viewer": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveLabelsFromLabelableInput": {
            "clientMutationId": {
                "type": 1
            },
            "labelIds": {
                "type": 2
            },
            "labelableId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveLabelsFromLabelablePayload": {
            "clientMutationId": {
                "type": 1
            },
            "labelable": {
                "type": 379
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveOutsideCollaboratorInput": {
            "clientMutationId": {
                "type": 1
            },
            "organizationId": {
                "type": 2
            },
            "userId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveOutsideCollaboratorPayload": {
            "clientMutationId": {
                "type": 1
            },
            "removedUser": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveReactionInput": {
            "clientMutationId": {
                "type": 1
            },
            "content": {
                "type": 610
            },
            "subjectId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveReactionPayload": {
            "clientMutationId": {
                "type": 1
            },
            "reaction": {
                "type": 608
            },
            "subject": {
                "type": 605
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveStarInput": {
            "clientMutationId": {
                "type": 1
            },
            "starrableId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "RemoveStarPayload": {
            "clientMutationId": {
                "type": 1
            },
            "starrable": {
                "type": 808
            },
            "__typename": {
                "type": 1
            }
        },
        "RemovedFromProjectEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "project": {
                "type": 537
            },
            "projectColumnName": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "RenamedTitleEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "currentTitle": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "previousTitle": {
                "type": 1
            },
            "subject": {
                "type": 674
            },
            "__typename": {
                "type": 1
            }
        },
        "RenamedTitleSubject": {
            "on_Issue": {
                "type": 354
            },
            "on_PullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "ReopenIssueInput": {
            "clientMutationId": {
                "type": 1
            },
            "issueId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "ReopenIssuePayload": {
            "clientMutationId": {
                "type": 1
            },
            "issue": {
                "type": 354
            },
            "__typename": {
                "type": 1
            }
        },
        "ReopenPullRequestInput": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "ReopenPullRequestPayload": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "ReopenedEvent": {
            "actor": {
                "type": 7
            },
            "closable": {
                "type": 89
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoAccessAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "visibility": {
                "type": 681
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoAccessAuditEntryVisibility": {},
        "RepoAddMemberAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "visibility": {
                "type": 683
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoAddMemberAuditEntryVisibility": {},
        "RepoAddTopicAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "topic": {
                "type": 864
            },
            "topicName": {
                "type": 1
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoArchivedAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "visibility": {
                "type": 686
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoArchivedAuditEntryVisibility": {},
        "RepoChangeMergeSettingAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "isEnabled": {
                "type": 48
            },
            "mergeType": {
                "type": 688
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoChangeMergeSettingAuditEntryMergeType": {},
        "RepoConfigDisableAnonymousGitAccessAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoConfigDisableCollaboratorsOnlyAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoConfigDisableContributorsOnlyAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoConfigDisableSockpuppetDisallowedAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoConfigEnableAnonymousGitAccessAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoConfigEnableCollaboratorsOnlyAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoConfigEnableContributorsOnlyAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoConfigEnableSockpuppetDisallowedAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoConfigLockAnonymousGitAccessAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoConfigUnlockAnonymousGitAccessAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoCreateAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "forkParentName": {
                "type": 1
            },
            "forkSourceName": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "visibility": {
                "type": 700
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoCreateAuditEntryVisibility": {},
        "RepoDestroyAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "visibility": {
                "type": 702
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoDestroyAuditEntryVisibility": {},
        "RepoRemoveMemberAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "visibility": {
                "type": 704
            },
            "__typename": {
                "type": 1
            }
        },
        "RepoRemoveMemberAuditEntryVisibility": {},
        "RepoRemoveTopicAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "topic": {
                "type": 864
            },
            "topicName": {
                "type": 1
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "ReportedContentClassifiers": {},
        "Repository": {
            "assignableUsers": {
                "type": 982,
                "args": {
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
            },
            "branchProtectionRules": {
                "type": 54,
                "args": {
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
            },
            "codeOfConduct": {
                "type": 96
            },
            "collaborators": {
                "type": 710,
                "args": {
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
            },
            "commitComments": {
                "type": 105,
                "args": {
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
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "defaultBranchRef": {
                "type": 616
            },
            "deleteBranchOnMerge": {
                "type": 48
            },
            "dependencyGraphManifests": {
                "type": 220,
                "args": {
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
            },
            "deployKeys": {
                "type": 223,
                "args": {
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
            },
            "deployments": {
                "type": 227,
                "args": {
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
            },
            "description": {
                "type": 1
            },
            "descriptionHTML": {
                "type": 336
            },
            "diskUsage": {
                "type": 8
            },
            "forkCount": {
                "type": 8
            },
            "forks": {
                "type": 712,
                "args": {
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
            },
            "fundingLinks": {
                "type": 313
            },
            "hasIssuesEnabled": {
                "type": 48
            },
            "hasProjectsEnabled": {
                "type": 48
            },
            "hasWikiEnabled": {
                "type": 48
            },
            "homepageUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "isArchived": {
                "type": 48
            },
            "isDisabled": {
                "type": 48
            },
            "isFork": {
                "type": 48
            },
            "isLocked": {
                "type": 48
            },
            "isMirror": {
                "type": 48
            },
            "isPrivate": {
                "type": 48
            },
            "isTemplate": {
                "type": 48
            },
            "issue": {
                "type": 354,
                "args": {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            },
            "issueOrPullRequest": {
                "type": 362,
                "args": {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            },
            "issues": {
                "type": 358,
                "args": {
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
            },
            "label": {
                "type": 374,
                "args": {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            },
            "labels": {
                "type": 375,
                "args": {
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
            },
            "languages": {
                "type": 382,
                "args": {
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
            },
            "licenseInfo": {
                "type": 386
            },
            "lockReason": {
                "type": 721
            },
            "mentionableUsers": {
                "type": 982,
                "args": {
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
            },
            "mergeCommitAllowed": {
                "type": 48
            },
            "milestone": {
                "type": 415,
                "args": {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            },
            "milestones": {
                "type": 416,
                "args": {
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
            },
            "mirrorUrl": {
                "type": 874
            },
            "name": {
                "type": 1
            },
            "nameWithOwner": {
                "type": 1
            },
            "object": {
                "type": 328,
                "args": {
                    "expression": [
                        1
                    ],
                    "oid": [
                        329
                    ]
                }
            },
            "openGraphImageUrl": {
                "type": 874
            },
            "owner": {
                "type": 725
            },
            "packages": {
                "type": 500,
                "args": {
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
            },
            "parent": {
                "type": 707
            },
            "pinnedIssues": {
                "type": 530,
                "args": {
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
            },
            "primaryLanguage": {
                "type": 381
            },
            "project": {
                "type": 537,
                "args": {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            },
            "projects": {
                "type": 550,
                "args": {
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
            },
            "projectsResourcePath": {
                "type": 874
            },
            "projectsUrl": {
                "type": 874
            },
            "pullRequest": {
                "type": 560,
                "args": {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            },
            "pullRequests": {
                "type": 568,
                "args": {
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
            },
            "pushedAt": {
                "type": 180
            },
            "rebaseMergeAllowed": {
                "type": 48
            },
            "ref": {
                "type": 616,
                "args": {
                    "qualifiedName": [
                        1,
                        "String!"
                    ]
                }
            },
            "refs": {
                "type": 617,
                "args": {
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
            },
            "registryPackages": {
                "type": 627,
                "args": {
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
            },
            "registryPackagesForQuery": {
                "type": 627,
                "args": {
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
            },
            "release": {
                "type": 648,
                "args": {
                    "tagName": [
                        1,
                        "String!"
                    ]
                }
            },
            "releases": {
                "type": 652,
                "args": {
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
            },
            "repositoryTopics": {
                "type": 729,
                "args": {
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
            },
            "resourcePath": {
                "type": 874
            },
            "shortDescriptionHTML": {
                "type": 336,
                "args": {
                    "limit": [
                        8
                    ]
                }
            },
            "squashMergeAllowed": {
                "type": 48
            },
            "sshUrl": {
                "type": 331
            },
            "stargazers": {
                "type": 806,
                "args": {
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
            },
            "submodules": {
                "type": 821,
                "args": {
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
            },
            "tempCloneToken": {
                "type": 1
            },
            "templateRepository": {
                "type": 707
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "usesCustomOpenGraphImage": {
                "type": 48
            },
            "viewerCanAdminister": {
                "type": 48
            },
            "viewerCanCreateProjects": {
                "type": 48
            },
            "viewerCanSubscribe": {
                "type": 48
            },
            "viewerCanUpdateTopics": {
                "type": 48
            },
            "viewerHasStarred": {
                "type": 48
            },
            "viewerPermission": {
                "type": 726
            },
            "viewerSubscription": {
                "type": 825
            },
            "vulnerabilityAlerts": {
                "type": 735,
                "args": {
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
            },
            "watchers": {
                "type": 982,
                "args": {
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
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryAffiliation": {},
        "RepositoryAuditEntryData": {
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "on_OrgRestoreMemberMembershipRepositoryAuditEntryData": {
                "type": 468
            },
            "on_PrivateRepositoryForkingDisableAuditEntry": {
                "type": 533
            },
            "on_PrivateRepositoryForkingEnableAuditEntry": {
                "type": 534
            },
            "on_RepoAccessAuditEntry": {
                "type": 680
            },
            "on_RepoAddMemberAuditEntry": {
                "type": 682
            },
            "on_RepoAddTopicAuditEntry": {
                "type": 684
            },
            "on_RepoArchivedAuditEntry": {
                "type": 685
            },
            "on_RepoChangeMergeSettingAuditEntry": {
                "type": 687
            },
            "on_RepoConfigDisableAnonymousGitAccessAuditEntry": {
                "type": 689
            },
            "on_RepoConfigDisableCollaboratorsOnlyAuditEntry": {
                "type": 690
            },
            "on_RepoConfigDisableContributorsOnlyAuditEntry": {
                "type": 691
            },
            "on_RepoConfigDisableSockpuppetDisallowedAuditEntry": {
                "type": 692
            },
            "on_RepoConfigEnableAnonymousGitAccessAuditEntry": {
                "type": 693
            },
            "on_RepoConfigEnableCollaboratorsOnlyAuditEntry": {
                "type": 694
            },
            "on_RepoConfigEnableContributorsOnlyAuditEntry": {
                "type": 695
            },
            "on_RepoConfigEnableSockpuppetDisallowedAuditEntry": {
                "type": 696
            },
            "on_RepoConfigLockAnonymousGitAccessAuditEntry": {
                "type": 697
            },
            "on_RepoConfigUnlockAnonymousGitAccessAuditEntry": {
                "type": 698
            },
            "on_RepoCreateAuditEntry": {
                "type": 699
            },
            "on_RepoDestroyAuditEntry": {
                "type": 701
            },
            "on_RepoRemoveMemberAuditEntry": {
                "type": 703
            },
            "on_RepoRemoveTopicAuditEntry": {
                "type": 705
            },
            "on_TeamAddRepositoryAuditEntry": {
                "type": 830
            },
            "on_TeamRemoveRepositoryAuditEntry": {
                "type": 855
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryCollaboratorConnection": {
            "edges": {
                "type": 711
            },
            "nodes": {
                "type": 979
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryCollaboratorEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 979
            },
            "permission": {
                "type": 726
            },
            "permissionSources": {
                "type": 521
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryConnection": {
            "edges": {
                "type": 714
            },
            "nodes": {
                "type": 707
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "totalDiskUsage": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryContributionType": {},
        "RepositoryEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryInfo": {
            "createdAt": {
                "type": 180
            },
            "description": {
                "type": 1
            },
            "descriptionHTML": {
                "type": 336
            },
            "forkCount": {
                "type": 8
            },
            "hasIssuesEnabled": {
                "type": 48
            },
            "hasProjectsEnabled": {
                "type": 48
            },
            "hasWikiEnabled": {
                "type": 48
            },
            "homepageUrl": {
                "type": 874
            },
            "isArchived": {
                "type": 48
            },
            "isFork": {
                "type": 48
            },
            "isLocked": {
                "type": 48
            },
            "isMirror": {
                "type": 48
            },
            "isPrivate": {
                "type": 48
            },
            "isTemplate": {
                "type": 48
            },
            "licenseInfo": {
                "type": 386
            },
            "lockReason": {
                "type": 721
            },
            "mirrorUrl": {
                "type": 874
            },
            "name": {
                "type": 1
            },
            "nameWithOwner": {
                "type": 1
            },
            "openGraphImageUrl": {
                "type": 874
            },
            "owner": {
                "type": 725
            },
            "pushedAt": {
                "type": 180
            },
            "resourcePath": {
                "type": 874
            },
            "shortDescriptionHTML": {
                "type": 336,
                "args": {
                    "limit": [
                        8
                    ]
                }
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "usesCustomOpenGraphImage": {
                "type": 48
            },
            "on_Repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryInvitation": {
            "email": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "invitee": {
                "type": 979
            },
            "inviter": {
                "type": 979
            },
            "permission": {
                "type": 726
            },
            "repository": {
                "type": 715
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryInvitationConnection": {
            "edges": {
                "type": 718
            },
            "nodes": {
                "type": 716
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryInvitationEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 716
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryInvitationOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 720
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryInvitationOrderField": {},
        "RepositoryLockReason": {},
        "RepositoryNode": {
            "repository": {
                "type": 707
            },
            "on_CommitComment": {
                "type": 104
            },
            "on_CommitCommentThread": {
                "type": 107
            },
            "on_Issue": {
                "type": 354
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_PullRequest": {
                "type": 560
            },
            "on_PullRequestCommitCommentThread": {
                "type": 565
            },
            "on_PullRequestReview": {
                "type": 574
            },
            "on_PullRequestReviewComment": {
                "type": 575
            },
            "on_RepositoryVulnerabilityAlert": {
                "type": 734
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 724
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryOrderField": {},
        "RepositoryOwner": {
            "avatarUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "id": {
                "type": 2
            },
            "login": {
                "type": 1
            },
            "repositories": {
                "type": 712,
                "args": {
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
            },
            "repository": {
                "type": 707,
                "args": {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "on_Organization": {
                "type": 478
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryPermission": {},
        "RepositoryPrivacy": {},
        "RepositoryTopic": {
            "id": {
                "type": 2
            },
            "resourcePath": {
                "type": 874
            },
            "topic": {
                "type": 864
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryTopicConnection": {
            "edges": {
                "type": 730
            },
            "nodes": {
                "type": 728
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryTopicEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 728
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryVisibility": {},
        "RepositoryVisibilityChangeDisableAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "enterpriseResourcePath": {
                "type": 874
            },
            "enterpriseSlug": {
                "type": 1
            },
            "enterpriseUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryVisibilityChangeEnableAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "enterpriseResourcePath": {
                "type": 874
            },
            "enterpriseSlug": {
                "type": 1
            },
            "enterpriseUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryVulnerabilityAlert": {
            "createdAt": {
                "type": 180
            },
            "dismissReason": {
                "type": 1
            },
            "dismissedAt": {
                "type": 180
            },
            "dismisser": {
                "type": 979
            },
            "id": {
                "type": 2
            },
            "repository": {
                "type": 707
            },
            "securityAdvisory": {
                "type": 768
            },
            "securityVulnerability": {
                "type": 781
            },
            "vulnerableManifestFilename": {
                "type": 1
            },
            "vulnerableManifestPath": {
                "type": 1
            },
            "vulnerableRequirements": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryVulnerabilityAlertConnection": {
            "edges": {
                "type": 736
            },
            "nodes": {
                "type": 734
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "RepositoryVulnerabilityAlertEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 734
            },
            "__typename": {
                "type": 1
            }
        },
        "RequestReviewsInput": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestId": {
                "type": 2
            },
            "teamIds": {
                "type": 2
            },
            "union": {
                "type": 48
            },
            "userIds": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "RequestReviewsPayload": {
            "actor": {
                "type": 7
            },
            "clientMutationId": {
                "type": 1
            },
            "pullRequest": {
                "type": 560
            },
            "requestedReviewersEdge": {
                "type": 986
            },
            "__typename": {
                "type": 1
            }
        },
        "RequestableCheckStatusState": {},
        "RequestedReviewer": {
            "on_Mannequin": {
                "type": 395
            },
            "on_Team": {
                "type": 828
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "RerequestCheckSuiteInput": {
            "checkSuiteId": {
                "type": 2
            },
            "clientMutationId": {
                "type": 1
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "RerequestCheckSuitePayload": {
            "checkSuite": {
                "type": 78
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "ResolveReviewThreadInput": {
            "clientMutationId": {
                "type": 1
            },
            "threadId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "ResolveReviewThreadPayload": {
            "clientMutationId": {
                "type": 1
            },
            "thread": {
                "type": 585
            },
            "__typename": {
                "type": 1
            }
        },
        "RestrictedContribution": {
            "isRestricted": {
                "type": 48
            },
            "occurredAt": {
                "type": 180
            },
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "ReviewDismissalAllowance": {
            "actor": {
                "type": 747
            },
            "branchProtectionRule": {
                "type": 50
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "ReviewDismissalAllowanceActor": {
            "on_Team": {
                "type": 828
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "ReviewDismissalAllowanceConnection": {
            "edges": {
                "type": 749
            },
            "nodes": {
                "type": 746
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ReviewDismissalAllowanceEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 746
            },
            "__typename": {
                "type": 1
            }
        },
        "ReviewDismissedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "dismissalMessage": {
                "type": 1
            },
            "dismissalMessageHTML": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "previousReviewState": {
                "type": 584
            },
            "pullRequest": {
                "type": 560
            },
            "pullRequestCommit": {
                "type": 564
            },
            "resourcePath": {
                "type": 874
            },
            "review": {
                "type": 574
            },
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "ReviewRequest": {
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "requestedReviewer": {
                "type": 740
            },
            "__typename": {
                "type": 1
            }
        },
        "ReviewRequestConnection": {
            "edges": {
                "type": 753
            },
            "nodes": {
                "type": 751
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "ReviewRequestEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 751
            },
            "__typename": {
                "type": 1
            }
        },
        "ReviewRequestRemovedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "requestedReviewer": {
                "type": 740
            },
            "__typename": {
                "type": 1
            }
        },
        "ReviewRequestedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "pullRequest": {
                "type": 560
            },
            "requestedReviewer": {
                "type": 740
            },
            "__typename": {
                "type": 1
            }
        },
        "ReviewStatusHovercardContext": {
            "message": {
                "type": 1
            },
            "octicon": {
                "type": 1
            },
            "reviewDecision": {
                "type": 581
            },
            "__typename": {
                "type": 1
            }
        },
        "SamlDigestAlgorithm": {},
        "SamlSignatureAlgorithm": {},
        "SavedReply": {
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "databaseId": {
                "type": 8
            },
            "id": {
                "type": 2
            },
            "title": {
                "type": 1
            },
            "user": {
                "type": 7
            },
            "__typename": {
                "type": 1
            }
        },
        "SavedReplyConnection": {
            "edges": {
                "type": 761
            },
            "nodes": {
                "type": 759
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "SavedReplyEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 759
            },
            "__typename": {
                "type": 1
            }
        },
        "SavedReplyOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 763
            },
            "__typename": {
                "type": 1
            }
        },
        "SavedReplyOrderField": {},
        "SearchResultItem": {
            "on_App": {
                "type": 31
            },
            "on_Issue": {
                "type": 354
            },
            "on_MarketplaceListing": {
                "type": 400
            },
            "on_Organization": {
                "type": 478
            },
            "on_PullRequest": {
                "type": 560
            },
            "on_Repository": {
                "type": 707
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "SearchResultItemConnection": {
            "codeCount": {
                "type": 8
            },
            "edges": {
                "type": 766
            },
            "issueCount": {
                "type": 8
            },
            "nodes": {
                "type": 764
            },
            "pageInfo": {
                "type": 519
            },
            "repositoryCount": {
                "type": 8
            },
            "userCount": {
                "type": 8
            },
            "wikiCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "SearchResultItemEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 764
            },
            "textMatches": {
                "type": 862
            },
            "__typename": {
                "type": 1
            }
        },
        "SearchType": {},
        "SecurityAdvisory": {
            "databaseId": {
                "type": 8
            },
            "description": {
                "type": 1
            },
            "ghsaId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "identifiers": {
                "type": 772
            },
            "origin": {
                "type": 1
            },
            "permalink": {
                "type": 874
            },
            "publishedAt": {
                "type": 180
            },
            "references": {
                "type": 779
            },
            "severity": {
                "type": 780
            },
            "summary": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "vulnerabilities": {
                "type": 782,
                "args": {
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
            },
            "withdrawnAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityAdvisoryConnection": {
            "edges": {
                "type": 771
            },
            "nodes": {
                "type": 768
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityAdvisoryEcosystem": {},
        "SecurityAdvisoryEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 768
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityAdvisoryIdentifier": {
            "type": {
                "type": 1
            },
            "value": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityAdvisoryIdentifierFilter": {
            "type": {
                "type": 774
            },
            "value": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityAdvisoryIdentifierType": {},
        "SecurityAdvisoryOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 776
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityAdvisoryOrderField": {},
        "SecurityAdvisoryPackage": {
            "ecosystem": {
                "type": 770
            },
            "name": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityAdvisoryPackageVersion": {
            "identifier": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityAdvisoryReference": {
            "url": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityAdvisorySeverity": {},
        "SecurityVulnerability": {
            "advisory": {
                "type": 768
            },
            "firstPatchedVersion": {
                "type": 778
            },
            "package": {
                "type": 777
            },
            "severity": {
                "type": 780
            },
            "updatedAt": {
                "type": 180
            },
            "vulnerableVersionRange": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityVulnerabilityConnection": {
            "edges": {
                "type": 783
            },
            "nodes": {
                "type": 781
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityVulnerabilityEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 781
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityVulnerabilityOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 785
            },
            "__typename": {
                "type": 1
            }
        },
        "SecurityVulnerabilityOrderField": {},
        "SetEnterpriseIdentityProviderInput": {
            "clientMutationId": {
                "type": 1
            },
            "digestMethod": {
                "type": 757
            },
            "enterpriseId": {
                "type": 2
            },
            "idpCertificate": {
                "type": 1
            },
            "issuer": {
                "type": 1
            },
            "signatureMethod": {
                "type": 758
            },
            "ssoUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "SetEnterpriseIdentityProviderPayload": {
            "clientMutationId": {
                "type": 1
            },
            "identityProvider": {
                "type": 258
            },
            "__typename": {
                "type": 1
            }
        },
        "SmimeSignature": {
            "email": {
                "type": 1
            },
            "isValid": {
                "type": 48
            },
            "payload": {
                "type": 1
            },
            "signature": {
                "type": 1
            },
            "signer": {
                "type": 979
            },
            "state": {
                "type": 333
            },
            "wasSignedByGitHub": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "Sponsor": {
            "on_Organization": {
                "type": 478
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "Sponsorable": {
            "sponsorsListing": {
                "type": 791
            },
            "sponsorshipsAsMaintainer": {
                "type": 799,
                "args": {
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
            },
            "sponsorshipsAsSponsor": {
                "type": 799,
                "args": {
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
            },
            "on_Organization": {
                "type": 478
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "SponsorsListing": {
            "createdAt": {
                "type": 180
            },
            "fullDescription": {
                "type": 1
            },
            "fullDescriptionHTML": {
                "type": 336
            },
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "shortDescription": {
                "type": 1
            },
            "slug": {
                "type": 1
            },
            "tiers": {
                "type": 794,
                "args": {
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
            },
            "__typename": {
                "type": 1
            }
        },
        "SponsorsTier": {
            "adminInfo": {
                "type": 793
            },
            "createdAt": {
                "type": 180
            },
            "description": {
                "type": 1
            },
            "descriptionHTML": {
                "type": 336
            },
            "id": {
                "type": 2
            },
            "monthlyPriceInCents": {
                "type": 8
            },
            "monthlyPriceInDollars": {
                "type": 8
            },
            "name": {
                "type": 1
            },
            "sponsorsListing": {
                "type": 791
            },
            "updatedAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "SponsorsTierAdminInfo": {
            "sponsorships": {
                "type": 799,
                "args": {
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
            },
            "__typename": {
                "type": 1
            }
        },
        "SponsorsTierConnection": {
            "edges": {
                "type": 795
            },
            "nodes": {
                "type": 792
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "SponsorsTierEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 792
            },
            "__typename": {
                "type": 1
            }
        },
        "SponsorsTierOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 797
            },
            "__typename": {
                "type": 1
            }
        },
        "SponsorsTierOrderField": {},
        "Sponsorship": {
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "maintainer": {
                "type": 979
            },
            "privacyLevel": {
                "type": 803
            },
            "sponsor": {
                "type": 979
            },
            "sponsorEntity": {
                "type": 789
            },
            "sponsorable": {
                "type": 790
            },
            "tier": {
                "type": 792
            },
            "__typename": {
                "type": 1
            }
        },
        "SponsorshipConnection": {
            "edges": {
                "type": 800
            },
            "nodes": {
                "type": 798
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "SponsorshipEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 798
            },
            "__typename": {
                "type": 1
            }
        },
        "SponsorshipOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 802
            },
            "__typename": {
                "type": 1
            }
        },
        "SponsorshipOrderField": {},
        "SponsorshipPrivacy": {},
        "StarOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 805
            },
            "__typename": {
                "type": 1
            }
        },
        "StarOrderField": {},
        "StargazerConnection": {
            "edges": {
                "type": 807
            },
            "nodes": {
                "type": 979
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "StargazerEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 979
            },
            "starredAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "Starrable": {
            "id": {
                "type": 2
            },
            "stargazers": {
                "type": 806,
                "args": {
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
            },
            "viewerHasStarred": {
                "type": 48
            },
            "on_Gist": {
                "type": 316
            },
            "on_Repository": {
                "type": 707
            },
            "on_Topic": {
                "type": 864
            },
            "__typename": {
                "type": 1
            }
        },
        "StarredRepositoryConnection": {
            "edges": {
                "type": 810
            },
            "isOverLimit": {
                "type": 48
            },
            "nodes": {
                "type": 707
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "StarredRepositoryEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 707
            },
            "starredAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "Status": {
            "commit": {
                "type": 102
            },
            "context": {
                "type": 816,
                "args": {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            },
            "contexts": {
                "type": 816
            },
            "id": {
                "type": 2
            },
            "state": {
                "type": 817
            },
            "__typename": {
                "type": 1
            }
        },
        "StatusCheckRollup": {
            "commit": {
                "type": 102
            },
            "contexts": {
                "type": 814,
                "args": {
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
            },
            "id": {
                "type": 2
            },
            "state": {
                "type": 817
            },
            "__typename": {
                "type": 1
            }
        },
        "StatusCheckRollupContext": {
            "on_CheckRun": {
                "type": 69
            },
            "on_StatusContext": {
                "type": 816
            },
            "__typename": {
                "type": 1
            }
        },
        "StatusCheckRollupContextConnection": {
            "edges": {
                "type": 815
            },
            "nodes": {
                "type": 813
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "StatusCheckRollupContextEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 813
            },
            "__typename": {
                "type": 1
            }
        },
        "StatusContext": {
            "avatarUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "commit": {
                "type": 102
            },
            "context": {
                "type": 1
            },
            "createdAt": {
                "type": 180
            },
            "creator": {
                "type": 7
            },
            "description": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "state": {
                "type": 817
            },
            "targetUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "StatusState": {},
        "SubmitPullRequestReviewInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "event": {
                "type": 583
            },
            "pullRequestId": {
                "type": 2
            },
            "pullRequestReviewId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "SubmitPullRequestReviewPayload": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestReview": {
                "type": 574
            },
            "__typename": {
                "type": 1
            }
        },
        "Submodule": {
            "branch": {
                "type": 1
            },
            "gitUrl": {
                "type": 874
            },
            "name": {
                "type": 1
            },
            "path": {
                "type": 1
            },
            "subprojectCommitOid": {
                "type": 329
            },
            "__typename": {
                "type": 1
            }
        },
        "SubmoduleConnection": {
            "edges": {
                "type": 822
            },
            "nodes": {
                "type": 820
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "SubmoduleEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 820
            },
            "__typename": {
                "type": 1
            }
        },
        "Subscribable": {
            "id": {
                "type": 2
            },
            "viewerCanSubscribe": {
                "type": 48
            },
            "viewerSubscription": {
                "type": 825
            },
            "on_Commit": {
                "type": 102
            },
            "on_Issue": {
                "type": 354
            },
            "on_PullRequest": {
                "type": 560
            },
            "on_Repository": {
                "type": 707
            },
            "on_Team": {
                "type": 828
            },
            "on_TeamDiscussion": {
                "type": 834
            },
            "__typename": {
                "type": 1
            }
        },
        "SubscribedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "subscribable": {
                "type": 823
            },
            "__typename": {
                "type": 1
            }
        },
        "SubscriptionState": {},
        "SuggestedReviewer": {
            "isAuthor": {
                "type": 48
            },
            "isCommenter": {
                "type": 48
            },
            "reviewer": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "Tag": {
            "abbreviatedOid": {
                "type": 1
            },
            "commitResourcePath": {
                "type": 874
            },
            "commitUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "message": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "oid": {
                "type": 329
            },
            "repository": {
                "type": 707
            },
            "tagger": {
                "type": 326
            },
            "target": {
                "type": 328
            },
            "__typename": {
                "type": 1
            }
        },
        "Team": {
            "ancestors": {
                "type": 833,
                "args": {
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
            },
            "avatarUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "childTeams": {
                "type": 833,
                "args": {
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
            },
            "combinedSlug": {
                "type": 1
            },
            "createdAt": {
                "type": 180
            },
            "description": {
                "type": 1
            },
            "discussion": {
                "type": 834,
                "args": {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            },
            "discussions": {
                "type": 840,
                "args": {
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
            },
            "discussionsResourcePath": {
                "type": 874
            },
            "discussionsUrl": {
                "type": 874
            },
            "editTeamResourcePath": {
                "type": 874
            },
            "editTeamUrl": {
                "type": 874
            },
            "id": {
                "type": 2
            },
            "invitations": {
                "type": 487,
                "args": {
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
            },
            "memberStatuses": {
                "type": 988,
                "args": {
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
            },
            "members": {
                "type": 845,
                "args": {
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
            },
            "membersResourcePath": {
                "type": 874
            },
            "membersUrl": {
                "type": 874
            },
            "name": {
                "type": 1
            },
            "newTeamResourcePath": {
                "type": 874
            },
            "newTeamUrl": {
                "type": 874
            },
            "organization": {
                "type": 478
            },
            "parentTeam": {
                "type": 828
            },
            "privacy": {
                "type": 853
            },
            "repositories": {
                "type": 856,
                "args": {
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
            },
            "repositoriesResourcePath": {
                "type": 874
            },
            "repositoriesUrl": {
                "type": 874
            },
            "resourcePath": {
                "type": 874
            },
            "reviewRequestDelegationAlgorithm": {
                "type": 860
            },
            "reviewRequestDelegationEnabled": {
                "type": 48
            },
            "reviewRequestDelegationMemberCount": {
                "type": 8
            },
            "reviewRequestDelegationNotifyTeam": {
                "type": 48
            },
            "slug": {
                "type": 1
            },
            "teamsResourcePath": {
                "type": 874
            },
            "teamsUrl": {
                "type": 874
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "viewerCanAdminister": {
                "type": 48
            },
            "viewerCanSubscribe": {
                "type": 48
            },
            "viewerSubscription": {
                "type": 825
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamAddMemberAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "isLdapMapped": {
                "type": 48
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "team": {
                "type": 828
            },
            "teamName": {
                "type": 1
            },
            "teamResourcePath": {
                "type": 874
            },
            "teamUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamAddRepositoryAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "isLdapMapped": {
                "type": 48
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "team": {
                "type": 828
            },
            "teamName": {
                "type": 1
            },
            "teamResourcePath": {
                "type": 874
            },
            "teamUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamAuditEntryData": {
            "team": {
                "type": 828
            },
            "teamName": {
                "type": 1
            },
            "teamResourcePath": {
                "type": 874
            },
            "teamUrl": {
                "type": 874
            },
            "on_OrgRestoreMemberMembershipTeamAuditEntryData": {
                "type": 469
            },
            "on_TeamAddMemberAuditEntry": {
                "type": 829
            },
            "on_TeamAddRepositoryAuditEntry": {
                "type": 830
            },
            "on_TeamChangeParentTeamAuditEntry": {
                "type": 832
            },
            "on_TeamRemoveMemberAuditEntry": {
                "type": 854
            },
            "on_TeamRemoveRepositoryAuditEntry": {
                "type": 855
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamChangeParentTeamAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "isLdapMapped": {
                "type": 48
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "parentTeam": {
                "type": 828
            },
            "parentTeamName": {
                "type": 1
            },
            "parentTeamNameWas": {
                "type": 1
            },
            "parentTeamResourcePath": {
                "type": 874
            },
            "parentTeamUrl": {
                "type": 874
            },
            "parentTeamWas": {
                "type": 828
            },
            "parentTeamWasResourcePath": {
                "type": 874
            },
            "parentTeamWasUrl": {
                "type": 874
            },
            "team": {
                "type": 828
            },
            "teamName": {
                "type": 1
            },
            "teamResourcePath": {
                "type": 874
            },
            "teamUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamConnection": {
            "edges": {
                "type": 844
            },
            "nodes": {
                "type": 828
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamDiscussion": {
            "author": {
                "type": 7
            },
            "authorAssociation": {
                "type": 99
            },
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "bodyText": {
                "type": 1
            },
            "bodyVersion": {
                "type": 1
            },
            "comments": {
                "type": 836,
                "args": {
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
            },
            "commentsResourcePath": {
                "type": 874
            },
            "commentsUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 180
            },
            "createdViaEmail": {
                "type": 48
            },
            "databaseId": {
                "type": 8
            },
            "editor": {
                "type": 7
            },
            "id": {
                "type": 2
            },
            "includesCreatedEdit": {
                "type": 48
            },
            "isPinned": {
                "type": 48
            },
            "isPrivate": {
                "type": 48
            },
            "lastEditedAt": {
                "type": 180
            },
            "number": {
                "type": 8
            },
            "publishedAt": {
                "type": 180
            },
            "reactionGroups": {
                "type": 612
            },
            "reactions": {
                "type": 609,
                "args": {
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
            },
            "resourcePath": {
                "type": 874
            },
            "team": {
                "type": 828
            },
            "title": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "userContentEdits": {
                "type": 984,
                "args": {
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
            },
            "viewerCanDelete": {
                "type": 48
            },
            "viewerCanPin": {
                "type": 48
            },
            "viewerCanReact": {
                "type": 48
            },
            "viewerCanSubscribe": {
                "type": 48
            },
            "viewerCanUpdate": {
                "type": 48
            },
            "viewerCannotUpdateReasons": {
                "type": 100
            },
            "viewerDidAuthor": {
                "type": 48
            },
            "viewerSubscription": {
                "type": 825
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamDiscussionComment": {
            "author": {
                "type": 7
            },
            "authorAssociation": {
                "type": 99
            },
            "body": {
                "type": 1
            },
            "bodyHTML": {
                "type": 336
            },
            "bodyText": {
                "type": 1
            },
            "bodyVersion": {
                "type": 1
            },
            "createdAt": {
                "type": 180
            },
            "createdViaEmail": {
                "type": 48
            },
            "databaseId": {
                "type": 8
            },
            "discussion": {
                "type": 834
            },
            "editor": {
                "type": 7
            },
            "id": {
                "type": 2
            },
            "includesCreatedEdit": {
                "type": 48
            },
            "lastEditedAt": {
                "type": 180
            },
            "number": {
                "type": 8
            },
            "publishedAt": {
                "type": 180
            },
            "reactionGroups": {
                "type": 612
            },
            "reactions": {
                "type": 609,
                "args": {
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
            },
            "resourcePath": {
                "type": 874
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "userContentEdits": {
                "type": 984,
                "args": {
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
            },
            "viewerCanDelete": {
                "type": 48
            },
            "viewerCanReact": {
                "type": 48
            },
            "viewerCanUpdate": {
                "type": 48
            },
            "viewerCannotUpdateReasons": {
                "type": 100
            },
            "viewerDidAuthor": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamDiscussionCommentConnection": {
            "edges": {
                "type": 837
            },
            "nodes": {
                "type": 835
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamDiscussionCommentEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 835
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamDiscussionCommentOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 839
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamDiscussionCommentOrderField": {},
        "TeamDiscussionConnection": {
            "edges": {
                "type": 841
            },
            "nodes": {
                "type": 834
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamDiscussionEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 834
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamDiscussionOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 843
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamDiscussionOrderField": {},
        "TeamEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 828
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamMemberConnection": {
            "edges": {
                "type": 846
            },
            "nodes": {
                "type": 979
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamMemberEdge": {
            "cursor": {
                "type": 1
            },
            "memberAccessResourcePath": {
                "type": 874
            },
            "memberAccessUrl": {
                "type": 874
            },
            "node": {
                "type": 979
            },
            "role": {
                "type": 849
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamMemberOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 848
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamMemberOrderField": {},
        "TeamMemberRole": {},
        "TeamMembershipType": {},
        "TeamOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 852
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamOrderField": {},
        "TeamPrivacy": {},
        "TeamRemoveMemberAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "isLdapMapped": {
                "type": 48
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "team": {
                "type": 828
            },
            "teamName": {
                "type": 1
            },
            "teamResourcePath": {
                "type": 874
            },
            "teamUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamRemoveRepositoryAuditEntry": {
            "action": {
                "type": 1
            },
            "actor": {
                "type": 38
            },
            "actorIp": {
                "type": 1
            },
            "actorLocation": {
                "type": 9
            },
            "actorLogin": {
                "type": 1
            },
            "actorResourcePath": {
                "type": 874
            },
            "actorUrl": {
                "type": 874
            },
            "createdAt": {
                "type": 532
            },
            "id": {
                "type": 2
            },
            "isLdapMapped": {
                "type": 48
            },
            "operationType": {
                "type": 436
            },
            "organization": {
                "type": 478
            },
            "organizationName": {
                "type": 1
            },
            "organizationResourcePath": {
                "type": 874
            },
            "organizationUrl": {
                "type": 874
            },
            "repository": {
                "type": 707
            },
            "repositoryName": {
                "type": 1
            },
            "repositoryResourcePath": {
                "type": 874
            },
            "repositoryUrl": {
                "type": 874
            },
            "team": {
                "type": 828
            },
            "teamName": {
                "type": 1
            },
            "teamResourcePath": {
                "type": 874
            },
            "teamUrl": {
                "type": 874
            },
            "user": {
                "type": 979
            },
            "userLogin": {
                "type": 1
            },
            "userResourcePath": {
                "type": 874
            },
            "userUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamRepositoryConnection": {
            "edges": {
                "type": 857
            },
            "nodes": {
                "type": 707
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamRepositoryEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 707
            },
            "permission": {
                "type": 726
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamRepositoryOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 859
            },
            "__typename": {
                "type": 1
            }
        },
        "TeamRepositoryOrderField": {},
        "TeamReviewAssignmentAlgorithm": {},
        "TeamRole": {},
        "TextMatch": {
            "fragment": {
                "type": 1
            },
            "highlights": {
                "type": 863
            },
            "property": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "TextMatchHighlight": {
            "beginIndice": {
                "type": 8
            },
            "endIndice": {
                "type": 8
            },
            "text": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "Topic": {
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "relatedTopics": {
                "type": 864,
                "args": {
                    "first": [
                        8
                    ]
                }
            },
            "stargazers": {
                "type": 806,
                "args": {
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
            },
            "viewerHasStarred": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "TopicAuditEntryData": {
            "topic": {
                "type": 864
            },
            "topicName": {
                "type": 1
            },
            "on_RepoAddTopicAuditEntry": {
                "type": 684
            },
            "on_RepoRemoveTopicAuditEntry": {
                "type": 705
            },
            "__typename": {
                "type": 1
            }
        },
        "TopicConnection": {
            "edges": {
                "type": 867
            },
            "nodes": {
                "type": 864
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "TopicEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 864
            },
            "__typename": {
                "type": 1
            }
        },
        "TopicSuggestionDeclineReason": {},
        "TransferIssueInput": {
            "clientMutationId": {
                "type": 1
            },
            "issueId": {
                "type": 2
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "TransferIssuePayload": {
            "clientMutationId": {
                "type": 1
            },
            "issue": {
                "type": 354
            },
            "__typename": {
                "type": 1
            }
        },
        "TransferredEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "fromRepository": {
                "type": 707
            },
            "id": {
                "type": 2
            },
            "issue": {
                "type": 354
            },
            "__typename": {
                "type": 1
            }
        },
        "Tree": {
            "abbreviatedOid": {
                "type": 1
            },
            "commitResourcePath": {
                "type": 874
            },
            "commitUrl": {
                "type": 874
            },
            "entries": {
                "type": 873
            },
            "id": {
                "type": 2
            },
            "oid": {
                "type": 329
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "TreeEntry": {
            "mode": {
                "type": 8
            },
            "name": {
                "type": 1
            },
            "object": {
                "type": 328
            },
            "oid": {
                "type": 329
            },
            "repository": {
                "type": 707
            },
            "submodule": {
                "type": 820
            },
            "type": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "URI": {},
        "UnarchiveRepositoryInput": {
            "clientMutationId": {
                "type": 1
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UnarchiveRepositoryPayload": {
            "clientMutationId": {
                "type": 1
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "UnassignedEvent": {
            "actor": {
                "type": 7
            },
            "assignable": {
                "type": 34
            },
            "assignee": {
                "type": 36
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "UnfollowUserInput": {
            "clientMutationId": {
                "type": 1
            },
            "userId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UnfollowUserPayload": {
            "clientMutationId": {
                "type": 1
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "UniformResourceLocatable": {
            "resourcePath": {
                "type": 874
            },
            "url": {
                "type": 874
            },
            "on_Bot": {
                "type": 49
            },
            "on_CheckRun": {
                "type": 69
            },
            "on_ClosedEvent": {
                "type": 94
            },
            "on_Commit": {
                "type": 102
            },
            "on_ConvertToDraftEvent": {
                "type": 126
            },
            "on_CrossReferencedEvent": {
                "type": 178
            },
            "on_Gist": {
                "type": 316
            },
            "on_Issue": {
                "type": 354
            },
            "on_Mannequin": {
                "type": 395
            },
            "on_MergedEvent": {
                "type": 414
            },
            "on_Milestone": {
                "type": 415
            },
            "on_Organization": {
                "type": 478
            },
            "on_PullRequest": {
                "type": 560
            },
            "on_PullRequestCommit": {
                "type": 564
            },
            "on_ReadyForReviewEvent": {
                "type": 615
            },
            "on_Release": {
                "type": 648
            },
            "on_Repository": {
                "type": 707
            },
            "on_RepositoryTopic": {
                "type": 728
            },
            "on_ReviewDismissedEvent": {
                "type": 750
            },
            "on_TeamDiscussion": {
                "type": 834
            },
            "on_TeamDiscussionComment": {
                "type": 835
            },
            "on_User": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "UnknownSignature": {
            "email": {
                "type": 1
            },
            "isValid": {
                "type": 48
            },
            "payload": {
                "type": 1
            },
            "signature": {
                "type": 1
            },
            "signer": {
                "type": 979
            },
            "state": {
                "type": 333
            },
            "wasSignedByGitHub": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "UnlabeledEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "label": {
                "type": 374
            },
            "labelable": {
                "type": 379
            },
            "__typename": {
                "type": 1
            }
        },
        "UnlinkRepositoryFromProjectInput": {
            "clientMutationId": {
                "type": 1
            },
            "projectId": {
                "type": 2
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UnlinkRepositoryFromProjectPayload": {
            "clientMutationId": {
                "type": 1
            },
            "project": {
                "type": 537
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "UnlockLockableInput": {
            "clientMutationId": {
                "type": 1
            },
            "lockableId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UnlockLockablePayload": {
            "actor": {
                "type": 7
            },
            "clientMutationId": {
                "type": 1
            },
            "unlockedRecord": {
                "type": 393
            },
            "__typename": {
                "type": 1
            }
        },
        "UnlockedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "lockable": {
                "type": 393
            },
            "__typename": {
                "type": 1
            }
        },
        "UnmarkIssueAsDuplicateInput": {
            "canonicalId": {
                "type": 2
            },
            "clientMutationId": {
                "type": 1
            },
            "duplicateId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UnmarkIssueAsDuplicatePayload": {
            "clientMutationId": {
                "type": 1
            },
            "duplicate": {
                "type": 362
            },
            "__typename": {
                "type": 1
            }
        },
        "UnmarkedAsDuplicateEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UnminimizeCommentInput": {
            "clientMutationId": {
                "type": 1
            },
            "subjectId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UnminimizeCommentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "unminimizedComment": {
                "type": 423
            },
            "__typename": {
                "type": 1
            }
        },
        "UnpinIssueInput": {
            "clientMutationId": {
                "type": 1
            },
            "issueId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UnpinIssuePayload": {
            "clientMutationId": {
                "type": 1
            },
            "issue": {
                "type": 354
            },
            "__typename": {
                "type": 1
            }
        },
        "UnpinnedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "issue": {
                "type": 354
            },
            "__typename": {
                "type": 1
            }
        },
        "UnresolveReviewThreadInput": {
            "clientMutationId": {
                "type": 1
            },
            "threadId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UnresolveReviewThreadPayload": {
            "clientMutationId": {
                "type": 1
            },
            "thread": {
                "type": 585
            },
            "__typename": {
                "type": 1
            }
        },
        "UnsubscribedEvent": {
            "actor": {
                "type": 7
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "subscribable": {
                "type": 823
            },
            "__typename": {
                "type": 1
            }
        },
        "Updatable": {
            "viewerCanUpdate": {
                "type": 48
            },
            "on_CommitComment": {
                "type": 104
            },
            "on_GistComment": {
                "type": 317
            },
            "on_Issue": {
                "type": 354
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_Project": {
                "type": 537
            },
            "on_PullRequest": {
                "type": 560
            },
            "on_PullRequestReview": {
                "type": 574
            },
            "on_PullRequestReviewComment": {
                "type": 575
            },
            "on_TeamDiscussion": {
                "type": 834
            },
            "on_TeamDiscussionComment": {
                "type": 835
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdatableComment": {
            "viewerCannotUpdateReasons": {
                "type": 100
            },
            "on_CommitComment": {
                "type": 104
            },
            "on_GistComment": {
                "type": 317
            },
            "on_Issue": {
                "type": 354
            },
            "on_IssueComment": {
                "type": 355
            },
            "on_PullRequest": {
                "type": 560
            },
            "on_PullRequestReview": {
                "type": 574
            },
            "on_PullRequestReviewComment": {
                "type": 575
            },
            "on_TeamDiscussion": {
                "type": 834
            },
            "on_TeamDiscussionComment": {
                "type": 835
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateBranchProtectionRuleInput": {
            "branchProtectionRuleId": {
                "type": 2
            },
            "clientMutationId": {
                "type": 1
            },
            "dismissesStaleReviews": {
                "type": 48
            },
            "isAdminEnforced": {
                "type": 48
            },
            "pattern": {
                "type": 1
            },
            "pushActorIds": {
                "type": 2
            },
            "requiredApprovingReviewCount": {
                "type": 8
            },
            "requiredStatusCheckContexts": {
                "type": 1
            },
            "requiresApprovingReviews": {
                "type": 48
            },
            "requiresCodeOwnerReviews": {
                "type": 48
            },
            "requiresCommitSignatures": {
                "type": 48
            },
            "requiresStatusChecks": {
                "type": 48
            },
            "requiresStrictStatusChecks": {
                "type": 48
            },
            "restrictsPushes": {
                "type": 48
            },
            "restrictsReviewDismissals": {
                "type": 48
            },
            "reviewDismissalActorIds": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateBranchProtectionRulePayload": {
            "branchProtectionRule": {
                "type": 50
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateCheckRunInput": {
            "actions": {
                "type": 70
            },
            "checkRunId": {
                "type": 2
            },
            "clientMutationId": {
                "type": 1
            },
            "completedAt": {
                "type": 180
            },
            "conclusion": {
                "type": 68
            },
            "detailsUrl": {
                "type": 874
            },
            "externalId": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "output": {
                "type": 74
            },
            "repositoryId": {
                "type": 2
            },
            "startedAt": {
                "type": 180
            },
            "status": {
                "type": 739
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateCheckRunPayload": {
            "checkRun": {
                "type": 69
            },
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateCheckSuitePreferencesInput": {
            "autoTriggerPreferences": {
                "type": 79
            },
            "clientMutationId": {
                "type": 1
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateCheckSuitePreferencesPayload": {
            "clientMutationId": {
                "type": 1
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseActionExecutionCapabilitySettingInput": {
            "capability": {
                "type": 6
            },
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseActionExecutionCapabilitySettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseAdministratorRoleInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "login": {
                "type": 1
            },
            "role": {
                "type": 251
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseAdministratorRolePayload": {
            "clientMutationId": {
                "type": 1
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 256
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseDefaultRepositoryPermissionSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 255
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseDefaultRepositoryPermissionSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 256
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanCreateRepositoriesSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "membersCanCreateInternalRepositories": {
                "type": 48
            },
            "membersCanCreatePrivateRepositories": {
                "type": 48
            },
            "membersCanCreatePublicRepositories": {
                "type": 48
            },
            "membersCanCreateRepositoriesPolicyEnabled": {
                "type": 48
            },
            "settingValue": {
                "type": 264
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanDeleteIssuesSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 256
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanDeleteIssuesSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 256
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 256
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanMakePurchasesSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 265
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanMakePurchasesSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 256
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 256
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseOrganizationProjectsSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 256
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseOrganizationProjectsSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseProfileInput": {
            "clientMutationId": {
                "type": 1
            },
            "description": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "location": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "websiteUrl": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseProfilePayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseRepositoryProjectsSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 256
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseRepositoryProjectsSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseTeamDiscussionsSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 256
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseTeamDiscussionsSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "enterpriseId": {
                "type": 2
            },
            "settingValue": {
                "type": 257
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "enterprise": {
                "type": 243
            },
            "message": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateIpAllowListEnabledSettingInput": {
            "clientMutationId": {
                "type": 1
            },
            "ownerId": {
                "type": 2
            },
            "settingValue": {
                "type": 347
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateIpAllowListEnabledSettingPayload": {
            "clientMutationId": {
                "type": 1
            },
            "owner": {
                "type": 353
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateIpAllowListEntryInput": {
            "allowListValue": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "ipAllowListEntryId": {
                "type": 2
            },
            "isActive": {
                "type": 48
            },
            "name": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateIpAllowListEntryPayload": {
            "clientMutationId": {
                "type": 1
            },
            "ipAllowListEntry": {
                "type": 348
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateIssueCommentInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateIssueCommentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "issueComment": {
                "type": 355
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateIssueInput": {
            "assigneeIds": {
                "type": 2
            },
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "labelIds": {
                "type": 2
            },
            "milestoneId": {
                "type": 2
            },
            "projectIds": {
                "type": 2
            },
            "state": {
                "type": 365
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateIssuePayload": {
            "actor": {
                "type": 7
            },
            "clientMutationId": {
                "type": 1
            },
            "issue": {
                "type": 354
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateLabelInput": {
            "clientMutationId": {
                "type": 1
            },
            "color": {
                "type": 1
            },
            "description": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "name": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateLabelPayload": {
            "clientMutationId": {
                "type": 1
            },
            "label": {
                "type": 374
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateProjectCardInput": {
            "clientMutationId": {
                "type": 1
            },
            "isArchived": {
                "type": 48
            },
            "note": {
                "type": 1
            },
            "projectCardId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateProjectCardPayload": {
            "clientMutationId": {
                "type": 1
            },
            "projectCard": {
                "type": 538
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateProjectColumnInput": {
            "clientMutationId": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "projectColumnId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateProjectColumnPayload": {
            "clientMutationId": {
                "type": 1
            },
            "projectColumn": {
                "type": 545
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateProjectInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "projectId": {
                "type": 2
            },
            "public": {
                "type": 48
            },
            "state": {
                "type": 555
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateProjectPayload": {
            "clientMutationId": {
                "type": 1
            },
            "project": {
                "type": 537
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdatePullRequestInput": {
            "assigneeIds": {
                "type": 2
            },
            "baseRefName": {
                "type": 1
            },
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "labelIds": {
                "type": 2
            },
            "maintainerCanModify": {
                "type": 48
            },
            "milestoneId": {
                "type": 2
            },
            "projectIds": {
                "type": 2
            },
            "pullRequestId": {
                "type": 2
            },
            "state": {
                "type": 597
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdatePullRequestPayload": {
            "actor": {
                "type": 7
            },
            "clientMutationId": {
                "type": 1
            },
            "pullRequest": {
                "type": 560
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdatePullRequestReviewCommentInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "pullRequestReviewCommentId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdatePullRequestReviewCommentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestReviewComment": {
                "type": 575
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdatePullRequestReviewInput": {
            "body": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "pullRequestReviewId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdatePullRequestReviewPayload": {
            "clientMutationId": {
                "type": 1
            },
            "pullRequestReview": {
                "type": 574
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateRefInput": {
            "clientMutationId": {
                "type": 1
            },
            "force": {
                "type": 48
            },
            "oid": {
                "type": 329
            },
            "refId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateRefPayload": {
            "clientMutationId": {
                "type": 1
            },
            "ref": {
                "type": 616
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateRefsInput": {
            "clientMutationId": {
                "type": 1
            },
            "refUpdates": {
                "type": 621
            },
            "repositoryId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateRefsPayload": {
            "clientMutationId": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateRepositoryInput": {
            "clientMutationId": {
                "type": 1
            },
            "description": {
                "type": 1
            },
            "hasIssuesEnabled": {
                "type": 48
            },
            "hasProjectsEnabled": {
                "type": 48
            },
            "hasWikiEnabled": {
                "type": 48
            },
            "homepageUrl": {
                "type": 874
            },
            "name": {
                "type": 1
            },
            "repositoryId": {
                "type": 2
            },
            "template": {
                "type": 48
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateRepositoryPayload": {
            "clientMutationId": {
                "type": 1
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateSubscriptionInput": {
            "clientMutationId": {
                "type": 1
            },
            "state": {
                "type": 825
            },
            "subscribableId": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateSubscriptionPayload": {
            "clientMutationId": {
                "type": 1
            },
            "subscribable": {
                "type": 823
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateTeamDiscussionCommentInput": {
            "body": {
                "type": 1
            },
            "bodyVersion": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateTeamDiscussionCommentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "teamDiscussionComment": {
                "type": 835
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateTeamDiscussionInput": {
            "body": {
                "type": 1
            },
            "bodyVersion": {
                "type": 1
            },
            "clientMutationId": {
                "type": 1
            },
            "id": {
                "type": 2
            },
            "pinned": {
                "type": 48
            },
            "title": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateTeamDiscussionPayload": {
            "clientMutationId": {
                "type": 1
            },
            "teamDiscussion": {
                "type": 834
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateTeamReviewAssignmentInput": {
            "algorithm": {
                "type": 860
            },
            "clientMutationId": {
                "type": 1
            },
            "enabled": {
                "type": 48
            },
            "excludedTeamMemberIds": {
                "type": 2
            },
            "id": {
                "type": 2
            },
            "notifyTeam": {
                "type": 48
            },
            "teamMemberCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateTeamReviewAssignmentPayload": {
            "clientMutationId": {
                "type": 1
            },
            "team": {
                "type": 828
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateTopicsInput": {
            "clientMutationId": {
                "type": 1
            },
            "repositoryId": {
                "type": 2
            },
            "topicNames": {
                "type": 1
            },
            "__typename": {
                "type": 1
            }
        },
        "UpdateTopicsPayload": {
            "clientMutationId": {
                "type": 1
            },
            "invalidTopicNames": {
                "type": 1
            },
            "repository": {
                "type": 707
            },
            "__typename": {
                "type": 1
            }
        },
        "User": {
            "anyPinnableItems": {
                "type": 48,
                "args": {
                    "type": [
                        527
                    ]
                }
            },
            "avatarUrl": {
                "type": 874,
                "args": {
                    "size": [
                        8
                    ]
                }
            },
            "bio": {
                "type": 1
            },
            "bioHTML": {
                "type": 336
            },
            "commitComments": {
                "type": 105,
                "args": {
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
            },
            "company": {
                "type": 1
            },
            "companyHTML": {
                "type": 336
            },
            "contributionsCollection": {
                "type": 123,
                "args": {
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
            },
            "createdAt": {
                "type": 180
            },
            "databaseId": {
                "type": 8
            },
            "email": {
                "type": 1
            },
            "followers": {
                "type": 311,
                "args": {
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
            },
            "following": {
                "type": 312,
                "args": {
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
            },
            "gist": {
                "type": 316,
                "args": {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            },
            "gistComments": {
                "type": 318,
                "args": {
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
            },
            "gists": {
                "type": 320,
                "args": {
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
            },
            "hovercard": {
                "type": 340,
                "args": {
                    "primarySubjectId": [
                        2
                    ]
                }
            },
            "id": {
                "type": 2
            },
            "isBountyHunter": {
                "type": 48
            },
            "isCampusExpert": {
                "type": 48
            },
            "isDeveloperProgramMember": {
                "type": 48
            },
            "isEmployee": {
                "type": 48
            },
            "isHireable": {
                "type": 48
            },
            "isSiteAdmin": {
                "type": 48
            },
            "isViewer": {
                "type": 48
            },
            "issueComments": {
                "type": 356,
                "args": {
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
            },
            "issues": {
                "type": 358,
                "args": {
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
            },
            "itemShowcase": {
                "type": 535
            },
            "location": {
                "type": 1
            },
            "login": {
                "type": 1
            },
            "name": {
                "type": 1
            },
            "organization": {
                "type": 478,
                "args": {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            },
            "organizationVerifiedDomainEmails": {
                "type": 1,
                "args": {
                    "login": [
                        1,
                        "String!"
                    ]
                }
            },
            "organizations": {
                "type": 483,
                "args": {
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
            },
            "packages": {
                "type": 500,
                "args": {
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
            },
            "pinnableItems": {
                "type": 525,
                "args": {
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
            },
            "pinnedItems": {
                "type": 525,
                "args": {
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
            },
            "pinnedItemsRemaining": {
                "type": 8
            },
            "project": {
                "type": 537,
                "args": {
                    "number": [
                        8,
                        "Int!"
                    ]
                }
            },
            "projects": {
                "type": 550,
                "args": {
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
            },
            "projectsResourcePath": {
                "type": 874
            },
            "projectsUrl": {
                "type": 874
            },
            "publicKeys": {
                "type": 558,
                "args": {
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
            },
            "pullRequests": {
                "type": 568,
                "args": {
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
            },
            "registryPackages": {
                "type": 627,
                "args": {
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
            },
            "registryPackagesForQuery": {
                "type": 627,
                "args": {
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
            },
            "repositories": {
                "type": 712,
                "args": {
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
            },
            "repositoriesContributedTo": {
                "type": 712,
                "args": {
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
            },
            "repository": {
                "type": 707,
                "args": {
                    "name": [
                        1,
                        "String!"
                    ]
                }
            },
            "resourcePath": {
                "type": 874
            },
            "savedReplies": {
                "type": 760,
                "args": {
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
            },
            "sponsorsListing": {
                "type": 791
            },
            "sponsorshipsAsMaintainer": {
                "type": 799,
                "args": {
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
            },
            "sponsorshipsAsSponsor": {
                "type": 799,
                "args": {
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
            },
            "starredRepositories": {
                "type": 809,
                "args": {
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
            },
            "status": {
                "type": 987
            },
            "topRepositories": {
                "type": 712,
                "args": {
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
            },
            "twitterUsername": {
                "type": 1
            },
            "updatedAt": {
                "type": 180
            },
            "url": {
                "type": 874
            },
            "viewerCanChangePinnedItems": {
                "type": 48
            },
            "viewerCanCreateProjects": {
                "type": 48
            },
            "viewerCanFollow": {
                "type": 48
            },
            "viewerIsFollowing": {
                "type": 48
            },
            "watching": {
                "type": 712,
                "args": {
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
            },
            "websiteUrl": {
                "type": 874
            },
            "__typename": {
                "type": 1
            }
        },
        "UserBlockDuration": {},
        "UserBlockedEvent": {
            "actor": {
                "type": 7
            },
            "blockDuration": {
                "type": 980
            },
            "createdAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "subject": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "UserConnection": {
            "edges": {
                "type": 986
            },
            "nodes": {
                "type": 979
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "UserContentEdit": {
            "createdAt": {
                "type": 180
            },
            "deletedAt": {
                "type": 180
            },
            "deletedBy": {
                "type": 7
            },
            "diff": {
                "type": 1
            },
            "editedAt": {
                "type": 180
            },
            "editor": {
                "type": 7
            },
            "id": {
                "type": 2
            },
            "updatedAt": {
                "type": 180
            },
            "__typename": {
                "type": 1
            }
        },
        "UserContentEditConnection": {
            "edges": {
                "type": 985
            },
            "nodes": {
                "type": 983
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "UserContentEditEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 983
            },
            "__typename": {
                "type": 1
            }
        },
        "UserEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "UserStatus": {
            "createdAt": {
                "type": 180
            },
            "emoji": {
                "type": 1
            },
            "emojiHTML": {
                "type": 336
            },
            "expiresAt": {
                "type": 180
            },
            "id": {
                "type": 2
            },
            "indicatesLimitedAvailability": {
                "type": 48
            },
            "message": {
                "type": 1
            },
            "organization": {
                "type": 478
            },
            "updatedAt": {
                "type": 180
            },
            "user": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "UserStatusConnection": {
            "edges": {
                "type": 989
            },
            "nodes": {
                "type": 987
            },
            "pageInfo": {
                "type": 519
            },
            "totalCount": {
                "type": 8
            },
            "__typename": {
                "type": 1
            }
        },
        "UserStatusEdge": {
            "cursor": {
                "type": 1
            },
            "node": {
                "type": 987
            },
            "__typename": {
                "type": 1
            }
        },
        "UserStatusOrder": {
            "direction": {
                "type": 437
            },
            "field": {
                "type": 991
            },
            "__typename": {
                "type": 1
            }
        },
        "UserStatusOrderField": {},
        "ViewerHovercardContext": {
            "message": {
                "type": 1
            },
            "octicon": {
                "type": 1
            },
            "viewer": {
                "type": 979
            },
            "__typename": {
                "type": 1
            }
        },
        "X509Certificate": {}
    }
}