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

export declare const enumActionExecutionCapabilitySetting: {
  readonly ALL_ACTIONS: 'ALL_ACTIONS'
  readonly DISABLED: 'DISABLED'
  readonly LOCAL_ACTIONS_ONLY: 'LOCAL_ACTIONS_ONLY'
  readonly NO_POLICY: 'NO_POLICY'
}

export declare const enumAuditLogOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumCheckAnnotationLevel: {
  readonly FAILURE: 'FAILURE'
  readonly NOTICE: 'NOTICE'
  readonly WARNING: 'WARNING'
}

export declare const enumCheckConclusionState: {
  readonly ACTION_REQUIRED: 'ACTION_REQUIRED'
  readonly CANCELLED: 'CANCELLED'
  readonly FAILURE: 'FAILURE'
  readonly NEUTRAL: 'NEUTRAL'
  readonly SKIPPED: 'SKIPPED'
  readonly STALE: 'STALE'
  readonly SUCCESS: 'SUCCESS'
  readonly TIMED_OUT: 'TIMED_OUT'
}

export declare const enumCheckRunType: {
  readonly ALL: 'ALL'
  readonly LATEST: 'LATEST'
}

export declare const enumCheckStatusState: {
  readonly COMPLETED: 'COMPLETED'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly QUEUED: 'QUEUED'
  readonly REQUESTED: 'REQUESTED'
}

export declare const enumCollaboratorAffiliation: {
  readonly ALL: 'ALL'
  readonly DIRECT: 'DIRECT'
  readonly OUTSIDE: 'OUTSIDE'
}

export declare const enumCommentAuthorAssociation: {
  readonly COLLABORATOR: 'COLLABORATOR'
  readonly CONTRIBUTOR: 'CONTRIBUTOR'
  readonly FIRST_TIMER: 'FIRST_TIMER'
  readonly FIRST_TIME_CONTRIBUTOR: 'FIRST_TIME_CONTRIBUTOR'
  readonly MEMBER: 'MEMBER'
  readonly NONE: 'NONE'
  readonly OWNER: 'OWNER'
}

export declare const enumCommentCannotUpdateReason: {
  readonly ARCHIVED: 'ARCHIVED'
  readonly DENIED: 'DENIED'
  readonly INSUFFICIENT_ACCESS: 'INSUFFICIENT_ACCESS'
  readonly LOCKED: 'LOCKED'
  readonly LOGIN_REQUIRED: 'LOGIN_REQUIRED'
  readonly MAINTENANCE: 'MAINTENANCE'
  readonly VERIFIED_EMAIL_REQUIRED: 'VERIFIED_EMAIL_REQUIRED'
}

export declare const enumCommitContributionOrderField: {
  readonly COMMIT_COUNT: 'COMMIT_COUNT'
  readonly OCCURRED_AT: 'OCCURRED_AT'
}

export declare const enumDefaultRepositoryPermissionField: {
  readonly ADMIN: 'ADMIN'
  readonly NONE: 'NONE'
  readonly READ: 'READ'
  readonly WRITE: 'WRITE'
}

export declare const enumDeploymentOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumDeploymentState: {
  readonly ABANDONED: 'ABANDONED'
  readonly ACTIVE: 'ACTIVE'
  readonly DESTROYED: 'DESTROYED'
  readonly ERROR: 'ERROR'
  readonly FAILURE: 'FAILURE'
  readonly INACTIVE: 'INACTIVE'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly PENDING: 'PENDING'
  readonly QUEUED: 'QUEUED'
}

export declare const enumDeploymentStatusState: {
  readonly ERROR: 'ERROR'
  readonly FAILURE: 'FAILURE'
  readonly INACTIVE: 'INACTIVE'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly PENDING: 'PENDING'
  readonly QUEUED: 'QUEUED'
  readonly SUCCESS: 'SUCCESS'
}

export declare const enumDiffSide: {
  readonly LEFT: 'LEFT'
  readonly RIGHT: 'RIGHT'
}

export declare const enumEnterpriseAdministratorInvitationOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumEnterpriseAdministratorRole: {
  readonly BILLING_MANAGER: 'BILLING_MANAGER'
  readonly OWNER: 'OWNER'
}

export declare const enumEnterpriseDefaultRepositoryPermissionSettingValue: {
  readonly ADMIN: 'ADMIN'
  readonly NONE: 'NONE'
  readonly NO_POLICY: 'NO_POLICY'
  readonly READ: 'READ'
  readonly WRITE: 'WRITE'
}

