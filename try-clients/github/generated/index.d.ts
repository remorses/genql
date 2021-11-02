import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  QueryRequest,
  QueryPromiseChain,
  Query,
  MutationRequest,
  MutationPromiseChain,
  Mutation,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends QueryRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>

  mutation<R extends MutationRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Mutation, R>>

  chain: {
    query: QueryPromiseChain

    mutation: MutationPromiseChain
  }
}

export type QueryResult<fields extends QueryRequest> = FieldsSelection<
  Query,
  fields
>

export declare const generateQueryOp: (
  fields: QueryRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<fields extends MutationRequest> = FieldsSelection<
  Mutation,
  fields
>

export declare const generateMutationOp: (
  fields: MutationRequest & { __name?: string },
) => GraphqlOperation

export declare const enumActionExecutionCapabilitySetting = {
  ALL_ACTIONS: 'ALL_ACTIONS',
  DISABLED: 'DISABLED',
  LOCAL_ACTIONS_ONLY: 'LOCAL_ACTIONS_ONLY',
  NO_POLICY: 'NO_POLICY',
} as const

export declare const enumAuditLogOrderField = {
  CREATED_AT: 'CREATED_AT',
} as const

export declare const enumCheckAnnotationLevel = {
  FAILURE: 'FAILURE',
  NOTICE: 'NOTICE',
  WARNING: 'WARNING',
} as const

export declare const enumCheckConclusionState = {
  ACTION_REQUIRED: 'ACTION_REQUIRED',
  CANCELLED: 'CANCELLED',
  FAILURE: 'FAILURE',
  NEUTRAL: 'NEUTRAL',
  SKIPPED: 'SKIPPED',
  STALE: 'STALE',
  SUCCESS: 'SUCCESS',
  TIMED_OUT: 'TIMED_OUT',
} as const

export declare const enumCheckRunType = {
  ALL: 'ALL',
  LATEST: 'LATEST',
} as const

export declare const enumCheckStatusState = {
  COMPLETED: 'COMPLETED',
  IN_PROGRESS: 'IN_PROGRESS',
  QUEUED: 'QUEUED',
  REQUESTED: 'REQUESTED',
} as const

export declare const enumCollaboratorAffiliation = {
  ALL: 'ALL',
  DIRECT: 'DIRECT',
  OUTSIDE: 'OUTSIDE',
} as const

export declare const enumCommentAuthorAssociation = {
  COLLABORATOR: 'COLLABORATOR',
  CONTRIBUTOR: 'CONTRIBUTOR',
  FIRST_TIMER: 'FIRST_TIMER',
  FIRST_TIME_CONTRIBUTOR: 'FIRST_TIME_CONTRIBUTOR',
  MEMBER: 'MEMBER',
  NONE: 'NONE',
  OWNER: 'OWNER',
} as const

export declare const enumCommentCannotUpdateReason = {
  ARCHIVED: 'ARCHIVED',
  DENIED: 'DENIED',
  INSUFFICIENT_ACCESS: 'INSUFFICIENT_ACCESS',
  LOCKED: 'LOCKED',
  LOGIN_REQUIRED: 'LOGIN_REQUIRED',
  MAINTENANCE: 'MAINTENANCE',
  VERIFIED_EMAIL_REQUIRED: 'VERIFIED_EMAIL_REQUIRED',
} as const

export declare const enumCommitContributionOrderField = {
  COMMIT_COUNT: 'COMMIT_COUNT',
  OCCURRED_AT: 'OCCURRED_AT',
} as const

export declare const enumDefaultRepositoryPermissionField = {
  ADMIN: 'ADMIN',
  NONE: 'NONE',
  READ: 'READ',
  WRITE: 'WRITE',
} as const

export declare const enumDeploymentOrderField = {
  CREATED_AT: 'CREATED_AT',
} as const

export declare const enumDeploymentState = {
  ABANDONED: 'ABANDONED',
  ACTIVE: 'ACTIVE',
  DESTROYED: 'DESTROYED',
  ERROR: 'ERROR',
  FAILURE: 'FAILURE',
  INACTIVE: 'INACTIVE',
  IN_PROGRESS: 'IN_PROGRESS',
  PENDING: 'PENDING',
  QUEUED: 'QUEUED',
} as const

export declare const enumDeploymentStatusState = {
  ERROR: 'ERROR',
  FAILURE: 'FAILURE',
  INACTIVE: 'INACTIVE',
  IN_PROGRESS: 'IN_PROGRESS',
  PENDING: 'PENDING',
  QUEUED: 'QUEUED',
  SUCCESS: 'SUCCESS',
} as const

export declare const enumDiffSide = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const

export declare const enumEnterpriseAdministratorInvitationOrderField = {
  CREATED_AT: 'CREATED_AT',
} as const

export declare const enumEnterpriseAdministratorRole = {
  BILLING_MANAGER: 'BILLING_MANAGER',
  OWNER: 'OWNER',
} as const

export declare const enumEnterpriseDefaultRepositoryPermissionSettingValue = {
  ADMIN: 'ADMIN',
  NONE: 'NONE',
  NO_POLICY: 'NO_POLICY',
  READ: 'READ',
  WRITE: 'WRITE',
} as const

export declare const enumEnterpriseEnabledDisabledSettingValue = {
  DISABLED: 'DISABLED',
  ENABLED: 'ENABLED',
  NO_POLICY: 'NO_POLICY',
} as const

export declare const enumEnterpriseEnabledSettingValue = {
  ENABLED: 'ENABLED',
  NO_POLICY: 'NO_POLICY',
} as const

export declare const enumEnterpriseMemberOrderField = {
  CREATED_AT: 'CREATED_AT',
  LOGIN: 'LOGIN',
} as const

export declare const enumEnterpriseMembersCanCreateRepositoriesSettingValue = {
  ALL: 'ALL',
  DISABLED: 'DISABLED',
  NO_POLICY: 'NO_POLICY',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
} as const

export declare const enumEnterpriseMembersCanMakePurchasesSettingValue = {
  DISABLED: 'DISABLED',
  ENABLED: 'ENABLED',
} as const

export declare const enumEnterpriseServerInstallationOrderField = {
  CREATED_AT: 'CREATED_AT',
  CUSTOMER_NAME: 'CUSTOMER_NAME',
  HOST_NAME: 'HOST_NAME',
} as const

export declare const enumEnterpriseServerUserAccountEmailOrderField = {
  EMAIL: 'EMAIL',
} as const

export declare const enumEnterpriseServerUserAccountOrderField = {
  LOGIN: 'LOGIN',
  REMOTE_CREATED_AT: 'REMOTE_CREATED_AT',
} as const

export declare const enumEnterpriseServerUserAccountsUploadOrderField = {
  CREATED_AT: 'CREATED_AT',
} as const

export declare const enumEnterpriseServerUserAccountsUploadSyncState = {
  FAILURE: 'FAILURE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
} as const

export declare const enumEnterpriseUserAccountMembershipRole = {
  MEMBER: 'MEMBER',
  OWNER: 'OWNER',
} as const

export declare const enumEnterpriseUserDeployment = {
  CLOUD: 'CLOUD',
  SERVER: 'SERVER',
} as const

export declare const enumFundingPlatform = {
  COMMUNITY_BRIDGE: 'COMMUNITY_BRIDGE',
  CUSTOM: 'CUSTOM',
  GITHUB: 'GITHUB',
  ISSUEHUNT: 'ISSUEHUNT',
  KO_FI: 'KO_FI',
  LIBERAPAY: 'LIBERAPAY',
  OPEN_COLLECTIVE: 'OPEN_COLLECTIVE',
  OTECHIE: 'OTECHIE',
  PATREON: 'PATREON',
  TIDELIFT: 'TIDELIFT',
} as const

export declare const enumGistOrderField = {
  CREATED_AT: 'CREATED_AT',
  PUSHED_AT: 'PUSHED_AT',
  UPDATED_AT: 'UPDATED_AT',
} as const

export declare const enumGistPrivacy = {
  ALL: 'ALL',
  PUBLIC: 'PUBLIC',
  SECRET: 'SECRET',
} as const

export declare const enumGitSignatureState = {
  BAD_CERT: 'BAD_CERT',
  BAD_EMAIL: 'BAD_EMAIL',
  EXPIRED_KEY: 'EXPIRED_KEY',
  GPGVERIFY_ERROR: 'GPGVERIFY_ERROR',
  GPGVERIFY_UNAVAILABLE: 'GPGVERIFY_UNAVAILABLE',
  INVALID: 'INVALID',
  MALFORMED_SIG: 'MALFORMED_SIG',
  NOT_SIGNING_KEY: 'NOT_SIGNING_KEY',
  NO_USER: 'NO_USER',
  OCSP_ERROR: 'OCSP_ERROR',
  OCSP_PENDING: 'OCSP_PENDING',
  OCSP_REVOKED: 'OCSP_REVOKED',
  UNKNOWN_KEY: 'UNKNOWN_KEY',
  UNKNOWN_SIG_TYPE: 'UNKNOWN_SIG_TYPE',
  UNSIGNED: 'UNSIGNED',
  UNVERIFIED_EMAIL: 'UNVERIFIED_EMAIL',
  VALID: 'VALID',
} as const

export declare const enumIdentityProviderConfigurationState = {
  CONFIGURED: 'CONFIGURED',
  ENFORCED: 'ENFORCED',
  UNCONFIGURED: 'UNCONFIGURED',
} as const

export declare const enumIpAllowListEnabledSettingValue = {
  DISABLED: 'DISABLED',
  ENABLED: 'ENABLED',
} as const

export declare const enumIpAllowListEntryOrderField = {
  ALLOW_LIST_VALUE: 'ALLOW_LIST_VALUE',
  CREATED_AT: 'CREATED_AT',
} as const

export declare const enumIssueOrderField = {
  COMMENTS: 'COMMENTS',
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
} as const

export declare const enumIssueState = {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
} as const

export declare const enumIssueTimelineItemsItemType = {
  ADDED_TO_PROJECT_EVENT: 'ADDED_TO_PROJECT_EVENT',
  ASSIGNED_EVENT: 'ASSIGNED_EVENT',
  CLOSED_EVENT: 'CLOSED_EVENT',
  COMMENT_DELETED_EVENT: 'COMMENT_DELETED_EVENT',
  CONNECTED_EVENT: 'CONNECTED_EVENT',
  CONVERTED_NOTE_TO_ISSUE_EVENT: 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  CROSS_REFERENCED_EVENT: 'CROSS_REFERENCED_EVENT',
  DEMILESTONED_EVENT: 'DEMILESTONED_EVENT',
  DISCONNECTED_EVENT: 'DISCONNECTED_EVENT',
  ISSUE_COMMENT: 'ISSUE_COMMENT',
  LABELED_EVENT: 'LABELED_EVENT',
  LOCKED_EVENT: 'LOCKED_EVENT',
  MARKED_AS_DUPLICATE_EVENT: 'MARKED_AS_DUPLICATE_EVENT',
  MENTIONED_EVENT: 'MENTIONED_EVENT',
  MILESTONED_EVENT: 'MILESTONED_EVENT',
  MOVED_COLUMNS_IN_PROJECT_EVENT: 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PINNED_EVENT: 'PINNED_EVENT',
  REFERENCED_EVENT: 'REFERENCED_EVENT',
  REMOVED_FROM_PROJECT_EVENT: 'REMOVED_FROM_PROJECT_EVENT',
  RENAMED_TITLE_EVENT: 'RENAMED_TITLE_EVENT',
  REOPENED_EVENT: 'REOPENED_EVENT',
  SUBSCRIBED_EVENT: 'SUBSCRIBED_EVENT',
  TRANSFERRED_EVENT: 'TRANSFERRED_EVENT',
  UNASSIGNED_EVENT: 'UNASSIGNED_EVENT',
  UNLABELED_EVENT: 'UNLABELED_EVENT',
  UNLOCKED_EVENT: 'UNLOCKED_EVENT',
  UNMARKED_AS_DUPLICATE_EVENT: 'UNMARKED_AS_DUPLICATE_EVENT',
  UNPINNED_EVENT: 'UNPINNED_EVENT',
  UNSUBSCRIBED_EVENT: 'UNSUBSCRIBED_EVENT',
  USER_BLOCKED_EVENT: 'USER_BLOCKED_EVENT',
} as const

export declare const enumLabelOrderField = {
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
} as const

export declare const enumLanguageOrderField = {
  SIZE: 'SIZE',
} as const

export declare const enumLockReason = {
  OFF_TOPIC: 'OFF_TOPIC',
  RESOLVED: 'RESOLVED',
  SPAM: 'SPAM',
  TOO_HEATED: 'TOO_HEATED',
} as const

export declare const enumMergeStateStatus = {
  BEHIND: 'BEHIND',
  BLOCKED: 'BLOCKED',
  CLEAN: 'CLEAN',
  DIRTY: 'DIRTY',
  DRAFT: 'DRAFT',
  HAS_HOOKS: 'HAS_HOOKS',
  UNKNOWN: 'UNKNOWN',
  UNSTABLE: 'UNSTABLE',
} as const

export declare const enumMergeableState = {
  CONFLICTING: 'CONFLICTING',
  MERGEABLE: 'MERGEABLE',
  UNKNOWN: 'UNKNOWN',
} as const

export declare const enumMilestoneOrderField = {
  CREATED_AT: 'CREATED_AT',
  DUE_DATE: 'DUE_DATE',
  NUMBER: 'NUMBER',
  UPDATED_AT: 'UPDATED_AT',
} as const

export declare const enumMilestoneState = {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
} as const

export declare const enumOauthApplicationCreateAuditEntryState = {
  ACTIVE: 'ACTIVE',
  PENDING_DELETION: 'PENDING_DELETION',
  SUSPENDED: 'SUSPENDED',
} as const

export declare const enumOperationType = {
  ACCESS: 'ACCESS',
  AUTHENTICATION: 'AUTHENTICATION',
  CREATE: 'CREATE',
  MODIFY: 'MODIFY',
  REMOVE: 'REMOVE',
  RESTORE: 'RESTORE',
  TRANSFER: 'TRANSFER',
} as const

export declare const enumOrderDirection = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const

export declare const enumOrgAddMemberAuditEntryPermission = {
  ADMIN: 'ADMIN',
  READ: 'READ',
} as const

export declare const enumOrgCreateAuditEntryBillingPlan = {
  BUSINESS: 'BUSINESS',
  BUSINESS_PLUS: 'BUSINESS_PLUS',
  FREE: 'FREE',
  TIERED_PER_SEAT: 'TIERED_PER_SEAT',
  UNLIMITED: 'UNLIMITED',
} as const

export declare const enumOrgRemoveBillingManagerAuditEntryReason = {
  SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING',
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY:
    'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE:
    'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
} as const

export declare const enumOrgRemoveMemberAuditEntryMembershipType = {
  ADMIN: 'ADMIN',
  BILLING_MANAGER: 'BILLING_MANAGER',
  DIRECT_MEMBER: 'DIRECT_MEMBER',
  OUTSIDE_COLLABORATOR: 'OUTSIDE_COLLABORATOR',
  UNAFFILIATED: 'UNAFFILIATED',
} as const

export declare const enumOrgRemoveMemberAuditEntryReason = {
  SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING',
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY:
    'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',
  TWO_FACTOR_ACCOUNT_RECOVERY: 'TWO_FACTOR_ACCOUNT_RECOVERY',
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE:
    'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  USER_ACCOUNT_DELETED: 'USER_ACCOUNT_DELETED',
} as const

export declare const enumOrgRemoveOutsideCollaboratorAuditEntryMembershipType = {
  BILLING_MANAGER: 'BILLING_MANAGER',
  OUTSIDE_COLLABORATOR: 'OUTSIDE_COLLABORATOR',
  UNAFFILIATED: 'UNAFFILIATED',
} as const

export declare const enumOrgRemoveOutsideCollaboratorAuditEntryReason = {
  SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING',
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE:
    'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
} as const

export declare const enumOrgUpdateDefaultRepositoryPermissionAuditEntryPermission = {
  ADMIN: 'ADMIN',
  NONE: 'NONE',
  READ: 'READ',
  WRITE: 'WRITE',
} as const

export declare const enumOrgUpdateMemberAuditEntryPermission = {
  ADMIN: 'ADMIN',
  READ: 'READ',
} as const

export declare const enumOrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = {
  ALL: 'ALL',
  PUBLIC: 'PUBLIC',
} as const

export declare const enumOrganizationInvitationRole = {
  ADMIN: 'ADMIN',
  BILLING_MANAGER: 'BILLING_MANAGER',
  DIRECT_MEMBER: 'DIRECT_MEMBER',
  REINSTATE: 'REINSTATE',
} as const

export declare const enumOrganizationInvitationType = {
  EMAIL: 'EMAIL',
  USER: 'USER',
} as const

export declare const enumOrganizationMemberRole = {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
} as const

export declare const enumOrganizationMembersCanCreateRepositoriesSettingValue = {
  ALL: 'ALL',
  DISABLED: 'DISABLED',
  PRIVATE: 'PRIVATE',
} as const

export declare const enumOrganizationOrderField = {
  CREATED_AT: 'CREATED_AT',
  LOGIN: 'LOGIN',
} as const

export declare const enumPackageFileOrderField = {
  CREATED_AT: 'CREATED_AT',
} as const

export declare const enumPackageOrderField = {
  CREATED_AT: 'CREATED_AT',
} as const

export declare const enumPackageType = {
  DEBIAN: 'DEBIAN',
  DOCKER: 'DOCKER',
  MAVEN: 'MAVEN',
  NPM: 'NPM',
  NUGET: 'NUGET',
  PYPI: 'PYPI',
  RUBYGEMS: 'RUBYGEMS',
} as const

export declare const enumPackageVersionOrderField = {
  CREATED_AT: 'CREATED_AT',
} as const

export declare const enumPinnableItemType = {
  GIST: 'GIST',
  ISSUE: 'ISSUE',
  ORGANIZATION: 'ORGANIZATION',
  PROJECT: 'PROJECT',
  PULL_REQUEST: 'PULL_REQUEST',
  REPOSITORY: 'REPOSITORY',
  TEAM: 'TEAM',
  USER: 'USER',
} as const

export declare const enumProjectCardArchivedState = {
  ARCHIVED: 'ARCHIVED',
  NOT_ARCHIVED: 'NOT_ARCHIVED',
} as const

export declare const enumProjectCardState = {
  CONTENT_ONLY: 'CONTENT_ONLY',
  NOTE_ONLY: 'NOTE_ONLY',
  REDACTED: 'REDACTED',
} as const

export declare const enumProjectColumnPurpose = {
  DONE: 'DONE',
  IN_PROGRESS: 'IN_PROGRESS',
  TODO: 'TODO',
} as const

export declare const enumProjectOrderField = {
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
  UPDATED_AT: 'UPDATED_AT',
} as const

export declare const enumProjectState = {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
} as const

export declare const enumProjectTemplate = {
  AUTOMATED_KANBAN_V2: 'AUTOMATED_KANBAN_V2',
  AUTOMATED_REVIEWS_KANBAN: 'AUTOMATED_REVIEWS_KANBAN',
  BASIC_KANBAN: 'BASIC_KANBAN',
  BUG_TRIAGE: 'BUG_TRIAGE',
} as const

export declare const enumPullRequestMergeMethod = {
  MERGE: 'MERGE',
  REBASE: 'REBASE',
  SQUASH: 'SQUASH',
} as const

export declare const enumPullRequestOrderField = {
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
} as const

export declare const enumPullRequestReviewCommentState = {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
} as const

export declare const enumPullRequestReviewDecision = {
  APPROVED: 'APPROVED',
  CHANGES_REQUESTED: 'CHANGES_REQUESTED',
  REVIEW_REQUIRED: 'REVIEW_REQUIRED',
} as const

export declare const enumPullRequestReviewEvent = {
  APPROVE: 'APPROVE',
  COMMENT: 'COMMENT',
  DISMISS: 'DISMISS',
  REQUEST_CHANGES: 'REQUEST_CHANGES',
} as const

export declare const enumPullRequestReviewState = {
  APPROVED: 'APPROVED',
  CHANGES_REQUESTED: 'CHANGES_REQUESTED',
  COMMENTED: 'COMMENTED',
  DISMISSED: 'DISMISSED',
  PENDING: 'PENDING',
} as const

export declare const enumPullRequestState = {
  CLOSED: 'CLOSED',
  MERGED: 'MERGED',
  OPEN: 'OPEN',
} as const

export declare const enumPullRequestTimelineItemsItemType = {
  ADDED_TO_PROJECT_EVENT: 'ADDED_TO_PROJECT_EVENT',
  ASSIGNED_EVENT: 'ASSIGNED_EVENT',
  AUTOMATIC_BASE_CHANGE_FAILED_EVENT: 'AUTOMATIC_BASE_CHANGE_FAILED_EVENT',
  AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT:
    'AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT',
  BASE_REF_CHANGED_EVENT: 'BASE_REF_CHANGED_EVENT',
  BASE_REF_FORCE_PUSHED_EVENT: 'BASE_REF_FORCE_PUSHED_EVENT',
  CLOSED_EVENT: 'CLOSED_EVENT',
  COMMENT_DELETED_EVENT: 'COMMENT_DELETED_EVENT',
  CONNECTED_EVENT: 'CONNECTED_EVENT',
  CONVERTED_NOTE_TO_ISSUE_EVENT: 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  CONVERT_TO_DRAFT_EVENT: 'CONVERT_TO_DRAFT_EVENT',
  CROSS_REFERENCED_EVENT: 'CROSS_REFERENCED_EVENT',
  DEMILESTONED_EVENT: 'DEMILESTONED_EVENT',
  DEPLOYED_EVENT: 'DEPLOYED_EVENT',
  DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT: 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT',
  DISCONNECTED_EVENT: 'DISCONNECTED_EVENT',
  HEAD_REF_DELETED_EVENT: 'HEAD_REF_DELETED_EVENT',
  HEAD_REF_FORCE_PUSHED_EVENT: 'HEAD_REF_FORCE_PUSHED_EVENT',
  HEAD_REF_RESTORED_EVENT: 'HEAD_REF_RESTORED_EVENT',
  ISSUE_COMMENT: 'ISSUE_COMMENT',
  LABELED_EVENT: 'LABELED_EVENT',
  LOCKED_EVENT: 'LOCKED_EVENT',
  MARKED_AS_DUPLICATE_EVENT: 'MARKED_AS_DUPLICATE_EVENT',
  MENTIONED_EVENT: 'MENTIONED_EVENT',
  MERGED_EVENT: 'MERGED_EVENT',
  MILESTONED_EVENT: 'MILESTONED_EVENT',
  MOVED_COLUMNS_IN_PROJECT_EVENT: 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PINNED_EVENT: 'PINNED_EVENT',
  PULL_REQUEST_COMMIT: 'PULL_REQUEST_COMMIT',
  PULL_REQUEST_COMMIT_COMMENT_THREAD: 'PULL_REQUEST_COMMIT_COMMENT_THREAD',
  PULL_REQUEST_REVIEW: 'PULL_REQUEST_REVIEW',
  PULL_REQUEST_REVIEW_THREAD: 'PULL_REQUEST_REVIEW_THREAD',
  PULL_REQUEST_REVISION_MARKER: 'PULL_REQUEST_REVISION_MARKER',
  READY_FOR_REVIEW_EVENT: 'READY_FOR_REVIEW_EVENT',
  REFERENCED_EVENT: 'REFERENCED_EVENT',
  REMOVED_FROM_PROJECT_EVENT: 'REMOVED_FROM_PROJECT_EVENT',
  RENAMED_TITLE_EVENT: 'RENAMED_TITLE_EVENT',
  REOPENED_EVENT: 'REOPENED_EVENT',
  REVIEW_DISMISSED_EVENT: 'REVIEW_DISMISSED_EVENT',
  REVIEW_REQUESTED_EVENT: 'REVIEW_REQUESTED_EVENT',
  REVIEW_REQUEST_REMOVED_EVENT: 'REVIEW_REQUEST_REMOVED_EVENT',
  SUBSCRIBED_EVENT: 'SUBSCRIBED_EVENT',
  TRANSFERRED_EVENT: 'TRANSFERRED_EVENT',
  UNASSIGNED_EVENT: 'UNASSIGNED_EVENT',
  UNLABELED_EVENT: 'UNLABELED_EVENT',
  UNLOCKED_EVENT: 'UNLOCKED_EVENT',
  UNMARKED_AS_DUPLICATE_EVENT: 'UNMARKED_AS_DUPLICATE_EVENT',
  UNPINNED_EVENT: 'UNPINNED_EVENT',
  UNSUBSCRIBED_EVENT: 'UNSUBSCRIBED_EVENT',
  USER_BLOCKED_EVENT: 'USER_BLOCKED_EVENT',
} as const

export declare const enumPullRequestUpdateState = {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
} as const

export declare const enumReactionContent = {
  CONFUSED: 'CONFUSED',
  EYES: 'EYES',
  HEART: 'HEART',
  HOORAY: 'HOORAY',
  LAUGH: 'LAUGH',
  ROCKET: 'ROCKET',
  THUMBS_DOWN: 'THUMBS_DOWN',
  THUMBS_UP: 'THUMBS_UP',
} as const

export declare const enumReactionOrderField = {
  CREATED_AT: 'CREATED_AT',
} as const

export declare const enumRefOrderField = {
  ALPHABETICAL: 'ALPHABETICAL',
  TAG_COMMIT_DATE: 'TAG_COMMIT_DATE',
} as const

export declare const enumRegistryPackageDependencyType = {
  BUNDLED: 'BUNDLED',
  DEFAULT: 'DEFAULT',
  DEV: 'DEV',
  OPTIONAL: 'OPTIONAL',
  PEER: 'PEER',
  TEST: 'TEST',
} as const

export declare const enumRegistryPackageType = {
  DEBIAN: 'DEBIAN',
  DOCKER: 'DOCKER',
  MAVEN: 'MAVEN',
  NPM: 'NPM',
  NUGET: 'NUGET',
  PYTHON: 'PYTHON',
  RUBYGEMS: 'RUBYGEMS',
} as const

export declare const enumReleaseOrderField = {
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
} as const

export declare const enumRepoAccessAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
} as const

