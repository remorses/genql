
var AcceptEnterpriseAdministratorInvitationPayload_possibleTypes = ['AcceptEnterpriseAdministratorInvitationPayload']
export var isAcceptEnterpriseAdministratorInvitationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAcceptEnterpriseAdministratorInvitationPayload"')
  return AcceptEnterpriseAdministratorInvitationPayload_possibleTypes.includes(obj.__typename)
}



var AcceptTopicSuggestionPayload_possibleTypes = ['AcceptTopicSuggestionPayload']
export var isAcceptTopicSuggestionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAcceptTopicSuggestionPayload"')
  return AcceptTopicSuggestionPayload_possibleTypes.includes(obj.__typename)
}



var Actor_possibleTypes = ['Bot','EnterpriseUserAccount','Mannequin','Organization','User']
export var isActor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isActor"')
  return Actor_possibleTypes.includes(obj.__typename)
}



var ActorLocation_possibleTypes = ['ActorLocation']
export var isActorLocation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isActorLocation"')
  return ActorLocation_possibleTypes.includes(obj.__typename)
}



var AddAssigneesToAssignablePayload_possibleTypes = ['AddAssigneesToAssignablePayload']
export var isAddAssigneesToAssignablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddAssigneesToAssignablePayload"')
  return AddAssigneesToAssignablePayload_possibleTypes.includes(obj.__typename)
}



var AddCommentPayload_possibleTypes = ['AddCommentPayload']
export var isAddCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddCommentPayload"')
  return AddCommentPayload_possibleTypes.includes(obj.__typename)
}



var AddLabelsToLabelablePayload_possibleTypes = ['AddLabelsToLabelablePayload']
export var isAddLabelsToLabelablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddLabelsToLabelablePayload"')
  return AddLabelsToLabelablePayload_possibleTypes.includes(obj.__typename)
}



var AddProjectCardPayload_possibleTypes = ['AddProjectCardPayload']
export var isAddProjectCardPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddProjectCardPayload"')
  return AddProjectCardPayload_possibleTypes.includes(obj.__typename)
}



var AddProjectColumnPayload_possibleTypes = ['AddProjectColumnPayload']
export var isAddProjectColumnPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddProjectColumnPayload"')
  return AddProjectColumnPayload_possibleTypes.includes(obj.__typename)
}



var AddPullRequestReviewCommentPayload_possibleTypes = ['AddPullRequestReviewCommentPayload']
export var isAddPullRequestReviewCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddPullRequestReviewCommentPayload"')
  return AddPullRequestReviewCommentPayload_possibleTypes.includes(obj.__typename)
}



var AddPullRequestReviewPayload_possibleTypes = ['AddPullRequestReviewPayload']
export var isAddPullRequestReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddPullRequestReviewPayload"')
  return AddPullRequestReviewPayload_possibleTypes.includes(obj.__typename)
}



var AddPullRequestReviewThreadPayload_possibleTypes = ['AddPullRequestReviewThreadPayload']
export var isAddPullRequestReviewThreadPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddPullRequestReviewThreadPayload"')
  return AddPullRequestReviewThreadPayload_possibleTypes.includes(obj.__typename)
}



var AddReactionPayload_possibleTypes = ['AddReactionPayload']
export var isAddReactionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddReactionPayload"')
  return AddReactionPayload_possibleTypes.includes(obj.__typename)
}



var AddStarPayload_possibleTypes = ['AddStarPayload']
export var isAddStarPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddStarPayload"')
  return AddStarPayload_possibleTypes.includes(obj.__typename)
}



var AddedToProjectEvent_possibleTypes = ['AddedToProjectEvent']
export var isAddedToProjectEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddedToProjectEvent"')
  return AddedToProjectEvent_possibleTypes.includes(obj.__typename)
}



var App_possibleTypes = ['App']
export var isApp = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isApp"')
  return App_possibleTypes.includes(obj.__typename)
}



var ArchiveRepositoryPayload_possibleTypes = ['ArchiveRepositoryPayload']
export var isArchiveRepositoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isArchiveRepositoryPayload"')
  return ArchiveRepositoryPayload_possibleTypes.includes(obj.__typename)
}



var Assignable_possibleTypes = ['Issue','PullRequest']
export var isAssignable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAssignable"')
  return Assignable_possibleTypes.includes(obj.__typename)
}



var AssignedEvent_possibleTypes = ['AssignedEvent']
export var isAssignedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAssignedEvent"')
  return AssignedEvent_possibleTypes.includes(obj.__typename)
}



var Assignee_possibleTypes = ['Bot','Mannequin','Organization','User']
export var isAssignee = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAssignee"')
  return Assignee_possibleTypes.includes(obj.__typename)
}



var AuditEntry_possibleTypes = ['MembersCanDeleteReposClearAuditEntry','MembersCanDeleteReposDisableAuditEntry','MembersCanDeleteReposEnableAuditEntry','OauthApplicationCreateAuditEntry','OrgAddBillingManagerAuditEntry','OrgAddMemberAuditEntry','OrgBlockUserAuditEntry','OrgConfigDisableCollaboratorsOnlyAuditEntry','OrgConfigEnableCollaboratorsOnlyAuditEntry','OrgCreateAuditEntry','OrgDisableOauthAppRestrictionsAuditEntry','OrgDisableSamlAuditEntry','OrgDisableTwoFactorRequirementAuditEntry','OrgEnableOauthAppRestrictionsAuditEntry','OrgEnableSamlAuditEntry','OrgEnableTwoFactorRequirementAuditEntry','OrgInviteMemberAuditEntry','OrgInviteToBusinessAuditEntry','OrgOauthAppAccessApprovedAuditEntry','OrgOauthAppAccessDeniedAuditEntry','OrgOauthAppAccessRequestedAuditEntry','OrgRemoveBillingManagerAuditEntry','OrgRemoveMemberAuditEntry','OrgRemoveOutsideCollaboratorAuditEntry','OrgRestoreMemberAuditEntry','OrgUnblockUserAuditEntry','OrgUpdateDefaultRepositoryPermissionAuditEntry','OrgUpdateMemberAuditEntry','OrgUpdateMemberRepositoryCreationPermissionAuditEntry','OrgUpdateMemberRepositoryInvitationPermissionAuditEntry','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','RepoAccessAuditEntry','RepoAddMemberAuditEntry','RepoAddTopicAuditEntry','RepoArchivedAuditEntry','RepoChangeMergeSettingAuditEntry','RepoConfigDisableAnonymousGitAccessAuditEntry','RepoConfigDisableCollaboratorsOnlyAuditEntry','RepoConfigDisableContributorsOnlyAuditEntry','RepoConfigDisableSockpuppetDisallowedAuditEntry','RepoConfigEnableAnonymousGitAccessAuditEntry','RepoConfigEnableCollaboratorsOnlyAuditEntry','RepoConfigEnableContributorsOnlyAuditEntry','RepoConfigEnableSockpuppetDisallowedAuditEntry','RepoConfigLockAnonymousGitAccessAuditEntry','RepoConfigUnlockAnonymousGitAccessAuditEntry','RepoCreateAuditEntry','RepoDestroyAuditEntry','RepoRemoveMemberAuditEntry','RepoRemoveTopicAuditEntry','RepositoryVisibilityChangeDisableAuditEntry','RepositoryVisibilityChangeEnableAuditEntry','TeamAddMemberAuditEntry','TeamAddRepositoryAuditEntry','TeamChangeParentTeamAuditEntry','TeamRemoveMemberAuditEntry','TeamRemoveRepositoryAuditEntry']
export var isAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAuditEntry"')
  return AuditEntry_possibleTypes.includes(obj.__typename)
}



var AuditEntryActor_possibleTypes = ['Bot','Organization','User']
export var isAuditEntryActor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAuditEntryActor"')
  return AuditEntryActor_possibleTypes.includes(obj.__typename)
}



var AutomaticBaseChangeFailedEvent_possibleTypes = ['AutomaticBaseChangeFailedEvent']
export var isAutomaticBaseChangeFailedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAutomaticBaseChangeFailedEvent"')
  return AutomaticBaseChangeFailedEvent_possibleTypes.includes(obj.__typename)
}



var AutomaticBaseChangeSucceededEvent_possibleTypes = ['AutomaticBaseChangeSucceededEvent']
export var isAutomaticBaseChangeSucceededEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAutomaticBaseChangeSucceededEvent"')
  return AutomaticBaseChangeSucceededEvent_possibleTypes.includes(obj.__typename)
}



var BaseRefChangedEvent_possibleTypes = ['BaseRefChangedEvent']
export var isBaseRefChangedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBaseRefChangedEvent"')
  return BaseRefChangedEvent_possibleTypes.includes(obj.__typename)
}



var BaseRefForcePushedEvent_possibleTypes = ['BaseRefForcePushedEvent']
export var isBaseRefForcePushedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBaseRefForcePushedEvent"')
  return BaseRefForcePushedEvent_possibleTypes.includes(obj.__typename)
}



var Blame_possibleTypes = ['Blame']
export var isBlame = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBlame"')
  return Blame_possibleTypes.includes(obj.__typename)
}



var BlameRange_possibleTypes = ['BlameRange']
export var isBlameRange = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBlameRange"')
  return BlameRange_possibleTypes.includes(obj.__typename)
}



var Blob_possibleTypes = ['Blob']
export var isBlob = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBlob"')
  return Blob_possibleTypes.includes(obj.__typename)
}



var Bot_possibleTypes = ['Bot']
export var isBot = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBot"')
  return Bot_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRule_possibleTypes = ['BranchProtectionRule']
export var isBranchProtectionRule = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRule"')
  return BranchProtectionRule_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRuleConflict_possibleTypes = ['BranchProtectionRuleConflict']
export var isBranchProtectionRuleConflict = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRuleConflict"')
  return BranchProtectionRuleConflict_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRuleConflictConnection_possibleTypes = ['BranchProtectionRuleConflictConnection']
export var isBranchProtectionRuleConflictConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRuleConflictConnection"')
  return BranchProtectionRuleConflictConnection_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRuleConflictEdge_possibleTypes = ['BranchProtectionRuleConflictEdge']
export var isBranchProtectionRuleConflictEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRuleConflictEdge"')
  return BranchProtectionRuleConflictEdge_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRuleConnection_possibleTypes = ['BranchProtectionRuleConnection']
export var isBranchProtectionRuleConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRuleConnection"')
  return BranchProtectionRuleConnection_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRuleEdge_possibleTypes = ['BranchProtectionRuleEdge']
export var isBranchProtectionRuleEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRuleEdge"')
  return BranchProtectionRuleEdge_possibleTypes.includes(obj.__typename)
}



var CancelEnterpriseAdminInvitationPayload_possibleTypes = ['CancelEnterpriseAdminInvitationPayload']
export var isCancelEnterpriseAdminInvitationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCancelEnterpriseAdminInvitationPayload"')
  return CancelEnterpriseAdminInvitationPayload_possibleTypes.includes(obj.__typename)
}



var ChangeUserStatusPayload_possibleTypes = ['ChangeUserStatusPayload']
export var isChangeUserStatusPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isChangeUserStatusPayload"')
  return ChangeUserStatusPayload_possibleTypes.includes(obj.__typename)
}



var CheckAnnotation_possibleTypes = ['CheckAnnotation']
export var isCheckAnnotation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckAnnotation"')
  return CheckAnnotation_possibleTypes.includes(obj.__typename)
}



var CheckAnnotationConnection_possibleTypes = ['CheckAnnotationConnection']
export var isCheckAnnotationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckAnnotationConnection"')
  return CheckAnnotationConnection_possibleTypes.includes(obj.__typename)
}



var CheckAnnotationEdge_possibleTypes = ['CheckAnnotationEdge']
export var isCheckAnnotationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckAnnotationEdge"')
  return CheckAnnotationEdge_possibleTypes.includes(obj.__typename)
}



var CheckAnnotationPosition_possibleTypes = ['CheckAnnotationPosition']
export var isCheckAnnotationPosition = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckAnnotationPosition"')
  return CheckAnnotationPosition_possibleTypes.includes(obj.__typename)
}



var CheckAnnotationSpan_possibleTypes = ['CheckAnnotationSpan']
export var isCheckAnnotationSpan = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckAnnotationSpan"')
  return CheckAnnotationSpan_possibleTypes.includes(obj.__typename)
}



var CheckRun_possibleTypes = ['CheckRun']
export var isCheckRun = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckRun"')
  return CheckRun_possibleTypes.includes(obj.__typename)
}



var CheckRunConnection_possibleTypes = ['CheckRunConnection']
export var isCheckRunConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckRunConnection"')
  return CheckRunConnection_possibleTypes.includes(obj.__typename)
}



var CheckRunEdge_possibleTypes = ['CheckRunEdge']
export var isCheckRunEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckRunEdge"')
  return CheckRunEdge_possibleTypes.includes(obj.__typename)
}



var CheckSuite_possibleTypes = ['CheckSuite']
export var isCheckSuite = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckSuite"')
  return CheckSuite_possibleTypes.includes(obj.__typename)
}



var CheckSuiteConnection_possibleTypes = ['CheckSuiteConnection']
export var isCheckSuiteConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckSuiteConnection"')
  return CheckSuiteConnection_possibleTypes.includes(obj.__typename)
}



var CheckSuiteEdge_possibleTypes = ['CheckSuiteEdge']
export var isCheckSuiteEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckSuiteEdge"')
  return CheckSuiteEdge_possibleTypes.includes(obj.__typename)
}



var ClearLabelsFromLabelablePayload_possibleTypes = ['ClearLabelsFromLabelablePayload']
export var isClearLabelsFromLabelablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClearLabelsFromLabelablePayload"')
  return ClearLabelsFromLabelablePayload_possibleTypes.includes(obj.__typename)
}



var CloneProjectPayload_possibleTypes = ['CloneProjectPayload']
export var isCloneProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCloneProjectPayload"')
  return CloneProjectPayload_possibleTypes.includes(obj.__typename)
}



var CloneTemplateRepositoryPayload_possibleTypes = ['CloneTemplateRepositoryPayload']
export var isCloneTemplateRepositoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCloneTemplateRepositoryPayload"')
  return CloneTemplateRepositoryPayload_possibleTypes.includes(obj.__typename)
}



var Closable_possibleTypes = ['Issue','Milestone','Project','PullRequest']
export var isClosable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClosable"')
  return Closable_possibleTypes.includes(obj.__typename)
}



var CloseIssuePayload_possibleTypes = ['CloseIssuePayload']
export var isCloseIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCloseIssuePayload"')
  return CloseIssuePayload_possibleTypes.includes(obj.__typename)
}



var ClosePullRequestPayload_possibleTypes = ['ClosePullRequestPayload']
export var isClosePullRequestPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClosePullRequestPayload"')
  return ClosePullRequestPayload_possibleTypes.includes(obj.__typename)
}



var ClosedEvent_possibleTypes = ['ClosedEvent']
export var isClosedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClosedEvent"')
  return ClosedEvent_possibleTypes.includes(obj.__typename)
}



var Closer_possibleTypes = ['Commit','PullRequest']
export var isCloser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCloser"')
  return Closer_possibleTypes.includes(obj.__typename)
}



var CodeOfConduct_possibleTypes = ['CodeOfConduct']
export var isCodeOfConduct = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCodeOfConduct"')
  return CodeOfConduct_possibleTypes.includes(obj.__typename)
}



var Comment_possibleTypes = ['CommitComment','GistComment','Issue','IssueComment','PullRequest','PullRequestReview','PullRequestReviewComment','TeamDiscussion','TeamDiscussionComment']
export var isComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isComment"')
  return Comment_possibleTypes.includes(obj.__typename)
}



var CommentDeletedEvent_possibleTypes = ['CommentDeletedEvent']
export var isCommentDeletedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentDeletedEvent"')
  return CommentDeletedEvent_possibleTypes.includes(obj.__typename)
}



var Commit_possibleTypes = ['Commit']
export var isCommit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommit"')
  return Commit_possibleTypes.includes(obj.__typename)
}



var CommitComment_possibleTypes = ['CommitComment']
export var isCommitComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitComment"')
  return CommitComment_possibleTypes.includes(obj.__typename)
}



var CommitCommentConnection_possibleTypes = ['CommitCommentConnection']
export var isCommitCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitCommentConnection"')
  return CommitCommentConnection_possibleTypes.includes(obj.__typename)
}



var CommitCommentEdge_possibleTypes = ['CommitCommentEdge']
export var isCommitCommentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitCommentEdge"')
  return CommitCommentEdge_possibleTypes.includes(obj.__typename)
}



var CommitCommentThread_possibleTypes = ['CommitCommentThread']
export var isCommitCommentThread = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitCommentThread"')
  return CommitCommentThread_possibleTypes.includes(obj.__typename)
}



var CommitConnection_possibleTypes = ['CommitConnection']
export var isCommitConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitConnection"')
  return CommitConnection_possibleTypes.includes(obj.__typename)
}



var CommitContributionsByRepository_possibleTypes = ['CommitContributionsByRepository']
export var isCommitContributionsByRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitContributionsByRepository"')
  return CommitContributionsByRepository_possibleTypes.includes(obj.__typename)
}



var CommitEdge_possibleTypes = ['CommitEdge']
export var isCommitEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitEdge"')
  return CommitEdge_possibleTypes.includes(obj.__typename)
}



var CommitHistoryConnection_possibleTypes = ['CommitHistoryConnection']
export var isCommitHistoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitHistoryConnection"')
  return CommitHistoryConnection_possibleTypes.includes(obj.__typename)
}



var ConnectedEvent_possibleTypes = ['ConnectedEvent']
export var isConnectedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isConnectedEvent"')
  return ConnectedEvent_possibleTypes.includes(obj.__typename)
}



var ContentAttachment_possibleTypes = ['ContentAttachment']
export var isContentAttachment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentAttachment"')
  return ContentAttachment_possibleTypes.includes(obj.__typename)
}



var ContentReference_possibleTypes = ['ContentReference']
export var isContentReference = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentReference"')
  return ContentReference_possibleTypes.includes(obj.__typename)
}



var Contribution_possibleTypes = ['CreatedCommitContribution','CreatedIssueContribution','CreatedPullRequestContribution','CreatedPullRequestReviewContribution','CreatedRepositoryContribution','JoinedGitHubContribution','RestrictedContribution']
export var isContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContribution"')
  return Contribution_possibleTypes.includes(obj.__typename)
}



var ContributionCalendar_possibleTypes = ['ContributionCalendar']
export var isContributionCalendar = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContributionCalendar"')
  return ContributionCalendar_possibleTypes.includes(obj.__typename)
}



var ContributionCalendarDay_possibleTypes = ['ContributionCalendarDay']
export var isContributionCalendarDay = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContributionCalendarDay"')
  return ContributionCalendarDay_possibleTypes.includes(obj.__typename)
}



var ContributionCalendarMonth_possibleTypes = ['ContributionCalendarMonth']
export var isContributionCalendarMonth = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContributionCalendarMonth"')
  return ContributionCalendarMonth_possibleTypes.includes(obj.__typename)
}



var ContributionCalendarWeek_possibleTypes = ['ContributionCalendarWeek']
export var isContributionCalendarWeek = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContributionCalendarWeek"')
  return ContributionCalendarWeek_possibleTypes.includes(obj.__typename)
}



var ContributionsCollection_possibleTypes = ['ContributionsCollection']
export var isContributionsCollection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContributionsCollection"')
  return ContributionsCollection_possibleTypes.includes(obj.__typename)
}



var ConvertProjectCardNoteToIssuePayload_possibleTypes = ['ConvertProjectCardNoteToIssuePayload']
export var isConvertProjectCardNoteToIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isConvertProjectCardNoteToIssuePayload"')
  return ConvertProjectCardNoteToIssuePayload_possibleTypes.includes(obj.__typename)
}



var ConvertToDraftEvent_possibleTypes = ['ConvertToDraftEvent']
export var isConvertToDraftEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isConvertToDraftEvent"')
  return ConvertToDraftEvent_possibleTypes.includes(obj.__typename)
}



var ConvertedNoteToIssueEvent_possibleTypes = ['ConvertedNoteToIssueEvent']
export var isConvertedNoteToIssueEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isConvertedNoteToIssueEvent"')
  return ConvertedNoteToIssueEvent_possibleTypes.includes(obj.__typename)
}



