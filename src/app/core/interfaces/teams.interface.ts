export interface Teams {
  image: string;
  title: string;
  numMembers: string;
  wins: Wins;
  members: Members;
}

export interface Wins {
  tournament: string;
  prize: string;
  location: string;
  registeredGroups: string;
}

export interface Members {
  photo: string;
  name: string;
}