export declare const enumRepoAddMemberAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
} as const

export declare const enumRepoArchivedAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
} as const

export declare const enumRepoChangeMergeSettingAuditEntryMergeType = {
  MERGE: 'MERGE',
  REBASE: 'REBASE',
  SQUASH: 'SQUASH',
} as const

export declare const enumRepoCreateAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
} as const

export declare const enumRepoDestroyAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
} as const

export declare const enumRepoRemoveMemberAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
} as const

export declare const enumReportedContentClassifiers = {
  ABUSE: 'ABUSE',
  DUPLICATE: 'DUPLICATE',
  OFF_TOPIC: 'OFF_TOPIC',
  OUTDATED: 'OUTDATED',
  RESOLVED: 'RESOLVED',
  SPAM: 'SPAM',
} as const

export declare const enumRepositoryAffiliation = {
  COLLABORATOR: 'COLLABORATOR',
  ORGANIZATION_MEMBER: 'ORGANIZATION_MEMBER',
  OWNER: 'OWNER',
} as const

export declare const enumRepositoryContributionType = {
  COMMIT: 'COMMIT',
  ISSUE: 'ISSUE',
  PULL_REQUEST: 'PULL_REQUEST',
  PULL_REQUEST_REVIEW: 'PULL_REQUEST_REVIEW',
  REPOSITORY: 'REPOSITORY',
} as const