var CreateBranchProtectionRulePayload_possibleTypes = ['CreateBranchProtectionRulePayload']
export var isCreateBranchProtectionRulePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateBranchProtectionRulePayload"')
  return CreateBranchProtectionRulePayload_possibleTypes.includes(obj.__typename)
}



var CreateCheckRunPayload_possibleTypes = ['CreateCheckRunPayload']
export var isCreateCheckRunPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateCheckRunPayload"')
  return CreateCheckRunPayload_possibleTypes.includes(obj.__typename)
}



var CreateCheckSuitePayload_possibleTypes = ['CreateCheckSuitePayload']
export var isCreateCheckSuitePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateCheckSuitePayload"')
  return CreateCheckSuitePayload_possibleTypes.includes(obj.__typename)
}



var CreateContentAttachmentPayload_possibleTypes = ['CreateContentAttachmentPayload']
export var isCreateContentAttachmentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateContentAttachmentPayload"')
  return CreateContentAttachmentPayload_possibleTypes.includes(obj.__typename)
}



var CreateDeploymentPayload_possibleTypes = ['CreateDeploymentPayload']
export var isCreateDeploymentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateDeploymentPayload"')
  return CreateDeploymentPayload_possibleTypes.includes(obj.__typename)
}



var CreateDeploymentStatusPayload_possibleTypes = ['CreateDeploymentStatusPayload']
export var isCreateDeploymentStatusPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateDeploymentStatusPayload"')
  return CreateDeploymentStatusPayload_possibleTypes.includes(obj.__typename)
}



var CreateEnterpriseOrganizationPayload_possibleTypes = ['CreateEnterpriseOrganizationPayload']
export var isCreateEnterpriseOrganizationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateEnterpriseOrganizationPayload"')
  return CreateEnterpriseOrganizationPayload_possibleTypes.includes(obj.__typename)
}



var CreateIpAllowListEntryPayload_possibleTypes = ['CreateIpAllowListEntryPayload']
export var isCreateIpAllowListEntryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateIpAllowListEntryPayload"')
  return CreateIpAllowListEntryPayload_possibleTypes.includes(obj.__typename)
}



var CreateIssuePayload_possibleTypes = ['CreateIssuePayload']
export var isCreateIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateIssuePayload"')
  return CreateIssuePayload_possibleTypes.includes(obj.__typename)
}



var CreateLabelPayload_possibleTypes = ['CreateLabelPayload']
export var isCreateLabelPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateLabelPayload"')
  return CreateLabelPayload_possibleTypes.includes(obj.__typename)
}



var CreateProjectPayload_possibleTypes = ['CreateProjectPayload']
export var isCreateProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateProjectPayload"')
  return CreateProjectPayload_possibleTypes.includes(obj.__typename)
}



var CreatePullRequestPayload_possibleTypes = ['CreatePullRequestPayload']
export var isCreatePullRequestPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatePullRequestPayload"')
  return CreatePullRequestPayload_possibleTypes.includes(obj.__typename)
}



var CreateRefPayload_possibleTypes = ['CreateRefPayload']
export var isCreateRefPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateRefPayload"')
  return CreateRefPayload_possibleTypes.includes(obj.__typename)
}



var CreateRepositoryPayload_possibleTypes = ['CreateRepositoryPayload']
export var isCreateRepositoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateRepositoryPayload"')
  return CreateRepositoryPayload_possibleTypes.includes(obj.__typename)
}



var CreateTeamDiscussionCommentPayload_possibleTypes = ['CreateTeamDiscussionCommentPayload']
export var isCreateTeamDiscussionCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateTeamDiscussionCommentPayload"')
  return CreateTeamDiscussionCommentPayload_possibleTypes.includes(obj.__typename)
}



var CreateTeamDiscussionPayload_possibleTypes = ['CreateTeamDiscussionPayload']
export var isCreateTeamDiscussionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateTeamDiscussionPayload"')
  return CreateTeamDiscussionPayload_possibleTypes.includes(obj.__typename)
}



var CreatedCommitContribution_possibleTypes = ['CreatedCommitContribution']
export var isCreatedCommitContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedCommitContribution"')
  return CreatedCommitContribution_possibleTypes.includes(obj.__typename)
}



var CreatedCommitContributionConnection_possibleTypes = ['CreatedCommitContributionConnection']
export var isCreatedCommitContributionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedCommitContributionConnection"')
  return CreatedCommitContributionConnection_possibleTypes.includes(obj.__typename)
}



var CreatedCommitContributionEdge_possibleTypes = ['CreatedCommitContributionEdge']
export var isCreatedCommitContributionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedCommitContributionEdge"')
  return CreatedCommitContributionEdge_possibleTypes.includes(obj.__typename)
}



var CreatedIssueContribution_possibleTypes = ['CreatedIssueContribution']
export var isCreatedIssueContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedIssueContribution"')
  return CreatedIssueContribution_possibleTypes.includes(obj.__typename)
}



var CreatedIssueContributionConnection_possibleTypes = ['CreatedIssueContributionConnection']
export var isCreatedIssueContributionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedIssueContributionConnection"')
  return CreatedIssueContributionConnection_possibleTypes.includes(obj.__typename)
}



var CreatedIssueContributionEdge_possibleTypes = ['CreatedIssueContributionEdge']
export var isCreatedIssueContributionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedIssueContributionEdge"')
  return CreatedIssueContributionEdge_possibleTypes.includes(obj.__typename)
}



var CreatedIssueOrRestrictedContribution_possibleTypes = ['CreatedIssueContribution','RestrictedContribution']
export var isCreatedIssueOrRestrictedContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedIssueOrRestrictedContribution"')
  return CreatedIssueOrRestrictedContribution_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestContribution_possibleTypes = ['CreatedPullRequestContribution']
export var isCreatedPullRequestContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestContribution"')
  return CreatedPullRequestContribution_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestContributionConnection_possibleTypes = ['CreatedPullRequestContributionConnection']
export var isCreatedPullRequestContributionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestContributionConnection"')
  return CreatedPullRequestContributionConnection_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestContributionEdge_possibleTypes = ['CreatedPullRequestContributionEdge']
export var isCreatedPullRequestContributionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestContributionEdge"')
  return CreatedPullRequestContributionEdge_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestOrRestrictedContribution_possibleTypes = ['CreatedPullRequestContribution','RestrictedContribution']
export var isCreatedPullRequestOrRestrictedContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestOrRestrictedContribution"')
  return CreatedPullRequestOrRestrictedContribution_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestReviewContribution_possibleTypes = ['CreatedPullRequestReviewContribution']
export var isCreatedPullRequestReviewContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestReviewContribution"')
  return CreatedPullRequestReviewContribution_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestReviewContributionConnection_possibleTypes = ['CreatedPullRequestReviewContributionConnection']
export var isCreatedPullRequestReviewContributionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestReviewContributionConnection"')
  return CreatedPullRequestReviewContributionConnection_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestReviewContributionEdge_possibleTypes = ['CreatedPullRequestReviewContributionEdge']
export var isCreatedPullRequestReviewContributionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestReviewContributionEdge"')
  return CreatedPullRequestReviewContributionEdge_possibleTypes.includes(obj.__typename)
}



var CreatedRepositoryContribution_possibleTypes = ['CreatedRepositoryContribution']
export var isCreatedRepositoryContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedRepositoryContribution"')
  return CreatedRepositoryContribution_possibleTypes.includes(obj.__typename)
}



var CreatedRepositoryContributionConnection_possibleTypes = ['CreatedRepositoryContributionConnection']
export var isCreatedRepositoryContributionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedRepositoryContributionConnection"')
  return CreatedRepositoryContributionConnection_possibleTypes.includes(obj.__typename)
}



var CreatedRepositoryContributionEdge_possibleTypes = ['CreatedRepositoryContributionEdge']
export var isCreatedRepositoryContributionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedRepositoryContributionEdge"')
  return CreatedRepositoryContributionEdge_possibleTypes.includes(obj.__typename)
}



var CreatedRepositoryOrRestrictedContribution_possibleTypes = ['CreatedRepositoryContribution','RestrictedContribution']
export var isCreatedRepositoryOrRestrictedContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedRepositoryOrRestrictedContribution"')
  return CreatedRepositoryOrRestrictedContribution_possibleTypes.includes(obj.__typename)
}



var CrossReferencedEvent_possibleTypes = ['CrossReferencedEvent']
export var isCrossReferencedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCrossReferencedEvent"')
  return CrossReferencedEvent_possibleTypes.includes(obj.__typename)
}



var DeclineTopicSuggestionPayload_possibleTypes = ['DeclineTopicSuggestionPayload']
export var isDeclineTopicSuggestionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeclineTopicSuggestionPayload"')
  return DeclineTopicSuggestionPayload_possibleTypes.includes(obj.__typename)
}



var Deletable_possibleTypes = ['CommitComment','GistComment','IssueComment','PullRequestReview','PullRequestReviewComment','TeamDiscussion','TeamDiscussionComment']
export var isDeletable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletable"')
  return Deletable_possibleTypes.includes(obj.__typename)
}



var DeleteBranchProtectionRulePayload_possibleTypes = ['DeleteBranchProtectionRulePayload']
export var isDeleteBranchProtectionRulePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteBranchProtectionRulePayload"')
  return DeleteBranchProtectionRulePayload_possibleTypes.includes(obj.__typename)
}



var DeleteDeploymentPayload_possibleTypes = ['DeleteDeploymentPayload']
export var isDeleteDeploymentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteDeploymentPayload"')
  return DeleteDeploymentPayload_possibleTypes.includes(obj.__typename)
}



var DeleteIpAllowListEntryPayload_possibleTypes = ['DeleteIpAllowListEntryPayload']
export var isDeleteIpAllowListEntryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteIpAllowListEntryPayload"')
  return DeleteIpAllowListEntryPayload_possibleTypes.includes(obj.__typename)
}



var DeleteIssueCommentPayload_possibleTypes = ['DeleteIssueCommentPayload']
export var isDeleteIssueCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteIssueCommentPayload"')
  return DeleteIssueCommentPayload_possibleTypes.includes(obj.__typename)
}



var DeleteIssuePayload_possibleTypes = ['DeleteIssuePayload']
export var isDeleteIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteIssuePayload"')
  return DeleteIssuePayload_possibleTypes.includes(obj.__typename)
}



var DeleteLabelPayload_possibleTypes = ['DeleteLabelPayload']
export var isDeleteLabelPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteLabelPayload"')
  return DeleteLabelPayload_possibleTypes.includes(obj.__typename)
}



var DeletePackageVersionPayload_possibleTypes = ['DeletePackageVersionPayload']
export var isDeletePackageVersionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePackageVersionPayload"')
  return DeletePackageVersionPayload_possibleTypes.includes(obj.__typename)
}



var DeleteProjectCardPayload_possibleTypes = ['DeleteProjectCardPayload']
export var isDeleteProjectCardPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteProjectCardPayload"')
  return DeleteProjectCardPayload_possibleTypes.includes(obj.__typename)
}



var DeleteProjectColumnPayload_possibleTypes = ['DeleteProjectColumnPayload']
export var isDeleteProjectColumnPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteProjectColumnPayload"')
  return DeleteProjectColumnPayload_possibleTypes.includes(obj.__typename)
}



var DeleteProjectPayload_possibleTypes = ['DeleteProjectPayload']
export var isDeleteProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteProjectPayload"')
  return DeleteProjectPayload_possibleTypes.includes(obj.__typename)
}



var DeletePullRequestReviewCommentPayload_possibleTypes = ['DeletePullRequestReviewCommentPayload']
export var isDeletePullRequestReviewCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePullRequestReviewCommentPayload"')
  return DeletePullRequestReviewCommentPayload_possibleTypes.includes(obj.__typename)
}



var DeletePullRequestReviewPayload_possibleTypes = ['DeletePullRequestReviewPayload']
export var isDeletePullRequestReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePullRequestReviewPayload"')
  return DeletePullRequestReviewPayload_possibleTypes.includes(obj.__typename)
}



var DeleteRefPayload_possibleTypes = ['DeleteRefPayload']
export var isDeleteRefPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteRefPayload"')
  return DeleteRefPayload_possibleTypes.includes(obj.__typename)
}



var DeleteTeamDiscussionCommentPayload_possibleTypes = ['DeleteTeamDiscussionCommentPayload']
export var isDeleteTeamDiscussionCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteTeamDiscussionCommentPayload"')
  return DeleteTeamDiscussionCommentPayload_possibleTypes.includes(obj.__typename)
}



var DeleteTeamDiscussionPayload_possibleTypes = ['DeleteTeamDiscussionPayload']
export var isDeleteTeamDiscussionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteTeamDiscussionPayload"')
  return DeleteTeamDiscussionPayload_possibleTypes.includes(obj.__typename)
}



var DemilestonedEvent_possibleTypes = ['DemilestonedEvent']
export var isDemilestonedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDemilestonedEvent"')
  return DemilestonedEvent_possibleTypes.includes(obj.__typename)
}



var DependencyGraphDependency_possibleTypes = ['DependencyGraphDependency']
export var isDependencyGraphDependency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphDependency"')
  return DependencyGraphDependency_possibleTypes.includes(obj.__typename)
}



var DependencyGraphDependencyConnection_possibleTypes = ['DependencyGraphDependencyConnection']
export var isDependencyGraphDependencyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphDependencyConnection"')
  return DependencyGraphDependencyConnection_possibleTypes.includes(obj.__typename)
}



var DependencyGraphDependencyEdge_possibleTypes = ['DependencyGraphDependencyEdge']
export var isDependencyGraphDependencyEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphDependencyEdge"')
  return DependencyGraphDependencyEdge_possibleTypes.includes(obj.__typename)
}



var DependencyGraphManifest_possibleTypes = ['DependencyGraphManifest']
export var isDependencyGraphManifest = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphManifest"')
  return DependencyGraphManifest_possibleTypes.includes(obj.__typename)
}



var DependencyGraphManifestConnection_possibleTypes = ['DependencyGraphManifestConnection']
export var isDependencyGraphManifestConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphManifestConnection"')
  return DependencyGraphManifestConnection_possibleTypes.includes(obj.__typename)
}



var DependencyGraphManifestEdge_possibleTypes = ['DependencyGraphManifestEdge']
export var isDependencyGraphManifestEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphManifestEdge"')
  return DependencyGraphManifestEdge_possibleTypes.includes(obj.__typename)
}



var DeployKey_possibleTypes = ['DeployKey']
export var isDeployKey = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeployKey"')
  return DeployKey_possibleTypes.includes(obj.__typename)
}



var DeployKeyConnection_possibleTypes = ['DeployKeyConnection']
export var isDeployKeyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeployKeyConnection"')
  return DeployKeyConnection_possibleTypes.includes(obj.__typename)
}



var DeployKeyEdge_possibleTypes = ['DeployKeyEdge']
export var isDeployKeyEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeployKeyEdge"')
  return DeployKeyEdge_possibleTypes.includes(obj.__typename)
}



var DeployedEvent_possibleTypes = ['DeployedEvent']
export var isDeployedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeployedEvent"')
  return DeployedEvent_possibleTypes.includes(obj.__typename)
}



var Deployment_possibleTypes = ['Deployment']
export var isDeployment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeployment"')
  return Deployment_possibleTypes.includes(obj.__typename)
}



var DeploymentConnection_possibleTypes = ['DeploymentConnection']
export var isDeploymentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentConnection"')
  return DeploymentConnection_possibleTypes.includes(obj.__typename)
}



var DeploymentEdge_possibleTypes = ['DeploymentEdge']
export var isDeploymentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentEdge"')
  return DeploymentEdge_possibleTypes.includes(obj.__typename)
}



var DeploymentEnvironmentChangedEvent_possibleTypes = ['DeploymentEnvironmentChangedEvent']
export var isDeploymentEnvironmentChangedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentEnvironmentChangedEvent"')
  return DeploymentEnvironmentChangedEvent_possibleTypes.includes(obj.__typename)
}



var DeploymentStatus_possibleTypes = ['DeploymentStatus']
export var isDeploymentStatus = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentStatus"')
  return DeploymentStatus_possibleTypes.includes(obj.__typename)
}



var DeploymentStatusConnection_possibleTypes = ['DeploymentStatusConnection']
export var isDeploymentStatusConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentStatusConnection"')
  return DeploymentStatusConnection_possibleTypes.includes(obj.__typename)
}



var DeploymentStatusEdge_possibleTypes = ['DeploymentStatusEdge']
export var isDeploymentStatusEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentStatusEdge"')
  return DeploymentStatusEdge_possibleTypes.includes(obj.__typename)
}



var DisconnectedEvent_possibleTypes = ['DisconnectedEvent']
export var isDisconnectedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDisconnectedEvent"')
  return DisconnectedEvent_possibleTypes.includes(obj.__typename)
}



var DismissPullRequestReviewPayload_possibleTypes = ['DismissPullRequestReviewPayload']
export var isDismissPullRequestReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDismissPullRequestReviewPayload"')
  return DismissPullRequestReviewPayload_possibleTypes.includes(obj.__typename)
}



var Enterprise_possibleTypes = ['Enterprise']
export var isEnterprise = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterprise"')
  return Enterprise_possibleTypes.includes(obj.__typename)
}



var EnterpriseAdministratorConnection_possibleTypes = ['EnterpriseAdministratorConnection']
export var isEnterpriseAdministratorConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAdministratorConnection"')
  return EnterpriseAdministratorConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseAdministratorEdge_possibleTypes = ['EnterpriseAdministratorEdge']
export var isEnterpriseAdministratorEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAdministratorEdge"')
  return EnterpriseAdministratorEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseAdministratorInvitation_possibleTypes = ['EnterpriseAdministratorInvitation']
export var isEnterpriseAdministratorInvitation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAdministratorInvitation"')
  return EnterpriseAdministratorInvitation_possibleTypes.includes(obj.__typename)
}



var EnterpriseAdministratorInvitationConnection_possibleTypes = ['EnterpriseAdministratorInvitationConnection']
export var isEnterpriseAdministratorInvitationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAdministratorInvitationConnection"')
  return EnterpriseAdministratorInvitationConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseAdministratorInvitationEdge_possibleTypes = ['EnterpriseAdministratorInvitationEdge']
export var isEnterpriseAdministratorInvitationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAdministratorInvitationEdge"')
  return EnterpriseAdministratorInvitationEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseAuditEntryData_possibleTypes = ['MembersCanDeleteReposClearAuditEntry','MembersCanDeleteReposDisableAuditEntry','MembersCanDeleteReposEnableAuditEntry','OrgInviteToBusinessAuditEntry','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','RepositoryVisibilityChangeDisableAuditEntry','RepositoryVisibilityChangeEnableAuditEntry']
export var isEnterpriseAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAuditEntryData"')
  return EnterpriseAuditEntryData_possibleTypes.includes(obj.__typename)
}



var EnterpriseBillingInfo_possibleTypes = ['EnterpriseBillingInfo']
export var isEnterpriseBillingInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseBillingInfo"')
  return EnterpriseBillingInfo_possibleTypes.includes(obj.__typename)
}



var EnterpriseIdentityProvider_possibleTypes = ['EnterpriseIdentityProvider']
export var isEnterpriseIdentityProvider = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseIdentityProvider"')
  return EnterpriseIdentityProvider_possibleTypes.includes(obj.__typename)
}



var EnterpriseMember_possibleTypes = ['EnterpriseUserAccount','User']
export var isEnterpriseMember = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseMember"')
  return EnterpriseMember_possibleTypes.includes(obj.__typename)
}



var EnterpriseMemberConnection_possibleTypes = ['EnterpriseMemberConnection']
export var isEnterpriseMemberConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseMemberConnection"')
  return EnterpriseMemberConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseMemberEdge_possibleTypes = ['EnterpriseMemberEdge']
export var isEnterpriseMemberEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseMemberEdge"')
  return EnterpriseMemberEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseOrganizationMembershipConnection_possibleTypes = ['EnterpriseOrganizationMembershipConnection']
export var isEnterpriseOrganizationMembershipConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseOrganizationMembershipConnection"')
  return EnterpriseOrganizationMembershipConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseOrganizationMembershipEdge_possibleTypes = ['EnterpriseOrganizationMembershipEdge']
export var isEnterpriseOrganizationMembershipEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseOrganizationMembershipEdge"')
  return EnterpriseOrganizationMembershipEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseOutsideCollaboratorConnection_possibleTypes = ['EnterpriseOutsideCollaboratorConnection']
export var isEnterpriseOutsideCollaboratorConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseOutsideCollaboratorConnection"')
  return EnterpriseOutsideCollaboratorConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseOutsideCollaboratorEdge_possibleTypes = ['EnterpriseOutsideCollaboratorEdge']
export var isEnterpriseOutsideCollaboratorEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseOutsideCollaboratorEdge"')
  return EnterpriseOutsideCollaboratorEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseOwnerInfo_possibleTypes = ['EnterpriseOwnerInfo']
export var isEnterpriseOwnerInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseOwnerInfo"')
  return EnterpriseOwnerInfo_possibleTypes.includes(obj.__typename)
}



var EnterprisePendingCollaboratorConnection_possibleTypes = ['EnterprisePendingCollaboratorConnection']
export var isEnterprisePendingCollaboratorConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterprisePendingCollaboratorConnection"')
  return EnterprisePendingCollaboratorConnection_possibleTypes.includes(obj.__typename)
}



var EnterprisePendingCollaboratorEdge_possibleTypes = ['EnterprisePendingCollaboratorEdge']
export var isEnterprisePendingCollaboratorEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterprisePendingCollaboratorEdge"')
  return EnterprisePendingCollaboratorEdge_possibleTypes.includes(obj.__typename)
}



var EnterprisePendingMemberInvitationConnection_possibleTypes = ['EnterprisePendingMemberInvitationConnection']
export var isEnterprisePendingMemberInvitationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterprisePendingMemberInvitationConnection"')
  return EnterprisePendingMemberInvitationConnection_possibleTypes.includes(obj.__typename)
}



var EnterprisePendingMemberInvitationEdge_possibleTypes = ['EnterprisePendingMemberInvitationEdge']
export var isEnterprisePendingMemberInvitationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterprisePendingMemberInvitationEdge"')
  return EnterprisePendingMemberInvitationEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseRepositoryInfo_possibleTypes = ['EnterpriseRepositoryInfo']
export var isEnterpriseRepositoryInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseRepositoryInfo"')
  return EnterpriseRepositoryInfo_possibleTypes.includes(obj.__typename)
}



var EnterpriseRepositoryInfoConnection_possibleTypes = ['EnterpriseRepositoryInfoConnection']
export var isEnterpriseRepositoryInfoConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseRepositoryInfoConnection"')
  return EnterpriseRepositoryInfoConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseRepositoryInfoEdge_possibleTypes = ['EnterpriseRepositoryInfoEdge']
export var isEnterpriseRepositoryInfoEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseRepositoryInfoEdge"')
  return EnterpriseRepositoryInfoEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerInstallation_possibleTypes = ['EnterpriseServerInstallation']
export var isEnterpriseServerInstallation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerInstallation"')
  return EnterpriseServerInstallation_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerInstallationConnection_possibleTypes = ['EnterpriseServerInstallationConnection']
export var isEnterpriseServerInstallationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerInstallationConnection"')
  return EnterpriseServerInstallationConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerInstallationEdge_possibleTypes = ['EnterpriseServerInstallationEdge']
export var isEnterpriseServerInstallationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerInstallationEdge"')
  return EnterpriseServerInstallationEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccount_possibleTypes = ['EnterpriseServerUserAccount']
export var isEnterpriseServerUserAccount = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccount"')
  return EnterpriseServerUserAccount_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountConnection_possibleTypes = ['EnterpriseServerUserAccountConnection']
export var isEnterpriseServerUserAccountConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountConnection"')
  return EnterpriseServerUserAccountConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountEdge_possibleTypes = ['EnterpriseServerUserAccountEdge']
export var isEnterpriseServerUserAccountEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountEdge"')
  return EnterpriseServerUserAccountEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountEmail_possibleTypes = ['EnterpriseServerUserAccountEmail']
export var isEnterpriseServerUserAccountEmail = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountEmail"')
  return EnterpriseServerUserAccountEmail_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountEmailConnection_possibleTypes = ['EnterpriseServerUserAccountEmailConnection']
export var isEnterpriseServerUserAccountEmailConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountEmailConnection"')
  return EnterpriseServerUserAccountEmailConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountEmailEdge_possibleTypes = ['EnterpriseServerUserAccountEmailEdge']
export var isEnterpriseServerUserAccountEmailEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountEmailEdge"')
  return EnterpriseServerUserAccountEmailEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountsUpload_possibleTypes = ['EnterpriseServerUserAccountsUpload']
export var isEnterpriseServerUserAccountsUpload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountsUpload"')
  return EnterpriseServerUserAccountsUpload_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountsUploadConnection_possibleTypes = ['EnterpriseServerUserAccountsUploadConnection']
export var isEnterpriseServerUserAccountsUploadConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountsUploadConnection"')
  return EnterpriseServerUserAccountsUploadConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountsUploadEdge_possibleTypes = ['EnterpriseServerUserAccountsUploadEdge']
export var isEnterpriseServerUserAccountsUploadEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountsUploadEdge"')
  return EnterpriseServerUserAccountsUploadEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseUserAccount_possibleTypes = ['EnterpriseUserAccount']
export var isEnterpriseUserAccount = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseUserAccount"')
  return EnterpriseUserAccount_possibleTypes.includes(obj.__typename)
}



var EnterpriseUserAccountConnection_possibleTypes = ['EnterpriseUserAccountConnection']
export var isEnterpriseUserAccountConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseUserAccountConnection"')
  return EnterpriseUserAccountConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseUserAccountEdge_possibleTypes = ['EnterpriseUserAccountEdge']
export var isEnterpriseUserAccountEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseUserAccountEdge"')
  return EnterpriseUserAccountEdge_possibleTypes.includes(obj.__typename)
}



var ExternalIdentity_possibleTypes = ['ExternalIdentity']
export var isExternalIdentity = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExternalIdentity"')
  return ExternalIdentity_possibleTypes.includes(obj.__typename)
}



var ExternalIdentityConnection_possibleTypes = ['ExternalIdentityConnection']
export var isExternalIdentityConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExternalIdentityConnection"')
  return ExternalIdentityConnection_possibleTypes.includes(obj.__typename)
}



var ExternalIdentityEdge_possibleTypes = ['ExternalIdentityEdge']
export var isExternalIdentityEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExternalIdentityEdge"')
  return ExternalIdentityEdge_possibleTypes.includes(obj.__typename)
}



var ExternalIdentitySamlAttributes_possibleTypes = ['ExternalIdentitySamlAttributes']
export var isExternalIdentitySamlAttributes = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExternalIdentitySamlAttributes"')
  return ExternalIdentitySamlAttributes_possibleTypes.includes(obj.__typename)
}



var ExternalIdentityScimAttributes_possibleTypes = ['ExternalIdentityScimAttributes']
export var isExternalIdentityScimAttributes = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExternalIdentityScimAttributes"')
  return ExternalIdentityScimAttributes_possibleTypes.includes(obj.__typename)
}



var FollowUserPayload_possibleTypes = ['FollowUserPayload']
export var isFollowUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollowUserPayload"')
  return FollowUserPayload_possibleTypes.includes(obj.__typename)
}



var FollowerConnection_possibleTypes = ['FollowerConnection']
export var isFollowerConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollowerConnection"')
  return FollowerConnection_possibleTypes.includes(obj.__typename)
}



var FollowingConnection_possibleTypes = ['FollowingConnection']
export var isFollowingConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollowingConnection"')
  return FollowingConnection_possibleTypes.includes(obj.__typename)
}



var FundingLink_possibleTypes = ['FundingLink']
export var isFundingLink = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFundingLink"')
  return FundingLink_possibleTypes.includes(obj.__typename)
}



var GenericHovercardContext_possibleTypes = ['GenericHovercardContext']
export var isGenericHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGenericHovercardContext"')
  return GenericHovercardContext_possibleTypes.includes(obj.__typename)
}



var Gist_possibleTypes = ['Gist']
export var isGist = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGist"')
  return Gist_possibleTypes.includes(obj.__typename)
}



var GistComment_possibleTypes = ['GistComment']
export var isGistComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistComment"')
  return GistComment_possibleTypes.includes(obj.__typename)
}



var GistCommentConnection_possibleTypes = ['GistCommentConnection']
export var isGistCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistCommentConnection"')
  return GistCommentConnection_possibleTypes.includes(obj.__typename)
}



var GistCommentEdge_possibleTypes = ['GistCommentEdge']
export var isGistCommentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistCommentEdge"')
  return GistCommentEdge_possibleTypes.includes(obj.__typename)
}



var GistConnection_possibleTypes = ['GistConnection']
export var isGistConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistConnection"')
  return GistConnection_possibleTypes.includes(obj.__typename)
}



var GistEdge_possibleTypes = ['GistEdge']
export var isGistEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistEdge"')
  return GistEdge_possibleTypes.includes(obj.__typename)
}



var GistFile_possibleTypes = ['GistFile']
export var isGistFile = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistFile"')
  return GistFile_possibleTypes.includes(obj.__typename)
}



var GitActor_possibleTypes = ['GitActor']
export var isGitActor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGitActor"')
  return GitActor_possibleTypes.includes(obj.__typename)
}



var GitHubMetadata_possibleTypes = ['GitHubMetadata']
export var isGitHubMetadata = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGitHubMetadata"')
  return GitHubMetadata_possibleTypes.includes(obj.__typename)
}



var GitObject_possibleTypes = ['Blob','Commit','Tag','Tree']
export var isGitObject = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGitObject"')
  return GitObject_possibleTypes.includes(obj.__typename)
}



var GitSignature_possibleTypes = ['GpgSignature','SmimeSignature','UnknownSignature']
export var isGitSignature = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGitSignature"')
  return GitSignature_possibleTypes.includes(obj.__typename)
}



var GpgSignature_possibleTypes = ['GpgSignature']
export var isGpgSignature = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGpgSignature"')
  return GpgSignature_possibleTypes.includes(obj.__typename)
}



var HeadRefDeletedEvent_possibleTypes = ['HeadRefDeletedEvent']
export var isHeadRefDeletedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHeadRefDeletedEvent"')
  return HeadRefDeletedEvent_possibleTypes.includes(obj.__typename)
}



var HeadRefForcePushedEvent_possibleTypes = ['HeadRefForcePushedEvent']
export var isHeadRefForcePushedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHeadRefForcePushedEvent"')
  return HeadRefForcePushedEvent_possibleTypes.includes(obj.__typename)
}



var HeadRefRestoredEvent_possibleTypes = ['HeadRefRestoredEvent']
export var isHeadRefRestoredEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHeadRefRestoredEvent"')
  return HeadRefRestoredEvent_possibleTypes.includes(obj.__typename)
}



var Hovercard_possibleTypes = ['Hovercard']
export var isHovercard = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHovercard"')
  return Hovercard_possibleTypes.includes(obj.__typename)
}



var HovercardContext_possibleTypes = ['GenericHovercardContext','OrganizationTeamsHovercardContext','OrganizationsHovercardContext','ReviewStatusHovercardContext','ViewerHovercardContext']
export var isHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHovercardContext"')
  return HovercardContext_possibleTypes.includes(obj.__typename)
}



var ImportProjectPayload_possibleTypes = ['ImportProjectPayload']
export var isImportProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isImportProjectPayload"')
  return ImportProjectPayload_possibleTypes.includes(obj.__typename)
}



var InviteEnterpriseAdminPayload_possibleTypes = ['InviteEnterpriseAdminPayload']
export var isInviteEnterpriseAdminPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isInviteEnterpriseAdminPayload"')
  return InviteEnterpriseAdminPayload_possibleTypes.includes(obj.__typename)
}



var IpAllowListEntry_possibleTypes = ['IpAllowListEntry']
export var isIpAllowListEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIpAllowListEntry"')
  return IpAllowListEntry_possibleTypes.includes(obj.__typename)
}



var IpAllowListEntryConnection_possibleTypes = ['IpAllowListEntryConnection']
export var isIpAllowListEntryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIpAllowListEntryConnection"')
  return IpAllowListEntryConnection_possibleTypes.includes(obj.__typename)
}



var IpAllowListEntryEdge_possibleTypes = ['IpAllowListEntryEdge']
export var isIpAllowListEntryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIpAllowListEntryEdge"')
  return IpAllowListEntryEdge_possibleTypes.includes(obj.__typename)
}



var IpAllowListOwner_possibleTypes = ['Enterprise','Organization']
export var isIpAllowListOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIpAllowListOwner"')
  return IpAllowListOwner_possibleTypes.includes(obj.__typename)
}



var Issue_possibleTypes = ['Issue']
export var isIssue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssue"')
  return Issue_possibleTypes.includes(obj.__typename)
}



var IssueComment_possibleTypes = ['IssueComment']
export var isIssueComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueComment"')
  return IssueComment_possibleTypes.includes(obj.__typename)
}



var IssueCommentConnection_possibleTypes = ['IssueCommentConnection']
export var isIssueCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueCommentConnection"')
  return IssueCommentConnection_possibleTypes.includes(obj.__typename)
}



var IssueCommentEdge_possibleTypes = ['IssueCommentEdge']
export var isIssueCommentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueCommentEdge"')
  return IssueCommentEdge_possibleTypes.includes(obj.__typename)
}



var IssueConnection_possibleTypes = ['IssueConnection']
export var isIssueConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueConnection"')
  return IssueConnection_possibleTypes.includes(obj.__typename)
}



var IssueContributionsByRepository_possibleTypes = ['IssueContributionsByRepository']
export var isIssueContributionsByRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueContributionsByRepository"')
  return IssueContributionsByRepository_possibleTypes.includes(obj.__typename)
}



var IssueEdge_possibleTypes = ['IssueEdge']
export var isIssueEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueEdge"')
  return IssueEdge_possibleTypes.includes(obj.__typename)
}



var IssueOrPullRequest_possibleTypes = ['Issue','PullRequest']
export var isIssueOrPullRequest = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueOrPullRequest"')
  return IssueOrPullRequest_possibleTypes.includes(obj.__typename)
}



var IssueTimelineConnection_possibleTypes = ['IssueTimelineConnection']
export var isIssueTimelineConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineConnection"')
  return IssueTimelineConnection_possibleTypes.includes(obj.__typename)
}



var IssueTimelineItem_possibleTypes = ['AssignedEvent','ClosedEvent','Commit','CrossReferencedEvent','DemilestonedEvent','IssueComment','LabeledEvent','LockedEvent','MilestonedEvent','ReferencedEvent','RenamedTitleEvent','ReopenedEvent','SubscribedEvent','TransferredEvent','UnassignedEvent','UnlabeledEvent','UnlockedEvent','UnsubscribedEvent','UserBlockedEvent']
export var isIssueTimelineItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineItem"')
  return IssueTimelineItem_possibleTypes.includes(obj.__typename)
}



var IssueTimelineItemEdge_possibleTypes = ['IssueTimelineItemEdge']
export var isIssueTimelineItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineItemEdge"')
  return IssueTimelineItemEdge_possibleTypes.includes(obj.__typename)
}



var IssueTimelineItems_possibleTypes = ['AddedToProjectEvent','AssignedEvent','ClosedEvent','CommentDeletedEvent','ConnectedEvent','ConvertedNoteToIssueEvent','CrossReferencedEvent','DemilestonedEvent','DisconnectedEvent','IssueComment','LabeledEvent','LockedEvent','MarkedAsDuplicateEvent','MentionedEvent','MilestonedEvent','MovedColumnsInProjectEvent','PinnedEvent','ReferencedEvent','RemovedFromProjectEvent','RenamedTitleEvent','ReopenedEvent','SubscribedEvent','TransferredEvent','UnassignedEvent','UnlabeledEvent','UnlockedEvent','UnmarkedAsDuplicateEvent','UnpinnedEvent','UnsubscribedEvent','UserBlockedEvent']
export var isIssueTimelineItems = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineItems"')
  return IssueTimelineItems_possibleTypes.includes(obj.__typename)
}



var IssueTimelineItemsConnection_possibleTypes = ['IssueTimelineItemsConnection']
export var isIssueTimelineItemsConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineItemsConnection"')
  return IssueTimelineItemsConnection_possibleTypes.includes(obj.__typename)
}



var IssueTimelineItemsEdge_possibleTypes = ['IssueTimelineItemsEdge']
export var isIssueTimelineItemsEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineItemsEdge"')
  return IssueTimelineItemsEdge_possibleTypes.includes(obj.__typename)
}



var JoinedGitHubContribution_possibleTypes = ['JoinedGitHubContribution']
export var isJoinedGitHubContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isJoinedGitHubContribution"')
  return JoinedGitHubContribution_possibleTypes.includes(obj.__typename)
}



var Label_possibleTypes = ['Label']
export var isLabel = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLabel"')
  return Label_possibleTypes.includes(obj.__typename)
}



var LabelConnection_possibleTypes = ['LabelConnection']
export var isLabelConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLabelConnection"')
  return LabelConnection_possibleTypes.includes(obj.__typename)
}



var LabelEdge_possibleTypes = ['LabelEdge']
export var isLabelEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLabelEdge"')
  return LabelEdge_possibleTypes.includes(obj.__typename)
}



var Labelable_possibleTypes = ['Issue','PullRequest']
export var isLabelable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLabelable"')
  return Labelable_possibleTypes.includes(obj.__typename)
}



var LabeledEvent_possibleTypes = ['LabeledEvent']
export var isLabeledEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLabeledEvent"')
  return LabeledEvent_possibleTypes.includes(obj.__typename)
}



var Language_possibleTypes = ['Language']
export var isLanguage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLanguage"')
  return Language_possibleTypes.includes(obj.__typename)
}



var LanguageConnection_possibleTypes = ['LanguageConnection']
export var isLanguageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLanguageConnection"')
  return LanguageConnection_possibleTypes.includes(obj.__typename)
}



var LanguageEdge_possibleTypes = ['LanguageEdge']
export var isLanguageEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLanguageEdge"')
  return LanguageEdge_possibleTypes.includes(obj.__typename)
}



var License_possibleTypes = ['License']
export var isLicense = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLicense"')
  return License_possibleTypes.includes(obj.__typename)
}



var LicenseRule_possibleTypes = ['LicenseRule']
export var isLicenseRule = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLicenseRule"')
  return LicenseRule_possibleTypes.includes(obj.__typename)
}



var LinkRepositoryToProjectPayload_possibleTypes = ['LinkRepositoryToProjectPayload']
export var isLinkRepositoryToProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLinkRepositoryToProjectPayload"')
  return LinkRepositoryToProjectPayload_possibleTypes.includes(obj.__typename)
}



var LockLockablePayload_possibleTypes = ['LockLockablePayload']
export var isLockLockablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLockLockablePayload"')
  return LockLockablePayload_possibleTypes.includes(obj.__typename)
}



var Lockable_possibleTypes = ['Issue','PullRequest']
export var isLockable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLockable"')
  return Lockable_possibleTypes.includes(obj.__typename)
}



var LockedEvent_possibleTypes = ['LockedEvent']
export var isLockedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLockedEvent"')
  return LockedEvent_possibleTypes.includes(obj.__typename)
}



var Mannequin_possibleTypes = ['Mannequin']
export var isMannequin = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMannequin"')
  return Mannequin_possibleTypes.includes(obj.__typename)
}



var MarkPullRequestReadyForReviewPayload_possibleTypes = ['MarkPullRequestReadyForReviewPayload']
export var isMarkPullRequestReadyForReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarkPullRequestReadyForReviewPayload"')
  return MarkPullRequestReadyForReviewPayload_possibleTypes.includes(obj.__typename)
}



var MarkedAsDuplicateEvent_possibleTypes = ['MarkedAsDuplicateEvent']
export var isMarkedAsDuplicateEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarkedAsDuplicateEvent"')
  return MarkedAsDuplicateEvent_possibleTypes.includes(obj.__typename)
}



var MarketplaceCategory_possibleTypes = ['MarketplaceCategory']
export var isMarketplaceCategory = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarketplaceCategory"')
  return MarketplaceCategory_possibleTypes.includes(obj.__typename)
}



var MarketplaceListing_possibleTypes = ['MarketplaceListing']
export var isMarketplaceListing = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarketplaceListing"')
  return MarketplaceListing_possibleTypes.includes(obj.__typename)
}



