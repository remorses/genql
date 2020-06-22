
var AcceptEnterpriseAdministratorInvitationPayload_possibleTypes = ['AcceptEnterpriseAdministratorInvitationPayload']
module.exports.isAcceptEnterpriseAdministratorInvitationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAcceptEnterpriseAdministratorInvitationPayload"')
  return AcceptEnterpriseAdministratorInvitationPayload_possibleTypes.includes(obj.__typename)
}



var AcceptTopicSuggestionPayload_possibleTypes = ['AcceptTopicSuggestionPayload']
module.exports.isAcceptTopicSuggestionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAcceptTopicSuggestionPayload"')
  return AcceptTopicSuggestionPayload_possibleTypes.includes(obj.__typename)
}



var Actor_possibleTypes = ['Bot','EnterpriseUserAccount','Mannequin','Organization','User']
module.exports.isActor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isActor"')
  return Actor_possibleTypes.includes(obj.__typename)
}



var ActorLocation_possibleTypes = ['ActorLocation']
module.exports.isActorLocation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isActorLocation"')
  return ActorLocation_possibleTypes.includes(obj.__typename)
}



var AddAssigneesToAssignablePayload_possibleTypes = ['AddAssigneesToAssignablePayload']
module.exports.isAddAssigneesToAssignablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddAssigneesToAssignablePayload"')
  return AddAssigneesToAssignablePayload_possibleTypes.includes(obj.__typename)
}



var AddCommentPayload_possibleTypes = ['AddCommentPayload']
module.exports.isAddCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddCommentPayload"')
  return AddCommentPayload_possibleTypes.includes(obj.__typename)
}



var AddLabelsToLabelablePayload_possibleTypes = ['AddLabelsToLabelablePayload']
module.exports.isAddLabelsToLabelablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddLabelsToLabelablePayload"')
  return AddLabelsToLabelablePayload_possibleTypes.includes(obj.__typename)
}



var AddProjectCardPayload_possibleTypes = ['AddProjectCardPayload']
module.exports.isAddProjectCardPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddProjectCardPayload"')
  return AddProjectCardPayload_possibleTypes.includes(obj.__typename)
}



var AddProjectColumnPayload_possibleTypes = ['AddProjectColumnPayload']
module.exports.isAddProjectColumnPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddProjectColumnPayload"')
  return AddProjectColumnPayload_possibleTypes.includes(obj.__typename)
}



var AddPullRequestReviewCommentPayload_possibleTypes = ['AddPullRequestReviewCommentPayload']
module.exports.isAddPullRequestReviewCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddPullRequestReviewCommentPayload"')
  return AddPullRequestReviewCommentPayload_possibleTypes.includes(obj.__typename)
}



var AddPullRequestReviewPayload_possibleTypes = ['AddPullRequestReviewPayload']
module.exports.isAddPullRequestReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddPullRequestReviewPayload"')
  return AddPullRequestReviewPayload_possibleTypes.includes(obj.__typename)
}



var AddPullRequestReviewThreadPayload_possibleTypes = ['AddPullRequestReviewThreadPayload']
module.exports.isAddPullRequestReviewThreadPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddPullRequestReviewThreadPayload"')
  return AddPullRequestReviewThreadPayload_possibleTypes.includes(obj.__typename)
}



var AddReactionPayload_possibleTypes = ['AddReactionPayload']
module.exports.isAddReactionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddReactionPayload"')
  return AddReactionPayload_possibleTypes.includes(obj.__typename)
}



var AddStarPayload_possibleTypes = ['AddStarPayload']
module.exports.isAddStarPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddStarPayload"')
  return AddStarPayload_possibleTypes.includes(obj.__typename)
}



var AddedToProjectEvent_possibleTypes = ['AddedToProjectEvent']
module.exports.isAddedToProjectEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddedToProjectEvent"')
  return AddedToProjectEvent_possibleTypes.includes(obj.__typename)
}



var App_possibleTypes = ['App']
module.exports.isApp = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isApp"')
  return App_possibleTypes.includes(obj.__typename)
}



var ArchiveRepositoryPayload_possibleTypes = ['ArchiveRepositoryPayload']
module.exports.isArchiveRepositoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isArchiveRepositoryPayload"')
  return ArchiveRepositoryPayload_possibleTypes.includes(obj.__typename)
}



var Assignable_possibleTypes = ['Issue','PullRequest']
module.exports.isAssignable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAssignable"')
  return Assignable_possibleTypes.includes(obj.__typename)
}



var AssignedEvent_possibleTypes = ['AssignedEvent']
module.exports.isAssignedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAssignedEvent"')
  return AssignedEvent_possibleTypes.includes(obj.__typename)
}



var Assignee_possibleTypes = ['Bot','Mannequin','Organization','User']
module.exports.isAssignee = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAssignee"')
  return Assignee_possibleTypes.includes(obj.__typename)
}



var AuditEntry_possibleTypes = ['MembersCanDeleteReposClearAuditEntry','MembersCanDeleteReposDisableAuditEntry','MembersCanDeleteReposEnableAuditEntry','OauthApplicationCreateAuditEntry','OrgAddBillingManagerAuditEntry','OrgAddMemberAuditEntry','OrgBlockUserAuditEntry','OrgConfigDisableCollaboratorsOnlyAuditEntry','OrgConfigEnableCollaboratorsOnlyAuditEntry','OrgCreateAuditEntry','OrgDisableOauthAppRestrictionsAuditEntry','OrgDisableSamlAuditEntry','OrgDisableTwoFactorRequirementAuditEntry','OrgEnableOauthAppRestrictionsAuditEntry','OrgEnableSamlAuditEntry','OrgEnableTwoFactorRequirementAuditEntry','OrgInviteMemberAuditEntry','OrgInviteToBusinessAuditEntry','OrgOauthAppAccessApprovedAuditEntry','OrgOauthAppAccessDeniedAuditEntry','OrgOauthAppAccessRequestedAuditEntry','OrgRemoveBillingManagerAuditEntry','OrgRemoveMemberAuditEntry','OrgRemoveOutsideCollaboratorAuditEntry','OrgRestoreMemberAuditEntry','OrgUnblockUserAuditEntry','OrgUpdateDefaultRepositoryPermissionAuditEntry','OrgUpdateMemberAuditEntry','OrgUpdateMemberRepositoryCreationPermissionAuditEntry','OrgUpdateMemberRepositoryInvitationPermissionAuditEntry','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','RepoAccessAuditEntry','RepoAddMemberAuditEntry','RepoAddTopicAuditEntry','RepoArchivedAuditEntry','RepoChangeMergeSettingAuditEntry','RepoConfigDisableAnonymousGitAccessAuditEntry','RepoConfigDisableCollaboratorsOnlyAuditEntry','RepoConfigDisableContributorsOnlyAuditEntry','RepoConfigDisableSockpuppetDisallowedAuditEntry','RepoConfigEnableAnonymousGitAccessAuditEntry','RepoConfigEnableCollaboratorsOnlyAuditEntry','RepoConfigEnableContributorsOnlyAuditEntry','RepoConfigEnableSockpuppetDisallowedAuditEntry','RepoConfigLockAnonymousGitAccessAuditEntry','RepoConfigUnlockAnonymousGitAccessAuditEntry','RepoCreateAuditEntry','RepoDestroyAuditEntry','RepoRemoveMemberAuditEntry','RepoRemoveTopicAuditEntry','RepositoryVisibilityChangeDisableAuditEntry','RepositoryVisibilityChangeEnableAuditEntry','TeamAddMemberAuditEntry','TeamAddRepositoryAuditEntry','TeamChangeParentTeamAuditEntry','TeamRemoveMemberAuditEntry','TeamRemoveRepositoryAuditEntry']
module.exports.isAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAuditEntry"')
  return AuditEntry_possibleTypes.includes(obj.__typename)
}



var AuditEntryActor_possibleTypes = ['Bot','Organization','User']
module.exports.isAuditEntryActor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAuditEntryActor"')
  return AuditEntryActor_possibleTypes.includes(obj.__typename)
}



var AutomaticBaseChangeFailedEvent_possibleTypes = ['AutomaticBaseChangeFailedEvent']
module.exports.isAutomaticBaseChangeFailedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAutomaticBaseChangeFailedEvent"')
  return AutomaticBaseChangeFailedEvent_possibleTypes.includes(obj.__typename)
}



var AutomaticBaseChangeSucceededEvent_possibleTypes = ['AutomaticBaseChangeSucceededEvent']
module.exports.isAutomaticBaseChangeSucceededEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAutomaticBaseChangeSucceededEvent"')
  return AutomaticBaseChangeSucceededEvent_possibleTypes.includes(obj.__typename)
}



var BaseRefChangedEvent_possibleTypes = ['BaseRefChangedEvent']
module.exports.isBaseRefChangedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBaseRefChangedEvent"')
  return BaseRefChangedEvent_possibleTypes.includes(obj.__typename)
}



var BaseRefForcePushedEvent_possibleTypes = ['BaseRefForcePushedEvent']
module.exports.isBaseRefForcePushedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBaseRefForcePushedEvent"')
  return BaseRefForcePushedEvent_possibleTypes.includes(obj.__typename)
}



var Blame_possibleTypes = ['Blame']
module.exports.isBlame = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBlame"')
  return Blame_possibleTypes.includes(obj.__typename)
}



var BlameRange_possibleTypes = ['BlameRange']
module.exports.isBlameRange = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBlameRange"')
  return BlameRange_possibleTypes.includes(obj.__typename)
}



var Blob_possibleTypes = ['Blob']
module.exports.isBlob = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBlob"')
  return Blob_possibleTypes.includes(obj.__typename)
}



var Bot_possibleTypes = ['Bot']
module.exports.isBot = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBot"')
  return Bot_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRule_possibleTypes = ['BranchProtectionRule']
module.exports.isBranchProtectionRule = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRule"')
  return BranchProtectionRule_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRuleConflict_possibleTypes = ['BranchProtectionRuleConflict']
module.exports.isBranchProtectionRuleConflict = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRuleConflict"')
  return BranchProtectionRuleConflict_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRuleConflictConnection_possibleTypes = ['BranchProtectionRuleConflictConnection']
module.exports.isBranchProtectionRuleConflictConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRuleConflictConnection"')
  return BranchProtectionRuleConflictConnection_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRuleConflictEdge_possibleTypes = ['BranchProtectionRuleConflictEdge']
module.exports.isBranchProtectionRuleConflictEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRuleConflictEdge"')
  return BranchProtectionRuleConflictEdge_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRuleConnection_possibleTypes = ['BranchProtectionRuleConnection']
module.exports.isBranchProtectionRuleConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRuleConnection"')
  return BranchProtectionRuleConnection_possibleTypes.includes(obj.__typename)
}



var BranchProtectionRuleEdge_possibleTypes = ['BranchProtectionRuleEdge']
module.exports.isBranchProtectionRuleEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBranchProtectionRuleEdge"')
  return BranchProtectionRuleEdge_possibleTypes.includes(obj.__typename)
}



var CancelEnterpriseAdminInvitationPayload_possibleTypes = ['CancelEnterpriseAdminInvitationPayload']
module.exports.isCancelEnterpriseAdminInvitationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCancelEnterpriseAdminInvitationPayload"')
  return CancelEnterpriseAdminInvitationPayload_possibleTypes.includes(obj.__typename)
}



var ChangeUserStatusPayload_possibleTypes = ['ChangeUserStatusPayload']
module.exports.isChangeUserStatusPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isChangeUserStatusPayload"')
  return ChangeUserStatusPayload_possibleTypes.includes(obj.__typename)
}



var CheckAnnotation_possibleTypes = ['CheckAnnotation']
module.exports.isCheckAnnotation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckAnnotation"')
  return CheckAnnotation_possibleTypes.includes(obj.__typename)
}



var CheckAnnotationConnection_possibleTypes = ['CheckAnnotationConnection']
module.exports.isCheckAnnotationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckAnnotationConnection"')
  return CheckAnnotationConnection_possibleTypes.includes(obj.__typename)
}



var CheckAnnotationEdge_possibleTypes = ['CheckAnnotationEdge']
module.exports.isCheckAnnotationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckAnnotationEdge"')
  return CheckAnnotationEdge_possibleTypes.includes(obj.__typename)
}



var CheckAnnotationPosition_possibleTypes = ['CheckAnnotationPosition']
module.exports.isCheckAnnotationPosition = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckAnnotationPosition"')
  return CheckAnnotationPosition_possibleTypes.includes(obj.__typename)
}



var CheckAnnotationSpan_possibleTypes = ['CheckAnnotationSpan']
module.exports.isCheckAnnotationSpan = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckAnnotationSpan"')
  return CheckAnnotationSpan_possibleTypes.includes(obj.__typename)
}



var CheckRun_possibleTypes = ['CheckRun']
module.exports.isCheckRun = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckRun"')
  return CheckRun_possibleTypes.includes(obj.__typename)
}



var CheckRunConnection_possibleTypes = ['CheckRunConnection']
module.exports.isCheckRunConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckRunConnection"')
  return CheckRunConnection_possibleTypes.includes(obj.__typename)
}



var CheckRunEdge_possibleTypes = ['CheckRunEdge']
module.exports.isCheckRunEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckRunEdge"')
  return CheckRunEdge_possibleTypes.includes(obj.__typename)
}



var CheckSuite_possibleTypes = ['CheckSuite']
module.exports.isCheckSuite = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckSuite"')
  return CheckSuite_possibleTypes.includes(obj.__typename)
}



var CheckSuiteConnection_possibleTypes = ['CheckSuiteConnection']
module.exports.isCheckSuiteConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckSuiteConnection"')
  return CheckSuiteConnection_possibleTypes.includes(obj.__typename)
}



var CheckSuiteEdge_possibleTypes = ['CheckSuiteEdge']
module.exports.isCheckSuiteEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckSuiteEdge"')
  return CheckSuiteEdge_possibleTypes.includes(obj.__typename)
}



var ClearLabelsFromLabelablePayload_possibleTypes = ['ClearLabelsFromLabelablePayload']
module.exports.isClearLabelsFromLabelablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClearLabelsFromLabelablePayload"')
  return ClearLabelsFromLabelablePayload_possibleTypes.includes(obj.__typename)
}



var CloneProjectPayload_possibleTypes = ['CloneProjectPayload']
module.exports.isCloneProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCloneProjectPayload"')
  return CloneProjectPayload_possibleTypes.includes(obj.__typename)
}



var CloneTemplateRepositoryPayload_possibleTypes = ['CloneTemplateRepositoryPayload']
module.exports.isCloneTemplateRepositoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCloneTemplateRepositoryPayload"')
  return CloneTemplateRepositoryPayload_possibleTypes.includes(obj.__typename)
}



var Closable_possibleTypes = ['Issue','Milestone','Project','PullRequest']
module.exports.isClosable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClosable"')
  return Closable_possibleTypes.includes(obj.__typename)
}



var CloseIssuePayload_possibleTypes = ['CloseIssuePayload']
module.exports.isCloseIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCloseIssuePayload"')
  return CloseIssuePayload_possibleTypes.includes(obj.__typename)
}



var ClosePullRequestPayload_possibleTypes = ['ClosePullRequestPayload']
module.exports.isClosePullRequestPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClosePullRequestPayload"')
  return ClosePullRequestPayload_possibleTypes.includes(obj.__typename)
}



var ClosedEvent_possibleTypes = ['ClosedEvent']
module.exports.isClosedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isClosedEvent"')
  return ClosedEvent_possibleTypes.includes(obj.__typename)
}



var Closer_possibleTypes = ['Commit','PullRequest']
module.exports.isCloser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCloser"')
  return Closer_possibleTypes.includes(obj.__typename)
}



var CodeOfConduct_possibleTypes = ['CodeOfConduct']
module.exports.isCodeOfConduct = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCodeOfConduct"')
  return CodeOfConduct_possibleTypes.includes(obj.__typename)
}



var Comment_possibleTypes = ['CommitComment','GistComment','Issue','IssueComment','PullRequest','PullRequestReview','PullRequestReviewComment','TeamDiscussion','TeamDiscussionComment']
module.exports.isComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isComment"')
  return Comment_possibleTypes.includes(obj.__typename)
}



var CommentDeletedEvent_possibleTypes = ['CommentDeletedEvent']
module.exports.isCommentDeletedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommentDeletedEvent"')
  return CommentDeletedEvent_possibleTypes.includes(obj.__typename)
}



var Commit_possibleTypes = ['Commit']
module.exports.isCommit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommit"')
  return Commit_possibleTypes.includes(obj.__typename)
}



var CommitComment_possibleTypes = ['CommitComment']
module.exports.isCommitComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitComment"')
  return CommitComment_possibleTypes.includes(obj.__typename)
}



var CommitCommentConnection_possibleTypes = ['CommitCommentConnection']
module.exports.isCommitCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitCommentConnection"')
  return CommitCommentConnection_possibleTypes.includes(obj.__typename)
}



var CommitCommentEdge_possibleTypes = ['CommitCommentEdge']
module.exports.isCommitCommentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitCommentEdge"')
  return CommitCommentEdge_possibleTypes.includes(obj.__typename)
}



var CommitCommentThread_possibleTypes = ['CommitCommentThread']
module.exports.isCommitCommentThread = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitCommentThread"')
  return CommitCommentThread_possibleTypes.includes(obj.__typename)
}



var CommitConnection_possibleTypes = ['CommitConnection']
module.exports.isCommitConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitConnection"')
  return CommitConnection_possibleTypes.includes(obj.__typename)
}



var CommitContributionsByRepository_possibleTypes = ['CommitContributionsByRepository']
module.exports.isCommitContributionsByRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitContributionsByRepository"')
  return CommitContributionsByRepository_possibleTypes.includes(obj.__typename)
}



var CommitEdge_possibleTypes = ['CommitEdge']
module.exports.isCommitEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitEdge"')
  return CommitEdge_possibleTypes.includes(obj.__typename)
}



var CommitHistoryConnection_possibleTypes = ['CommitHistoryConnection']
module.exports.isCommitHistoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCommitHistoryConnection"')
  return CommitHistoryConnection_possibleTypes.includes(obj.__typename)
}



var ConnectedEvent_possibleTypes = ['ConnectedEvent']
module.exports.isConnectedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isConnectedEvent"')
  return ConnectedEvent_possibleTypes.includes(obj.__typename)
}



var ContentAttachment_possibleTypes = ['ContentAttachment']
module.exports.isContentAttachment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentAttachment"')
  return ContentAttachment_possibleTypes.includes(obj.__typename)
}



var ContentReference_possibleTypes = ['ContentReference']
module.exports.isContentReference = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContentReference"')
  return ContentReference_possibleTypes.includes(obj.__typename)
}



var Contribution_possibleTypes = ['CreatedCommitContribution','CreatedIssueContribution','CreatedPullRequestContribution','CreatedPullRequestReviewContribution','CreatedRepositoryContribution','JoinedGitHubContribution','RestrictedContribution']
module.exports.isContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContribution"')
  return Contribution_possibleTypes.includes(obj.__typename)
}



var ContributionCalendar_possibleTypes = ['ContributionCalendar']
module.exports.isContributionCalendar = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContributionCalendar"')
  return ContributionCalendar_possibleTypes.includes(obj.__typename)
}



var ContributionCalendarDay_possibleTypes = ['ContributionCalendarDay']
module.exports.isContributionCalendarDay = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContributionCalendarDay"')
  return ContributionCalendarDay_possibleTypes.includes(obj.__typename)
}



var ContributionCalendarMonth_possibleTypes = ['ContributionCalendarMonth']
module.exports.isContributionCalendarMonth = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContributionCalendarMonth"')
  return ContributionCalendarMonth_possibleTypes.includes(obj.__typename)
}



var ContributionCalendarWeek_possibleTypes = ['ContributionCalendarWeek']
module.exports.isContributionCalendarWeek = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContributionCalendarWeek"')
  return ContributionCalendarWeek_possibleTypes.includes(obj.__typename)
}



var ContributionsCollection_possibleTypes = ['ContributionsCollection']
module.exports.isContributionsCollection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isContributionsCollection"')
  return ContributionsCollection_possibleTypes.includes(obj.__typename)
}



var ConvertProjectCardNoteToIssuePayload_possibleTypes = ['ConvertProjectCardNoteToIssuePayload']
module.exports.isConvertProjectCardNoteToIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isConvertProjectCardNoteToIssuePayload"')
  return ConvertProjectCardNoteToIssuePayload_possibleTypes.includes(obj.__typename)
}



var ConvertToDraftEvent_possibleTypes = ['ConvertToDraftEvent']
module.exports.isConvertToDraftEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isConvertToDraftEvent"')
  return ConvertToDraftEvent_possibleTypes.includes(obj.__typename)
}



var ConvertedNoteToIssueEvent_possibleTypes = ['ConvertedNoteToIssueEvent']
module.exports.isConvertedNoteToIssueEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isConvertedNoteToIssueEvent"')
  return ConvertedNoteToIssueEvent_possibleTypes.includes(obj.__typename)
}



