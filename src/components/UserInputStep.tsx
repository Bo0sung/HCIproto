interface UserInputStepProps {
  userInput: string;
  onChange: (value: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const promptHints = ['학년/전공', '고민 중인 선택지', '가장 막히는 지점'];

const concernExamples = [
  {
    label: '취업 vs 대학원',
    text: '취업을 해야 할지 대학원에 진학해야 할지 고민 중입니다.',
  },
  {
    label: '첫 준비 단계',
    text: '아직 해놓은 게 없고 뭐부터 해야 할지 모르겠어요.',
  },
  {
    label: '취업 준비',
    text: '취업 준비를 해야 하는데 이력서와 포트폴리오를 어떻게 시작해야 할지 모르겠습니다.',
  },
  {
    label: '대학원 진학',
    text: '대학원 진학을 고민 중인데 연구실 선택과 교수님 컨택이 막막합니다.',
  },
  {
    label: '전공·적성',
    text: '전공이 저와 맞는지 모르겠고 어떤 분야에 흥미가 있는지도 잘 모르겠습니다.',
  },
  {
    label: '정보 부족',
    text: '취업에 대한 정보와 필요한 준비 조건이 부족한 것 같습니다.',
  },
];

export default function UserInputStep({ userInput, onChange, onBack, onNext }: UserInputStepProps) {
  const trimmedLength = userInput.trim().length;
  const canContinue = trimmedLength > 0;

  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
      <div className="max-w-3xl">
        <p className="text-sm font-bold text-seoulOrange">Step 2</p>
        <h2 className="mt-1 text-2xl font-bold text-ink">현재 고민을 짧게 알려주세요</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          직접 입력해도 되고, 아래 고민 index 버튼을 눌러 예시 문장을 선택해도 됩니다.
        </p>
      </div>

      <div className="mt-5 rounded-3xl border border-blue-100 bg-seoulBlueSoft p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-seoulBlue">고민 index 선택</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {concernExamples.map((example) => (
            <button
              key={example.label}
              type="button"
              onClick={() => onChange(example.text)}
              className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
                userInput === example.text
                  ? 'border-seoulBlue bg-seoulBlue text-white shadow-md'
                  : 'border-blue-100 bg-white text-slate-700 hover:border-seoulBlue hover:text-seoulBlue'
              }`}
            >
              {example.label}
            </button>
          ))}
        </div>
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
          <p>선택한 예시 문장은 자유롭게 수정할 수 있습니다.</p>
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
          상담사 비교하기
        </button>
      </div>
    </section>
  );
}