var MarketplaceListingConnection_possibleTypes = ['MarketplaceListingConnection']
export var isMarketplaceListingConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarketplaceListingConnection"')
  return MarketplaceListingConnection_possibleTypes.includes(obj.__typename)
}



var MarketplaceListingEdge_possibleTypes = ['MarketplaceListingEdge']
export var isMarketplaceListingEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarketplaceListingEdge"')
  return MarketplaceListingEdge_possibleTypes.includes(obj.__typename)
}



var MemberStatusable_possibleTypes = ['Organization','Team']
export var isMemberStatusable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMemberStatusable"')
  return MemberStatusable_possibleTypes.includes(obj.__typename)
}



var MembersCanDeleteReposClearAuditEntry_possibleTypes = ['MembersCanDeleteReposClearAuditEntry']
export var isMembersCanDeleteReposClearAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMembersCanDeleteReposClearAuditEntry"')
  return MembersCanDeleteReposClearAuditEntry_possibleTypes.includes(obj.__typename)
}



var MembersCanDeleteReposDisableAuditEntry_possibleTypes = ['MembersCanDeleteReposDisableAuditEntry']
export var isMembersCanDeleteReposDisableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMembersCanDeleteReposDisableAuditEntry"')
  return MembersCanDeleteReposDisableAuditEntry_possibleTypes.includes(obj.__typename)
}



var MembersCanDeleteReposEnableAuditEntry_possibleTypes = ['MembersCanDeleteReposEnableAuditEntry']
export var isMembersCanDeleteReposEnableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMembersCanDeleteReposEnableAuditEntry"')
  return MembersCanDeleteReposEnableAuditEntry_possibleTypes.includes(obj.__typename)
}



var MentionedEvent_possibleTypes = ['MentionedEvent']
export var isMentionedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMentionedEvent"')
  return MentionedEvent_possibleTypes.includes(obj.__typename)
}



var MergeBranchPayload_possibleTypes = ['MergeBranchPayload']
export var isMergeBranchPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMergeBranchPayload"')
  return MergeBranchPayload_possibleTypes.includes(obj.__typename)
}



var MergePullRequestPayload_possibleTypes = ['MergePullRequestPayload']
export var isMergePullRequestPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMergePullRequestPayload"')
  return MergePullRequestPayload_possibleTypes.includes(obj.__typename)
}



var MergedEvent_possibleTypes = ['MergedEvent']
export var isMergedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMergedEvent"')
  return MergedEvent_possibleTypes.includes(obj.__typename)
}



var Milestone_possibleTypes = ['Milestone']
export var isMilestone = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMilestone"')
  return Milestone_possibleTypes.includes(obj.__typename)
}



var MilestoneConnection_possibleTypes = ['MilestoneConnection']
export var isMilestoneConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMilestoneConnection"')
  return MilestoneConnection_possibleTypes.includes(obj.__typename)
}



var MilestoneEdge_possibleTypes = ['MilestoneEdge']
export var isMilestoneEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMilestoneEdge"')
  return MilestoneEdge_possibleTypes.includes(obj.__typename)
}



var MilestoneItem_possibleTypes = ['Issue','PullRequest']
export var isMilestoneItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMilestoneItem"')
  return MilestoneItem_possibleTypes.includes(obj.__typename)
}



var MilestonedEvent_possibleTypes = ['MilestonedEvent']
export var isMilestonedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMilestonedEvent"')
  return MilestonedEvent_possibleTypes.includes(obj.__typename)
}



var Minimizable_possibleTypes = ['CommitComment','GistComment','IssueComment','PullRequestReviewComment']
export var isMinimizable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMinimizable"')
  return Minimizable_possibleTypes.includes(obj.__typename)
}



var MinimizeCommentPayload_possibleTypes = ['MinimizeCommentPayload']
export var isMinimizeCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMinimizeCommentPayload"')
  return MinimizeCommentPayload_possibleTypes.includes(obj.__typename)
}



var MoveProjectCardPayload_possibleTypes = ['MoveProjectCardPayload']
export var isMoveProjectCardPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMoveProjectCardPayload"')
  return MoveProjectCardPayload_possibleTypes.includes(obj.__typename)
}



var MoveProjectColumnPayload_possibleTypes = ['MoveProjectColumnPayload']
export var isMoveProjectColumnPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMoveProjectColumnPayload"')
  return MoveProjectColumnPayload_possibleTypes.includes(obj.__typename)
}



var MovedColumnsInProjectEvent_possibleTypes = ['MovedColumnsInProjectEvent']
export var isMovedColumnsInProjectEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMovedColumnsInProjectEvent"')
  return MovedColumnsInProjectEvent_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
export var isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var Node_possibleTypes = ['AddedToProjectEvent','App','AssignedEvent','AutomaticBaseChangeFailedEvent','AutomaticBaseChangeSucceededEvent','BaseRefChangedEvent','BaseRefForcePushedEvent','Blob','Bot','BranchProtectionRule','CheckRun','CheckSuite','ClosedEvent','CodeOfConduct','CommentDeletedEvent','Commit','CommitComment','CommitCommentThread','ConnectedEvent','ConvertToDraftEvent','ConvertedNoteToIssueEvent','CrossReferencedEvent','DemilestonedEvent','DependencyGraphManifest','DeployKey','DeployedEvent','Deployment','DeploymentEnvironmentChangedEvent','DeploymentStatus','DisconnectedEvent','Enterprise','EnterpriseAdministratorInvitation','EnterpriseIdentityProvider','EnterpriseRepositoryInfo','EnterpriseServerInstallation','EnterpriseServerUserAccount','EnterpriseServerUserAccountEmail','EnterpriseServerUserAccountsUpload','EnterpriseUserAccount','ExternalIdentity','Gist','GistComment','HeadRefDeletedEvent','HeadRefForcePushedEvent','HeadRefRestoredEvent','IpAllowListEntry','Issue','IssueComment','Label','LabeledEvent','Language','License','LockedEvent','Mannequin','MarkedAsDuplicateEvent','MarketplaceCategory','MarketplaceListing','MembersCanDeleteReposClearAuditEntry','MembersCanDeleteReposDisableAuditEntry','MembersCanDeleteReposEnableAuditEntry','MentionedEvent','MergedEvent','Milestone','MilestonedEvent','MovedColumnsInProjectEvent','OauthApplicationCreateAuditEntry','OrgAddBillingManagerAuditEntry','OrgAddMemberAuditEntry','OrgBlockUserAuditEntry','OrgConfigDisableCollaboratorsOnlyAuditEntry','OrgConfigEnableCollaboratorsOnlyAuditEntry','OrgCreateAuditEntry','OrgDisableOauthAppRestrictionsAuditEntry','OrgDisableSamlAuditEntry','OrgDisableTwoFactorRequirementAuditEntry','OrgEnableOauthAppRestrictionsAuditEntry','OrgEnableSamlAuditEntry','OrgEnableTwoFactorRequirementAuditEntry','OrgInviteMemberAuditEntry','OrgInviteToBusinessAuditEntry','OrgOauthAppAccessApprovedAuditEntry','OrgOauthAppAccessDeniedAuditEntry','OrgOauthAppAccessRequestedAuditEntry','OrgRemoveBillingManagerAuditEntry','OrgRemoveMemberAuditEntry','OrgRemoveOutsideCollaboratorAuditEntry','OrgRestoreMemberAuditEntry','OrgUnblockUserAuditEntry','OrgUpdateDefaultRepositoryPermissionAuditEntry','OrgUpdateMemberAuditEntry','OrgUpdateMemberRepositoryCreationPermissionAuditEntry','OrgUpdateMemberRepositoryInvitationPermissionAuditEntry','Organization','OrganizationIdentityProvider','OrganizationInvitation','Package','PackageFile','PackageTag','PackageVersion','PinnedEvent','PinnedIssue','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','Project','ProjectCard','ProjectColumn','PublicKey','PullRequest','PullRequestCommit','PullRequestCommitCommentThread','PullRequestReview','PullRequestReviewComment','PullRequestReviewThread','Push','PushAllowance','Reaction','ReadyForReviewEvent','Ref','ReferencedEvent','RegistryPackage','RegistryPackageDependency','RegistryPackageFile','RegistryPackageTag','RegistryPackageVersion','Release','ReleaseAsset','RemovedFromProjectEvent','RenamedTitleEvent','ReopenedEvent','RepoAccessAuditEntry','RepoAddMemberAuditEntry','RepoAddTopicAuditEntry','RepoArchivedAuditEntry','RepoChangeMergeSettingAuditEntry','RepoConfigDisableAnonymousGitAccessAuditEntry','RepoConfigDisableCollaboratorsOnlyAuditEntry','RepoConfigDisableContributorsOnlyAuditEntry','RepoConfigDisableSockpuppetDisallowedAuditEntry','RepoConfigEnableAnonymousGitAccessAuditEntry','RepoConfigEnableCollaboratorsOnlyAuditEntry','RepoConfigEnableContributorsOnlyAuditEntry','RepoConfigEnableSockpuppetDisallowedAuditEntry','RepoConfigLockAnonymousGitAccessAuditEntry','RepoConfigUnlockAnonymousGitAccessAuditEntry','RepoCreateAuditEntry','RepoDestroyAuditEntry','RepoRemoveMemberAuditEntry','RepoRemoveTopicAuditEntry','Repository','RepositoryInvitation','RepositoryTopic','RepositoryVisibilityChangeDisableAuditEntry','RepositoryVisibilityChangeEnableAuditEntry','RepositoryVulnerabilityAlert','ReviewDismissalAllowance','ReviewDismissedEvent','ReviewRequest','ReviewRequestRemovedEvent','ReviewRequestedEvent','SavedReply','SecurityAdvisory','SponsorsListing','SponsorsTier','Sponsorship','Status','StatusCheckRollup','StatusContext','SubscribedEvent','Tag','Team','TeamAddMemberAuditEntry','TeamAddRepositoryAuditEntry','TeamChangeParentTeamAuditEntry','TeamDiscussion','TeamDiscussionComment','TeamRemoveMemberAuditEntry','TeamRemoveRepositoryAuditEntry','Topic','TransferredEvent','Tree','UnassignedEvent','UnlabeledEvent','UnlockedEvent','UnmarkedAsDuplicateEvent','UnpinnedEvent','UnsubscribedEvent','User','UserBlockedEvent','UserContentEdit','UserStatus']
export var isNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNode"')
  return Node_possibleTypes.includes(obj.__typename)
}



var OauthApplicationAuditEntryData_possibleTypes = ['OauthApplicationCreateAuditEntry','OrgOauthAppAccessApprovedAuditEntry','OrgOauthAppAccessDeniedAuditEntry','OrgOauthAppAccessRequestedAuditEntry']
export var isOauthApplicationAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOauthApplicationAuditEntryData"')
  return OauthApplicationAuditEntryData_possibleTypes.includes(obj.__typename)
}



var OauthApplicationCreateAuditEntry_possibleTypes = ['OauthApplicationCreateAuditEntry']
export var isOauthApplicationCreateAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOauthApplicationCreateAuditEntry"')
  return OauthApplicationCreateAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgAddBillingManagerAuditEntry_possibleTypes = ['OrgAddBillingManagerAuditEntry']
export var isOrgAddBillingManagerAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgAddBillingManagerAuditEntry"')
  return OrgAddBillingManagerAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgAddMemberAuditEntry_possibleTypes = ['OrgAddMemberAuditEntry']
export var isOrgAddMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgAddMemberAuditEntry"')
  return OrgAddMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgBlockUserAuditEntry_possibleTypes = ['OrgBlockUserAuditEntry']
export var isOrgBlockUserAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgBlockUserAuditEntry"')
  return OrgBlockUserAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgConfigDisableCollaboratorsOnlyAuditEntry_possibleTypes = ['OrgConfigDisableCollaboratorsOnlyAuditEntry']
export var isOrgConfigDisableCollaboratorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgConfigDisableCollaboratorsOnlyAuditEntry"')
  return OrgConfigDisableCollaboratorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgConfigEnableCollaboratorsOnlyAuditEntry_possibleTypes = ['OrgConfigEnableCollaboratorsOnlyAuditEntry']
export var isOrgConfigEnableCollaboratorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgConfigEnableCollaboratorsOnlyAuditEntry"')
  return OrgConfigEnableCollaboratorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgCreateAuditEntry_possibleTypes = ['OrgCreateAuditEntry']
export var isOrgCreateAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgCreateAuditEntry"')
  return OrgCreateAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgDisableOauthAppRestrictionsAuditEntry_possibleTypes = ['OrgDisableOauthAppRestrictionsAuditEntry']
export var isOrgDisableOauthAppRestrictionsAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgDisableOauthAppRestrictionsAuditEntry"')
  return OrgDisableOauthAppRestrictionsAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgDisableSamlAuditEntry_possibleTypes = ['OrgDisableSamlAuditEntry']
export var isOrgDisableSamlAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgDisableSamlAuditEntry"')
  return OrgDisableSamlAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgDisableTwoFactorRequirementAuditEntry_possibleTypes = ['OrgDisableTwoFactorRequirementAuditEntry']
export var isOrgDisableTwoFactorRequirementAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgDisableTwoFactorRequirementAuditEntry"')
  return OrgDisableTwoFactorRequirementAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgEnableOauthAppRestrictionsAuditEntry_possibleTypes = ['OrgEnableOauthAppRestrictionsAuditEntry']
export var isOrgEnableOauthAppRestrictionsAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgEnableOauthAppRestrictionsAuditEntry"')
  return OrgEnableOauthAppRestrictionsAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgEnableSamlAuditEntry_possibleTypes = ['OrgEnableSamlAuditEntry']
export var isOrgEnableSamlAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgEnableSamlAuditEntry"')
  return OrgEnableSamlAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgEnableTwoFactorRequirementAuditEntry_possibleTypes = ['OrgEnableTwoFactorRequirementAuditEntry']
export var isOrgEnableTwoFactorRequirementAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgEnableTwoFactorRequirementAuditEntry"')
  return OrgEnableTwoFactorRequirementAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgInviteMemberAuditEntry_possibleTypes = ['OrgInviteMemberAuditEntry']
export var isOrgInviteMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgInviteMemberAuditEntry"')
  return OrgInviteMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgInviteToBusinessAuditEntry_possibleTypes = ['OrgInviteToBusinessAuditEntry']
export var isOrgInviteToBusinessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgInviteToBusinessAuditEntry"')
  return OrgInviteToBusinessAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgOauthAppAccessApprovedAuditEntry_possibleTypes = ['OrgOauthAppAccessApprovedAuditEntry']
export var isOrgOauthAppAccessApprovedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgOauthAppAccessApprovedAuditEntry"')
  return OrgOauthAppAccessApprovedAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgOauthAppAccessDeniedAuditEntry_possibleTypes = ['OrgOauthAppAccessDeniedAuditEntry']
export var isOrgOauthAppAccessDeniedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgOauthAppAccessDeniedAuditEntry"')
  return OrgOauthAppAccessDeniedAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgOauthAppAccessRequestedAuditEntry_possibleTypes = ['OrgOauthAppAccessRequestedAuditEntry']
export var isOrgOauthAppAccessRequestedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgOauthAppAccessRequestedAuditEntry"')
  return OrgOauthAppAccessRequestedAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgRemoveBillingManagerAuditEntry_possibleTypes = ['OrgRemoveBillingManagerAuditEntry']
export var isOrgRemoveBillingManagerAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRemoveBillingManagerAuditEntry"')
  return OrgRemoveBillingManagerAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgRemoveMemberAuditEntry_possibleTypes = ['OrgRemoveMemberAuditEntry']
export var isOrgRemoveMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRemoveMemberAuditEntry"')
  return OrgRemoveMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgRemoveOutsideCollaboratorAuditEntry_possibleTypes = ['OrgRemoveOutsideCollaboratorAuditEntry']
export var isOrgRemoveOutsideCollaboratorAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRemoveOutsideCollaboratorAuditEntry"')
  return OrgRemoveOutsideCollaboratorAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgRestoreMemberAuditEntry_possibleTypes = ['OrgRestoreMemberAuditEntry']
export var isOrgRestoreMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRestoreMemberAuditEntry"')
  return OrgRestoreMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgRestoreMemberAuditEntryMembership_possibleTypes = ['OrgRestoreMemberMembershipOrganizationAuditEntryData','OrgRestoreMemberMembershipRepositoryAuditEntryData','OrgRestoreMemberMembershipTeamAuditEntryData']
export var isOrgRestoreMemberAuditEntryMembership = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRestoreMemberAuditEntryMembership"')
  return OrgRestoreMemberAuditEntryMembership_possibleTypes.includes(obj.__typename)
}



var OrgRestoreMemberMembershipOrganizationAuditEntryData_possibleTypes = ['OrgRestoreMemberMembershipOrganizationAuditEntryData']
export var isOrgRestoreMemberMembershipOrganizationAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRestoreMemberMembershipOrganizationAuditEntryData"')
  return OrgRestoreMemberMembershipOrganizationAuditEntryData_possibleTypes.includes(obj.__typename)
}



var OrgRestoreMemberMembershipRepositoryAuditEntryData_possibleTypes = ['OrgRestoreMemberMembershipRepositoryAuditEntryData']
export var isOrgRestoreMemberMembershipRepositoryAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRestoreMemberMembershipRepositoryAuditEntryData"')
  return OrgRestoreMemberMembershipRepositoryAuditEntryData_possibleTypes.includes(obj.__typename)
}



var OrgRestoreMemberMembershipTeamAuditEntryData_possibleTypes = ['OrgRestoreMemberMembershipTeamAuditEntryData']
export var isOrgRestoreMemberMembershipTeamAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRestoreMemberMembershipTeamAuditEntryData"')
  return OrgRestoreMemberMembershipTeamAuditEntryData_possibleTypes.includes(obj.__typename)
}



var OrgUnblockUserAuditEntry_possibleTypes = ['OrgUnblockUserAuditEntry']
export var isOrgUnblockUserAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgUnblockUserAuditEntry"')
  return OrgUnblockUserAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgUpdateDefaultRepositoryPermissionAuditEntry_possibleTypes = ['OrgUpdateDefaultRepositoryPermissionAuditEntry']
export var isOrgUpdateDefaultRepositoryPermissionAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgUpdateDefaultRepositoryPermissionAuditEntry"')
  return OrgUpdateDefaultRepositoryPermissionAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgUpdateMemberAuditEntry_possibleTypes = ['OrgUpdateMemberAuditEntry']
export var isOrgUpdateMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgUpdateMemberAuditEntry"')
  return OrgUpdateMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgUpdateMemberRepositoryCreationPermissionAuditEntry_possibleTypes = ['OrgUpdateMemberRepositoryCreationPermissionAuditEntry']
export var isOrgUpdateMemberRepositoryCreationPermissionAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgUpdateMemberRepositoryCreationPermissionAuditEntry"')
  return OrgUpdateMemberRepositoryCreationPermissionAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgUpdateMemberRepositoryInvitationPermissionAuditEntry_possibleTypes = ['OrgUpdateMemberRepositoryInvitationPermissionAuditEntry']
export var isOrgUpdateMemberRepositoryInvitationPermissionAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgUpdateMemberRepositoryInvitationPermissionAuditEntry"')
  return OrgUpdateMemberRepositoryInvitationPermissionAuditEntry_possibleTypes.includes(obj.__typename)
}



var Organization_possibleTypes = ['Organization']
export var isOrganization = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganization"')
  return Organization_possibleTypes.includes(obj.__typename)
}