export declare const enumEnterpriseEnabledDisabledSettingValue: {
  readonly DISABLED: 'DISABLED'
  readonly ENABLED: 'ENABLED'
  readonly NO_POLICY: 'NO_POLICY'
}

export declare const enumEnterpriseEnabledSettingValue: {
  readonly ENABLED: 'ENABLED'
  readonly NO_POLICY: 'NO_POLICY'
}

export declare const enumEnterpriseMemberOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly LOGIN: 'LOGIN'
}

export declare const enumEnterpriseMembersCanCreateRepositoriesSettingValue: {
  readonly ALL: 'ALL'
  readonly DISABLED: 'DISABLED'
  readonly NO_POLICY: 'NO_POLICY'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumEnterpriseMembersCanMakePurchasesSettingValue: {
  readonly DISABLED: 'DISABLED'
  readonly ENABLED: 'ENABLED'
}

export declare const enumEnterpriseServerInstallationOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly CUSTOMER_NAME: 'CUSTOMER_NAME'
  readonly HOST_NAME: 'HOST_NAME'
}

export declare const enumEnterpriseServerUserAccountEmailOrderField: {
  readonly EMAIL: 'EMAIL'
}

export declare const enumEnterpriseServerUserAccountOrderField: {
  readonly LOGIN: 'LOGIN'
  readonly REMOTE_CREATED_AT: 'REMOTE_CREATED_AT'
}

export declare const enumEnterpriseServerUserAccountsUploadOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumEnterpriseServerUserAccountsUploadSyncState: {
  readonly FAILURE: 'FAILURE'
  readonly PENDING: 'PENDING'
  readonly SUCCESS: 'SUCCESS'
}

export declare const enumEnterpriseUserAccountMembershipRole: {
  readonly MEMBER: 'MEMBER'
  readonly OWNER: 'OWNER'
}

export declare const enumEnterpriseUserDeployment: {
  readonly CLOUD: 'CLOUD'
  readonly SERVER: 'SERVER'
}

export declare const enumFundingPlatform: {
  readonly COMMUNITY_BRIDGE: 'COMMUNITY_BRIDGE'
  readonly CUSTOM: 'CUSTOM'
  readonly GITHUB: 'GITHUB'
  readonly ISSUEHUNT: 'ISSUEHUNT'
  readonly KO_FI: 'KO_FI'
  readonly LIBERAPAY: 'LIBERAPAY'
  readonly OPEN_COLLECTIVE: 'OPEN_COLLECTIVE'
  readonly OTECHIE: 'OTECHIE'
  readonly PATREON: 'PATREON'
  readonly TIDELIFT: 'TIDELIFT'
}

export declare const enumGistOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly PUSHED_AT: 'PUSHED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumGistPrivacy: {
  readonly ALL: 'ALL'
  readonly PUBLIC: 'PUBLIC'
  readonly SECRET: 'SECRET'
}

export declare const enumGitSignatureState: {
  readonly BAD_CERT: 'BAD_CERT'
  readonly BAD_EMAIL: 'BAD_EMAIL'
  readonly EXPIRED_KEY: 'EXPIRED_KEY'
  readonly GPGVERIFY_ERROR: 'GPGVERIFY_ERROR'
  readonly GPGVERIFY_UNAVAILABLE: 'GPGVERIFY_UNAVAILABLE'
  readonly INVALID: 'INVALID'
  readonly MALFORMED_SIG: 'MALFORMED_SIG'
  readonly NOT_SIGNING_KEY: 'NOT_SIGNING_KEY'
  readonly NO_USER: 'NO_USER'
  readonly OCSP_ERROR: 'OCSP_ERROR'
  readonly OCSP_PENDING: 'OCSP_PENDING'
  readonly OCSP_REVOKED: 'OCSP_REVOKED'
  readonly UNKNOWN_KEY: 'UNKNOWN_KEY'
  readonly UNKNOWN_SIG_TYPE: 'UNKNOWN_SIG_TYPE'
  readonly UNSIGNED: 'UNSIGNED'
  readonly UNVERIFIED_EMAIL: 'UNVERIFIED_EMAIL'
  readonly VALID: 'VALID'
}

export declare const enumIdentityProviderConfigurationState: {
  readonly CONFIGURED: 'CONFIGURED'
  readonly ENFORCED: 'ENFORCED'
  readonly UNCONFIGURED: 'UNCONFIGURED'
}