var CreateBranchProtectionRulePayload_possibleTypes = ['CreateBranchProtectionRulePayload']
module.exports.isCreateBranchProtectionRulePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateBranchProtectionRulePayload"')
  return CreateBranchProtectionRulePayload_possibleTypes.includes(obj.__typename)
}



var CreateCheckRunPayload_possibleTypes = ['CreateCheckRunPayload']
module.exports.isCreateCheckRunPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateCheckRunPayload"')
  return CreateCheckRunPayload_possibleTypes.includes(obj.__typename)
}



var CreateCheckSuitePayload_possibleTypes = ['CreateCheckSuitePayload']
module.exports.isCreateCheckSuitePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateCheckSuitePayload"')
  return CreateCheckSuitePayload_possibleTypes.includes(obj.__typename)
}



var CreateContentAttachmentPayload_possibleTypes = ['CreateContentAttachmentPayload']
module.exports.isCreateContentAttachmentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateContentAttachmentPayload"')
  return CreateContentAttachmentPayload_possibleTypes.includes(obj.__typename)
}



var CreateDeploymentPayload_possibleTypes = ['CreateDeploymentPayload']
module.exports.isCreateDeploymentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateDeploymentPayload"')
  return CreateDeploymentPayload_possibleTypes.includes(obj.__typename)
}



var CreateDeploymentStatusPayload_possibleTypes = ['CreateDeploymentStatusPayload']
module.exports.isCreateDeploymentStatusPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateDeploymentStatusPayload"')
  return CreateDeploymentStatusPayload_possibleTypes.includes(obj.__typename)
}



var CreateEnterpriseOrganizationPayload_possibleTypes = ['CreateEnterpriseOrganizationPayload']
module.exports.isCreateEnterpriseOrganizationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateEnterpriseOrganizationPayload"')
  return CreateEnterpriseOrganizationPayload_possibleTypes.includes(obj.__typename)
}



var CreateIpAllowListEntryPayload_possibleTypes = ['CreateIpAllowListEntryPayload']
module.exports.isCreateIpAllowListEntryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateIpAllowListEntryPayload"')
  return CreateIpAllowListEntryPayload_possibleTypes.includes(obj.__typename)
}



var CreateIssuePayload_possibleTypes = ['CreateIssuePayload']
module.exports.isCreateIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateIssuePayload"')
  return CreateIssuePayload_possibleTypes.includes(obj.__typename)
}



var CreateLabelPayload_possibleTypes = ['CreateLabelPayload']
module.exports.isCreateLabelPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateLabelPayload"')
  return CreateLabelPayload_possibleTypes.includes(obj.__typename)
}



var CreateProjectPayload_possibleTypes = ['CreateProjectPayload']
module.exports.isCreateProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateProjectPayload"')
  return CreateProjectPayload_possibleTypes.includes(obj.__typename)
}



var CreatePullRequestPayload_possibleTypes = ['CreatePullRequestPayload']
module.exports.isCreatePullRequestPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatePullRequestPayload"')
  return CreatePullRequestPayload_possibleTypes.includes(obj.__typename)
}



var CreateRefPayload_possibleTypes = ['CreateRefPayload']
module.exports.isCreateRefPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateRefPayload"')
  return CreateRefPayload_possibleTypes.includes(obj.__typename)
}



var CreateRepositoryPayload_possibleTypes = ['CreateRepositoryPayload']
module.exports.isCreateRepositoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateRepositoryPayload"')
  return CreateRepositoryPayload_possibleTypes.includes(obj.__typename)
}



var CreateTeamDiscussionCommentPayload_possibleTypes = ['CreateTeamDiscussionCommentPayload']
module.exports.isCreateTeamDiscussionCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateTeamDiscussionCommentPayload"')
  return CreateTeamDiscussionCommentPayload_possibleTypes.includes(obj.__typename)
}



var CreateTeamDiscussionPayload_possibleTypes = ['CreateTeamDiscussionPayload']
module.exports.isCreateTeamDiscussionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateTeamDiscussionPayload"')
  return CreateTeamDiscussionPayload_possibleTypes.includes(obj.__typename)
}



var CreatedCommitContribution_possibleTypes = ['CreatedCommitContribution']
module.exports.isCreatedCommitContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedCommitContribution"')
  return CreatedCommitContribution_possibleTypes.includes(obj.__typename)
}



var CreatedCommitContributionConnection_possibleTypes = ['CreatedCommitContributionConnection']
module.exports.isCreatedCommitContributionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedCommitContributionConnection"')
  return CreatedCommitContributionConnection_possibleTypes.includes(obj.__typename)
}



var CreatedCommitContributionEdge_possibleTypes = ['CreatedCommitContributionEdge']
module.exports.isCreatedCommitContributionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedCommitContributionEdge"')
  return CreatedCommitContributionEdge_possibleTypes.includes(obj.__typename)
}



var CreatedIssueContribution_possibleTypes = ['CreatedIssueContribution']
module.exports.isCreatedIssueContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedIssueContribution"')
  return CreatedIssueContribution_possibleTypes.includes(obj.__typename)
}



var CreatedIssueContributionConnection_possibleTypes = ['CreatedIssueContributionConnection']
module.exports.isCreatedIssueContributionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedIssueContributionConnection"')
  return CreatedIssueContributionConnection_possibleTypes.includes(obj.__typename)
}



var CreatedIssueContributionEdge_possibleTypes = ['CreatedIssueContributionEdge']
module.exports.isCreatedIssueContributionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedIssueContributionEdge"')
  return CreatedIssueContributionEdge_possibleTypes.includes(obj.__typename)
}



var CreatedIssueOrRestrictedContribution_possibleTypes = ['CreatedIssueContribution','RestrictedContribution']
module.exports.isCreatedIssueOrRestrictedContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedIssueOrRestrictedContribution"')
  return CreatedIssueOrRestrictedContribution_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestContribution_possibleTypes = ['CreatedPullRequestContribution']
module.exports.isCreatedPullRequestContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestContribution"')
  return CreatedPullRequestContribution_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestContributionConnection_possibleTypes = ['CreatedPullRequestContributionConnection']
module.exports.isCreatedPullRequestContributionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestContributionConnection"')
  return CreatedPullRequestContributionConnection_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestContributionEdge_possibleTypes = ['CreatedPullRequestContributionEdge']
module.exports.isCreatedPullRequestContributionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestContributionEdge"')
  return CreatedPullRequestContributionEdge_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestOrRestrictedContribution_possibleTypes = ['CreatedPullRequestContribution','RestrictedContribution']
module.exports.isCreatedPullRequestOrRestrictedContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestOrRestrictedContribution"')
  return CreatedPullRequestOrRestrictedContribution_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestReviewContribution_possibleTypes = ['CreatedPullRequestReviewContribution']
module.exports.isCreatedPullRequestReviewContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestReviewContribution"')
  return CreatedPullRequestReviewContribution_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestReviewContributionConnection_possibleTypes = ['CreatedPullRequestReviewContributionConnection']
module.exports.isCreatedPullRequestReviewContributionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestReviewContributionConnection"')
  return CreatedPullRequestReviewContributionConnection_possibleTypes.includes(obj.__typename)
}



var CreatedPullRequestReviewContributionEdge_possibleTypes = ['CreatedPullRequestReviewContributionEdge']
module.exports.isCreatedPullRequestReviewContributionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedPullRequestReviewContributionEdge"')
  return CreatedPullRequestReviewContributionEdge_possibleTypes.includes(obj.__typename)
}



var CreatedRepositoryContribution_possibleTypes = ['CreatedRepositoryContribution']
module.exports.isCreatedRepositoryContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedRepositoryContribution"')
  return CreatedRepositoryContribution_possibleTypes.includes(obj.__typename)
}



var CreatedRepositoryContributionConnection_possibleTypes = ['CreatedRepositoryContributionConnection']
module.exports.isCreatedRepositoryContributionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedRepositoryContributionConnection"')
  return CreatedRepositoryContributionConnection_possibleTypes.includes(obj.__typename)
}



var CreatedRepositoryContributionEdge_possibleTypes = ['CreatedRepositoryContributionEdge']
module.exports.isCreatedRepositoryContributionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedRepositoryContributionEdge"')
  return CreatedRepositoryContributionEdge_possibleTypes.includes(obj.__typename)
}



var CreatedRepositoryOrRestrictedContribution_possibleTypes = ['CreatedRepositoryContribution','RestrictedContribution']
module.exports.isCreatedRepositoryOrRestrictedContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatedRepositoryOrRestrictedContribution"')
  return CreatedRepositoryOrRestrictedContribution_possibleTypes.includes(obj.__typename)
}



var CrossReferencedEvent_possibleTypes = ['CrossReferencedEvent']
module.exports.isCrossReferencedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCrossReferencedEvent"')
  return CrossReferencedEvent_possibleTypes.includes(obj.__typename)
}



var DeclineTopicSuggestionPayload_possibleTypes = ['DeclineTopicSuggestionPayload']
module.exports.isDeclineTopicSuggestionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeclineTopicSuggestionPayload"')
  return DeclineTopicSuggestionPayload_possibleTypes.includes(obj.__typename)
}



var Deletable_possibleTypes = ['CommitComment','GistComment','IssueComment','PullRequestReview','PullRequestReviewComment','TeamDiscussion','TeamDiscussionComment']
module.exports.isDeletable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletable"')
  return Deletable_possibleTypes.includes(obj.__typename)
}



var DeleteBranchProtectionRulePayload_possibleTypes = ['DeleteBranchProtectionRulePayload']
module.exports.isDeleteBranchProtectionRulePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteBranchProtectionRulePayload"')
  return DeleteBranchProtectionRulePayload_possibleTypes.includes(obj.__typename)
}



var DeleteDeploymentPayload_possibleTypes = ['DeleteDeploymentPayload']
module.exports.isDeleteDeploymentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteDeploymentPayload"')
  return DeleteDeploymentPayload_possibleTypes.includes(obj.__typename)
}



var DeleteIpAllowListEntryPayload_possibleTypes = ['DeleteIpAllowListEntryPayload']
module.exports.isDeleteIpAllowListEntryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteIpAllowListEntryPayload"')
  return DeleteIpAllowListEntryPayload_possibleTypes.includes(obj.__typename)
}



var DeleteIssueCommentPayload_possibleTypes = ['DeleteIssueCommentPayload']
module.exports.isDeleteIssueCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteIssueCommentPayload"')
  return DeleteIssueCommentPayload_possibleTypes.includes(obj.__typename)
}



var DeleteIssuePayload_possibleTypes = ['DeleteIssuePayload']
module.exports.isDeleteIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteIssuePayload"')
  return DeleteIssuePayload_possibleTypes.includes(obj.__typename)
}



var DeleteLabelPayload_possibleTypes = ['DeleteLabelPayload']
module.exports.isDeleteLabelPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteLabelPayload"')
  return DeleteLabelPayload_possibleTypes.includes(obj.__typename)
}



var DeletePackageVersionPayload_possibleTypes = ['DeletePackageVersionPayload']
module.exports.isDeletePackageVersionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePackageVersionPayload"')
  return DeletePackageVersionPayload_possibleTypes.includes(obj.__typename)
}



var DeleteProjectCardPayload_possibleTypes = ['DeleteProjectCardPayload']
module.exports.isDeleteProjectCardPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteProjectCardPayload"')
  return DeleteProjectCardPayload_possibleTypes.includes(obj.__typename)
}



var DeleteProjectColumnPayload_possibleTypes = ['DeleteProjectColumnPayload']
module.exports.isDeleteProjectColumnPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteProjectColumnPayload"')
  return DeleteProjectColumnPayload_possibleTypes.includes(obj.__typename)
}



var DeleteProjectPayload_possibleTypes = ['DeleteProjectPayload']
module.exports.isDeleteProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteProjectPayload"')
  return DeleteProjectPayload_possibleTypes.includes(obj.__typename)
}



var DeletePullRequestReviewCommentPayload_possibleTypes = ['DeletePullRequestReviewCommentPayload']
module.exports.isDeletePullRequestReviewCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePullRequestReviewCommentPayload"')
  return DeletePullRequestReviewCommentPayload_possibleTypes.includes(obj.__typename)
}



var DeletePullRequestReviewPayload_possibleTypes = ['DeletePullRequestReviewPayload']
module.exports.isDeletePullRequestReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePullRequestReviewPayload"')
  return DeletePullRequestReviewPayload_possibleTypes.includes(obj.__typename)
}



var DeleteRefPayload_possibleTypes = ['DeleteRefPayload']
module.exports.isDeleteRefPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteRefPayload"')
  return DeleteRefPayload_possibleTypes.includes(obj.__typename)
}



var DeleteTeamDiscussionCommentPayload_possibleTypes = ['DeleteTeamDiscussionCommentPayload']
module.exports.isDeleteTeamDiscussionCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteTeamDiscussionCommentPayload"')
  return DeleteTeamDiscussionCommentPayload_possibleTypes.includes(obj.__typename)
}



var DeleteTeamDiscussionPayload_possibleTypes = ['DeleteTeamDiscussionPayload']
module.exports.isDeleteTeamDiscussionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteTeamDiscussionPayload"')
  return DeleteTeamDiscussionPayload_possibleTypes.includes(obj.__typename)
}



var DemilestonedEvent_possibleTypes = ['DemilestonedEvent']
module.exports.isDemilestonedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDemilestonedEvent"')
  return DemilestonedEvent_possibleTypes.includes(obj.__typename)
}



var DependencyGraphDependency_possibleTypes = ['DependencyGraphDependency']
module.exports.isDependencyGraphDependency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphDependency"')
  return DependencyGraphDependency_possibleTypes.includes(obj.__typename)
}



var DependencyGraphDependencyConnection_possibleTypes = ['DependencyGraphDependencyConnection']
module.exports.isDependencyGraphDependencyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphDependencyConnection"')
  return DependencyGraphDependencyConnection_possibleTypes.includes(obj.__typename)
}



var DependencyGraphDependencyEdge_possibleTypes = ['DependencyGraphDependencyEdge']
module.exports.isDependencyGraphDependencyEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphDependencyEdge"')
  return DependencyGraphDependencyEdge_possibleTypes.includes(obj.__typename)
}



var DependencyGraphManifest_possibleTypes = ['DependencyGraphManifest']
module.exports.isDependencyGraphManifest = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphManifest"')
  return DependencyGraphManifest_possibleTypes.includes(obj.__typename)
}



var DependencyGraphManifestConnection_possibleTypes = ['DependencyGraphManifestConnection']
module.exports.isDependencyGraphManifestConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphManifestConnection"')
  return DependencyGraphManifestConnection_possibleTypes.includes(obj.__typename)
}



var DependencyGraphManifestEdge_possibleTypes = ['DependencyGraphManifestEdge']
module.exports.isDependencyGraphManifestEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDependencyGraphManifestEdge"')
  return DependencyGraphManifestEdge_possibleTypes.includes(obj.__typename)
}



var DeployKey_possibleTypes = ['DeployKey']
module.exports.isDeployKey = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeployKey"')
  return DeployKey_possibleTypes.includes(obj.__typename)
}



var DeployKeyConnection_possibleTypes = ['DeployKeyConnection']
module.exports.isDeployKeyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeployKeyConnection"')
  return DeployKeyConnection_possibleTypes.includes(obj.__typename)
}



var DeployKeyEdge_possibleTypes = ['DeployKeyEdge']
module.exports.isDeployKeyEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeployKeyEdge"')
  return DeployKeyEdge_possibleTypes.includes(obj.__typename)
}



var DeployedEvent_possibleTypes = ['DeployedEvent']
module.exports.isDeployedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeployedEvent"')
  return DeployedEvent_possibleTypes.includes(obj.__typename)
}



var Deployment_possibleTypes = ['Deployment']
module.exports.isDeployment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeployment"')
  return Deployment_possibleTypes.includes(obj.__typename)
}



var DeploymentConnection_possibleTypes = ['DeploymentConnection']
module.exports.isDeploymentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentConnection"')
  return DeploymentConnection_possibleTypes.includes(obj.__typename)
}



var DeploymentEdge_possibleTypes = ['DeploymentEdge']
module.exports.isDeploymentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentEdge"')
  return DeploymentEdge_possibleTypes.includes(obj.__typename)
}



var DeploymentEnvironmentChangedEvent_possibleTypes = ['DeploymentEnvironmentChangedEvent']
module.exports.isDeploymentEnvironmentChangedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentEnvironmentChangedEvent"')
  return DeploymentEnvironmentChangedEvent_possibleTypes.includes(obj.__typename)
}



var DeploymentStatus_possibleTypes = ['DeploymentStatus']
module.exports.isDeploymentStatus = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentStatus"')
  return DeploymentStatus_possibleTypes.includes(obj.__typename)
}



var DeploymentStatusConnection_possibleTypes = ['DeploymentStatusConnection']
module.exports.isDeploymentStatusConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentStatusConnection"')
  return DeploymentStatusConnection_possibleTypes.includes(obj.__typename)
}



var DeploymentStatusEdge_possibleTypes = ['DeploymentStatusEdge']
module.exports.isDeploymentStatusEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentStatusEdge"')
  return DeploymentStatusEdge_possibleTypes.includes(obj.__typename)
}



var DisconnectedEvent_possibleTypes = ['DisconnectedEvent']
module.exports.isDisconnectedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDisconnectedEvent"')
  return DisconnectedEvent_possibleTypes.includes(obj.__typename)
}



var DismissPullRequestReviewPayload_possibleTypes = ['DismissPullRequestReviewPayload']
module.exports.isDismissPullRequestReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDismissPullRequestReviewPayload"')
  return DismissPullRequestReviewPayload_possibleTypes.includes(obj.__typename)
}



var Enterprise_possibleTypes = ['Enterprise']
module.exports.isEnterprise = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterprise"')
  return Enterprise_possibleTypes.includes(obj.__typename)
}



var EnterpriseAdministratorConnection_possibleTypes = ['EnterpriseAdministratorConnection']
module.exports.isEnterpriseAdministratorConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAdministratorConnection"')
  return EnterpriseAdministratorConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseAdministratorEdge_possibleTypes = ['EnterpriseAdministratorEdge']
module.exports.isEnterpriseAdministratorEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAdministratorEdge"')
  return EnterpriseAdministratorEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseAdministratorInvitation_possibleTypes = ['EnterpriseAdministratorInvitation']
module.exports.isEnterpriseAdministratorInvitation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAdministratorInvitation"')
  return EnterpriseAdministratorInvitation_possibleTypes.includes(obj.__typename)
}



var EnterpriseAdministratorInvitationConnection_possibleTypes = ['EnterpriseAdministratorInvitationConnection']
module.exports.isEnterpriseAdministratorInvitationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAdministratorInvitationConnection"')
  return EnterpriseAdministratorInvitationConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseAdministratorInvitationEdge_possibleTypes = ['EnterpriseAdministratorInvitationEdge']
module.exports.isEnterpriseAdministratorInvitationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAdministratorInvitationEdge"')
  return EnterpriseAdministratorInvitationEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseAuditEntryData_possibleTypes = ['MembersCanDeleteReposClearAuditEntry','MembersCanDeleteReposDisableAuditEntry','MembersCanDeleteReposEnableAuditEntry','OrgInviteToBusinessAuditEntry','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','RepositoryVisibilityChangeDisableAuditEntry','RepositoryVisibilityChangeEnableAuditEntry']
module.exports.isEnterpriseAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseAuditEntryData"')
  return EnterpriseAuditEntryData_possibleTypes.includes(obj.__typename)
}



var EnterpriseBillingInfo_possibleTypes = ['EnterpriseBillingInfo']
module.exports.isEnterpriseBillingInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseBillingInfo"')
  return EnterpriseBillingInfo_possibleTypes.includes(obj.__typename)
}



var EnterpriseIdentityProvider_possibleTypes = ['EnterpriseIdentityProvider']
module.exports.isEnterpriseIdentityProvider = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseIdentityProvider"')
  return EnterpriseIdentityProvider_possibleTypes.includes(obj.__typename)
}



var EnterpriseMember_possibleTypes = ['EnterpriseUserAccount','User']
module.exports.isEnterpriseMember = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseMember"')
  return EnterpriseMember_possibleTypes.includes(obj.__typename)
}



var EnterpriseMemberConnection_possibleTypes = ['EnterpriseMemberConnection']
module.exports.isEnterpriseMemberConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseMemberConnection"')
  return EnterpriseMemberConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseMemberEdge_possibleTypes = ['EnterpriseMemberEdge']
module.exports.isEnterpriseMemberEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseMemberEdge"')
  return EnterpriseMemberEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseOrganizationMembershipConnection_possibleTypes = ['EnterpriseOrganizationMembershipConnection']
module.exports.isEnterpriseOrganizationMembershipConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseOrganizationMembershipConnection"')
  return EnterpriseOrganizationMembershipConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseOrganizationMembershipEdge_possibleTypes = ['EnterpriseOrganizationMembershipEdge']
module.exports.isEnterpriseOrganizationMembershipEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseOrganizationMembershipEdge"')
  return EnterpriseOrganizationMembershipEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseOutsideCollaboratorConnection_possibleTypes = ['EnterpriseOutsideCollaboratorConnection']
