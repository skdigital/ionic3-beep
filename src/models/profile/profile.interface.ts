export interface Profile {
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  dateOfBirth: Date;
  airDiver?: boolean;
  satDiver?: boolean;
  inspectionDiver?: boolean;
  airSupervisor?: boolean;
  satSupervisor?: boolean;
  totalDives?: number;
}