export declare const enumIpAllowListEnabledSettingValue: {
  readonly DISABLED: 'DISABLED'
  readonly ENABLED: 'ENABLED'
}

export declare const enumIpAllowListEntryOrderField: {
  readonly ALLOW_LIST_VALUE: 'ALLOW_LIST_VALUE'
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumIssueOrderField: {
  readonly COMMENTS: 'COMMENTS'
  readonly CREATED_AT: 'CREATED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumIssueState: {
  readonly CLOSED: 'CLOSED'
  readonly OPEN: 'OPEN'
}

export declare const enumIssueTimelineItemsItemType: {
  readonly ADDED_TO_PROJECT_EVENT: 'ADDED_TO_PROJECT_EVENT'
  readonly ASSIGNED_EVENT: 'ASSIGNED_EVENT'
  readonly CLOSED_EVENT: 'CLOSED_EVENT'
  readonly COMMENT_DELETED_EVENT: 'COMMENT_DELETED_EVENT'
  readonly CONNECTED_EVENT: 'CONNECTED_EVENT'
  readonly CONVERTED_NOTE_TO_ISSUE_EVENT: 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  readonly CROSS_REFERENCED_EVENT: 'CROSS_REFERENCED_EVENT'
  readonly DEMILESTONED_EVENT: 'DEMILESTONED_EVENT'
  readonly DISCONNECTED_EVENT: 'DISCONNECTED_EVENT'
  readonly ISSUE_COMMENT: 'ISSUE_COMMENT'
  readonly LABELED_EVENT: 'LABELED_EVENT'
  readonly LOCKED_EVENT: 'LOCKED_EVENT'
  readonly MARKED_AS_DUPLICATE_EVENT: 'MARKED_AS_DUPLICATE_EVENT'
  readonly MENTIONED_EVENT: 'MENTIONED_EVENT'
  readonly MILESTONED_EVENT: 'MILESTONED_EVENT'
  readonly MOVED_COLUMNS_IN_PROJECT_EVENT: 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  readonly PINNED_EVENT: 'PINNED_EVENT'
  readonly REFERENCED_EVENT: 'REFERENCED_EVENT'
  readonly REMOVED_FROM_PROJECT_EVENT: 'REMOVED_FROM_PROJECT_EVENT'
  readonly RENAMED_TITLE_EVENT: 'RENAMED_TITLE_EVENT'
  readonly REOPENED_EVENT: 'REOPENED_EVENT'
  readonly SUBSCRIBED_EVENT: 'SUBSCRIBED_EVENT'
  readonly TRANSFERRED_EVENT: 'TRANSFERRED_EVENT'
  readonly UNASSIGNED_EVENT: 'UNASSIGNED_EVENT'
  readonly UNLABELED_EVENT: 'UNLABELED_EVENT'
  readonly UNLOCKED_EVENT: 'UNLOCKED_EVENT'
  readonly UNMARKED_AS_DUPLICATE_EVENT: 'UNMARKED_AS_DUPLICATE_EVENT'
  readonly UNPINNED_EVENT: 'UNPINNED_EVENT'
  readonly UNSUBSCRIBED_EVENT: 'UNSUBSCRIBED_EVENT'
  readonly USER_BLOCKED_EVENT: 'USER_BLOCKED_EVENT'
}

export declare const enumLabelOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly NAME: 'NAME'
}

export declare const enumLanguageOrderField: {
  readonly SIZE: 'SIZE'
}

export declare const enumLockReason: {
  readonly OFF_TOPIC: 'OFF_TOPIC'
  readonly RESOLVED: 'RESOLVED'
  readonly SPAM: 'SPAM'
  readonly TOO_HEATED: 'TOO_HEATED'
}

export declare const enumMergeStateStatus: {
  readonly BEHIND: 'BEHIND'
  readonly BLOCKED: 'BLOCKED'
  readonly CLEAN: 'CLEAN'
  readonly DIRTY: 'DIRTY'
  readonly DRAFT: 'DRAFT'
  readonly HAS_HOOKS: 'HAS_HOOKS'
  readonly UNKNOWN: 'UNKNOWN'
  readonly UNSTABLE: 'UNSTABLE'
}

export declare const enumMergeableState: {
  readonly CONFLICTING: 'CONFLICTING'
  readonly MERGEABLE: 'MERGEABLE'
  readonly UNKNOWN: 'UNKNOWN'
}