var OrganizationAuditEntry_possibleTypes = ['MembersCanDeleteReposClearAuditEntry','MembersCanDeleteReposDisableAuditEntry','MembersCanDeleteReposEnableAuditEntry','OauthApplicationCreateAuditEntry','OrgAddBillingManagerAuditEntry','OrgAddMemberAuditEntry','OrgBlockUserAuditEntry','OrgConfigDisableCollaboratorsOnlyAuditEntry','OrgConfigEnableCollaboratorsOnlyAuditEntry','OrgCreateAuditEntry','OrgDisableOauthAppRestrictionsAuditEntry','OrgDisableSamlAuditEntry','OrgDisableTwoFactorRequirementAuditEntry','OrgEnableOauthAppRestrictionsAuditEntry','OrgEnableSamlAuditEntry','OrgEnableTwoFactorRequirementAuditEntry','OrgInviteMemberAuditEntry','OrgInviteToBusinessAuditEntry','OrgOauthAppAccessApprovedAuditEntry','OrgOauthAppAccessDeniedAuditEntry','OrgOauthAppAccessRequestedAuditEntry','OrgRemoveBillingManagerAuditEntry','OrgRemoveMemberAuditEntry','OrgRemoveOutsideCollaboratorAuditEntry','OrgRestoreMemberAuditEntry','OrgUnblockUserAuditEntry','OrgUpdateDefaultRepositoryPermissionAuditEntry','OrgUpdateMemberAuditEntry','OrgUpdateMemberRepositoryCreationPermissionAuditEntry','OrgUpdateMemberRepositoryInvitationPermissionAuditEntry','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','RepoAccessAuditEntry','RepoAddMemberAuditEntry','RepoAddTopicAuditEntry','RepoArchivedAuditEntry','RepoChangeMergeSettingAuditEntry','RepoConfigDisableAnonymousGitAccessAuditEntry','RepoConfigDisableCollaboratorsOnlyAuditEntry','RepoConfigDisableContributorsOnlyAuditEntry','RepoConfigDisableSockpuppetDisallowedAuditEntry','RepoConfigEnableAnonymousGitAccessAuditEntry','RepoConfigEnableCollaboratorsOnlyAuditEntry','RepoConfigEnableContributorsOnlyAuditEntry','RepoConfigEnableSockpuppetDisallowedAuditEntry','RepoConfigLockAnonymousGitAccessAuditEntry','RepoConfigUnlockAnonymousGitAccessAuditEntry','RepoCreateAuditEntry','RepoDestroyAuditEntry','RepoRemoveMemberAuditEntry','RepoRemoveTopicAuditEntry','RepositoryVisibilityChangeDisableAuditEntry','RepositoryVisibilityChangeEnableAuditEntry','TeamAddMemberAuditEntry','TeamAddRepositoryAuditEntry','TeamChangeParentTeamAuditEntry','TeamRemoveMemberAuditEntry','TeamRemoveRepositoryAuditEntry']
export var isOrganizationAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationAuditEntry"')
  return OrganizationAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrganizationAuditEntryConnection_possibleTypes = ['OrganizationAuditEntryConnection']
export var isOrganizationAuditEntryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationAuditEntryConnection"')
  return OrganizationAuditEntryConnection_possibleTypes.includes(obj.__typename)
}



var OrganizationAuditEntryData_possibleTypes = ['MembersCanDeleteReposClearAuditEntry','MembersCanDeleteReposDisableAuditEntry','MembersCanDeleteReposEnableAuditEntry','OauthApplicationCreateAuditEntry','OrgAddBillingManagerAuditEntry','OrgAddMemberAuditEntry','OrgBlockUserAuditEntry','OrgConfigDisableCollaboratorsOnlyAuditEntry','OrgConfigEnableCollaboratorsOnlyAuditEntry','OrgCreateAuditEntry','OrgDisableOauthAppRestrictionsAuditEntry','OrgDisableSamlAuditEntry','OrgDisableTwoFactorRequirementAuditEntry','OrgEnableOauthAppRestrictionsAuditEntry','OrgEnableSamlAuditEntry','OrgEnableTwoFactorRequirementAuditEntry','OrgInviteMemberAuditEntry','OrgInviteToBusinessAuditEntry','OrgOauthAppAccessApprovedAuditEntry','OrgOauthAppAccessDeniedAuditEntry','OrgOauthAppAccessRequestedAuditEntry','OrgRemoveBillingManagerAuditEntry','OrgRemoveMemberAuditEntry','OrgRemoveOutsideCollaboratorAuditEntry','OrgRestoreMemberAuditEntry','OrgRestoreMemberMembershipOrganizationAuditEntryData','OrgUnblockUserAuditEntry','OrgUpdateDefaultRepositoryPermissionAuditEntry','OrgUpdateMemberAuditEntry','OrgUpdateMemberRepositoryCreationPermissionAuditEntry','OrgUpdateMemberRepositoryInvitationPermissionAuditEntry','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','RepoAccessAuditEntry','RepoAddMemberAuditEntry','RepoAddTopicAuditEntry','RepoArchivedAuditEntry','RepoChangeMergeSettingAuditEntry','RepoConfigDisableAnonymousGitAccessAuditEntry','RepoConfigDisableCollaboratorsOnlyAuditEntry','RepoConfigDisableContributorsOnlyAuditEntry','RepoConfigDisableSockpuppetDisallowedAuditEntry','RepoConfigEnableAnonymousGitAccessAuditEntry','RepoConfigEnableCollaboratorsOnlyAuditEntry','RepoConfigEnableContributorsOnlyAuditEntry','RepoConfigEnableSockpuppetDisallowedAuditEntry','RepoConfigLockAnonymousGitAccessAuditEntry','RepoConfigUnlockAnonymousGitAccessAuditEntry','RepoCreateAuditEntry','RepoDestroyAuditEntry','RepoRemoveMemberAuditEntry','RepoRemoveTopicAuditEntry','RepositoryVisibilityChangeDisableAuditEntry','RepositoryVisibilityChangeEnableAuditEntry','TeamAddMemberAuditEntry','TeamAddRepositoryAuditEntry','TeamChangeParentTeamAuditEntry','TeamRemoveMemberAuditEntry','TeamRemoveRepositoryAuditEntry']
export var isOrganizationAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationAuditEntryData"')
  return OrganizationAuditEntryData_possibleTypes.includes(obj.__typename)
}



var OrganizationAuditEntryEdge_possibleTypes = ['OrganizationAuditEntryEdge']
export var isOrganizationAuditEntryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationAuditEntryEdge"')
  return OrganizationAuditEntryEdge_possibleTypes.includes(obj.__typename)
}



var OrganizationConnection_possibleTypes = ['OrganizationConnection']
export var isOrganizationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationConnection"')
  return OrganizationConnection_possibleTypes.includes(obj.__typename)
}



var OrganizationEdge_possibleTypes = ['OrganizationEdge']
export var isOrganizationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationEdge"')
  return OrganizationEdge_possibleTypes.includes(obj.__typename)
}



var OrganizationIdentityProvider_possibleTypes = ['OrganizationIdentityProvider']
export var isOrganizationIdentityProvider = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationIdentityProvider"')
  return OrganizationIdentityProvider_possibleTypes.includes(obj.__typename)
}



var OrganizationInvitation_possibleTypes = ['OrganizationInvitation']
export var isOrganizationInvitation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationInvitation"')
  return OrganizationInvitation_possibleTypes.includes(obj.__typename)
}



var OrganizationInvitationConnection_possibleTypes = ['OrganizationInvitationConnection']
export var isOrganizationInvitationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationInvitationConnection"')
  return OrganizationInvitationConnection_possibleTypes.includes(obj.__typename)
}



var OrganizationInvitationEdge_possibleTypes = ['OrganizationInvitationEdge']
export var isOrganizationInvitationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationInvitationEdge"')
  return OrganizationInvitationEdge_possibleTypes.includes(obj.__typename)
}



var OrganizationMemberConnection_possibleTypes = ['OrganizationMemberConnection']
export var isOrganizationMemberConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationMemberConnection"')
  return OrganizationMemberConnection_possibleTypes.includes(obj.__typename)
}



var OrganizationMemberEdge_possibleTypes = ['OrganizationMemberEdge']
export var isOrganizationMemberEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationMemberEdge"')
  return OrganizationMemberEdge_possibleTypes.includes(obj.__typename)
}



var OrganizationTeamsHovercardContext_possibleTypes = ['OrganizationTeamsHovercardContext']
export var isOrganizationTeamsHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationTeamsHovercardContext"')
  return OrganizationTeamsHovercardContext_possibleTypes.includes(obj.__typename)
}



var OrganizationsHovercardContext_possibleTypes = ['OrganizationsHovercardContext']
export var isOrganizationsHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationsHovercardContext"')
  return OrganizationsHovercardContext_possibleTypes.includes(obj.__typename)
}



var Package_possibleTypes = ['Package']
export var isPackage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackage"')
  return Package_possibleTypes.includes(obj.__typename)
}



var PackageConnection_possibleTypes = ['PackageConnection']
export var isPackageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageConnection"')
  return PackageConnection_possibleTypes.includes(obj.__typename)
}



var PackageEdge_possibleTypes = ['PackageEdge']
export var isPackageEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageEdge"')
  return PackageEdge_possibleTypes.includes(obj.__typename)
}



var PackageFile_possibleTypes = ['PackageFile']
export var isPackageFile = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageFile"')
  return PackageFile_possibleTypes.includes(obj.__typename)
}



var PackageFileConnection_possibleTypes = ['PackageFileConnection']
export var isPackageFileConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageFileConnection"')
  return PackageFileConnection_possibleTypes.includes(obj.__typename)
}



var PackageFileEdge_possibleTypes = ['PackageFileEdge']
export var isPackageFileEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageFileEdge"')
  return PackageFileEdge_possibleTypes.includes(obj.__typename)
}



var PackageOwner_possibleTypes = ['Organization','Repository','User']
export var isPackageOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageOwner"')
  return PackageOwner_possibleTypes.includes(obj.__typename)
}



var PackageStatistics_possibleTypes = ['PackageStatistics']
export var isPackageStatistics = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageStatistics"')
  return PackageStatistics_possibleTypes.includes(obj.__typename)
}



var PackageTag_possibleTypes = ['PackageTag']
export var isPackageTag = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageTag"')
  return PackageTag_possibleTypes.includes(obj.__typename)
}



var PackageVersion_possibleTypes = ['PackageVersion']
export var isPackageVersion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageVersion"')
  return PackageVersion_possibleTypes.includes(obj.__typename)
}



var PackageVersionConnection_possibleTypes = ['PackageVersionConnection']
export var isPackageVersionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageVersionConnection"')
  return PackageVersionConnection_possibleTypes.includes(obj.__typename)
}



var PackageVersionEdge_possibleTypes = ['PackageVersionEdge']
export var isPackageVersionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageVersionEdge"')
  return PackageVersionEdge_possibleTypes.includes(obj.__typename)
}



var PackageVersionStatistics_possibleTypes = ['PackageVersionStatistics']
export var isPackageVersionStatistics = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageVersionStatistics"')
  return PackageVersionStatistics_possibleTypes.includes(obj.__typename)
}



var PageInfo_possibleTypes = ['PageInfo']
export var isPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageInfo"')
  return PageInfo_possibleTypes.includes(obj.__typename)
}



var PermissionGranter_possibleTypes = ['Organization','Repository','Team']
export var isPermissionGranter = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPermissionGranter"')
  return PermissionGranter_possibleTypes.includes(obj.__typename)
}



var PermissionSource_possibleTypes = ['PermissionSource']
export var isPermissionSource = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPermissionSource"')
  return PermissionSource_possibleTypes.includes(obj.__typename)
}



var PinIssuePayload_possibleTypes = ['PinIssuePayload']
export var isPinIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinIssuePayload"')
  return PinIssuePayload_possibleTypes.includes(obj.__typename)
}



var PinnableItem_possibleTypes = ['Gist','Repository']
export var isPinnableItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnableItem"')
  return PinnableItem_possibleTypes.includes(obj.__typename)
}



var PinnableItemConnection_possibleTypes = ['PinnableItemConnection']
export var isPinnableItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnableItemConnection"')
  return PinnableItemConnection_possibleTypes.includes(obj.__typename)
}



var PinnableItemEdge_possibleTypes = ['PinnableItemEdge']
export var isPinnableItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnableItemEdge"')
  return PinnableItemEdge_possibleTypes.includes(obj.__typename)
}



var PinnedEvent_possibleTypes = ['PinnedEvent']
export var isPinnedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnedEvent"')
  return PinnedEvent_possibleTypes.includes(obj.__typename)
}



var PinnedIssue_possibleTypes = ['PinnedIssue']
export var isPinnedIssue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnedIssue"')
  return PinnedIssue_possibleTypes.includes(obj.__typename)
}



var PinnedIssueConnection_possibleTypes = ['PinnedIssueConnection']
export var isPinnedIssueConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnedIssueConnection"')
  return PinnedIssueConnection_possibleTypes.includes(obj.__typename)
}



var PinnedIssueEdge_possibleTypes = ['PinnedIssueEdge']
export var isPinnedIssueEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnedIssueEdge"')
  return PinnedIssueEdge_possibleTypes.includes(obj.__typename)
}



var PrivateRepositoryForkingDisableAuditEntry_possibleTypes = ['PrivateRepositoryForkingDisableAuditEntry']
export var isPrivateRepositoryForkingDisableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPrivateRepositoryForkingDisableAuditEntry"')
  return PrivateRepositoryForkingDisableAuditEntry_possibleTypes.includes(obj.__typename)
}



var PrivateRepositoryForkingEnableAuditEntry_possibleTypes = ['PrivateRepositoryForkingEnableAuditEntry']
export var isPrivateRepositoryForkingEnableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPrivateRepositoryForkingEnableAuditEntry"')
  return PrivateRepositoryForkingEnableAuditEntry_possibleTypes.includes(obj.__typename)
}



var ProfileItemShowcase_possibleTypes = ['ProfileItemShowcase']
export var isProfileItemShowcase = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProfileItemShowcase"')
  return ProfileItemShowcase_possibleTypes.includes(obj.__typename)
}



var ProfileOwner_possibleTypes = ['Organization','User']
export var isProfileOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProfileOwner"')
  return ProfileOwner_possibleTypes.includes(obj.__typename)
}



var Project_possibleTypes = ['Project']
export var isProject = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProject"')
  return Project_possibleTypes.includes(obj.__typename)
}



var ProjectCard_possibleTypes = ['ProjectCard']
export var isProjectCard = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectCard"')
  return ProjectCard_possibleTypes.includes(obj.__typename)
}



var ProjectCardConnection_possibleTypes = ['ProjectCardConnection']
export var isProjectCardConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectCardConnection"')
  return ProjectCardConnection_possibleTypes.includes(obj.__typename)
}



var ProjectCardEdge_possibleTypes = ['ProjectCardEdge']
export var isProjectCardEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectCardEdge"')
  return ProjectCardEdge_possibleTypes.includes(obj.__typename)
}



var ProjectCardItem_possibleTypes = ['Issue','PullRequest']
export var isProjectCardItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectCardItem"')
  return ProjectCardItem_possibleTypes.includes(obj.__typename)
}



var ProjectColumn_possibleTypes = ['ProjectColumn']
export var isProjectColumn = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectColumn"')
  return ProjectColumn_possibleTypes.includes(obj.__typename)
}



var ProjectColumnConnection_possibleTypes = ['ProjectColumnConnection']
export var isProjectColumnConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectColumnConnection"')
  return ProjectColumnConnection_possibleTypes.includes(obj.__typename)
}



var ProjectColumnEdge_possibleTypes = ['ProjectColumnEdge']
export var isProjectColumnEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectColumnEdge"')
  return ProjectColumnEdge_possibleTypes.includes(obj.__typename)
}



var ProjectConnection_possibleTypes = ['ProjectConnection']
export var isProjectConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectConnection"')
  return ProjectConnection_possibleTypes.includes(obj.__typename)
}



var ProjectEdge_possibleTypes = ['ProjectEdge']
export var isProjectEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectEdge"')
  return ProjectEdge_possibleTypes.includes(obj.__typename)
}



var ProjectOwner_possibleTypes = ['Organization','Repository','User']
export var isProjectOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectOwner"')
  return ProjectOwner_possibleTypes.includes(obj.__typename)
}



var PublicKey_possibleTypes = ['PublicKey']
export var isPublicKey = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPublicKey"')
  return PublicKey_possibleTypes.includes(obj.__typename)
}



var PublicKeyConnection_possibleTypes = ['PublicKeyConnection']
export var isPublicKeyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPublicKeyConnection"')
  return PublicKeyConnection_possibleTypes.includes(obj.__typename)
}



var PublicKeyEdge_possibleTypes = ['PublicKeyEdge']
export var isPublicKeyEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPublicKeyEdge"')
  return PublicKeyEdge_possibleTypes.includes(obj.__typename)
}



var PullRequest_possibleTypes = ['PullRequest']
export var isPullRequest = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequest"')
  return PullRequest_possibleTypes.includes(obj.__typename)
}



var PullRequestChangedFile_possibleTypes = ['PullRequestChangedFile']
export var isPullRequestChangedFile = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestChangedFile"')
  return PullRequestChangedFile_possibleTypes.includes(obj.__typename)
}



var PullRequestChangedFileConnection_possibleTypes = ['PullRequestChangedFileConnection']
export var isPullRequestChangedFileConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestChangedFileConnection"')
  return PullRequestChangedFileConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestChangedFileEdge_possibleTypes = ['PullRequestChangedFileEdge']
export var isPullRequestChangedFileEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestChangedFileEdge"')
  return PullRequestChangedFileEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestCommit_possibleTypes = ['PullRequestCommit']
export var isPullRequestCommit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestCommit"')
  return PullRequestCommit_possibleTypes.includes(obj.__typename)
}



var PullRequestCommitCommentThread_possibleTypes = ['PullRequestCommitCommentThread']
export var isPullRequestCommitCommentThread = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestCommitCommentThread"')
  return PullRequestCommitCommentThread_possibleTypes.includes(obj.__typename)
}



var PullRequestCommitConnection_possibleTypes = ['PullRequestCommitConnection']
export var isPullRequestCommitConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestCommitConnection"')
  return PullRequestCommitConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestCommitEdge_possibleTypes = ['PullRequestCommitEdge']
export var isPullRequestCommitEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestCommitEdge"')
  return PullRequestCommitEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestConnection_possibleTypes = ['PullRequestConnection']
export var isPullRequestConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestConnection"')
  return PullRequestConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestContributionsByRepository_possibleTypes = ['PullRequestContributionsByRepository']
export var isPullRequestContributionsByRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestContributionsByRepository"')
  return PullRequestContributionsByRepository_possibleTypes.includes(obj.__typename)
}



var PullRequestEdge_possibleTypes = ['PullRequestEdge']
export var isPullRequestEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestEdge"')
  return PullRequestEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestReview_possibleTypes = ['PullRequestReview']
export var isPullRequestReview = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReview"')
  return PullRequestReview_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewComment_possibleTypes = ['PullRequestReviewComment']
export var isPullRequestReviewComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewComment"')
  return PullRequestReviewComment_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewCommentConnection_possibleTypes = ['PullRequestReviewCommentConnection']
export var isPullRequestReviewCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewCommentConnection"')
  return PullRequestReviewCommentConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewCommentEdge_possibleTypes = ['PullRequestReviewCommentEdge']
export var isPullRequestReviewCommentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewCommentEdge"')
  return PullRequestReviewCommentEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewConnection_possibleTypes = ['PullRequestReviewConnection']
export var isPullRequestReviewConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewConnection"')
  return PullRequestReviewConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewContributionsByRepository_possibleTypes = ['PullRequestReviewContributionsByRepository']
export var isPullRequestReviewContributionsByRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewContributionsByRepository"')
  return PullRequestReviewContributionsByRepository_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewEdge_possibleTypes = ['PullRequestReviewEdge']
export var isPullRequestReviewEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewEdge"')
  return PullRequestReviewEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewThread_possibleTypes = ['PullRequestReviewThread']
export var isPullRequestReviewThread = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewThread"')
  return PullRequestReviewThread_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewThreadConnection_possibleTypes = ['PullRequestReviewThreadConnection']
export var isPullRequestReviewThreadConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewThreadConnection"')
  return PullRequestReviewThreadConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewThreadEdge_possibleTypes = ['PullRequestReviewThreadEdge']
export var isPullRequestReviewThreadEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewThreadEdge"')
  return PullRequestReviewThreadEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestRevisionMarker_possibleTypes = ['PullRequestRevisionMarker']
export var isPullRequestRevisionMarker = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestRevisionMarker"')
  return PullRequestRevisionMarker_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineConnection_possibleTypes = ['PullRequestTimelineConnection']
