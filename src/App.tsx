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
