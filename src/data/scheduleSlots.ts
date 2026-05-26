import type { ScheduleSlot } from '../types';

export const scheduleSlots: ScheduleSlot[] = [
  {
    date: '2026-05-04',
    label: '월',
    time: '10:00',
    counselors: [
      { counselorId: 'practical-park', approachType: 'practical' },
      { counselorId: 'emotional-lee', approachType: 'emotional' },
    ],
  },
  {
    date: '2026-05-04',
    label: '월',
    time: '13:30',
    counselors: [
      { counselorId: 'practical-kim', approachType: 'practical' },
      { counselorId: 'emotional-choi', approachType: 'emotional' },
    ],
  },
  {
    date: '2026-05-06',
    label: '수',
    time: '15:00',
    counselors: [
      { counselorId: 'practical-park', approachType: 'practical' },
      { counselorId: 'emotional-choi', approachType: 'emotional' },
    ],
  },
  {
    date: '2026-05-08',
    label: '금',
    time: '14:00',
    counselors: [
      { counselorId: 'practical-kim', approachType: 'practical' },
      { counselorId: 'emotional-lee', approachType: 'emotional' },
    ],
  },
  {
    date: '2026-05-08',
    label: '금',
    time: '16:00',
    counselors: [
      { counselorId: 'practical-park', approachType: 'practical' },
      { counselorId: 'emotional-lee', approachType: 'emotional' },
    ],
  },
  {
    date: '2026-05-09',
    label: '토',
    time: '11:00',
    counselors: [
      { counselorId: 'practical-kim', approachType: 'practical' },
      { counselorId: 'emotional-choi', approachType: 'emotional' },
    ],
  },
  {
    date: '2026-05-13',
    label: '수',
    time: '10:30',
    counselors: [
      { counselorId: 'practical-park', approachType: 'practical' },
      { counselorId: 'emotional-choi', approachType: 'emotional' },
    ],
  },
  {
    date: '2026-05-13',
    label: '수',
    time: '15:00',
    counselors: [
      { counselorId: 'practical-kim', approachType: 'practical' },
      { counselorId: 'emotional-lee', approachType: 'emotional' },
    ],
  },
  {
    date: '2026-05-15',
    label: '금',
    time: '14:00',
    counselors: [
      { counselorId: 'practical-park', approachType: 'practical' },
      { counselorId: 'emotional-lee', approachType: 'emotional' },
    ],
  },
  {
    date: '2026-05-18',
    label: '월',
    time: '10:00',
    counselors: [
      { counselorId: 'practical-kim', approachType: 'practical' },
      { counselorId: 'emotional-lee', approachType: 'emotional' },
    ],
  },
  {
    date: '2026-05-18',
    label: '월',
    time: '15:30',
    counselors: [
      { counselorId: 'practical-park', approachType: 'practical' },
      { counselorId: 'emotional-choi', approachType: 'emotional' },
    ],
  },
  {
    date: '2026-05-23',
    label: '토',
    time: '11:00',
    counselors: [
      { counselorId: 'practical-kim', approachType: 'practical' },
      { counselorId: 'emotional-choi', approachType: 'emotional' },
    ],
  },
];

export const validateScheduleSlots = () =>
  scheduleSlots.every((slot) => {
    const approachTypes = slot.counselors.map((counselor) => counselor.approachType);
    return (
      slot.counselors.length === 2 &&
      approachTypes.includes('practical') &&
      approachTypes.includes('emotional')
    );
  });
