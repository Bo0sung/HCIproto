interface UserInputStepProps {
  userInput: string;
  onChange: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const promptHints = ['학년/전공', '고민 중인 선택지', '가장 불안한 점'];

export default function UserInputStep({ userInput, onChange, onBack, onNext }: UserInputStepProps) {
  const trimmedLength = userInput.trim().length;
  const canContinue = trimmedLength > 0;

  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
      <div className="max-w-3xl">
        <p className="text-sm font-bold text-seoulOrange">Step 2</p>
        <h2 className="mt-1 text-2xl font-bold text-ink">현재 고민을 짧게 알려주세요</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          완성된 문장일 필요는 없습니다. 상담사 스타일을 비교할 수 있을 만큼만 적어도 충분합니다.
        </p>
      </div>

      <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {promptHints.map((hint) => (
            <span
              key={hint}
              className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-sm"
            >
              {hint}
            </span>
          ))}
        </div>

        <textarea
          value={userInput}
          onChange={(event) => onChange(event.target.value)}
          rows={5}
          className="w-full resize-none rounded-2xl border border-slate-200 bg-white p-4 text-base leading-7 text-ink outline-none transition placeholder:text-slate-400 focus:border-seoulBlue focus:ring-4 focus:ring-blue-100"
          placeholder="예: 3학년이고 대학원과 취업 중에 고민 중입니다. 학점이 낮아서 자신감이 없고 포트폴리오도 부족한 것 같아요."
        />

        <div className="mt-3 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>한두 문장만 입력해도 다음 단계에서 상담사별 응답을 비교할 수 있습니다.</p>
          <p className={`font-bold ${trimmedLength > 0 ? 'text-seoulBlue' : 'text-slate-400'}`}>
            {trimmedLength}자 입력됨
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="rounded-2xl border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:border-seoulBlue hover:text-seoulBlue"
        >
          이전으로
        </button>
        <button
          type="button"
          disabled={!canContinue}
          onClick={onNext}
          className="rounded-2xl bg-seoulBlue px-6 py-3 font-bold text-white shadow-md transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          상담사 스타일 비교하기
        </button>
      </div>
    </section>
  );
}