export declare const enumMilestoneOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly DUE_DATE: 'DUE_DATE'
  readonly NUMBER: 'NUMBER'
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumMilestoneState: {
  readonly CLOSED: 'CLOSED'
  readonly OPEN: 'OPEN'
}

export declare const enumOauthApplicationCreateAuditEntryState: {
  readonly ACTIVE: 'ACTIVE'
  readonly PENDING_DELETION: 'PENDING_DELETION'
  readonly SUSPENDED: 'SUSPENDED'
}

export declare const enumOperationType: {
  readonly ACCESS: 'ACCESS'
  readonly AUTHENTICATION: 'AUTHENTICATION'
  readonly CREATE: 'CREATE'
  readonly MODIFY: 'MODIFY'
  readonly REMOVE: 'REMOVE'
  readonly RESTORE: 'RESTORE'
  readonly TRANSFER: 'TRANSFER'
}

export declare const enumOrderDirection: {
  readonly ASC: 'ASC'
  readonly DESC: 'DESC'
}

export declare const enumOrgAddMemberAuditEntryPermission: {
  readonly ADMIN: 'ADMIN'
  readonly READ: 'READ'
}

export declare const enumOrgCreateAuditEntryBillingPlan: {
  readonly BUSINESS: 'BUSINESS'
  readonly BUSINESS_PLUS: 'BUSINESS_PLUS'
  readonly FREE: 'FREE'
  readonly TIERED_PER_SEAT: 'TIERED_PER_SEAT'
  readonly UNLIMITED: 'UNLIMITED'
}

export declare const enumOrgRemoveBillingManagerAuditEntryReason: {
  readonly SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING'
  readonly SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY: 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
  readonly TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE: 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
}

export declare const enumOrgRemoveMemberAuditEntryMembershipType: {
  readonly ADMIN: 'ADMIN'
  readonly BILLING_MANAGER: 'BILLING_MANAGER'
  readonly DIRECT_MEMBER: 'DIRECT_MEMBER'
  readonly OUTSIDE_COLLABORATOR: 'OUTSIDE_COLLABORATOR'
  readonly UNAFFILIATED: 'UNAFFILIATED'
}

export declare const enumOrgRemoveMemberAuditEntryReason: {
  readonly SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING'
  readonly SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY: 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
  readonly TWO_FACTOR_ACCOUNT_RECOVERY: 'TWO_FACTOR_ACCOUNT_RECOVERY'
  readonly TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE: 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
  readonly USER_ACCOUNT_DELETED: 'USER_ACCOUNT_DELETED'
}

export declare const enumOrgRemoveOutsideCollaboratorAuditEntryMembershipType: {
  readonly BILLING_MANAGER: 'BILLING_MANAGER'
  readonly OUTSIDE_COLLABORATOR: 'OUTSIDE_COLLABORATOR'
  readonly UNAFFILIATED: 'UNAFFILIATED'
}

export declare const enumOrgRemoveOutsideCollaboratorAuditEntryReason: {
  readonly SAML_EXTERNAL_IDENTITY_MISSING: 'SAML_EXTERNAL_IDENTITY_MISSING'
  readonly TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE: 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE'
}

export declare const enumOrgUpdateDefaultRepositoryPermissionAuditEntryPermission: {
  readonly ADMIN: 'ADMIN'
  readonly NONE: 'NONE'
  readonly READ: 'READ'
  readonly WRITE: 'WRITE'
}

export declare const enumOrgUpdateMemberAuditEntryPermission: {
  readonly ADMIN: 'ADMIN'
  readonly READ: 'READ'
}

export declare const enumOrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility: {
  readonly ALL: 'ALL'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumOrganizationInvitationRole: {
  readonly ADMIN: 'ADMIN'
  readonly BILLING_MANAGER: 'BILLING_MANAGER'
  readonly DIRECT_MEMBER: 'DIRECT_MEMBER'
  readonly REINSTATE: 'REINSTATE'
}

export declare const enumOrganizationInvitationType: {
  readonly EMAIL: 'EMAIL'
  readonly USER: 'USER'
}

export declare const enumOrganizationMemberRole: {
  readonly ADMIN: 'ADMIN'
  readonly MEMBER: 'MEMBER'
}

export declare const enumOrganizationMembersCanCreateRepositoriesSettingValue: {
  readonly ALL: 'ALL'
  readonly DISABLED: 'DISABLED'
  readonly PRIVATE: 'PRIVATE'
}

export declare const enumOrganizationOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly LOGIN: 'LOGIN'
}

