const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.9.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: undefined,
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

module.exports.enumActionExecutionCapabilitySetting = {
  ALL_ACTIONS: 'ALL_ACTIONS',
  DISABLED: 'DISABLED',
  LOCAL_ACTIONS_ONLY: 'LOCAL_ACTIONS_ONLY',
  NO_POLICY: 'NO_POLICY',
}

module.exports.enumAuditLogOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumCheckAnnotationLevel = {
  FAILURE: 'FAILURE',
  NOTICE: 'NOTICE',
  WARNING: 'WARNING',
}

module.exports.enumCheckConclusionState = {
  ACTION_REQUIRED: 'ACTION_REQUIRED',
  CANCELLED: 'CANCELLED',
  FAILURE: 'FAILURE',
  NEUTRAL: 'NEUTRAL',
  SKIPPED: 'SKIPPED',
  STALE: 'STALE',
  SUCCESS: 'SUCCESS',
  TIMED_OUT: 'TIMED_OUT',
}

module.exports.enumCheckRunType = {
  ALL: 'ALL',
  LATEST: 'LATEST',
}

module.exports.enumCheckStatusState = {
  COMPLETED: 'COMPLETED',
  IN_PROGRESS: 'IN_PROGRESS',
  QUEUED: 'QUEUED',
  REQUESTED: 'REQUESTED',
}

module.exports.enumCollaboratorAffiliation = {
  ALL: 'ALL',
  DIRECT: 'DIRECT',
  OUTSIDE: 'OUTSIDE',
}

module.exports.enumCommentAuthorAssociation = {
  COLLABORATOR: 'COLLABORATOR',
  CONTRIBUTOR: 'CONTRIBUTOR',
  FIRST_TIMER: 'FIRST_TIMER',
  FIRST_TIME_CONTRIBUTOR: 'FIRST_TIME_CONTRIBUTOR',
  MEMBER: 'MEMBER',
  NONE: 'NONE',
  OWNER: 'OWNER',
}

module.exports.enumCommentCannotUpdateReason = {
  ARCHIVED: 'ARCHIVED',
  DENIED: 'DENIED',
  INSUFFICIENT_ACCESS: 'INSUFFICIENT_ACCESS',
  LOCKED: 'LOCKED',
  LOGIN_REQUIRED: 'LOGIN_REQUIRED',
  MAINTENANCE: 'MAINTENANCE',
  VERIFIED_EMAIL_REQUIRED: 'VERIFIED_EMAIL_REQUIRED',
}

module.exports.enumCommitContributionOrderField = {
  COMMIT_COUNT: 'COMMIT_COUNT',
  OCCURRED_AT: 'OCCURRED_AT',
}

module.exports.enumDefaultRepositoryPermissionField = {
  ADMIN: 'ADMIN',
  NONE: 'NONE',
  READ: 'READ',
  WRITE: 'WRITE',
}

module.exports.enumDeploymentOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumDeploymentState = {
  ABANDONED: 'ABANDONED',
  ACTIVE: 'ACTIVE',
  DESTROYED: 'DESTROYED',
  ERROR: 'ERROR',
  FAILURE: 'FAILURE',
  INACTIVE: 'INACTIVE',
  IN_PROGRESS: 'IN_PROGRESS',
  PENDING: 'PENDING',
  QUEUED: 'QUEUED',
}

module.exports.enumDeploymentStatusState = {
  ERROR: 'ERROR',
  FAILURE: 'FAILURE',
  INACTIVE: 'INACTIVE',
  IN_PROGRESS: 'IN_PROGRESS',
  PENDING: 'PENDING',
  QUEUED: 'QUEUED',
  SUCCESS: 'SUCCESS',
}

module.exports.enumDiffSide = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
}

module.exports.enumEnterpriseAdministratorInvitationOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumEnterpriseAdministratorRole = {
  BILLING_MANAGER: 'BILLING_MANAGER',
  OWNER: 'OWNER',
}

