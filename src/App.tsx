import { useState } from 'react';
import CalendarStep from './components/CalendarStep';
import CompleteStep from './components/CompleteStep';
import CounselorPreviewStep from './components/CounselorPreviewStep';
import MockChatStep from './components/MockChatStep';
import StepIndicator from './components/StepIndicator';
import UserInputStep from './components/UserInputStep';
import type { ChatMessage, Counselor, Step } from './types';
import { analyzeConcernSpecialty, getCounselorsForConcern } from './utils/concernAnalysis';
import { generateFollowUpResponse, generateMockResponse } from './utils/mockResponses';

const createMessageId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userInput, setUserInput] = useState('');
  const [selectedCounselor, setSelectedCounselor] = useState<Counselor | null>(null);
  const [mockChatMessages, setMockChatMessages] = useState<ChatMessage[]>([]);
  const [completed, setCompleted] = useState(false);
  const concernSpecialty = analyzeConcernSpecialty(userInput);
  const recommendedCounselors = getCounselorsForConcern(userInput);

  const handleSelectCounselor = (counselor: Counselor) => {
    setSelectedCounselor(counselor);
    setMockChatMessages([
      {
        id: createMessageId(),
        role: 'student',
        content: userInput,
      },
      {
        id: createMessageId(),
        role: 'counselor',
        content: generateMockResponse(counselor.id, userInput),
      },
    ]);
    setCurrentStep(4);
  };

  const handleAddTurn = (message: string) => {
    if (!selectedCounselor) return;

    const turnCount = Math.max(0, mockChatMessages.filter((item) => item.role === 'student').length - 1);
    const studentMessage: ChatMessage = {
      id: createMessageId(),
      role: 'student',
      content: message.trim(),
    };
    const counselorMessage: ChatMessage = {
      id: createMessageId(),
      role: 'counselor',
      content: generateFollowUpResponse(selectedCounselor.id, message, turnCount),
    };

    setMockChatMessages((messages) => [...messages, studentMessage, counselorMessage]);
  };

  const handleSubmit = () => {
    setCompleted(true);
    setCurrentStep(5);
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setUserInput('');
    setSelectedCounselor(null);
    setMockChatMessages([]);
    setCompleted(false);
  };

  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-100">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-seoulOrange">
                SeoulTech Career Match
              </p>
              <h1 className="mt-2 text-4xl font-black text-ink sm:text-5xl">과기대 진로 매치</h1>
              <p className="mt-2 text-lg font-semibold text-seoulBlue">SeoulTech Career Match</p>
            </div>
            <div className="max-w-xl rounded-3xl bg-seoulOrangeSoft p-5 text-sm leading-6 text-slate-700">
              진로 고민을 입력하고 상담사별 응답 스타일을 미리 경험한 뒤, 가장 잘 맞는 상담사를
              선택하는 커리어 상담 매칭 프로토타입입니다.
            </div>
          </div>
        </header>

        <div className="mb-6">
          <StepIndicator currentStep={currentStep} />
        </div>

        {currentStep === 1 && (
          <CalendarStep
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onSelectDate={setSelectedDate}
            onSelectTime={setSelectedTime}
            onNext={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <UserInputStep
            userInput={userInput}
            onChange={setUserInput}
            onBack={() => setCurrentStep(1)}
            onNext={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 3 && (
          <CounselorPreviewStep
            counselors={recommendedCounselors}
            specialtyLabel={concernSpecialty.label}
            specialtyReason={concernSpecialty.reason}
            userInput={userInput}
            onBack={() => setCurrentStep(2)}
            onSelect={handleSelectCounselor}
          />
        )}

        {currentStep === 4 && selectedCounselor && (
          <MockChatStep
            counselor={selectedCounselor}
            messages={mockChatMessages}
            onBack={() => setCurrentStep(3)}
            onAddTurn={handleAddTurn}
            onSubmit={handleSubmit}
          />
        )}

        {completed && currentStep === 5 && selectedCounselor && (
          <CompleteStep
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            counselor={selectedCounselor}
            userInput={userInput}
            onRestart={handleRestart}
          />
        )}
      </div>
    </main>
  );
}