export declare const enumPackageFileOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumPackageOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumPackageType: {
  readonly DEBIAN: 'DEBIAN'
  readonly DOCKER: 'DOCKER'
  readonly MAVEN: 'MAVEN'
  readonly NPM: 'NPM'
  readonly NUGET: 'NUGET'
  readonly PYPI: 'PYPI'
  readonly RUBYGEMS: 'RUBYGEMS'
}

export declare const enumPackageVersionOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumPinnableItemType: {
  readonly GIST: 'GIST'
  readonly ISSUE: 'ISSUE'
  readonly ORGANIZATION: 'ORGANIZATION'
  readonly PROJECT: 'PROJECT'
  readonly PULL_REQUEST: 'PULL_REQUEST'
  readonly REPOSITORY: 'REPOSITORY'
  readonly TEAM: 'TEAM'
  readonly USER: 'USER'
}

export declare const enumProjectCardArchivedState: {
  readonly ARCHIVED: 'ARCHIVED'
  readonly NOT_ARCHIVED: 'NOT_ARCHIVED'
}

export declare const enumProjectCardState: {
  readonly CONTENT_ONLY: 'CONTENT_ONLY'
  readonly NOTE_ONLY: 'NOTE_ONLY'
  readonly REDACTED: 'REDACTED'
}

export declare const enumProjectColumnPurpose: {
  readonly DONE: 'DONE'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly TODO: 'TODO'
}

export declare const enumProjectOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly NAME: 'NAME'
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumProjectState: {
  readonly CLOSED: 'CLOSED'
  readonly OPEN: 'OPEN'
}

export declare const enumProjectTemplate: {
  readonly AUTOMATED_KANBAN_V2: 'AUTOMATED_KANBAN_V2'
  readonly AUTOMATED_REVIEWS_KANBAN: 'AUTOMATED_REVIEWS_KANBAN'
  readonly BASIC_KANBAN: 'BASIC_KANBAN'
  readonly BUG_TRIAGE: 'BUG_TRIAGE'
}

export declare const enumPullRequestMergeMethod: {
  readonly MERGE: 'MERGE'
  readonly REBASE: 'REBASE'
  readonly SQUASH: 'SQUASH'
}

export declare const enumPullRequestOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumPullRequestReviewCommentState: {
  readonly PENDING: 'PENDING'
  readonly SUBMITTED: 'SUBMITTED'
}

export declare const enumPullRequestReviewDecision: {
  readonly APPROVED: 'APPROVED'
  readonly CHANGES_REQUESTED: 'CHANGES_REQUESTED'
  readonly REVIEW_REQUIRED: 'REVIEW_REQUIRED'
}

export declare const enumPullRequestReviewEvent: {
  readonly APPROVE: 'APPROVE'
  readonly COMMENT: 'COMMENT'
  readonly DISMISS: 'DISMISS'
  readonly REQUEST_CHANGES: 'REQUEST_CHANGES'
}

export declare const enumPullRequestReviewState: {
  readonly APPROVED: 'APPROVED'
  readonly CHANGES_REQUESTED: 'CHANGES_REQUESTED'
  readonly COMMENTED: 'COMMENTED'
  readonly DISMISSED: 'DISMISSED'
  readonly PENDING: 'PENDING'
}

export declare const enumPullRequestState: {
  readonly CLOSED: 'CLOSED'
  readonly MERGED: 'MERGED'
  readonly OPEN: 'OPEN'
}