module.exports.isEnterpriseOutsideCollaboratorConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseOutsideCollaboratorConnection"')
  return EnterpriseOutsideCollaboratorConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseOutsideCollaboratorEdge_possibleTypes = ['EnterpriseOutsideCollaboratorEdge']
module.exports.isEnterpriseOutsideCollaboratorEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseOutsideCollaboratorEdge"')
  return EnterpriseOutsideCollaboratorEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseOwnerInfo_possibleTypes = ['EnterpriseOwnerInfo']
module.exports.isEnterpriseOwnerInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseOwnerInfo"')
  return EnterpriseOwnerInfo_possibleTypes.includes(obj.__typename)
}



var EnterprisePendingCollaboratorConnection_possibleTypes = ['EnterprisePendingCollaboratorConnection']
module.exports.isEnterprisePendingCollaboratorConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterprisePendingCollaboratorConnection"')
  return EnterprisePendingCollaboratorConnection_possibleTypes.includes(obj.__typename)
}



var EnterprisePendingCollaboratorEdge_possibleTypes = ['EnterprisePendingCollaboratorEdge']
module.exports.isEnterprisePendingCollaboratorEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterprisePendingCollaboratorEdge"')
  return EnterprisePendingCollaboratorEdge_possibleTypes.includes(obj.__typename)
}



var EnterprisePendingMemberInvitationConnection_possibleTypes = ['EnterprisePendingMemberInvitationConnection']
module.exports.isEnterprisePendingMemberInvitationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterprisePendingMemberInvitationConnection"')
  return EnterprisePendingMemberInvitationConnection_possibleTypes.includes(obj.__typename)
}



var EnterprisePendingMemberInvitationEdge_possibleTypes = ['EnterprisePendingMemberInvitationEdge']
module.exports.isEnterprisePendingMemberInvitationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterprisePendingMemberInvitationEdge"')
  return EnterprisePendingMemberInvitationEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseRepositoryInfo_possibleTypes = ['EnterpriseRepositoryInfo']
module.exports.isEnterpriseRepositoryInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseRepositoryInfo"')
  return EnterpriseRepositoryInfo_possibleTypes.includes(obj.__typename)
}



var EnterpriseRepositoryInfoConnection_possibleTypes = ['EnterpriseRepositoryInfoConnection']
module.exports.isEnterpriseRepositoryInfoConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseRepositoryInfoConnection"')
  return EnterpriseRepositoryInfoConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseRepositoryInfoEdge_possibleTypes = ['EnterpriseRepositoryInfoEdge']
module.exports.isEnterpriseRepositoryInfoEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseRepositoryInfoEdge"')
  return EnterpriseRepositoryInfoEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerInstallation_possibleTypes = ['EnterpriseServerInstallation']
module.exports.isEnterpriseServerInstallation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerInstallation"')
  return EnterpriseServerInstallation_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerInstallationConnection_possibleTypes = ['EnterpriseServerInstallationConnection']
module.exports.isEnterpriseServerInstallationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerInstallationConnection"')
  return EnterpriseServerInstallationConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerInstallationEdge_possibleTypes = ['EnterpriseServerInstallationEdge']
module.exports.isEnterpriseServerInstallationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerInstallationEdge"')
  return EnterpriseServerInstallationEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccount_possibleTypes = ['EnterpriseServerUserAccount']
module.exports.isEnterpriseServerUserAccount = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccount"')
  return EnterpriseServerUserAccount_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountConnection_possibleTypes = ['EnterpriseServerUserAccountConnection']
module.exports.isEnterpriseServerUserAccountConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountConnection"')
  return EnterpriseServerUserAccountConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountEdge_possibleTypes = ['EnterpriseServerUserAccountEdge']
module.exports.isEnterpriseServerUserAccountEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountEdge"')
  return EnterpriseServerUserAccountEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountEmail_possibleTypes = ['EnterpriseServerUserAccountEmail']
module.exports.isEnterpriseServerUserAccountEmail = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountEmail"')
  return EnterpriseServerUserAccountEmail_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountEmailConnection_possibleTypes = ['EnterpriseServerUserAccountEmailConnection']
module.exports.isEnterpriseServerUserAccountEmailConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountEmailConnection"')
  return EnterpriseServerUserAccountEmailConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountEmailEdge_possibleTypes = ['EnterpriseServerUserAccountEmailEdge']
module.exports.isEnterpriseServerUserAccountEmailEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountEmailEdge"')
  return EnterpriseServerUserAccountEmailEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountsUpload_possibleTypes = ['EnterpriseServerUserAccountsUpload']
module.exports.isEnterpriseServerUserAccountsUpload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountsUpload"')
  return EnterpriseServerUserAccountsUpload_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountsUploadConnection_possibleTypes = ['EnterpriseServerUserAccountsUploadConnection']
module.exports.isEnterpriseServerUserAccountsUploadConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountsUploadConnection"')
  return EnterpriseServerUserAccountsUploadConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseServerUserAccountsUploadEdge_possibleTypes = ['EnterpriseServerUserAccountsUploadEdge']
module.exports.isEnterpriseServerUserAccountsUploadEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseServerUserAccountsUploadEdge"')
  return EnterpriseServerUserAccountsUploadEdge_possibleTypes.includes(obj.__typename)
}



var EnterpriseUserAccount_possibleTypes = ['EnterpriseUserAccount']
module.exports.isEnterpriseUserAccount = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseUserAccount"')
  return EnterpriseUserAccount_possibleTypes.includes(obj.__typename)
}



var EnterpriseUserAccountConnection_possibleTypes = ['EnterpriseUserAccountConnection']
module.exports.isEnterpriseUserAccountConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseUserAccountConnection"')
  return EnterpriseUserAccountConnection_possibleTypes.includes(obj.__typename)
}



var EnterpriseUserAccountEdge_possibleTypes = ['EnterpriseUserAccountEdge']
module.exports.isEnterpriseUserAccountEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnterpriseUserAccountEdge"')
  return EnterpriseUserAccountEdge_possibleTypes.includes(obj.__typename)
}



var ExternalIdentity_possibleTypes = ['ExternalIdentity']
module.exports.isExternalIdentity = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExternalIdentity"')
  return ExternalIdentity_possibleTypes.includes(obj.__typename)
}



var ExternalIdentityConnection_possibleTypes = ['ExternalIdentityConnection']
module.exports.isExternalIdentityConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExternalIdentityConnection"')
  return ExternalIdentityConnection_possibleTypes.includes(obj.__typename)
}



var ExternalIdentityEdge_possibleTypes = ['ExternalIdentityEdge']
module.exports.isExternalIdentityEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExternalIdentityEdge"')
  return ExternalIdentityEdge_possibleTypes.includes(obj.__typename)
}



var ExternalIdentitySamlAttributes_possibleTypes = ['ExternalIdentitySamlAttributes']
module.exports.isExternalIdentitySamlAttributes = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExternalIdentitySamlAttributes"')
  return ExternalIdentitySamlAttributes_possibleTypes.includes(obj.__typename)
}



var ExternalIdentityScimAttributes_possibleTypes = ['ExternalIdentityScimAttributes']
module.exports.isExternalIdentityScimAttributes = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExternalIdentityScimAttributes"')
  return ExternalIdentityScimAttributes_possibleTypes.includes(obj.__typename)
}



var FollowUserPayload_possibleTypes = ['FollowUserPayload']
module.exports.isFollowUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollowUserPayload"')
  return FollowUserPayload_possibleTypes.includes(obj.__typename)
}



var FollowerConnection_possibleTypes = ['FollowerConnection']
module.exports.isFollowerConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollowerConnection"')
  return FollowerConnection_possibleTypes.includes(obj.__typename)
}



var FollowingConnection_possibleTypes = ['FollowingConnection']
module.exports.isFollowingConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFollowingConnection"')
  return FollowingConnection_possibleTypes.includes(obj.__typename)
}



var FundingLink_possibleTypes = ['FundingLink']
module.exports.isFundingLink = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFundingLink"')
  return FundingLink_possibleTypes.includes(obj.__typename)
}



var GenericHovercardContext_possibleTypes = ['GenericHovercardContext']
module.exports.isGenericHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGenericHovercardContext"')
  return GenericHovercardContext_possibleTypes.includes(obj.__typename)
}



var Gist_possibleTypes = ['Gist']
module.exports.isGist = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGist"')
  return Gist_possibleTypes.includes(obj.__typename)
}



var GistComment_possibleTypes = ['GistComment']
module.exports.isGistComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistComment"')
  return GistComment_possibleTypes.includes(obj.__typename)
}



var GistCommentConnection_possibleTypes = ['GistCommentConnection']
module.exports.isGistCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistCommentConnection"')
  return GistCommentConnection_possibleTypes.includes(obj.__typename)
}



var GistCommentEdge_possibleTypes = ['GistCommentEdge']
module.exports.isGistCommentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistCommentEdge"')
  return GistCommentEdge_possibleTypes.includes(obj.__typename)
}



var GistConnection_possibleTypes = ['GistConnection']
module.exports.isGistConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistConnection"')
  return GistConnection_possibleTypes.includes(obj.__typename)
}



var GistEdge_possibleTypes = ['GistEdge']
module.exports.isGistEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistEdge"')
  return GistEdge_possibleTypes.includes(obj.__typename)
}



var GistFile_possibleTypes = ['GistFile']
module.exports.isGistFile = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGistFile"')
  return GistFile_possibleTypes.includes(obj.__typename)
}



var GitActor_possibleTypes = ['GitActor']
module.exports.isGitActor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGitActor"')
  return GitActor_possibleTypes.includes(obj.__typename)
}



var GitHubMetadata_possibleTypes = ['GitHubMetadata']
module.exports.isGitHubMetadata = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGitHubMetadata"')
  return GitHubMetadata_possibleTypes.includes(obj.__typename)
}



var GitObject_possibleTypes = ['Blob','Commit','Tag','Tree']
module.exports.isGitObject = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGitObject"')
  return GitObject_possibleTypes.includes(obj.__typename)
}



var GitSignature_possibleTypes = ['GpgSignature','SmimeSignature','UnknownSignature']
module.exports.isGitSignature = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGitSignature"')
  return GitSignature_possibleTypes.includes(obj.__typename)
}



var GpgSignature_possibleTypes = ['GpgSignature']
module.exports.isGpgSignature = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGpgSignature"')
  return GpgSignature_possibleTypes.includes(obj.__typename)
}



var HeadRefDeletedEvent_possibleTypes = ['HeadRefDeletedEvent']
module.exports.isHeadRefDeletedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHeadRefDeletedEvent"')
  return HeadRefDeletedEvent_possibleTypes.includes(obj.__typename)
}



var HeadRefForcePushedEvent_possibleTypes = ['HeadRefForcePushedEvent']
module.exports.isHeadRefForcePushedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHeadRefForcePushedEvent"')
  return HeadRefForcePushedEvent_possibleTypes.includes(obj.__typename)
}



var HeadRefRestoredEvent_possibleTypes = ['HeadRefRestoredEvent']
module.exports.isHeadRefRestoredEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHeadRefRestoredEvent"')
  return HeadRefRestoredEvent_possibleTypes.includes(obj.__typename)
}



var Hovercard_possibleTypes = ['Hovercard']
module.exports.isHovercard = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHovercard"')
  return Hovercard_possibleTypes.includes(obj.__typename)
}



var HovercardContext_possibleTypes = ['GenericHovercardContext','OrganizationTeamsHovercardContext','OrganizationsHovercardContext','ReviewStatusHovercardContext','ViewerHovercardContext']
module.exports.isHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHovercardContext"')
  return HovercardContext_possibleTypes.includes(obj.__typename)
}



var ImportProjectPayload_possibleTypes = ['ImportProjectPayload']
module.exports.isImportProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isImportProjectPayload"')
  return ImportProjectPayload_possibleTypes.includes(obj.__typename)
}



var InviteEnterpriseAdminPayload_possibleTypes = ['InviteEnterpriseAdminPayload']
module.exports.isInviteEnterpriseAdminPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isInviteEnterpriseAdminPayload"')
  return InviteEnterpriseAdminPayload_possibleTypes.includes(obj.__typename)
}



var IpAllowListEntry_possibleTypes = ['IpAllowListEntry']
module.exports.isIpAllowListEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIpAllowListEntry"')
  return IpAllowListEntry_possibleTypes.includes(obj.__typename)
}



var IpAllowListEntryConnection_possibleTypes = ['IpAllowListEntryConnection']
module.exports.isIpAllowListEntryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIpAllowListEntryConnection"')
  return IpAllowListEntryConnection_possibleTypes.includes(obj.__typename)
}



var IpAllowListEntryEdge_possibleTypes = ['IpAllowListEntryEdge']
module.exports.isIpAllowListEntryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIpAllowListEntryEdge"')
  return IpAllowListEntryEdge_possibleTypes.includes(obj.__typename)
}



var IpAllowListOwner_possibleTypes = ['Enterprise','Organization']
module.exports.isIpAllowListOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIpAllowListOwner"')
  return IpAllowListOwner_possibleTypes.includes(obj.__typename)
}



var Issue_possibleTypes = ['Issue']
module.exports.isIssue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssue"')
  return Issue_possibleTypes.includes(obj.__typename)
}



var IssueComment_possibleTypes = ['IssueComment']
module.exports.isIssueComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueComment"')
  return IssueComment_possibleTypes.includes(obj.__typename)
}



var IssueCommentConnection_possibleTypes = ['IssueCommentConnection']
module.exports.isIssueCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueCommentConnection"')
  return IssueCommentConnection_possibleTypes.includes(obj.__typename)
}



var IssueCommentEdge_possibleTypes = ['IssueCommentEdge']
module.exports.isIssueCommentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueCommentEdge"')
  return IssueCommentEdge_possibleTypes.includes(obj.__typename)
}



var IssueConnection_possibleTypes = ['IssueConnection']
module.exports.isIssueConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueConnection"')
  return IssueConnection_possibleTypes.includes(obj.__typename)
}



var IssueContributionsByRepository_possibleTypes = ['IssueContributionsByRepository']
module.exports.isIssueContributionsByRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueContributionsByRepository"')
  return IssueContributionsByRepository_possibleTypes.includes(obj.__typename)
}



var IssueEdge_possibleTypes = ['IssueEdge']
module.exports.isIssueEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueEdge"')
  return IssueEdge_possibleTypes.includes(obj.__typename)
}



var IssueOrPullRequest_possibleTypes = ['Issue','PullRequest']
module.exports.isIssueOrPullRequest = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueOrPullRequest"')
  return IssueOrPullRequest_possibleTypes.includes(obj.__typename)
}



var IssueTimelineConnection_possibleTypes = ['IssueTimelineConnection']
module.exports.isIssueTimelineConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineConnection"')
  return IssueTimelineConnection_possibleTypes.includes(obj.__typename)
}



var IssueTimelineItem_possibleTypes = ['AssignedEvent','ClosedEvent','Commit','CrossReferencedEvent','DemilestonedEvent','IssueComment','LabeledEvent','LockedEvent','MilestonedEvent','ReferencedEvent','RenamedTitleEvent','ReopenedEvent','SubscribedEvent','TransferredEvent','UnassignedEvent','UnlabeledEvent','UnlockedEvent','UnsubscribedEvent','UserBlockedEvent']
module.exports.isIssueTimelineItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineItem"')
  return IssueTimelineItem_possibleTypes.includes(obj.__typename)
}



var IssueTimelineItemEdge_possibleTypes = ['IssueTimelineItemEdge']
module.exports.isIssueTimelineItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineItemEdge"')
  return IssueTimelineItemEdge_possibleTypes.includes(obj.__typename)
}



var IssueTimelineItems_possibleTypes = ['AddedToProjectEvent','AssignedEvent','ClosedEvent','CommentDeletedEvent','ConnectedEvent','ConvertedNoteToIssueEvent','CrossReferencedEvent','DemilestonedEvent','DisconnectedEvent','IssueComment','LabeledEvent','LockedEvent','MarkedAsDuplicateEvent','MentionedEvent','MilestonedEvent','MovedColumnsInProjectEvent','PinnedEvent','ReferencedEvent','RemovedFromProjectEvent','RenamedTitleEvent','ReopenedEvent','SubscribedEvent','TransferredEvent','UnassignedEvent','UnlabeledEvent','UnlockedEvent','UnmarkedAsDuplicateEvent','UnpinnedEvent','UnsubscribedEvent','UserBlockedEvent']
module.exports.isIssueTimelineItems = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineItems"')
  return IssueTimelineItems_possibleTypes.includes(obj.__typename)
}



var IssueTimelineItemsConnection_possibleTypes = ['IssueTimelineItemsConnection']
module.exports.isIssueTimelineItemsConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineItemsConnection"')
  return IssueTimelineItemsConnection_possibleTypes.includes(obj.__typename)
}



var IssueTimelineItemsEdge_possibleTypes = ['IssueTimelineItemsEdge']
module.exports.isIssueTimelineItemsEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueTimelineItemsEdge"')
  return IssueTimelineItemsEdge_possibleTypes.includes(obj.__typename)
}



var JoinedGitHubContribution_possibleTypes = ['JoinedGitHubContribution']
module.exports.isJoinedGitHubContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isJoinedGitHubContribution"')
  return JoinedGitHubContribution_possibleTypes.includes(obj.__typename)
}



var Label_possibleTypes = ['Label']
module.exports.isLabel = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLabel"')
  return Label_possibleTypes.includes(obj.__typename)
}



var LabelConnection_possibleTypes = ['LabelConnection']
module.exports.isLabelConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLabelConnection"')
  return LabelConnection_possibleTypes.includes(obj.__typename)
}



var LabelEdge_possibleTypes = ['LabelEdge']
module.exports.isLabelEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLabelEdge"')
  return LabelEdge_possibleTypes.includes(obj.__typename)
}



var Labelable_possibleTypes = ['Issue','PullRequest']
module.exports.isLabelable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLabelable"')
  return Labelable_possibleTypes.includes(obj.__typename)
}



var LabeledEvent_possibleTypes = ['LabeledEvent']
module.exports.isLabeledEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLabeledEvent"')
  return LabeledEvent_possibleTypes.includes(obj.__typename)
}



var Language_possibleTypes = ['Language']
module.exports.isLanguage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLanguage"')
  return Language_possibleTypes.includes(obj.__typename)
}



var LanguageConnection_possibleTypes = ['LanguageConnection']
module.exports.isLanguageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLanguageConnection"')
  return LanguageConnection_possibleTypes.includes(obj.__typename)
}



var LanguageEdge_possibleTypes = ['LanguageEdge']
module.exports.isLanguageEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLanguageEdge"')
  return LanguageEdge_possibleTypes.includes(obj.__typename)
}



var License_possibleTypes = ['License']
module.exports.isLicense = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLicense"')
  return License_possibleTypes.includes(obj.__typename)
}



var LicenseRule_possibleTypes = ['LicenseRule']
module.exports.isLicenseRule = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLicenseRule"')
  return LicenseRule_possibleTypes.includes(obj.__typename)
}



var LinkRepositoryToProjectPayload_possibleTypes = ['LinkRepositoryToProjectPayload']
module.exports.isLinkRepositoryToProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLinkRepositoryToProjectPayload"')
  return LinkRepositoryToProjectPayload_possibleTypes.includes(obj.__typename)
}



var LockLockablePayload_possibleTypes = ['LockLockablePayload']
module.exports.isLockLockablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLockLockablePayload"')
  return LockLockablePayload_possibleTypes.includes(obj.__typename)
}



var Lockable_possibleTypes = ['Issue','PullRequest']
module.exports.isLockable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLockable"')
  return Lockable_possibleTypes.includes(obj.__typename)
}



var LockedEvent_possibleTypes = ['LockedEvent']
module.exports.isLockedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLockedEvent"')
  return LockedEvent_possibleTypes.includes(obj.__typename)
}



var Mannequin_possibleTypes = ['Mannequin']
module.exports.isMannequin = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMannequin"')
  return Mannequin_possibleTypes.includes(obj.__typename)
}



var MarkPullRequestReadyForReviewPayload_possibleTypes = ['MarkPullRequestReadyForReviewPayload']
module.exports.isMarkPullRequestReadyForReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarkPullRequestReadyForReviewPayload"')
  return MarkPullRequestReadyForReviewPayload_possibleTypes.includes(obj.__typename)
}



var MarkedAsDuplicateEvent_possibleTypes = ['MarkedAsDuplicateEvent']
module.exports.isMarkedAsDuplicateEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarkedAsDuplicateEvent"')
  return MarkedAsDuplicateEvent_possibleTypes.includes(obj.__typename)
}



var MarketplaceCategory_possibleTypes = ['MarketplaceCategory']
module.exports.isMarketplaceCategory = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarketplaceCategory"')
  return MarketplaceCategory_possibleTypes.includes(obj.__typename)
}



var MarketplaceListing_possibleTypes = ['MarketplaceListing']
module.exports.isMarketplaceListing = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarketplaceListing"')
  return MarketplaceListing_possibleTypes.includes(obj.__typename)
}



