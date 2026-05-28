import type { Step, StudyMode } from '../types';

interface StepIndicatorProps {
  currentStep: Step;
  mode: StudyMode;
}

const previewSteps = ['일정 선택', '고민 입력', '상담사 비교', '모의 상담', '신청 완료'] as const;
const baselineSteps = ['일정 선택', '고민 입력', '상담사 선택', '신청 확인', '신청 완료'] as const;

export default function StepIndicator({ currentStep, mode }: StepIndicatorProps) {
  const steps = mode === 'preview' ? previewSteps : baselineSteps;

  return (
    <div className="rounded-3xl bg-white/85 p-4 shadow-soft ring-1 ring-slate-100">
      <div className="grid gap-3 sm:grid-cols-5">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isDone = currentStep > stepNumber;

          return (
            <div
              key={label}
              className={`flex items-center gap-3 rounded-2xl border px-3 py-3 transition ${
                isActive
                  ? 'border-seoulBlue bg-seoulBlueSoft text-seoulBlue'
                  : isDone
                    ? 'border-seoulOrange/40 bg-seoulOrangeSoft text-seoulOrange'
                    : 'border-slate-200 bg-white text-slate-500'
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  isActive
                    ? 'bg-seoulBlue text-white'
                    : isDone
                      ? 'bg-seoulOrange text-white'
                      : 'bg-slate-100 text-slate-500'
                }`}
              >
                {stepNumber}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide">Step {stepNumber}</p>
                <p className="text-sm font-bold">{label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