export declare const enumPullRequestTimelineItemsItemType: {
  readonly ADDED_TO_PROJECT_EVENT: 'ADDED_TO_PROJECT_EVENT'
  readonly ASSIGNED_EVENT: 'ASSIGNED_EVENT'
  readonly AUTOMATIC_BASE_CHANGE_FAILED_EVENT: 'AUTOMATIC_BASE_CHANGE_FAILED_EVENT'
  readonly AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT: 'AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT'
  readonly BASE_REF_CHANGED_EVENT: 'BASE_REF_CHANGED_EVENT'
  readonly BASE_REF_FORCE_PUSHED_EVENT: 'BASE_REF_FORCE_PUSHED_EVENT'
  readonly CLOSED_EVENT: 'CLOSED_EVENT'
  readonly COMMENT_DELETED_EVENT: 'COMMENT_DELETED_EVENT'
  readonly CONNECTED_EVENT: 'CONNECTED_EVENT'
  readonly CONVERTED_NOTE_TO_ISSUE_EVENT: 'CONVERTED_NOTE_TO_ISSUE_EVENT'
  readonly CONVERT_TO_DRAFT_EVENT: 'CONVERT_TO_DRAFT_EVENT'
  readonly CROSS_REFERENCED_EVENT: 'CROSS_REFERENCED_EVENT'
  readonly DEMILESTONED_EVENT: 'DEMILESTONED_EVENT'
  readonly DEPLOYED_EVENT: 'DEPLOYED_EVENT'
  readonly DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT: 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT'
  readonly DISCONNECTED_EVENT: 'DISCONNECTED_EVENT'
  readonly HEAD_REF_DELETED_EVENT: 'HEAD_REF_DELETED_EVENT'
  readonly HEAD_REF_FORCE_PUSHED_EVENT: 'HEAD_REF_FORCE_PUSHED_EVENT'
  readonly HEAD_REF_RESTORED_EVENT: 'HEAD_REF_RESTORED_EVENT'
  readonly ISSUE_COMMENT: 'ISSUE_COMMENT'
  readonly LABELED_EVENT: 'LABELED_EVENT'
  readonly LOCKED_EVENT: 'LOCKED_EVENT'
  readonly MARKED_AS_DUPLICATE_EVENT: 'MARKED_AS_DUPLICATE_EVENT'
  readonly MENTIONED_EVENT: 'MENTIONED_EVENT'
  readonly MERGED_EVENT: 'MERGED_EVENT'
  readonly MILESTONED_EVENT: 'MILESTONED_EVENT'
  readonly MOVED_COLUMNS_IN_PROJECT_EVENT: 'MOVED_COLUMNS_IN_PROJECT_EVENT'
  readonly PINNED_EVENT: 'PINNED_EVENT'
  readonly PULL_REQUEST_COMMIT: 'PULL_REQUEST_COMMIT'
  readonly PULL_REQUEST_COMMIT_COMMENT_THREAD: 'PULL_REQUEST_COMMIT_COMMENT_THREAD'
  readonly PULL_REQUEST_REVIEW: 'PULL_REQUEST_REVIEW'
  readonly PULL_REQUEST_REVIEW_THREAD: 'PULL_REQUEST_REVIEW_THREAD'
  readonly PULL_REQUEST_REVISION_MARKER: 'PULL_REQUEST_REVISION_MARKER'
  readonly READY_FOR_REVIEW_EVENT: 'READY_FOR_REVIEW_EVENT'
  readonly REFERENCED_EVENT: 'REFERENCED_EVENT'
  readonly REMOVED_FROM_PROJECT_EVENT: 'REMOVED_FROM_PROJECT_EVENT'
  readonly RENAMED_TITLE_EVENT: 'RENAMED_TITLE_EVENT'
  readonly REOPENED_EVENT: 'REOPENED_EVENT'
  readonly REVIEW_DISMISSED_EVENT: 'REVIEW_DISMISSED_EVENT'
  readonly REVIEW_REQUESTED_EVENT: 'REVIEW_REQUESTED_EVENT'
  readonly REVIEW_REQUEST_REMOVED_EVENT: 'REVIEW_REQUEST_REMOVED_EVENT'
  readonly SUBSCRIBED_EVENT: 'SUBSCRIBED_EVENT'
  readonly TRANSFERRED_EVENT: 'TRANSFERRED_EVENT'
  readonly UNASSIGNED_EVENT: 'UNASSIGNED_EVENT'
  readonly UNLABELED_EVENT: 'UNLABELED_EVENT'
  readonly UNLOCKED_EVENT: 'UNLOCKED_EVENT'
  readonly UNMARKED_AS_DUPLICATE_EVENT: 'UNMARKED_AS_DUPLICATE_EVENT'
  readonly UNPINNED_EVENT: 'UNPINNED_EVENT'
  readonly UNSUBSCRIBED_EVENT: 'UNSUBSCRIBED_EVENT'
  readonly USER_BLOCKED_EVENT: 'USER_BLOCKED_EVENT'
}

export declare const enumPullRequestUpdateState: {
  readonly CLOSED: 'CLOSED'
  readonly OPEN: 'OPEN'
}