var MarketplaceListingConnection_possibleTypes = ['MarketplaceListingConnection']
module.exports.isMarketplaceListingConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarketplaceListingConnection"')
  return MarketplaceListingConnection_possibleTypes.includes(obj.__typename)
}



var MarketplaceListingEdge_possibleTypes = ['MarketplaceListingEdge']
module.exports.isMarketplaceListingEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMarketplaceListingEdge"')
  return MarketplaceListingEdge_possibleTypes.includes(obj.__typename)
}



var MemberStatusable_possibleTypes = ['Organization','Team']
module.exports.isMemberStatusable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMemberStatusable"')
  return MemberStatusable_possibleTypes.includes(obj.__typename)
}



var MembersCanDeleteReposClearAuditEntry_possibleTypes = ['MembersCanDeleteReposClearAuditEntry']
module.exports.isMembersCanDeleteReposClearAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMembersCanDeleteReposClearAuditEntry"')
  return MembersCanDeleteReposClearAuditEntry_possibleTypes.includes(obj.__typename)
}



var MembersCanDeleteReposDisableAuditEntry_possibleTypes = ['MembersCanDeleteReposDisableAuditEntry']
module.exports.isMembersCanDeleteReposDisableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMembersCanDeleteReposDisableAuditEntry"')
  return MembersCanDeleteReposDisableAuditEntry_possibleTypes.includes(obj.__typename)
}



var MembersCanDeleteReposEnableAuditEntry_possibleTypes = ['MembersCanDeleteReposEnableAuditEntry']
module.exports.isMembersCanDeleteReposEnableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMembersCanDeleteReposEnableAuditEntry"')
  return MembersCanDeleteReposEnableAuditEntry_possibleTypes.includes(obj.__typename)
}



var MentionedEvent_possibleTypes = ['MentionedEvent']
module.exports.isMentionedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMentionedEvent"')
  return MentionedEvent_possibleTypes.includes(obj.__typename)
}



var MergeBranchPayload_possibleTypes = ['MergeBranchPayload']
module.exports.isMergeBranchPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMergeBranchPayload"')
  return MergeBranchPayload_possibleTypes.includes(obj.__typename)
}



var MergePullRequestPayload_possibleTypes = ['MergePullRequestPayload']
module.exports.isMergePullRequestPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMergePullRequestPayload"')
  return MergePullRequestPayload_possibleTypes.includes(obj.__typename)
}



var MergedEvent_possibleTypes = ['MergedEvent']
module.exports.isMergedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMergedEvent"')
  return MergedEvent_possibleTypes.includes(obj.__typename)
}



var Milestone_possibleTypes = ['Milestone']
module.exports.isMilestone = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMilestone"')
  return Milestone_possibleTypes.includes(obj.__typename)
}



var MilestoneConnection_possibleTypes = ['MilestoneConnection']
module.exports.isMilestoneConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMilestoneConnection"')
  return MilestoneConnection_possibleTypes.includes(obj.__typename)
}



var MilestoneEdge_possibleTypes = ['MilestoneEdge']
module.exports.isMilestoneEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMilestoneEdge"')
  return MilestoneEdge_possibleTypes.includes(obj.__typename)
}



var MilestoneItem_possibleTypes = ['Issue','PullRequest']
module.exports.isMilestoneItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMilestoneItem"')
  return MilestoneItem_possibleTypes.includes(obj.__typename)
}



var MilestonedEvent_possibleTypes = ['MilestonedEvent']
module.exports.isMilestonedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMilestonedEvent"')
  return MilestonedEvent_possibleTypes.includes(obj.__typename)
}



var Minimizable_possibleTypes = ['CommitComment','GistComment','IssueComment','PullRequestReviewComment']
module.exports.isMinimizable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMinimizable"')
  return Minimizable_possibleTypes.includes(obj.__typename)
}



var MinimizeCommentPayload_possibleTypes = ['MinimizeCommentPayload']
module.exports.isMinimizeCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMinimizeCommentPayload"')
  return MinimizeCommentPayload_possibleTypes.includes(obj.__typename)
}



var MoveProjectCardPayload_possibleTypes = ['MoveProjectCardPayload']
module.exports.isMoveProjectCardPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMoveProjectCardPayload"')
  return MoveProjectCardPayload_possibleTypes.includes(obj.__typename)
}



var MoveProjectColumnPayload_possibleTypes = ['MoveProjectColumnPayload']
module.exports.isMoveProjectColumnPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMoveProjectColumnPayload"')
  return MoveProjectColumnPayload_possibleTypes.includes(obj.__typename)
}



var MovedColumnsInProjectEvent_possibleTypes = ['MovedColumnsInProjectEvent']
module.exports.isMovedColumnsInProjectEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMovedColumnsInProjectEvent"')
  return MovedColumnsInProjectEvent_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
module.exports.isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var Node_possibleTypes = ['AddedToProjectEvent','App','AssignedEvent','AutomaticBaseChangeFailedEvent','AutomaticBaseChangeSucceededEvent','BaseRefChangedEvent','BaseRefForcePushedEvent','Blob','Bot','BranchProtectionRule','CheckRun','CheckSuite','ClosedEvent','CodeOfConduct','CommentDeletedEvent','Commit','CommitComment','CommitCommentThread','ConnectedEvent','ConvertToDraftEvent','ConvertedNoteToIssueEvent','CrossReferencedEvent','DemilestonedEvent','DependencyGraphManifest','DeployKey','DeployedEvent','Deployment','DeploymentEnvironmentChangedEvent','DeploymentStatus','DisconnectedEvent','Enterprise','EnterpriseAdministratorInvitation','EnterpriseIdentityProvider','EnterpriseRepositoryInfo','EnterpriseServerInstallation','EnterpriseServerUserAccount','EnterpriseServerUserAccountEmail','EnterpriseServerUserAccountsUpload','EnterpriseUserAccount','ExternalIdentity','Gist','GistComment','HeadRefDeletedEvent','HeadRefForcePushedEvent','HeadRefRestoredEvent','IpAllowListEntry','Issue','IssueComment','Label','LabeledEvent','Language','License','LockedEvent','Mannequin','MarkedAsDuplicateEvent','MarketplaceCategory','MarketplaceListing','MembersCanDeleteReposClearAuditEntry','MembersCanDeleteReposDisableAuditEntry','MembersCanDeleteReposEnableAuditEntry','MentionedEvent','MergedEvent','Milestone','MilestonedEvent','MovedColumnsInProjectEvent','OauthApplicationCreateAuditEntry','OrgAddBillingManagerAuditEntry','OrgAddMemberAuditEntry','OrgBlockUserAuditEntry','OrgConfigDisableCollaboratorsOnlyAuditEntry','OrgConfigEnableCollaboratorsOnlyAuditEntry','OrgCreateAuditEntry','OrgDisableOauthAppRestrictionsAuditEntry','OrgDisableSamlAuditEntry','OrgDisableTwoFactorRequirementAuditEntry','OrgEnableOauthAppRestrictionsAuditEntry','OrgEnableSamlAuditEntry','OrgEnableTwoFactorRequirementAuditEntry','OrgInviteMemberAuditEntry','OrgInviteToBusinessAuditEntry','OrgOauthAppAccessApprovedAuditEntry','OrgOauthAppAccessDeniedAuditEntry','OrgOauthAppAccessRequestedAuditEntry','OrgRemoveBillingManagerAuditEntry','OrgRemoveMemberAuditEntry','OrgRemoveOutsideCollaboratorAuditEntry','OrgRestoreMemberAuditEntry','OrgUnblockUserAuditEntry','OrgUpdateDefaultRepositoryPermissionAuditEntry','OrgUpdateMemberAuditEntry','OrgUpdateMemberRepositoryCreationPermissionAuditEntry','OrgUpdateMemberRepositoryInvitationPermissionAuditEntry','Organization','OrganizationIdentityProvider','OrganizationInvitation','Package','PackageFile','PackageTag','PackageVersion','PinnedEvent','PinnedIssue','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','Project','ProjectCard','ProjectColumn','PublicKey','PullRequest','PullRequestCommit','PullRequestCommitCommentThread','PullRequestReview','PullRequestReviewComment','PullRequestReviewThread','Push','PushAllowance','Reaction','ReadyForReviewEvent','Ref','ReferencedEvent','RegistryPackage','RegistryPackageDependency','RegistryPackageFile','RegistryPackageTag','RegistryPackageVersion','Release','ReleaseAsset','RemovedFromProjectEvent','RenamedTitleEvent','ReopenedEvent','RepoAccessAuditEntry','RepoAddMemberAuditEntry','RepoAddTopicAuditEntry','RepoArchivedAuditEntry','RepoChangeMergeSettingAuditEntry','RepoConfigDisableAnonymousGitAccessAuditEntry','RepoConfigDisableCollaboratorsOnlyAuditEntry','RepoConfigDisableContributorsOnlyAuditEntry','RepoConfigDisableSockpuppetDisallowedAuditEntry','RepoConfigEnableAnonymousGitAccessAuditEntry','RepoConfigEnableCollaboratorsOnlyAuditEntry','RepoConfigEnableContributorsOnlyAuditEntry','RepoConfigEnableSockpuppetDisallowedAuditEntry','RepoConfigLockAnonymousGitAccessAuditEntry','RepoConfigUnlockAnonymousGitAccessAuditEntry','RepoCreateAuditEntry','RepoDestroyAuditEntry','RepoRemoveMemberAuditEntry','RepoRemoveTopicAuditEntry','Repository','RepositoryInvitation','RepositoryTopic','RepositoryVisibilityChangeDisableAuditEntry','RepositoryVisibilityChangeEnableAuditEntry','RepositoryVulnerabilityAlert','ReviewDismissalAllowance','ReviewDismissedEvent','ReviewRequest','ReviewRequestRemovedEvent','ReviewRequestedEvent','SavedReply','SecurityAdvisory','SponsorsListing','SponsorsTier','Sponsorship','Status','StatusCheckRollup','StatusContext','SubscribedEvent','Tag','Team','TeamAddMemberAuditEntry','TeamAddRepositoryAuditEntry','TeamChangeParentTeamAuditEntry','TeamDiscussion','TeamDiscussionComment','TeamRemoveMemberAuditEntry','TeamRemoveRepositoryAuditEntry','Topic','TransferredEvent','Tree','UnassignedEvent','UnlabeledEvent','UnlockedEvent','UnmarkedAsDuplicateEvent','UnpinnedEvent','UnsubscribedEvent','User','UserBlockedEvent','UserContentEdit','UserStatus']
module.exports.isNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNode"')
  return Node_possibleTypes.includes(obj.__typename)
}



var OauthApplicationAuditEntryData_possibleTypes = ['OauthApplicationCreateAuditEntry','OrgOauthAppAccessApprovedAuditEntry','OrgOauthAppAccessDeniedAuditEntry','OrgOauthAppAccessRequestedAuditEntry']
module.exports.isOauthApplicationAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOauthApplicationAuditEntryData"')
  return OauthApplicationAuditEntryData_possibleTypes.includes(obj.__typename)
}



var OauthApplicationCreateAuditEntry_possibleTypes = ['OauthApplicationCreateAuditEntry']
module.exports.isOauthApplicationCreateAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOauthApplicationCreateAuditEntry"')
  return OauthApplicationCreateAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgAddBillingManagerAuditEntry_possibleTypes = ['OrgAddBillingManagerAuditEntry']
module.exports.isOrgAddBillingManagerAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgAddBillingManagerAuditEntry"')
  return OrgAddBillingManagerAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgAddMemberAuditEntry_possibleTypes = ['OrgAddMemberAuditEntry']
module.exports.isOrgAddMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgAddMemberAuditEntry"')
  return OrgAddMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgBlockUserAuditEntry_possibleTypes = ['OrgBlockUserAuditEntry']
module.exports.isOrgBlockUserAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgBlockUserAuditEntry"')
  return OrgBlockUserAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgConfigDisableCollaboratorsOnlyAuditEntry_possibleTypes = ['OrgConfigDisableCollaboratorsOnlyAuditEntry']
module.exports.isOrgConfigDisableCollaboratorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgConfigDisableCollaboratorsOnlyAuditEntry"')
  return OrgConfigDisableCollaboratorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgConfigEnableCollaboratorsOnlyAuditEntry_possibleTypes = ['OrgConfigEnableCollaboratorsOnlyAuditEntry']
module.exports.isOrgConfigEnableCollaboratorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgConfigEnableCollaboratorsOnlyAuditEntry"')
  return OrgConfigEnableCollaboratorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgCreateAuditEntry_possibleTypes = ['OrgCreateAuditEntry']
module.exports.isOrgCreateAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgCreateAuditEntry"')
  return OrgCreateAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgDisableOauthAppRestrictionsAuditEntry_possibleTypes = ['OrgDisableOauthAppRestrictionsAuditEntry']
module.exports.isOrgDisableOauthAppRestrictionsAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgDisableOauthAppRestrictionsAuditEntry"')
  return OrgDisableOauthAppRestrictionsAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgDisableSamlAuditEntry_possibleTypes = ['OrgDisableSamlAuditEntry']
module.exports.isOrgDisableSamlAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgDisableSamlAuditEntry"')
  return OrgDisableSamlAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgDisableTwoFactorRequirementAuditEntry_possibleTypes = ['OrgDisableTwoFactorRequirementAuditEntry']
module.exports.isOrgDisableTwoFactorRequirementAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgDisableTwoFactorRequirementAuditEntry"')
  return OrgDisableTwoFactorRequirementAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgEnableOauthAppRestrictionsAuditEntry_possibleTypes = ['OrgEnableOauthAppRestrictionsAuditEntry']
module.exports.isOrgEnableOauthAppRestrictionsAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgEnableOauthAppRestrictionsAuditEntry"')
  return OrgEnableOauthAppRestrictionsAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgEnableSamlAuditEntry_possibleTypes = ['OrgEnableSamlAuditEntry']
module.exports.isOrgEnableSamlAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgEnableSamlAuditEntry"')
  return OrgEnableSamlAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgEnableTwoFactorRequirementAuditEntry_possibleTypes = ['OrgEnableTwoFactorRequirementAuditEntry']
module.exports.isOrgEnableTwoFactorRequirementAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgEnableTwoFactorRequirementAuditEntry"')
  return OrgEnableTwoFactorRequirementAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgInviteMemberAuditEntry_possibleTypes = ['OrgInviteMemberAuditEntry']
module.exports.isOrgInviteMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgInviteMemberAuditEntry"')
  return OrgInviteMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgInviteToBusinessAuditEntry_possibleTypes = ['OrgInviteToBusinessAuditEntry']
module.exports.isOrgInviteToBusinessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgInviteToBusinessAuditEntry"')
  return OrgInviteToBusinessAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgOauthAppAccessApprovedAuditEntry_possibleTypes = ['OrgOauthAppAccessApprovedAuditEntry']
module.exports.isOrgOauthAppAccessApprovedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgOauthAppAccessApprovedAuditEntry"')
  return OrgOauthAppAccessApprovedAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgOauthAppAccessDeniedAuditEntry_possibleTypes = ['OrgOauthAppAccessDeniedAuditEntry']
module.exports.isOrgOauthAppAccessDeniedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgOauthAppAccessDeniedAuditEntry"')
  return OrgOauthAppAccessDeniedAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgOauthAppAccessRequestedAuditEntry_possibleTypes = ['OrgOauthAppAccessRequestedAuditEntry']
module.exports.isOrgOauthAppAccessRequestedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgOauthAppAccessRequestedAuditEntry"')
  return OrgOauthAppAccessRequestedAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgRemoveBillingManagerAuditEntry_possibleTypes = ['OrgRemoveBillingManagerAuditEntry']
module.exports.isOrgRemoveBillingManagerAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRemoveBillingManagerAuditEntry"')
  return OrgRemoveBillingManagerAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgRemoveMemberAuditEntry_possibleTypes = ['OrgRemoveMemberAuditEntry']
module.exports.isOrgRemoveMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRemoveMemberAuditEntry"')
  return OrgRemoveMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgRemoveOutsideCollaboratorAuditEntry_possibleTypes = ['OrgRemoveOutsideCollaboratorAuditEntry']
module.exports.isOrgRemoveOutsideCollaboratorAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRemoveOutsideCollaboratorAuditEntry"')
  return OrgRemoveOutsideCollaboratorAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgRestoreMemberAuditEntry_possibleTypes = ['OrgRestoreMemberAuditEntry']
module.exports.isOrgRestoreMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRestoreMemberAuditEntry"')
  return OrgRestoreMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgRestoreMemberAuditEntryMembership_possibleTypes = ['OrgRestoreMemberMembershipOrganizationAuditEntryData','OrgRestoreMemberMembershipRepositoryAuditEntryData','OrgRestoreMemberMembershipTeamAuditEntryData']
module.exports.isOrgRestoreMemberAuditEntryMembership = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRestoreMemberAuditEntryMembership"')
  return OrgRestoreMemberAuditEntryMembership_possibleTypes.includes(obj.__typename)
}



var OrgRestoreMemberMembershipOrganizationAuditEntryData_possibleTypes = ['OrgRestoreMemberMembershipOrganizationAuditEntryData']
module.exports.isOrgRestoreMemberMembershipOrganizationAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRestoreMemberMembershipOrganizationAuditEntryData"')
  return OrgRestoreMemberMembershipOrganizationAuditEntryData_possibleTypes.includes(obj.__typename)
}



var OrgRestoreMemberMembershipRepositoryAuditEntryData_possibleTypes = ['OrgRestoreMemberMembershipRepositoryAuditEntryData']
module.exports.isOrgRestoreMemberMembershipRepositoryAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRestoreMemberMembershipRepositoryAuditEntryData"')
  return OrgRestoreMemberMembershipRepositoryAuditEntryData_possibleTypes.includes(obj.__typename)
}



var OrgRestoreMemberMembershipTeamAuditEntryData_possibleTypes = ['OrgRestoreMemberMembershipTeamAuditEntryData']
module.exports.isOrgRestoreMemberMembershipTeamAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgRestoreMemberMembershipTeamAuditEntryData"')
  return OrgRestoreMemberMembershipTeamAuditEntryData_possibleTypes.includes(obj.__typename)
}



var OrgUnblockUserAuditEntry_possibleTypes = ['OrgUnblockUserAuditEntry']
module.exports.isOrgUnblockUserAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgUnblockUserAuditEntry"')
  return OrgUnblockUserAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgUpdateDefaultRepositoryPermissionAuditEntry_possibleTypes = ['OrgUpdateDefaultRepositoryPermissionAuditEntry']
module.exports.isOrgUpdateDefaultRepositoryPermissionAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgUpdateDefaultRepositoryPermissionAuditEntry"')
  return OrgUpdateDefaultRepositoryPermissionAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgUpdateMemberAuditEntry_possibleTypes = ['OrgUpdateMemberAuditEntry']
module.exports.isOrgUpdateMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgUpdateMemberAuditEntry"')
  return OrgUpdateMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgUpdateMemberRepositoryCreationPermissionAuditEntry_possibleTypes = ['OrgUpdateMemberRepositoryCreationPermissionAuditEntry']
module.exports.isOrgUpdateMemberRepositoryCreationPermissionAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgUpdateMemberRepositoryCreationPermissionAuditEntry"')
  return OrgUpdateMemberRepositoryCreationPermissionAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrgUpdateMemberRepositoryInvitationPermissionAuditEntry_possibleTypes = ['OrgUpdateMemberRepositoryInvitationPermissionAuditEntry']
module.exports.isOrgUpdateMemberRepositoryInvitationPermissionAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrgUpdateMemberRepositoryInvitationPermissionAuditEntry"')
  return OrgUpdateMemberRepositoryInvitationPermissionAuditEntry_possibleTypes.includes(obj.__typename)
}



var Organization_possibleTypes = ['Organization']
module.exports.isOrganization = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganization"')
  return Organization_possibleTypes.includes(obj.__typename)
}