export declare const enumRepositoryInvitationOrderField = {
  CREATED_AT: 'CREATED_AT',
  INVITEE_LOGIN: 'INVITEE_LOGIN',
} as const

export declare const enumRepositoryLockReason = {
  BILLING: 'BILLING',
  MIGRATING: 'MIGRATING',
  MOVING: 'MOVING',
  RENAME: 'RENAME',
} as const

export declare const enumRepositoryOrderField = {
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
  PUSHED_AT: 'PUSHED_AT',
  STARGAZERS: 'STARGAZERS',
  UPDATED_AT: 'UPDATED_AT',
} as const

export declare const enumRepositoryPermission = {
  ADMIN: 'ADMIN',
  MAINTAIN: 'MAINTAIN',
  READ: 'READ',
  TRIAGE: 'TRIAGE',
  WRITE: 'WRITE',
} as const

export declare const enumRepositoryPrivacy = {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
} as const

export declare const enumRepositoryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
} as const

export declare const enumRequestableCheckStatusState = {
  COMPLETED: 'COMPLETED',
  IN_PROGRESS: 'IN_PROGRESS',
  QUEUED: 'QUEUED',
} as const

export declare const enumSamlDigestAlgorithm = {
  SHA1: 'SHA1',
  SHA256: 'SHA256',
  SHA384: 'SHA384',
  SHA512: 'SHA512',
} as const

