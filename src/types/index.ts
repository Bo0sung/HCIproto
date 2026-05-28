export type Step = 1 | 2 | 3 | 4 | 5;
export type CounselorApproachType = 'practical' | 'emotional';
export type CounselorSpecialty =
  | 'employmentGraduate'
  | 'employment'
  | 'graduate'
  | 'majorFit'
  | 'readinessStart'
  | 'general';

export interface Counselor {
  id: string;
  approachType: CounselorApproachType;
  specialty: CounselorSpecialty;
  name: string;
  type: string;
  tags: string[];
  description: string;
  accentClass: string;
}

export interface ChatMessage {
  id: string;
  role: 'student' | 'counselor';
  content: string;
}

export interface AvailableSlot {
  date: string;
  label: string;
  time: string;
}

export type ScheduleSlot = AvailableSlot;