var OrganizationAuditEntry_possibleTypes = ['MembersCanDeleteReposClearAuditEntry','MembersCanDeleteReposDisableAuditEntry','MembersCanDeleteReposEnableAuditEntry','OauthApplicationCreateAuditEntry','OrgAddBillingManagerAuditEntry','OrgAddMemberAuditEntry','OrgBlockUserAuditEntry','OrgConfigDisableCollaboratorsOnlyAuditEntry','OrgConfigEnableCollaboratorsOnlyAuditEntry','OrgCreateAuditEntry','OrgDisableOauthAppRestrictionsAuditEntry','OrgDisableSamlAuditEntry','OrgDisableTwoFactorRequirementAuditEntry','OrgEnableOauthAppRestrictionsAuditEntry','OrgEnableSamlAuditEntry','OrgEnableTwoFactorRequirementAuditEntry','OrgInviteMemberAuditEntry','OrgInviteToBusinessAuditEntry','OrgOauthAppAccessApprovedAuditEntry','OrgOauthAppAccessDeniedAuditEntry','OrgOauthAppAccessRequestedAuditEntry','OrgRemoveBillingManagerAuditEntry','OrgRemoveMemberAuditEntry','OrgRemoveOutsideCollaboratorAuditEntry','OrgRestoreMemberAuditEntry','OrgUnblockUserAuditEntry','OrgUpdateDefaultRepositoryPermissionAuditEntry','OrgUpdateMemberAuditEntry','OrgUpdateMemberRepositoryCreationPermissionAuditEntry','OrgUpdateMemberRepositoryInvitationPermissionAuditEntry','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','RepoAccessAuditEntry','RepoAddMemberAuditEntry','RepoAddTopicAuditEntry','RepoArchivedAuditEntry','RepoChangeMergeSettingAuditEntry','RepoConfigDisableAnonymousGitAccessAuditEntry','RepoConfigDisableCollaboratorsOnlyAuditEntry','RepoConfigDisableContributorsOnlyAuditEntry','RepoConfigDisableSockpuppetDisallowedAuditEntry','RepoConfigEnableAnonymousGitAccessAuditEntry','RepoConfigEnableCollaboratorsOnlyAuditEntry','RepoConfigEnableContributorsOnlyAuditEntry','RepoConfigEnableSockpuppetDisallowedAuditEntry','RepoConfigLockAnonymousGitAccessAuditEntry','RepoConfigUnlockAnonymousGitAccessAuditEntry','RepoCreateAuditEntry','RepoDestroyAuditEntry','RepoRemoveMemberAuditEntry','RepoRemoveTopicAuditEntry','RepositoryVisibilityChangeDisableAuditEntry','RepositoryVisibilityChangeEnableAuditEntry','TeamAddMemberAuditEntry','TeamAddRepositoryAuditEntry','TeamChangeParentTeamAuditEntry','TeamRemoveMemberAuditEntry','TeamRemoveRepositoryAuditEntry']
module.exports.isOrganizationAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationAuditEntry"')
  return OrganizationAuditEntry_possibleTypes.includes(obj.__typename)
}



var OrganizationAuditEntryConnection_possibleTypes = ['OrganizationAuditEntryConnection']
module.exports.isOrganizationAuditEntryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationAuditEntryConnection"')
  return OrganizationAuditEntryConnection_possibleTypes.includes(obj.__typename)
}



var OrganizationAuditEntryData_possibleTypes = ['MembersCanDeleteReposClearAuditEntry','MembersCanDeleteReposDisableAuditEntry','MembersCanDeleteReposEnableAuditEntry','OauthApplicationCreateAuditEntry','OrgAddBillingManagerAuditEntry','OrgAddMemberAuditEntry','OrgBlockUserAuditEntry','OrgConfigDisableCollaboratorsOnlyAuditEntry','OrgConfigEnableCollaboratorsOnlyAuditEntry','OrgCreateAuditEntry','OrgDisableOauthAppRestrictionsAuditEntry','OrgDisableSamlAuditEntry','OrgDisableTwoFactorRequirementAuditEntry','OrgEnableOauthAppRestrictionsAuditEntry','OrgEnableSamlAuditEntry','OrgEnableTwoFactorRequirementAuditEntry','OrgInviteMemberAuditEntry','OrgInviteToBusinessAuditEntry','OrgOauthAppAccessApprovedAuditEntry','OrgOauthAppAccessDeniedAuditEntry','OrgOauthAppAccessRequestedAuditEntry','OrgRemoveBillingManagerAuditEntry','OrgRemoveMemberAuditEntry','OrgRemoveOutsideCollaboratorAuditEntry','OrgRestoreMemberAuditEntry','OrgRestoreMemberMembershipOrganizationAuditEntryData','OrgUnblockUserAuditEntry','OrgUpdateDefaultRepositoryPermissionAuditEntry','OrgUpdateMemberAuditEntry','OrgUpdateMemberRepositoryCreationPermissionAuditEntry','OrgUpdateMemberRepositoryInvitationPermissionAuditEntry','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','RepoAccessAuditEntry','RepoAddMemberAuditEntry','RepoAddTopicAuditEntry','RepoArchivedAuditEntry','RepoChangeMergeSettingAuditEntry','RepoConfigDisableAnonymousGitAccessAuditEntry','RepoConfigDisableCollaboratorsOnlyAuditEntry','RepoConfigDisableContributorsOnlyAuditEntry','RepoConfigDisableSockpuppetDisallowedAuditEntry','RepoConfigEnableAnonymousGitAccessAuditEntry','RepoConfigEnableCollaboratorsOnlyAuditEntry','RepoConfigEnableContributorsOnlyAuditEntry','RepoConfigEnableSockpuppetDisallowedAuditEntry','RepoConfigLockAnonymousGitAccessAuditEntry','RepoConfigUnlockAnonymousGitAccessAuditEntry','RepoCreateAuditEntry','RepoDestroyAuditEntry','RepoRemoveMemberAuditEntry','RepoRemoveTopicAuditEntry','RepositoryVisibilityChangeDisableAuditEntry','RepositoryVisibilityChangeEnableAuditEntry','TeamAddMemberAuditEntry','TeamAddRepositoryAuditEntry','TeamChangeParentTeamAuditEntry','TeamRemoveMemberAuditEntry','TeamRemoveRepositoryAuditEntry']
module.exports.isOrganizationAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationAuditEntryData"')
  return OrganizationAuditEntryData_possibleTypes.includes(obj.__typename)
}



var OrganizationAuditEntryEdge_possibleTypes = ['OrganizationAuditEntryEdge']
module.exports.isOrganizationAuditEntryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationAuditEntryEdge"')
  return OrganizationAuditEntryEdge_possibleTypes.includes(obj.__typename)
}



var OrganizationConnection_possibleTypes = ['OrganizationConnection']
module.exports.isOrganizationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationConnection"')
  return OrganizationConnection_possibleTypes.includes(obj.__typename)
}



var OrganizationEdge_possibleTypes = ['OrganizationEdge']
module.exports.isOrganizationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationEdge"')
  return OrganizationEdge_possibleTypes.includes(obj.__typename)
}



var OrganizationIdentityProvider_possibleTypes = ['OrganizationIdentityProvider']
module.exports.isOrganizationIdentityProvider = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationIdentityProvider"')
  return OrganizationIdentityProvider_possibleTypes.includes(obj.__typename)
}



var OrganizationInvitation_possibleTypes = ['OrganizationInvitation']
module.exports.isOrganizationInvitation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationInvitation"')
  return OrganizationInvitation_possibleTypes.includes(obj.__typename)
}



var OrganizationInvitationConnection_possibleTypes = ['OrganizationInvitationConnection']
module.exports.isOrganizationInvitationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationInvitationConnection"')
  return OrganizationInvitationConnection_possibleTypes.includes(obj.__typename)
}



var OrganizationInvitationEdge_possibleTypes = ['OrganizationInvitationEdge']
module.exports.isOrganizationInvitationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationInvitationEdge"')
  return OrganizationInvitationEdge_possibleTypes.includes(obj.__typename)
}



var OrganizationMemberConnection_possibleTypes = ['OrganizationMemberConnection']
module.exports.isOrganizationMemberConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationMemberConnection"')
  return OrganizationMemberConnection_possibleTypes.includes(obj.__typename)
}



var OrganizationMemberEdge_possibleTypes = ['OrganizationMemberEdge']
module.exports.isOrganizationMemberEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationMemberEdge"')
  return OrganizationMemberEdge_possibleTypes.includes(obj.__typename)
}



var OrganizationTeamsHovercardContext_possibleTypes = ['OrganizationTeamsHovercardContext']
module.exports.isOrganizationTeamsHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationTeamsHovercardContext"')
  return OrganizationTeamsHovercardContext_possibleTypes.includes(obj.__typename)
}



var OrganizationsHovercardContext_possibleTypes = ['OrganizationsHovercardContext']
module.exports.isOrganizationsHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationsHovercardContext"')
  return OrganizationsHovercardContext_possibleTypes.includes(obj.__typename)
}



var Package_possibleTypes = ['Package']
module.exports.isPackage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackage"')
  return Package_possibleTypes.includes(obj.__typename)
}



var PackageConnection_possibleTypes = ['PackageConnection']
module.exports.isPackageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageConnection"')
  return PackageConnection_possibleTypes.includes(obj.__typename)
}



var PackageEdge_possibleTypes = ['PackageEdge']
module.exports.isPackageEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageEdge"')
  return PackageEdge_possibleTypes.includes(obj.__typename)
}



var PackageFile_possibleTypes = ['PackageFile']
module.exports.isPackageFile = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageFile"')
  return PackageFile_possibleTypes.includes(obj.__typename)
}



var PackageFileConnection_possibleTypes = ['PackageFileConnection']
module.exports.isPackageFileConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageFileConnection"')
  return PackageFileConnection_possibleTypes.includes(obj.__typename)
}



var PackageFileEdge_possibleTypes = ['PackageFileEdge']
module.exports.isPackageFileEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageFileEdge"')
  return PackageFileEdge_possibleTypes.includes(obj.__typename)
}



var PackageOwner_possibleTypes = ['Organization','Repository','User']
module.exports.isPackageOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageOwner"')
  return PackageOwner_possibleTypes.includes(obj.__typename)
}



var PackageStatistics_possibleTypes = ['PackageStatistics']
module.exports.isPackageStatistics = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageStatistics"')
  return PackageStatistics_possibleTypes.includes(obj.__typename)
}



var PackageTag_possibleTypes = ['PackageTag']
module.exports.isPackageTag = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageTag"')
  return PackageTag_possibleTypes.includes(obj.__typename)
}



var PackageVersion_possibleTypes = ['PackageVersion']
module.exports.isPackageVersion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageVersion"')
  return PackageVersion_possibleTypes.includes(obj.__typename)
}



var PackageVersionConnection_possibleTypes = ['PackageVersionConnection']
module.exports.isPackageVersionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageVersionConnection"')
  return PackageVersionConnection_possibleTypes.includes(obj.__typename)
}



var PackageVersionEdge_possibleTypes = ['PackageVersionEdge']
module.exports.isPackageVersionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageVersionEdge"')
  return PackageVersionEdge_possibleTypes.includes(obj.__typename)
}



var PackageVersionStatistics_possibleTypes = ['PackageVersionStatistics']
module.exports.isPackageVersionStatistics = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPackageVersionStatistics"')
  return PackageVersionStatistics_possibleTypes.includes(obj.__typename)
}



var PageInfo_possibleTypes = ['PageInfo']
module.exports.isPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageInfo"')
  return PageInfo_possibleTypes.includes(obj.__typename)
}



var PermissionGranter_possibleTypes = ['Organization','Repository','Team']
module.exports.isPermissionGranter = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPermissionGranter"')
  return PermissionGranter_possibleTypes.includes(obj.__typename)
}



var PermissionSource_possibleTypes = ['PermissionSource']
module.exports.isPermissionSource = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPermissionSource"')
  return PermissionSource_possibleTypes.includes(obj.__typename)
}



var PinIssuePayload_possibleTypes = ['PinIssuePayload']
module.exports.isPinIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinIssuePayload"')
  return PinIssuePayload_possibleTypes.includes(obj.__typename)
}



var PinnableItem_possibleTypes = ['Gist','Repository']
module.exports.isPinnableItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnableItem"')
  return PinnableItem_possibleTypes.includes(obj.__typename)
}



var PinnableItemConnection_possibleTypes = ['PinnableItemConnection']
module.exports.isPinnableItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnableItemConnection"')
  return PinnableItemConnection_possibleTypes.includes(obj.__typename)
}



var PinnableItemEdge_possibleTypes = ['PinnableItemEdge']
module.exports.isPinnableItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnableItemEdge"')
  return PinnableItemEdge_possibleTypes.includes(obj.__typename)
}



var PinnedEvent_possibleTypes = ['PinnedEvent']
module.exports.isPinnedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnedEvent"')
  return PinnedEvent_possibleTypes.includes(obj.__typename)
}



var PinnedIssue_possibleTypes = ['PinnedIssue']
module.exports.isPinnedIssue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnedIssue"')
  return PinnedIssue_possibleTypes.includes(obj.__typename)
}



var PinnedIssueConnection_possibleTypes = ['PinnedIssueConnection']
module.exports.isPinnedIssueConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnedIssueConnection"')
  return PinnedIssueConnection_possibleTypes.includes(obj.__typename)
}



var PinnedIssueEdge_possibleTypes = ['PinnedIssueEdge']
module.exports.isPinnedIssueEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPinnedIssueEdge"')
  return PinnedIssueEdge_possibleTypes.includes(obj.__typename)
}



var PrivateRepositoryForkingDisableAuditEntry_possibleTypes = ['PrivateRepositoryForkingDisableAuditEntry']
module.exports.isPrivateRepositoryForkingDisableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPrivateRepositoryForkingDisableAuditEntry"')
  return PrivateRepositoryForkingDisableAuditEntry_possibleTypes.includes(obj.__typename)
}



var PrivateRepositoryForkingEnableAuditEntry_possibleTypes = ['PrivateRepositoryForkingEnableAuditEntry']
module.exports.isPrivateRepositoryForkingEnableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPrivateRepositoryForkingEnableAuditEntry"')
  return PrivateRepositoryForkingEnableAuditEntry_possibleTypes.includes(obj.__typename)
}



var ProfileItemShowcase_possibleTypes = ['ProfileItemShowcase']
module.exports.isProfileItemShowcase = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProfileItemShowcase"')
  return ProfileItemShowcase_possibleTypes.includes(obj.__typename)
}



var ProfileOwner_possibleTypes = ['Organization','User']
module.exports.isProfileOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProfileOwner"')
  return ProfileOwner_possibleTypes.includes(obj.__typename)
}



var Project_possibleTypes = ['Project']
module.exports.isProject = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProject"')
  return Project_possibleTypes.includes(obj.__typename)
}



var ProjectCard_possibleTypes = ['ProjectCard']
module.exports.isProjectCard = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectCard"')
  return ProjectCard_possibleTypes.includes(obj.__typename)
}



var ProjectCardConnection_possibleTypes = ['ProjectCardConnection']
module.exports.isProjectCardConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectCardConnection"')
  return ProjectCardConnection_possibleTypes.includes(obj.__typename)
}



var ProjectCardEdge_possibleTypes = ['ProjectCardEdge']
module.exports.isProjectCardEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectCardEdge"')
  return ProjectCardEdge_possibleTypes.includes(obj.__typename)
}



var ProjectCardItem_possibleTypes = ['Issue','PullRequest']
module.exports.isProjectCardItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectCardItem"')
  return ProjectCardItem_possibleTypes.includes(obj.__typename)
}



var ProjectColumn_possibleTypes = ['ProjectColumn']
module.exports.isProjectColumn = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectColumn"')
  return ProjectColumn_possibleTypes.includes(obj.__typename)
}



var ProjectColumnConnection_possibleTypes = ['ProjectColumnConnection']
module.exports.isProjectColumnConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectColumnConnection"')
  return ProjectColumnConnection_possibleTypes.includes(obj.__typename)
}



var ProjectColumnEdge_possibleTypes = ['ProjectColumnEdge']
module.exports.isProjectColumnEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectColumnEdge"')
  return ProjectColumnEdge_possibleTypes.includes(obj.__typename)
}



var ProjectConnection_possibleTypes = ['ProjectConnection']
module.exports.isProjectConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectConnection"')
  return ProjectConnection_possibleTypes.includes(obj.__typename)
}



var ProjectEdge_possibleTypes = ['ProjectEdge']
module.exports.isProjectEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectEdge"')
  return ProjectEdge_possibleTypes.includes(obj.__typename)
}



var ProjectOwner_possibleTypes = ['Organization','Repository','User']
module.exports.isProjectOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProjectOwner"')
  return ProjectOwner_possibleTypes.includes(obj.__typename)
}



var PublicKey_possibleTypes = ['PublicKey']
module.exports.isPublicKey = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPublicKey"')
  return PublicKey_possibleTypes.includes(obj.__typename)
}



var PublicKeyConnection_possibleTypes = ['PublicKeyConnection']
module.exports.isPublicKeyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPublicKeyConnection"')
  return PublicKeyConnection_possibleTypes.includes(obj.__typename)
}



var PublicKeyEdge_possibleTypes = ['PublicKeyEdge']
module.exports.isPublicKeyEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPublicKeyEdge"')
  return PublicKeyEdge_possibleTypes.includes(obj.__typename)
}



var PullRequest_possibleTypes = ['PullRequest']
module.exports.isPullRequest = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequest"')
  return PullRequest_possibleTypes.includes(obj.__typename)
}



var PullRequestChangedFile_possibleTypes = ['PullRequestChangedFile']
module.exports.isPullRequestChangedFile = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestChangedFile"')
  return PullRequestChangedFile_possibleTypes.includes(obj.__typename)
}



var PullRequestChangedFileConnection_possibleTypes = ['PullRequestChangedFileConnection']
module.exports.isPullRequestChangedFileConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestChangedFileConnection"')
  return PullRequestChangedFileConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestChangedFileEdge_possibleTypes = ['PullRequestChangedFileEdge']
module.exports.isPullRequestChangedFileEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestChangedFileEdge"')
  return PullRequestChangedFileEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestCommit_possibleTypes = ['PullRequestCommit']
module.exports.isPullRequestCommit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestCommit"')
  return PullRequestCommit_possibleTypes.includes(obj.__typename)
}



var PullRequestCommitCommentThread_possibleTypes = ['PullRequestCommitCommentThread']
module.exports.isPullRequestCommitCommentThread = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestCommitCommentThread"')
  return PullRequestCommitCommentThread_possibleTypes.includes(obj.__typename)
}



var PullRequestCommitConnection_possibleTypes = ['PullRequestCommitConnection']
module.exports.isPullRequestCommitConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestCommitConnection"')
  return PullRequestCommitConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestCommitEdge_possibleTypes = ['PullRequestCommitEdge']
module.exports.isPullRequestCommitEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestCommitEdge"')
  return PullRequestCommitEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestConnection_possibleTypes = ['PullRequestConnection']
module.exports.isPullRequestConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestConnection"')
  return PullRequestConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestContributionsByRepository_possibleTypes = ['PullRequestContributionsByRepository']
module.exports.isPullRequestContributionsByRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestContributionsByRepository"')
  return PullRequestContributionsByRepository_possibleTypes.includes(obj.__typename)
}



var PullRequestEdge_possibleTypes = ['PullRequestEdge']
module.exports.isPullRequestEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestEdge"')
  return PullRequestEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestReview_possibleTypes = ['PullRequestReview']
module.exports.isPullRequestReview = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReview"')
  return PullRequestReview_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewComment_possibleTypes = ['PullRequestReviewComment']
module.exports.isPullRequestReviewComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewComment"')
  return PullRequestReviewComment_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewCommentConnection_possibleTypes = ['PullRequestReviewCommentConnection']
module.exports.isPullRequestReviewCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewCommentConnection"')
  return PullRequestReviewCommentConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewCommentEdge_possibleTypes = ['PullRequestReviewCommentEdge']
module.exports.isPullRequestReviewCommentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewCommentEdge"')
  return PullRequestReviewCommentEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewConnection_possibleTypes = ['PullRequestReviewConnection']
module.exports.isPullRequestReviewConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewConnection"')
  return PullRequestReviewConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewContributionsByRepository_possibleTypes = ['PullRequestReviewContributionsByRepository']
module.exports.isPullRequestReviewContributionsByRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewContributionsByRepository"')
  return PullRequestReviewContributionsByRepository_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewEdge_possibleTypes = ['PullRequestReviewEdge']
module.exports.isPullRequestReviewEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewEdge"')
  return PullRequestReviewEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewThread_possibleTypes = ['PullRequestReviewThread']
module.exports.isPullRequestReviewThread = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewThread"')
  return PullRequestReviewThread_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewThreadConnection_possibleTypes = ['PullRequestReviewThreadConnection']
module.exports.isPullRequestReviewThreadConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewThreadConnection"')
  return PullRequestReviewThreadConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestReviewThreadEdge_possibleTypes = ['PullRequestReviewThreadEdge']
module.exports.isPullRequestReviewThreadEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestReviewThreadEdge"')
  return PullRequestReviewThreadEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestRevisionMarker_possibleTypes = ['PullRequestRevisionMarker']
module.exports.isPullRequestRevisionMarker = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestRevisionMarker"')
  return PullRequestRevisionMarker_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineConnection_possibleTypes = ['PullRequestTimelineConnection']
module.exports.isPullRequestTimelineConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineConnection"')
  return PullRequestTimelineConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineItem_possibleTypes = ['AssignedEvent','BaseRefForcePushedEvent','ClosedEvent','Commit','CommitCommentThread','CrossReferencedEvent','DemilestonedEvent','DeployedEvent','DeploymentEnvironmentChangedEvent','HeadRefDeletedEvent','HeadRefForcePushedEvent','HeadRefRestoredEvent','IssueComment','LabeledEvent','LockedEvent','MergedEvent','MilestonedEvent','PullRequestReview','PullRequestReviewComment','PullRequestReviewThread','ReferencedEvent','RenamedTitleEvent','ReopenedEvent','ReviewDismissedEvent','ReviewRequestRemovedEvent','ReviewRequestedEvent','SubscribedEvent','UnassignedEvent','UnlabeledEvent','UnlockedEvent','UnsubscribedEvent','UserBlockedEvent']
