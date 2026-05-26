export type Step = 1 | 2 | 3 | 4 | 5;
export type CounselorApproachType = 'practical' | 'emotional';

export interface Counselor {
  id: string;
  approachType: CounselorApproachType;
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

export interface ScheduleSlotCounselor {
  counselorId: string;
  approachType: CounselorApproachType;
}

export interface ScheduleSlot extends AvailableSlot {
  counselors: [ScheduleSlotCounselor, ScheduleSlotCounselor];
}
