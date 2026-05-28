import type { Counselor } from '../types';

interface CounselorPreviewStepProps {
  counselors: Counselor[];
  specialtyLabel: string;
  specialtyReason: string;
  userInput: string;
  onBack: () => void;
  onSelect: (counselor: Counselor) => void;
}

interface CounselorVisual {
  avatar: string;
  identityClass: string;
  avatarClass: string;
  badgeClass: string;
  buttonClass: string;
  summary: string;
  keyQuestion: string;
  keyPhrase: string;
  previewLines: string[];
}

const summarizeConcern = (input: string) => {
  const compact = input.trim().replace(/\s+/g, ' ');
  return compact.length > 90 ? `${compact.slice(0, 90)}...` : compact;
};

const getCounselorVisual = (counselor: Counselor): CounselorVisual => {
  if (counselor.approachType === 'practical') {
    return {
      avatar: '✓',
      identityClass: 'border-blue-200 bg-blue-50',
      avatarClass: 'bg-blue-100 text-blue-700',
      badgeClass: 'bg-blue-100 text-blue-700',
      buttonClass: 'bg-seoulBlue hover:bg-blue-700',
      summary: '현재 상태를 항목별로 점검하고, 가장 먼저 할 수 있는 준비 과제를 정리합니다.',
      keyQuestion: 'What should I prepare first?',
      keyPhrase: '현실적인 첫 단계 점검',
      previewLines: [
        '현재 가진 경험과 비어 있는 준비를 나눕니다.',
        '이번 주에 시작할 수 있는 작은 행동을 정합니다.',
        '선택지를 기준표로 비교해 다음 단계를 좁힙니다.',
      ],
    };
  }

  return {
    avatar: '♡',
    identityClass: 'border-orange-200 bg-orange-50',
    avatarClass: 'bg-orange-100 text-orange-700',
    badgeClass: 'bg-orange-100 text-orange-700',
    buttonClass: 'bg-seoulOrange hover:bg-orange-500',
    summary: '막막함과 선택 부담을 낮추고, 왜 시작이 어렵게 느껴지는지 함께 살펴봅니다.',
    keyQuestion: 'Why does starting feel difficult?',
    keyPhrase: '막막한 마음부터 정리',
    previewLines: [
      '지금 막히는 지점을 차분히 분리합니다.',
      '자기비난보다 시작 부담을 낮추는 데 집중합니다.',
      '내가 감당 가능한 속도로 첫 시도를 정합니다.',
    ],
  };
};

export default function CounselorPreviewStep({
  counselors,
  specialtyLabel,
  specialtyReason,
  userInput,
  onBack,
  onSelect,
}: CounselorPreviewStepProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
      <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-start">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-seoulOrange">Step 3</p>
          <h2 className="mt-1 text-2xl font-bold text-ink">고민 분야에 맞는 상담사를 비교해보세요</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            입력한 고민에서 핵심 분야를 추출하고, 해당 분야를 전문으로 하는 두 상담사를
            추천합니다.
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

      <div className="mt-5 overflow-hidden rounded-3xl border border-seoulBlue bg-white shadow-sm">
        <div className="bg-seoulBlue px-5 py-3 text-white">
          <p className="text-xs font-bold uppercase tracking-wide opacity-85">추천 상담 분야</p>
          <h3 className="mt-1 text-2xl font-black">{specialtyLabel}</h3>
        </div>
        <div className="grid gap-0 md:grid-cols-[1fr_1fr]">
          <div className="border-b border-blue-100 bg-seoulBlueSoft p-5 md:border-b-0 md:border-r">
            <p className="text-xs font-bold text-seoulBlue">추출 근거</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{specialtyReason}</p>
          </div>
          <div className="bg-white p-5">
            <p className="text-xs font-bold text-slate-500">입력한 고민</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{summarizeConcern(userInput)}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {counselors.map((counselor) => {
          const visual = getCounselorVisual(counselor);

          return (
            <article
              key={counselor.id}
              className={`flex min-h-full flex-col rounded-3xl border p-5 shadow-sm ${visual.identityClass}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl font-black shadow-sm ${visual.avatarClass}`}
                >
                  {visual.avatar}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-ink">{counselor.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-600">{counselor.type}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                    {visual.keyQuestion}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {counselor.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 text-xs font-bold ${visual.badgeClass}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 rounded-2xl bg-white/80 p-3 text-sm font-semibold leading-6 text-slate-700">
                {visual.summary}
              </p>

              <div className="mt-4 rounded-3xl bg-white p-4 shadow-sm">
                <p className="mb-3 text-sm font-bold text-ink">미리보기 응답</p>
                <ul className="space-y-2">
                  {visual.previewLines.map((line) => (
                    <li key={line} className="flex gap-2 text-sm leading-6 text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-2xl border border-white bg-white/80 px-4 py-3 text-sm font-bold leading-6 text-ink">
                “{visual.keyPhrase}”
              </div>

              <button
                type="button"
                onClick={() => onSelect(counselor)}
                className={`mt-5 rounded-2xl px-4 py-3 text-sm font-bold text-white shadow-md transition ${visual.buttonClass}`}
              >
                {counselor.name} 스타일로 상담 진행
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
