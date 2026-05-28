import { useState } from 'react';
import type { ChatMessage, Counselor } from '../types';

interface MockChatStepProps {
  counselor: Counselor;
  messages: ChatMessage[];
  onBack: () => void;
  onAddTurn: (message: string) => void;
  onSubmit: () => void;
}

export default function MockChatStep({
  counselor,
  messages,
  onBack,
  onAddTurn,
  onSubmit,
}: MockChatStepProps) {
  const [message, setMessage] = useState('');
  const canContinue = message.trim().length > 0;

  const handleAddTurn = () => {
    if (!canContinue) return;
    onAddTurn(message);
    setMessage('');
  };

  return (
    <section className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-slate-100 sm:p-6">
      <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-start">
        <div>
          <p className="text-sm font-extrabold text-seoulOrange">Step 4</p>
          <h2 className="mt-1 text-2xl font-extrabold text-ink">
            {counselor.name}와 모의 상담
          </h2>
          <p className="mt-2 max-w-3xl text-sm font-medium leading-6 text-slate-600">
            바로 신청해도 되고, 아래 입력창으로 상담사의 응답 스타일을 조금 더 확인해도 됩니다.
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

      <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-100 p-3 sm:p-4">
        <div className="max-h-[430px] space-y-4 overflow-y-auto pr-1">
          {messages.map((chatMessage) => {
            const isStudent = chatMessage.role === 'student';

            return (
              <div
                key={chatMessage.id}
                className={`flex ${isStudent ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[90%] rounded-3xl px-5 py-4 shadow-sm md:max-w-[76%] ${
                    isStudent
                      ? 'bg-seoulBlue text-white'
                      : 'border border-blue-100 border-l-4 border-l-seoulBlue bg-white text-slate-800 ring-1 ring-blue-50'
                  }`}
                >
                  <p
                    className={`mb-2 inline-flex rounded-full px-3 py-1 text-xs font-extrabold ${
                      isStudent
                        ? 'bg-white/15 text-white'
                        : 'bg-seoulBlueSoft text-seoulBlue'
                    }`}
                  >
                    {isStudent ? '학생' : counselor.name}
                  </p>
                  <p
                    className={`whitespace-pre-line ${
                      isStudent
                        ? 'text-sm font-semibold leading-6'
                        : 'text-[15px] font-bold leading-7 text-slate-800'
                    }`}
                  >
                    {chatMessage.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 rounded-3xl border border-slate-200 p-4">
        <label htmlFor="chat-message" className="text-sm font-extrabold text-ink">
          추가로 묻고 싶은 내용을 입력하세요
        </label>
        <div className="mt-3 flex flex-col gap-3 md:flex-row">
          <input
            id="chat-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') handleAddTurn();
            }}
            className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-800 outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-seoulBlue focus:bg-white focus:ring-4 focus:ring-blue-100"
            placeholder="예: 지금부터 무엇을 준비하면 좋을까요?"
          />
          <button
            type="button"
            disabled={!canContinue}
            onClick={handleAddTurn}
            className="rounded-2xl bg-seoulOrange px-5 py-3 font-extrabold text-white shadow-md transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            모의 상담 계속하기
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-3xl bg-seoulBlueSoft p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold leading-6 text-slate-700">
          상담사 스타일이 맞다면 추가 대화 없이 바로 신청할 수 있습니다.
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