module.exports.isPullRequestTimelineItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineItem"')
  return PullRequestTimelineItem_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineItemEdge_possibleTypes = ['PullRequestTimelineItemEdge']
module.exports.isPullRequestTimelineItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineItemEdge"')
  return PullRequestTimelineItemEdge_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineItems_possibleTypes = ['AddedToProjectEvent','AssignedEvent','AutomaticBaseChangeFailedEvent','AutomaticBaseChangeSucceededEvent','BaseRefChangedEvent','BaseRefForcePushedEvent','ClosedEvent','CommentDeletedEvent','ConnectedEvent','ConvertToDraftEvent','ConvertedNoteToIssueEvent','CrossReferencedEvent','DemilestonedEvent','DeployedEvent','DeploymentEnvironmentChangedEvent','DisconnectedEvent','HeadRefDeletedEvent','HeadRefForcePushedEvent','HeadRefRestoredEvent','IssueComment','LabeledEvent','LockedEvent','MarkedAsDuplicateEvent','MentionedEvent','MergedEvent','MilestonedEvent','MovedColumnsInProjectEvent','PinnedEvent','PullRequestCommit','PullRequestCommitCommentThread','PullRequestReview','PullRequestReviewThread','PullRequestRevisionMarker','ReadyForReviewEvent','ReferencedEvent','RemovedFromProjectEvent','RenamedTitleEvent','ReopenedEvent','ReviewDismissedEvent','ReviewRequestRemovedEvent','ReviewRequestedEvent','SubscribedEvent','TransferredEvent','UnassignedEvent','UnlabeledEvent','UnlockedEvent','UnmarkedAsDuplicateEvent','UnpinnedEvent','UnsubscribedEvent','UserBlockedEvent']
module.exports.isPullRequestTimelineItems = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineItems"')
  return PullRequestTimelineItems_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineItemsConnection_possibleTypes = ['PullRequestTimelineItemsConnection']
module.exports.isPullRequestTimelineItemsConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineItemsConnection"')
  return PullRequestTimelineItemsConnection_possibleTypes.includes(obj.__typename)
}



var PullRequestTimelineItemsEdge_possibleTypes = ['PullRequestTimelineItemsEdge']
module.exports.isPullRequestTimelineItemsEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPullRequestTimelineItemsEdge"')
  return PullRequestTimelineItemsEdge_possibleTypes.includes(obj.__typename)
}



var Push_possibleTypes = ['Push']
module.exports.isPush = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPush"')
  return Push_possibleTypes.includes(obj.__typename)
}



var PushAllowance_possibleTypes = ['PushAllowance']
module.exports.isPushAllowance = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPushAllowance"')
  return PushAllowance_possibleTypes.includes(obj.__typename)
}



var PushAllowanceActor_possibleTypes = ['App','Team','User']
module.exports.isPushAllowanceActor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPushAllowanceActor"')
  return PushAllowanceActor_possibleTypes.includes(obj.__typename)
}



var PushAllowanceConnection_possibleTypes = ['PushAllowanceConnection']
module.exports.isPushAllowanceConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPushAllowanceConnection"')
  return PushAllowanceConnection_possibleTypes.includes(obj.__typename)
}



var PushAllowanceEdge_possibleTypes = ['PushAllowanceEdge']
module.exports.isPushAllowanceEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPushAllowanceEdge"')
  return PushAllowanceEdge_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var RateLimit_possibleTypes = ['RateLimit']
module.exports.isRateLimit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRateLimit"')
  return RateLimit_possibleTypes.includes(obj.__typename)
}



var Reactable_possibleTypes = ['CommitComment','Issue','IssueComment','PullRequest','PullRequestReview','PullRequestReviewComment','TeamDiscussion','TeamDiscussionComment']
module.exports.isReactable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactable"')
  return Reactable_possibleTypes.includes(obj.__typename)
}



var ReactingUserConnection_possibleTypes = ['ReactingUserConnection']
module.exports.isReactingUserConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactingUserConnection"')
  return ReactingUserConnection_possibleTypes.includes(obj.__typename)
}



var ReactingUserEdge_possibleTypes = ['ReactingUserEdge']
module.exports.isReactingUserEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactingUserEdge"')
  return ReactingUserEdge_possibleTypes.includes(obj.__typename)
}



var Reaction_possibleTypes = ['Reaction']
module.exports.isReaction = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReaction"')
  return Reaction_possibleTypes.includes(obj.__typename)
}



var ReactionConnection_possibleTypes = ['ReactionConnection']
module.exports.isReactionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactionConnection"')
  return ReactionConnection_possibleTypes.includes(obj.__typename)
}



var ReactionEdge_possibleTypes = ['ReactionEdge']
module.exports.isReactionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactionEdge"')
  return ReactionEdge_possibleTypes.includes(obj.__typename)
}



var ReactionGroup_possibleTypes = ['ReactionGroup']
module.exports.isReactionGroup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReactionGroup"')
  return ReactionGroup_possibleTypes.includes(obj.__typename)
}



var ReadyForReviewEvent_possibleTypes = ['ReadyForReviewEvent']
module.exports.isReadyForReviewEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReadyForReviewEvent"')
  return ReadyForReviewEvent_possibleTypes.includes(obj.__typename)
}



var Ref_possibleTypes = ['Ref']
module.exports.isRef = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRef"')
  return Ref_possibleTypes.includes(obj.__typename)
}



var RefConnection_possibleTypes = ['RefConnection']
module.exports.isRefConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRefConnection"')
  return RefConnection_possibleTypes.includes(obj.__typename)
}



var RefEdge_possibleTypes = ['RefEdge']
module.exports.isRefEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRefEdge"')
  return RefEdge_possibleTypes.includes(obj.__typename)
}



var ReferencedEvent_possibleTypes = ['ReferencedEvent']
module.exports.isReferencedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReferencedEvent"')
  return ReferencedEvent_possibleTypes.includes(obj.__typename)
}



var ReferencedSubject_possibleTypes = ['Issue','PullRequest']
module.exports.isReferencedSubject = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReferencedSubject"')
  return ReferencedSubject_possibleTypes.includes(obj.__typename)
}



var RegenerateEnterpriseIdentityProviderRecoveryCodesPayload_possibleTypes = ['RegenerateEnterpriseIdentityProviderRecoveryCodesPayload']
module.exports.isRegenerateEnterpriseIdentityProviderRecoveryCodesPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegenerateEnterpriseIdentityProviderRecoveryCodesPayload"')
  return RegenerateEnterpriseIdentityProviderRecoveryCodesPayload_possibleTypes.includes(obj.__typename)
}



var RegistryPackage_possibleTypes = ['RegistryPackage']
module.exports.isRegistryPackage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackage"')
  return RegistryPackage_possibleTypes.includes(obj.__typename)
}



var RegistryPackageConnection_possibleTypes = ['RegistryPackageConnection']
module.exports.isRegistryPackageConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageConnection"')
  return RegistryPackageConnection_possibleTypes.includes(obj.__typename)
}



var RegistryPackageDependency_possibleTypes = ['RegistryPackageDependency']
module.exports.isRegistryPackageDependency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageDependency"')
  return RegistryPackageDependency_possibleTypes.includes(obj.__typename)
}



var RegistryPackageDependencyConnection_possibleTypes = ['RegistryPackageDependencyConnection']
module.exports.isRegistryPackageDependencyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageDependencyConnection"')
  return RegistryPackageDependencyConnection_possibleTypes.includes(obj.__typename)
}



var RegistryPackageDependencyEdge_possibleTypes = ['RegistryPackageDependencyEdge']
module.exports.isRegistryPackageDependencyEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageDependencyEdge"')
  return RegistryPackageDependencyEdge_possibleTypes.includes(obj.__typename)
}



var RegistryPackageEdge_possibleTypes = ['RegistryPackageEdge']
module.exports.isRegistryPackageEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageEdge"')
  return RegistryPackageEdge_possibleTypes.includes(obj.__typename)
}



var RegistryPackageFile_possibleTypes = ['RegistryPackageFile']
module.exports.isRegistryPackageFile = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageFile"')
  return RegistryPackageFile_possibleTypes.includes(obj.__typename)
}



var RegistryPackageFileConnection_possibleTypes = ['RegistryPackageFileConnection']
module.exports.isRegistryPackageFileConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageFileConnection"')
  return RegistryPackageFileConnection_possibleTypes.includes(obj.__typename)
}



var RegistryPackageFileEdge_possibleTypes = ['RegistryPackageFileEdge']
module.exports.isRegistryPackageFileEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageFileEdge"')
  return RegistryPackageFileEdge_possibleTypes.includes(obj.__typename)
}



var RegistryPackageOwner_possibleTypes = ['Organization','Repository','User']
module.exports.isRegistryPackageOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageOwner"')
  return RegistryPackageOwner_possibleTypes.includes(obj.__typename)
}



var RegistryPackageSearch_possibleTypes = ['Organization','Repository','User']
module.exports.isRegistryPackageSearch = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageSearch"')
  return RegistryPackageSearch_possibleTypes.includes(obj.__typename)
}



var RegistryPackageStatistics_possibleTypes = ['RegistryPackageStatistics']
module.exports.isRegistryPackageStatistics = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageStatistics"')
  return RegistryPackageStatistics_possibleTypes.includes(obj.__typename)
}



var RegistryPackageTag_possibleTypes = ['RegistryPackageTag']
module.exports.isRegistryPackageTag = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageTag"')
  return RegistryPackageTag_possibleTypes.includes(obj.__typename)
}



var RegistryPackageTagConnection_possibleTypes = ['RegistryPackageTagConnection']
module.exports.isRegistryPackageTagConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageTagConnection"')
  return RegistryPackageTagConnection_possibleTypes.includes(obj.__typename)
}



var RegistryPackageTagEdge_possibleTypes = ['RegistryPackageTagEdge']
module.exports.isRegistryPackageTagEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageTagEdge"')
  return RegistryPackageTagEdge_possibleTypes.includes(obj.__typename)
}



var RegistryPackageVersion_possibleTypes = ['RegistryPackageVersion']
module.exports.isRegistryPackageVersion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageVersion"')
  return RegistryPackageVersion_possibleTypes.includes(obj.__typename)
}



var RegistryPackageVersionConnection_possibleTypes = ['RegistryPackageVersionConnection']
module.exports.isRegistryPackageVersionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageVersionConnection"')
  return RegistryPackageVersionConnection_possibleTypes.includes(obj.__typename)
}



var RegistryPackageVersionEdge_possibleTypes = ['RegistryPackageVersionEdge']
module.exports.isRegistryPackageVersionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageVersionEdge"')
  return RegistryPackageVersionEdge_possibleTypes.includes(obj.__typename)
}



var RegistryPackageVersionStatistics_possibleTypes = ['RegistryPackageVersionStatistics']
module.exports.isRegistryPackageVersionStatistics = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegistryPackageVersionStatistics"')
  return RegistryPackageVersionStatistics_possibleTypes.includes(obj.__typename)
}



var Release_possibleTypes = ['Release']
module.exports.isRelease = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRelease"')
  return Release_possibleTypes.includes(obj.__typename)
}



var ReleaseAsset_possibleTypes = ['ReleaseAsset']
module.exports.isReleaseAsset = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseAsset"')
  return ReleaseAsset_possibleTypes.includes(obj.__typename)
}



var ReleaseAssetConnection_possibleTypes = ['ReleaseAssetConnection']
module.exports.isReleaseAssetConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseAssetConnection"')
  return ReleaseAssetConnection_possibleTypes.includes(obj.__typename)
}



var ReleaseAssetEdge_possibleTypes = ['ReleaseAssetEdge']
module.exports.isReleaseAssetEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseAssetEdge"')
  return ReleaseAssetEdge_possibleTypes.includes(obj.__typename)
}



var ReleaseConnection_possibleTypes = ['ReleaseConnection']
module.exports.isReleaseConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseConnection"')
  return ReleaseConnection_possibleTypes.includes(obj.__typename)
}



var ReleaseEdge_possibleTypes = ['ReleaseEdge']
module.exports.isReleaseEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseEdge"')
  return ReleaseEdge_possibleTypes.includes(obj.__typename)
}



var RemoveAssigneesFromAssignablePayload_possibleTypes = ['RemoveAssigneesFromAssignablePayload']
module.exports.isRemoveAssigneesFromAssignablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveAssigneesFromAssignablePayload"')
  return RemoveAssigneesFromAssignablePayload_possibleTypes.includes(obj.__typename)
}



var RemoveEnterpriseAdminPayload_possibleTypes = ['RemoveEnterpriseAdminPayload']
module.exports.isRemoveEnterpriseAdminPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveEnterpriseAdminPayload"')
  return RemoveEnterpriseAdminPayload_possibleTypes.includes(obj.__typename)
}



var RemoveEnterpriseIdentityProviderPayload_possibleTypes = ['RemoveEnterpriseIdentityProviderPayload']
module.exports.isRemoveEnterpriseIdentityProviderPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveEnterpriseIdentityProviderPayload"')
  return RemoveEnterpriseIdentityProviderPayload_possibleTypes.includes(obj.__typename)
}



var RemoveEnterpriseOrganizationPayload_possibleTypes = ['RemoveEnterpriseOrganizationPayload']
module.exports.isRemoveEnterpriseOrganizationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveEnterpriseOrganizationPayload"')
  return RemoveEnterpriseOrganizationPayload_possibleTypes.includes(obj.__typename)
}



var RemoveLabelsFromLabelablePayload_possibleTypes = ['RemoveLabelsFromLabelablePayload']
module.exports.isRemoveLabelsFromLabelablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveLabelsFromLabelablePayload"')
  return RemoveLabelsFromLabelablePayload_possibleTypes.includes(obj.__typename)
}



var RemoveOutsideCollaboratorPayload_possibleTypes = ['RemoveOutsideCollaboratorPayload']
module.exports.isRemoveOutsideCollaboratorPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveOutsideCollaboratorPayload"')
  return RemoveOutsideCollaboratorPayload_possibleTypes.includes(obj.__typename)
}



var RemoveReactionPayload_possibleTypes = ['RemoveReactionPayload']
module.exports.isRemoveReactionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveReactionPayload"')
  return RemoveReactionPayload_possibleTypes.includes(obj.__typename)
}



var RemoveStarPayload_possibleTypes = ['RemoveStarPayload']
module.exports.isRemoveStarPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveStarPayload"')
  return RemoveStarPayload_possibleTypes.includes(obj.__typename)
}



var RemovedFromProjectEvent_possibleTypes = ['RemovedFromProjectEvent']
module.exports.isRemovedFromProjectEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemovedFromProjectEvent"')
  return RemovedFromProjectEvent_possibleTypes.includes(obj.__typename)
}



var RenamedTitleEvent_possibleTypes = ['RenamedTitleEvent']
module.exports.isRenamedTitleEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRenamedTitleEvent"')
  return RenamedTitleEvent_possibleTypes.includes(obj.__typename)
}



var RenamedTitleSubject_possibleTypes = ['Issue','PullRequest']
module.exports.isRenamedTitleSubject = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRenamedTitleSubject"')
  return RenamedTitleSubject_possibleTypes.includes(obj.__typename)
}



var ReopenIssuePayload_possibleTypes = ['ReopenIssuePayload']
module.exports.isReopenIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReopenIssuePayload"')
  return ReopenIssuePayload_possibleTypes.includes(obj.__typename)
}



var ReopenPullRequestPayload_possibleTypes = ['ReopenPullRequestPayload']
module.exports.isReopenPullRequestPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReopenPullRequestPayload"')
  return ReopenPullRequestPayload_possibleTypes.includes(obj.__typename)
}



var ReopenedEvent_possibleTypes = ['ReopenedEvent']
module.exports.isReopenedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReopenedEvent"')
  return ReopenedEvent_possibleTypes.includes(obj.__typename)
}



var RepoAccessAuditEntry_possibleTypes = ['RepoAccessAuditEntry']
module.exports.isRepoAccessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoAccessAuditEntry"')
  return RepoAccessAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoAddMemberAuditEntry_possibleTypes = ['RepoAddMemberAuditEntry']
module.exports.isRepoAddMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoAddMemberAuditEntry"')
  return RepoAddMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoAddTopicAuditEntry_possibleTypes = ['RepoAddTopicAuditEntry']
module.exports.isRepoAddTopicAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoAddTopicAuditEntry"')
  return RepoAddTopicAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoArchivedAuditEntry_possibleTypes = ['RepoArchivedAuditEntry']
module.exports.isRepoArchivedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoArchivedAuditEntry"')
  return RepoArchivedAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoChangeMergeSettingAuditEntry_possibleTypes = ['RepoChangeMergeSettingAuditEntry']
module.exports.isRepoChangeMergeSettingAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoChangeMergeSettingAuditEntry"')
  return RepoChangeMergeSettingAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigDisableAnonymousGitAccessAuditEntry_possibleTypes = ['RepoConfigDisableAnonymousGitAccessAuditEntry']
module.exports.isRepoConfigDisableAnonymousGitAccessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigDisableAnonymousGitAccessAuditEntry"')
  return RepoConfigDisableAnonymousGitAccessAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigDisableCollaboratorsOnlyAuditEntry_possibleTypes = ['RepoConfigDisableCollaboratorsOnlyAuditEntry']
module.exports.isRepoConfigDisableCollaboratorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigDisableCollaboratorsOnlyAuditEntry"')
  return RepoConfigDisableCollaboratorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigDisableContributorsOnlyAuditEntry_possibleTypes = ['RepoConfigDisableContributorsOnlyAuditEntry']
module.exports.isRepoConfigDisableContributorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigDisableContributorsOnlyAuditEntry"')
  return RepoConfigDisableContributorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigDisableSockpuppetDisallowedAuditEntry_possibleTypes = ['RepoConfigDisableSockpuppetDisallowedAuditEntry']
module.exports.isRepoConfigDisableSockpuppetDisallowedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigDisableSockpuppetDisallowedAuditEntry"')
  return RepoConfigDisableSockpuppetDisallowedAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigEnableAnonymousGitAccessAuditEntry_possibleTypes = ['RepoConfigEnableAnonymousGitAccessAuditEntry']
module.exports.isRepoConfigEnableAnonymousGitAccessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigEnableAnonymousGitAccessAuditEntry"')
  return RepoConfigEnableAnonymousGitAccessAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigEnableCollaboratorsOnlyAuditEntry_possibleTypes = ['RepoConfigEnableCollaboratorsOnlyAuditEntry']
module.exports.isRepoConfigEnableCollaboratorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigEnableCollaboratorsOnlyAuditEntry"')
  return RepoConfigEnableCollaboratorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigEnableContributorsOnlyAuditEntry_possibleTypes = ['RepoConfigEnableContributorsOnlyAuditEntry']
module.exports.isRepoConfigEnableContributorsOnlyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigEnableContributorsOnlyAuditEntry"')
  return RepoConfigEnableContributorsOnlyAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigEnableSockpuppetDisallowedAuditEntry_possibleTypes = ['RepoConfigEnableSockpuppetDisallowedAuditEntry']
module.exports.isRepoConfigEnableSockpuppetDisallowedAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigEnableSockpuppetDisallowedAuditEntry"')
  return RepoConfigEnableSockpuppetDisallowedAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigLockAnonymousGitAccessAuditEntry_possibleTypes = ['RepoConfigLockAnonymousGitAccessAuditEntry']
module.exports.isRepoConfigLockAnonymousGitAccessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigLockAnonymousGitAccessAuditEntry"')
  return RepoConfigLockAnonymousGitAccessAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoConfigUnlockAnonymousGitAccessAuditEntry_possibleTypes = ['RepoConfigUnlockAnonymousGitAccessAuditEntry']
module.exports.isRepoConfigUnlockAnonymousGitAccessAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoConfigUnlockAnonymousGitAccessAuditEntry"')
  return RepoConfigUnlockAnonymousGitAccessAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoCreateAuditEntry_possibleTypes = ['RepoCreateAuditEntry']
module.exports.isRepoCreateAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoCreateAuditEntry"')
  return RepoCreateAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoDestroyAuditEntry_possibleTypes = ['RepoDestroyAuditEntry']
module.exports.isRepoDestroyAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoDestroyAuditEntry"')
  return RepoDestroyAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoRemoveMemberAuditEntry_possibleTypes = ['RepoRemoveMemberAuditEntry']
module.exports.isRepoRemoveMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoRemoveMemberAuditEntry"')
  return RepoRemoveMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepoRemoveTopicAuditEntry_possibleTypes = ['RepoRemoveTopicAuditEntry']
module.exports.isRepoRemoveTopicAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepoRemoveTopicAuditEntry"')
  return RepoRemoveTopicAuditEntry_possibleTypes.includes(obj.__typename)
}



var Repository_possibleTypes = ['Repository']
module.exports.isRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepository"')
  return Repository_possibleTypes.includes(obj.__typename)
}