export var isPullRequestTimelineConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineConnection"')
  return PullRequestTimelineConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineItem_possibleTypes = ['AssignedEvent','BaseRefForcePushedEvent','ClosedEvent','Commit','CommitCommentThread','CrossReferencedEvent','DemilestonedEvent','DeployedEvent','DeploymentEnvironmentChangedEvent','HeadRefDeletedEvent','HeadRefForcePushedEvent','HeadRefRestoredEvent','IssueComment','LabeledEvent','LockedEvent','MergedEvent','MilestonedEvent','PullRequestReview','PullRequestReviewComment','PullRequestReviewThread','ReferencedEvent','RenamedTitleEvent','ReopenedEvent','ReviewDismissedEvent','ReviewRequestRemovedEvent','ReviewRequestedEvent','SubscribedEvent','UnassignedEvent','UnlabeledEvent','UnlockedEvent','UnsubscribedEvent','UserBlockedEvent']
export var isPullRequestTimelineItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineItem"')
  return PullRequestTimelineItem_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineItemEdge_possibleTypes = ['PullRequestTimelineItemEdge']
export var isPullRequestTimelineItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineItemEdge"')
  return PullRequestTimelineItemEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineItems_possibleTypes = ['AddedToProjectEvent','AssignedEvent','AutomaticBaseChangeFailedEvent','AutomaticBaseChangeSucceededEvent','BaseRefChangedEvent','BaseRefForcePushedEvent','ClosedEvent','CommentDeletedEvent','ConnectedEvent','ConvertToDraftEvent','ConvertedNoteToIssueEvent','CrossReferencedEvent','DemilestonedEvent','DeployedEvent','DeploymentEnvironmentChangedEvent','DisconnectedEvent','HeadRefDeletedEvent','HeadRefForcePushedEvent','HeadRefRestoredEvent','IssueComment','LabeledEvent','LockedEvent','MarkedAsDuplicateEvent','MentionedEvent','MergedEvent','MilestonedEvent','MovedColumnsInProjectEvent','PinnedEvent','PullRequestCommit','PullRequestCommitCommentThread','PullRequestReview','PullRequestReviewThread','PullRequestRevisionMarker','ReadyForReviewEvent','ReferencedEvent','RemovedFromProjectEvent','RenamedTitleEvent','ReopenedEvent','ReviewDismissedEvent','ReviewRequestRemovedEvent','ReviewRequestedEvent','SubscribedEvent','TransferredEvent','UnassignedEvent','UnlabeledEvent','UnlockedEvent','UnmarkedAsDuplicateEvent','UnpinnedEvent','UnsubscribedEvent','UserBlockedEvent']
export var isPullRequestTimelineItems = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineItems"')
  return PullRequestTimelineItems_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineItemsConnection_possibleTypes = ['PullRequestTimelineItemsConnection']
export var isPullRequestTimelineItemsConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineItemsConnection"')
  return PullRequestTimelineItemsConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineItemsEdge_possibleTypes = ['PullRequestTimelineItemsEdge']
export var isPullRequestTimelineItemsEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineItemsEdge"')
  return PullRequestTimelineItemsEdge_possibleTypes.includes(obj.__typename)
}



var Push_possibleTypes = ['Push']
export var isPush = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPush"')
  return Push_possibleTypes.includes(obj.__typename)
}



var PushAllowance_possibleTypes = ['PushAllowance']
export var isPushAllowance = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPushAllowance"')
  return PushAllowance_possibleTypes.includes(obj.__typename)
}



var PushAllowanceActor_possibleTypes = ['App','Team','User']
export var isPushAllowanceActor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPushAllowanceActor"')
  return PushAllowanceActor_possibleTypes.includes(obj.__typename)
}



var PushAllowanceConnection_possibleTypes = ['PushAllowanceConnection']
export var isPushAllowanceConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPushAllowanceConnection"')
  return PushAllowanceConnection_possibleTypes.includes(obj.__typename)
}



var PushAllowanceEdge_possibleTypes = ['PushAllowanceEdge']
export var isPushAllowanceEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPushAllowanceEdge"')
  return PushAllowanceEdge_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var RateLimit_possibleTypes = ['RateLimit']
export var isRateLimit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRateLimit"')
  return RateLimit_possibleTypes.includes(obj.__typename)
}



var Reactable_possibleTypes = ['CommitComment','Issue','IssueComment','PullRequest','PullRequestReview','PullRequestReviewComment','TeamDiscussion','TeamDiscussionComment']
export var isReactable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactable"')
  return Reactable_possibleTypes.includes(obj.__typename)
}



var ReactingUserConnection_possibleTypes = ['ReactingUserConnection']
export var isReactingUserConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactingUserConnection"')
  return ReactingUserConnection_possibleTypes.includes(obj.__typename)
}



var ReactingUserEdge_possibleTypes = ['ReactingUserEdge']
export var isReactingUserEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactingUserEdge"')
  return ReactingUserEdge_possibleTypes.includes(obj.__typename)
}



var Reaction_possibleTypes = ['Reaction']
export var isReaction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReaction"')
  return Reaction_possibleTypes.includes(obj.__typename)
}



var ReactionConnection_possibleTypes = ['ReactionConnection']
export var isReactionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactionConnection"')
  return ReactionConnection_possibleTypes.includes(obj.__typename)
}



var ReactionEdge_possibleTypes = ['ReactionEdge']
export var isReactionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactionEdge"')
  return ReactionEdge_possibleTypes.includes(obj.__typename)
}



var ReactionGroup_possibleTypes = ['ReactionGroup']
export var isReactionGroup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactionGroup"')
  return ReactionGroup_possibleTypes.includes(obj.__typename)
}



var ReadyForReviewEvent_possibleTypes = ['ReadyForReviewEvent']
export var isReadyForReviewEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReadyForReviewEvent"')
  return ReadyForReviewEvent_possibleTypes.includes(obj.__typename)
}



var Ref_possibleTypes = ['Ref']
export var isRef = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRef"')
  return Ref_possibleTypes.includes(obj.__typename)
}



var RefConnection_possibleTypes = ['RefConnection']
export var isRefConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRefConnection"')
  return RefConnection_possibleTypes.includes(obj.__typename)
}



var RefEdge_possibleTypes = ['RefEdge']
export var isRefEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRefEdge"')
  return RefEdge_possibleTypes.includes(obj.__typename)
}



var ReferencedEvent_possibleTypes = ['ReferencedEvent']
export var isReferencedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReferencedEvent"')
  return ReferencedEvent_possibleTypes.includes(obj.__typename)
}



var ReferencedSubject_possibleTypes = ['Issue','PullRequest']
export var isReferencedSubject = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReferencedSubject"')
  return ReferencedSubject_possibleTypes.includes(obj.__typename)
}



var RegenerateEnterpriseIdentityProviderRecoveryCodesPayload_possibleTypes = ['RegenerateEnterpriseIdentityProviderRecoveryCodesPayload']
export var isRegenerateEnterpriseIdentityProviderRecoveryCodesPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegenerateEnterpriseIdentityProviderRecoveryCodesPayload"')
  return RegenerateEnterpriseIdentityProviderRecoveryCodesPayload_possibleTypes.includes(obj.__typename)
}



var RegistryPackage_possibleTypes = ['RegistryPackage']
export var isRegistryPackage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackage"')
  return RegistryPackage_possibleTypes.includes(obj.__typename)
}



var RegistryPackageConnection_possibleTypes = ['RegistryPackageConnection']
export var isRegistryPackageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageConnection"')
  return RegistryPackageConnection_possibleTypes.includes(obj.__typename)
}



var RegistryPackageDependency_possibleTypes = ['RegistryPackageDependency']
export var isRegistryPackageDependency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageDependency"')
  return RegistryPackageDependency_possibleTypes.includes(obj.__typename)
}



var RegistryPackageDependencyConnection_possibleTypes = ['RegistryPackageDependencyConnection']
export var isRegistryPackageDependencyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageDependencyConnection"')
  return RegistryPackageDependencyConnection_possibleTypes.includes(obj.__typename)
}



var RegistryPackageDependencyEdge_possibleTypes = ['RegistryPackageDependencyEdge']
export var isRegistryPackageDependencyEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageDependencyEdge"')
  return RegistryPackageDependencyEdge_possibleTypes.includes(obj.__typename)
}



var RegistryPackageEdge_possibleTypes = ['RegistryPackageEdge']
export var isRegistryPackageEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageEdge"')
  return RegistryPackageEdge_possibleTypes.includes(obj.__typename)
}



var RegistryPackageFile_possibleTypes = ['RegistryPackageFile']
export var isRegistryPackageFile = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageFile"')
  return RegistryPackageFile_possibleTypes.includes(obj.__typename)
}



var RegistryPackageFileConnection_possibleTypes = ['RegistryPackageFileConnection']
export var isRegistryPackageFileConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageFileConnection"')
  return RegistryPackageFileConnection_possibleTypes.includes(obj.__typename)
}



var RegistryPackageFileEdge_possibleTypes = ['RegistryPackageFileEdge']
export var isRegistryPackageFileEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageFileEdge"')
  return RegistryPackageFileEdge_possibleTypes.includes(obj.__typename)
}



var RegistryPackageOwner_possibleTypes = ['Organization','Repository','User']
export var isRegistryPackageOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageOwner"')
  return RegistryPackageOwner_possibleTypes.includes(obj.__typename)
}



var RegistryPackageSearch_possibleTypes = ['Organization','Repository','User']
export var isRegistryPackageSearch = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageSearch"')
  return RegistryPackageSearch_possibleTypes.includes(obj.__typename)
}



var RegistryPackageStatistics_possibleTypes = ['RegistryPackageStatistics']
export var isRegistryPackageStatistics = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageStatistics"')
  return RegistryPackageStatistics_possibleTypes.includes(obj.__typename)
}



var RegistryPackageTag_possibleTypes = ['RegistryPackageTag']
export var isRegistryPackageTag = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageTag"')
  return RegistryPackageTag_possibleTypes.includes(obj.__typename)
}



var RegistryPackageTagConnection_possibleTypes = ['RegistryPackageTagConnection']
export var isRegistryPackageTagConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageTagConnection"')
  return RegistryPackageTagConnection_possibleTypes.includes(obj.__typename)
}



var RegistryPackageTagEdge_possibleTypes = ['RegistryPackageTagEdge']
export var isRegistryPackageTagEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageTagEdge"')
  return RegistryPackageTagEdge_possibleTypes.includes(obj.__typename)
}



var RegistryPackageVersion_possibleTypes = ['RegistryPackageVersion']
export var isRegistryPackageVersion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageVersion"')
  return RegistryPackageVersion_possibleTypes.includes(obj.__typename)
}



var RegistryPackageVersionConnection_possibleTypes = ['RegistryPackageVersionConnection']
export var isRegistryPackageVersionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageVersionConnection"')
  return RegistryPackageVersionConnection_possibleTypes.includes(obj.__typename)
}



var RegistryPackageVersionEdge_possibleTypes = ['RegistryPackageVersionEdge']
export var isRegistryPackageVersionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageVersionEdge"')
  return RegistryPackageVersionEdge_possibleTypes.includes(obj.__typename)
}



var RegistryPackageVersionStatistics_possibleTypes = ['RegistryPackageVersionStatistics']
export var isRegistryPackageVersionStatistics = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageVersionStatistics"')
  return RegistryPackageVersionStatistics_possibleTypes.includes(obj.__typename)
}



var Release_possibleTypes = ['Release']
export var isRelease = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRelease"')
  return Release_possibleTypes.includes(obj.__typename)
}



var ReleaseAsset_possibleTypes = ['ReleaseAsset']
export var isReleaseAsset = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseAsset"')
  return ReleaseAsset_possibleTypes.includes(obj.__typename)
}



var ReleaseAssetConnection_possibleTypes = ['ReleaseAssetConnection']
export var isReleaseAssetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseAssetConnection"')
  return ReleaseAssetConnection_possibleTypes.includes(obj.__typename)
}



var ReleaseAssetEdge_possibleTypes = ['ReleaseAssetEdge']
export var isReleaseAssetEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseAssetEdge"')
  return ReleaseAssetEdge_possibleTypes.includes(obj.__typename)
}



var ReleaseConnection_possibleTypes = ['ReleaseConnection']
export var isReleaseConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseConnection"')
  return ReleaseConnection_possibleTypes.includes(obj.__typename)
}



var ReleaseEdge_possibleTypes = ['ReleaseEdge']
export var isReleaseEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseEdge"')
  return ReleaseEdge_possibleTypes.includes(obj.__typename)
}



var RemoveAssigneesFromAssignablePayload_possibleTypes = ['RemoveAssigneesFromAssignablePayload']
export var isRemoveAssigneesFromAssignablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveAssigneesFromAssignablePayload"')
  return RemoveAssigneesFromAssignablePayload_possibleTypes.includes(obj.__typename)
}



var RemoveEnterpriseAdminPayload_possibleTypes = ['RemoveEnterpriseAdminPayload']
export var isRemoveEnterpriseAdminPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveEnterpriseAdminPayload"')
  return RemoveEnterpriseAdminPayload_possibleTypes.includes(obj.__typename)
}



var RemoveEnterpriseIdentityProviderPayload_possibleTypes = ['RemoveEnterpriseIdentityProviderPayload']
export var isRemoveEnterpriseIdentityProviderPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveEnterpriseIdentityProviderPayload"')
  return RemoveEnterpriseIdentityProviderPayload_possibleTypes.includes(obj.__typename)
}



var RemoveEnterpriseOrganizationPayload_possibleTypes = ['RemoveEnterpriseOrganizationPayload']
export var isRemoveEnterpriseOrganizationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveEnterpriseOrganizationPayload"')
  return RemoveEnterpriseOrganizationPayload_possibleTypes.includes(obj.__typename)
}



var RemoveLabelsFromLabelablePayload_possibleTypes = ['RemoveLabelsFromLabelablePayload']
export var isRemoveLabelsFromLabelablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveLabelsFromLabelablePayload"')
  return RemoveLabelsFromLabelablePayload_possibleTypes.includes(obj.__typename)
}



var RemoveOutsideCollaboratorPayload_possibleTypes = ['RemoveOutsideCollaboratorPayload']
export var isRemoveOutsideCollaboratorPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveOutsideCollaboratorPayload"')
  return RemoveOutsideCollaboratorPayload_possibleTypes.includes(obj.__typename)
}



var RemoveReactionPayload_possibleTypes = ['RemoveReactionPayload']
export var isRemoveReactionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveReactionPayload"')
  return RemoveReactionPayload_possibleTypes.includes(obj.__typename)
}



var RemoveStarPayload_possibleTypes = ['RemoveStarPayload']
export var isRemoveStarPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveStarPayload"')
  return RemoveStarPayload_possibleTypes.includes(obj.__typename)
}



var RemovedFromProjectEvent_possibleTypes = ['RemovedFromProjectEvent']
export var isRemovedFromProjectEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemovedFromProjectEvent"')
  return RemovedFromProjectEvent_possibleTypes.includes(obj.__typename)
}



var RenamedTitleEvent_possibleTypes = ['RenamedTitleEvent']
export var isRenamedTitleEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRenamedTitleEvent"')
  return RenamedTitleEvent_possibleTypes.includes(obj.__typename)
}



var RenamedTitleSubject_possibleTypes = ['Issue','PullRequest']
export var isRenamedTitleSubject = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRenamedTitleSubject"')
  return RenamedTitleSubject_possibleTypes.includes(obj.__typename)
}



var ReopenIssuePayload_possibleTypes = ['ReopenIssuePayload']
export var isReopenIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReopenIssuePayload"')
  return ReopenIssuePayload_possibleTypes.includes(obj.__typename)
}



var ReopenPullRequestPayload_possibleTypes = ['ReopenPullRequestPayload']
export var isReopenPullRequestPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReopenPullRequestPayload"')
  return ReopenPullRequestPayload_possibleTypes.includes(obj.__typename)
}



var ReopenedEvent_possibleTypes = ['ReopenedEvent']
export var isReopenedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReopenedEvent"')
  return ReopenedEvent_possibleTypes.includes(obj.__typename)
}



var RepoAccessAuditEntry_possibleTypes = ['RepoAccessAuditEntry']
export var isRepoAccessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoAccessAuditEntry"')
  return RepoAccessAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoAddMemberAuditEntry_possibleTypes = ['RepoAddMemberAuditEntry']
export var isRepoAddMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoAddMemberAuditEntry"')
  return RepoAddMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoAddTopicAuditEntry_possibleTypes = ['RepoAddTopicAuditEntry']
export var isRepoAddTopicAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoAddTopicAuditEntry"')
  return RepoAddTopicAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoArchivedAuditEntry_possibleTypes = ['RepoArchivedAuditEntry']
export var isRepoArchivedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoArchivedAuditEntry"')
  return RepoArchivedAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoChangeMergeSettingAuditEntry_possibleTypes = ['RepoChangeMergeSettingAuditEntry']
export var isRepoChangeMergeSettingAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoChangeMergeSettingAuditEntry"')
  return RepoChangeMergeSettingAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigDisableAnonymousGitAccessAuditEntry_possibleTypes = ['RepoConfigDisableAnonymousGitAccessAuditEntry']
export var isRepoConfigDisableAnonymousGitAccessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigDisableAnonymousGitAccessAuditEntry"')
  return RepoConfigDisableAnonymousGitAccessAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigDisableCollaboratorsOnlyAuditEntry_possibleTypes = ['RepoConfigDisableCollaboratorsOnlyAuditEntry']
export var isRepoConfigDisableCollaboratorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigDisableCollaboratorsOnlyAuditEntry"')
  return RepoConfigDisableCollaboratorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigDisableContributorsOnlyAuditEntry_possibleTypes = ['RepoConfigDisableContributorsOnlyAuditEntry']
export var isRepoConfigDisableContributorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigDisableContributorsOnlyAuditEntry"')
  return RepoConfigDisableContributorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigDisableSockpuppetDisallowedAuditEntry_possibleTypes = ['RepoConfigDisableSockpuppetDisallowedAuditEntry']
export var isRepoConfigDisableSockpuppetDisallowedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigDisableSockpuppetDisallowedAuditEntry"')
  return RepoConfigDisableSockpuppetDisallowedAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigEnableAnonymousGitAccessAuditEntry_possibleTypes = ['RepoConfigEnableAnonymousGitAccessAuditEntry']
export var isRepoConfigEnableAnonymousGitAccessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigEnableAnonymousGitAccessAuditEntry"')
  return RepoConfigEnableAnonymousGitAccessAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigEnableCollaboratorsOnlyAuditEntry_possibleTypes = ['RepoConfigEnableCollaboratorsOnlyAuditEntry']
export var isRepoConfigEnableCollaboratorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigEnableCollaboratorsOnlyAuditEntry"')
  return RepoConfigEnableCollaboratorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigEnableContributorsOnlyAuditEntry_possibleTypes = ['RepoConfigEnableContributorsOnlyAuditEntry']
export var isRepoConfigEnableContributorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigEnableContributorsOnlyAuditEntry"')
  return RepoConfigEnableContributorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigEnableSockpuppetDisallowedAuditEntry_possibleTypes = ['RepoConfigEnableSockpuppetDisallowedAuditEntry']
export var isRepoConfigEnableSockpuppetDisallowedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigEnableSockpuppetDisallowedAuditEntry"')
  return RepoConfigEnableSockpuppetDisallowedAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigLockAnonymousGitAccessAuditEntry_possibleTypes = ['RepoConfigLockAnonymousGitAccessAuditEntry']
export var isRepoConfigLockAnonymousGitAccessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigLockAnonymousGitAccessAuditEntry"')
  return RepoConfigLockAnonymousGitAccessAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigUnlockAnonymousGitAccessAuditEntry_possibleTypes = ['RepoConfigUnlockAnonymousGitAccessAuditEntry']
export var isRepoConfigUnlockAnonymousGitAccessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigUnlockAnonymousGitAccessAuditEntry"')
  return RepoConfigUnlockAnonymousGitAccessAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoCreateAuditEntry_possibleTypes = ['RepoCreateAuditEntry']
export var isRepoCreateAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoCreateAuditEntry"')
  return RepoCreateAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoDestroyAuditEntry_possibleTypes = ['RepoDestroyAuditEntry']
export var isRepoDestroyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoDestroyAuditEntry"')
  return RepoDestroyAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoRemoveMemberAuditEntry_possibleTypes = ['RepoRemoveMemberAuditEntry']
export var isRepoRemoveMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoRemoveMemberAuditEntry"')
  return RepoRemoveMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoRemoveTopicAuditEntry_possibleTypes = ['RepoRemoveTopicAuditEntry']