export declare const enumSamlSignatureAlgorithm = {
  RSA_SHA1: 'RSA_SHA1',
  RSA_SHA256: 'RSA_SHA256',
  RSA_SHA384: 'RSA_SHA384',
  RSA_SHA512: 'RSA_SHA512',
} as const

export declare const enumSavedReplyOrderField = {
  UPDATED_AT: 'UPDATED_AT',
} as const

export declare const enumSearchType = {
  ISSUE: 'ISSUE',
  REPOSITORY: 'REPOSITORY',
  USER: 'USER',
} as const

export declare const enumSecurityAdvisoryEcosystem = {
  COMPOSER: 'COMPOSER',
  MAVEN: 'MAVEN',
  NPM: 'NPM',
  NUGET: 'NUGET',
  PIP: 'PIP',
  RUBYGEMS: 'RUBYGEMS',
} as const

export declare const enumSecurityAdvisoryIdentifierType = {
  CVE: 'CVE',
  GHSA: 'GHSA',
} as const

export declare const enumSecurityAdvisoryOrderField = {
  PUBLISHED_AT: 'PUBLISHED_AT',
  UPDATED_AT: 'UPDATED_AT',
} as const

export declare const enumSecurityAdvisorySeverity = {
  CRITICAL: 'CRITICAL',
  HIGH: 'HIGH',
  LOW: 'LOW',
  MODERATE: 'MODERATE',
} as const

