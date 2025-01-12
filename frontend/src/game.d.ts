// Code generated by tygo. DO NOT EDIT.
export type MatchType = "CASUAL" | "UNRANKED" | "RANKED"
export type GameMode = "BOMB" | "HOSTAGE"
export type WinCondition = "KilledOpponents" | "SecuredArea" | "DisabledDefuser" | "DefusedBomb" | "ExtractedHostage" | "Time"
export type TeamRole = "ATTACK" | "DEFENSE"

//////////
// source: files.go

export interface RoundsWatcher {
}

//////////
// source: structs.go

export interface RoundInfo {
  MatchID: string;
  Time: string /* RFC3339 */;
  SeasonSlug: string;
  MatchType: MatchType;
  GameMode: GameMode;
  MapName: string;
  Teams: Team[];
  Site: string;
  /**
   * the following attributes relate to the recording player's team
   */
  Won: boolean;
  WinCondition: WinCondition;
  TeamIndex: number /* int */;
  PlayerName: string;
}
export interface Team {
  Role: TeamRole;
  Players: Player[];
}
export interface Player {
  Username: string;
  Operator: string;
}
