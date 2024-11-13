export interface WhitelistModel {
  createdAt: Date;
  id: number;
  name: string;
  isInvitedToAkad?: boolean;
  isInvitedToResepsi?: boolean;
  isInvitedToNgunduhMantu?: boolean;
}