var RepositoryAuditEntryData_possibleTypes = ['OrgRestoreMemberMembershipRepositoryAuditEntryData','PrivateRepositoryForkingDisableAuditEntry','PrivateRepositoryForkingEnableAuditEntry','RepoAccessAuditEntry','RepoAddMemberAuditEntry','RepoAddTopicAuditEntry','RepoArchivedAuditEntry','RepoChangeMergeSettingAuditEntry','RepoConfigDisableAnonymousGitAccessAuditEntry','RepoConfigDisableCollaboratorsOnlyAuditEntry','RepoConfigDisableContributorsOnlyAuditEntry','RepoConfigDisableSockpuppetDisallowedAuditEntry','RepoConfigEnableAnonymousGitAccessAuditEntry','RepoConfigEnableCollaboratorsOnlyAuditEntry','RepoConfigEnableContributorsOnlyAuditEntry','RepoConfigEnableSockpuppetDisallowedAuditEntry','RepoConfigLockAnonymousGitAccessAuditEntry','RepoConfigUnlockAnonymousGitAccessAuditEntry','RepoCreateAuditEntry','RepoDestroyAuditEntry','RepoRemoveMemberAuditEntry','RepoRemoveTopicAuditEntry','TeamAddRepositoryAuditEntry','TeamRemoveRepositoryAuditEntry']
module.exports.isRepositoryAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryAuditEntryData"')
  return RepositoryAuditEntryData_possibleTypes.includes(obj.__typename)
}



var RepositoryCollaboratorConnection_possibleTypes = ['RepositoryCollaboratorConnection']
module.exports.isRepositoryCollaboratorConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryCollaboratorConnection"')
  return RepositoryCollaboratorConnection_possibleTypes.includes(obj.__typename)
}



var RepositoryCollaboratorEdge_possibleTypes = ['RepositoryCollaboratorEdge']
module.exports.isRepositoryCollaboratorEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryCollaboratorEdge"')
  return RepositoryCollaboratorEdge_possibleTypes.includes(obj.__typename)
}



var RepositoryConnection_possibleTypes = ['RepositoryConnection']
module.exports.isRepositoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryConnection"')
  return RepositoryConnection_possibleTypes.includes(obj.__typename)
}



var RepositoryEdge_possibleTypes = ['RepositoryEdge']
module.exports.isRepositoryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryEdge"')
  return RepositoryEdge_possibleTypes.includes(obj.__typename)
}



var RepositoryInfo_possibleTypes = ['Repository']
module.exports.isRepositoryInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryInfo"')
  return RepositoryInfo_possibleTypes.includes(obj.__typename)
}



var RepositoryInvitation_possibleTypes = ['RepositoryInvitation']
module.exports.isRepositoryInvitation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryInvitation"')
  return RepositoryInvitation_possibleTypes.includes(obj.__typename)
}



var RepositoryInvitationConnection_possibleTypes = ['RepositoryInvitationConnection']
module.exports.isRepositoryInvitationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryInvitationConnection"')
  return RepositoryInvitationConnection_possibleTypes.includes(obj.__typename)
}



var RepositoryInvitationEdge_possibleTypes = ['RepositoryInvitationEdge']
module.exports.isRepositoryInvitationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryInvitationEdge"')
  return RepositoryInvitationEdge_possibleTypes.includes(obj.__typename)
}



var RepositoryNode_possibleTypes = ['CommitComment','CommitCommentThread','Issue','IssueComment','PullRequest','PullRequestCommitCommentThread','PullRequestReview','PullRequestReviewComment','RepositoryVulnerabilityAlert']
module.exports.isRepositoryNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryNode"')
  return RepositoryNode_possibleTypes.includes(obj.__typename)
}



var RepositoryOwner_possibleTypes = ['Organization','User']
module.exports.isRepositoryOwner = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryOwner"')
  return RepositoryOwner_possibleTypes.includes(obj.__typename)
}



var RepositoryTopic_possibleTypes = ['RepositoryTopic']
module.exports.isRepositoryTopic = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryTopic"')
  return RepositoryTopic_possibleTypes.includes(obj.__typename)
}



var RepositoryTopicConnection_possibleTypes = ['RepositoryTopicConnection']
module.exports.isRepositoryTopicConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryTopicConnection"')
  return RepositoryTopicConnection_possibleTypes.includes(obj.__typename)
}



var RepositoryTopicEdge_possibleTypes = ['RepositoryTopicEdge']
module.exports.isRepositoryTopicEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryTopicEdge"')
  return RepositoryTopicEdge_possibleTypes.includes(obj.__typename)
}



var RepositoryVisibilityChangeDisableAuditEntry_possibleTypes = ['RepositoryVisibilityChangeDisableAuditEntry']
module.exports.isRepositoryVisibilityChangeDisableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryVisibilityChangeDisableAuditEntry"')
  return RepositoryVisibilityChangeDisableAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepositoryVisibilityChangeEnableAuditEntry_possibleTypes = ['RepositoryVisibilityChangeEnableAuditEntry']
module.exports.isRepositoryVisibilityChangeEnableAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryVisibilityChangeEnableAuditEntry"')
  return RepositoryVisibilityChangeEnableAuditEntry_possibleTypes.includes(obj.__typename)
}



var RepositoryVulnerabilityAlert_possibleTypes = ['RepositoryVulnerabilityAlert']
module.exports.isRepositoryVulnerabilityAlert = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryVulnerabilityAlert"')
  return RepositoryVulnerabilityAlert_possibleTypes.includes(obj.__typename)
}



var RepositoryVulnerabilityAlertConnection_possibleTypes = ['RepositoryVulnerabilityAlertConnection']
module.exports.isRepositoryVulnerabilityAlertConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryVulnerabilityAlertConnection"')
  return RepositoryVulnerabilityAlertConnection_possibleTypes.includes(obj.__typename)
}



var RepositoryVulnerabilityAlertEdge_possibleTypes = ['RepositoryVulnerabilityAlertEdge']
module.exports.isRepositoryVulnerabilityAlertEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRepositoryVulnerabilityAlertEdge"')
  return RepositoryVulnerabilityAlertEdge_possibleTypes.includes(obj.__typename)
}



var RequestReviewsPayload_possibleTypes = ['RequestReviewsPayload']
module.exports.isRequestReviewsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRequestReviewsPayload"')
  return RequestReviewsPayload_possibleTypes.includes(obj.__typename)
}



var RequestedReviewer_possibleTypes = ['Mannequin','Team','User']
module.exports.isRequestedReviewer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRequestedReviewer"')
  return RequestedReviewer_possibleTypes.includes(obj.__typename)
}



var RerequestCheckSuitePayload_possibleTypes = ['RerequestCheckSuitePayload']
module.exports.isRerequestCheckSuitePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRerequestCheckSuitePayload"')
  return RerequestCheckSuitePayload_possibleTypes.includes(obj.__typename)
}



var ResolveReviewThreadPayload_possibleTypes = ['ResolveReviewThreadPayload']
module.exports.isResolveReviewThreadPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isResolveReviewThreadPayload"')
  return ResolveReviewThreadPayload_possibleTypes.includes(obj.__typename)
}



var RestrictedContribution_possibleTypes = ['RestrictedContribution']
module.exports.isRestrictedContribution = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRestrictedContribution"')
  return RestrictedContribution_possibleTypes.includes(obj.__typename)
}



var ReviewDismissalAllowance_possibleTypes = ['ReviewDismissalAllowance']
module.exports.isReviewDismissalAllowance = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewDismissalAllowance"')
  return ReviewDismissalAllowance_possibleTypes.includes(obj.__typename)
}



var ReviewDismissalAllowanceActor_possibleTypes = ['Team','User']
module.exports.isReviewDismissalAllowanceActor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewDismissalAllowanceActor"')
  return ReviewDismissalAllowanceActor_possibleTypes.includes(obj.__typename)
}



var ReviewDismissalAllowanceConnection_possibleTypes = ['ReviewDismissalAllowanceConnection']
module.exports.isReviewDismissalAllowanceConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewDismissalAllowanceConnection"')
  return ReviewDismissalAllowanceConnection_possibleTypes.includes(obj.__typename)
}



var ReviewDismissalAllowanceEdge_possibleTypes = ['ReviewDismissalAllowanceEdge']
module.exports.isReviewDismissalAllowanceEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewDismissalAllowanceEdge"')
  return ReviewDismissalAllowanceEdge_possibleTypes.includes(obj.__typename)
}



var ReviewDismissedEvent_possibleTypes = ['ReviewDismissedEvent']
module.exports.isReviewDismissedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewDismissedEvent"')
  return ReviewDismissedEvent_possibleTypes.includes(obj.__typename)
}



var ReviewRequest_possibleTypes = ['ReviewRequest']
module.exports.isReviewRequest = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewRequest"')
  return ReviewRequest_possibleTypes.includes(obj.__typename)
}



var ReviewRequestConnection_possibleTypes = ['ReviewRequestConnection']
module.exports.isReviewRequestConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewRequestConnection"')
  return ReviewRequestConnection_possibleTypes.includes(obj.__typename)
}



var ReviewRequestEdge_possibleTypes = ['ReviewRequestEdge']
module.exports.isReviewRequestEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewRequestEdge"')
  return ReviewRequestEdge_possibleTypes.includes(obj.__typename)
}



var ReviewRequestRemovedEvent_possibleTypes = ['ReviewRequestRemovedEvent']
module.exports.isReviewRequestRemovedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewRequestRemovedEvent"')
  return ReviewRequestRemovedEvent_possibleTypes.includes(obj.__typename)
}



var ReviewRequestedEvent_possibleTypes = ['ReviewRequestedEvent']
module.exports.isReviewRequestedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewRequestedEvent"')
  return ReviewRequestedEvent_possibleTypes.includes(obj.__typename)
}



var ReviewStatusHovercardContext_possibleTypes = ['ReviewStatusHovercardContext']
module.exports.isReviewStatusHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReviewStatusHovercardContext"')
  return ReviewStatusHovercardContext_possibleTypes.includes(obj.__typename)
}



var SavedReply_possibleTypes = ['SavedReply']
module.exports.isSavedReply = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSavedReply"')
  return SavedReply_possibleTypes.includes(obj.__typename)
}



var SavedReplyConnection_possibleTypes = ['SavedReplyConnection']
module.exports.isSavedReplyConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSavedReplyConnection"')
  return SavedReplyConnection_possibleTypes.includes(obj.__typename)
}



var SavedReplyEdge_possibleTypes = ['SavedReplyEdge']
module.exports.isSavedReplyEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSavedReplyEdge"')
  return SavedReplyEdge_possibleTypes.includes(obj.__typename)
}



var SearchResultItem_possibleTypes = ['App','Issue','MarketplaceListing','Organization','PullRequest','Repository','User']
module.exports.isSearchResultItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSearchResultItem"')
  return SearchResultItem_possibleTypes.includes(obj.__typename)
}



var SearchResultItemConnection_possibleTypes = ['SearchResultItemConnection']
module.exports.isSearchResultItemConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSearchResultItemConnection"')
  return SearchResultItemConnection_possibleTypes.includes(obj.__typename)
}



var SearchResultItemEdge_possibleTypes = ['SearchResultItemEdge']
module.exports.isSearchResultItemEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSearchResultItemEdge"')
  return SearchResultItemEdge_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisory_possibleTypes = ['SecurityAdvisory']
module.exports.isSecurityAdvisory = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisory"')
  return SecurityAdvisory_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryConnection_possibleTypes = ['SecurityAdvisoryConnection']
module.exports.isSecurityAdvisoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryConnection"')
  return SecurityAdvisoryConnection_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryEdge_possibleTypes = ['SecurityAdvisoryEdge']
module.exports.isSecurityAdvisoryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryEdge"')
  return SecurityAdvisoryEdge_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryIdentifier_possibleTypes = ['SecurityAdvisoryIdentifier']
module.exports.isSecurityAdvisoryIdentifier = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryIdentifier"')
  return SecurityAdvisoryIdentifier_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryPackage_possibleTypes = ['SecurityAdvisoryPackage']
module.exports.isSecurityAdvisoryPackage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryPackage"')
  return SecurityAdvisoryPackage_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryPackageVersion_possibleTypes = ['SecurityAdvisoryPackageVersion']
module.exports.isSecurityAdvisoryPackageVersion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryPackageVersion"')
  return SecurityAdvisoryPackageVersion_possibleTypes.includes(obj.__typename)
}



var SecurityAdvisoryReference_possibleTypes = ['SecurityAdvisoryReference']
module.exports.isSecurityAdvisoryReference = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityAdvisoryReference"')
  return SecurityAdvisoryReference_possibleTypes.includes(obj.__typename)
}



var SecurityVulnerability_possibleTypes = ['SecurityVulnerability']
module.exports.isSecurityVulnerability = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityVulnerability"')
  return SecurityVulnerability_possibleTypes.includes(obj.__typename)
}



var SecurityVulnerabilityConnection_possibleTypes = ['SecurityVulnerabilityConnection']
module.exports.isSecurityVulnerabilityConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityVulnerabilityConnection"')
  return SecurityVulnerabilityConnection_possibleTypes.includes(obj.__typename)
}



var SecurityVulnerabilityEdge_possibleTypes = ['SecurityVulnerabilityEdge']
module.exports.isSecurityVulnerabilityEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecurityVulnerabilityEdge"')
  return SecurityVulnerabilityEdge_possibleTypes.includes(obj.__typename)
}



var SetEnterpriseIdentityProviderPayload_possibleTypes = ['SetEnterpriseIdentityProviderPayload']
module.exports.isSetEnterpriseIdentityProviderPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSetEnterpriseIdentityProviderPayload"')
  return SetEnterpriseIdentityProviderPayload_possibleTypes.includes(obj.__typename)
}



var SmimeSignature_possibleTypes = ['SmimeSignature']
module.exports.isSmimeSignature = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSmimeSignature"')
  return SmimeSignature_possibleTypes.includes(obj.__typename)
}



var Sponsor_possibleTypes = ['Organization','User']
module.exports.isSponsor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsor"')
  return Sponsor_possibleTypes.includes(obj.__typename)
}



var Sponsorable_possibleTypes = ['Organization','User']
module.exports.isSponsorable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorable"')
  return Sponsorable_possibleTypes.includes(obj.__typename)
}



var SponsorsListing_possibleTypes = ['SponsorsListing']
module.exports.isSponsorsListing = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorsListing"')
  return SponsorsListing_possibleTypes.includes(obj.__typename)
}



var SponsorsTier_possibleTypes = ['SponsorsTier']
module.exports.isSponsorsTier = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorsTier"')
  return SponsorsTier_possibleTypes.includes(obj.__typename)
}



var SponsorsTierAdminInfo_possibleTypes = ['SponsorsTierAdminInfo']
module.exports.isSponsorsTierAdminInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorsTierAdminInfo"')
  return SponsorsTierAdminInfo_possibleTypes.includes(obj.__typename)
}



var SponsorsTierConnection_possibleTypes = ['SponsorsTierConnection']
module.exports.isSponsorsTierConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorsTierConnection"')
  return SponsorsTierConnection_possibleTypes.includes(obj.__typename)
}



var SponsorsTierEdge_possibleTypes = ['SponsorsTierEdge']
module.exports.isSponsorsTierEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorsTierEdge"')
  return SponsorsTierEdge_possibleTypes.includes(obj.__typename)
}



var Sponsorship_possibleTypes = ['Sponsorship']
module.exports.isSponsorship = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorship"')
  return Sponsorship_possibleTypes.includes(obj.__typename)
}



var SponsorshipConnection_possibleTypes = ['SponsorshipConnection']
module.exports.isSponsorshipConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorshipConnection"')
  return SponsorshipConnection_possibleTypes.includes(obj.__typename)
}



var SponsorshipEdge_possibleTypes = ['SponsorshipEdge']
module.exports.isSponsorshipEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSponsorshipEdge"')
  return SponsorshipEdge_possibleTypes.includes(obj.__typename)
}



var StargazerConnection_possibleTypes = ['StargazerConnection']
module.exports.isStargazerConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStargazerConnection"')
  return StargazerConnection_possibleTypes.includes(obj.__typename)
}



var StargazerEdge_possibleTypes = ['StargazerEdge']
module.exports.isStargazerEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStargazerEdge"')
  return StargazerEdge_possibleTypes.includes(obj.__typename)
}



var Starrable_possibleTypes = ['Gist','Repository','Topic']
module.exports.isStarrable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStarrable"')
  return Starrable_possibleTypes.includes(obj.__typename)
}



var StarredRepositoryConnection_possibleTypes = ['StarredRepositoryConnection']
module.exports.isStarredRepositoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStarredRepositoryConnection"')
  return StarredRepositoryConnection_possibleTypes.includes(obj.__typename)
}



var StarredRepositoryEdge_possibleTypes = ['StarredRepositoryEdge']
module.exports.isStarredRepositoryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStarredRepositoryEdge"')
  return StarredRepositoryEdge_possibleTypes.includes(obj.__typename)
}



var Status_possibleTypes = ['Status']
module.exports.isStatus = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatus"')
  return Status_possibleTypes.includes(obj.__typename)
}



var StatusCheckRollup_possibleTypes = ['StatusCheckRollup']
module.exports.isStatusCheckRollup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatusCheckRollup"')
  return StatusCheckRollup_possibleTypes.includes(obj.__typename)
}



var StatusCheckRollupContext_possibleTypes = ['CheckRun','StatusContext']
module.exports.isStatusCheckRollupContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatusCheckRollupContext"')
  return StatusCheckRollupContext_possibleTypes.includes(obj.__typename)
}



var StatusCheckRollupContextConnection_possibleTypes = ['StatusCheckRollupContextConnection']
module.exports.isStatusCheckRollupContextConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatusCheckRollupContextConnection"')
  return StatusCheckRollupContextConnection_possibleTypes.includes(obj.__typename)
}



var StatusCheckRollupContextEdge_possibleTypes = ['StatusCheckRollupContextEdge']
module.exports.isStatusCheckRollupContextEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatusCheckRollupContextEdge"')
  return StatusCheckRollupContextEdge_possibleTypes.includes(obj.__typename)
}



var StatusContext_possibleTypes = ['StatusContext']
module.exports.isStatusContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStatusContext"')
  return StatusContext_possibleTypes.includes(obj.__typename)
}



var SubmitPullRequestReviewPayload_possibleTypes = ['SubmitPullRequestReviewPayload']
module.exports.isSubmitPullRequestReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmitPullRequestReviewPayload"')
  return SubmitPullRequestReviewPayload_possibleTypes.includes(obj.__typename)
}



var Submodule_possibleTypes = ['Submodule']
module.exports.isSubmodule = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmodule"')
  return Submodule_possibleTypes.includes(obj.__typename)
}



var SubmoduleConnection_possibleTypes = ['SubmoduleConnection']
module.exports.isSubmoduleConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmoduleConnection"')
  return SubmoduleConnection_possibleTypes.includes(obj.__typename)
}



var SubmoduleEdge_possibleTypes = ['SubmoduleEdge']
module.exports.isSubmoduleEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubmoduleEdge"')
  return SubmoduleEdge_possibleTypes.includes(obj.__typename)
}



var Subscribable_possibleTypes = ['Commit','Issue','PullRequest','Repository','Team','TeamDiscussion']
module.exports.isSubscribable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscribable"')
  return Subscribable_possibleTypes.includes(obj.__typename)
}



var SubscribedEvent_possibleTypes = ['SubscribedEvent']
module.exports.isSubscribedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscribedEvent"')
  return SubscribedEvent_possibleTypes.includes(obj.__typename)
}



var SuggestedReviewer_possibleTypes = ['SuggestedReviewer']
module.exports.isSuggestedReviewer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSuggestedReviewer"')
  return SuggestedReviewer_possibleTypes.includes(obj.__typename)
}



var Tag_possibleTypes = ['Tag']
module.exports.isTag = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTag"')
  return Tag_possibleTypes.includes(obj.__typename)
}



var Team_possibleTypes = ['Team']
module.exports.isTeam = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeam"')
  return Team_possibleTypes.includes(obj.__typename)
}



var TeamAddMemberAuditEntry_possibleTypes = ['TeamAddMemberAuditEntry']
module.exports.isTeamAddMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamAddMemberAuditEntry"')
  return TeamAddMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var TeamAddRepositoryAuditEntry_possibleTypes = ['TeamAddRepositoryAuditEntry']
module.exports.isTeamAddRepositoryAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamAddRepositoryAuditEntry"')
  return TeamAddRepositoryAuditEntry_possibleTypes.includes(obj.__typename)
}



var TeamAuditEntryData_possibleTypes = ['OrgRestoreMemberMembershipTeamAuditEntryData','TeamAddMemberAuditEntry','TeamAddRepositoryAuditEntry','TeamChangeParentTeamAuditEntry','TeamRemoveMemberAuditEntry','TeamRemoveRepositoryAuditEntry']
module.exports.isTeamAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamAuditEntryData"')
  return TeamAuditEntryData_possibleTypes.includes(obj.__typename)
}