module.exports.enumEnterpriseDefaultRepositoryPermissionSettingValue = {
  ADMIN: 'ADMIN',
  NONE: 'NONE',
  NO_POLICY: 'NO_POLICY',
  READ: 'READ',
  WRITE: 'WRITE',
}

module.exports.enumEnterpriseEnabledDisabledSettingValue = {
  DISABLED: 'DISABLED',
  ENABLED: 'ENABLED',
  NO_POLICY: 'NO_POLICY',
}

module.exports.enumEnterpriseEnabledSettingValue = {
  ENABLED: 'ENABLED',
  NO_POLICY: 'NO_POLICY',
}

module.exports.enumEnterpriseMemberOrderField = {
  CREATED_AT: 'CREATED_AT',
  LOGIN: 'LOGIN',
}

module.exports.enumEnterpriseMembersCanCreateRepositoriesSettingValue = {
  ALL: 'ALL',
  DISABLED: 'DISABLED',
  NO_POLICY: 'NO_POLICY',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumEnterpriseMembersCanMakePurchasesSettingValue = {
  DISABLED: 'DISABLED',
  ENABLED: 'ENABLED',
}

module.exports.enumEnterpriseServerInstallationOrderField = {
  CREATED_AT: 'CREATED_AT',
  CUSTOMER_NAME: 'CUSTOMER_NAME',
  HOST_NAME: 'HOST_NAME',
}

module.exports.enumEnterpriseServerUserAccountEmailOrderField = {
  EMAIL: 'EMAIL',
}

module.exports.enumEnterpriseServerUserAccountOrderField = {
  LOGIN: 'LOGIN',
  REMOTE_CREATED_AT: 'REMOTE_CREATED_AT',
}

module.exports.enumEnterpriseServerUserAccountsUploadOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumEnterpriseServerUserAccountsUploadSyncState = {
  FAILURE: 'FAILURE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
}

module.exports.enumEnterpriseUserAccountMembershipRole = {
  MEMBER: 'MEMBER',
  OWNER: 'OWNER',
}

module.exports.enumEnterpriseUserDeployment = {
  CLOUD: 'CLOUD',
  SERVER: 'SERVER',
}

module.exports.enumFundingPlatform = {
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
}

module.exports.enumGistOrderField = {
  CREATED_AT: 'CREATED_AT',
  PUSHED_AT: 'PUSHED_AT',
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumGistPrivacy = {
  ALL: 'ALL',
  PUBLIC: 'PUBLIC',
  SECRET: 'SECRET',
}

module.exports.enumGitSignatureState = {
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
}

module.exports.enumIdentityProviderConfigurationState = {
  CONFIGURED: 'CONFIGURED',
  ENFORCED: 'ENFORCED',
  UNCONFIGURED: 'UNCONFIGURED',
}

module.exports.enumIpAllowListEnabledSettingValue = {
  DISABLED: 'DISABLED',
  ENABLED: 'ENABLED',
}

module.exports.enumIpAllowListEntryOrderField = {
  ALLOW_LIST_VALUE: 'ALLOW_LIST_VALUE',
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumIssueOrderField = {
  COMMENTS: 'COMMENTS',
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumIssueState = {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
}

module.exports.enumIssueTimelineItemsItemType = {
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
}

module.exports.enumLabelOrderField = {
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
}

module.exports.enumLanguageOrderField = {
  SIZE: 'SIZE',
}

module.exports.enumLockReason = {
  OFF_TOPIC: 'OFF_TOPIC',
  RESOLVED: 'RESOLVED',
  SPAM: 'SPAM',
  TOO_HEATED: 'TOO_HEATED',
}

module.exports.enumMergeStateStatus = {
  BEHIND: 'BEHIND',
  BLOCKED: 'BLOCKED',
  CLEAN: 'CLEAN',
  DIRTY: 'DIRTY',
  DRAFT: 'DRAFT',
  HAS_HOOKS: 'HAS_HOOKS',
  UNKNOWN: 'UNKNOWN',
  UNSTABLE: 'UNSTABLE',
}

module.exports.enumMergeableState = {
  CONFLICTING: 'CONFLICTING',
  MERGEABLE: 'MERGEABLE',
  UNKNOWN: 'UNKNOWN',
}

module.exports.enumMilestoneOrderField = {
  CREATED_AT: 'CREATED_AT',
  DUE_DATE: 'DUE_DATE',
  NUMBER: 'NUMBER',
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumMilestoneState = {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
}

module.exports.enumOauthApplicationCreateAuditEntryState = {
  ACTIVE: 'ACTIVE',
  PENDING_DELETION: 'PENDING_DELETION',
  SUSPENDED: 'SUSPENDED',
}

module.exports.enumOperationType = {
  ACCESS: 'ACCESS',
  AUTHENTICATION: 'AUTHENTICATION',
  CREATE: 'CREATE',
  MODIFY: 'MODIFY',
  REMOVE: 'REMOVE',
  RESTORE: 'RESTORE',
  TRANSFER: 'TRANSFER',
}

module.exports.enumOrderDirection = {
  ASC: 'ASC',
  DESC: 'DESC',
}

module.exports.enumOrgAddMemberAuditEntryPermission = {
  ADMIN: 'ADMIN',
  READ: 'READ',
}

module.exports.enumOrgCreateAuditEntryBillingPlan = {
  BUSINESS: 'BUSINESS',
  BUSINESS_PLUS: 'BUSINESS_PLUS',
  FREE: 'FREE',
  TIERED_PER_SEAT: 'TIERED_PER_SEAT',
  UNLIMITED: 'UNLIMITED',
}

module.exports.enumOrgRemoveBillingManagerAuditEntryReason = {
  SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING',
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY:
    'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE:
    'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
}

module.exports.enumOrgRemoveMemberAuditEntryMembershipType = {
  ADMIN: 'ADMIN',
  BILLING_MANAGER: 'BILLING_MANAGER',
  DIRECT_MEMBER: 'DIRECT_MEMBER',
  OUTSIDE_COLLABORATOR: 'OUTSIDE_COLLABORATOR',
  UNAFFILIATED: 'UNAFFILIATED',
}

module.exports.enumOrgRemoveMemberAuditEntryReason = {
  SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING',
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY:
    'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',
  TWO_FACTOR_ACCOUNT_RECOVERY: 'TWO_FACTOR_ACCOUNT_RECOVERY',
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE:
    'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  USER_ACCOUNT_DELETED: 'USER_ACCOUNT_DELETED',
}

module.exports.enumOrgRemoveOutsideCollaboratorAuditEntryMembershipType = {
  BILLING_MANAGER: 'BILLING_MANAGER',
  OUTSIDE_COLLABORATOR: 'OUTSIDE_COLLABORATOR',
  UNAFFILIATED: 'UNAFFILIATED',
}

module.exports.enumOrgRemoveOutsideCollaboratorAuditEntryReason = {
  SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING',
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE:
    'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
}

module.exports.enumOrgUpdateDefaultRepositoryPermissionAuditEntryPermission = {
  ADMIN: 'ADMIN',
  NONE: 'NONE',
  READ: 'READ',
  WRITE: 'WRITE',
}

module.exports.enumOrgUpdateMemberAuditEntryPermission = {
  ADMIN: 'ADMIN',
  READ: 'READ',
}

module.exports.enumOrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = {
  ALL: 'ALL',
  PUBLIC: 'PUBLIC',
}

module.exports.enumOrganizationInvitationRole = {
  ADMIN: 'ADMIN',
  BILLING_MANAGER: 'BILLING_MANAGER',
  DIRECT_MEMBER: 'DIRECT_MEMBER',
  REINSTATE: 'REINSTATE',
}

module.exports.enumOrganizationInvitationType = {
  EMAIL: 'EMAIL',
  USER: 'USER',
}

module.exports.enumOrganizationMemberRole = {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
}

module.exports.enumOrganizationMembersCanCreateRepositoriesSettingValue = {
  ALL: 'ALL',
  DISABLED: 'DISABLED',
  PRIVATE: 'PRIVATE',
}

module.exports.enumOrganizationOrderField = {
  CREATED_AT: 'CREATED_AT',
  LOGIN: 'LOGIN',
}

module.exports.enumPackageFileOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumPackageOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumPackageType = {
  DEBIAN: 'DEBIAN',
  DOCKER: 'DOCKER',
  MAVEN: 'MAVEN',
  NPM: 'NPM',
  NUGET: 'NUGET',
  PYPI: 'PYPI',
  RUBYGEMS: 'RUBYGEMS',
}

module.exports.enumPackageVersionOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumPinnableItemType = {
  GIST: 'GIST',
  ISSUE: 'ISSUE',
  ORGANIZATION: 'ORGANIZATION',
  PROJECT: 'PROJECT',
  PULL_REQUEST: 'PULL_REQUEST',
  REPOSITORY: 'REPOSITORY',
  TEAM: 'TEAM',
  USER: 'USER',
}

module.exports.enumProjectCardArchivedState = {
  ARCHIVED: 'ARCHIVED',
  NOT_ARCHIVED: 'NOT_ARCHIVED',
}

module.exports.enumProjectCardState = {
  CONTENT_ONLY: 'CONTENT_ONLY',
  NOTE_ONLY: 'NOTE_ONLY',
  REDACTED: 'REDACTED',
}

module.exports.enumProjectColumnPurpose = {
  DONE: 'DONE',
  IN_PROGRESS: 'IN_PROGRESS',
  TODO: 'TODO',
}

module.exports.enumProjectOrderField = {
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumProjectState = {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
}

module.exports.enumProjectTemplate = {
  AUTOMATED_KANBAN_V2: 'AUTOMATED_KANBAN_V2',
  AUTOMATED_REVIEWS_KANBAN: 'AUTOMATED_REVIEWS_KANBAN',
  BASIC_KANBAN: 'BASIC_KANBAN',
  BUG_TRIAGE: 'BUG_TRIAGE',
}

module.exports.enumPullRequestMergeMethod = {
  MERGE: 'MERGE',
  REBASE: 'REBASE',
  SQUASH: 'SQUASH',
}

module.exports.enumPullRequestOrderField = {
  CREATED_AT: 'CREATED_AT',
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumPullRequestReviewCommentState = {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
}

module.exports.enumPullRequestReviewDecision = {
  APPROVED: 'APPROVED',
  CHANGES_REQUESTED: 'CHANGES_REQUESTED',
  REVIEW_REQUIRED: 'REVIEW_REQUIRED',
}

module.exports.enumPullRequestReviewEvent = {
  APPROVE: 'APPROVE',
  COMMENT: 'COMMENT',
  DISMISS: 'DISMISS',
  REQUEST_CHANGES: 'REQUEST_CHANGES',
}

module.exports.enumPullRequestReviewState = {
  APPROVED: 'APPROVED',
  CHANGES_REQUESTED: 'CHANGES_REQUESTED',
  COMMENTED: 'COMMENTED',
  DISMISSED: 'DISMISSED',
  PENDING: 'PENDING',
}

module.exports.enumPullRequestState = {
  CLOSED: 'CLOSED',
  MERGED: 'MERGED',
  OPEN: 'OPEN',
}

module.exports.enumPullRequestTimelineItemsItemType = {
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
}

module.exports.enumPullRequestUpdateState = {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
}

module.exports.enumReactionContent = {
  CONFUSED: 'CONFUSED',
  EYES: 'EYES',
  HEART: 'HEART',
  HOORAY: 'HOORAY',
  LAUGH: 'LAUGH',
  ROCKET: 'ROCKET',
  THUMBS_DOWN: 'THUMBS_DOWN',
  THUMBS_UP: 'THUMBS_UP',
}

module.exports.enumReactionOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumRefOrderField = {
  ALPHABETICAL: 'ALPHABETICAL',
  TAG_COMMIT_DATE: 'TAG_COMMIT_DATE',
}

module.exports.enumRegistryPackageDependencyType = {
  BUNDLED: 'BUNDLED',
  DEFAULT: 'DEFAULT',
  DEV: 'DEV',
  OPTIONAL: 'OPTIONAL',
  PEER: 'PEER',
  TEST: 'TEST',
}

module.exports.enumRegistryPackageType = {
  DEBIAN: 'DEBIAN',
  DOCKER: 'DOCKER',
  MAVEN: 'MAVEN',
  NPM: 'NPM',
  NUGET: 'NUGET',
  PYTHON: 'PYTHON',
  RUBYGEMS: 'RUBYGEMS',
}

module.exports.enumReleaseOrderField = {
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
}

module.exports.enumRepoAccessAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRepoAddMemberAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRepoArchivedAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRepoChangeMergeSettingAuditEntryMergeType = {
  MERGE: 'MERGE',
  REBASE: 'REBASE',
  SQUASH: 'SQUASH',
}

module.exports.enumRepoCreateAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRepoDestroyAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRepoRemoveMemberAuditEntryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumReportedContentClassifiers = {
  ABUSE: 'ABUSE',
  DUPLICATE: 'DUPLICATE',
  OFF_TOPIC: 'OFF_TOPIC',
  OUTDATED: 'OUTDATED',
  RESOLVED: 'RESOLVED',
  SPAM: 'SPAM',
}

module.exports.enumRepositoryAffiliation = {
  COLLABORATOR: 'COLLABORATOR',
  ORGANIZATION_MEMBER: 'ORGANIZATION_MEMBER',
  OWNER: 'OWNER',
}

module.exports.enumRepositoryContributionType = {
  COMMIT: 'COMMIT',
  ISSUE: 'ISSUE',
  PULL_REQUEST: 'PULL_REQUEST',
  PULL_REQUEST_REVIEW: 'PULL_REQUEST_REVIEW',
  REPOSITORY: 'REPOSITORY',
}

module.exports.enumRepositoryInvitationOrderField = {
  CREATED_AT: 'CREATED_AT',
  INVITEE_LOGIN: 'INVITEE_LOGIN',
}

module.exports.enumRepositoryLockReason = {
  BILLING: 'BILLING',
  MIGRATING: 'MIGRATING',
  MOVING: 'MOVING',
  RENAME: 'RENAME',
}

module.exports.enumRepositoryOrderField = {
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
  PUSHED_AT: 'PUSHED_AT',
  STARGAZERS: 'STARGAZERS',
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumRepositoryPermission = {
  ADMIN: 'ADMIN',
  MAINTAIN: 'MAINTAIN',
  READ: 'READ',
  TRIAGE: 'TRIAGE',
  WRITE: 'WRITE',
}

module.exports.enumRepositoryPrivacy = {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRepositoryVisibility = {
  INTERNAL: 'INTERNAL',
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumRequestableCheckStatusState = {
  COMPLETED: 'COMPLETED',
  IN_PROGRESS: 'IN_PROGRESS',
  QUEUED: 'QUEUED',
}

module.exports.enumSamlDigestAlgorithm = {
  SHA1: 'SHA1',
  SHA256: 'SHA256',
  SHA384: 'SHA384',
  SHA512: 'SHA512',
}

module.exports.enumSamlSignatureAlgorithm = {
  RSA_SHA1: 'RSA_SHA1',
  RSA_SHA256: 'RSA_SHA256',
  RSA_SHA384: 'RSA_SHA384',
  RSA_SHA512: 'RSA_SHA512',
}

module.exports.enumSavedReplyOrderField = {
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumSearchType = {
  ISSUE: 'ISSUE',
  REPOSITORY: 'REPOSITORY',
  USER: 'USER',
}

module.exports.enumSecurityAdvisoryEcosystem = {
  COMPOSER: 'COMPOSER',
  MAVEN: 'MAVEN',
  NPM: 'NPM',
  NUGET: 'NUGET',
  PIP: 'PIP',
  RUBYGEMS: 'RUBYGEMS',
}

module.exports.enumSecurityAdvisoryIdentifierType = {
  CVE: 'CVE',
  GHSA: 'GHSA',
}

module.exports.enumSecurityAdvisoryOrderField = {
  PUBLISHED_AT: 'PUBLISHED_AT',
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumSecurityAdvisorySeverity = {
  CRITICAL: 'CRITICAL',
  HIGH: 'HIGH',
  LOW: 'LOW',
  MODERATE: 'MODERATE',
}

module.exports.enumSecurityVulnerabilityOrderField = {
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumSponsorsTierOrderField = {
  CREATED_AT: 'CREATED_AT',
  MONTHLY_PRICE_IN_CENTS: 'MONTHLY_PRICE_IN_CENTS',
}

module.exports.enumSponsorshipOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumSponsorshipPrivacy = {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
}

module.exports.enumStarOrderField = {
  STARRED_AT: 'STARRED_AT',
}

module.exports.enumStatusState = {
  ERROR: 'ERROR',
  EXPECTED: 'EXPECTED',
  FAILURE: 'FAILURE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
}

module.exports.enumSubscriptionState = {
  IGNORED: 'IGNORED',
  SUBSCRIBED: 'SUBSCRIBED',
  UNSUBSCRIBED: 'UNSUBSCRIBED',
}

module.exports.enumTeamDiscussionCommentOrderField = {
  NUMBER: 'NUMBER',
}

module.exports.enumTeamDiscussionOrderField = {
  CREATED_AT: 'CREATED_AT',
}

module.exports.enumTeamMemberOrderField = {
  CREATED_AT: 'CREATED_AT',
  LOGIN: 'LOGIN',
}

module.exports.enumTeamMemberRole = {
  MAINTAINER: 'MAINTAINER',
  MEMBER: 'MEMBER',
}

module.exports.enumTeamMembershipType = {
  ALL: 'ALL',
  CHILD_TEAM: 'CHILD_TEAM',
  IMMEDIATE: 'IMMEDIATE',
}

module.exports.enumTeamOrderField = {
  NAME: 'NAME',
}

module.exports.enumTeamPrivacy = {
  SECRET: 'SECRET',
  VISIBLE: 'VISIBLE',
}

module.exports.enumTeamRepositoryOrderField = {
  CREATED_AT: 'CREATED_AT',
  NAME: 'NAME',
  PERMISSION: 'PERMISSION',
  PUSHED_AT: 'PUSHED_AT',
  STARGAZERS: 'STARGAZERS',
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.enumTeamReviewAssignmentAlgorithm = {
  LOAD_BALANCE: 'LOAD_BALANCE',
  ROUND_ROBIN: 'ROUND_ROBIN',
}

module.exports.enumTeamRole = {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
}

module.exports.enumTopicSuggestionDeclineReason = {
  NOT_RELEVANT: 'NOT_RELEVANT',
  PERSONAL_PREFERENCE: 'PERSONAL_PREFERENCE',
  TOO_GENERAL: 'TOO_GENERAL',
  TOO_SPECIFIC: 'TOO_SPECIFIC',
}

module.exports.enumUserBlockDuration = {
  ONE_DAY: 'ONE_DAY',
  ONE_MONTH: 'ONE_MONTH',
  ONE_WEEK: 'ONE_WEEK',
  PERMANENT: 'PERMANENT',
  THREE_DAYS: 'THREE_DAYS',
}

module.exports.enumUserStatusOrderField = {
  UPDATED_AT: 'UPDATED_AT',
}

module.exports.generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
module.exports.generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
module.exports.generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
module.exports.everything = {
  __scalar: true,
}

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
