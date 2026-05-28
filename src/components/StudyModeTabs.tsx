import type { StudyMode } from '../types';

interface StudyModeTabsProps {
  mode: StudyMode;
  onChange: (mode: StudyMode) => void;
}

const modes = [
  {
    id: 'baseline',
    label: '기본 예약형',
    title: 'Baseline',
    description: '일정과 기본 상담사 정보만 보고 신청합니다.',
  },
  {
    id: 'preview',
    label: '스타일 미리보기형',
    title: 'Proposed',
    description: '고민 기반 추천과 상담사 응답 스타일을 비교합니다.',
  },
] satisfies Array<{
  id: StudyMode;
  label: string;
  title: string;
  description: string;
}>;

export default function StudyModeTabs({ mode, onChange }: StudyModeTabsProps) {
  return (
    <section className="mb-5 rounded-3xl bg-white/90 p-3 shadow-soft ring-1 ring-slate-100">
      <div className="grid gap-3 md:grid-cols-2">
        {modes.map((item) => {
          const isActive = mode === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={`rounded-2xl border p-4 text-left transition ${
                isActive
                  ? 'border-seoulBlue bg-seoulBlueSoft shadow-sm'
                  : 'border-slate-200 bg-white hover:border-seoulBlue/40'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-extrabold ${
                    isActive ? 'bg-seoulBlue text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`h-3 w-3 rounded-full ${
                    isActive ? 'bg-seoulBlue' : 'bg-slate-300'
                  }`}
                />
              </div>
              <h2 className="mt-3 text-lg font-extrabold text-ink">{item.label}</h2>
              <p className="mt-1 text-sm font-medium leading-6 text-slate-600">{item.description}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
