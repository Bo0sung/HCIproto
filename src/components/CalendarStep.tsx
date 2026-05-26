import { scheduleSlots } from '../data/scheduleSlots';

interface CalendarStepProps {
  selectedDate: string;
  selectedTime: string;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
  onNext: () => void;
}

const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
const firstDayOffset = 5;
const daysInMonth = 31;

const getSlotsForDate = (date: string) => scheduleSlots.filter((slot) => slot.date === date);

type CalendarCell =
  | { key: string; kind: 'empty' }
  | { key: string; kind: 'day'; day: number; date: string };

export default function CalendarStep({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  onNext,
}: CalendarStepProps) {
  const calendarCells: CalendarCell[] = [
    ...Array.from({ length: firstDayOffset }, (_, index) => ({
      key: `empty-${index}`,
      kind: 'empty' as const,
    })),
    ...Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      return {
        key: `day-${day}`,
        kind: 'day' as const,
        day,
        date: `2026-05-${String(day).padStart(2, '0')}`,
      };
    }),
  ];

  const selectedSlots = selectedDate ? getSlotsForDate(selectedDate) : [];
  const canContinue = Boolean(selectedDate && selectedTime);

  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
      <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold text-seoulOrange">Step 1</p>
          <h2 className="mt-1 text-2xl font-bold text-ink">상담 가능한 일정을 선택하세요</h2>
          <p className="mt-2 text-sm text-slate-600">
            모든 시간대에는 현실 점검형과 정서 공감형 상담사가 함께 배정되어 있습니다.
          </p>
        </div>
        <div className="rounded-2xl bg-seoulBlueSoft px-4 py-3 text-sm font-semibold text-seoulBlue">
          2026년 5월
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.75fr]">
        <div>
          <div className="mb-2 grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-500">
            {weekDays.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {calendarCells.map((cell) => {
              if (cell.kind === 'empty') {
                return <div key={cell.key} className="min-h-[92px] rounded-2xl" />;
              }

              const slots = getSlotsForDate(cell.date);
              const isAvailable = slots.length > 0;
              const isSelected = selectedDate === cell.date;
              const visibleTimes = slots.slice(0, 2).map((slot) => slot.time);

              return (
                <button
                  key={cell.key}
                  type="button"
                  disabled={!isAvailable}
                  onClick={() => {
                    onSelectDate(cell.date);
                    onSelectTime(slots[0]?.time ?? '');
                  }}
                  className={`min-h-[92px] rounded-2xl border p-2 text-left transition ${
                    isSelected
                      ? 'border-seoulBlue bg-seoulBlue text-white shadow-md'
                      : isAvailable
                        ? 'border-blue-200 bg-white text-ink hover:border-seoulBlue hover:bg-seoulBlueSoft hover:shadow-md'
                        : 'cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300'
                  }`}
                >
                  <span className="block text-sm font-bold">{cell.day}</span>
                  {isAvailable ? (
                    <div className="mt-2 space-y-1">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-seoulOrangeSoft text-seoulOrange'
                        }`}
                      >
                        {slots.length}개 가능
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {visibleTimes.map((time) => (
                          <span
                            key={time}
                            className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
                              isSelected ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {time}
                          </span>
                        ))}
                        {slots.length > 2 && (
                          <span
                            className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
                              isSelected ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            +{slots.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <span className="mt-3 block text-[11px] font-semibold">예약 없음</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-bold text-ink">선택한 날짜</h3>
          <p className="mt-2 text-sm text-slate-600">
            {selectedDate ? selectedDate : '아직 날짜가 선택되지 않았습니다.'}
          </p>

          <div className="mt-5 space-y-3">
            {selectedSlots.length > 0 ? (
              selectedSlots.map((slot) => (
                <button
                  key={`${slot.date}-${slot.time}`}
                  type="button"
                  onClick={() => onSelectTime(slot.time)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left font-bold transition ${
                    selectedTime === slot.time
                      ? 'border-seoulOrange bg-seoulOrange text-white shadow-md'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-seoulOrange'
                  }`}
                >
                  <span>{slot.label} {slot.time}</span>
                  <span className="mt-1 block text-xs font-semibold opacity-80">
                    현실 점검형 + 정서 공감형
                  </span>
                </button>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-8 text-center text-sm text-slate-500">
                캘린더에서 상담 가능 날짜를 선택하세요.
              </div>
            )}
          </div>

          <button
            type="button"
            disabled={!canContinue}
            onClick={onNext}
            className="mt-6 w-full rounded-2xl bg-seoulBlue px-5 py-3 font-bold text-white shadow-md transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            고민 입력하기
          </button>
        </aside>
      </div>
    </section>
  );
}
