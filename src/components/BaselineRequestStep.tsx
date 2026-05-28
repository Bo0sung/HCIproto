import type { Counselor } from '../types';

interface BaselineRequestStepProps {
  selectedDate: string;
  selectedTime: string;
  counselor: Counselor;
  userInput: string;
  onBack: () => void;
  onSubmit: () => void;
}

export default function BaselineRequestStep({
  selectedDate,
  selectedTime,
  counselor,
  userInput,
  onBack,
  onSubmit,
}: BaselineRequestStepProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
      <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-start">
        <div>
          <p className="text-sm font-bold text-seoulOrange">Step 4</p>
          <h2 className="mt-1 text-2xl font-extrabold text-ink">상담 신청 내용 확인</h2>
          <p className="mt-2 max-w-3xl text-sm font-medium leading-6 text-slate-600">
            기본 예약형 조건에서는 모의 상담 없이 선택한 일정과 상담사 정보를 확인한 뒤 신청합니다.
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="rounded-2xl border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:border-seoulBlue hover:text-seoulBlue"
        >
          상담사 다시 선택
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-bold text-slate-500">선택 날짜</p>
          <p className="mt-2 text-xl font-extrabold text-ink">{selectedDate}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-bold text-slate-500">선택 시간</p>
          <p className="mt-2 text-xl font-extrabold text-ink">{selectedTime}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-bold text-slate-500">상담사</p>
          <p className="mt-2 text-xl font-extrabold text-ink">{counselor.name}</p>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-5">
        <p className="text-sm font-bold text-slate-500">입력한 고민</p>
        <p className="mt-3 whitespace-pre-line text-sm font-semibold leading-7 text-slate-700">
          {userInput}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-3xl bg-seoulBlueSoft p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold leading-6 text-slate-700">
          이 조건에서는 상담사 스타일 미리보기 없이 바로 신청하는 흐름을 측정합니다.
        </p>
        <button
          type="button"
          onClick={onSubmit}
          className="rounded-2xl bg-seoulBlue px-6 py-3 font-extrabold text-white shadow-md transition hover:bg-blue-700"
        >
          상담 신청하기
        </button>
      </div>
    </section>
  );
}