export var isRepoRemoveTopicAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoRemoveTopicAuditEntry"')
  return RepoRemoveTopicAuditEntry_possibleTypes.includes(obj.__typename)
}



var Repository_possibleTypes = ['Repository']
export var isRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepository"')
  return Repository_possibleTypes.includes(obj.__typename)
}



var RepositoryAuditEntryData_possibleTypes = ['OrgRestoreMemberMembershipRepositoryAuditEntryData','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','RepoAccessAuditEntry','RepoAddMemberAuditEntry','RepoAddTopicAuditEntry','RepoArchivedAuditEntry','RepoChangeMergeSettingAuditEntry','RepoConfigDisableAnonymousGitAccessAuditEntry','RepoConfigDisableCollaboratorsOnlyAuditEntry','RepoConfigDisableContributorsOnlyAuditEntry','RepoConfigDisableSockpuppetDisallowedAuditEntry','RepoConfigEnableAnonymousGitAccessAuditEntry','RepoConfigEnableCollaboratorsOnlyAuditEntry','RepoConfigEnableContributorsOnlyAuditEntry','RepoConfigEnableSockpuppetDisallowedAuditEntry','RepoConfigLockAnonymousGitAccessAuditEntry','RepoConfigUnlockAnonymousGitAccessAuditEntry','RepoCreateAuditEntry','RepoDestroyAuditEntry','RepoRemoveMemberAuditEntry','RepoRemoveTopicAuditEntry','TeamAddRepositoryAuditEntry','TeamRemoveRepositoryAuditEntry']
export var isRepositoryAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryAuditEntryData"')
  return RepositoryAuditEntryData_possibleTypes.includes(obj.__typename)
}



var RepositoryCollaboratorConnection_possibleTypes = ['RepositoryCollaboratorConnection']
export var isRepositoryCollaboratorConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryCollaboratorConnection"')
  return RepositoryCollaboratorConnection_possibleTypes.includes(obj.__typename)
}



var RepositoryCollaboratorEdge_possibleTypes = ['RepositoryCollaboratorEdge']
export var isRepositoryCollaboratorEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryCollaboratorEdge"')
  return RepositoryCollaboratorEdge_possibleTypes.includes(obj.__typename)
}



var RepositoryConnection_possibleTypes = ['RepositoryConnection']
export var isRepositoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryConnection"')
  return RepositoryConnection_possibleTypes.includes(obj.__typename)
}



var RepositoryEdge_possibleTypes = ['RepositoryEdge']
export var isRepositoryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryEdge"')
  return RepositoryEdge_possibleTypes.includes(obj.__typename)
}



var RepositoryInfo_possibleTypes = ['Repository']
export var isRepositoryInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryInfo"')
  return RepositoryInfo_possibleTypes.includes(obj.__typename)
}



var RepositoryInvitation_possibleTypes = ['RepositoryInvitation']
export var isRepositoryInvitation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryInvitation"')
  return RepositoryInvitation_possibleTypes.includes(obj.__typename)
}



var RepositoryInvitationConnection_possibleTypes = ['RepositoryInvitationConnection']
export var isRepositoryInvitationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryInvitationConnection"')
  return RepositoryInvitationConnection_possibleTypes.includes(obj.__typename)
}



var RepositoryInvitationEdge_possibleTypes = ['RepositoryInvitationEdge']
export var isRepositoryInvitationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryInvitationEdge"')
  return RepositoryInvitationEdge_possibleTypes.includes(obj.__typename)
}



var RepositoryNode_possibleTypes = ['CommitComment','CommitCommentThread','Issue','IssueComment','PullRequest','PullRequestCommitCommentThread','PullRequestReview','PullRequestReviewComment','RepositoryVulnerabilityAlert']
export var isRepositoryNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryNode"')
  return RepositoryNode_possibleTypes.includes(obj.__typename)
}



var RepositoryOwner_possibleTypes = ['Organization','User']
export var isRepositoryOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryOwner"')
  return RepositoryOwner_possibleTypes.includes(obj.__typename)
}



var RepositoryTopic_possibleTypes = ['RepositoryTopic']
export var isRepositoryTopic = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryTopic"')
  return RepositoryTopic_possibleTypes.includes(obj.__typename)
}



var RepositoryTopicConnection_possibleTypes = ['RepositoryTopicConnection']
export var isRepositoryTopicConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryTopicConnection"')
  return RepositoryTopicConnection_possibleTypes.includes(obj.__typename)
}



var RepositoryTopicEdge_possibleTypes = ['RepositoryTopicEdge']
export var isRepositoryTopicEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryTopicEdge"')
  return RepositoryTopicEdge_possibleTypes.includes(obj.__typename)
}



var RepositoryVisibilityChangeDisableAuditEntry_possibleTypes = ['RepositoryVisibilityChangeDisableAuditEntry']
export var isRepositoryVisibilityChangeDisableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryVisibilityChangeDisableAuditEntry"')
  return RepositoryVisibilityChangeDisableAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepositoryVisibilityChangeEnableAuditEntry_possibleTypes = ['RepositoryVisibilityChangeEnableAuditEntry']
export var isRepositoryVisibilityChangeEnableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryVisibilityChangeEnableAuditEntry"')
  return RepositoryVisibilityChangeEnableAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepositoryVulnerabilityAlert_possibleTypes = ['RepositoryVulnerabilityAlert']
export var isRepositoryVulnerabilityAlert = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryVulnerabilityAlert"')
  return RepositoryVulnerabilityAlert_possibleTypes.includes(obj.__typename)
}



var RepositoryVulnerabilityAlertConnection_possibleTypes = ['RepositoryVulnerabilityAlertConnection']
export var isRepositoryVulnerabilityAlertConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryVulnerabilityAlertConnection"')
  return RepositoryVulnerabilityAlertConnection_possibleTypes.includes(obj.__typename)
}



var RepositoryVulnerabilityAlertEdge_possibleTypes = ['RepositoryVulnerabilityAlertEdge']
export var isRepositoryVulnerabilityAlertEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryVulnerabilityAlertEdge"')
  return RepositoryVulnerabilityAlertEdge_possibleTypes.includes(obj.__typename)
}



var RequestReviewsPayload_possibleTypes = ['RequestReviewsPayload']
export var isRequestReviewsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRequestReviewsPayload"')
  return RequestReviewsPayload_possibleTypes.includes(obj.__typename)
}



var RequestedReviewer_possibleTypes = ['Mannequin','Team','User']
export var isRequestedReviewer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRequestedReviewer"')
  return RequestedReviewer_possibleTypes.includes(obj.__typename)
}



var RerequestCheckSuitePayload_possibleTypes = ['RerequestCheckSuitePayload']
export var isRerequestCheckSuitePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRerequestCheckSuitePayload"')
  return RerequestCheckSuitePayload_possibleTypes.includes(obj.__typename)
}



var ResolveReviewThreadPayload_possibleTypes = ['ResolveReviewThreadPayload']
export var isResolveReviewThreadPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isResolveReviewThreadPayload"')
  return ResolveReviewThreadPayload_possibleTypes.includes(obj.__typename)
}



var RestrictedContribution_possibleTypes = ['RestrictedContribution']
export var isRestrictedContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRestrictedContribution"')
  return RestrictedContribution_possibleTypes.includes(obj.__typename)
}



var ReviewDismissalAllowance_possibleTypes = ['ReviewDismissalAllowance']
export var isReviewDismissalAllowance = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewDismissalAllowance"')
  return ReviewDismissalAllowance_possibleTypes.includes(obj.__typename)
}



var ReviewDismissalAllowanceActor_possibleTypes = ['Team','User']
export var isReviewDismissalAllowanceActor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewDismissalAllowanceActor"')
  return ReviewDismissalAllowanceActor_possibleTypes.includes(obj.__typename)
}



var ReviewDismissalAllowanceConnection_possibleTypes = ['ReviewDismissalAllowanceConnection']
export var isReviewDismissalAllowanceConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewDismissalAllowanceConnection"')
  return ReviewDismissalAllowanceConnection_possibleTypes.includes(obj.__typename)
}



var ReviewDismissalAllowanceEdge_possibleTypes = ['ReviewDismissalAllowanceEdge']
export var isReviewDismissalAllowanceEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewDismissalAllowanceEdge"')
  return ReviewDismissalAllowanceEdge_possibleTypes.includes(obj.__typename)
}



var ReviewDismissedEvent_possibleTypes = ['ReviewDismissedEvent']
export var isReviewDismissedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewDismissedEvent"')
  return ReviewDismissedEvent_possibleTypes.includes(obj.__typename)
}



var ReviewRequest_possibleTypes = ['ReviewRequest']
export var isReviewRequest = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewRequest"')
  return ReviewRequest_possibleTypes.includes(obj.__typename)
}



var ReviewRequestConnection_possibleTypes = ['ReviewRequestConnection']
export var isReviewRequestConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewRequestConnection"')
  return ReviewRequestConnection_possibleTypes.includes(obj.__typename)
}



var ReviewRequestEdge_possibleTypes = ['ReviewRequestEdge']
export var isReviewRequestEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewRequestEdge"')
  return ReviewRequestEdge_possibleTypes.includes(obj.__typename)
}



var ReviewRequestRemovedEvent_possibleTypes = ['ReviewRequestRemovedEvent']
export var isReviewRequestRemovedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewRequestRemovedEvent"')
  return ReviewRequestRemovedEvent_possibleTypes.includes(obj.__typename)
}



var ReviewRequestedEvent_possibleTypes = ['ReviewRequestedEvent']
export var isReviewRequestedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewRequestedEvent"')
  return ReviewRequestedEvent_possibleTypes.includes(obj.__typename)
}



var ReviewStatusHovercardContext_possibleTypes = ['ReviewStatusHovercardContext']
export var isReviewStatusHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewStatusHovercardContext"')
  return ReviewStatusHovercardContext_possibleTypes.includes(obj.__typename)
}



var SavedReply_possibleTypes = ['SavedReply']
export var isSavedReply = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSavedReply"')
  return SavedReply_possibleTypes.includes(obj.__typename)
}



var SavedReplyConnection_possibleTypes = ['SavedReplyConnection']
export var isSavedReplyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSavedReplyConnection"')
  return SavedReplyConnection_possibleTypes.includes(obj.__typename)
}



var SavedReplyEdge_possibleTypes = ['SavedReplyEdge']
export var isSavedReplyEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSavedReplyEdge"')
  return SavedReplyEdge_possibleTypes.includes(obj.__typename)
}



var SearchResultItem_possibleTypes = ['App','Issue','MarketplaceListing','Organization','PullRequest','Repository','User']
export var isSearchResultItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSearchResultItem"')
  return SearchResultItem_possibleTypes.includes(obj.__typename)
}



var SearchResultItemConnection_possibleTypes = ['SearchResultItemConnection']
export var isSearchResultItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSearchResultItemConnection"')
  return SearchResultItemConnection_possibleTypes.includes(obj.__typename)
}



var SearchResultItemEdge_possibleTypes = ['SearchResultItemEdge']
export var isSearchResultItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSearchResultItemEdge"')
  return SearchResultItemEdge_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisory_possibleTypes = ['SecurityAdvisory']
export var isSecurityAdvisory = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisory"')
  return SecurityAdvisory_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryConnection_possibleTypes = ['SecurityAdvisoryConnection']
export var isSecurityAdvisoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryConnection"')
  return SecurityAdvisoryConnection_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryEdge_possibleTypes = ['SecurityAdvisoryEdge']
export var isSecurityAdvisoryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryEdge"')
  return SecurityAdvisoryEdge_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryIdentifier_possibleTypes = ['SecurityAdvisoryIdentifier']
export var isSecurityAdvisoryIdentifier = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryIdentifier"')
  return SecurityAdvisoryIdentifier_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryPackage_possibleTypes = ['SecurityAdvisoryPackage']
export var isSecurityAdvisoryPackage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryPackage"')
  return SecurityAdvisoryPackage_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryPackageVersion_possibleTypes = ['SecurityAdvisoryPackageVersion']
export var isSecurityAdvisoryPackageVersion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryPackageVersion"')
  return SecurityAdvisoryPackageVersion_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryReference_possibleTypes = ['SecurityAdvisoryReference']
export var isSecurityAdvisoryReference = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryReference"')
  return SecurityAdvisoryReference_possibleTypes.includes(obj.__typename)
}



var SecurityVulnerability_possibleTypes = ['SecurityVulnerability']
export var isSecurityVulnerability = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityVulnerability"')
  return SecurityVulnerability_possibleTypes.includes(obj.__typename)
}



var SecurityVulnerabilityConnection_possibleTypes = ['SecurityVulnerabilityConnection']
export var isSecurityVulnerabilityConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityVulnerabilityConnection"')
  return SecurityVulnerabilityConnection_possibleTypes.includes(obj.__typename)
}



var SecurityVulnerabilityEdge_possibleTypes = ['SecurityVulnerabilityEdge']
export var isSecurityVulnerabilityEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityVulnerabilityEdge"')
  return SecurityVulnerabilityEdge_possibleTypes.includes(obj.__typename)
}



var SetEnterpriseIdentityProviderPayload_possibleTypes = ['SetEnterpriseIdentityProviderPayload']
export var isSetEnterpriseIdentityProviderPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSetEnterpriseIdentityProviderPayload"')
  return SetEnterpriseIdentityProviderPayload_possibleTypes.includes(obj.__typename)
}



var SmimeSignature_possibleTypes = ['SmimeSignature']
export var isSmimeSignature = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSmimeSignature"')
  return SmimeSignature_possibleTypes.includes(obj.__typename)
}



var Sponsor_possibleTypes = ['Organization','User']
export var isSponsor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsor"')
  return Sponsor_possibleTypes.includes(obj.__typename)
}



var Sponsorable_possibleTypes = ['Organization','User']
export var isSponsorable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorable"')
  return Sponsorable_possibleTypes.includes(obj.__typename)
}



var SponsorsListing_possibleTypes = ['SponsorsListing']
export var isSponsorsListing = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorsListing"')
  return SponsorsListing_possibleTypes.includes(obj.__typename)
}



var SponsorsTier_possibleTypes = ['SponsorsTier']
export var isSponsorsTier = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorsTier"')
  return SponsorsTier_possibleTypes.includes(obj.__typename)
}



var SponsorsTierAdminInfo_possibleTypes = ['SponsorsTierAdminInfo']
export var isSponsorsTierAdminInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorsTierAdminInfo"')
  return SponsorsTierAdminInfo_possibleTypes.includes(obj.__typename)
}



var SponsorsTierConnection_possibleTypes = ['SponsorsTierConnection']
export var isSponsorsTierConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorsTierConnection"')
  return SponsorsTierConnection_possibleTypes.includes(obj.__typename)
}



var SponsorsTierEdge_possibleTypes = ['SponsorsTierEdge']
export var isSponsorsTierEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorsTierEdge"')
  return SponsorsTierEdge_possibleTypes.includes(obj.__typename)
}



var Sponsorship_possibleTypes = ['Sponsorship']
export var isSponsorship = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorship"')
  return Sponsorship_possibleTypes.includes(obj.__typename)
}



var SponsorshipConnection_possibleTypes = ['SponsorshipConnection']
export var isSponsorshipConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorshipConnection"')
  return SponsorshipConnection_possibleTypes.includes(obj.__typename)
}



var SponsorshipEdge_possibleTypes = ['SponsorshipEdge']
export var isSponsorshipEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorshipEdge"')
  return SponsorshipEdge_possibleTypes.includes(obj.__typename)
}



var StargazerConnection_possibleTypes = ['StargazerConnection']
export var isStargazerConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStargazerConnection"')
  return StargazerConnection_possibleTypes.includes(obj.__typename)
}



var StargazerEdge_possibleTypes = ['StargazerEdge']
export var isStargazerEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStargazerEdge"')
  return StargazerEdge_possibleTypes.includes(obj.__typename)
}



var Starrable_possibleTypes = ['Gist','Repository','Topic']
export var isStarrable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStarrable"')
  return Starrable_possibleTypes.includes(obj.__typename)
}



var StarredRepositoryConnection_possibleTypes = ['StarredRepositoryConnection']
export var isStarredRepositoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStarredRepositoryConnection"')
  return StarredRepositoryConnection_possibleTypes.includes(obj.__typename)
}



var StarredRepositoryEdge_possibleTypes = ['StarredRepositoryEdge']
export var isStarredRepositoryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStarredRepositoryEdge"')
  return StarredRepositoryEdge_possibleTypes.includes(obj.__typename)
}



var Status_possibleTypes = ['Status']
export var isStatus = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatus"')
  return Status_possibleTypes.includes(obj.__typename)
}



var StatusCheckRollup_possibleTypes = ['StatusCheckRollup']
export var isStatusCheckRollup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatusCheckRollup"')
  return StatusCheckRollup_possibleTypes.includes(obj.__typename)
}



var StatusCheckRollupContext_possibleTypes = ['CheckRun','StatusContext']
export var isStatusCheckRollupContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatusCheckRollupContext"')
  return StatusCheckRollupContext_possibleTypes.includes(obj.__typename)
}



var StatusCheckRollupContextConnection_possibleTypes = ['StatusCheckRollupContextConnection']
export var isStatusCheckRollupContextConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatusCheckRollupContextConnection"')
  return StatusCheckRollupContextConnection_possibleTypes.includes(obj.__typename)
}



var StatusCheckRollupContextEdge_possibleTypes = ['StatusCheckRollupContextEdge']
export var isStatusCheckRollupContextEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatusCheckRollupContextEdge"')
  return StatusCheckRollupContextEdge_possibleTypes.includes(obj.__typename)
}



var StatusContext_possibleTypes = ['StatusContext']
export var isStatusContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatusContext"')
  return StatusContext_possibleTypes.includes(obj.__typename)
}



var SubmitPullRequestReviewPayload_possibleTypes = ['SubmitPullRequestReviewPayload']
export var isSubmitPullRequestReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmitPullRequestReviewPayload"')
  return SubmitPullRequestReviewPayload_possibleTypes.includes(obj.__typename)
}



var Submodule_possibleTypes = ['Submodule']
export var isSubmodule = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmodule"')
  return Submodule_possibleTypes.includes(obj.__typename)
}



var SubmoduleConnection_possibleTypes = ['SubmoduleConnection']
export var isSubmoduleConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmoduleConnection"')
  return SubmoduleConnection_possibleTypes.includes(obj.__typename)
}



var SubmoduleEdge_possibleTypes = ['SubmoduleEdge']
export var isSubmoduleEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmoduleEdge"')
  return SubmoduleEdge_possibleTypes.includes(obj.__typename)
}



var Subscribable_possibleTypes = ['Commit','Issue','PullRequest','Repository','Team','TeamDiscussion']
export var isSubscribable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscribable"')
  return Subscribable_possibleTypes.includes(obj.__typename)
}



var SubscribedEvent_possibleTypes = ['SubscribedEvent']
export var isSubscribedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscribedEvent"')
  return SubscribedEvent_possibleTypes.includes(obj.__typename)
}



var SuggestedReviewer_possibleTypes = ['SuggestedReviewer']
export var isSuggestedReviewer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSuggestedReviewer"')
  return SuggestedReviewer_possibleTypes.includes(obj.__typename)
}



var Tag_possibleTypes = ['Tag']
export var isTag = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTag"')
  return Tag_possibleTypes.includes(obj.__typename)
}



var Team_possibleTypes = ['Team']
export var isTeam = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeam"')
  return Team_possibleTypes.includes(obj.__typename)
}



var TeamAddMemberAuditEntry_possibleTypes = ['TeamAddMemberAuditEntry']
export var isTeamAddMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamAddMemberAuditEntry"')
  return TeamAddMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var TeamAddRepositoryAuditEntry_possibleTypes = ['TeamAddRepositoryAuditEntry']
export var isTeamAddRepositoryAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamAddRepositoryAuditEntry"')
  return TeamAddRepositoryAuditEntry_possibleTypes.includes(obj.__typename)
}



var TeamAuditEntryData_possibleTypes = ['OrgRestoreMemberMembershipTeamAuditEntryData','TeamAddMemberAuditEntry','TeamAddRepositoryAuditEntry','TeamChangeParentTeamAuditEntry','TeamRemoveMemberAuditEntry','TeamRemoveRepositoryAuditEntry']
export var isTeamAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamAuditEntryData"')
  return TeamAuditEntryData_possibleTypes.includes(obj.__typename)
}



