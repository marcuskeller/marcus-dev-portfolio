export type ExperienceType = 'work' | 'education';

export interface Experience {
  readonly role: string;
  readonly organization: string;
  readonly location?: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly isOngoing: boolean;
  readonly type: ExperienceType;
  readonly description: string;
  readonly highlights?: readonly string[];
}