export declare const enumReactionContent: {
  readonly CONFUSED: 'CONFUSED'
  readonly EYES: 'EYES'
  readonly HEART: 'HEART'
  readonly HOORAY: 'HOORAY'
  readonly LAUGH: 'LAUGH'
  readonly ROCKET: 'ROCKET'
  readonly THUMBS_DOWN: 'THUMBS_DOWN'
  readonly THUMBS_UP: 'THUMBS_UP'
}

export declare const enumReactionOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumRefOrderField: {
  readonly ALPHABETICAL: 'ALPHABETICAL'
  readonly TAG_COMMIT_DATE: 'TAG_COMMIT_DATE'
}

export declare const enumRegistryPackageDependencyType: {
  readonly BUNDLED: 'BUNDLED'
  readonly DEFAULT: 'DEFAULT'
  readonly DEV: 'DEV'
  readonly OPTIONAL: 'OPTIONAL'
  readonly PEER: 'PEER'
  readonly TEST: 'TEST'
}

export declare const enumRegistryPackageType: {
  readonly DEBIAN: 'DEBIAN'
  readonly DOCKER: 'DOCKER'
  readonly MAVEN: 'MAVEN'
  readonly NPM: 'NPM'
  readonly NUGET: 'NUGET'
  readonly PYTHON: 'PYTHON'
  readonly RUBYGEMS: 'RUBYGEMS'
}

export declare const enumReleaseOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly NAME: 'NAME'
}

export declare const enumRepoAccessAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRepoAddMemberAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRepoArchivedAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRepoChangeMergeSettingAuditEntryMergeType: {
  readonly MERGE: 'MERGE'
  readonly REBASE: 'REBASE'
  readonly SQUASH: 'SQUASH'
}

export declare const enumRepoCreateAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRepoDestroyAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRepoRemoveMemberAuditEntryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumReportedContentClassifiers: {
  readonly ABUSE: 'ABUSE'
  readonly DUPLICATE: 'DUPLICATE'
  readonly OFF_TOPIC: 'OFF_TOPIC'
  readonly OUTDATED: 'OUTDATED'
  readonly RESOLVED: 'RESOLVED'
  readonly SPAM: 'SPAM'
}

export declare const enumRepositoryAffiliation: {
  readonly COLLABORATOR: 'COLLABORATOR'
  readonly ORGANIZATION_MEMBER: 'ORGANIZATION_MEMBER'
  readonly OWNER: 'OWNER'
}

export declare const enumRepositoryContributionType: {
  readonly COMMIT: 'COMMIT'
  readonly ISSUE: 'ISSUE'
  readonly PULL_REQUEST: 'PULL_REQUEST'
  readonly PULL_REQUEST_REVIEW: 'PULL_REQUEST_REVIEW'
  readonly REPOSITORY: 'REPOSITORY'
}

export declare const enumRepositoryInvitationOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly INVITEE_LOGIN: 'INVITEE_LOGIN'
}

export declare const enumRepositoryLockReason: {
  readonly BILLING: 'BILLING'
  readonly MIGRATING: 'MIGRATING'
  readonly MOVING: 'MOVING'
  readonly RENAME: 'RENAME'
}

export declare const enumRepositoryOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly NAME: 'NAME'
  readonly PUSHED_AT: 'PUSHED_AT'
  readonly STARGAZERS: 'STARGAZERS'
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumRepositoryPermission: {
  readonly ADMIN: 'ADMIN'
  readonly MAINTAIN: 'MAINTAIN'
  readonly READ: 'READ'
  readonly TRIAGE: 'TRIAGE'
  readonly WRITE: 'WRITE'
}

