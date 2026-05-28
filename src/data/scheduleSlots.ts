import type { ScheduleSlot } from '../types';

const weekdayLabels = ['일', '월', '화', '수', '목', '금', '토'];
const baseTimes = ['10:00', '14:00', '16:00'];
const extraMorningTimes: Record<number, string> = {
  5: '09:00',
  8: '11:00',
  12: '09:30',
  15: '11:30',
  19: '09:00',
  22: '11:00',
  26: '09:30',
  29: '11:30',
};

export const scheduleSlots: ScheduleSlot[] = Array.from({ length: 31 }, (_, index) => {
  const day = index + 1;
  const date = new Date(2026, 4, day);
  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return [];
  }

  const times = extraMorningTimes[day] ? [extraMorningTimes[day], ...baseTimes] : baseTimes;
  const dateText = `2026-05-${String(day).padStart(2, '0')}`;

  return times.map((time) => ({
    date: dateText,
    label: weekdayLabels[dayOfWeek],
    time,
  }));
}).flat();
