import type { Counselor } from '../types';

interface CompleteStepProps {
  selectedDate: string;
  selectedTime: string;
  counselor: Counselor;
  userInput: string;
  onRestart: () => void;
}

export default function CompleteStep({
  selectedDate,
  selectedTime,
  counselor,
  userInput,
  onRestart,
}: CompleteStepProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
      <div className="rounded-3xl bg-seoulBlueSoft p-6 text-center">
        <p className="text-sm font-bold text-seoulOrange">Step 5</p>
        <h2 className="mt-2 text-3xl font-bold text-ink">상담 신청이 완료되었습니다.</h2>
        <p className="mt-3 text-sm text-slate-600">
          선택한 일정과 상담사 정보가 아래와 같이 접수되었습니다.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-bold text-slate-500">선택 날짜</p>
          <p className="mt-2 text-xl font-bold text-ink">{selectedDate}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-bold text-slate-500">선택 시간</p>
          <p className="mt-2 text-xl font-bold text-ink">{selectedTime}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-bold text-slate-500">상담사</p>
          <p className="mt-2 text-xl font-bold text-ink">{counselor.name}</p>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-5">
        <p className="text-sm font-bold text-slate-500">상담 신청 내용</p>
        <p className="mt-3 leading-7 text-slate-700">{userInput}</p>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={onRestart}
          className="rounded-2xl bg-seoulBlue px-6 py-3 font-bold text-white shadow-md transition hover:bg-blue-700"
        >
          처음부터 다시 시작
        </button>
      </div>
    </section>
  );
}
