import type { Counselor } from '../types';

interface BaselineCounselorStepProps {
  counselors: Counselor[];
  onBack: () => void;
  onSelect: (counselor: Counselor) => void;
}

export default function BaselineCounselorStep({
  counselors,
  onBack,
  onSelect,
}: BaselineCounselorStepProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
      <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-start">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-seoulOrange">Step 3</p>
          <h2 className="mt-1 text-2xl font-extrabold text-ink">상담사 선택</h2>
          <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
            기본 예약형 조건에서는 상담사의 상세 전문 분야나 응답 스타일 미리보기를 제공하지 않습니다.
            일정에 배정된 상담사 중 한 명을 선택해 신청 단계로 이동합니다.
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="rounded-2xl border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:border-seoulBlue hover:text-seoulBlue"
        >
          고민 수정
        </button>
      </div>

      <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm font-extrabold text-slate-700">제공 정보</p>
        <div className="mt-3 grid gap-3 text-sm font-semibold text-slate-600 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-3">상담사 이름</div>
          <div className="rounded-2xl bg-white p-3">기본 상담 유형</div>
          <div className="rounded-2xl bg-white p-3">예약 가능 여부</div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {counselors.map((counselor, index) => (
          <article
            key={counselor.id}
            className="flex min-h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-2xl font-black text-slate-600">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-ink">{counselor.name}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-600">진로 상담사</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-500">기본 안내</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                선택한 일정에 상담 신청이 가능한 상담사입니다. 구체적인 상담 방식과 세부 전문 분야는
                신청 후 실제 상담 과정에서 확인합니다.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelect(counselor)}
              className="mt-5 rounded-2xl bg-seoulBlue px-4 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-blue-700"
            >
              {counselor.name}에게 상담 신청
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