export declare const enumSecurityVulnerabilityOrderField = {
  UPDATED_AT: 'UPDATED_AT',
} as const

export declare const enumSponsorsTierOrderField = {
  CREATED_AT: 'CREATED_AT',
  MONTHLY_PRICE_IN_CENTS: 'MONTHLY_PRICE_IN_CENTS',
} as const

export declare const enumSponsorshipOrderField = {
  CREATED_AT: 'CREATED_AT',
} as const

export declare const enumSponsorshipPrivacy = {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
} as const

export declare const enumStarOrderField = {
  STARRED_AT: 'STARRED_AT',
} as const

export declare const enumStatusState = {
  ERROR: 'ERROR',
  EXPECTED: 'EXPECTED',
  FAILURE: 'FAILURE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
} as const

export declare const enumSubscriptionState = {
  IGNORED: 'IGNORED',
  SUBSCRIBED: 'SUBSCRIBED',
  UNSUBSCRIBED: 'UNSUBSCRIBED',
} as const

export declare const enumTeamDiscussionCommentOrderField = {
  NUMBER: 'NUMBER',
} as const

export declare const enumTeamDiscussionOrderField = {
  CREATED_AT: 'CREATED_AT',
} as const

export declare const enumTeamMemberOrderField = {
  CREATED_AT: 'CREATED_AT',
  LOGIN: 'LOGIN',
} as const