var TeamChangeParentTeamAuditEntry_possibleTypes = ['TeamChangeParentTeamAuditEntry']
export var isTeamChangeParentTeamAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamChangeParentTeamAuditEntry"')
  return TeamChangeParentTeamAuditEntry_possibleTypes.includes(obj.__typename)
}



var TeamConnection_possibleTypes = ['TeamConnection']
export var isTeamConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamConnection"')
  return TeamConnection_possibleTypes.includes(obj.__typename)
}



var TeamDiscussion_possibleTypes = ['TeamDiscussion']
export var isTeamDiscussion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussion"')
  return TeamDiscussion_possibleTypes.includes(obj.__typename)
}



var TeamDiscussionComment_possibleTypes = ['TeamDiscussionComment']
export var isTeamDiscussionComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussionComment"')
  return TeamDiscussionComment_possibleTypes.includes(obj.__typename)
}



var TeamDiscussionCommentConnection_possibleTypes = ['TeamDiscussionCommentConnection']
export var isTeamDiscussionCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussionCommentConnection"')
  return TeamDiscussionCommentConnection_possibleTypes.includes(obj.__typename)
}



var TeamDiscussionCommentEdge_possibleTypes = ['TeamDiscussionCommentEdge']
export var isTeamDiscussionCommentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussionCommentEdge"')
  return TeamDiscussionCommentEdge_possibleTypes.includes(obj.__typename)
}



var TeamDiscussionConnection_possibleTypes = ['TeamDiscussionConnection']
export var isTeamDiscussionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussionConnection"')
  return TeamDiscussionConnection_possibleTypes.includes(obj.__typename)
}



var TeamDiscussionEdge_possibleTypes = ['TeamDiscussionEdge']
export var isTeamDiscussionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussionEdge"')
  return TeamDiscussionEdge_possibleTypes.includes(obj.__typename)
}



var TeamEdge_possibleTypes = ['TeamEdge']
export var isTeamEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamEdge"')
  return TeamEdge_possibleTypes.includes(obj.__typename)
}



var TeamMemberConnection_possibleTypes = ['TeamMemberConnection']
export var isTeamMemberConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamMemberConnection"')
  return TeamMemberConnection_possibleTypes.includes(obj.__typename)
}



var TeamMemberEdge_possibleTypes = ['TeamMemberEdge']
export var isTeamMemberEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamMemberEdge"')
  return TeamMemberEdge_possibleTypes.includes(obj.__typename)
}



var TeamRemoveMemberAuditEntry_possibleTypes = ['TeamRemoveMemberAuditEntry']
export var isTeamRemoveMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamRemoveMemberAuditEntry"')
  return TeamRemoveMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var TeamRemoveRepositoryAuditEntry_possibleTypes = ['TeamRemoveRepositoryAuditEntry']
export var isTeamRemoveRepositoryAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamRemoveRepositoryAuditEntry"')
  return TeamRemoveRepositoryAuditEntry_possibleTypes.includes(obj.__typename)
}



var TeamRepositoryConnection_possibleTypes = ['TeamRepositoryConnection']
export var isTeamRepositoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamRepositoryConnection"')
  return TeamRepositoryConnection_possibleTypes.includes(obj.__typename)
}



var TeamRepositoryEdge_possibleTypes = ['TeamRepositoryEdge']
export var isTeamRepositoryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamRepositoryEdge"')
  return TeamRepositoryEdge_possibleTypes.includes(obj.__typename)
}



var TextMatch_possibleTypes = ['TextMatch']
export var isTextMatch = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTextMatch"')
  return TextMatch_possibleTypes.includes(obj.__typename)
}



var TextMatchHighlight_possibleTypes = ['TextMatchHighlight']
export var isTextMatchHighlight = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTextMatchHighlight"')
  return TextMatchHighlight_possibleTypes.includes(obj.__typename)
}



var Topic_possibleTypes = ['Topic']
export var isTopic = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTopic"')
  return Topic_possibleTypes.includes(obj.__typename)
}



var TopicAuditEntryData_possibleTypes = ['RepoAddTopicAuditEntry','RepoRemoveTopicAuditEntry']
export var isTopicAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTopicAuditEntryData"')
  return TopicAuditEntryData_possibleTypes.includes(obj.__typename)
}



var TopicConnection_possibleTypes = ['TopicConnection']
export var isTopicConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTopicConnection"')
  return TopicConnection_possibleTypes.includes(obj.__typename)
}



var TopicEdge_possibleTypes = ['TopicEdge']
export var isTopicEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTopicEdge"')
  return TopicEdge_possibleTypes.includes(obj.__typename)
}



var TransferIssuePayload_possibleTypes = ['TransferIssuePayload']
export var isTransferIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransferIssuePayload"')
  return TransferIssuePayload_possibleTypes.includes(obj.__typename)
}



var TransferredEvent_possibleTypes = ['TransferredEvent']
export var isTransferredEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransferredEvent"')
  return TransferredEvent_possibleTypes.includes(obj.__typename)
}



var Tree_possibleTypes = ['Tree']
export var isTree = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTree"')
  return Tree_possibleTypes.includes(obj.__typename)
}



var TreeEntry_possibleTypes = ['TreeEntry']
export var isTreeEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTreeEntry"')
  return TreeEntry_possibleTypes.includes(obj.__typename)
}



var UnarchiveRepositoryPayload_possibleTypes = ['UnarchiveRepositoryPayload']
export var isUnarchiveRepositoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnarchiveRepositoryPayload"')
  return UnarchiveRepositoryPayload_possibleTypes.includes(obj.__typename)
}



var UnassignedEvent_possibleTypes = ['UnassignedEvent']
export var isUnassignedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnassignedEvent"')
  return UnassignedEvent_possibleTypes.includes(obj.__typename)
}



var UnfollowUserPayload_possibleTypes = ['UnfollowUserPayload']
export var isUnfollowUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnfollowUserPayload"')
  return UnfollowUserPayload_possibleTypes.includes(obj.__typename)
}



var UniformResourceLocatable_possibleTypes = ['Bot','CheckRun','ClosedEvent','Commit','ConvertToDraftEvent','CrossReferencedEvent','Gist','Issue','Mannequin','MergedEvent','Milestone','Organization','PullRequest','PullRequestCommit','ReadyForReviewEvent','Release','Repository','RepositoryTopic','ReviewDismissedEvent','TeamDiscussion','TeamDiscussionComment','User']
export var isUniformResourceLocatable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUniformResourceLocatable"')
  return UniformResourceLocatable_possibleTypes.includes(obj.__typename)
}



var UnknownSignature_possibleTypes = ['UnknownSignature']
export var isUnknownSignature = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnknownSignature"')
  return UnknownSignature_possibleTypes.includes(obj.__typename)
}



var UnlabeledEvent_possibleTypes = ['UnlabeledEvent']
export var isUnlabeledEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnlabeledEvent"')
  return UnlabeledEvent_possibleTypes.includes(obj.__typename)
}



var UnlinkRepositoryFromProjectPayload_possibleTypes = ['UnlinkRepositoryFromProjectPayload']
export var isUnlinkRepositoryFromProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnlinkRepositoryFromProjectPayload"')
  return UnlinkRepositoryFromProjectPayload_possibleTypes.includes(obj.__typename)
}



var UnlockLockablePayload_possibleTypes = ['UnlockLockablePayload']
export var isUnlockLockablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnlockLockablePayload"')
  return UnlockLockablePayload_possibleTypes.includes(obj.__typename)
}



var UnlockedEvent_possibleTypes = ['UnlockedEvent']
export var isUnlockedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnlockedEvent"')
  return UnlockedEvent_possibleTypes.includes(obj.__typename)
}



var UnmarkIssueAsDuplicatePayload_possibleTypes = ['UnmarkIssueAsDuplicatePayload']
export var isUnmarkIssueAsDuplicatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnmarkIssueAsDuplicatePayload"')
  return UnmarkIssueAsDuplicatePayload_possibleTypes.includes(obj.__typename)
}



var UnmarkedAsDuplicateEvent_possibleTypes = ['UnmarkedAsDuplicateEvent']
export var isUnmarkedAsDuplicateEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnmarkedAsDuplicateEvent"')
  return UnmarkedAsDuplicateEvent_possibleTypes.includes(obj.__typename)
}



var UnminimizeCommentPayload_possibleTypes = ['UnminimizeCommentPayload']
export var isUnminimizeCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnminimizeCommentPayload"')
  return UnminimizeCommentPayload_possibleTypes.includes(obj.__typename)
}



var UnpinIssuePayload_possibleTypes = ['UnpinIssuePayload']
export var isUnpinIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnpinIssuePayload"')
  return UnpinIssuePayload_possibleTypes.includes(obj.__typename)
}



var UnpinnedEvent_possibleTypes = ['UnpinnedEvent']
export var isUnpinnedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnpinnedEvent"')
  return UnpinnedEvent_possibleTypes.includes(obj.__typename)
}



var UnresolveReviewThreadPayload_possibleTypes = ['UnresolveReviewThreadPayload']
export var isUnresolveReviewThreadPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnresolveReviewThreadPayload"')
  return UnresolveReviewThreadPayload_possibleTypes.includes(obj.__typename)
}



var UnsubscribedEvent_possibleTypes = ['UnsubscribedEvent']
export var isUnsubscribedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnsubscribedEvent"')
  return UnsubscribedEvent_possibleTypes.includes(obj.__typename)
}



var Updatable_possibleTypes = ['CommitComment','GistComment','Issue','IssueComment','Project','PullRequest','PullRequestReview','PullRequestReviewComment','TeamDiscussion','TeamDiscussionComment']
export var isUpdatable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatable"')
  return Updatable_possibleTypes.includes(obj.__typename)
}



var UpdatableComment_possibleTypes = ['CommitComment','GistComment','Issue','IssueComment','PullRequest','PullRequestReview','PullRequestReviewComment','TeamDiscussion','TeamDiscussionComment']
export var isUpdatableComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatableComment"')
  return UpdatableComment_possibleTypes.includes(obj.__typename)
}



var UpdateBranchProtectionRulePayload_possibleTypes = ['UpdateBranchProtectionRulePayload']
export var isUpdateBranchProtectionRulePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateBranchProtectionRulePayload"')
  return UpdateBranchProtectionRulePayload_possibleTypes.includes(obj.__typename)
}



var UpdateCheckRunPayload_possibleTypes = ['UpdateCheckRunPayload']
export var isUpdateCheckRunPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateCheckRunPayload"')
  return UpdateCheckRunPayload_possibleTypes.includes(obj.__typename)
}



var UpdateCheckSuitePreferencesPayload_possibleTypes = ['UpdateCheckSuitePreferencesPayload']
export var isUpdateCheckSuitePreferencesPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateCheckSuitePreferencesPayload"')
  return UpdateCheckSuitePreferencesPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseActionExecutionCapabilitySettingPayload_possibleTypes = ['UpdateEnterpriseActionExecutionCapabilitySettingPayload']
export var isUpdateEnterpriseActionExecutionCapabilitySettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseActionExecutionCapabilitySettingPayload"')
  return UpdateEnterpriseActionExecutionCapabilitySettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseAdministratorRolePayload_possibleTypes = ['UpdateEnterpriseAdministratorRolePayload']
export var isUpdateEnterpriseAdministratorRolePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseAdministratorRolePayload"')
  return UpdateEnterpriseAdministratorRolePayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload_possibleTypes = ['UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload']
export var isUpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload"')
  return UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseDefaultRepositoryPermissionSettingPayload_possibleTypes = ['UpdateEnterpriseDefaultRepositoryPermissionSettingPayload']
export var isUpdateEnterpriseDefaultRepositoryPermissionSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseDefaultRepositoryPermissionSettingPayload"')
  return UpdateEnterpriseDefaultRepositoryPermissionSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload']
export var isUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload"')
  return UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload']
export var isUpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanCreateRepositoriesSettingPayload"')
  return UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanDeleteIssuesSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanDeleteIssuesSettingPayload']
export var isUpdateEnterpriseMembersCanDeleteIssuesSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanDeleteIssuesSettingPayload"')
  return UpdateEnterpriseMembersCanDeleteIssuesSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload']
export var isUpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload"')
  return UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload']
export var isUpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload"')
  return UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanMakePurchasesSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanMakePurchasesSettingPayload']
export var isUpdateEnterpriseMembersCanMakePurchasesSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanMakePurchasesSettingPayload"')
  return UpdateEnterpriseMembersCanMakePurchasesSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload']
export var isUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload"')
  return UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload']
export var isUpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload"')
  return UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseOrganizationProjectsSettingPayload_possibleTypes = ['UpdateEnterpriseOrganizationProjectsSettingPayload']
export var isUpdateEnterpriseOrganizationProjectsSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseOrganizationProjectsSettingPayload"')
  return UpdateEnterpriseOrganizationProjectsSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseProfilePayload_possibleTypes = ['UpdateEnterpriseProfilePayload']
export var isUpdateEnterpriseProfilePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseProfilePayload"')
  return UpdateEnterpriseProfilePayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseRepositoryProjectsSettingPayload_possibleTypes = ['UpdateEnterpriseRepositoryProjectsSettingPayload']
export var isUpdateEnterpriseRepositoryProjectsSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseRepositoryProjectsSettingPayload"')
  return UpdateEnterpriseRepositoryProjectsSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseTeamDiscussionsSettingPayload_possibleTypes = ['UpdateEnterpriseTeamDiscussionsSettingPayload']
export var isUpdateEnterpriseTeamDiscussionsSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseTeamDiscussionsSettingPayload"')
  return UpdateEnterpriseTeamDiscussionsSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload_possibleTypes = ['UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload']
export var isUpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload"')
  return UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateIpAllowListEnabledSettingPayload_possibleTypes = ['UpdateIpAllowListEnabledSettingPayload']
export var isUpdateIpAllowListEnabledSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateIpAllowListEnabledSettingPayload"')
  return UpdateIpAllowListEnabledSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateIpAllowListEntryPayload_possibleTypes = ['UpdateIpAllowListEntryPayload']
export var isUpdateIpAllowListEntryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateIpAllowListEntryPayload"')
  return UpdateIpAllowListEntryPayload_possibleTypes.includes(obj.__typename)
}



var UpdateIssueCommentPayload_possibleTypes = ['UpdateIssueCommentPayload']
export var isUpdateIssueCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateIssueCommentPayload"')
  return UpdateIssueCommentPayload_possibleTypes.includes(obj.__typename)
}



var UpdateIssuePayload_possibleTypes = ['UpdateIssuePayload']
export var isUpdateIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateIssuePayload"')
  return UpdateIssuePayload_possibleTypes.includes(obj.__typename)
}



var UpdateLabelPayload_possibleTypes = ['UpdateLabelPayload']
export var isUpdateLabelPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateLabelPayload"')
  return UpdateLabelPayload_possibleTypes.includes(obj.__typename)
}



var UpdateProjectCardPayload_possibleTypes = ['UpdateProjectCardPayload']
export var isUpdateProjectCardPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateProjectCardPayload"')
  return UpdateProjectCardPayload_possibleTypes.includes(obj.__typename)
}



var UpdateProjectColumnPayload_possibleTypes = ['UpdateProjectColumnPayload']
export var isUpdateProjectColumnPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateProjectColumnPayload"')
  return UpdateProjectColumnPayload_possibleTypes.includes(obj.__typename)
}



var UpdateProjectPayload_possibleTypes = ['UpdateProjectPayload']
export var isUpdateProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateProjectPayload"')
  return UpdateProjectPayload_possibleTypes.includes(obj.__typename)
}



var UpdatePullRequestPayload_possibleTypes = ['UpdatePullRequestPayload']
export var isUpdatePullRequestPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePullRequestPayload"')
  return UpdatePullRequestPayload_possibleTypes.includes(obj.__typename)
}



var UpdatePullRequestReviewCommentPayload_possibleTypes = ['UpdatePullRequestReviewCommentPayload']
export var isUpdatePullRequestReviewCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePullRequestReviewCommentPayload"')
  return UpdatePullRequestReviewCommentPayload_possibleTypes.includes(obj.__typename)
}



var UpdatePullRequestReviewPayload_possibleTypes = ['UpdatePullRequestReviewPayload']
export var isUpdatePullRequestReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePullRequestReviewPayload"')
  return UpdatePullRequestReviewPayload_possibleTypes.includes(obj.__typename)
}



var UpdateRefPayload_possibleTypes = ['UpdateRefPayload']
export var isUpdateRefPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateRefPayload"')
  return UpdateRefPayload_possibleTypes.includes(obj.__typename)
}



var UpdateRefsPayload_possibleTypes = ['UpdateRefsPayload']
export var isUpdateRefsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateRefsPayload"')
  return UpdateRefsPayload_possibleTypes.includes(obj.__typename)
}



var UpdateRepositoryPayload_possibleTypes = ['UpdateRepositoryPayload']
export var isUpdateRepositoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateRepositoryPayload"')
  return UpdateRepositoryPayload_possibleTypes.includes(obj.__typename)
}



var UpdateSubscriptionPayload_possibleTypes = ['UpdateSubscriptionPayload']
export var isUpdateSubscriptionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateSubscriptionPayload"')
  return UpdateSubscriptionPayload_possibleTypes.includes(obj.__typename)
}



var UpdateTeamDiscussionCommentPayload_possibleTypes = ['UpdateTeamDiscussionCommentPayload']
export var isUpdateTeamDiscussionCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateTeamDiscussionCommentPayload"')
  return UpdateTeamDiscussionCommentPayload_possibleTypes.includes(obj.__typename)
}



var UpdateTeamDiscussionPayload_possibleTypes = ['UpdateTeamDiscussionPayload']
export var isUpdateTeamDiscussionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateTeamDiscussionPayload"')
  return UpdateTeamDiscussionPayload_possibleTypes.includes(obj.__typename)
}



var UpdateTeamReviewAssignmentPayload_possibleTypes = ['UpdateTeamReviewAssignmentPayload']
export var isUpdateTeamReviewAssignmentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateTeamReviewAssignmentPayload"')
  return UpdateTeamReviewAssignmentPayload_possibleTypes.includes(obj.__typename)
}



var UpdateTopicsPayload_possibleTypes = ['UpdateTopicsPayload']
export var isUpdateTopicsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateTopicsPayload"')
  return UpdateTopicsPayload_possibleTypes.includes(obj.__typename)
}



var User_possibleTypes = ['User']
export var isUser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



var UserBlockedEvent_possibleTypes = ['UserBlockedEvent']
export var isUserBlockedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserBlockedEvent"')
  return UserBlockedEvent_possibleTypes.includes(obj.__typename)
}



var UserConnection_possibleTypes = ['UserConnection']
export var isUserConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserConnection"')
  return UserConnection_possibleTypes.includes(obj.__typename)
}



var UserContentEdit_possibleTypes = ['UserContentEdit']
export var isUserContentEdit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserContentEdit"')
  return UserContentEdit_possibleTypes.includes(obj.__typename)
}



var UserContentEditConnection_possibleTypes = ['UserContentEditConnection']
export var isUserContentEditConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserContentEditConnection"')
  return UserContentEditConnection_possibleTypes.includes(obj.__typename)
}



var UserContentEditEdge_possibleTypes = ['UserContentEditEdge']
export var isUserContentEditEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserContentEditEdge"')
  return UserContentEditEdge_possibleTypes.includes(obj.__typename)
}



var UserEdge_possibleTypes = ['UserEdge']
export var isUserEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserEdge"')
  return UserEdge_possibleTypes.includes(obj.__typename)
}



var UserStatus_possibleTypes = ['UserStatus']
export var isUserStatus = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserStatus"')
  return UserStatus_possibleTypes.includes(obj.__typename)
}



var UserStatusConnection_possibleTypes = ['UserStatusConnection']
export var isUserStatusConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserStatusConnection"')
  return UserStatusConnection_possibleTypes.includes(obj.__typename)
}



var UserStatusEdge_possibleTypes = ['UserStatusEdge']
export var isUserStatusEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserStatusEdge"')
  return UserStatusEdge_possibleTypes.includes(obj.__typename)
}



var ViewerHovercardContext_possibleTypes = ['ViewerHovercardContext']
export var isViewerHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isViewerHovercardContext"')
  return ViewerHovercardContext_possibleTypes.includes(obj.__typename)
}