export declare const enumRepositoryPrivacy: {
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRepositoryVisibility: {
  readonly INTERNAL: 'INTERNAL'
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumRequestableCheckStatusState: {
  readonly COMPLETED: 'COMPLETED'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly QUEUED: 'QUEUED'
}

export declare const enumSamlDigestAlgorithm: {
  readonly SHA1: 'SHA1'
  readonly SHA256: 'SHA256'
  readonly SHA384: 'SHA384'
  readonly SHA512: 'SHA512'
}

export declare const enumSamlSignatureAlgorithm: {
  readonly RSA_SHA1: 'RSA_SHA1'
  readonly RSA_SHA256: 'RSA_SHA256'
  readonly RSA_SHA384: 'RSA_SHA384'
  readonly RSA_SHA512: 'RSA_SHA512'
}

export declare const enumSavedReplyOrderField: {
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumSearchType: {
  readonly ISSUE: 'ISSUE'
  readonly REPOSITORY: 'REPOSITORY'
  readonly USER: 'USER'
}

export declare const enumSecurityAdvisoryEcosystem: {
  readonly COMPOSER: 'COMPOSER'
  readonly MAVEN: 'MAVEN'
  readonly NPM: 'NPM'
  readonly NUGET: 'NUGET'
  readonly PIP: 'PIP'
  readonly RUBYGEMS: 'RUBYGEMS'
}

export declare const enumSecurityAdvisoryIdentifierType: {
  readonly CVE: 'CVE'
  readonly GHSA: 'GHSA'
}

export declare const enumSecurityAdvisoryOrderField: {
  readonly PUBLISHED_AT: 'PUBLISHED_AT'
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumSecurityAdvisorySeverity: {
  readonly CRITICAL: 'CRITICAL'
  readonly HIGH: 'HIGH'
  readonly LOW: 'LOW'
  readonly MODERATE: 'MODERATE'
}

export declare const enumSecurityVulnerabilityOrderField: {
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumSponsorsTierOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly MONTHLY_PRICE_IN_CENTS: 'MONTHLY_PRICE_IN_CENTS'
}

export declare const enumSponsorshipOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumSponsorshipPrivacy: {
  readonly PRIVATE: 'PRIVATE'
  readonly PUBLIC: 'PUBLIC'
}

export declare const enumStarOrderField: {
  readonly STARRED_AT: 'STARRED_AT'
}

export declare const enumStatusState: {
  readonly ERROR: 'ERROR'
  readonly EXPECTED: 'EXPECTED'
  readonly FAILURE: 'FAILURE'
  readonly PENDING: 'PENDING'
  readonly SUCCESS: 'SUCCESS'
}

export declare const enumSubscriptionState: {
  readonly IGNORED: 'IGNORED'
  readonly SUBSCRIBED: 'SUBSCRIBED'
  readonly UNSUBSCRIBED: 'UNSUBSCRIBED'
}

export declare const enumTeamDiscussionCommentOrderField: {
  readonly NUMBER: 'NUMBER'
}

export declare const enumTeamDiscussionOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
}

export declare const enumTeamMemberOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly LOGIN: 'LOGIN'
}

export declare const enumTeamMemberRole: {
  readonly MAINTAINER: 'MAINTAINER'
  readonly MEMBER: 'MEMBER'
}

export declare const enumTeamMembershipType: {
  readonly ALL: 'ALL'
  readonly CHILD_TEAM: 'CHILD_TEAM'
  readonly IMMEDIATE: 'IMMEDIATE'
}

export declare const enumTeamOrderField: {
  readonly NAME: 'NAME'
}

export declare const enumTeamPrivacy: {
  readonly SECRET: 'SECRET'
  readonly VISIBLE: 'VISIBLE'
}

export declare const enumTeamRepositoryOrderField: {
  readonly CREATED_AT: 'CREATED_AT'
  readonly NAME: 'NAME'
  readonly PERMISSION: 'PERMISSION'
  readonly PUSHED_AT: 'PUSHED_AT'
  readonly STARGAZERS: 'STARGAZERS'
  readonly UPDATED_AT: 'UPDATED_AT'
}

export declare const enumTeamReviewAssignmentAlgorithm: {
  readonly LOAD_BALANCE: 'LOAD_BALANCE'
  readonly ROUND_ROBIN: 'ROUND_ROBIN'
}

export declare const enumTeamRole: {
  readonly ADMIN: 'ADMIN'
  readonly MEMBER: 'MEMBER'
}

export declare const enumTopicSuggestionDeclineReason: {
  readonly NOT_RELEVANT: 'NOT_RELEVANT'
  readonly PERSONAL_PREFERENCE: 'PERSONAL_PREFERENCE'
  readonly TOO_GENERAL: 'TOO_GENERAL'
  readonly TOO_SPECIFIC: 'TOO_SPECIFIC'
}

export declare const enumUserBlockDuration: {
  readonly ONE_DAY: 'ONE_DAY'
  readonly ONE_MONTH: 'ONE_MONTH'
  readonly ONE_WEEK: 'ONE_WEEK'
  readonly PERMANENT: 'PERMANENT'
  readonly THREE_DAYS: 'THREE_DAYS'
}

export declare const enumUserStatusOrderField: {
  readonly UPDATED_AT: 'UPDATED_AT'
}
