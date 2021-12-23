import { Timestamp } from "firebase/firestore";

export interface IUser {
  name: string;
  dateCreated: Timestamp;
  uid: string;
  key: string;
  sessionsCompletedThisWeek: Array<number>;
  taskCompletedThisWeek: Array<number>;
  numSessionsCompleted: number;
  numTaskCompleted: number;
}
