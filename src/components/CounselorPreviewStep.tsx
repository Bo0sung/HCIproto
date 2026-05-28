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
  return compact.length > 80 ? `${compact.slice(0, 80)}...` : compact;
};

const getCounselorVisual = (counselor: Counselor): CounselorVisual => {
  if (counselor.approachType === 'practical') {
    return {
      avatar: '✓',
      identityClass: 'border-blue-200 bg-blue-50',
      avatarClass: 'bg-blue-100 text-blue-700',
      badgeClass: 'bg-blue-100 text-blue-700',
      buttonClass: 'bg-seoulBlue hover:bg-blue-700',
      summary: '현재 준비 상태를 객관적으로 점검하고, 바로 보완할 과제를 정리합니다.',
      keyQuestion: 'What should I prepare right now?',
      keyPhrase: '현실적인 준비 상태 점검',
      previewLines: [
        '학점, 포트폴리오, 프로젝트 경험을 체크합니다.',
        '취업과 대학원 준비 조건을 항목별로 비교합니다.',
        '이번 주에 보완할 구체적인 과제를 정합니다.',
      ],
    };
  }

  return {
    avatar: '♡',
    identityClass: 'border-orange-200 bg-orange-50',
    avatarClass: 'bg-orange-100 text-orange-700',
    badgeClass: 'bg-orange-100 text-orange-700',
    buttonClass: 'bg-seoulOrange hover:bg-orange-500',
    summary: '불안과 압박감을 먼저 다루고, 왜 선택이 어렵게 느껴지는지 함께 살펴봅니다.',
    keyQuestion: 'Why does this feel difficult for me right now?',
    keyPhrase: '불안한 마음부터 정리',
    previewLines: [
      '지금의 불안과 자신감 저하를 자연스럽게 인정합니다.',
      '실패에 대한 두려움과 선택 압박을 천천히 풀어봅니다.',
      '나에게 맞는 선택 기준을 부드럽게 찾아갑니다.',
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
            입력한 고민에서 중요한 분야를 추출해 해당 분야를 전문으로 하는 상담사 두 명을
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

      <div className="mt-5 rounded-3xl border border-blue-100 bg-seoulBlueSoft p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-seoulBlue">
              추출된 상담 분야
            </p>
            <h3 className="mt-1 text-xl font-black text-ink">{specialtyLabel}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">{specialtyReason}</p>
          </div>
          <div className="rounded-2xl bg-white/80 px-4 py-3 text-sm leading-6 text-slate-700 md:max-w-md">
            {summarizeConcern(userInput)}
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