export declare const enumTeamMemberRole = {
  MAINTAINER: 'MAINTAINER',
  MEMBER: 'MEMBER',
} as const

export declare const enumTeamMembershipType = {
  ALL: 'ALL',
  CHILD_TEAM: 'CHILD_TEAM',
  IMMEDIATE: 'IMMEDIATE',
} as const

export declare const enumTeamOrderField = {
  NAME: 'NAME',
} as const

export declare const enumTeamPrivacy = {
  SECRET: 'SECRET',
  VISIBLE: 'VISIBLE',
} as const

export declare const enumTeamRepositoryOrderField = {
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
  PERMISSION: 'PERMISSION',
  PUSHED_AT: 'PUSHED_AT',
  STARGAZERS: 'STARGAZERS',
  UPDATED_AT: 'UPDATED_AT',
} as const

export declare const enumTeamReviewAssignmentAlgorithm = {
  LOAD_BALANCE: 'LOAD_BALANCE',
  ROUND_ROBIN: 'ROUND_ROBIN',
} as const

export declare const enumTeamRole = {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
} as const

export declare const enumTopicSuggestionDeclineReason = {
  NOT_RELEVANT: 'NOT_RELEVANT',
  PERSONAL_PREFERENCE: 'PERSONAL_PREFERENCE',
  TOO_GENERAL: 'TOO_GENERAL',
  TOO_SPECIFIC: 'TOO_SPECIFIC',
} as const

export declare const enumUserBlockDuration = {
  ONE_DAY: 'ONE_DAY',
  ONE_MONTH: 'ONE_MONTH',
  ONE_WEEK: 'ONE_WEEK',
  PERMANENT: 'PERMANENT',
  THREE_DAYS: 'THREE_DAYS',
} as const

export declare const enumUserStatusOrderField = {
  UPDATED_AT: 'UPDATED_AT',
} as const
