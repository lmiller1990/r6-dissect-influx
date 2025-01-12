// Code generated by tygo. DO NOT EDIT.

//////////
// source: app.go

/**
 * App struct
 */
export interface App {
}
export interface AppInfo {
  ProjectName: string;
  Version: string;
  Commit: string;
  GithubURL: string;
}
export interface ReleaseInfo {
  IsNewer: boolean;
  Version: string;
  Commitish: string;
  PublishedAt: string /* RFC3339 */;
  Changelog: string;
}

//////////
// source: events.go

export interface EventNames {
  NewRound: string;
  RoundWatcherStarted: string;
  RoundWatcherError: string;
  RoundWatcherStopped: string;
  LatestReleaseInfo: string;
  LatestReleaseInfoErr: string;
  UpdateProgress: string;
  UpdateErr: string;
}