var TeamChangeParentTeamAuditEntry_possibleTypes = ['TeamChangeParentTeamAuditEntry']
module.exports.isTeamChangeParentTeamAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamChangeParentTeamAuditEntry"')
  return TeamChangeParentTeamAuditEntry_possibleTypes.includes(obj.__typename)
}



var TeamConnection_possibleTypes = ['TeamConnection']
module.exports.isTeamConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamConnection"')
  return TeamConnection_possibleTypes.includes(obj.__typename)
}



var TeamDiscussion_possibleTypes = ['TeamDiscussion']
module.exports.isTeamDiscussion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussion"')
  return TeamDiscussion_possibleTypes.includes(obj.__typename)
}



var TeamDiscussionComment_possibleTypes = ['TeamDiscussionComment']
module.exports.isTeamDiscussionComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussionComment"')
  return TeamDiscussionComment_possibleTypes.includes(obj.__typename)
}



var TeamDiscussionCommentConnection_possibleTypes = ['TeamDiscussionCommentConnection']
module.exports.isTeamDiscussionCommentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussionCommentConnection"')
  return TeamDiscussionCommentConnection_possibleTypes.includes(obj.__typename)
}



var TeamDiscussionCommentEdge_possibleTypes = ['TeamDiscussionCommentEdge']
module.exports.isTeamDiscussionCommentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussionCommentEdge"')
  return TeamDiscussionCommentEdge_possibleTypes.includes(obj.__typename)
}



var TeamDiscussionConnection_possibleTypes = ['TeamDiscussionConnection']
module.exports.isTeamDiscussionConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussionConnection"')
  return TeamDiscussionConnection_possibleTypes.includes(obj.__typename)
}



var TeamDiscussionEdge_possibleTypes = ['TeamDiscussionEdge']
module.exports.isTeamDiscussionEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamDiscussionEdge"')
  return TeamDiscussionEdge_possibleTypes.includes(obj.__typename)
}



var TeamEdge_possibleTypes = ['TeamEdge']
module.exports.isTeamEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamEdge"')
  return TeamEdge_possibleTypes.includes(obj.__typename)
}



var TeamMemberConnection_possibleTypes = ['TeamMemberConnection']
module.exports.isTeamMemberConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamMemberConnection"')
  return TeamMemberConnection_possibleTypes.includes(obj.__typename)
}



var TeamMemberEdge_possibleTypes = ['TeamMemberEdge']
module.exports.isTeamMemberEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamMemberEdge"')
  return TeamMemberEdge_possibleTypes.includes(obj.__typename)
}



var TeamRemoveMemberAuditEntry_possibleTypes = ['TeamRemoveMemberAuditEntry']
module.exports.isTeamRemoveMemberAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamRemoveMemberAuditEntry"')
  return TeamRemoveMemberAuditEntry_possibleTypes.includes(obj.__typename)
}



var TeamRemoveRepositoryAuditEntry_possibleTypes = ['TeamRemoveRepositoryAuditEntry']
module.exports.isTeamRemoveRepositoryAuditEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamRemoveRepositoryAuditEntry"')
  return TeamRemoveRepositoryAuditEntry_possibleTypes.includes(obj.__typename)
}



var TeamRepositoryConnection_possibleTypes = ['TeamRepositoryConnection']
module.exports.isTeamRepositoryConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamRepositoryConnection"')
  return TeamRepositoryConnection_possibleTypes.includes(obj.__typename)
}



var TeamRepositoryEdge_possibleTypes = ['TeamRepositoryEdge']
module.exports.isTeamRepositoryEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTeamRepositoryEdge"')
  return TeamRepositoryEdge_possibleTypes.includes(obj.__typename)
}



var TextMatch_possibleTypes = ['TextMatch']
module.exports.isTextMatch = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTextMatch"')
  return TextMatch_possibleTypes.includes(obj.__typename)
}



var TextMatchHighlight_possibleTypes = ['TextMatchHighlight']
module.exports.isTextMatchHighlight = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTextMatchHighlight"')
  return TextMatchHighlight_possibleTypes.includes(obj.__typename)
}



var Topic_possibleTypes = ['Topic']
module.exports.isTopic = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTopic"')
  return Topic_possibleTypes.includes(obj.__typename)
}



var TopicAuditEntryData_possibleTypes = ['RepoAddTopicAuditEntry','RepoRemoveTopicAuditEntry']
module.exports.isTopicAuditEntryData = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTopicAuditEntryData"')
  return TopicAuditEntryData_possibleTypes.includes(obj.__typename)
}



var TopicConnection_possibleTypes = ['TopicConnection']
module.exports.isTopicConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTopicConnection"')
  return TopicConnection_possibleTypes.includes(obj.__typename)
}



var TopicEdge_possibleTypes = ['TopicEdge']
module.exports.isTopicEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTopicEdge"')
  return TopicEdge_possibleTypes.includes(obj.__typename)
}



var TransferIssuePayload_possibleTypes = ['TransferIssuePayload']
module.exports.isTransferIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransferIssuePayload"')
  return TransferIssuePayload_possibleTypes.includes(obj.__typename)
}



var TransferredEvent_possibleTypes = ['TransferredEvent']
module.exports.isTransferredEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTransferredEvent"')
  return TransferredEvent_possibleTypes.includes(obj.__typename)
}



var Tree_possibleTypes = ['Tree']
module.exports.isTree = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTree"')
  return Tree_possibleTypes.includes(obj.__typename)
}



var TreeEntry_possibleTypes = ['TreeEntry']
module.exports.isTreeEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTreeEntry"')
  return TreeEntry_possibleTypes.includes(obj.__typename)
}



var UnarchiveRepositoryPayload_possibleTypes = ['UnarchiveRepositoryPayload']
module.exports.isUnarchiveRepositoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnarchiveRepositoryPayload"')
  return UnarchiveRepositoryPayload_possibleTypes.includes(obj.__typename)
}



var UnassignedEvent_possibleTypes = ['UnassignedEvent']
module.exports.isUnassignedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnassignedEvent"')
  return UnassignedEvent_possibleTypes.includes(obj.__typename)
}



var UnfollowUserPayload_possibleTypes = ['UnfollowUserPayload']
module.exports.isUnfollowUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnfollowUserPayload"')
  return UnfollowUserPayload_possibleTypes.includes(obj.__typename)
}



var UniformResourceLocatable_possibleTypes = ['Bot','CheckRun','ClosedEvent','Commit','ConvertToDraftEvent','CrossReferencedEvent','Gist','Issue','Mannequin','MergedEvent','Milestone','Organization','PullRequest','PullRequestCommit','ReadyForReviewEvent','Release','Repository','RepositoryTopic','ReviewDismissedEvent','TeamDiscussion','TeamDiscussionComment','User']
module.exports.isUniformResourceLocatable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUniformResourceLocatable"')
  return UniformResourceLocatable_possibleTypes.includes(obj.__typename)
}



var UnknownSignature_possibleTypes = ['UnknownSignature']
module.exports.isUnknownSignature = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnknownSignature"')
  return UnknownSignature_possibleTypes.includes(obj.__typename)
}



var UnlabeledEvent_possibleTypes = ['UnlabeledEvent']
module.exports.isUnlabeledEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnlabeledEvent"')
  return UnlabeledEvent_possibleTypes.includes(obj.__typename)
}



var UnlinkRepositoryFromProjectPayload_possibleTypes = ['UnlinkRepositoryFromProjectPayload']
module.exports.isUnlinkRepositoryFromProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnlinkRepositoryFromProjectPayload"')
  return UnlinkRepositoryFromProjectPayload_possibleTypes.includes(obj.__typename)
}



var UnlockLockablePayload_possibleTypes = ['UnlockLockablePayload']
module.exports.isUnlockLockablePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnlockLockablePayload"')
  return UnlockLockablePayload_possibleTypes.includes(obj.__typename)
}



var UnlockedEvent_possibleTypes = ['UnlockedEvent']
module.exports.isUnlockedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnlockedEvent"')
  return UnlockedEvent_possibleTypes.includes(obj.__typename)
}



var UnmarkIssueAsDuplicatePayload_possibleTypes = ['UnmarkIssueAsDuplicatePayload']
module.exports.isUnmarkIssueAsDuplicatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnmarkIssueAsDuplicatePayload"')
  return UnmarkIssueAsDuplicatePayload_possibleTypes.includes(obj.__typename)
}



var UnmarkedAsDuplicateEvent_possibleTypes = ['UnmarkedAsDuplicateEvent']
module.exports.isUnmarkedAsDuplicateEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnmarkedAsDuplicateEvent"')
  return UnmarkedAsDuplicateEvent_possibleTypes.includes(obj.__typename)
}



var UnminimizeCommentPayload_possibleTypes = ['UnminimizeCommentPayload']
module.exports.isUnminimizeCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnminimizeCommentPayload"')
  return UnminimizeCommentPayload_possibleTypes.includes(obj.__typename)
}



var UnpinIssuePayload_possibleTypes = ['UnpinIssuePayload']
module.exports.isUnpinIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnpinIssuePayload"')
  return UnpinIssuePayload_possibleTypes.includes(obj.__typename)
}



var UnpinnedEvent_possibleTypes = ['UnpinnedEvent']
module.exports.isUnpinnedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnpinnedEvent"')
  return UnpinnedEvent_possibleTypes.includes(obj.__typename)
}



var UnresolveReviewThreadPayload_possibleTypes = ['UnresolveReviewThreadPayload']
module.exports.isUnresolveReviewThreadPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnresolveReviewThreadPayload"')
  return UnresolveReviewThreadPayload_possibleTypes.includes(obj.__typename)
}



var UnsubscribedEvent_possibleTypes = ['UnsubscribedEvent']
module.exports.isUnsubscribedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnsubscribedEvent"')
  return UnsubscribedEvent_possibleTypes.includes(obj.__typename)
}



var Updatable_possibleTypes = ['CommitComment','GistComment','Issue','IssueComment','Project','PullRequest','PullRequestReview','PullRequestReviewComment','TeamDiscussion','TeamDiscussionComment']
module.exports.isUpdatable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatable"')
  return Updatable_possibleTypes.includes(obj.__typename)
}



var UpdatableComment_possibleTypes = ['CommitComment','GistComment','Issue','IssueComment','PullRequest','PullRequestReview','PullRequestReviewComment','TeamDiscussion','TeamDiscussionComment']
module.exports.isUpdatableComment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatableComment"')
  return UpdatableComment_possibleTypes.includes(obj.__typename)
}



var UpdateBranchProtectionRulePayload_possibleTypes = ['UpdateBranchProtectionRulePayload']
module.exports.isUpdateBranchProtectionRulePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateBranchProtectionRulePayload"')
  return UpdateBranchProtectionRulePayload_possibleTypes.includes(obj.__typename)
}



var UpdateCheckRunPayload_possibleTypes = ['UpdateCheckRunPayload']
module.exports.isUpdateCheckRunPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateCheckRunPayload"')
  return UpdateCheckRunPayload_possibleTypes.includes(obj.__typename)
}



var UpdateCheckSuitePreferencesPayload_possibleTypes = ['UpdateCheckSuitePreferencesPayload']
module.exports.isUpdateCheckSuitePreferencesPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateCheckSuitePreferencesPayload"')
  return UpdateCheckSuitePreferencesPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseActionExecutionCapabilitySettingPayload_possibleTypes = ['UpdateEnterpriseActionExecutionCapabilitySettingPayload']
module.exports.isUpdateEnterpriseActionExecutionCapabilitySettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseActionExecutionCapabilitySettingPayload"')
  return UpdateEnterpriseActionExecutionCapabilitySettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseAdministratorRolePayload_possibleTypes = ['UpdateEnterpriseAdministratorRolePayload']
module.exports.isUpdateEnterpriseAdministratorRolePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseAdministratorRolePayload"')
  return UpdateEnterpriseAdministratorRolePayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload_possibleTypes = ['UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload']
module.exports.isUpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload"')
  return UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseDefaultRepositoryPermissionSettingPayload_possibleTypes = ['UpdateEnterpriseDefaultRepositoryPermissionSettingPayload']
module.exports.isUpdateEnterpriseDefaultRepositoryPermissionSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseDefaultRepositoryPermissionSettingPayload"')
  return UpdateEnterpriseDefaultRepositoryPermissionSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload']
module.exports.isUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload"')
  return UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload']
module.exports.isUpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanCreateRepositoriesSettingPayload"')
  return UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanDeleteIssuesSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanDeleteIssuesSettingPayload']
module.exports.isUpdateEnterpriseMembersCanDeleteIssuesSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanDeleteIssuesSettingPayload"')
  return UpdateEnterpriseMembersCanDeleteIssuesSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload']
module.exports.isUpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload"')
  return UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload']
module.exports.isUpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload"')
  return UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanMakePurchasesSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanMakePurchasesSettingPayload']
module.exports.isUpdateEnterpriseMembersCanMakePurchasesSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanMakePurchasesSettingPayload"')
  return UpdateEnterpriseMembersCanMakePurchasesSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload']
module.exports.isUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload"')
  return UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload_possibleTypes = ['UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload']
module.exports.isUpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload"')
  return UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseOrganizationProjectsSettingPayload_possibleTypes = ['UpdateEnterpriseOrganizationProjectsSettingPayload']
module.exports.isUpdateEnterpriseOrganizationProjectsSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseOrganizationProjectsSettingPayload"')
  return UpdateEnterpriseOrganizationProjectsSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseProfilePayload_possibleTypes = ['UpdateEnterpriseProfilePayload']
module.exports.isUpdateEnterpriseProfilePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseProfilePayload"')
  return UpdateEnterpriseProfilePayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseRepositoryProjectsSettingPayload_possibleTypes = ['UpdateEnterpriseRepositoryProjectsSettingPayload']
module.exports.isUpdateEnterpriseRepositoryProjectsSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseRepositoryProjectsSettingPayload"')
  return UpdateEnterpriseRepositoryProjectsSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseTeamDiscussionsSettingPayload_possibleTypes = ['UpdateEnterpriseTeamDiscussionsSettingPayload']
module.exports.isUpdateEnterpriseTeamDiscussionsSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseTeamDiscussionsSettingPayload"')
  return UpdateEnterpriseTeamDiscussionsSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload_possibleTypes = ['UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload']
module.exports.isUpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload"')
  return UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateIpAllowListEnabledSettingPayload_possibleTypes = ['UpdateIpAllowListEnabledSettingPayload']
module.exports.isUpdateIpAllowListEnabledSettingPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateIpAllowListEnabledSettingPayload"')
  return UpdateIpAllowListEnabledSettingPayload_possibleTypes.includes(obj.__typename)
}



var UpdateIpAllowListEntryPayload_possibleTypes = ['UpdateIpAllowListEntryPayload']
module.exports.isUpdateIpAllowListEntryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateIpAllowListEntryPayload"')
  return UpdateIpAllowListEntryPayload_possibleTypes.includes(obj.__typename)
}



var UpdateIssueCommentPayload_possibleTypes = ['UpdateIssueCommentPayload']
module.exports.isUpdateIssueCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateIssueCommentPayload"')
  return UpdateIssueCommentPayload_possibleTypes.includes(obj.__typename)
}



var UpdateIssuePayload_possibleTypes = ['UpdateIssuePayload']
module.exports.isUpdateIssuePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateIssuePayload"')
  return UpdateIssuePayload_possibleTypes.includes(obj.__typename)
}



var UpdateLabelPayload_possibleTypes = ['UpdateLabelPayload']
module.exports.isUpdateLabelPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateLabelPayload"')
  return UpdateLabelPayload_possibleTypes.includes(obj.__typename)
}



var UpdateProjectCardPayload_possibleTypes = ['UpdateProjectCardPayload']
module.exports.isUpdateProjectCardPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateProjectCardPayload"')
  return UpdateProjectCardPayload_possibleTypes.includes(obj.__typename)
}



var UpdateProjectColumnPayload_possibleTypes = ['UpdateProjectColumnPayload']
module.exports.isUpdateProjectColumnPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateProjectColumnPayload"')
  return UpdateProjectColumnPayload_possibleTypes.includes(obj.__typename)
}



var UpdateProjectPayload_possibleTypes = ['UpdateProjectPayload']
module.exports.isUpdateProjectPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateProjectPayload"')
  return UpdateProjectPayload_possibleTypes.includes(obj.__typename)
}



var UpdatePullRequestPayload_possibleTypes = ['UpdatePullRequestPayload']
module.exports.isUpdatePullRequestPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePullRequestPayload"')
  return UpdatePullRequestPayload_possibleTypes.includes(obj.__typename)
}



var UpdatePullRequestReviewCommentPayload_possibleTypes = ['UpdatePullRequestReviewCommentPayload']
module.exports.isUpdatePullRequestReviewCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePullRequestReviewCommentPayload"')
  return UpdatePullRequestReviewCommentPayload_possibleTypes.includes(obj.__typename)
}



var UpdatePullRequestReviewPayload_possibleTypes = ['UpdatePullRequestReviewPayload']
module.exports.isUpdatePullRequestReviewPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdatePullRequestReviewPayload"')
  return UpdatePullRequestReviewPayload_possibleTypes.includes(obj.__typename)
}



var UpdateRefPayload_possibleTypes = ['UpdateRefPayload']
module.exports.isUpdateRefPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateRefPayload"')
  return UpdateRefPayload_possibleTypes.includes(obj.__typename)
}



var UpdateRefsPayload_possibleTypes = ['UpdateRefsPayload']
module.exports.isUpdateRefsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateRefsPayload"')
  return UpdateRefsPayload_possibleTypes.includes(obj.__typename)
}



var UpdateRepositoryPayload_possibleTypes = ['UpdateRepositoryPayload']
module.exports.isUpdateRepositoryPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateRepositoryPayload"')
  return UpdateRepositoryPayload_possibleTypes.includes(obj.__typename)
}



var UpdateSubscriptionPayload_possibleTypes = ['UpdateSubscriptionPayload']
module.exports.isUpdateSubscriptionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateSubscriptionPayload"')
  return UpdateSubscriptionPayload_possibleTypes.includes(obj.__typename)
}



var UpdateTeamDiscussionCommentPayload_possibleTypes = ['UpdateTeamDiscussionCommentPayload']
module.exports.isUpdateTeamDiscussionCommentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateTeamDiscussionCommentPayload"')
  return UpdateTeamDiscussionCommentPayload_possibleTypes.includes(obj.__typename)
}



var UpdateTeamDiscussionPayload_possibleTypes = ['UpdateTeamDiscussionPayload']
module.exports.isUpdateTeamDiscussionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateTeamDiscussionPayload"')
  return UpdateTeamDiscussionPayload_possibleTypes.includes(obj.__typename)
}



var UpdateTeamReviewAssignmentPayload_possibleTypes = ['UpdateTeamReviewAssignmentPayload']
module.exports.isUpdateTeamReviewAssignmentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateTeamReviewAssignmentPayload"')
  return UpdateTeamReviewAssignmentPayload_possibleTypes.includes(obj.__typename)
}



var UpdateTopicsPayload_possibleTypes = ['UpdateTopicsPayload']
module.exports.isUpdateTopicsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateTopicsPayload"')
  return UpdateTopicsPayload_possibleTypes.includes(obj.__typename)
}



var User_possibleTypes = ['User']
module.exports.isUser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



var UserBlockedEvent_possibleTypes = ['UserBlockedEvent']
module.exports.isUserBlockedEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserBlockedEvent"')
  return UserBlockedEvent_possibleTypes.includes(obj.__typename)
}



var UserConnection_possibleTypes = ['UserConnection']
module.exports.isUserConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserConnection"')
  return UserConnection_possibleTypes.includes(obj.__typename)
}



var UserContentEdit_possibleTypes = ['UserContentEdit']
module.exports.isUserContentEdit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserContentEdit"')
  return UserContentEdit_possibleTypes.includes(obj.__typename)
}



var UserContentEditConnection_possibleTypes = ['UserContentEditConnection']
module.exports.isUserContentEditConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserContentEditConnection"')
  return UserContentEditConnection_possibleTypes.includes(obj.__typename)
}



var UserContentEditEdge_possibleTypes = ['UserContentEditEdge']
module.exports.isUserContentEditEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserContentEditEdge"')
  return UserContentEditEdge_possibleTypes.includes(obj.__typename)
}



var UserEdge_possibleTypes = ['UserEdge']
module.exports.isUserEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserEdge"')
  return UserEdge_possibleTypes.includes(obj.__typename)
}



var UserStatus_possibleTypes = ['UserStatus']
module.exports.isUserStatus = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserStatus"')
  return UserStatus_possibleTypes.includes(obj.__typename)
}



var UserStatusConnection_possibleTypes = ['UserStatusConnection']
module.exports.isUserStatusConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserStatusConnection"')
  return UserStatusConnection_possibleTypes.includes(obj.__typename)
}



var UserStatusEdge_possibleTypes = ['UserStatusEdge']
module.exports.isUserStatusEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserStatusEdge"')
  return UserStatusEdge_possibleTypes.includes(obj.__typename)
}



var ViewerHovercardContext_possibleTypes = ['ViewerHovercardContext']
module.exports.isViewerHovercardContext = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isViewerHovercardContext"')
  return ViewerHovercardContext_possibleTypes.includes(obj.__typename)
}
